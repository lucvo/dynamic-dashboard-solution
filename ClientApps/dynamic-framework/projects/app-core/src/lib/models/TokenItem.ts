export class TokenItem {
  token: string;
  expireDate: number;
  constructor(token: string, expireDate: number) {
    this.expireDate = expireDate;
    this.token = token;
  }
}
