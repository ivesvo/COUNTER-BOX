import React from 'react'
import {useSelector} from 'react-redux'


export default function Children() {
    let count = useSelector(state => state.count)
    return (
        <div>
            {/* <h2> </h2>
            <h2>{count}</h2>
             */}
        </div>
    )
}
