import React, { useEffect, useState } from "react";
import Search from "./components/Search";
import Filter from "./components/Filter";
import Add from "./components/Add";
import Post from "../models/PostList";
import axios, { AxiosResponse } from "axios";
import baseUrl from "../api/baseUrl";
import ListOfPost from "./components/ListOfPost";
import Loading from "./components/Loading";
import AddForm from "./components/AddForm";
import ModalBanned from "./components/ModalBanned";

export default function App() {
  const [postList, setPostList] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Xem addForm có hiện ko
  const [checkAddForm, setCheckAddForm] = useState<boolean>(false);

  // Xem banModal có hiện ko
  const [checkBanForm, setCheckBanForm] = useState<boolean>(false);

  // Bài viết bị ban
  const [banId, setBanId] = useState<number | null>(null);

  const loadData = () => {
    baseUrl
      .get("posts")
      .then((res) => {
        setPostList(res.data);
      })
      .catch((err) => console.log(err));
  };

  const firstLoad = () => {
    axios
      .get("http://localhost:8080/posts")
      .then((res) => {
        setTimeout(() => {
          setPostList(res.data);
          setLoading(false);
        }, 2000);
      })
      .catch((err) => console.log(err));
  };

  // Cho ađ form hiện
  const addForm = () => {
    setCheckAddForm(true);
  };

  // Đóng add form
  const closeAddForm = () => {
    setCheckAddForm(false);
  };

  //post
  const post = (post: Post) => {
    baseUrl
      .post("posts", post)
      .then((res: AxiosResponse) => loadData())
      .catch((error: any) => console.log(error));
    setCheckAddForm(false);
  };

  // Hiện ban modal
  const checkBan = (id: number) => {
    setCheckBanForm(true);
    setBanId(id);
  };

  // Đóng form chặn bài viết
  const closeBanForm = () => {
    setCheckBanForm(false);
  };

  // Chặn bài viết
  const ban = () => {
    let post = postList.find((post) => post.id === banId);
    if (post) {
      post.status = false;
      baseUrl
        .patch(`posts/${post.id}`, post)
        .then((response: AxiosResponse) => loadData)
        .catch((error) => console.log(error));
    } else {
      alert(`Post with ID ${banId} not found.`);
    }
  };

  useEffect(() => {
    firstLoad();
  }, []);
  return (
    <div>
      {checkBanForm ? (
        <ModalBanned closeBanForm={closeBanForm} ban={ban}></ModalBanned>
      ) : (
        ""
      )}
      {checkAddForm ? (
        <AddForm posting={post} closeAddForm={closeAddForm}></AddForm>
      ) : (
        ""
      )}
      {loading ? <Loading></Loading> : ""}
      <div className="flex justify-center items-center">
        <div className="w-[95%] flex justify-between">
          <div className="flex gap-5">
            <Search></Search>
            <Filter></Filter>
          </div>
          <div>
            <Add addForm={addForm}></Add>
          </div>
        </div>
      </div>
      <br />
      <div className="relative overflow-x-auto flex justify-center items-center">
        <table className="w-[90%] text-sm rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-cyan-400 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 text-center">
                STT
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Tiêu đề
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Hình ảnh
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Ngày viết
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Trạng thái
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Chức năng
              </th>
            </tr>
          </thead>

          <tbody>
            {postList.map((post: Post, index: number) => (
              <ListOfPost
                baning={checkBan}
                key={post.id}
                index={index}
                post={post}
              ></ListOfPost>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
