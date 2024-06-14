import React, { useState } from "react";
import Post from "../../models/PostList";

type Props = {
  closeAddForm: () => void;
  posting: (post: Post) => void;
};

export default function AddForm({ closeAddForm, posting }: Props) {
  const [post, setPost] = useState<Post>({
    id: Math.floor(Math.random() * 9999999999999),

    title: "",
    image: "",
    status: false,
    date: "",
    content: "",
  });
  const close = () => {
    closeAddForm();
  };
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    posting(post);
  };

  const handleChanges = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setPost({ ...post, [name]: value });
    console.log(post);
  };

  const refresh = () => {
    setPost({
      id: Math.floor(Math.random() * 9999999999999),
      title: "",
      image: "",
      status: false,
      date: "",
      content: "",
    });
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <form
        onSubmit={submit}
        className="relative w-1/2 bg-white p-8 rounded-lg shadow-lg border"
      >
        <button
          type="button"
          onClick={close}
          className="px-4 py-2 text-end w-[100%] text-gray-700 "
        >
          X
        </button>

        <h1 className="text-2xl font-bold mb-4 text-center">
          Thêm mới bài viết
        </h1>
        <hr className="mb-4" />
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
            Tên bài viết
          </label>
          <input
            name="title"
            value={post.title}
            onChange={handleChanges}
            type="text"
            id="title"
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700 font-bold mb-2">
            Hình ảnh (url)
          </label>
          <input
            name="image"
            value={post.image}
            onChange={handleChanges}
            type="text"
            id="image"
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="content"
            className="block text-gray-700 font-bold mb-2"
          >
            Nội dung
          </label>
          <textarea
            onChange={handleChanges}
            name="content"
            value={post.content}
            id="content"
            className="w-full p-2 border rounded"
            rows={4}
            placeholder="Nhập Nội dung"
          ></textarea>
        </div>
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
            onClick={refresh}
          >
            Làm mới
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Xuất bản
          </button>
        </div>
      </form>
    </div>
  );
}
