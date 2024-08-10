import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Guidelines() {
  return (
    <main>
      <div className="container my-5">
        <h1 className="text-center mb-4">Guidelines</h1>

        <div className="row mb-5">
          <div className="col-md-12">
            <h2>Welcome to Pizza Paradise</h2>
            <p>
              At Pizza Paradise, we are committed to providing a welcoming and
              enjoyable experience for all our customers. Please take a moment
              to read through our guidelines to ensure a pleasant and respectful
              environment for everyone.
            </p>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-md-12">
            <h2>General Guidelines</h2>
            <ul className="list-group">
              <li className="list-group-item">
                <h4>Respect Others</h4>
                <p>
                  We ask that all customers treat each other and our staff with
                  respect. Harassment, discrimination, or inappropriate behavior
                  will not be tolerated.
                </p>
              </li>
              <li className="list-group-item">
                <h4>Keep it Clean</h4>
                <p>
                  Please maintain cleanliness in our premises and dispose of
                  trash in the provided bins. We strive to keep our environment
                  clean and welcoming for everyone.
                </p>
              </li>
              <li className="list-group-item">
                <h4>Follow Health & Safety Protocols</h4>
                <p>
                  Your health and safety are our priority. Please follow all
                  health and safety protocols, including any guidelines related
                  to COVID-19, as mandated by local authorities.
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-md-12">
            <h2>Ordering Guidelines</h2>
            <ul className="list-group">
              <li className="list-group-item">
                <h4>Placing Orders</h4>
                <p>
                  Orders can be placed online or in-store. Please ensure your
                  order details are accurate before confirming your purchase.
                </p>
              </li>
              <li className="list-group-item">
                <h4>Payment Methods</h4>
                <p>
                  We accept various payment methods, including credit/debit
                  cards, PayPal, and cash on delivery. Please have your payment
                  ready at the time of order placement or delivery.
                </p>
              </li>
              <li className="list-group-item">
                <h4>Order Cancellations</h4>
                <p>
                  If you need to cancel an order, please do so within 15 minutes
                  of placing it to avoid any charges. Once the order is
                  prepared, cancellations may not be possible.
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-md-12">
            <h2>Customer Feedback</h2>
            <p>
              We value your feedback and suggestions. Please feel free to reach
              out to us with your comments or concerns. Your input helps us
              improve our services.
            </p>
            <button className="btn btn-primary">Submit Feedback</button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Guidelines;
