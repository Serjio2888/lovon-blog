import ImageUrlBuilder from "@sanity/image-url";
import { createClient, QueryParams } from "next-sanity";
import clientConfig from "./config/client-config";
import {
  postQuery,
  authorQuery,
  authorBySlugQuery,
  postQueryByAuthor,
  postQueryByCategory,
  postQueryByTag,
  postQueryBySlug,
  getPrevAndNextPostQuery,
} from "./sanity-query";

import { Blog } from "@/types/blog";
import { Author } from "@/types/author";
import { integrations } from "../../integrations.config";

export async function sanityFetch<QueryResponse>({
  query,
  qParams,
  tags,
}: {
  query: string;
  qParams: QueryParams;
  tags: string[];
}): Promise<QueryResponse> {
  if (integrations?.isSanityEnabled) {
    console.log('Sanity is enabled, creating client...');
    console.log('Project ID:', process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
    console.log('Dataset:', process.env.NEXT_PUBLIC_SANITY_DATASET);
    const client = createClient(clientConfig);
    console.log('Client created, executing query:', query);
    try {
      const result = await client.fetch<QueryResponse>(query, qParams, {
        cache: "force-cache",
        next: { tags },
      });
      console.log('Query result:', result);
      return result;
    } catch (error) {
      console.error('Error executing query:', error);
      return {} as QueryResponse;
    }
  } else {
    console.log('Sanity is not enabled');
    return {} as QueryResponse;
  }
}

export function imageBuilder(source: any) {
  return ImageUrlBuilder(clientConfig).image(source);
}

export async function getAuthors() {
  const data: Author[] = await sanityFetch({
    query: authorQuery,
    qParams: {},
    tags: ["author", "post"],
  });
  return data;
}

export async function getAuthorBySlug(slug: string) {
  const data: Author = await sanityFetch({
    query: authorBySlugQuery,
    qParams: { slug },
    tags: ["author", "post"],
  });
  return data;
}

export async function getPosts() {
  try {
    console.log('Fetching posts from Sanity...');
    const data: Blog[] = await sanityFetch({
      query: postQuery,
      qParams: {},
      tags: ["post", "author"],
    });
    console.log('Posts fetched:', data);
    return data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export async function getPostsByAuthorSlug(slug: string) {
  const data: Blog[] = await sanityFetch({
    query: postQueryByAuthor,
    qParams: { slug },
    tags: ["post", "author"],
  });
  return data;
}

export async function getPrevAndNextPost(slug: string) {
  const data: Blog = await sanityFetch({
    query: getPrevAndNextPostQuery,
    qParams: { slug },
    tags: ["post", "author"],
  });
  return data;
}

export async function getPostsByCategory(category: string) {
  const data: Blog[] = await sanityFetch({
    query: postQueryByCategory,
    qParams: { category },
    tags: ["post", "author"],
  });
  return data;
}

export async function getPost(slug: string) {
  const data: Blog = await sanityFetch({
    query: postQueryBySlug,
    qParams: { slug },
    tags: ["post", "author"],
  });
  return data;
}

export async function getPostsByTag(slug: string) {
  const data: Blog[] = await sanityFetch({
    query: postQueryByTag,
    qParams: { slug },
    tags: ["post", "author"],
  });
  return data;
}
