import React, { useEffect, useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate, useParams } from "react-router-dom";

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

function UpdateProducts() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/Products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("Server Not Responding", error);
      });
  }, [id]);

  const formik = useFormik({
    initialValues: {
      image: product?.image || "",
      name: product?.name || "",
      price: product?.price || "",
      description: product?.description || "",
      size: product?.size || "",
      toppings: product?.toppings || "",
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      image: Yup.string().required("Image URL is Required"),
      name: Yup.string()
        .min(5, "Name Must Be At Least 5 Characters Long")
        .required("Name is Required"),
      price: Yup.number()
        .min(1, "Price must be a positive number")
        .required("Price is Required"),
      description: Yup.string()
        .min(10, "Description Must Be At Least 10 Characters Long")
        .required("Description is Required"),
      size: Yup.string()
        .oneOf(
          ["Small", "Medium", "Large"],
          "Size must be Small, Medium, or Large"
        )
        .required("Size is Required"),
      toppings: Yup.string()
        .min(3, "Toppings Must Be At Least 3 Characters Long")
        .required("Toppings are Required"),
    }),
    onSubmit: (values, { setSubmitting, resetForm, setStatus }) => {
      axios
        .put(`http://localhost:5000/Products/${id}`, values)
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
      <h2 style={titleStyle}>Update Product</h2>
      <form onSubmit={formik.handleSubmit} style={formStyle}>
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
            Name
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
          Update Product
        </button>

        {formik.status === "success" && (
          <div style={successMessageStyle}>Product updated successfully!</div>
        )}
        {formik.status === "error" && (
          <div style={errorMessageStyle}>Error updating product!</div>
        )}
      </form>
    </div>
  );
}

export default UpdateProducts;
