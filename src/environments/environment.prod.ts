import { KeycloakConfig } from "keycloak-angular";

let keycloakConfig: KeycloakConfig = {
    url: 'https://rasprod.scaleablecloud.com/keycloak/auth/',
    realm: 'example',
    clientId: 'rasweb'



};


export const environment = {
    production: true,
    hmr       : false,
    dev:false,
    apiUrl: 'https://rasprod.scaleablecloud.com/api/raservice/v1',
    
    assets: {
        dotaImages:
            'https://cdn-keycloak-angular.herokuapp.com/assets/images/dota-heroes/'
    },
    apis: { dota: 'http://localhost:3000' },
    keycloak: keycloakConfig
};
