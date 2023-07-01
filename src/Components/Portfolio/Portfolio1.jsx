import React from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Masonry from "react-masonry-css";
import { FiLink } from "react-icons/fi";
import "./Portfolio.css";
import { initLightboxJS } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1,
};

const tabList = ["All", "Branding", "Photography", "Fashion", "Product"];
const tabListContent = [
  {
    porftoliItems: [
      {
        img: "/img/portfolio/m-portfolio-1.jpg",
        width: 400,
        height: 550,
        title: "Bottle Illustration",
        subTitle: "Figma Shoot",
        alterText: "Bottle Illustration",
        delayAnimation: "",
        portfolioLink:
          "https://dribbble.com/shots/16529339-Beny-Personal-Portfolio-React-Template",
      },
      {
        img: "/img/portfolio/m-portfolio-2.jpg",
        width: 400,
        height: 400,
        title: "E-Learning App",
        subTitle: "Nuna ios App",
        alterText: "Illustration",
        delayAnimation: "100",
        portfolioLink:
          "https://dribbble.com/shots/16529350-Nairo-Personal-Portfolio-React-Template",
      },
      {
        img: "/img/portfolio/m-portfolio-3.jpg",
        width: 400,
        height: 700,
        title: "Visual Design",
        subTitle: "Themeforest Marke",
        alterText: "Business Mockup",
        delayAnimation: "200",
        portfolioLink:
          "https://dribbble.com/shots/16529407-Deski-Saas-Software-React-Template",
      },
      {
        img: "/img/portfolio/m-portfolio-4.jpg",
        width: 400,
        height: 400,
        title: "Business Card",
        subTitle: "Graphicriver Market",
        alterText: "E-Cosmetics",
        delayAnimation: "0",
        portfolioLink:
          "https://dribbble.com/shots/16545341-Imroz-Vue-JS-Creative-Agency-Portfolio-Template",
      },
      {
        img: "/img/portfolio/m-portfolio-5.jpg",
        width: 400,
        height: 700,
        title: "Chatting Application",
        subTitle: "Codecanyon Market",
        alterText: "Bottle Illustration",
        delayAnimation: "100",
        portfolioLink:
          "https://dribbble.com/shots/16529158-Waxon-Personal-Portfolio-VueJS-Template-RTL",
      },
      {
        img: "/img/portfolio/m-portfolio-6.jpg",
        width: 400,
        height: 500,
        title: "Web Application",
        subTitle: "Behance Shot",
        alterText: "Web Application",
        delayAnimation: "200",
        portfolioLink:
          "https://dribbble.com/shots/16529226-Krozo-Personal-Portfolio-React-Template",
      },
      {
        img: "/img/portfolio/m-portfolio-7.jpg",
        width: 400,
        height: 700,
        title: "Business Card",
        subTitle: "Graphicriver Market",
        alterText: "Business Card",
        delayAnimation: "0",
        portfolioLink:
          "https://dribbble.com/shots/16529282-Shane-Personal-Portfolio-React-Template",
      },
      {
        img: "/img/portfolio/m-portfolio-8.jpg",
        width: 400,
        height: 550,
        title: "Chatting App Design",
        subTitle: "Codecanyon Market",
        alterText: "Chatting App Design",
        delayAnimation: "100",
        portfolioLink:
          "https://www.behance.net/gallery/128278341/Imroz-Vue-JS-Creative-Agency-Portfolio-Template",
      },
      {
        img: "/img/portfolio/m-portfolio-9.jpg",
        width: 400,
        height: 400,
        title: "Web Motion",
        subTitle: "Behance Shot",
        alterText: "Web Motion",
        delayAnimation: "200",
        portfolioLink: "https://www.facebook.com/ibthemes",
      },
    ],
  },
  {
    porftoliItems: [
      {
        img: "/img/portfolio/m-portfolio-6.jpg",
        width: 400,
        height: 550,
        title: "Web Application",
        subTitle: "Behance Shot",
        alterText: "Web Application",
        delayAnimation: "",
        portfolioLink:
          "https://dribbble.com/shots/16529226-Krozo-Personal-Portfolio-React-Template",
      },
      {
        img: "/img/portfolio/m-portfolio-3.jpg",
        width: 400,
        height: 700,
        title: "Visual Design",
        subTitle: "Themeforest Marke",
        alterText: "Business Mockup",
        delayAnimation: "100",
        portfolioLink:
          "https://dribbble.com/shots/16529407-Deski-Saas-Software-React-Template",
      },
      {
        img: "/img/portfolio/m-portfolio-8.jpg",
        width: 400,
        height: 550,
        title: "Chatting App Design",
        subTitle: "Codecanyon Market",
        alterText: "Chatting App Design",
        delayAnimation: "200",
        portfolioLink:
          "https://www.behance.net/gallery/128278341/Imroz-Vue-JS-Creative-Agency-Portfolio-Template",
      },
      {
        img: "/img/portfolio/m-portfolio-4.jpg",
        width: 400,
        height: 400,
        title: "Business Card",
        subTitle: "Graphicriver Market",
        alterText: "E-Cosmetics",
        delayAnimation: "300",
        portfolioLink:
          "https://dribbble.com/shots/16545341-Imroz-Vue-JS-Creative-Agency-Portfolio-Template",
      },
    ],
  },
  {
    porftoliItems: [
      {
        img: "/img/portfolio/m-portfolio-2.jpg",
        width: 400,
        height: 400,
        title: "E-Learning App",
        subTitle: "Nuna ios App",
        alterText: "Illustration",
        delayAnimation: "",
        portfolioLink:
          "https://dribbble.com/shots/16529350-Nairo-Personal-Portfolio-React-Template",
      },

      {
        img: "/img/portfolio/m-portfolio-5.jpg",
        width: 400,
        height: 700,
        title: "Chatting Application",
        subTitle: "Codecanyon Market",
        alterText: "Bottle Illustration",
        delayAnimation: "100",
        portfolioLink:
          "https://dribbble.com/shots/16529158-Waxon-Personal-Portfolio-VueJS-Template-RTL",
      },
      {
        img: "/img/portfolio/m-portfolio-6.jpg",
        width: 400,
        height: 550,
        title: "Web Application",
        subTitle: "Behance Shot",
        alterText: "Web Application",
        delayAnimation: "200",
        portfolioLink:
          "https://dribbble.com/shots/16529226-Krozo-Personal-Portfolio-React-Template",
      },
    ],
  },
  {
    porftoliItems: [
      {
        img: "/img/portfolio/m-portfolio-1.jpg",
        width: 400,
        height: 550,
        title: "Bottle Illustration",
        subTitle: "Figma Shoot",
        alterText: "Bottle Illustration",
        delayAnimation: "",
        portfolioLink:
          "https://dribbble.com/shots/16529339-Beny-Personal-Portfolio-React-Template",
      },
      {
        img: "/img/portfolio/m-portfolio-7.jpg",
        width: 400,
        height: 700,
        title: "Business Card",
        subTitle: "Graphicriver Market",
        alterText: "Business Card",
        delayAnimation: "100",
        portfolioLink:
          "https://dribbble.com/shots/16529282-Shane-Personal-Portfolio-React-Template",
      },
      {
        img: "/img/portfolio/m-portfolio-9.jpg",
        width: 400,
        height: 400,
        title: "Web Motion",
        subTitle: "Behance Shot",
        alterText: "Web Motion",
        delayAnimation: "200",
        portfolioLink: "https://www.facebook.com/ibthemes",
      },
    ],
  },
  {
    porftoliItems: [
      {
        img: "/img/portfolio/m-portfolio-2.jpg",
        width: 400,
        height: 400,
        title: "E-Learning App",
        subTitle: "Nuna ios App",
        alterText: "Illustration",
        delayAnimation: "",
        portfolioLink:
          "https://dribbble.com/shots/16529350-Nairo-Personal-Portfolio-React-Template",
      },
      {
        img: "/img/portfolio/m-portfolio-3.jpg",
        width: 400,
        height: 700,
        title: "Visual Design",
        subTitle: "Themeforest Marke",
        alterText: "Business Mockup",
        delayAnimation: "100",
        portfolioLink:
          "https://dribbble.com/shots/16529407-Deski-Saas-Software-React-Template",
      },

      {
        img: "/img/portfolio/m-portfolio-5.jpg",
        width: 400,
        height: 700,
        title: "Chatting Application",
        subTitle: "Codecanyon Market",
        alterText: "Bottle Illustration",
        delayAnimation: "200",
        portfolioLink:
          "https://dribbble.com/shots/16529158-Waxon-Personal-Portfolio-VueJS-Template-RTL",
      },
      {
        img: "/img/portfolio/m-portfolio-6.jpg",
        width: 400,
        height: 550,
        title: "Web Application",
        subTitle: "Behance Shot",
        alterText: "Web Application",
        delayAnimation: "300",
        portfolioLink:
          "https://dribbble.com/shots/16529226-Krozo-Personal-Portfolio-React-Template",
      },
    ],
  },
];

