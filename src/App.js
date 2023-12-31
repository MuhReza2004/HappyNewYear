import Particles from "react-particles";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";
import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";
import Countdown from "react-countdown";
function App() {
  const [newYearMessage, setNewYearMessage] = useState([
    "Countdown Tahun Baru",
  ]);

  const particleInitialization = async (engine) => {
    await loadFireworksPreset(engine);
  };

  function timeleft() {
    const newYearDate = new Date("January 1, 2024 00:00:00").getTime();
    const nowDate = new Date().getTime();
    const remaininTime = newYearDate - nowDate;
    return remaininTime;
  }

  return (
    <>
      <Particles
        init={particleInitialization}
        options={{ preset: "fireworks" }}
      />

      <div className="flex flex-col flex-center justify-center items-center min-h-screen gap-4">
        <span className="text-white text-4xl px-4 font-bold z-50">
          <Typewriter
            words={newYearMessage}
            loop={false}
            cursorStyle={"_"}
            cursor
          />
        </span>
        <div className="text-white z-50 font-bold text-2xl ">
          <Countdown
            date={Date.now() + timeleft()}
            onComplete={() => setNewYearMessage(["HAPPY NEW YEAR 2024🎉"])}
          />
        </div>
      </div>
    </>
  );
}

export default App;
