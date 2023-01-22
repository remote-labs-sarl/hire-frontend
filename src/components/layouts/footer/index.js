import React  from "react";
import {Container} from "reactstrap";
import Link from "next/link";
import Image from "next/image";
const Footer=()=>{

    return(
        <div className="footer">
            <Container>
                <div className="row pt-3 pb-3 d-flex align-items-center ">
                    <div className="col-12 col-xl-3 col-lg-3
                     align-items-center
                    justify-content-start "
                    >
                        <Link href={"/"} className="logo-a">
                            <Image
                                src={"/assets//logos/3.png"}
                                alt="cover"
                                className="logo-image-footer"
                                width={50}
                                height={50} />
                        </Link>
                    </div>
                    <div className="col-12 col-lg-4 col-xl-4 d-flex justify-content-center align-content-center ">
                        <p className="text-white">© {new Date().getFullYear()} <strong> RemoteLabs</strong> -All rights reserved </p>
                    </div>
                    <div
                        className="col-12 col-lg-4 col-xl-4 justify-content-end   align-content-end text-end d-flex gap-5">
                        <div className="align-self-start">Termes & Conditions</div>
                    </div>

                </div>
            </Container>

        </div>
    )
}
export default Footer;