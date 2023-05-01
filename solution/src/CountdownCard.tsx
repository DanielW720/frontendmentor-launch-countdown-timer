import React, { FC } from "react";

const CountdownCard = ({
  timeframe,
  count,
}: {
  timeframe: string;
  count: string;
}) => {
  return (
    <div className="">
      <div className="bg-[var(--superDarkBlue)] relative z-[100] flex flex-col">
        <h2 className="absolute top-[24%] sm:top-[26%] left-[10%] sm:left-[19%] text-[var(--softRed)] text-4xl sm:text-6xl opacity-7">
          {count}
        </h2>
        <div className="h-10 sm:h-16 bg-[#2c2c44] rounded border-b-[1px] border-b-[var(--superDarkBlue)]"></div>
        <div className="h-10 sm:h-16 bg-[#343553] rounded shadow-card"></div>
      </div>
      <div className="mt-4 text-center text-[#6a687b] uppercase text-[0.6rem] tracking-widest">
        {timeframe}
      </div>
    </div>
  );
};

export default CountdownCard;
