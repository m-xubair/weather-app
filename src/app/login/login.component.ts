import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from "@angular/forms";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: any;

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.createlogInForm();
  }

  // create login form
  createlogInForm() {
    this.loginForm = this.fb.group({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required])
    });
  }

  // login user method
  login() {
    // clear the error message
    this.errorMessage = "";

    const credentials = {
      email: this.email.value,
      password: this.password.value
    };

    if (this.authService.login(credentials)) {
      localStorage.setItem("user", JSON.stringify(credentials));
      this.router.navigate(["/weather-summary"]);
    } else {
      this.errorMessage = "Invalid Credentials!";
    }
  }

  // email address getter
  get email() {
    return this.loginForm.get("email");
  }

  // password getter
  get password() {
    return this.loginForm.get("password");
  }
}
