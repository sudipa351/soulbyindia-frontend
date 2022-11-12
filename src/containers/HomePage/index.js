import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory, getProducts } from '../../actions';
import Layout from '../../components/Layout';
import NavBar from '../../components/NavBar';
import Headers from '../../components/Headers';
import {Carousel} from 'react-bootstrap'
import banner1 from '../../images/logo/banner-3.jpg';
import banner2 from '../../images/logo/women-banner.jpg';
import item1 from '../../images/3.png';
import item2 from '../../images/logo/bag2.jpg';
import item4 from '../../images/2.png';
import midBanner from '../../images/1.png';
import { generatePublicUrl } from '../../urlConfig';
import './style.css';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../../components/Footer';

import tshirt from '../../assets/dress image/onepiece.jpg';
import sunglass from '../../assets/dress image/Sunglasses.jpg';
import bag from '../../assets/dress image/bag2.jpg';
import pant from '../../assets/dress image/pant.jpg';
import top from '../../assets/dress image/t shirt.jpg';
import shirt from '../../assets/dress image/formal blue shirt.jpeg';
import shoe from '../../assets/dress image/mens-denim-shirt.jpg';
import item17 from '../../assets/dress image/gray sweater.jpg';


import {Link} from 'react-router-dom';
/**
* @author
* @function HomePage
**/

const HomePage = (props) => {
  const category = useSelector(state => state.category);
  const product = useSelector(state => state.product);
 
  console.log(category, ">>cate");
  const dispatch = useDispatch();
  console.log(product, ">>product");

  useEffect(() => {
    dispatch(getAllCategory())
  }, []);

  

  const renderCategories = (categories) =>{
          
    let myCategories = [];
    for(let category of categories){
        myCategories.push(
            <li key ={category.name}>
             {
               category.parentId ? <a href={`/${category.slug}?cid=${category._id}&type=${category.type}`}>{category.name} <img style={{width: '50px', height: '50px'}} src={category.categoryImage} alt="alt"/></a>  : <span>{category.name} </span>
             }
                {category.children.length > 0 ? (<ul>{renderCategories(category.children)}</ul>): null}
            </li>
        )
    } 

    return myCategories;

}

  return(
    // <Layout>
 

    // </Layout>
    <>
    <NavBar></NavBar>
    <br />  <br /> 
    <Carousel className="carousel slide carousel-inner">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner1}
      alt="First slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner2}
      alt="Second slide"
    />

  
  </Carousel.Item>

</Carousel>
<div className="headding-all">
<h2>Top Catelogs</h2>
</div>
<div className="homeCatelogMain">

  {
    category.categories.map(cat => 
      
   
        <div className="homeCatelog">
         <div>
            <h5>{cat.name}</h5>
            {/* <div className="card-head">
                <img src={tshirt} alt="" />
              </div> */}
            {/* <img src={generatePublicUrl(category.categoryImage[0].img)} alt=""/> */}
            
         </div>
      </div>
  
      
      )
  }
</div>

<br /> <br /> <br /> <br />
<div className="headding-all">
<h2>New Arrivals</h2>
</div>
<div className="homeCategoryMain">

  {
    category.categories.map(cat => 
      
   
        <div className="homeCategory">
         <div>
            <h5>{cat.name}</h5>
         </div>
      </div>
  
      
      )
  }
</div>

      <section className="newArr">
        <div className="secHead">
       
          {/* <ThumbBtn /> */}
        </div>

        {/* <ImageMenu /> */}
        
        <div className="d-grid">
          <div className="col">
            <div className="card">
              <div className="card-head">
                <img src={tshirt} alt="" />
              </div>
              <div className="card-body">
                <h3>50% off</h3>
                <p className="price2">under &#8377;399</p>
              </div>
            </div>
          </div>
          
          <div className="col hide-card">
            <div className="card">
              <div className="card-head">
                <img src={sunglass} alt="" />
              </div>
              <div className="card-body">
                <h3>50% off</h3>
                <p className="price1">under &#8377;399</p>
              </div>
            </div>
          </div>
          
          <div className="col">
            <div className="card">
              <div className="card-head">
              <img src={bag} alt="" />
              </div>
              <div className="card-body">
                <h3>50% off</h3>
                <p className="price2">under &#8377;399</p>
              </div>
            </div>
          </div>
          
          <div className="col">
            <div className="card">
              <div className="card-head">
              <img src={pant} alt="" />
              </div>
              <div className="card-body">
                <h3>50% off</h3>
                <p className="price2">under &#8377;399</p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <div className="card-head">
              <img src={top} alt="" />
              </div>
              <div className="card-body">
                <h3>50% off</h3>
                <p className="price2">under &#8377;399</p>
              </div>
            </div>
          </div>
        </div>
      </section>

     
    
      <section>
        <div className="mid-banner">
          <div className="midText">
             <h3>50% OFF</h3>
             <p className="midText-p">All Men, Women, Kids Collection</p>
             <button>Shop Now</button>
          </div>
          <div className="midImg">
            <img src={midBanner} alt="" />
           </div>
        </div>
        
      </section>
      <div className="headding-all">
<h2>Treanding Products</h2>

</div>
      <section>

        <div className="trendMain">
           <div className="trend-product">
                <div className="col">
                  <img src={shirt} alt="" />
                </div>
           </div>
           <div className="trend-product1">
             <div className="trend-sides"></div>
             <div className="col">
             <img src={shoe} height="200" alt="" />
             </div>
                 
                
             <div className="trend-sides"></div>
             
                 <div className="col">
                 <img src={item17} height="200" alt="" />
                 </div>
                 
           </div>
        </div>
      </section>
      <section>
      <div className="headding-all">
<h2>LET THEM SPEAK FOR US !</h2>
<p>SOME IMPRESSIONS FROM OUR CUSTOMERS!</p>
</div>
<Carousel>

      <Carousel.Item> 
      <div  className="d-block w-100"  style={{height: '400px'}}>
      <Carousel.Caption className="inner-testi">
       <div>
       <img
     
     style={{backgroundColor: 'black', height: '150px', width: '150px', borderRadius:'50%', verticalAlign: 'middle'}}
     src={banner1}
     alt="First slide"
   />
       </div>
   <div>
   <h5>JON DEO</h5>
      <p>
      is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
      </p>
   </div>
    </Carousel.Caption>
      </div>
      </Carousel.Item>
 
      <Carousel.Item> 
      <div  className="d-block w-100"  style={{height: '400px'}}>
      <Carousel.Caption className="inner-testi">
       <div>
       <img
     
     style={{backgroundColor: 'black', height: '150px', width: '150px', borderRadius:'50%', verticalAlign: 'middle'}}
     src={banner1}
     alt="First slide"
   />
       </div>
   <div>
   <h5>JON DEO</h5>
      <p>
      is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
      </p>
   </div>
    </Carousel.Caption>
      </div>
      </Carousel.Item>
  


</Carousel>
      </section>
     <Footer />
    </>
    
   )
 
 }

export default HomePage