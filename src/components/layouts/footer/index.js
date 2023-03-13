import React  from "react";
import {Container} from "reactstrap";
const Footer=()=>{

    return(
        <div className="footer">
            <Container>
                <div className=" pt-3 pb-3 d-flex  align-items-center flex-column">

                    <div className="col-12 col-lg-4 col-xl-4 d-flex text-center justify-content-center align-content-center ">
                        <p className="">© {new Date().getFullYear()} <strong> RemoteLabs</strong> -All rights reserved </p>
                    </div>
                    <div
                        className="col-12 col-lg-4 col-xl-4 justify-content-center   align-content-center text-center d-flex gap-5">
                        <div className="align-self-start">Termes & Conditions</div>
                    </div>

                </div>
            </Container>

        </div>
    )
}
export default Footer;
