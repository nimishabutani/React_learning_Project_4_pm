import React from "react";






const Info = (props) => {
    const { author, country, image, pages, title, year } = props;
    return (
        <>
            <tr>
                <td className="border border-slate-400 p-10"><img src={image} alt="" height={"100px"} width={"70px"}/></td>
                <td className="border border-slate-400 ">{author}</td>
                <td className="border-separate border border-slate-400 ">{title}</td>
                <td className="border-separate border border-slate-400 ">{country}</td>

                <td className="border-separate border border-slate-400 ">{pages}</td>
                <td className="border-separate border border-slate-400 ">{year}</td>

            </tr>



        </>


    )
}
export default Info;