import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private router: Router) {}

  // login
  login(credentials) {
    return credentials.password === "test1234" ? true : false;
  }

  // log out
  logout() {
    localStorage.removeItem("user");
    this.router.navigate(["/login"]);
  }

  // check if user is loged in
  isLoggedIn() {
    let user = JSON.parse(localStorage.getItem("user"));
    return user ? true : false;
  }
}
