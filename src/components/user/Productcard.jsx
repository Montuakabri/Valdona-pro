import React from "react";
import "../../assets/user/css/components.css";

const Productcard = () => {
  return (
    <div className="col-3">
      <div className="card-inner">
        <span className="badge new-badge">NEW</span>
        <img
          alt=""
          className="card__image"
          src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/9/4/942889fNK_LIKAA00003347_1.jpg?rnd=20200526195200&tr=w-512"
        />
        <div className="cardbody">
          <p className="product-brand">VALDONA</p>
          <p className="card__title">Valdona black dress for women's</p>
          <span className="price">$ 850</span>
        </div>
      </div>
    </div>
  );
};

export default Productcard;
