// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// Add here your keycloak setup infos
// let keycloakConfig: KeycloakConfig = {
//     url: 'http://localhost:8081/auth',
//     realm: 'example',
//     clientId: 'my-app'
// };
export const environment = {
    apiUrl: 'http://localhost:8080/api/raservice/v1',


    hmr: false,
    secure: false,
    production: false
}