import React from "react";

type Props = {
  closeBanForm: () => any;
  ban: () => any;
};

export default function ModalBanned({ ban, closeBanForm }: Props) {
  const closeForm = () => {
    closeBanForm();
  };
  const banning = () => {
    ban();
    closeBanForm();
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-md shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold">Xác nhận</h1>
          <button onClick={closeForm} className="text-xl">
            &times;
          </button>
        </div>
        <hr />
        <div className="my-4 text-center">Bạn có muốn chặn bài viết?</div>
        <div className="flex justify-end space-x-4">
          <button onClick={closeForm} className="px-4 py-2 bg-gray-300 rounded">
            Hủy
          </button>
          <button
            onClick={banning}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Xác nhận
          </button>
        </div>
      </div>
    </div>
  );
}
