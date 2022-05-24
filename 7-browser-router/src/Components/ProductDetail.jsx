import React from "react";
import { NavLink } from "react-router-dom";
import ProductData from "../store";

class ProductDetail extends React.Component {
  state = { wrongId: false };

  getDetails = () => {
    let productObj = this.props.location.product;
    if (!productObj) {
      productObj = ProductData[this.props.match.params.id];
      if (!productObj) return <div>Product Not Found!</div>;
    }
    return (
      <div className="productCard">
        <h2>{productObj.title}</h2>
        <img src={productObj.imageUrl} alt={productObj.title} />
        <div>
          <span>Size: </span>
          {productObj.size}
        </div>
        <div>
          <span>Price:</span> {productObj.price}$
        </div>
      </div>
    );
  };

  render() {
    const index = this.props.match.path.indexOf("/:id");
    return (
      <div className="details">
        {this.getDetails()}
        <button>
          <NavLink to={this.props.match.path.slice(0, index)}>Back</NavLink>
        </button>
      </div>
    );
  }
}

export default ProductDetail;
