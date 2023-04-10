import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';

import { IUser } from './../shared/model/IUser';
import { PelerinsService } from './../shared/services/pelerins.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{
  gridColumns = 4;
  users$: Observable<IUser[]> = new Observable();
  infos: any[] = [];


  constructor(private pelerinsService: PelerinsService, private dialog: MatDialog) { }


  ngOnInit(): void {
    this.users$ = this.pelerinsService.getAllUsers();
    this.infos = this.menuInfos();
  }

  showIsPassport(user: IUser): string {
    return user.hasIdentity ? 'Oui': 'Non';
  }

  menuInfos(): any[]{
    return [ {
      libelle: 'ajouter',
      icon: 'fa-solid fa-user-plus'
    }
  ];
  }

}
