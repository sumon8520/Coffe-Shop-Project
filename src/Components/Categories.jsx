import { NavLink } from 'react-router-dom';

const Categories = ({ categories }) => {
    return (
        <div className='text-center flex justify-center w-full '>
            <div role="tablist" className="tabs tabs-lift">
                {
                    categories.map(category => <NavLink role="tab" className={({isActive}) =>`tab flex text-xl font-medium gap-40 ${isActive?'tab-active':''}`} key={category.id} to={`/category/${category.category}`}>{category.category}</NavLink>)
                }

            </div>
        </div>
    );
};

export default Categories;