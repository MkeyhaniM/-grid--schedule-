import { Post } from "../types/Post";

const sortByTimeAsc = (data: Post[]): Post[] => {
  return [...data].sort((a, b) => a.times.localeCompare(b.times));
};

export default sortByTimeAsc;
