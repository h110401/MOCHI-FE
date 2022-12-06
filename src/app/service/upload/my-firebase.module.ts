import {NgModule} from '@angular/core';
import {environment} from "../../../environments/environment";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {AngularFireModule} from "@angular/fire/compat";

const config = environment.firebaseConfig

@NgModule({
  imports: [
    AngularFireModule.initializeApp(config),
    AngularFireStorageModule
  ],
  exports: [
    AngularFireModule,
    AngularFireStorageModule
  ]
})
export class MyFirebaseModule {
}
