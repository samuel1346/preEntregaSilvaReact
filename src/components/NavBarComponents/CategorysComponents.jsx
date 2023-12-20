import './NavBarComponents.css'

import { Link } from 'react-router-dom';

const CategorysComponents = ({categoryDisplay}) => {
    return ( 
        <div className='categoryDisplay'>
            <p>categories</p>
            {
                categoryDisplay.map(finca =>{
                    return(
                        <Link to={`/category/${finca.winery}`} >
                            <div key={finca.id}>
                                {finca.winery}
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    );
};

export default CategorysComponents;


