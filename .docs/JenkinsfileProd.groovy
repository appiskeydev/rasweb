pipeline {
    environment {
        registryCredential = 'dockerhub'
        PROJECT_ID = 'rasprodak'
        ZONE = 'us-central1-a'
        CLUSTER_NAME = 'ras-cluster'
        IMAGE_NAME = 'rasweb'
        REGISTRY = "khawarhere/$IMAGE_NAME"
        IMAGE_VERSION = getShortCommitHash()
    }
    agent any
    stages {
        stage('Cloning Git') {
            steps {
                git 'https://github.com/appiskeydev/rasweb.git'
                sh 'git fetch'
                sh 'git checkout prod'
                sh 'git pull origin prod'
            }
        }
        stage('Build Artifact') {
            steps {
                //sh 'whoami'
                sh 'rm -rf dist'
                sh 'sudo npm install'
                sh 'sudo ng build --configuration=production'
            }
        }
        stage('Building Docker image') {
            steps {
                script {
                    sh("docker build -t $REGISTRY:$IMAGE_VERSION .")
                }
            }
        }
        stage('Deploy Docker Image') {
            steps {
                script {
                    docker.withRegistry('', registryCredential) {
                        sh("docker push $REGISTRY:$IMAGE_VERSION")
                    }
                }
            }
        }
        stage('Remove Unused docker image') {
            steps {
                sh "docker rmi $REGISTRY:$IMAGE_VERSION"
            }
        }
        stage('Deploy on Dev Server') {
            steps {
                withCredentials([file(credentialsId: 'JENKINS_PROD', variable: 'GC_KEY')]) {
                    sh("gcloud auth activate-service-account --key-file=${GC_KEY}")
                    sh("gcloud container clusters get-credentials $CLUSTER_NAME --zone $ZONE --project $PROJECT_ID")
                    sh("cat .docs/deployment.yaml | sed -e 's/KVERSION/${env.IMAGE_VERSION}/g' -e 's/KAPP_NAME/$IMAGE_NAME/g' | kubectl apply -f-")
                }
            }
        }
    }
}

def getShortCommitHash() {
    return 'p' + sh(returnStdout: true, script: "git log -n 1 --pretty=format:'%h'").trim()
}