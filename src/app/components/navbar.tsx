import { AiOutlineInstagram } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { tomorrow } from "../../lib/fonts/fonts";
import Link from "next/link";


export default function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-section">

        <div>
          <button className="btn">Login</button>
        </div>


        <div className="navbar-logo">
          <Link href="/">
            <h1 className={tomorrow.className}>
              <span style={{ color: "#f2b705" }}>Movie</span>
              <span style={{ color: "#0dd0f7" }}>Draft</span>
            </h1>
          </Link>
        </div>


        <div className="navbar-icons">
          <AiOutlineInstagram style={{ color: "white", fontSize: "30px" }} />
          <IoMdClose style={{ color: "white", fontSize: "30px" }} />
        </div>

      </div>
    </div>
  )
}