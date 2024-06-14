import React from "react";
import Post from "../../models/PostList";

type Props = {
  post: Post;
  index: number;
  baning: (id: number) => any;
};

export default function ListOfPost({ post, index, baning }: Props) {
  const checkBan = () => {
    baning(post.id);
  };
  return (
    <>
      <tr
        key={post.id}
        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
      >
        <th
          scope="row"
          className="px-6 py-4 text-center font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {index + 1}
        </th>
        <td className="px-6 py-4 text-center">{post.title}</td>
        <td className="px-6 py-4 flex justify-center">
          <img
            className="w-[200px]  h-[200px] rounded-full"
            src={post.image}
            alt=""
          />
        </td>
        <td className="px-6 py-4 text-center">{post.date}</td>
        <td className="px-6 py-4 text-center">
          {post.status ? "Đã xuất bản" : "Chưa xuất bản"}
        </td>
        <td className="px-6 py-4 text-center">
          <button
            type="button"
            className="text-white m-2 bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700"
            onClick={checkBan}
          >
            Chặn
          </button>
          <button
            type="button"
            className="text-white m-2 bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700"
          >
            Sửa
          </button>
          <button
            type="button"
            className="text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700"
          >
            Xóa
          </button>
        </td>
      </tr>
    </>
  );
}
