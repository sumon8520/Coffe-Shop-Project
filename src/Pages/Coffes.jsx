import { useLoaderData } from "react-router-dom";
import Card from "../Components/Card";

const Coffes = () => {

    const data = useLoaderData();

    return (
        <div className='my-10'>
            <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5'>
                {
                    data.map(coffe => <Card key={coffe.id} coffe={coffe}></Card>)
                }
            </div>
        </div>
    );
};

export default Coffes;