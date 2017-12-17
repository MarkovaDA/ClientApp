import * as AppActions  from '../actions/AppActions';
import { UserProfile } from '../models/response/Profile';

export type Action = AppActions.All;

export function profileReducer(state: UserProfile = /*null*/
                            { email: 'darya.markova.95@mail.ru',
                               userId: '1234567849',
                               role: 'Client',
                               roleName: 'Клиент',
                               userName:'darya_markova',
                               message:'smth message'}, action: Action) {
  switch(action.type) {
    case AppActions.FETCH_PROFILE:
      return Object.assign({}, state, action.payload);
    case AppActions.RESET_PROFILE:
      return null;
    default:
      return state;
  }
}
