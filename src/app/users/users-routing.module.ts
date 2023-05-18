import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { LoginComponent } from './login/login.component';
import { PostsComponent } from '../posts/posts.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [{ path: '', component: LoginComponent }],
  },
  {
    path: 'user/:userId/posts',
    component: PostsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
