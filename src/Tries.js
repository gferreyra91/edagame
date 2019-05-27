import React from "react";

const Tries = ({ tries }) => {
  return (
    <div className="nes-container with-title lists">
      <p class="title">Intentos</p>
      <ul className="nes-list is-disc">
        {tries.map((attemp, index) => (
          <li>
            {index} - {attemp.guess} - {attemp.goods} bien - {attemp.regulars}{" "}
            regular{" "}
            {attemp.goods === 4 &&
              attemp.regulars === 0 &&
              " - JUEGO TERMINADO"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tries;
