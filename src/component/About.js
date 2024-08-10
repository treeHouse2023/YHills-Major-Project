import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <>
        <div className="px-4 pt-5 my-5 text-center border-bottom ">
          <h1
            className="display-4 fw-bold text-body-emphasis"
            style={{
              marginBottom: "15px",
            }}
          >
            {" "}
            <img
              src="https://media.gettyimages.com/id/1155709677/vector/pizzeria.jpg?s=612x612&w=0&k=20&c=DFtfVegbqzUd-uHD4q8jIkr2izv0XcpuskC2eDm0Nk4="
              style={{
                height: "110px",
                width: "110px",
                marginRight: "10px",
                marginBottom: "15px",
                borderRadius: 5,
              }}
              alt="Pizza Store Logo"
            ></img>
            Pizza Paradise
          </h1>

          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">
              Welcome to Pizza Paradise, where every slice is a piece of heaven.
              Explore our wide range of pizzas crafted with the freshest
              ingredients and a touch of love. From classic Margherita to our
              signature gourmet specials, we have something for every pizza
              lover. Join us for a delightful dining experience, whether you're
              here for a quick bite or a family feast. Dive into the world of
              flavors and see how Pizza Paradise can satisfy your cravings.
            </p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
              <button className="btn btn-dark rounded-pill px-3" type="button">
                Menu
              </button>
              <button className="btn btn-dark rounded-pill px-3" type="button">
                Contact Us
              </button>
            </div>
          </div>
          <div className="overflow-hidden" style={{ maxHeight: "30vh" }}>
            <div className="container px-5">
              <img
                src="https://images.pexels.com/photos/4109122/pexels-photo-4109122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="img-fluid border rounded-3 shadow-lg mb-4"
                alt="Pizza Image"
                width="700"
                height="500"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <h1
          className="display-4 fw-bold text-body-emphasis"
          style={{
            marginBottom: "15px",
            justifyContent: "center",
            display: "flex",
          }}
        >
          {" "}
          Our Best Products{" "}
        </h1>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card h-100">
              <img
                src="https://media.gettyimages.com/id/85637408/photo/pizza-on-pan-with-slice-lifted-by-spatula.jpg?s=612x612&w=0&k=20&c=JFTz2JUKWN56M1q3ytH7ocUw1Bt9ugvh7zfxX_Xv9oA="
                className="card-img-top"
                alt="Pizza"
              />
              <div className="card-body">
                <h5 className="card-title">Classic Margherita</h5>
                <p className="card-text">
                  Our classic Margherita pizza is made with fresh tomatoes,
                  mozzarella, and basil, bringing a taste of Italy to your
                  table.
                </p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">
                  Last updated 3 mins ago
                </small>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <img
                src="https://media.gettyimages.com/id/1287249478/photo/pizza-chef-preparing-pizza-at-the-restaurant.jpg?s=612x612&w=0&k=20&c=STeFTmhZE_W1QIr6AWZvYp3CzxlFPq21cwl4CvPgFMY="
                className="card-img-top"
                alt="Pizza"
              />
              <div className="card-body">
                <h5 className="card-title">Pepperoni Feast</h5>
                <p className="card-text">
                  Enjoy a feast of pepperoni with our Pepperoni pizza, loaded
                  with premium pepperoni slices and mozzarella cheese.
                </p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">
                  Last updated 3 mins ago
                </small>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <img
                src="https://media.gettyimages.com/id/592499199/photo/hands-reach-for-naples-style-pizza.jpg?s=612x612&w=0&k=20&c=rji8nvqtvZ-avQ5F0wsO1tEyiGLuY2bchxDVtsTdwbs="
                className="card-img-top"
                alt="Pizza"
              />
              <div className="card-body">
                <h5 className="card-title">Veggie Delight</h5>
                <p className="card-text">
                  A delightful mix of fresh veggies, including bell peppers,
                  onions, and olives, topped with mozzarella cheese.
                </p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">
                  Last updated 3 mins ago
                </small>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <img
                src="https://media.gettyimages.com/id/1422644298/photo/hands-picking-pizza-slices.jpg?s=612x612&w=0&k=20&c=6GRUWg0mkTf1htmiXEAF7vU8xF1_1dOzNZLI8uuUwWA="
                className="card-img-top"
                alt="Pizza"
              />
              <div className="card-body">
                <h5 className="card-title">BBQ Chicken</h5>
                <p className="card-text">
                  Savor the taste of BBQ chicken with our special pizza topped
                  with grilled chicken, BBQ sauce, and mozzarella cheese.
                </p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">
                  Last updated 3 mins ago
                </small>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <img
                src="https://media.gettyimages.com/id/839988946/photo/whats-on-your-pizza.jpg?s=612x612&w=0&k=20&c=5PkXCPJivtGk68sbbTZvypqMOGpxkF-NdbRZzTSFqds="
                className="card-img-top"
                alt="Pizza"
              />
              <div className="card-body">
                <h5 className="card-title">Hawaiian</h5>
                <p className="card-text">
                  Enjoy the sweet and savory combination of ham and pineapple on
                  our Hawaiian pizza, topped with mozzarella cheese.
                </p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">
                  Last updated 3 mins ago
                </small>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <img
                src="https://media.gettyimages.com/id/184946701/photo/pizza.jpg?s=612x612&w=0&k=20&c=97rc0VIi-s3mn4xe4xDy9S-XJ_Ohbn92XaEMaiID_eY="
                className="card-img-top"
                alt="Pizza"
              />
              <div className="card-body">
                <h5 className="card-title">Meat Lover's</h5>
                <p className="card-text">
                  Indulge in a variety of meats with our Meat Lover's pizza,
                  featuring pepperoni, sausage, ham, and bacon, all topped with
                  mozzarella cheese.
                </p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">
                  Last updated 3 mins ago
                </small>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default About;
