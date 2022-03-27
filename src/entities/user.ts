import { Entity, Model, isModel } from './model';

export interface User extends Model {
  authUid: string;
  premium: boolean;
}

export const isUser = (arg: unknown): arg is User => {
  if (!isModel(arg)) return false;
  const _user = arg as User;
  try {
    return typeof _user.premium === 'boolean';
  } catch {
    return false;
  }
};

export const createUser = (uid: string): User => {
  const model = new Entity(uid).model;
  return {
    ...model,
    authUid: model.uid,
    premium: false,
  };
};
