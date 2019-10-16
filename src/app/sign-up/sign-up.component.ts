import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {UsersService} from "../servicies/users.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  public registerUser: FormGroup;

  constructor(
    private http: HttpClient,
    private usersService: UsersService,
    private router: Router
  ) {
  }

  ngOnInit() {

    this.registerUser = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern('^(0|[A-Z])[a-zA-Z\\s]+$')]),
      surname: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern('^(0|[A-Z])[a-zA-Z\\s]+$')]),
      userName: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(5),Validators.maxLength(18), Validators.pattern('[a-zA-Z\\S]{3,}[0-9]*')])
    })
  }

  onSubmit() {

    this.usersService.registerUser(this.registerUser.value).subscribe(res => {
      this.usersService.setRole(res['roleName']);
      this.usersService.setToken(res['token']);
      this.registerUser.reset();

      const decodedToken = this.usersService.getDecodedAccessToken(res['token']);

      this.usersService.setRole(decodedToken.roleName);

      const roleName = localStorage.getItem('role');

      if (roleName == "user") {
        this.router.navigate(['/userProfile', decodedToken.userId]);
      }

    }, err => {
      console.log(err);
    });
  }
}
