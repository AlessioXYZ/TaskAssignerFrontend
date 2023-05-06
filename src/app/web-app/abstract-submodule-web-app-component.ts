import {Directive, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {UserInterface} from "../network/models/user";
import {UserFactoryService} from "../network/services/user-factory.service";
import {AbstractUserService, UserTypes} from "../network/services/abstract-user.service";
import {NetworkService} from "../network/network.service";

@Directive()
export abstract class AbstractSubmoduleWebAppComponent implements OnInit {
  protected abstract rightUserType: UserTypes;

  constructor(private router: Router, private snackBar: MatSnackBar, private networkService: NetworkService
  ) {

  }

  getRightUser(user: UserInterface) {
    let userFactoryService = new UserFactoryService(this.router, this.networkService);
    let userType = <UserTypes>user.type;
    let rightUser = userFactoryService.getUserByType(userType);

    return rightUser;
  }

  openSnackBar() {
    this.snackBar.open('Accesso negato. Sei stato reindirizzato alla tua pagina dedicata', 'Chiudi', {});
  }

  ngOnInit(): void {
    let user: UserInterface = JSON.parse(localStorage.getItem('user') ?? '{}');
    let rightUser = this.getRightUser(user);


    if (user.type !== this.rightUserType) {
      if (rightUser != undefined)
        rightUser.redirect().then(r => this.openSnackBar());
      else
        this.router.navigate(['/auth']).then(r => this.openSnackBar());
    }
  }
}
