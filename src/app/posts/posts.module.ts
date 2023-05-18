import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { DisplayAllPostsComponent } from './display-all-posts/display-all-posts.component';
import { SharedModule } from '../shared/shared.module';
import { CreatePostComponent } from './create-post/create-post.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [PostsComponent, DisplayAllPostsComponent, CreatePostComponent],
  imports: [CommonModule, PostsRoutingModule, SharedModule, HttpClientModule],
})
export class PostsModule {}
