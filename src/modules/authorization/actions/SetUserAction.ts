import { Action } from '@ngrx/store';
import { IUser } from '../../app/interfaces/IUser';

export class SetUserAction implements Action {
    public static readonly type = '[Authorization] Set user';

    public readonly type = SetUserAction.type;

    constructor(public readonly user: IUser) {}
}
