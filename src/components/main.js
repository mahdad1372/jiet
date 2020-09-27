import React from "react";

const names = () => {
  return (
    <div>
      <div class="d-flex justify-content-center">
        <img src={require("../img/Jiet Logo.jpg")} className="img-size1" />
      </div>

      <div class="d-flex justify-content-center mt-3 text-center">
        <a style={{ color: "green" }} className="text1">
          Welcome To our jient application
        </a>
      </div>

      <div class="d-flex justify-content-center mt-3">
        <img src={require("../img/food1.png")} className="img-size1" />
      </div>
    </div>
  );
};

export default names;
