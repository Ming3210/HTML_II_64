import React from "react";

type Props = {
  addForm: () => void;
};

export default function Add({ addForm }: Props) {
  const formPopUp = () => {
    addForm();
  };
  return (
    <div>
      <button
        onClick={formPopUp}
        className="text-white bg-blue-600 rounded-lg w-[200px] h-[40px] "
      >
        Thêm mới bài viết
      </button>
    </div>
  );
}
