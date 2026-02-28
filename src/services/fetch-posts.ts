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

export async function fetchPostsHeavy(): Promise<IPost[]> {
  try {
    const response = await client.fetch(query);
    await new Promise((resolve) => setTimeout(resolve, 5000));
    return response;
  } catch (error) {
    console.error('Post list fetching failed for ==> ', error);
    return [];
  }
}

export async function fetchPostsWithoutCache(): Promise<IPost[]> {
  try {
    const response = await client.fetch(query, {}, { cache: 'no-cache' });
    return response;
  } catch (error) {
    console.error('Post list fetching failed for ==> ', error);
    return [];
  }
}

export async function fetchPostsWithoutCacheHeavy(): Promise<IPost[]> {
  try {
    const response = await client.fetch(query, {}, { cache: 'no-cache' });
    await new Promise((resolve) => setTimeout(resolve, 8000));
    return response;
  } catch (error) {
    console.error('Post list fetching failed for ==> ', error);
    return [];
  }
}
