import { useEffect, useState } from "react";
import styles from "./flipCard.module.css";

const CountdownCard = ({
  timeframe,
  count,
}: {
  timeframe: string;
  count: string;
}) => {
  return (
    <div>
      <div
        className={`bg-[var(--superDarkBlue)] relative z-[100] flex flex-col rounded`}
      >
        <h2 className="absolute top-[24%] xs:left-[24%] sm:top-[26%] left-[10%] sm:left-[19%] text-[var(--softRed)] text-4xl sm:text-6xl opacity-75 z-50">
          {count}
        </h2>
        <div
          className={`h-10 sm:h-16 bg-[#2c2c44] rounded-t border-b-[1px] border-b-[var(--superDarkBlue)] relative ${
            // Flip card. Not finished
            // count === "00" ||
            // count === "10" ||
            // count === "20" ||
            // count === "30" ||
            // count === "40" ||
            // count === "50"
            //   ? styles.flipCard
            //   : ""
            ""
          }`}
        >
          <div className="h-[5px] w-[5px] rounded-tr-full bg-[var(--superDarkBlue)] absolute bottom-0"></div>
          <div className="h-[5px] w-[5px] rounded-tl-full bg-[var(--superDarkBlue)] absolute bottom-0 right-0"></div>
        </div>
        <div className="h-10 sm:h-16 bg-[#343553] rounded-b shadow-card">
          <div className="h-[5px] w-[5px] rounded-bl-full bg-[var(--superDarkBlue)] absolute right-0"></div>
          <div className="h-[5px] w-[5px] rounded-br-full bg-[var(--superDarkBlue)] absolute"></div>
        </div>
      </div>
      <div className="mt-4 text-center text-[#6a687b] uppercase text-[0.6rem] tracking-widest">
        {timeframe}
      </div>
    </div>
  );
};

export default CountdownCard;
