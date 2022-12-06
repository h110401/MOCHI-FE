import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProfileComponent} from "./profile.component";
import {FriendListComponent} from "./friend-list/friend-list.component";

const routes: Routes = [
  {
    path: '', component: ProfileComponent, children: [
      {path: 'friend', component: FriendListComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule {
}
