import React, { useLayoutEffect, useState } from "react";
import img1 from "../assets/test1.jpg";
import img2 from "../assets/test2.jpg";
import img3 from "../assets/test3.jpg";

const Header = () => {
  const [swipper, setSwipper] = useState(0)
  const swiperData = [
    { img: img1 },
    { img: img2 },
    { img: img3 },
  ];


  useLayoutEffect(() => {
    const intervalId = setInterval(() => {
      setSwipper((prevSwipper) => (prevSwipper + 1) % swiperData.length);
    }, 3000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [swiperData.length]);
  return (
    <header>
      {/* Use parentheses in the map function to return JSX */}
      {swiperData.map((item, index) => (
        <img key={index} className={`${swipper == index ? "image" : "d-none"}`} src={item.img} alt={`img-${index + 1}`} />
      ))}
      {/* <video src="./video.mp4" loop autoPlay muted></video> */}
      {/* <h1>Open Source Website</h1> */}
      {/* Your other header content goes here */}
    </header>
  );
};

export default Header;
