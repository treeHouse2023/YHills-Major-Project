import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useFormik } from "formik";
import * as Yup from "yup";

function Support() {
  const [formStatus, setFormStatus] = useState(null);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      subject: Yup.string().required("Subject is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: (values, { setSubmitting, resetForm }) => {
      // Simulate form submission
      setTimeout(() => {
        setFormStatus("success");
        resetForm();
        setSubmitting(false);
      }, 500);
    },
  });

  return (
    <main>
      <div className="container my-5">
        <h1 className="text-center mb-4">Support Page</h1>

        <div className="row mb-5">
          <div className="col-md-6">
            <h2>Contact Us</h2>
            <p>
              If you have any questions or need assistance, please reach out to
              our support team. We're here to help!
            </p>
            <ul className="list-unstyled">
              <li className="mb-2">
                <i className="bi bi-envelope me-2"></i>
                Email:{" "}
                <a href="mailto:support@pizzaparadise.com">
                  support@pizzaparadise.com
                </a>
              </li>
              <li className="mb-2">
                <i className="bi bi-telephone me-2"></i>
                Phone: +1 234 567 890
              </li>
              <li className="mb-2">
                <i className="bi bi-geo-alt me-2"></i>
                Address: 123 Pizza Street, Flavor Town
              </li>
            </ul>
          </div>

          <div className="col-md-6">
            <h2>Frequently Asked Questions</h2>
            <div className="accordion" id="faqAccordion">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    How do I place an order?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    To place an order, simply browse our menu, select the items
                    you wish to purchase, and proceed to checkout. You can
                    create an account or continue as a guest.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    What payment methods do you accept?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    We accept various payment methods including credit/debit
                    cards, PayPal, and cash on delivery.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    How can I track my order?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    Once your order is placed, you can track its status in the
                    'My Orders' section of your account. You will also receive
                    email updates about your order status.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-md-12">
            <h2>Contact Us Form</h2>
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="form-control"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="text-danger">{formik.errors.name}</div>
                ) : null}
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="form-control"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-danger">{formik.errors.email}</div>
                ) : null}
              </div>

              <div className="mb-3">
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  className="form-control"
                  onChange={formik.handleChange}
                  value={formik.values.subject}
                />
                {formik.touched.subject && formik.errors.subject ? (
                  <div className="text-danger">{formik.errors.subject}</div>
                ) : null}
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form-control"
                  rows="4"
                  onChange={formik.handleChange}
                  value={formik.values.message}
                />
                {formik.touched.message && formik.errors.message ? (
                  <div className="text-danger">{formik.errors.message}</div>
                ) : null}
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                disabled={formik.isSubmitting}
              >
                Send Message
              </button>

              {formStatus === "success" && (
                <div className="text-success mt-3">
                  Message sent successfully!
                </div>
              )}
              {formStatus === "error" && (
                <div className="text-danger mt-3">Error sending message!</div>
              )}
            </form>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-4">
            <h2>Live Chat</h2>
            <p>
              For immediate assistance, you can use our live chat service
              available 24/7.
            </p>
            <button className="btn btn-primary">Start Live Chat</button>
          </div>
          <div className="col-md-6">
            <h2>Customer Feedback</h2>
            <p>
              We value your feedback. Please share your thoughts and suggestions
              to help us improve our services.
            </p>
            <button className="btn btn-secondary">Give Feedback</button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Support;
