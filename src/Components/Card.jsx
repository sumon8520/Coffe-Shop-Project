
const Card = ({ coffe }) => {

    const { id, name, image, category, ingredients, nutrition_info, origin, type, description, making_process, rating, popularity } = coffe;

    return (
        <div className="space-y-1 my-10">
            <figure>
                <img className="rounded-lg object-cover w-full h-[300px]" src={image} alt="" />
            </figure>
            <h2 className="text-2xl font-bold">{name}</h2>
            <p className=" font-medium">Category:{category}</p>
            <p className=" font-medium">Type:{type}</p>
            <p className=" font-medium">Origin:{origin}</p>
            <p className=" font-medium">rating:{rating}</p>
            <p className=" font-medium">Popular:{popularity}</p>
        </div>
    );
};

export default Card;