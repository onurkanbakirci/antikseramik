import { SEO } from "./seo";

export interface Page {
  id: string;
  title: string;
  handle: string;
  body: string;
  bodySummary: string;
  seo: SEO;
  createdAt: string;
  updatedAt: string;
}

export interface PageEdge {
  node: Page;
}

export interface PagesResponse {
  pages: {
    edges: PageEdge[];
  };
}

export interface PageResponse {
  pageByHandle: Page;
}