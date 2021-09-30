import React from 'react'
import { cases } from '../../models/cases'

const Category = () => {
    return (
        <div className="category">
            <div className="categoryBox">
                <div className="red">red</div>
                <div className="oranje">oranje</div>
                <div className="green">green</div>
                <div className="blue">blue</div>
                <div className="pruple">pruple</div>
                <div className="grey">grey</div>
            </div>
            <button className="addCategory">
                <img src="" alt="add category"></img>
            </button>
        </div>
    )
}

export default Category
