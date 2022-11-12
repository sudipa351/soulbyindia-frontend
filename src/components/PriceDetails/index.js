import React from "react";
import Card from "../../components/UI/Card";
import { MaterialButton } from "../../components/MaterialUi";
import './style.css';
/**
 * @author
 * @function PriceDetails
 **/

const PriceDetails = (props) => {
  return (
    <div className="priceMaain">
    <Card headerLeft={"Price Details"} style={{ maxWidth: "480px" }}>
      <div className="pdetails-Main">
        <div className="flexRow sb" style={{ margin: "10px 0" }}>
          <div>Price ({props.totalItem} items)</div>
          <div>{props.totalPrice}</div>
        </div>
        <div className="flexRow sb" style={{ margin: "10px 0" }}>
          <div>Delivery Charges</div>
          <div>FREE</div>
        </div>
        <hr />
        <div className="flexRow sb" style={{ margin: "10px 0" }}>
          <div style={{fontWeight: 'bold'}}>Total Amount
          <p>(including GST)</p>
          </div>
          <div style={{fontWeight: 'bold'}}>{props.totalPrice}</div>
        </div>
        <div style={{ width: "250px", marginLeft:"40px" }} className="hiddendetInMobile">
              <MaterialButton
                title={props.title}
                onClick={props.onClick}
              />
            </div>
      </div>
    </Card>
       <Card style={{padding: "20px"}}>
       <h5>Expeceted Shipping delivery</h5>
       <p>Thu, 12.03 - Mon, 16.03</p>
     </Card>
     </div>
  );
};

export default PriceDetails;