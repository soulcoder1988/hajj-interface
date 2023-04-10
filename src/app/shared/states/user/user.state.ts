import { Injectable } from '@angular/core';
import { TOKEN } from './user.const';
import { Action, Selector, State, StateContext } from '@ngxs/store';

export class UserStateModel {

}

@State<UserStateModel>({
  name: TOKEN,
  defaults: new UserStateModel(),
})
@Injectable()
export class UserState {
  public baseUrl = '';

}
