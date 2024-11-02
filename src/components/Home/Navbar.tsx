import { ModeToggle } from "../mode-toggle"
import { Button } from "../ui/button"

const Navbar = () => {
  return (
    <nav id="navbar" className=" flex justify-between items-center p-4 z-10">


        <div className="logoItem">
<h3>logo</h3>
        </div>

        <div className="itemContainer flex gap-4">
        <ModeToggle />

        <ul className="itemGroup flex justify-between items-center gap-4">
          <li className="itemContent cursor-pointer">Home</li>
            <li className="itemContent cursor-pointer">Contact</li>
            <li className="itemContent cursor-pointer">About us</li>
            
            <li className="itemContent">
              <Button>Login</Button>
            </li>
        </ul>
        </div>
       
      
    </nav>
  )
}

export default Navbar
