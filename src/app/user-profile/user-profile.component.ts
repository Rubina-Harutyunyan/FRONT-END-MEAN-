import {Component, OnInit} from '@angular/core';
import {UsersService} from "../servicies/users.service";
import {ActivatedRoute} from "@angular/router";
import {IUser} from "../models/iuser";
import {AuthService} from "../servicies/auth.service";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  // public user: IUser;
  public user;
  public userId;

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe((res) => this.userId = res.id);
    this.usersService.getUserById(this.userId).subscribe(res => {
      this.user = res;
    })
  }

  signOut(){
   this.authService.signOut();
  }
}
