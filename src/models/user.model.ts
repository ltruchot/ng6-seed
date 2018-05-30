export interface IUserAuth {
  login: string;
  password: string;
  email?: string;
}

export interface IUser {
  id: string;
  facebookId: string;
  googleId: string;
  login: string;
  email: string;
  firstName: string;
  lastName: string;
  birthday: string;
  picture: string;
  banned: number;
  level: number;
  createdAt: string;
  updatedAt: string;
}
