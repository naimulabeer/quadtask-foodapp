/* eslint-disable react/prop-types */
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddMoreModal = ({ isOpen, onClose, onSubmit }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [imagePreview, setImagePreview] = useState(null); // For previewing the selected image

  const onFormSubmit = async (data) => {
    try {
      const imageUrl = await uploadImage(data.imageUrl[0]);

      const formattedData = {
        Id: uuidv4(),
        Name: data.name,
        Price: parseFloat(data.price),
        ImageUrl: imageUrl,
        IsPopular: data.IsPopular,
        IsRecommended: data.IsRecommended || false,
      };

      onSubmit(formattedData);
      onClose();
      toast.success(`${formattedData.Name} added successfully! 👌`, {
        position: "top-center",
        autoClose: 5000,
      });
      reset();
      setImagePreview(null);
    } catch (error) {
      console.error("Error uploading image:", error);
      toast.error("Error uploading image. Please try again.");
    }
  };

  const uploadImage = async (imageFile) => {
    const formData = new FormData();
    formData.append("key", image_hosting_key);
    formData.append("image", imageFile);

    const response = await axios.post(image_hosting_api, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    const result = response.data;

    if (result.success) {
      return result.data.url;
    } else {
      throw new Error(result.error.message);
    }
  };

  const handleImagePreview = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  return (
    <div className={`modal ${isOpen ? "modal-open" : "modal-closed"}`}>
      <div className="modal-content">
        <button onClick={onClose} className="close-button bg-red-500">
          &times;
        </button>
        <h2>Add More Item</h2>
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <label>
            Name:
            <input {...register("name", { required: "Name is required" })} />
            {errors.name && <span>{errors.name.message}</span>}
          </label>
          <label>
            Price:
            <input {...register("price", { required: "Price is required" })} />
            {errors.price && <span>{errors.price.message}</span>}
          </label>
          <label>
            Image URL:
            <input
              type="file"
              {...register("imageUrl", {
                required: "Image file is required",
              })}
              onChange={handleImagePreview}
            />
            {errors.imageUrl && <span>{errors.imageUrl.message}</span>}
          </label>
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Image Preview"
              className="mt-2 mb-2 rounded-lg shadow-md"
              style={{ maxWidth: "100%" }}
            />
          )}
          <label>
            Is Popular:
            <input
              type="checkbox"
              {...register("IsPopular", { required: "Popular field required" })}
            />
            {errors.IsPopular && <span>{errors.IsPopular.message}</span>}
          </label>
          <label>
            Is Recommended:
            <input
              type="checkbox"
              {...register("IsRecommended", {
                required: "Recommended field required",
              })}
            />
            {errors.IsRecommended && (
              <span>{errors.IsRecommended.message}</span>
            )}
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddMoreModal;
