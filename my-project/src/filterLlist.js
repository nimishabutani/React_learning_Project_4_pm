import Info from "./Filter";
import Data from "./dataFilter.json"



const filterLlist = () => {

    return (
        <>
            <div className="flex">
                <div className="w-1/2">
                    <h1 className="font-bold text-2xl text-center mb-5 mt-5 ">Russia Country Book</h1>
                    <table className="w-full text-center">
                        <thead>
                            <tr className="border  border-slate-400 bg-slate-800 text-white font-bold text-xl">
                                <td>Image</td>
                                <td>Author</td>
                                <td>Title</td>
                                <td>Country</td>
                                <td>Pages</td>
                                <td>Year</td>

                            </tr>
                        </thead>

                        <tbody>
                            {
                                Data.filter((el) => { return (el.country === "Russia") }).map((el) => {
                                    return (
                                        <Info country={el.country} author={el.author} pages={el.pages} title={el.title} image={el.image} year={el.year}></Info>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div className="ms-20">
                    <h1 className="font-bold text-2xl text-center mb-5 mt-5">Germany Country Book</h1>
                    <table>
                        <thead>
                            <tr className="border  border-slate-400 bg-slate-800 text-white font-bold text-xl">
                                <td>Image</td>
                                <td>Author</td>
                                <td>Title</td>
                                <td>Country</td>
                                <td>Pages</td>
                                <td>Year</td>

                            </tr>
                        </thead>

                        <tbody>
                            {
                                Data.filter((el) => { return (el.country === "Germany") }).map((el) => {
                                    return (
                                        <Info country={el.country} author={el.author} pages={el.pages} title={el.title} image={el.image} year={el.year}></Info>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>



            </div>
        </>

    )

}




export default filterLlist;


