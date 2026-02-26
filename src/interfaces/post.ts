import type { TypedObject } from 'sanity';

export interface IPost {
  _id: string;
  _createdAt: string;
  title: string;
  thumbnail: string;
  body: TypedObject[];
}
