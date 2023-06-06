import React, { useContext, useEffect, useState } from "react";
import { CheckAdminHelper } from "./utils/CheckAdmin.helper";
import { Context } from "../state/appContext";

export const AdminUploaderComponent = () => {
  const [fileInputState, setFileInputState] = useState("");
  const [previewSource, setPreviewSource] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [success, setSuccess] = useState("");
  const [err, setErr] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const { store, actions } = useContext(Context);
  useEffect(() => {
    // actions.getCategories();
  }, []);

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
    setSelectedFile(file);
    setFileInputState(e.target.value);
  };

  const previewFile = (file) => {
    if (file === undefined) {
      setFileInputState("");
      setSelectedFile("");
      setPreviewSource("");
    } else {
      const reader = new FileReader();
      try {
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          setPreviewSource(reader.result);
        };
      } catch (error) {
        reader.onerror = () => {
          console.log("error");
        };
      }
    }
  };

  const handleSubmitFile = (e) => {
    e.preventDefault();
    if (!selectedFile) return;
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onloadend = () => {
      uploadImage(reader.result);
    };
    reader.onerror = () => {
      console.log("error uploading");
    };
  };

  const uploadImage = async (base64EncodedImage) => {
    try {
      const resp = await fetch(`${process.env.REACT_APP_API}/img_upload`, {
        method: "POST",
        body: JSON.stringify({
          img: base64EncodedImage,
          name: name,
          category: category,
          price: price,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!resp.ok) {
        setErr("something went wrong");
        return;
      }
      setFileInputState("");
      setPreviewSource("");
      setSuccess("Image uploaded succesfully");
    } catch (error) {
      console.log(error);
      setErr("something went wrong");
    }
  };

  return (
    <article className="container ">
      <CheckAdminHelper />
      <div className="row d-flex ">
        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
          <form className="form" onSubmit={handleSubmitFile}>
            <div className="input-group mb-3">
              <label className="input-group-text" htmlFor="fileInput">
                Upload
              </label>
              <input
                id="fileInput"
                type="file"
                name="image"
                onChange={handleFileInputChange}
                value={fileInputState}
                className="form-control"
                required
              />
              <button
                className="btn btn-danger"
                onClick={(e) => {
                  setFileInputState("");
                  setSelectedFile("");
                  setPreviewSource("");
                }}
              >
                X
              </button>
            </div>
            <div className="input-group mb-3">
              <label htmlFor="name" className="input-group-text">
                Name:
              </label>
              <input
                type="text"
                className="form-control"
                required
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="input-group mb-3">
              <label htmlFor="price" className="input-group-text">
                Price:
              </label>
              <input
                type="text"
                className="form-control"
                required
                name="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="input-group mb-3">
              <label htmlFor="category" className="input-group-text">
                Category
              </label>
              <select
                className="form-select"
                name="category"
                defaultValue={"0"}
                aria-label="Category select"
                onChange={(e) => setCategory(e.target.value)}
              >
                {store.categories &&
                  store.categories.map((el, i) => (
                    <option key={i} value={el.category}>
                      {el.category}
                    </option>
                  ))}
              </select>
            </div>

            <button
              type="submit"
              value={"submit"}
              role="submit"
              className="btn "
            >
              Submit
            </button>
          </form>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
          {previewSource && (
            <img
              src={previewSource}
              alt="Image to upload"
              style={{ height: "300px" }}
            />
          )}
          {err ? <span>ERROR</span> : ""}
          {success ? <span>success!!</span> : ""}
        </div>
      </div>
    </article>
  );
};
