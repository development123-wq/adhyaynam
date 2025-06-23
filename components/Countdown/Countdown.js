import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

const Countdown = ({ duration, seeYourSocre }) => {
  const router = useRouter();
  console.log(duration);
  const [countDown, setCountDown] = useState(duration * 60); // 15 minutes in seconds

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountDown((prevState) => {
        // Check if countdown has reached 0
        if (prevState > 0) {
          return prevState - 1;
        } else {
          // If countdown is already 0, clear the interval
          clearInterval(intervalId);
          seeYourSocre();
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [duration]);

  const minutes = Math.floor(countDown / 60);
  const seconds = countDown % 60;

  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = seconds.toString().padStart(2, "0");

  return (
    <div className="countdown-timer mt-2">
      <p className="text-center text-lg font-bold text-black">
        {formattedMinutes}:{formattedSeconds}
      </p>
    </div>
  );
};

export default Countdown;
