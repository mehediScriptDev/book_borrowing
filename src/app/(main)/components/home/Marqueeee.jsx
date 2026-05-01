import React from "react";
import Marquee from "react-fast-marquee";

const Marqueeee = () => {
  return (
    <div>
      <Marquee >
        <p className="bg-[#ffedd5] text-sm py-1.5 border-b border-primaryy/35">I can be a React component, multiple React components, or just some
        text. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus rerum ipsum excepturi reprehenderit aperiam sunt facere, assumenda iste quas accusantium. Rerum praesentium ipsam distinctio eaque iste ab nam voluptate accusamus?</p>
      </Marquee>
    </div>
  );
};

export default Marqueeee;
