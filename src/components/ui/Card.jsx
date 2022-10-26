import { Link } from "react-router-dom";
import Pen from "../ui/icons/Pen";

export default function Card({ title, price, updatedAt, link }){
    return(
        <>
            <div className="bg-white flex gap-4 rounded-xl shadom mt-4 p-4 items-center">
                <div>
                    <Link to={link}>
                        <h3 className="font-bold hover:underline hover:text-red-500">{ title }</h3>
                    </Link>
                    <p>${price}</p>
                    <small>updated at: { updatedAt }</small>
                </div>
                <div className="ml-auto bg-gray-400 hover:bg-green-300 rounded-full p-2 text-white">
                    <Link to={link+'/edit'}>
                        <Pen />
                    </Link>
                </div>
            </div>
        </>
    );
}