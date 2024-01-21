import './NavBarComponents.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const CategorysComponents = ({categoryDisplay, handleDisplayCategories, displayCategories}) => {
    const [catDisplaied, setCatDisplaied]= useState("categories")
    
    return ( 
        <div onClick={handleDisplayCategories}
            className={`${displayCategories?`categoryDisplay`:`categoryDisplayClicked`}`} >
            <Link>{catDisplaied}</Link>
            {
                categoryDisplay.map(finca =>{
                    return(
                        <div key={finca.id}>
                            <Link to={`/category/${finca.winery}`} >
                                {finca.winery}
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default CategorysComponents;


