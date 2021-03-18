export type Comment = {
  name: string;
  comment: string;
  gender: string;
};

export type Book = {
  id: number;
  author: string;
  title: string;
  genre: string;
  publisher: string;
  year: string;
  image_url?: string;
  comments?: Comment[];
};
