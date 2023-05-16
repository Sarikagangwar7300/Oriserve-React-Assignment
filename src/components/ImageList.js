import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { imageList } from "../redux/action";
import { Modal } from "antd";
import Loader from "./Loader";

export default function ImageList() {
  let dataFromApi = useSelector((state) => state.imageListData);
  const dispatch = useDispatch();
  const [photoList, setPhotoList] = useState(dataFromApi?.photos?.photo);
  const [showModal, setShowModal] = useState(false);
  const [photoData, setPhotoData] = useState({ url: "", title: "" });

  useEffect(() => {
    dispatch(imageList());
  }, []);

  useEffect(() => {
    if (dataFromApi) {
      setPhotoList(dataFromApi?.photos?.photo);
    }
  }, [dataFromApi]);

  const handlePhotoClick = (title, url) => {
    setPhotoData({
      url,
      title,
    });
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="h-full">
      {photoList ? (
        <div className="grid grid-cols-3 md:grid-cols-4 gap-4 container">
          {photoList?.map((photo, index) => {
            let url =
              "https://farm" +
              photo.farm.toString() +
              ".staticflickr.com/" +
              photo.server +
              "/" +
              photo.id +
              "_" +
              photo.secret +
              ".jpg";
            return (
              <img
                src={url}
                alt=""
                className="w-40 h-40 mt-14"
                onClick={() => handlePhotoClick(photo.title, url)}
              />
            );
          })}
        </div>
      ) : (
        <Loader />
      )}
      <Modal
        title={photoData.title || "No Title Found"}
        open={showModal}
        onCancel={handleCloseModal}
        footer={null}
      >
        {photoData && photoData.url ? (
          <img src={photoData.url} alt="" className="h-52" />
        ) : (
          <Loader />
        )}
      </Modal>
    </div>
  );
}
