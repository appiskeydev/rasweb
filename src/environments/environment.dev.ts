import { KeycloakConfig } from "keycloak-angular";

let keycloakConfig: KeycloakConfig = {
    url: 'http://localhost:8083/auth',
    realm: 'example',
    clientId: 'rasweb'



};


export const environment = {
    // apiUrl: 'http://localhost:8080/api/raservice/v1',

    apiUrl: 'http://rasdev.scaleablecloud.com/api/raservice/v1',

    production:false,
    dev: true,
    hmr       : false,
    secure : false,
    assets: {
        dotaImages:
            'https://cdn-keycloak-angular.herokuapp.com/assets/images/dota-heroes/'
    },
    apis: { dota: 'http://localhost:3000' },
    keycloak: keycloakConfig
};