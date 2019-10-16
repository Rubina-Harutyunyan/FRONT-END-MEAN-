import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UsersService} from "../servicies/users.service";
import {Router} from "@angular/router";
import {AuthService} from "../servicies/auth.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  public loginUser: FormGroup;

  constructor(
    private usersService: UsersService,
    private router: Router,
    private authService: AuthService
  ) {
  }

  ngOnInit() {

    this.loginUser = new FormGroup({
      userName: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('')
    })
  }

   login() {
    this.usersService.login(this.loginUser.value).subscribe(res =>  {

     this.usersService.setToken(res['token']);

      const decodedToken = this.usersService.getDecodedAccessToken(res['token']);

      this.usersService.setRole(decodedToken.roleName);

      const roleName = localStorage.getItem('role');

      if (roleName == "user") {
        this.router.navigate(['/userProfile', decodedToken.userId]);
      } else {

        this.router.navigate(['/admin', decodedToken.userId]);
      }
    }, err => {
      console.log(err);
    })
  }

}
