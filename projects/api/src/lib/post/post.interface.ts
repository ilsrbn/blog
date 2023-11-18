export interface IPost {
  id: string;
  collectionId: string;
  collectionName: string;
  created: string;
  updated: string;
  title: string;
  content: string;
  status: string;
  preview: string;
  content_preview: string;
  slug: string;
}

export interface ICreatePost {
  title: string;
  content: string;
  status: 'draft' | 'published';
  preview: File | Blob;
  content_preview: string;
  slug: string;
}
