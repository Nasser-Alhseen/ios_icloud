import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    
    <Typewriter
      options={{delay:50,
        strings: [
          `<h1 class="gradient__text" style='font-family: monospace;'>
            Icloud Accounts Unlock
          </h1>`,
          `<h1 class="gradient__text" style='font-family: monospace;'>
          Guranteed Results
        </h1>`,
        `<h1 class="gradient__text" style='font-family: monospace;'>
         By a proffesional Team
      </h1>`
         
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        
      }}
    />
  );
}

export default Type;
