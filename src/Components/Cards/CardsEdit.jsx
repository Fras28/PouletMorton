import React from "react";
import { Card } from "./Card/Card";

import "./Cards.css";
import { CardEdite } from "./Card/CardEdit";

export const CardsEdite = ({ products }) => {
  console.log(products, "que llega a la card");
  return (
    <div className="cartaEdit" >
      <div className="rowsCardEdit">
        {products?.map((e) => (
          <CardEdite producto={e} />
        ))}
      </div>
    </div>
  );
};


