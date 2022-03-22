import { AuthService } from './../../services/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  form = this.fb.group({
    email:[{value: 'tour@f.heroes', disabled: true}, [Validators.email, Validators.required]],
    password: ['', [Validators.required, Validators.minLength(10)]]
  })

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {

  }

  onSubmit(): void{
    if(this.form.valid){
      this.authService.login(this.form.value);
    }
  }

}
