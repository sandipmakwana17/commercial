import React from "react";
import { CurrentfashionData } from "./dynamicdata";
import { BeatSeller } from "./dynamicdata";

const Home = () => {
  return (
    <div className="">
      <div className="container-fluid home-background text-white ">
        <h1 className="display-md-3 display-sm-4 display-5 ">
          Get The Best Product
          <br /> At Your Home
        </h1>
        <button className="btn btn-warning ">View More</button>
      </div>

      {/* current fashion box .............. */}

      <div className="container-fluid  my-5 text-center  ">
        <h3 className="my-5">
          Best current fashion trends that are
          <br /> having a moment right now
        </h3>
        <div className="row d-flex justify-content-center">
          {CurrentfashionData.map((val, index) => {
            return (
              <div
                style={{
                  height: "300px",
                  width: "340px",
                  backgroundImage: `url(${val.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="col-lg-2 mx-4 col-md-6  my-3 d-flex align-items-end fation-box "
              >
                <button className="btn btn-light rounded-0 mb-3 ">
                  {val.btn}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* ViewMore................. */}
      <div className="container-fluid my-5">
        <div className="row text-white">
          <div className="  view-more-1 col-lg-6 d-flex justify-content-center align-items-center  text-center ">
            <div>
              <h3>
                A watch isn’t About Telling time,
                <br /> it’s about your relationship with
                <br /> Time!
              </h3>
              <button className="btn  my-4 btn-outline-warning rounded-0">
                View More
              </button>
            </div>
          </div>

          <div className=" view-more-2  col-lg-6 d-flex justify-content-center align-items-center  text-center ">
            <div>
              <h3>
                Fashion is Just another <br /> Accessories for someone with{" "}
                <br /> Style!
              </h3>
              <button className="btn  my-4  btn-outline-warning rounded-0">
                View More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* best seller........................ */}

      <div className="text-center">
          <h3>
            Best Seller <br />
          </h3>
          <p>Top sale in this week and this season.</p>
        </div>
         
      <div className="container  ">
       
        <div className="row d-flex justify-content-center">
          {BeatSeller.map((val, index) => {
            return (
              <div
                className="col-lg-2 mx-2  col-md-6  my-3  fation-box   "
                style={{
                  backgroundImage: `url(${val.img})`,
                  backgroundPosition: "center",
                  backgroundSize:"cover" ,
                  width: "300px",
                  height: "330px",
                 
                }}
              >
                
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
