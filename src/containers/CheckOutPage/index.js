import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addOrder, getAddress, getCartItems } from "../../actions";
import Layout from "../../components/Layout";
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import confirm from '../../images/confirm.gif';
import {
  Anchor,
  MaterialButton,
  MaterialInput,
} from "../../components/MaterialUi";
import PriceDetails from "../../components/PriceDetails";
import Card from "../../components/UI/Card";
import CartPage from "../CartPage";

import AddressForm from "./AddressForm";
import { FaRubleSign, FaRupeeSign } from 'react-icons/fa';
import "./style.css";

/**
 * @author
 * @function CheckOutPage
 **/

 
 const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
   
  },
  backButton: {
    marginRight: theme.spacing(0),
  },
  instructions: {
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(0),
  },
}));
const CheckoutStep = (props) => {
  return (
    <div className="checkoutStep">
      <div
        onClick={props.onClick}
        className={`checkoutHeader ${props.active && "active"}`}
      >
        <div>
          <span className="stepNumber">{props.stepNumber}</span>
          <span className="stepTitle">{props.title}</span>
        </div>
      </div>
      {props.body && props.body}
    </div>
  );
};

const Address = ({
  adr,
  selectAddress,
  enableAddressEditForm,
  confirmDeliveryAddress,
  onAddressSubmit,
}) => {
  return (
    <div className="flexRow addressContainer">
      <div>
        <input name="address" onClick={() => selectAddress(adr)} type="radio" />
      </div>
      <div className="flexRow sb addressinfo">
        {!adr.edit ? (
          <div style={{ width: "100%" }}>
            <div className="addressDetails">
              <div>
                <span className="addressName">{adr.name}</span>
                <span className="addressType">{adr.addressType}</span>
                <span className="addressMobileNumber">{adr.mobileNumber}</span>
              </div>
              {adr.selected && (
                <Anchor
                  name="EDIT"
                  onClick={() => enableAddressEditForm(adr)}
                  style={{
                    fontWeight: "500",
                    color: "#cb8364",
                  }}
                />
              )}
            </div>
            <div className="fullAddress">
              {adr.address} <br /> {`${adr.state} - ${adr.pinCode}`}
            </div>

            {adr.selected && (
              <MaterialButton
                title="Delivery Here"
                onClick={() => confirmDeliveryAddress(adr)}
                style={{ width: "250px", margin: "10px 0px" }}
              />
            )}
          </div>
        ) : (
          <AddressForm
            witoutLayout={true}
            onSubmitForm={onAddressSubmit}
            initialData={adr}
            onCancle={() => {}}
          />
        )}
      </div>
    </div>
  );
};

