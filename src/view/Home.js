import Header from "../components/Header";
import Footer from "../components/Footer"
import logo from "../image/download.jpg"
import product1 from '../image/product1.jpg'
function Home(){
    return(
        <div>
            <Header />
            <div class="container-fluid ">
          <div>
            <img class="banner-background" src={logo} height="50%" width="95%" />
            <div class="row">
              <div class="col-2"></div>
              <div class="col-4 " class="banner-detail-1" >
                  <h4>Welcome to</h4>
                  <h3>using the art of herps</h3>
                  <button class="button1" >Contuct Us</button>
              </div>
              <div class="col-5 banner-detail-1" >
                <img src={product1} height="80%" width="90%" />
              </div>
            </div>
            </div>
            {/* <div class="row my-3">
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
                <img src="../image/leaf.jpg" height="100%" width="100%" />
              </div>
            </div>
            <div style="margin-left: 100px;" class="row my-3 col-10 text-center">
            <div class="col-12" ><h2 class="text-center">featured Products</h2></div>
              <div class="col-3">
                <div class="p-3 card">
                  <img src="../image/product2.jpg" width="100%" class="px-1 py-1" />
                  <p class=" product-txt px-1">product 1</p>
                  <p class="product-txt px-1 text-center text-success">2135</p>
                  <button  class="ml-5 text-white bg-danger col-6">Buy</button>
                </div>
              </div>
              <div class="col-3">
                <div class="p-3 card">
                  <img src="../image/product2.jpg" width="100%" class="px-1 py-1" />
                  <p class=" product-txt px-1">product 1</p>
                  <p class="product-txt px-1 text-center text-success">2135</p>
                  <button  class="ml-5 text-white bg-success col-6">Buy</button>
                </div>
              </div>
              <div class="col-3">
                <div class="p-3 card">
                  <img src="../image/product2.jpg" width="100%" class="px-1 py-1" />
                  <p class=" product-txt px-1">product 1</p>
                  <p class="product-txt px-1 text-center text-success">2135</p>
                  <button  class="ml-5 text-white bg-success col-6">Buy</button>
                </div>
              </div>
              <div class="col-3">
                <div class="p-3 card">
                  <img src="../image/product2.jpg" width="100%" class="px-1 py-1" />
                  <p class=" product-txt px-1">product 1</p>
                  <p class="product-txt px-1 text-center text-success">2135</p>
                  <button  class="ml-5 text-white bg-success col-6">Buy</button>
                </div>
              </div>


            </div>
            <div>
              <img src="../image/banner2.jpg" style="position: absolute;" width="100%" height="70%" />
              <div class="row" style="padding-top: 60px; padding-bottom: 90px;">
                <div class="col-2"></div>
                <div class="col-4 "  >
                    <h2>Our Story</h2>
                    <p>Once he fully understood the science behind this special botanical, Mr. Manal bought
                       a hand-operated, tablet-compressing machine and began his work. At night, his shoulders 
                       would ache from producing a few hundred tablets, one small tablet at a time. But his hard 
                       work paid off. This remarkable plant would later become Serpina, the world’s first 
                       anti-hypertensive drug in 1934.</p>
                    <button class="button2" >Contuct Us</button>
                </div>
                <div class="col-5" style="margin-top: 50px;" >
                  <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY" height="80%" width="90%" ></iframe>
                </div>
              </div>
            </div>
            <div style="margin-left: 100px;" class="row my-3 col-10 text-center">
              <div class="col-12" ><h2 class="text-center">Best Sellers</h2></div>
                <div class="col-3">
                  <div class="p-3 card">
                    <img src="../image/product2.jpg" width="100%" class="px-1 py-1" />
                    <p class=" product-txt px-1">product 1</p>
                    <p class="product-txt px-1 text-center text-success">2135</p>
                    <button  class="ml-5 text-white bg-danger col-6">Buy</button>
                  </div>
                </div>
                <div class="col-3">
                  <div class="p-3 card">
                    <img src="../image/product2.jpg" width="100%" class="px-1 py-1" />
                    <p class=" product-txt px-1">product 1</p>
                    <p class="product-txt px-1 text-center text-success">2135</p>
                    <button  class="ml-5 text-white bg-success col-6">Buy</button>
                  </div>
                </div>
                <div class="col-3">
                  <div class="p-3 card">
                    <img src="../image/product2.jpg" width="100%" class="px-1 py-1" />
                    <p class=" product-txt px-1">product 1</p>
                    <p class="product-txt px-1 text-center text-success">2135</p>
                    <button  class="ml-5 text-white bg-success col-6">Buy</button>
                  </div>
                </div>
                <div class="col-3">
                  <div class="p-3 card">
                    <img src="../image/product2.jpg" width="100%" class="px-1 py-1" />
                    <p class=" product-txt px-1">product 1</p>
                    <p class="product-txt px-1 text-center text-success">2135</p>
                    <button  class="ml-5 text-white bg-success col-6">Buy</button>
                  </div>
                </div>
  
  
              </div>
              <div class="my-3">
                <h2 class="text-center" >Our Gallary</h2>
                <img src="../image/gallary.jpg" width="100%" height="60%" />
              </div>
              <div style="margin-left: 170px;" class="row my-3 col-9">
                <div class="col-10"><h4 class="text-success">Recent News</h4><h2 class="align-left">Our Latest News</h2></div>
                <div class="col-2"><button class="button1">view more</button></div>
                <div class="col-4">
                  <div class="p-3 card">
                    <img src="../image/nutrion.jpg" width="100%" class="px-1 py-1" />
                    <h4 class=" product-txt px-1">Nutrient Club</h4>
                    <p class=" px-1 text-primary">
                      Concurrently, plant sources of ephedrine were removed from Herbalife products in 2002 after several 
                      U.S. states banned supplements containing such herbs
                    </p>
                    <p class="row"><span class="col-6 text-primary">5 april</span><span class="col-6 text-primary">5 comments</span></p>
                  </div>
                </div>
                <div class="col-4">
                  <div class="p-3 card">
                    <img src="../image/nutrion.jpg" width="100%" class="px-1 py-1" />
                    <h4 class=" product-txt px-1">Nutrient Club</h4>
                    <p class=" px-1 text-primary">
                      Concurrently, plant sources of ephedrine were removed from Herbalife products in 2002 after several 
                      U.S. states banned supplements containing such herbs
                    </p>
                    <p class="row"><span class="col-6 text-primary">5 april</span><span class="col-6 text-primary">5 comments</span></p>
                  </div>
                </div>
                <div class="col-4">
                  <div class="p-3 card">
                    <img src="../image/nutrion.jpg" width="100%" class="px-1 py-1" />
                    <h4 class=" product-txt px-1">Nutrient Club</h4>
                    <p class=" px-1 text-primary">
                      Concurrently, plant sources of ephedrine were removed from Herbalife products in 2002 after several 
                      U.S. states banned supplements containing such herbs
                    </p>
                    <p class="row"><span class="col-6 text-primary">5 april</span><span class="col-6 text-primary">5 comments</span></p>
                  </div>
                </div>
    </div>*/}
          </div>  
            <Footer />
        </div>
    )
}
export default Home;