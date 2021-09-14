import './Navbar.css'
function Navbar(){

return (
    <div className="nav-bar">
      <ul className ="ul">
        <li >  <a class ="active" href="/">Home</a></li>
        <li className="About"> <a href="/">About</a></li>
        <li> <a href="/">Projects</a></li>
        <li> <a href="/">Contact</a></li>
      </ul>
   
  </div>
);

}
export default Navbar;