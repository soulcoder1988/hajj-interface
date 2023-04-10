import { ISession } from './../../shared/model/ISession';
import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatLegacyAutocomplete as MatAutocomplete, MatLegacyAutocompleteSelectedEvent as MatAutocompleteSelectedEvent } from '@angular/material/legacy-autocomplete';
import { MatLegacyChipInputEvent as MatChipInputEvent } from '@angular/material/legacy-chips';
import { map, Observable, startWith } from 'rxjs';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { SessionType } from 'src/app/shared/enum/session-type.enum';
import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA, MatLegacyDialogRef as MatDialogRef } from '@angular/material/legacy-dialog';

@Component({
  selector: 'app-session-add-dialog',
  templateUrl: './session-add-dialog.component.html',
  styleUrls: ['./session-add-dialog.component.css']
})
export class SessionAddDialogComponent implements OnInit {
  sessionTypeEnum: typeof SessionType = SessionType;
  sessionForm: FormGroup = this.formBuilder.group({});
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  sessionCtrl = new FormControl();
  filteredSessions: Observable<string[]>;
  sessions: string[] = [];
  //allSessionsPropositions: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];
  allSessionsPropositions: string[] = [];
  result: ISession;

  @ViewChild('sessionInput', {static: false}) sessionInput?: ElementRef<HTMLInputElement>;
  @ViewChild('auto', {static: false}) matAutocomplete?: MatAutocomplete;

  constructor(public dialogRef: MatDialogRef<SessionAddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ISession,
    private formBuilder: FormBuilder) {
    const now = new Date();
    const year: number = now.getFullYear();
    this.allSessionsPropositions.push(year.toString() + " - " + (year + 1).toString());
    this.filteredSessions = this.sessionCtrl.valueChanges.pipe(
        startWith(null),
        map((session: string | null) => session ? this._filter(session) : this.allSessionsPropositions.slice()));
  }

  ngOnInit(): void {
    this.sessionForm = this.formBuilder.group({
      'sessionType': ['', [Validators.required]],
      'session': ['', [Validators.required]]
    })

  }

  add(event: MatChipInputEvent): void {
    // Add fruit only when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event
    if (this.sessions.length < 1 && !this.matAutocomplete?.isOpen) {
      const input = event.input;
      const value = event.value;

      // Add our fruit
      if ((value || '').trim()) {
        this.sessions.push(value.trim());
      }

      // Reset the input value
      if (input) {
        input.value = '';
      }

      this.sessionCtrl.setValue(null);
    }
  }

  remove(session: string): void {
    const index = this.sessions.indexOf(session);

    if (index >= 0) {
      this.sessions.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    if(this.sessions.length < 1) {
      this.sessions.push(event.option.viewValue);
      this.sessionInput!.nativeElement.value = '';
      this.sessionCtrl.setValue(null);
    }
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allSessionsPropositions.filter(session => session.toLowerCase().indexOf(filterValue) === 0);
  }

  getOnBlur() {
    if(this.sessions.length < 1) {
      this.addOnBlur = true;
    } else {
      this.addOnBlur = false;
    }
    return this.addOnBlur;
  }


  onSubmit(){
    console.log("********************** first ", this.sessionForm.value.sessionType)
    this.data = {id: -1, description: '',name: this.sessionForm.value.session, sessionType: this.sessionForm.value.sessionType, active: false, currents: false}
    //this.result.sessionType =  SessionType.HAJJ === this.sessionForm.value.sessionType ? SessionType.HAJJ: SessionType.OMRA;
    //this.result.name = this.sessionForm.value.session;
    console.log("********************** data ", this.data)
    this.dialogRef.close()
  }

  onClose(): void{
    this.dialogRef.close();
  }

}
