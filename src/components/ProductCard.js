function ProductCard(props){
    return(
        <div class="p-3 card">
                    <img src={props.img} width="100%" class="px-1 py-1" />
    <p class=" product-txt px-1">{props.name}</p>
    <p class="product-txt px-1 text-center text-success">{props.rate}</p>
                    <button   class={ props.btnClr==='red'?"ml-5 text-white bg-danger col-6":'ml-5 text-white bg-success col-6'}>Buy</button>
                  </div>
    )
}
export default ProductCard