import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../user.model';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  user!: User[];
  username!: string;
  password!: string;

  constructor(private authService: AuthService ,
    private router: Router ) { }

  login() {
    console.log(this.username, this.password, this.authService);

    this.authService.login(this.username, this.password).subscribe(
      (user) => {
        console.log('Login successful');
        console.log('userId: ' + user.userId);
        console.log('username: ' + user.username);

         // Dynamically change the user ID in the URL
      const userId = user.userId;
      const postUrl = `user/${userId}/posts`;

      // Redirect to the post component with the updated URL
      this.router.navigateByUrl(postUrl);

      },
      (error) => {
        console.log('Login failed', error);
      }
    );
  }
}
