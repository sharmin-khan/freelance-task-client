import React from "react";
import loadingSpinner from "../../assets/images/loading.json";
import Lottie from "lottie-react";

const LoadingSpinner = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <Lottie
          animationData={loadingSpinner}
          loop={true}
          className="w-60 h-60"
        />
      </div>
    </div>
  );
};

export default LoadingSpinner;
