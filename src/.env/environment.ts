// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.



// let keycloakConfig: KeycloakConfig = {
//     url: 'http://localhost:8083/auth',
//     realm: 'example',
//     clientId: 'rasweb'



// };



export const environment = {
    apiUrl: 'http://localhost:8080/api/raservice/v1',

    // apiUrl: 'http://ras.scaleablecloud.com/api/raservice/v1',

    production: false,
    hmr: false,
    dev: false,
    secure: false,

    // assets: {
    //     dotaImages:
    //         'https://cdn-keycloak-angular.herokuapp.com/assets/images/dota-heroes/'
    // },
    // apis: { dota: 'http://localhost:3000' },
    // keycloak: keycloakConfig
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
