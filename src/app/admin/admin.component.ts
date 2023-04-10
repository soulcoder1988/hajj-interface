import { SessionAddDialogComponent } from './session-add-dialog/session-add-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { ISession } from '../shared/model/ISession';
import { SessionType } from '../shared/enum/session-type.enum';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  session: ISession;
  name: string;
  sessionType: SessionType;
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openSessionAddDialog() {
    const dialogRef = this.dialog.open(SessionAddDialogComponent,
      { width: '400px',
        height: '300px',
        data: this.session
      });

    dialogRef.afterClosed().subscribe((result: ISession) => {
      console.log("======================== ", result);
    })

  }

}
