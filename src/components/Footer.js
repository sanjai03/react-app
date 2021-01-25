import logo from '../image/logo.png'
function Footer(){
    return(
        <footer class="bg-dark">
            <div class="footer-block row py-2 my-3 col-9">
              <div class="col-4">
                <div >
                  <img src={logo} alt="logo" class="footer-logo"  />
  
                </div>
                <p class="text-white">
                  Proper, balanced nutrition provides the nutrients you need every day to fuel your daily 
                  activities, promote and maintain a lifetime of good health and make your best shape a reality.
                  
                </p>
              </div>
              <div class="col-4">
                <h2 class="text-success">CONTACT US</h2>
                  <span class="text-white" ><i class=" fa text-success fa-address-card"></i>
                  68/75-79, Subba Road Avenue, Nungambakkam, Chennai, Tamil Nadu 600034</span><br/>
                  <span class="text-white" ><i class=" fa text-success fa-phone"></i>
                    044-353654</span><br/>
                    <span class="text-white" ><i class=" fa text-success fa-envelope-square"></i>
                    nutrient@gmail.com</span>
              </div>
              <div class="col-4">
                <h2 class="text-success">SUBSCRIBE US</h2>
                <p class="text-white">stay updated with our latest news.we promise not to spam</p>
                <div class="bg-success text-white p-3 footer-btn">Your Email<i class="float-right fa fa-envelope"></i></div>
              </div>
              
            </div>
            <div class="text-center text-white" className ="footer-bottom"> copyrights 2020 herbal</div>
          </footer>
    )
}
export default Footer;