const Portfolio = () => {
  return (
    <div className="bg-[#f7f7ff]">
      <div
        className="content py-20 pe-16 bg-[#f7f7ff]"
        id="work"
        data-aos="fade-right"
        data-aos-duration="1200"
        data-aos-delay="200"
      >
        <h1 className="flex justify-start text-3xl font-bold pb-6">
          My Portfolio
        </h1>
        <Tabs>
          <TabList>
            {tabList.map((tab, index) => (
              <Tab key={index}>{tab}</Tab>
            ))}
          </TabList>
          <Gallery>
            {tabListContent.map((tabContent, i) => (
              <TabPanel key={i}>
                <div className="">
                  <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                  >
                    {tabContent.porftoliItems.map((val, i) => (
                      <div className="group">
                        <Item
                          original={val.img}
                          thumbnail={val.img}
                          width={val.width}
                          height={val.height}
                        >
                          {({ ref, open }) => (
                            <div className="gallery-link">
                              <img
                                src={val.img}
                                alt="Childhood"
                                role="button"
                                ref={ref}
                                // onClick={open}
                              />
                            </div>
                          )}
                        </Item>
                      </div>
                    ))}
                  </Masonry>
                </div>
              </TabPanel>
            ))}
          </Gallery>
        </Tabs>
      </div>
    </div>
  );
};

export default Portfolio;

// const Portfolio = () => {
//   return (
//     <div className="content">
//       <Tabs>
//         <TabList>
//           <Tab>Title 1</Tab>
//           <Tab>Title 2</Tab>
//         </TabList>

//         <TabPanel>
//           <h2>Any content 1</h2>
//         </TabPanel>
//         <TabPanel>
//           <h2>Any content 2</h2>
//         </TabPanel>
//       </Tabs>
//     </div>
//   );
// };

// export default Portfolio;
