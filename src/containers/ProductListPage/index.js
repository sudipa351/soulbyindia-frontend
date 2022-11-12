import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsBySlug } from '../../actions';
import Layout from '../../components/Layout';
import { generatePublicUrl } from '../../urlConfig';
import getParams from '../../utils/getParams';
import ClothingAndAccessories from './ClothingAndAccessories';
import ProductPage from './ProductPage';
import ProductStore from './ProductStore';
import Kids from './Kids';
import './style.css';

/**
* @author
* @function ProductListPage
**/

const ProductListPage = (props) => {

const renderProduct = () =>{
  console.log(props);
  const params = getParams(props.location.search);
  let content = null;
  console.log(params);
  switch(params.type){
    case 'store':
      content = <Kids {...props} />;
      break;
    case 'page':
      content = <ProductPage {...props} />;
      break;
    default:
      content = <ClothingAndAccessories {...props} />
  }
  return content;
}


  return(
  
   <Layout>
     {renderProduct()}
    
   
   </Layout>
   )

 }

export default ProductListPage