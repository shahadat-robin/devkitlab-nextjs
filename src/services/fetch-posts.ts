'use server';

import type { IPost } from '@/interfaces/post';
import { client } from '../../sanity/lib/client';

const query = `*[_type == "post"] {
  _id,
  _createdAt,
  title,
  "thumbnail": mainImage.asset -> url,
  body
}`;

export async function fetchPosts(): Promise<IPost[]> {
  try {
    const response = await client.fetch(query);
    return response;
  } catch (error) {
    console.error('Post list fetching failed for ==> ', error);
    return [];
  }
}
