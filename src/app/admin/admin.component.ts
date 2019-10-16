import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UsersService} from "../servicies/users.service";
import {AuthService} from "../servicies/auth.service";
import {NgxSmartModalService} from "ngx-smart-modal";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public user;
  public userId;
  public form: FormGroup;
  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute,
    private authService: AuthService,
    private modal: NgxSmartModalService
  ) {
  }

  ngOnInit() {

    this.route.params.subscribe((res) => this.userId = res.id);
    this.usersService.getUserById(this.userId).subscribe(res => {
      this.user = res;
    });

    this.form = new FormGroup({
      name: new FormControl(''),
      surname: new FormControl(' ')
    })

  }

  save() {
    console.log(this.form.value);
  }

  signOut(){
    this.authService.signOut();
  }

}
