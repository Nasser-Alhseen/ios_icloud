import React from "react";
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../assets/apple2.json";

const LottieApple = () => <Lottie      style={{ height: 400 }}
animationData={groovyWalkAnimation} loop={true} />;

export default LottieApple;