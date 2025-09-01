import { Link, useLocation } from "react-router-dom";
import { TbTrashXFilled } from "react-icons/tb";

const Card = ({ coffe, handleRemove }) => {

    const { id, name, image, category, origin, type, rating, popularity } = coffe;
    const { pathname } = useLocation();

    return (
        <div>
            <div className="space-y-1 my-10 shadow-2xl p-4 rounded-lg relative">
                <Link to={`/card/${id}`}>
                    <figure className="hover:scale-105">
                        <img className="rounded-lg object-cover w-full h-[300px]" src={image} alt="" />
                    </figure>
                </Link>
                <h2 className="text-2xl font-bold">{name}</h2>
                <p className=" font-medium">Category:{category}</p>
                <p className=" font-medium">Type:{type}</p>
                <p className=" font-medium">Origin:{origin}</p>
                <p className=" font-medium">rating:{rating}</p>
                <p className=" font-medium">Popularity:{popularity}</p>

                {
                    pathname === '/dashborad' && (
                        <div onClick={() => handleRemove(id)} className="absolute -top-4 -right-4 bg-warning p-2 rounded-full"><TbTrashXFilled size={20}></TbTrashXFilled></div>
                    )
                }
            </div>
        </div>
    );
};

export default Card