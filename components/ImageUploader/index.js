import { API_URL } from "@utils/config";
import React, { useState } from "react";
import Image from "next/image";
import toast from "react-hot-toast";
import { Loader } from "..";

export const ImageUploader = ({ sportsNewsId, cb }) => {
  const [loading, setLoading] = useState(null);
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const formData = new FormData();
    formData.append("files", image);
    formData.append("ref", "api::author.author");
    formData.append("refId", sportsNewsId);
    formData.append("field", "image");

    await fetch(`${API_URL}/api/upload`, {
      method: "POST",
      body: formData,
    }).then((res) => {
      if (res.ok) {
        cb();
        setLoading(false);
        toast.success("Image Uploaded!");
      } else {
        setLoading(false);
        toast.error("Something went wrong!");
      }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-4">
        <div className="flex justify-start max-w-lg px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
          <div className="flex text-sm text-gray-600">
            <input
              id="file-upload"
              name="file-upload"
              type="file"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex justify-end">
          <button type="submit" className="group btn-transparent">
            {loading ? <Loader /> : "Upload"}
          </button>
        </div>
      </div>
    </form>
  );
};
