import React, { useState } from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { empty_star, star } from "../assets";

const Tooltip = ({ text, rate, comment, children }) => {
  const [visible, setVisible] = useState(false);

  const showTooltip = () => setVisible(true);
  const hideTooltip = () => setVisible(false);

  const renderStars = (renderRate) => {
    const fullStar = star;
    const emptyStar = empty_star;

    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <img
          key={i}
          src={i <= renderRate ? fullStar : emptyStar}
          alt={i <= renderRate ? "Full star" : "Empty star"}
          className="w-5 h-5 inline-block mx-1"
        />
      );
    }
    return stars;
  };

  return (
    <div
      className="relative"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {children}
      {visible && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 bg-black-100 text-white-100 text-sm rounded-lg text-center px-2 py-1 shadow-lg z-10 ">
          <p className="px-3 py-1 text-[17px]">{text}</p>
          <div className="flex justify-center items-center">
            {renderStars(rate)}
          </div>
          <p className="px-3 pt-3 pb-1 text-secondary">{comment}</p>
        </div>
      )}
    </div>
  );
};


const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <Tooltip text={technology.name} rate={technology.rate} comment={technology.comment}>
            <BallCanvas icon={technology.icon} />
          </Tooltip>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
