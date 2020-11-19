export class BaseCommand<T> {
    data: T;
    requestToken: string;
    constructor(data: T, requestToken: string) {
      this.data = data;
      this.requestToken = requestToken;
    }
}
