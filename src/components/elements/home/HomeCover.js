import React from "react";
import {Row} from "reactstrap";
import Image from "next/image";

const HomeCover = () => {

    return(
        <div className="home-cover  container-fluid px-5 ">
            <Row className="justify-content-between">
                <div className="col-12 col-lg-3 col-xl-3 left-section-header  d-flex pt-xl-2 pt-lg-2 pb-0 pb-md-4">

                    <Image
                        src="/assets/images/1c.png"
                        alt="cover"
                        className="cover_home "
                        width={700}
                        height={700}
                    />
                </div>
                <div className="col-12 col-lg-6 col-xl-6 mt-5 mt-xl-0 mt-lg-0  d-flex flex-column align-items-center justify-content-center pt-xl-2 pt-lg-2 ">
                    <h3 className="text-cover-home text-site2">Find the best</h3>
                    <h3 className="text-cover-home text-color-site">developers </h3>
                    <h3 className="text-cover-home text-site2">with RemoteLabs</h3>

                </div>
                <div className="col-12 col-lg-3 col-xl-3 right-section-header  d-none d-xl-flex d-lg-flex pt-xl-2 pt-lg-2 justify-content-end   ">

                    <Image
                        src="/assets/images/5c.png"
                        alt="cover"
                        className="cover_home  "
                        width={700}
                        height={700}
                    />
                </div>
            </Row>
        </div>
    )
}

export default HomeCover