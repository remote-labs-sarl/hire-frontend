import React from "react";
import Image from "next/image";

const ListeTechnologies =({data})=>{

    return(
        <div className="section-contenair section-contenair-white-2 p-3  ">
            <div className="container-xl container-lg ">
                {data.content
                    ?
                    <div className="row d-flex justify-content-center align-items-center">

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
                    <div>None</div>
                }

            </div>

        </div>
    )
}



export default ListeTechnologies