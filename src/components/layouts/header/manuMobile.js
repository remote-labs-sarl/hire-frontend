import React from "react";
import Link from "next/link";
import Image from "next/image";

const ManuMobile = ({close}) => {
    return (
        <div className="manu-mobile-ovalay ">
            <div className="manu-mobile">
                <div className="col-12 d-flex justify-content-between align-items-center btn-close-container" >
                    <div className="logo-container-m col-9">
                        <Link href={"/"} className=" logo-a">
                            <Image
                                src={ "/assets/logos/2.png"}
                                alt="cover"
                                className="logo-image"
                                width={50}
                                height={50}
                                style={{
                                    maxWidth: "100%",
                                    height: "auto"
                                }} />
                        </Link>
                    </div>
                    <button className="btn-close" onClick={close}></button>
                </div>
                <div className="  d-flex col-12">
                    <div className="navigation-mobile container d-flex flex-column col-12 justify-content-start">
                        <Link href="/"
                              className={`linkItem-light    ${location.pathname==="/" ? "is-active": ""}`}
                              onClick={close}
                        >
                            Home
                        </Link>
                        <div className="col-12 border-bottom" />

                        <div className="col-12 border-bottom" />

                    </div>

                </div>
            </div>
        </div>
    )
}
export default ManuMobile;