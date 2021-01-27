function Newscard(props){
    return(
        <div class="p-3 card">
        
    <h4 class=" product-txt px-1">{props.name}</h4>
        <p class=" px-1 text-primary">{props.desc}
        </p>
        <p class="row"><span class="col-6 text-primary">view</span><span class="col-6 text-primary">comments</span></p>
      </div>
    )
}
export default Newscard