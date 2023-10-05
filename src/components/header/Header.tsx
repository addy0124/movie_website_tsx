import React, { useState, useEffect } from 'react';

import logo from "../../assets/movix-logo.svg";
import { useNavigate, useLocation } from "react-router-dom";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";

import "./headerStyled.scss";
import ContentWrapper from '../contentWrapper/ContentWrapper';

type Props = {}

const Header:React.FC<Props> = (props) => {
    const [show, setShow] = useState<"top"|"hide"|"show">("top");
    const [lastScrollY, setLastScrollY] = useState<number>(0);
    const [mobileMenu, setMobileMenu] = useState<boolean>(false);
    const [query, setQuery] = useState<string>("");
    const [showSearch, setShowSearch] = useState<boolean>(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(()=>{
        window.scrollTo(0,0)
    },[location]);

    console.log("window.scrollY : ", window.scrollY)
    const controlNavbar = () =>{
        if(window.scrollY > 200){
            if(window.scrollY > lastScrollY && !mobileMenu){
                setShow("hide");
            }else{
                setShow("show");
            }
        }else{
            setShow("top");
        }
        setLastScrollY(window.scrollY);
    }

    useEffect(()=>{
        window.addEventListener("scroll", controlNavbar);
        return ()=>{
            window.removeEventListener("scroll", controlNavbar);
        }
    },[lastScrollY]);

    const searchQueryHandler = (event:React.KeyboardEvent<HTMLInputElement>) =>{
        if(event.key === 'Enter' && query.length > 0){
            navigate(`/search/${query}`);
            setTimeout(() => {
                setShowSearch(false);
            }, 1000);
        }
    };

    const openSearch = () => {
        setMobileMenu(false);
        setShowSearch(true);
    };

    const openMobileMenu = () =>{
        setShowSearch(false);
        setMobileMenu(true);
    };

    const navigationHandler = (type:string) => {
        if(type === 'movie'){navigate("/explore/movie");}
        if(type === 'tv'){navigate("/explore/tv")}
        setMobileMenu(false);
    };

  return (
    <header className={`header ${mobileMenu ? 'mobileView' : ''} ${show}`}>
        <ContentWrapper>
            <div className="logo" onClick={() => navigate("/")}>
                <img src={logo}/>
            </div>
            <ul className='menuItems'>
                <li className='menuItem'
                    onClick={()=>navigationHandler("movie")}>
                    Movies
                </li>
                <li className='menuItem'
                    onClick={()=>navigationHandler("tv")}>
                    TV Shows
                </li>
                <li className='menuItem'>
                    <HiOutlineSearch onClick={openSearch}/>
                </li>
            </ul>
            
            {/* mobileMenuItems */}
            <div className='mobileMenuItems'>
                <HiOutlineSearch onClick={openSearch}/>
                {mobileMenu ? (
                    <VscChromeClose onClick={()=>setMobileMenu(false)} />
                ) : (
                <SlMenu onClick={openMobileMenu}/>)}  
            </div>
        </ContentWrapper>

        {showSearch && (
            <div className='searchBar'>
                <ContentWrapper>
                    <div className='searchInput'>
                        <input 
                            type='text'
                            placeholder='Search for a movie or tv show....'
                            onChange={(e)=>setQuery(e.target.value)}
                            onKeyUp={searchQueryHandler}
                        />
                        <VscChromeClose onClick={()=>setShowSearch(false)}/>
                    </div>
                </ContentWrapper>
            </div>
        )}

    </header>
  )
}

export default Header