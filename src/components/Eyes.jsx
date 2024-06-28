import React, { useEffect, useState } from "react";
import { asset2 } from "../assets";

const Eyes = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  });

  return (
    <div className="w-full h-screen overflow-hidden">
      <div
        data-scroll
        data-scroll-speed="-.7"
        className="relative w-full h-full bg-contain bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${asset2})` }}
      >
        <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          <div className="flex items-center justify-center bg-zinc-100 w-[15vw] h-[15vw] rounded-full">
            <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900">
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-full h-10"
              >
                <div className="w-5 h-5 lg:w-10 lg:h-10 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center bg-zinc-100 w-[15vw] h-[15vw] rounded-full">
            <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900">
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-full h-10"
              >
                <div className="w-5 h-5 lg:w-10 lg:h-10 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;
