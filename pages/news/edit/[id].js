import { Container } from "@components/Container";
import { API_URL } from "@utils/config";
// import axios from "axios";
import Image from "next/image";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { ImageUploader } from "@components/ImageUploader";
import { Modal } from "@components/Modal";

const edit = ({ editSingleNews }) => {
  const router = useRouter();
  const imgObj = editSingleNews?.data?.attributes?.image?.data?.attributes;
  const [values, setValues] = useState({
    name: editSingleNews?.data?.attributes?.name,
    detail: editSingleNews?.data?.attributes?.detail,
    date: editSingleNews?.data?.attributes?.date,
  });
  const [ImagePreview, setImagePreview] = useState(
    imgObj ? imgObj.formats.thumbnail.url : null
  );
  const [open, setOpen] = useState(false);

  const { name, detail, date } = values;

  const imageUploaded = async () => {
    const res = await fetch(
      `${API_URL}/api/sports/${editSingleNews.data.id}?populate=image`
    );
    const data = await res.json();
    console.log({ data });
    setImagePreview(
      data?.data?.attributes?.image?.data?.attributes?.formats?.thumbnail?.url
    );
    setOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emptyFieldCheck = Object.values(values).some(
      (element) => element === ""
    );
    if (emptyFieldCheck) {
      toast.error("Please fill all the fields!");
    }

    await fetch(`${API_URL}/api/sports/${editSingleNews.data.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: values }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data?.data?.attributes?.slug) {
          const slug = data.data.attributes.slug;
          router.push(`/news/${slug}`);
          toast.success("News updated... redirecting!");
        } else {
          if (!emptyFieldCheck) {
            toast.error("Something went wrong...");
          }
        }
      });
  };

  return (
    <Container title="Edit News">
      <div className="py-8 px-default">
        <form
          onSubmit={handleSubmit}
          className="space-y-8 divide-y divide-gray-200"
        >
          <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
            <div>
              <div>
                <h3 className="text-2xl font-medium leading-6 text-gray-900">
                  Edit News
                </h3>
                <p className="max-w-2xl mt-1 text-sm text-gray-500">
                  This information will be displayed publicly so be careful what
                  you share.
                </p>
              </div>

              <div className="mt-6 space-y-6 sm:mt-5 sm:space-y-5">
                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    Title:
                  </label>
                  <div className="mt-1 sm:mt-0 sm:col-span-2">
                    <div className="flex max-w-lg rounded-md shadow-sm">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={name}
                        onChange={handleInputChange}
                        autoComplete="off"
                        className="flex-1 block w-full min-w-0 border-gray-300 rounded-none focus:ring-indigo-500 focus:border-indigo-500 rounded-r-md sm:text-sm"
                      />
                    </div>
                  </div>
                </div>

                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                  <label
                    htmlFor="detail"
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    Detail:
                  </label>
                  <div className="mt-1 sm:mt-0 sm:col-span-2">
                    <textarea
                      id="detail"
                      name="detail"
                      rows={8}
                      value={detail}
                      onChange={handleInputChange}
                      className="block w-full max-w-lg border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                  <label
                    htmlFor="date"
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    Date:
                  </label>
                  <div className="mt-1 sm:mt-0 sm:col-span-2">
                    <div className="flex max-w-lg rounded-md shadow-sm">
                      <input
                        type="date"
                        name="date"
                        id="date"
                        value={dayjs(date).format("YYYY-MM-DD")}
                        onChange={handleInputChange}
                        autoComplete="off"
                        className="flex-1 block w-full min-w-0 border-gray-300 rounded-none focus:ring-indigo-500 focus:border-indigo-500 rounded-r-md sm:text-sm"
                      />
                    </div>
                  </div>
                </div>

                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                  <label
                    htmlFor="cover-photo"
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    Cover photo:
                  </label>
                  <div className="mt-1 space-y-2 sm:mt-0 sm:col-span-2">
                    {ImagePreview ? (
                      <div className="flex flex-col items-start space-y-2">
                        <Image src={ImagePreview} width={140} height={120} />
                      </div>
                    ) : (
                      <div>
                        <p>No Image Available</p>
                      </div>
                    )}
                    <div>
                      <button
                        type="button"
                        className="text-indigo-500"
                        onClick={() => setOpen(!open)}
                      >
                        Upload Image
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-5">
            <div className="flex justify-end">
              <button
                type="button"
                className="btn-transparent"
                onClick={() => router.back()}
              >
                Cancel
              </button>
              <button type="submit" className="btn-blue">
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
      <Modal open={open} setOpen={setOpen}>
        <ImageUploader
          sportsNewsId={editSingleNews.data.id}
          cb={imageUploaded}
        />
      </Modal>
    </Container>
  );
};

export async function getServerSideProps({ params: { id }, req }) {
  console.log(req.headers.cookie);
  const res = await fetch(`${API_URL}/api/sports/${id}?populate=image`);
  const editSingleNews = await res.json();
  console.log(editSingleNews);
  return {
    props: {
      editSingleNews: editSingleNews,
    },
  };
}

export default edit;
