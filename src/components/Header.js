import banner from '../image/banner.jpg';
function Home(){
    return(
    
        <header className="nav-background">
  <div className="container">
    <nav className="navbar navbar-expand-sm ">
      <a href="/"><img src={banner}  height="30px"/></a>
      <ul className="pl-2 navbar-nav ">
        <li className="nav-item">
          <a href="/" className="nav-link text-white">Home</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-white">Herbal Life</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-white">Store</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-white">Gallary</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-white">Blog</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-white">Contuct Us</a>
        </li>
      </ul>
      <ul className="pl-2 navbar-nav ml-auto ">
        <li className="nav-item">
          <a href="#" className="nav-link fa fa-facebook text-white" />
        </li>
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