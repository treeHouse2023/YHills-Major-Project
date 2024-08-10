import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const containerStyle = {
  marginTop: "4em",
  color: "#fff",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  padding: "2em",
  backgroundColor: "#171717",
  borderRadius: "25px",
  boxShadow: "inset 2px 5px 10px rgb(5, 5, 5)",
};

const titleStyle = {
  color: "black",
  textAlign: "center",
  marginBottom: "1em",
};

const labelStyle = {
  color: "#fff",
  marginBottom: "0.5em",
};

const inputStyle = {
  backgroundColor: "none",
  border: "none",
  outline: "none",
  color: "#d3d3d3",
  padding: "0.5em",
  borderRadius: "5px",
  width: "100%",
  backgroundColor: "#252525",
};

const selectStyle = {
  ...inputStyle,
  backgroundColor: "#252525",
};

const errorStyle = {
  color: "red",
  marginTop: "0.5em",
};

const buttonStyle = {
  padding: "0.5em",
  borderRadius: "5px",
  border: "none",
  backgroundColor: "#252525",
  color: "white",
  transition: ".4s ease-in-out",
};

const buttonHoverStyle = {
  backgroundColor: "black",
};

const successMessageStyle = {
  color: "green",
  marginTop: "1em",
};

const errorMessageStyle = {
  color: "red",
  marginTop: "1em",
};

function AddProducts() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      id: "",
      image: "",
      name: "",
      price: "",
      description: "",
      size: "",
      toppings: "",
    },
    validationSchema: Yup.object({
      id: Yup.string()
        .required("ID is required")
        .matches(/^[0-9]+$/, "ID must be numeric"),
      image: Yup.string().required("Image URL is required"),
      name: Yup.string()
        .min(5, "Name must be at least 5 characters long")
        .required("Name is required"),
      price: Yup.number()
        .min(1, "Price must be a positive number")
        .required("Price is required"),
      description: Yup.string()
        .min(10, "Description must be at least 10 characters long")
        .required("Description is required"),
      size: Yup.string()
        .oneOf(
          ["Small", "Medium", "Large"],
          "Size must be Small, Medium, or Large"
        )
        .required("Size is required"),
      toppings: Yup.string()
        .min(3, "Toppings must be at least 3 characters long")
        .required("Toppings are required"),
    }),
    onSubmit: (values, { setSubmitting, resetForm, setStatus }) => {
      axios
        .post("http://localhost:5000/Products", values)
        .then((response) => {
          setStatus("success");
          resetForm();
          navigate("/products");
        })
        .catch((error) => {
          setStatus("error");
        })
        .finally(() => {
          setSubmitting(false);
        });
    },
  });

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Add New Pizza</h2>
      <form onSubmit={formik.handleSubmit} style={formStyle}>
        <div className="mb-3">
          <label htmlFor="id" className="form-label" style={labelStyle}>
            ID
          </label>
          <input
            id="id"
            name="id"
            type="text"
            style={inputStyle}
            onChange={formik.handleChange}
            value={formik.values.id}
          />
          {formik.touched.id && formik.errors.id ? (
            <div style={errorStyle}>{formik.errors.id}</div>
          ) : null}
        </div>

        <div className="mb-3">
          <label htmlFor="image" className="form-label" style={labelStyle}>
            Image URL
          </label>
          <input
            id="image"
            name="image"
            type="text"
            style={inputStyle}
            onChange={formik.handleChange}
            value={formik.values.image}
          />
          {formik.touched.image && formik.errors.image ? (
            <div style={errorStyle}>{formik.errors.image}</div>
          ) : null}
        </div>

        <div className="mb-3">
          <label htmlFor="name" className="form-label" style={labelStyle}>
            Pizza Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            style={inputStyle}
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div style={errorStyle}>{formik.errors.name}</div>
          ) : null}
        </div>

        <div className="mb-3">
          <label htmlFor="price" className="form-label" style={labelStyle}>
            Price
          </label>
          <input
            id="price"
            name="price"
            type="number"
            style={inputStyle}
            onChange={formik.handleChange}
            value={formik.values.price}
          />
          {formik.touched.price && formik.errors.price ? (
            <div style={errorStyle}>{formik.errors.price}</div>
          ) : null}
        </div>

        <div className="mb-3">
          <label
            htmlFor="description"
            className="form-label"
            style={labelStyle}
          >
            Description
          </label>
          <input
            id="description"
            name="description"
            type="text"
            style={inputStyle}
            onChange={formik.handleChange}
            value={formik.values.description}
          />
          {formik.touched.description && formik.errors.description ? (
            <div style={errorStyle}>{formik.errors.description}</div>
          ) : null}
        </div>

        <div className="mb-3">
          <label htmlFor="size" className="form-label" style={labelStyle}>
            Size
          </label>
          <select
            id="size"
            name="size"
            style={selectStyle}
            onChange={formik.handleChange}
            value={formik.values.size}
          >
            <option value="">Select Size</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
          {formik.touched.size && formik.errors.size ? (
            <div style={errorStyle}>{formik.errors.size}</div>
          ) : null}
        </div>

        <div className="mb-3">
          <label htmlFor="toppings" className="form-label" style={labelStyle}>
            Toppings
          </label>
          <input
            id="toppings"
            name="toppings"
            type="text"
            style={inputStyle}
            onChange={formik.handleChange}
            value={formik.values.toppings}
          />
          {formik.touched.toppings && formik.errors.toppings ? (
            <div style={errorStyle}>{formik.errors.toppings}</div>
          ) : null}
        </div>

        <button
          type="submit"
          style={buttonStyle}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor =
              buttonHoverStyle.backgroundColor)
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor =
              buttonStyle.backgroundColor)
          }
          disabled={formik.isSubmitting}
        >
          Add Pizza
        </button>

        {formik.status === "success" && (
          <div style={successMessageStyle}>Pizza added successfully!</div>
        )}
        {formik.status === "error" && (
          <div style={errorMessageStyle}>Error adding pizza!</div>
        )}
      </form>
    </div>
  );
}

export default AddProducts;
