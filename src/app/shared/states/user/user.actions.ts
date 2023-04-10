export enum ActionTypes {
    USER_ACTION = '[AddUser] User Action'
}

export class UserAction {
    public static readonly type = ActionTypes.USER_ACTION;

    constructor(public readonly payload: any){}
}
