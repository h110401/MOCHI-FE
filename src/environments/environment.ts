// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API: 'http://localhost:8080',
  API_SOCKET: 'http://localhost:1104',
  firebaseConfig: {
    apiKey: "AIzaSyB3Z7NO1GCutG3VV7RbUTQEuKrnUoIUdp4",
    authDomain: "mochi-3732d.firebaseapp.com",
    projectId: "mochi-3732d",
    storageBucket: "mochi-3732d.appspot.com",
    messagingSenderId: "434125046750",
    appId: "1:434125046750:web:8ee67a388c96283e69134f",
    measurementId: "G-G559SFK0Q0"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
