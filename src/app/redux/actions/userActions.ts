import { NgRedux } from '@angular-redux/store';
import { User } from 'src/app/entities/user';
import { AppState } from '../state/appState';

export class UserActions{
    constructor(private ngRedux: NgRedux<AppState>) {}
    static LOGIN = 'LOGIN';

    login(user: User, token: string): void {
        this.ngRedux.dispatch({
            type: UserActions.LOGIN,
            payload: {userInfo: user, tokenId: token},
        });
    }
}
