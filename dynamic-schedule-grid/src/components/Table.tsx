import { useState } from "react";
import { Posts, Post } from "../types/Post";
import TbodyTable from "./TbodyTable";
import TheadTable from "./TheadTable";
import { sortByTimeAsc, sortByTimeDesc } from "../utility";

interface Props {
  dataPosts: Posts[];
}

const Table = ({ dataPosts }: Props) => {
  const [order, setOrder] = useState<number>(0);

  const orderSelect = (e: string) => {
    setOrder(parseInt(e));
  };

  const sortedAsc = sortByTimeAsc(dataPosts as Post[]);
  const sortedDesc = sortByTimeDesc(dataPosts as Post[]);

  return (
    <div className="relative flex flex-col w-full h-full text-gray-700 bg-white shadow-md rounded-lg  gap-4 items-center ">
      <div className="w-full max-w-sm min-w-[200px]">
        <div className="relative">
          <select
            defaultValue={order}
            onChange={(e) => orderSelect(e.target.value)}
            className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer"
          >
            <option value="0">Without sort</option>
            <option value="1">Ascending</option>
            <option value="2">Descending</option>
            Descending
          </select>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.2"
            stroke="currentColor"
            className="h-5 w-5 ml-1 absolute top-2.5 right-2.5 text-slate-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
            />
          </svg>
        </div>
      </div>
      <table className="text-left table-fixed text-slate-800">
        <TheadTable />
        <tbody>
          {order === 0 &&
            dataPosts.map((post) => {
              return <TbodyTable key={post.id} post={post} />;
            })}

          {order === 1 &&
            sortedAsc.map((post) => {
              return <TbodyTable key={post.id} post={post} />;
            })}

          {order === 2 &&
            sortedDesc.map((post) => {
              return <TbodyTable key={post.id} post={post} />;
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
