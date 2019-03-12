// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCk6ebIa3HMQjTydzo-gS10mTLWxX2mNVg',
    authDomain: 'practice-4eea4.firebaseapp.com',
    databaseURL: 'https://practice-4eea4.firebaseio.com',
    projectId: 'practice-4eea4',
    storageBucket: 'practice-4eea4.appspot.com',
    messagingSenderId: '697255292974'
  },
  map: {
      apiKey: 'AIzaSyCd6J1_1vKsKoq7cP5LBBv28TBIZ1EaBwk',
      libraries: ['geometry']
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
