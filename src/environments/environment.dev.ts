import { KeycloakConfig } from "keycloak-angular";

let keycloakConfig: KeycloakConfig = {
    url: 'https://rasdev.scaleablecloud.com/auth',
    realm: 'example',
    clientId: 'rasweb'



};


export const environment = {
    // apiUrl: 'http://localhost:8080/api/raservice/v1',

    apiUrl: 'https://rasdev.scaleablecloud.com/api/raservice/v1',

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