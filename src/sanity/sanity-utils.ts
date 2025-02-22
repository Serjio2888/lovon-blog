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
    const client = createClient(clientConfig);
    return client.fetch<QueryResponse>(query, qParams, {
      cache: "force-cache",
      next: { tags },
    });
  } else {
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
  const data: Blog[] = await sanityFetch({
    query: postQuery,
    qParams: {},
    tags: ["post", "author"],
  });
  return data;
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
