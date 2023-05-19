import { Component } from '@angular/core';
import { PostsService } from '../posts.service';
import { Post } from '../post.model';
import { HttpClient } from '@angular/common/http';
import { UsersService } from 'src/app/users/users.service';
import { User } from 'src/app/users/user.model';


@Component({
  selector: 'app-display-all-posts',
  templateUrl: './display-all-posts.component.html',
  styleUrls: ['./display-all-posts.component.scss'],
})
export class DisplayAllPostsComponent {
 
  constructor(
    private postService: PostsService,
    private http: HttpClient,
    private userService: UsersService
  ) {}

  posts!: Post[];

  user!: User;

  username: any;

  userId!: number;


  ngOnInit() {
    // Retrieve the userId from the URL
    this.userId = parseInt(window.location.pathname.split('/')[2]);

    this.getUserById();
  
     this.getPosts();

  }

  getUserById() {
    this.userService.getUserById(this.userId).subscribe(
      (response: any) => {

          this.user = response;

        this.username = this.user.username;

    //    console.log(this.user.username);

      },
      (error) => {
        console.log(error);
      }
    );
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

    console.log('postId ' + postId);
    console.log('userId ' + this.userId);

 // Toggle the isLiked boolean value
 post.isLiked = !post.isLiked;

    const newLikePost = {
      post: {
        postId: postId,
      },
      user: {
        userId: this.userId,
      },
    };

    console.log(newLikePost);

    const likeRequest = {
      postId: postId,
      userId: this.userId,
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
