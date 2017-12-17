import { UserProfile } from '../models/response/Profile';
import { Action } from '@ngrx/store';

export const FETCH_PROFILE = 'FETCH_PROFILE';
export const RESET_PROFILE = 'RESET_PROFILE';

export class FetchProfile implements Action {
  readonly type: string = FETCH_PROFILE;
  constructor(public payload: UserProfile) {}
}

export class ResetProfile implements Action {
  readonly type: string = RESET_PROFILE;
  constructor(public payload: null) {}
}

export type All  = FetchProfile | ResetProfile;


