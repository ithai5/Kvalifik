import { NgRedux } from "@angular-redux/store";
import { User } from "src/app/entities/user";
import { AppState } from "../state/appState"

export class UserActions {
    constructor(private ngRedux: NgRedux<AppState>) {}
    static LOGIN: String = 'LOGIN';

    login(user: User): void {
        this.ngRedux.dispatch({
            type: UserActions.LOGIN,
            payload: user,
        });
    }
}