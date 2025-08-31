
const Heading = ({ tittle, subTittle }) => {
    return (
        <div>
            <div className="text-center my-6">
                <h2 className='text-3xl font-bold'>{tittle}</h2>
                <p className='text-gray-700'>{subTittle}</p>
            </div>
        </div>
    );
};

export default Heading;