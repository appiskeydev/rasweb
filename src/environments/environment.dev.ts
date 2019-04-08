import { KeycloakConfig } from 'keycloak-angular';

// Add here your keycloak setup infos
let keycloakConfig: KeycloakConfig = {
    url: 'https://rasauth.scaleablecloud.com/auth',
    realm: 'example',
    clientId: 'dev_raservice'
};
export const environment = {

    apiUrl: 'http://rasdev.scaleablecloud.com/api/raservice/v1',

    production: false,
    dev: true,
    hmr: false,
    secure: false,

    assets: {
        dotaImages:
            'https://cdn-keycloak-angular.herokuapp.com/assets/images/dota-heroes/'
    },
    apis: { dota: 'http://localhost:3000' },
    keycloak: keycloakConfig
};
