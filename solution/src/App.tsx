import { FC, useEffect, useState } from "react";
import bgStars from "./assets/images/bg-stars.svg";
import patternHills from "./assets/images/pattern-hills.svg";
import iconFacebook from "./assets/images/icon-facebook.svg";
import iconInstagram from "./assets/images/icon-instagram.svg";
import iconPinterest from "./assets/images/icon-pinterest.svg";
import CountdownCard from "./CountdownCard";

const App: FC = () => {
  const [count, setCount] = useState(7 * 24 * 60 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) =>
        prevCount === 1 ? 7 * 24 * 60 * 60 : prevCount - 1
      );
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number) => {
    if (time < 10) {
      return `0${time}`;
    }
    return `${time}`;
  };

  const daysLeft = Math.floor(count / (24 * 60 * 60));
  const hoursLeft = Math.floor((count % (24 * 60 * 60)) / (60 * 60));
  const minutesLeft = Math.floor((count % (60 * 60)) / 60);
  const secondsLeft = Math.floor(count % 60);

  return (
    <>
      <main className="min-h-screen overflow-hidden relative min-w-[300px] bg-gradient-to-b from-[#1e1e28] to-[#251c2c]">
        <div className="absolute w-full h-60 top-[20vh] flex flex-col items-center">
          <h1 className="text-white text-2xl pl-6 pr-6 mb-12 text-center tracking-[0.3rem]">
            WE'RE LAUNCHING SOON
          </h1>
          <div className="grid grid-cols-4 gap-4 sm:gap-8 h-full p-2 w-full sm:w-[650px]">
            <CountdownCard timeframe="days" count={formatTime(daysLeft)} />
            <CountdownCard timeframe="hours" count={formatTime(hoursLeft)} />
            <CountdownCard
              timeframe="minutes"
              count={formatTime(minutesLeft)}
            />
            <CountdownCard
              timeframe="seconds"
              count={formatTime(secondsLeft)}
            />
          </div>
        </div>

        <img src={bgStars} className="absolute h-[68vh] z-50" />

        <img
          src={patternHills}
          className="absolute z-0 bottom-0 h-60 scale-x-[2.75] right-64 sm:scale-x-150 sm:right-32 "
        />

        <div className="absolute bottom-14 left-[30%] flex justify-between w-[40vw]">
          {/* <a>
            <svg
              className="text-teal-500 fill-current h-16 w-16 hover:text-cyan-500"
              viewBox="0 0 60 60"
            >
              <path d="M41.05 18.44a6.6 6.6 0 00-4.84-2.29c-3.66-.06-6.62 3.04-6.62 6.91 0 .55.05 1.09.17 1.6a18.68 18.68 0 01-13.66-7.55 7.33 7.33 0 00-.9 3.55 7.3 7.3 0 002.95 5.92 6.34 6.34 0 01-3-.92v.1c0 3.42 2.28 6.3 5.31 6.97a6.24 6.24 0 01-3 .1 6.74 6.74 0 006.2 4.93 12.8 12.8 0 01-9.81 2.9A17.89 17.89 0 0024 43.85c12.19 0 18.86-10.61 18.86-19.81l-.02-.9c1.3-.97 2.42-2.18 3.3-3.56-1.18.54-2.46.9-3.8 1.04a6.8 6.8 0 002.91-3.8c-1.28.77-2.7 1.33-4.2 1.62z" />
            </svg>
          </a> */}
          <a href="">
            <img src={iconFacebook} className="text-cyan-300 fill-current" />
          </a>
          <a href="">
            <img src={iconInstagram} />
          </a>
          <a href="">
            <img src={iconPinterest} />
          </a>
        </div>
      </main>
    </>
  );
};

export default App;
