import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function ColorBox(props) {
    let dispatch = useDispatch()
    let count = useSelector(state => state.count)
    let colorBoxes = useSelector(state => state.colorBoxes)
    let color = useSelector(state => state.color)

    let finalColor = color;
    if (colorBoxes[props.index] != color) {
        finalColor = colorBoxes[props.index]
    }
    return (
        <div className="App">
            {colorBoxes[props.index] ? <div className="cow" style={{ 'backgroundColor': `${finalColor}` }}>
                {count >= 10 ? <img width="60" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/chicken_1f414.png" />
                    :
                    <img width="60" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/duck_1f986.png" />}
                <input onChange={(e) => dispatch({ type: "Color", payload: { index: props.index, color: e.target.value } })}></input>
            </div>
                : (<div className="cow" style={{ 'backgroundColor': color }}>
                    {count >= 10 ? <img width="60" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/chicken_1f414.png" />
                        :
                        <img width="60" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/duck_1f986.png" />}
                    <input onChange={(e) => dispatch({ type: "Color", payload: { index: props.index, color: e.target.value } })}></input>
                </div>)}
        </div>


    )
}

