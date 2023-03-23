import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    
    <Typewriter
      options={{delay:40,
        strings: [
          `<h1 class="gradient__text" style='font-family: monospace;'>
           آيفون
          </h1>`,
          `<h1 class="gradient__text" style='font-family: monospace;'>
          آيباد
        </h1>`,
        `<h1 class="gradient__text" style='font-family: monospace;'>
         ماك وكذلك ساعات آبل
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
