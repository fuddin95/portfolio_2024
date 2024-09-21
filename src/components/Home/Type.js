import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Engineer",
          "Smart contract Developer ",
          "Full Stack Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 200,
      }}
    />
  );
}

export default Type;
