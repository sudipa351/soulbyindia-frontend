import React from 'react';
import Layout from '../Layout';
import './style.css';
import confirm from '../../images/confirm.gif';

/**
* @author
* @function ThankYou
**/

export const ThankYou = (props) => {
  return(
 <Layout>
     <div className="thankyouSuccess">
         <div className="confirmOd">
             <img src={confirm} alt={``} />
         </div>
         <div className="confirmText">
             <h4>Thanks you for shopping with us, your order is complete!</h4>
         </div>
         <div className="confirmButtonContainer">
             <a href="#">View / Manage Order</a>
             <a href="#" className="confirmActive">Continue Shopping</a>
         </div>
     </div>
 </Layout>
   )

 }