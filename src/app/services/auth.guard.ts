import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  // auth guard for allowing user to navigate differents routes if he is loged in.
  canActivate() {
    let authorize = this.authService.isLoggedIn();

    if (!authorize) {
      this.router.navigate(["/login"]);
    }

    return authorize;
  }
}
