import dayjs from "dayjs";
import { Posts } from "../types/Post";

interface Props {
  post: Posts;
}

const TbodyTable = ({ post }: Props) => {
  return (
    <tr className="hover:bg-slate-50 border-b border-slate-300">
      <td className="p-2">
        <p className="text-sm font-bold">{post.times}</p>
      </td>

      {Array.from({ length: 7 }).map((_, index) => {
        const task = dayjs(post.date).day() === index;
        return (
          <td className="p-1" key={index}>
            <p className="text-sm font-bold truncate flex flex-col items-center">
              <span title={post.title} className="text-[12px]">
                {task
                  ? post.title.split(" ").slice(0, 2).join(" ") +
                    (post.title.split(" ").length > 2 ? "..." : "")
                  : ""}
              </span>
              <span className="self-center">{task ? post.date : ""}</span>
            </p>
          </td>
        );
      })}
    </tr>
  );
};

export default TbodyTable;
