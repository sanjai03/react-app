import { Link } from "react-router-dom";

function NewsCard(props){
    return(
        <div class="p-3 card">
           <div className="card-body-height">
           <h4 class=" product-txt text-success px-1">{props.name}</h4>
        <p class=" px-1 text-primary">{props.desc}
        </p>
               </div> 
        
    
        <p class="row"><Link to={"/post/"+props.id} class="col-6 text-primary">view</Link><Link to={"/post/comments/"+props.id} class="col-6 text-primary">comments</Link></p>
      </div>
    )
}
export default NewsCard