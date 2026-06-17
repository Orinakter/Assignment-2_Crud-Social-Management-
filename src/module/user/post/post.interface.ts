export interface IPostBody {
  user_id: string;
  title: string;
  content: string;
}

export type postUpdateBody=Partial<IPostBody>