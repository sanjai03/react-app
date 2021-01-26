function Newscard(props){
    return(
        <div class="p-3 card">
        <img src={props.img} width="100%" class="px-1 py-1" />
    <h4 class=" product-txt px-1">{props.name}</h4>
        <p class=" px-1 text-primary">{props.desc}
        </p>
        <p class="row"><span class="col-6 text-primary">5 april</span><span class="col-6 text-primary">5 comments</span></p>
      </div>
    )
}
export default Newscard