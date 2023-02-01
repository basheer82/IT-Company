import React, {useState} from 'react'
import CardsData from '../cards-data'
import { AiFillCaretLeft } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";
import { AiOutlineClose} from "react-icons/ai";


const ImageFrame = (props)=>{
    const [index, setIndex] = useState(props.id)

    const imageObj = CardsData[props.id].img
    console.log(props)
    console.log(props.id)

    const handleClose = ()=>{
        return  props.setImgClicked(false)
    }

    const handlePrevClick = ()=>{
        if(index === 0){
            return setIndex[6]
        }
        setIndex(index - 1)
    }

    const handleNextClick = ()=>{
        if(index === 6){
            return setIndex[0]
        }
        setIndex(index + 1)
    }

    return(
        <div className = 'image-frame-div'>
        <button className = 'frame-close-btn' onClick = {handleClose}><AiOutlineClose/></button>
        <button className = 'frame-prev-btn' onClick = {handlePrevClick}><AiFillCaretLeft/></button>

        <img src = {CardsData[index].img} className = 'frame-image'/>

        <button className = 'frame-next-btn' onClick = {handleNextClick} ><AiFillCaretRight/></button> 
        </div>
    )
}

export default ImageFrame