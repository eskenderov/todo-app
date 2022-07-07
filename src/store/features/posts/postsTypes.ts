export interface postsTypes {
  data: postItem[];
  error: string | null;
  loading: boolean;
}

export interface postItem {
  id: number;
  text: string;
  completed: boolean;
}
