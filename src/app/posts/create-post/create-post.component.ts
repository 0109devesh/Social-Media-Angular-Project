import { Component } from '@angular/core';
import { PostsService } from '../posts.service';
import { UsersService } from 'src/app/users/users.service';
import { User } from 'src/app/users/user.model';


@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'],
})
export class CreatePostComponent {
  newPost: any = {};
  isInputBlank = false;

  user!: User;
  username: any;
  userId!: number;

  constructor(private postService: PostsService , private userService : UsersService) { }

  ngOnInit() {
    // Retrieve the userId from the URL
    this.userId = parseInt(window.location.pathname.split('/')[2]);

    this.getUserById();
  
  }

 

  getUserById() {
    this.userService.getUserById(this.userId).subscribe(
      (response: any) => {

          this.user = response;

        this.username = this.user.username;

        console.log(this.user.username);

      },
      (error) => {
        console.log(error);
      }
    );
  }



  createPost() {
    if (Object.keys(this.newPost).length === 0) {
      this.isInputBlank = true;
      return;
    }

    // Retrieve the userId from the URL
    const userId = window.location.pathname.split('/')[2];
    console.log(userId);

    // Assign the userId to the newPost object
    this.newPost.user = {
      userId: userId
    };

    this.postService.createPost(this.newPost).subscribe(
      (response: any) => {
        console.log(response);
        window.location.reload();
        alert('Post created successfully!');
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
