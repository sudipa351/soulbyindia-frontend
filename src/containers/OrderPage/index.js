import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../../actions';
import Layout from '../../components/Layout';
import { Breed } from '../../components/MaterialUi';
import Card from '../../components/UI/Card';
import { generatePublicUrl } from '../../urlConfig';
import { BiRupee } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import './style.css';
/**
* @author
* @function OrderPage
**/

const OrderPage = (props) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
  
    useEffect(() => {
        dispatch(getOrders())
    },[])
    return (
        <Layout>
          <div style={{ maxWidth: "1160px", margin: "80px auto" }}>
            <Breed
              breed={[
                { name: "Home", href: "/" },
                { name: "My Account", href: "/account" },
                { name: "My Orders", href: "/account/orders" },
              ]}
              breedIcon={<IoIosArrowForward />}
            />
            {user.orders.map((order) => {
              return order.items.map((item) => (
                
                <Card style={{ display: "block"}}>
                  <a
                    href={`/order_details/${order._id}`}
                    className="orderItemContainer"
                  >
                    <div className="orderImgContainer">
                      <img
                      
                        src={generatePublicUrl(item.productId.productPictures[0].img)}
                      />
                    </div>
                    <div className="orderRow">
                      <div className="orderName">{item.productId.name}</div>
                      <div className="orderPrice">
                        Price: &nbsp;
                         {item.payablePrice}   <BiRupee  className="priceRupee"/>
                      </div>
                      <div className="orderPayment mnone">Payment Status: &nbsp;<span>{order.paymentStatus}</span></div>
                      {/* <div className="orderPayment">Payment Status: &nbsp; {order.orderStatus}</div> */}
                   

             {
                        order.cancleOrder.map((cos, index) => 
                        <>
                        {
                          item.removeOrder[0].isRemoveOrder ?   <div className="orderPayment">Order Status: &nbsp; <span>{item.removeOrder[0].type}</span> </div> 
                          : 
                          
                      
                            order.orderStatus.filter((od, index)=> od.isCompleted).slice(-1).map((oc, index) => 
                            
                            <div className="orderPayment">Order Status: &nbsp; <span>{oc.type}</span> </div>
                            
                            )
                             
                            
                        }
                      
                        </>
                        )
             }
                     {/* {
                       order.orderStatus.map((oc, index) => {
                        let CompletedItems = order.orderStatus.filter((od, index)=> od.isCompleted);
                        let item32 = CompletedItems ?.length ? CompletedItems[CompletedItems.length-1]:{};
                        return(<h2>{item32.type}</h2>)
                         
                       })
                     } */}
                    </div>
                  </a>
                </Card>
              ));
            })}
          </div>
        </Layout>
      );
    };

export default OrderPage;