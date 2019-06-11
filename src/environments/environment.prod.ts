import { KeycloakConfig } from 'keycloak-angular';

// Add here your keycloak setup infos
let keycloakConfig: KeycloakConfig = {
    url: 'https://rasauth.scaleablecloud.com/auth',
    realm: 'example',
    clientId: 'prod_raservice'
};
export const environment = {
    production: true,
    hmr: false,
    dev: false,
    apiUrl: 'http://34.96.103.132/api/raservice/v1',

    assets: {
        dotaImages:
            'https://cdn-keycloak-angular.herokuapp.com/assets/images/dota-heroes/'
    },
    apis: { dota: 'http://localhost:3000' },
    keycloak: keycloakConfig
};