import { Post } from "../types/Post";

const sortByTimeDesc = (data: Post[]): Post[] => {
  return [...data].sort((a, b) => b.times.localeCompare(a.times));
};

export default sortByTimeDesc;
