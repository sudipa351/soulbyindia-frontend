import React from 'react';
import Footer from '../Footer';
import Header from '../Headers';
import  Navbar  from '../NavBar';


/**
* @author
* @function Layout
**/

const Layout = (props) => {
  return(
   <> 
 <Navbar  />
 {/* <Header /> */}
   {/* <MenuHeader /> */}
   <div style={{marginTop: '50px'}}>
   {props.children}
   </div>
   <Footer/>
   </>
   )

 }

export default Layout