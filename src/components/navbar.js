import React, {useState} from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";


const Navbar = ()=>{

    const[isMenuBtnClicked, setMenuBtnClicked] = useState(false)
    const [isCloseBtnClicked, setCloseBtnClicked] = useState(false)


    return(<>
        <div className = 'navbar-div'>
            <div className = 'home-nav-div'>
                <label className = 'nav-btn'>Home</label>
            </div>
            <div className = 'nav-btns-div'>
                <label className = 'nav-btn'>Products  </label>
                <label className = 'nav-btn'>Contact Us </label>
                <label className = 'nav-btn'>About Us </label>
            </div>
        </div>
            <button className={`${isMenuBtnClicked ? 'menu-btn-icon menu-btn-icon-hide' : 'menu-btn-icon'}`} 
                onClick = {()=>setMenuBtnClicked(!isMenuBtnClicked)}><AiOutlineMenu/></button>

        <div className="menu-div">
            <div className='menu-btns-div'>
                <button className={`${isMenuBtnClicked? 'menu-btn-icon' : 'menu-btn-icon menu-btn-icon-hide'}`} onClick = {()=>setMenuBtnClicked(!isMenuBtnClicked)}><AiOutlineClose/></button>
                { isMenuBtnClicked && 
                <>
                    <div className='menu-btn'> <label>Home</label></div>
                    <div className='menu-btn'> <label>Products </label></div>
                    <div className='menu-btn'> <label>Contact Us </label></div>
                    <div className='menu-btn'> <label>About Us </label></div>
                </>}

            </div>
        </div>
        </>
    )

}

export default  Navbar