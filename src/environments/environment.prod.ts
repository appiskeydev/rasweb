import { KeycloakConfig } from "keycloak-angular";

// let keycloakConfig: KeycloakConfig = {
//     url: 'http://localhost:8083/auth',
//     realm: 'example',
//     clientId: 'rasweb'



// };


export const environment = {
    production: true,
    hmr       : false,
    dev:false,
    apiUrl: 'http://rasprod.scaleablecloud.com/api/raservice/v1',
    
    // assets: {
    //     dotaImages:
    //         'https://cdn-keycloak-angular.herokuapp.com/assets/images/dota-heroes/'
    // },
    // apis: { dota: 'http://localhost:3000' },
    // keycloak: keycloakConfig
};
