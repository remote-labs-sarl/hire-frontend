import React from "react";
import Image from "next/image";
import Error404 from "../../../../public/assets/lottie/404.json";
import Lottie from "lottie-react";
const ListeTechnologies =({data})=>{

    return(
        <div className="section-contenair section-contenair-white-2 p-3  ">
            <div className="container-xl container-lg ">
                {data?.content?.length > 0
                    ?
                    <div className="row d-flex  align-items-center">

                        {data.content.map((item) => {

                            return(
                                <div className="col-lg-3 col-xl-3 col-md-6 col-sm-12 col-6 mb-4" key={item.id}>
                                    <div className=" card-items-tech">
                                        <div className="car-items-tech-body ">
                                            <Image
                                                src={item.logoUrl} alt={item.name}
                                                   width={400} height={400}
                                                   className="tech_image "/>
                                            <h4 className="text-site2 mt-4">{item.name}</h4>

                                        </div>
                                    </div>
                                </div>
                            )

                        }
                        )}

                </div>
                    :
                    <div className="col-12 d-flex justify-content-center align-content-center">
                        <div className="col-12 col-md-6 col-xl-5 col-lg-5">
                            <Lottie animationData={Error404} />
                        </div>
                    </div>
                }

            </div>

        </div>
    )
}



export default ListeTechnologies