const CheckOutPage = (props) => {
  const user = useSelector((state) => state.user);
  const auth = useSelector((state) => state.auth);
  const orderDetails = useSelector((state) => 
  {
    console.log(state, state.user);
    return state.user.lastOrderDetails});
  const [newAddress, setNewAddres] = useState(false);
  const [address, setAddress] = useState([]);
  const [confirmAddress, setConfirmAddress] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const cart = useSelector((state) => state.cart);
  const [cartItems, setCartItems] = useState(cart.cartItems);
  const [orderSummary, setOrderSummary] = useState(false);
  const [orderConfirmation, setOrderConfirmation] = useState(false);
  const [paymentOption, setPaymentOption] = useState(false);
  const [confirmOrder, setConfirmOrder] = useState(false);
  const dispatch = useDispatch();
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();


useEffect(()=>{
 console.log(orderDetails, ">>>odddd");
})

  
  function getSteps() {
    return ['Delivery Address', 'Order Summery', 'Payment Oprtion'];
  }
  
  
  // function getStepContent(stepIndex) {
  //   switch (stepIndex) {
  //     case 0:
  //       return            <CheckoutStep
  //       stepNumber={"2"}
  //       title={"DELIVERY ADDRESS"}
  //       active={!confirmAddress && auth.authenticate}
  //       body={
  //         <>
  //           {confirmAddress ? (
  //             <div className="stepCompleted">{`${selectedAddress.name}  ${selectedAddress.address} - ${selectedAddress.pinCode}`}</div>
  //           ) : (
  //             address.map((adr) => (
  //               <Address
  //                 selectAddress={selectAddress}
  //                 enableAddressEditForm={enableAddressEditForm}
  //                 confirmDeliveryAddress={confirmDeliveryAddress}
  //                 onAddressSubmit={onAddressSubmit}
  //                 adr={adr}
  //               />
  //             ))
  //           )}
  //         </>
  //       }
  //     />
  //     case 1:
  //       return 'What is an ad group anyways?';
  //     case 2:
  //       return 'This is the bit I really care about!';
  //     default:
  //       return 'Unknown stepIndex';
  //   }
  // }

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
   
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const onAddressSubmit = (addr) => {
    setSelectedAddress(addr);
    setConfirmAddress(true);
    setOrderSummary(true);
   
  };

  const selectAddress = (addr) => {
    console.log(addr);
    const updatedAddress = address.map((adr) =>
      adr._id === addr._id
        ? { ...adr, selected: true }
        : { ...adr, selected: false }
    );
    setAddress(updatedAddress);
  };

  const confirmDeliveryAddress = (addr) => {
    setSelectedAddress(addr);
    console.log(setSelectedAddress(addr), "hyjsdhfjs");
    setConfirmAddress(true);
    setOrderSummary(true);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const enableAddressEditForm = (addr) => {
    const updatedAddress = address.map((adr) =>
      adr._id === addr._id ? { ...adr, edit: true } : { ...adr, edit: false }
    );
    setAddress(updatedAddress);
  };

  const userOrderConfirmation = () => {
    setOrderConfirmation(true);
    setOrderSummary(false);
    setPaymentOption(true);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const onConfirmOrder =() =>{
    const totalAmount = Object.keys(cart.cartItems).reduce(
      (totalPrice, key) => {
        const { price, qty } = cart.cartItems[key];
        return totalPrice + price * qty;
      },
      0
    );

    const items = Object.keys(cart.cartItems).map((key) => ({
      productId: key,
      payablePrice: cart.cartItems[key].price,
      purchasedQty: cart.cartItems[key].qty,
    }));
    const payload = {
      addressId: selectedAddress._id,
      totalAmount,
      items,
      paymentStatus: "pending",
      paymentType: "cod",
    
    };
    console.log(payload);
    dispatch(addOrder(payload));
    setConfirmOrder(true);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  }

  useEffect(() => {
    auth.authenticate && dispatch(getAddress());
    auth.authenticate && dispatch(getCartItems());
  }, [auth.authenticate]);

  useEffect(() => {
    const address = user.address.map((adr) => ({
      ...adr,
      selected: false,
      edit: false,
    }));
    setAddress(address);
  }, [user.address]);

  if(confirmOrder){
    return(
      <Layout>
        <div style={{marginTop: '150px'}}>
 
        <div className="thankyouSuccess">
         <div className="confirmOd">
             <img src={confirm} alt={``} />
         </div>
         <div className="confirmText">
             <h4>Thanks you for shopping with us, your order is complete!</h4>
             <p>orderId: {orderDetails._id}</p>
         </div>
         <div className="confirmButtonContainer">
             <a href="/account/orders">View / Manage Order</a>
             <a href="/" className="confirmActive">Continue Shopping</a>
         </div>
     </div>
     
        </div>

      </Layout>
    )
  }

  return (
    <Layout>
         {auth.authenticate ? 
                  <div className={classes.root}  style={{marginTop: '65px', marginBottom: '-70px'}}>
                  <Stepper activeStep={activeStep} variant="danger" className="newStepper"  alternativeLabel>
                    {steps.map((label) => (
                      <Step  key={label}>
                        <StepLabel>{label}</StepLabel>
                      </Step>
                    ))}
      
                  </Stepper>
                  <div>
                    {activeStep === steps.length ? (
                      <div>
                        <Typography className={classes.instructions}>All steps completed</Typography>
                        <Button onClick={handleReset}>Reset</Button>
                      </div>
                    ) : (
                      <div>
                        {/* <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography> */}
                        <div>
                          {/* <Button
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            className={classes.backButton}
                          >
                            Back
                          </Button> */}
                          {/* <Button variant="contained" color="primary" onClick={handleNext}>
                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                          </Button> */}
                        </div>
                      </div>
                    )}
                  </div>
                </div> : null
      
      }

    
      <div className="cartContainer" style={{ alignItems: "flex-start" }}>
        

        <div className="checkoutContainer">

     
          {/* check if user logged in or not */}

          <CheckoutStep
            stepNumber={"1"}
            title={"LOGIN"}
            active={!auth.authenticate}
            body={
              auth.authenticate ? (
                <div className="loggedInId stepCompleted">
                  <span  style={{ fontWeight: 500 }}>{auth.user.fullName}</span>
                  <span style={{ margin: "0 5px" }}>{auth.user.email}</span>
                </div>
              ) : (
                <div>
                  <MaterialInput label="Enter your Email Address" />
                </div>
              )
            }
          />

          {/* step 2 */}

          <CheckoutStep
            stepNumber={"2"}
            title={"DELIVERY ADDRESS"}
            active={!confirmAddress && auth.authenticate}
            body={
              <>
                {confirmAddress ? (
                  <div className="stepCompleted">{`${selectedAddress.name}  ${selectedAddress.address} - ${selectedAddress.pinCode}`}</div>
                ) : (
                  address.map((adr) => (
                    <Address
                      selectAddress={selectAddress}
                      enableAddressEditForm={enableAddressEditForm}
                      confirmDeliveryAddress={confirmDeliveryAddress}
                      onAddressSubmit={onAddressSubmit}
                      adr={adr}
                    />
                  ))
                )}
              </>
            }
          />

          {/* AddressForm */}

          {confirmAddress ? null : newAddress ? (
            <AddressForm onSubmitForm={onAddressSubmit} onCancle={() => {}} />
          ) : auth.authenticate ? (
            <CheckoutStep
              stepNumber={"+"}
              title={"Add New Address"}
              active={false}
              onClick={() => setNewAddres(true)}
            />
          ) : null}

          <CheckoutStep
            stepNumber={3}
            title={"oreder summery"}
            active={orderSummary}
            body={
              orderSummary ? (
                <CartPage onlyCartItems={true} />
              ) : orderConfirmation ? (
                <div className="stepCompleted">{Object.keys(cart.cartItems).length} items</div>
              ) : null
            }
          />

          {orderSummary && (
            <Card style={{ margin: "10px 0px", width: "100%" }}>
              <div
                className="flexRow sb"
                style={{ padding: "20px", alignItems: "center" }}
              >
                <p style={{ fontSize: "14px" }}>
                  Order Confirmation Email will be sent to{" "}
                  <strong>{auth.user.email}</strong>
                </p>
                <MaterialButton
                  title="CONTINUE"
                  onClick={userOrderConfirmation}
                  style={{ width: "200px" }}
                />
              </div>
            </Card>
          )}

<CheckoutStep
            stepNumber={"4"}
            title={"PAYMENT OPTIONS"}
            active={paymentOption}
            body={
              paymentOption && (
                <div>
                  <div
                    className="flexRow"
                    style={{
                      alignItems: "center",
                      padding: "20px",
                    }}
                  >
                    <input type="radio" name="paymentOption" value="cod" />
                    <div>Cash on delivery</div>
                  </div>
                  <MaterialButton
                    title="CONFIRM ORDER"
                    onClick={onConfirmOrder}
                    style={{
                      width: "200px",
                      margin: "0 0 20px 20px",
                    }}
                  />
                </div>
              )
            }
          />
        </div>
        {/* price details */}
    
        {/* <PriceDetails
          totalItem={Object.keys(cart.cartItems).reduce((qty, key) => {
            return qty + cart.cartItems[key].qty;
          }, 0)}
          totalPrice={Object.keys(cart.cartItems).reduce((totalPrice, key) => {
            const { price, qty } = cart.cartItems[key];
            return totalPrice + price * qty;
          }, 0)}
          onClick={handleNext}
          title={`next`}
        /> */}

        <div className="priceNewDetails">
          <h2>Price Details</h2>
        
          {/* <hr /> */}
          <div className="priceFlex">
            <div className="innerPriceFlex">
              <h5>Price(     {Object.keys(cart.cartItems).reduce((qty, key) => {
            return qty + cart.cartItems[key].qty;
          }, 0)} items)</h5>
          <h5>Delevery Charges</h5>
       
            </div>
            <div className="innerPriceFlex">
                <h5> <FaRupeeSign />
                {Object.keys(cart.cartItems).reduce((totalPrice, key) => {
            const { price, qty } = cart.cartItems[key];
            return totalPrice + price * qty;
          }, 0)}
                </h5>
                <h5>Free</h5>
            </div>
            
          </div>
          
         <hr />
         <div className="priceFlex">
            <div className="innerPriceFlex"><h3>Total Payable</h3>
         
       
            </div>
            <div className="innerPriceFlex">
                <h3> <FaRupeeSign />
                {Object.keys(cart.cartItems).reduce((totalPrice, key) => {
            const { price, qty } = cart.cartItems[key];
            return totalPrice + price * qty;
          }, 0)}
                </h3>
             
            </div>
            
          </div>       
        </div>
   
      </div>


    </Layout>
  );
};

export default CheckOutPage;
