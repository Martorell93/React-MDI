import React from 'react'
import SingleCase from './SingleCase'
import { cases } from './../../models/cases'
import Category from '../Category/Category'

const Cases = () => {
    return (
        <div className="cases">
            <div className="section_header">
                <Category/>
            </div>
            <div className="section_content">
                {/* <SingleCase title="hola" muted={false} category="red" /> */}


                {
                    cases.map((case_, i) => (
                        <SingleCase
                            key={i}
                            title={case_.title}
                            muted={case_.muted}
                            category={case_.category} />
                    ))
                }


            </div>
        </div>
    )
}

export default Cases
