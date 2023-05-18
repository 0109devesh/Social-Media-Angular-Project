import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts.component';
import { DisplayAllPostsComponent } from './display-all-posts/display-all-posts.component';

const routes: Routes = [
  {
    path: '',
    component: PostsComponent,
    children: [
      { path: '', component: DisplayAllPostsComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsRoutingModule {}
