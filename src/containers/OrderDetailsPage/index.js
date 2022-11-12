import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cancleOrder, getOrder } from "../../actions";
import Layout from "../../components/Layout";
import Card from "../../components/UI/Card";
import { generatePublicUrl } from "../../urlConfig";
import Price from "../../components/UI/Price";

import "./style.css";
import { FaArrowRight, FaChevronRight, FaRupeeSign } from "react-icons/fa";
import { useMemo } from "react";


/**
 * @author
 * @function OrderDetails
 **/

const OrderDetailsPage = (props) => {

  const dispatch = useDispatch();
  const typeRef = useRef("");
  const orderDetails = useSelector((state) => state.user.orderDetails);
  const auth = useSelector(state => state.auth);
  const order = useSelector(state => state.user.orders);
  const onCancleOrder = (orderId, productId) => {
    const payload = {
      orderId,
      productId,
      type: typeRef.current
    };
    dispatch(cancleOrder(payload));
  };

console.log(order, ">>user");
  console.log(orderDetails);

  useEffect(() => {
    console.log({ props });
    const payload = {
      orderId: props.match.params.orderId,
    };
    dispatch(getOrder(payload));
  }, []);

const cancleItem = useMemo(() => {
  const {cancleOrder} = orderDetails;
  let newCancleItem = cancleOrder ? cancleOrder[0] : {};
  return newCancleItem;
  // console.log(cancleItem);
 }, [orderDetails]);

 

  const formatDate = (date) => {
    if (date) {
      const d = new Date(date);
      return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
    }
    return "";
  };

  const formatDate2 = (date) => {
    const month = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    if (date) {
      const d = new Date(date);
      return `${month[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
    }
  };

  if (!(orderDetails && orderDetails.address)) {
    return null;
  }

  return (
    <Layout>
      <div className="detailsContainer">
        <h2>Order Details</h2>
        <div className="detUpperContainer">
          <div className="delTitle">
            <h5>Delivery Address</h5>
            <h6>{orderDetails.address.name}</h6>
            <h6>{orderDetails.address.address}</h6>
            <h6>{orderDetails.address.mobileNumber}</h6>
          </div>
          <div className="delTitle">
            <h6>OrderId: &nbsp; {orderDetails._id}</h6>
            <h6>Phone number: {orderDetails.address.mobileNumber}</h6>
            <a href="#">View Invoice</a>
            <h6></h6>
          </div>
        </div>

        {orderDetails.items.map((item, index) => (
          <>
            <div className="detLowerContainer">
              <div className="delItemImgContainer">
                <img
                  src={generatePublicUrl(item.productId.productPictures[0].img)}
                  alt=""
                />
              </div>
              <div className="lowerDetRight">
                <div className="delItemName">{item.productId.name}</div>

                {/* {orderDetails.cancleOrder.map((status) => {
                  return (
                    <>
         
                      {!status.isCanclled ? (
                        <>
                                    <select onChange={(e) => setType(e.target.value)}>
                                    <option value={""}>select status</option>
                        <option key={status.type} value={status.type}>
                          {status.type}
                        </option>
                        </select>
                          <button onClick={() => onCancleOrder(orderDetails._id)}>Cancke</button>
                          </>
                      ) : <h1>item cancelled successfully on {status.date}</h1>}
                      
                    </>
                  );
                })} */}

               

               
              <div className="cancleorderItem">
                {/* <p className="trackShipment">Track Shipment</p> */}
                {!item.removeOrder[0].isRemoveOrder ? (
                  <>
                   {orderDetails.orderStatus
                  .filter((od, index) => od.isCompleted)
                  .slice(-1)
                  .map((oc, index) => (
                    <>
                    <div className="cancleorderItem">
                    <h1>
                      {oc.type} on {formatDate2(oc.date)}{" "}
                    </h1>
                     
                 
                   </div>
                   <div className="tracknewDesign">
                  <div className="orderTrack">
                    {orderDetails.orderStatus.map((status) => (
                      <div
                        className={`orderStatus ${
                          status.isCompleted ? "active" : ""
                        }`}
                      >
                        <div
                          className={`point ${
                            status.isCompleted ? "active" : ""
                          }`}
                        ></div>
                        <div className="orderInfo">
                          <div className="status">{status.type}</div>
                          <div className="date">{formatDate(status.date)}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {oc.type=="shipped" || oc.type=="delivered" ? null : 
                //  (<>
                //    {item.removeOrder[0].isRemoveOrder?('hello'):(
                //      <button
                //      onClick={() => {
                //        typeRef.current = cancleItem.type;
                //        onCancleOrder(orderDetails._id, item.productId._id);
                //      }}
                //    >
                //      Cancle Order
                //    </button>
                //    )}
                //  </>)
                <button
                     onClick={() => {
                       typeRef.current = cancleItem.type;
                       onCancleOrder(orderDetails._id, item.productId._id);
                     }}
                   >
                     Cancle Order
                   </button>
}
                   </>
                  ))}
                  </>
              
                ) : <h1>Cancelled on {formatDate2(item.removeOrder[0].date)}{" "}</h1>}
                </div>
             
              </div>
            </div>
           
            <div className="delTitle mobBorderOrder">
              <h4>Order Summery</h4>
              <h6>OrderId: &nbsp; {orderDetails._id}</h6>
              <h6>Phone number: {orderDetails.address.mobileNumber}</h6>
              <h6>
                Total Amount: &nbsp;
                <FaRupeeSign /> {orderDetails.totalAmount}
              </h6>
              <a href="#">View Invoice</a>
              <h6></h6>
            </div>
            <br />
            <div className="delTitle mobBorderOrder">
              <h4>Shipping Address</h4>
              <h6>{orderDetails.address.name}</h6>
              <h6>{orderDetails.address.address}</h6>
              <h6>{orderDetails.address.mobileNumber}</h6>
              <h6>{auth.user.email}</h6>
            </div>

            <hr className="hrHide" />
            <div className="footerInfoDet">
              <div className="footerInfoDet-design">
                <h3>Item Name</h3>
                <p>{item.productId.name}</p>
              </div>
              <div className="footerInfoDet-design">
                <h3>Total Amount</h3>
                <p>
                  <FaRupeeSign /> {orderDetails.totalAmount}
                </p>
              </div>
              <div className="footerInfoDet-design">
                <h3>Delivers:</h3>
                <p>Standard Shipping</p>
              </div>
              <div className="footerInfoDet-design">
                <h3>Shared Shipping Address:</h3>
                <p>{auth.user.email}</p>
              </div>
            </div>
          </>
        ))}
      </div>
    </Layout>
  );
};

export default OrderDetailsPage;