import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';
import { Routes } from '@angular/router';
const appRoutes: Routes = [
  {path: '', children: [
    {path: 'create', component: UserEditComponent},
    {path: ':id/edit', component: UserEditComponent},
    {path: ':id/delete', component: UserDeleteComponent},
    {path: '', component: UserListComponent}
  ]}
];


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class UsersRoutingModule { }

