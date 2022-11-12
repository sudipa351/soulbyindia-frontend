import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, getProductDetailsById } from '../../actions';
import Layout from '../../components/Layout';
import { MaterialButton, NormalButton } from '../../components/MaterialUi';
import { generatePublicUrl } from '../../urlConfig';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { 
  IoIosArrowForward, 
  IoIosStar, 
  IoMdCart 
} from 'react-icons/io';
import { BiRupee } from 'react-icons/bi';
import { AiFillShopping, AiFillThunderbolt } from 'react-icons/ai';
import './style.css';
// import {addToCart} from '../../actions';
/**
* @author
* @function ProductDetailsPage
**/

const ProductDetailsPage = (props) => {


    const dispatch = useDispatch();
    const product = useSelector(state => state.product);
    useEffect(() =>{
        const {productId} = props.match.params;
        console.log(props);
        const payload = {  
         params:{
             productId
         }
        }

        dispatch(getProductDetailsById(payload))
    }, [])

    if(Object.keys(product.productDetails).length === 0){
      return null;
    }

  return(
    
    <Layout>
          <div className="productDescriptionContainer">
        <div className="flexRowPr">
        <Carousel className="prnewCar"
  showArrows={true}
  showThumbs={true}
  autoPlay={true}
  infiniteLoop={true}
  interval={5000}
  showStatus={false}
  transitionTime={1000}
  swipeable={true} 
  thumbWidth={50}
  showIndicators={false}
  dynamicHeight={500}
  >
  

           
        
             {
             product.productDetails.productPictures.map((pod, index) => 
                <img src={generatePublicUrl(pod.img)} alt={`${pod.img}`} />
               )
             }
    
           {/* <p className="legend">Legend 1</p> */}
       
           
           
       
   </Carousel>
        </div>
        <div className="productDetAdj">

          {/* home > category > subCategory > productName */}
          <div className="breed">
            <ul>
              <li><a href="#">Home</a><IoIosArrowForward /></li>
              <li><a href="#">Men</a><IoIosArrowForward /></li>
              <li><a href="#">Men-new-arrivals</a><IoIosArrowForward /></li>
              <li><a href="#">WoMen-new-arrivals</a><IoIosArrowForward /></li>
              <li><a href="#">{product.productDetails.name}</a></li>
            </ul>
          </div>
          {/* product description */}
          <div className="productDetails">
              <p className="productTitle">{product.productDetails.name}</p>
            <div>
              <span className="ratingCount">4.3 <IoIosStar /></span>
              <span className="ratingNumbersReviews">72,234 Ratings & 8,140 Reviews</span>
            </div>
            <div className="extraOffer">Extra <BiRupee />4500 off </div>
            <div className="flexRow priceContainer">
              <span className="price"><BiRupee />{product.productDetails.price}</span>
              <span className="discount" style={{ margin: '0 10px' }}>22% off</span>
              {/* <span>i</span> */}
              </div>
            <div>
             
              <p>
             {product.productDetails.description}
              </p>
              <p>
            Color
              </p>
              <p>Size</p>
              <div className="prButtonContainer">
              <NormalButton
                title="ADD TO CART"
                bgColor="#cb8364"
                textColor="#ffffff"
               
                icon={<AiFillShopping />}
                onClick ={() =>{
                  const {_id, name, price} = product.productDetails;
                  const img = product.productDetails.productPictures[0].img;
                  dispatch(addToCart({_id, name, price, img}));
                  props.history.push(`/cart`);

                }}
              />
              
              <NormalButton
                title="Wishlist"
                bgColor="transparent"
                textColor="#cb8364"
                border ="1px solid #cb8364"
               
                icon={<AiFillThunderbolt />}
                onClick ={() =>{
                  const {_id, name, price} = product.productDetails;
                  const img = product.productDetails.productPictures[0].img;
                  dispatch(addToCart({_id, name, price, img}));
                  props.history.push(`/cart`);

                }}
              />
            </div>
            <h4>Delivery Option</h4>
            </div>
          </div>
          

        </div>
      </div>
    </Layout>

   )

 }

export default ProductDetailsPage