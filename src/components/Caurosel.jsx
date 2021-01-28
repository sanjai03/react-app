import ProductCard from './ProductCard'
import product2 from '../image/product2.jpg'
function Caurosel(props){
    return(
        <div  class="row my-3 text-center">
              <div class="col-12" ><h2 class="text-center">{props.heading}</h2></div>
              <div className="col-1"></div>
              <div className="row col-10">
                <div class="col-3">
                <ProductCard name="Product1" rate="2135" btnClr="red" img={product2} />
                </div>
                <div class="col-3">
                <ProductCard name="Product1" rate="2135" btnClr="green" img={product2} />               
                 </div>
                <div class="col-3">
                <ProductCard name="Product1" rate="2135" btnClr="green" img={product2} />
                </div>
                <div class="col-3">
                <ProductCard name="Product1" rate="2135" btnClr="green" img={product2} />
                </div>
                </div>
  
  
              </div>
    )
}
export default Caurosel