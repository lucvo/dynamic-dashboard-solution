export interface Account {
  userId: string;
  email: string;
  profile: any;
  roles: string[];
  permissions: string[];
}

export interface LoginModel{
  userName: string;
  password: string;
}