import { KeycloakConfig } from "keycloak-angular";

let keycloakConfig: KeycloakConfig = {
    url: 'http://35.184.252.53:8080/auth',
    realm: 'rasweb',
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
