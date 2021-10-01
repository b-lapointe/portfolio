import React, {useState} from "react"
import { Link } from 'gatsby'
import * as FaIcons from "react-icons/fa"
import * as IoIcons from "react-icons/io"
import { SidebarData } from "./sidebarData"
import { IconContext } from "react-icons"

import * as menuStyles from "./menu.module.scss"

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

  return (
    <div className={menuStyles.nav}>
      <IconContext.Provider value={{color: '#FFFAFF'}}>
      <div className={menuStyles.navbar}>
        <Link to="#" className={menuStyles.menuBars}>
          <FaIcons.FaBars onClick={showSidebar}/>
        </Link>
      </div>
      <nav className={sidebar ? menuStyles.active  : menuStyles.navMenu}>
        <ul className={menuStyles.navMenuItems} onClick={showSidebar}>
          <li className={menuStyles.navbarToggle}> 
            <Link to="#" className={menuStyles.menuBars}>
              <IoIcons.IoMdClose />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={menuStyles.navText}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
      </IconContext.Provider>
    </div> 
  )
}

export default Navbar