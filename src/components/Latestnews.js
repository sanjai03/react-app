import Newscard from './Newscard'
import image from '../image/nutrion.jpg'
function Latestnews(){
    const clubName="Nutrient Club"
    const describtion = "Concurrently, plant sources of ephedrine were removed from Herbalife products in 2002 after several U.S. states banned supplements containing such herbs"
    return(
        <div class="row my-3">
        <div className="col-1"></div>
        <div className ="col-10 row">
        <div class="col-10"><h4 class="text-success">Recent News</h4><h2 class="align-left">Our Latest News</h2></div>
        <div class="col-2"><button class="button1">view more</button></div>
        <div class="col-4">
        <Newscard img={image} name={clubName} desc={describtion} />
        </div>
        <div class="col-4">
        <Newscard img={image} name={clubName} desc={describtion} />
        </div>
        <div class="col-4">
        <Newscard img={image} name={clubName} desc={describtion} />
        </div>
        </div>
</div>
    )
}
export default Latestnews