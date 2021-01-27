import banner from '../image/banner.jpg';
import List from "./List";
function Home(){
    return(
    
        <header className="nav-background">
  <div className="container">
    <nav className="navbar navbar-expand-sm ">
      <a href="/"><img src={banner}  height="30px"/></a>
      <ul className="pl-2 navbar-nav ">
        <List text="Home" />
        <List text="Herbal Life" />
        <List text="Store" />
        <List text="Gallary" />
        <List text="Blog" />
        <List text="Contuct Us" />
        
      </ul>
      <ul className="pl-2 navbar-nav ml-auto ">
        <List icon="facebook" />
        <li className="nav-item">
          <a href="#" className="nav-link fa fa-twitter text-white" />
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link fa fa-instagram text-white" />
        </li>
        <li className="nav-item ">
          <a href="#" className="nav-link fa fa-youtube text-white" />
        </li>
      </ul>
    </nav>
  </div>
</header>

        
    )
}
export default Home;