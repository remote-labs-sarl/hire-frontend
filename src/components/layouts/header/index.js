import React, {useState, useEffect} from "react";
import {Menu} from "react-feather";
import ManuMobile from "./manuMobile";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
    const [isScroll, setIsScroll] = useState(false);

    const listenScrollEvent = () => {
        window.scrollY > 10 ? setIsScroll(true) : setIsScroll(false);

    };

    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);
    const [isOpen, setOpen] = React.useState(false);
    const openMenuHandel = () => {
        setOpen(true);
    }

    function close() {
        setOpen(false);
    }



    return (
        <>
            {
                isOpen ?
                    <ManuMobile close={close} />
                    : null
            }
            <div className={isScroll===true ? "header-light" : "header"}>
                <div className="container-fluid">
                    <div className="header-content">

                        <div className=" col-6 col-xl-2 col-lg-2">
                        <div className="logo-container">
                            <Link href={"/"} className="logo-a">
                                    <Image
                                        src={"/assets/logos/2.png"}
                                        alt="cover"
                                        className="logo-image"
                                        width={300}
                                        height={300}
                                    />
                            </Link>
                        </div>
                        </div>
                        <div className="  d-none d-lg-flex d-xl-flex col-8 col-xl-10 col-lg-10 ">
                            <div className="navigation d-none d-lg-flex d-xl-flex col-12 justify-content-end">
                          <button className="btn-site-login">Login</button>
                            </div>

                        </div>
                        <div className="d-block d-lg-none d-xl-none" >
                            <button className="btn btn-menu"  data-testid="open-menu" onClick={openMenuHandel}>
                                <Menu color={"#B64377"}  size={40} />
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Header;
