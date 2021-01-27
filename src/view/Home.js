import Header from "../components/Header";
import Footer from "../components/Footer"
import logo from "../image/download.jpg"
import product1 from '../image/product1.jpg'
import leaf from '../image/leaf.jpg'
import Caurosel from '../components/Caurosel'
import banner2 from '../image/banner2.jpg'
import Latestnews from '../components/Latestnews'
import Heading from '../components/Heading'
import axios from 'axios'
import { useState,useEffect } from 'react';
function Home(){
const[posts,setPosts]=useState([])
axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res)=>{
        console.log(res)
        setPosts(res.data)
      })
    return(
        <div>
            <Header />
            <div class="container-fluid ">
          <div>
            <img class="banner-background" src={logo} height="50%" width="95%" />
            <div class="row" style={{height:"300px"}}>
              <div class="col-2"></div>
              <div class="col-4 banner-detail-1" >
                  <h4>Welcome to</h4>
                  <h2>using the art of herps</h2>
                  <button class="button1" >Contuct Us</button>
              </div>
              <div class="col-5 banner-detail-2" >
                <img src={product1} height="40%" width="90%" />
              </div>
            </div>
            </div>
             <div class="row my-3" >
              <div class="col-1"></div>
              <div class="col-5">
                <h4 class="text-success">About Us</h4>
                <p>
                  Herbalife Nutrition is a global nutrition company whose purpose is to make the world
                   healthier and happier. The Company has been on a mission for nutrition - changing people's
                    lives with great nutrition products and programs - since 1980.
                  </p>
                  <p>
                    The Herbalife diet is pricey and involves highly processed shakes and many supplements,
                     some of which have been linked to negative health effects. Short-term use likely causes
                      weight loss, but long-term effectiveness is yet to be studied.
                  </p>
                
              </div>
              <div class="col-4">
                <img src={leaf} height="100%" width="100%" />
              </div>
            </div>
            <Caurosel heading="future Product" />
            <div>
              <img src={banner2} className='pos-abs' width="100%" height="50%" />
              <div class="row banner2-detail">
                <div class="col-2"></div>
                <div class="col-4 "  >
                <Heading text="Our Story" />
                    <h2></h2>
                    <p>Once he fully understood the science behind this special botanical, Mr. Manal bought
                       a hand-operated, tablet-compressing machine and began his work. At night, his shoulders 
                       would ache from producing a few hundred tablets, one small tablet at a time.</p>
                    <button class="button2" >Contuct Us</button>
                </div>
                <div class="col-5 banner-detail-2" >
                  <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY" height="80%" width="90%" ></iframe>
                </div>
              </div>
            </div>
            <Caurosel heading="Most Selling Product" />
              <div class="my-3">
              <Heading text='Our Gallary'/>
                <img src="../image/gallary.jpg" width="100%" height="60%" />
              </div>
              
           {posts && posts.length&&<Latestnews posts={posts} />}
          </div>  
            <Footer />
        </div>
    )
}
export default Home;