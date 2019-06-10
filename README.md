# Build and Docker Push
```
ng build --prod
docker build -t khawarhere/rasweb .
docker push khawarhere/rasweb
```

# Docker Pull and Run
```
docker pull khawarhere/rasweb
docker run -p 80:80 --rm rasweb
```