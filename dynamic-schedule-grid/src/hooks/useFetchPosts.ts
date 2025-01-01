import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import { Posts } from "../types/Post";

const startHour = 8;
const endHour = 17;

const useFetchPosts = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      ).then((res) => res);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
    select: (data: Posts[]) =>
      data.map((post, index) => {
        const totalHours = endHour - startHour + 1;
        const hour = (startHour + (index % totalHours)) % 24;

        return {
          ...post,
          date: dayjs().add(index, "day").format("YYYY-MM-DD"),
          times: hour.toString().length === 1 ? `0${hour}:00` : `${hour}:00`,
        };
      }),
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  });
};

export default useFetchPosts;
