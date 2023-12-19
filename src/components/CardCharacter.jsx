import React from "react";

export const CardCharacter = ({ characters }) => {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
        {characters.map((character) => (
          <div className="col">
            <div className="card">
              <h2>{character.name}</h2>
            </div>
          </div>
        ))}
    </div>
  );
};
