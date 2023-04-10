import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from '../shared/services/user-auth.service';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  hide: boolean = true;

  constructor(private userService: UserService,
    private userAuthService: UserAuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  get username(): FormControl {
    return this.form.get('username') as FormControl;
  }

  get password(): FormControl {
    return this.form.get('password') as FormControl;
  }

  login() {
    if (this.form.valid) {
      //this.submitEM.emit(this.form.value);
      this.userService.login(this.username.value, this.password.value).subscribe((result: any) => {
        const roles = result.user.roles.map((role: any) => role.name);

        this.userAuthService.setRoles(roles.join(','));
        this.userAuthService.setToken(result.jwtToken);

        if(roles.includes('ADMIN')){
          this.router.navigate(['/admin']);
        } else if (roles.includes('USER')) {
          this.router.navigate(['/user']);
        } else {
          this.router.navigate(['/agent']);
        }

      },
      (error) => {
        console.log(error);
      }
      )
    }
  }

  //@Input() error: string | null | undefined;

  //@Output() submitEM = new EventEmitter();

}
