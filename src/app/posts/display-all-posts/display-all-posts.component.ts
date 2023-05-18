import { Component } from '@angular/core';
import { PostsService } from '../posts.service';
import { Post } from '../post.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-display-all-posts',
  templateUrl: './display-all-posts.component.html',
  styleUrls: ['./display-all-posts.component.scss'],
})
export class DisplayAllPostsComponent {
  constructor(private postService: PostsService, private http: HttpClient) {}

  posts!: Post[];

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.postService.getPosts().subscribe(
      (response: any) => {
        this.posts = response;
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  

  likePost(post: Post) {
    
    // Get the postId from the post object
    const postId = post.postId;
    
    // Retrieve the userId from the URL
    const userId = window.location.pathname.split('/')[2];

    console.log('postId ' + postId);
    console.log('userId ' + userId);

    const newLikePost = {
      post: {
        postId: postId,
      },
      user: {
        userId: userId,
      },
    };

    console.log(newLikePost);

    const likeRequest = {
      postId: postId, 
      userId: userId, 
    };

    console.log(likeRequest);

    this.http
      .post('http://localhost:8080/likes', likeRequest)
      .subscribe((response) => {
        console.log(response);
        window.location.reload();
      });


  }
}
