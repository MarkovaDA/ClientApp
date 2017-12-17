export class User {
  private _username: string;
  private _password: string;

  set username(value: string) {
    this._username = value;
  }

  set password(value: string) {
    this._password = value;
  }

  get username(): string {
    return this._username;
  }

  get password(): string {
    return this._password;
  }
  constructor(username?: string, password?: string) {}
}
