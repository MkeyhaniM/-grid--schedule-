interface Posts {
  id: number;
  title: string;
  body: string;
  userId: number;
  date?: string;
  times?: string;
}

interface Post {
  id: number;
  times: string;
  title: string;
  body: string;
  userId: number;
}

export type { Posts, Post };
