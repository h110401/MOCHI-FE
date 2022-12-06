import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AuthGuard} from "./security/auth.guard";
import {Error404Component} from "./error.404/error.404.component";
import {DefaultComponent} from "./home/default/default.component";

const routes: Routes = [
  {
    path: '', component: HomeComponent, canActivate: [AuthGuard], children: [
      {path: '', component: DefaultComponent},
      {path: 'error', component: Error404Component},
      {path: 'chat', loadChildren: () => import('./chat/chat.module').then(m => m.ChatModule)},
      {path: 'profile/:username', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)},
      {path: 'search/:search', loadChildren: () => import('./search/search.module').then(m => m.SearchModule)}
    ]
  },
  {path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
  {path: 'signup', loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
