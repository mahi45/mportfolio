import React from "react";

const Portfolio = () => {
  return (
    <div className="bg-[#f7f7ff]">
      <div
        className="content pt-16 pb-0 pe-16 bg-[#f7f7ff]"
        id="work"
        data-aos="fade-right"
        data-aos-duration="1200"
        data-aos-delay="200"
      >
        <h1 className="flex justify-start text-3xl font-bold pb-12">
          My Portfolio
        </h1>
        <div
          className="content pb-20 bg-[#f7f7ff] grid gap-4 justify-center grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 lg:justify-between lg:ml-0 lg:me-0 lg:mr-0 lg:gap-8"
          id="work"
          // data-aos="fade-right"
          // data-aos-duration="1200"
          // data-aos-delay="200"
        >
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src="/public/img/Project-10.png" alt="Recipe Website" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Recipe Website</h2>
              <p>
                It's a fullstack recipe website where you can register as a chef
                and upload your recipe to show others. Also many more
                functionality have been there.
              </p>
              <div className="flex justify-between pt-3">
                <a
                  href="https://food-recipe-7b8b9.web.app/home"
                  target="_blank"
                >
                  <button className="btn btn-accent">Live Link</button>
                </a>
                <a
                  href="https://github.com/mahi45/chef-website-client"
                  target="_blank"
                >
                  <button className="btn btn-info">Git Link</button>
                </a>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src="/public/img/Project-111.png" alt="Toy Marketplace" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Toy Marketplace Website</h2>
              <p>
                It's a fullstack sports toy website where you can register as a
                user and upload your toy to show others. Also you can do you
                create, read and update your toy from here.
              </p>
              <div className="flex justify-between pt-3">
                <a href="https://assignment11-87997.web.app/" target="_blank">
                  <button className="btn btn-accent">Live Link</button>
                </a>
                <a
                  href="https://github.com/mahi45/toy-marketplace-client"
                  target="_blank"
                >
                  <button className="btn btn-info">Git Link</button>
                </a>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src="/public/img/Project-12.png" alt="Summer Camp Website" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Summer Camp Website</h2>
              <p>
                It's a fullstack summercamp website where you can register with
                3 types of role like, student, instructor, and admin based upon
                permission. You can play variety of role based on the
                persmission. Also there is payment gateway and many more
                functionality is there.
              </p>
              <div className="flex justify-between pt-3">
                <a href="https://summercamp-273b8.web.app/" target="_blank">
                  <button className="btn btn-accent">Live Link</button>
                </a>
                <a href="https://github.com/mahi45/summer-camp" target="_blank">
                  <button className="btn btn-info">Git Link</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
