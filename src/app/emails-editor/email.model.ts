export class Email {
  private _value: string;
  readonly is_valid: boolean;

  constructor(email: string) {
    this._value = email;
    this.is_valid = Email.validityCheck(email);
  }

  static validityCheck(email) {
    const email_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return email_regex.test(String(email).toLowerCase());
  }

  get value(): string { return this._value; }
}
