import React, {useState, useEffect} from 'react'
import cardsData from '../cards-data'
import ImageFrame from './imageFrame';
import { AiFillCaretLeft } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";

const Carousel = ()=>{
    const [index, setIndex] = useState(0)
    const[images, setImages] = useState(cardsData)
    const[imgClicked , setImgClicked]= useState(false)
    const [imgIndx, setImgIndx] = useState(0)
    const handlePrevClick = ()=>{
        if(index === 0){
        return setIndex(0)
        
        }
    
        setImages(cardsData.slice(index-1, cardsData.lenght))
        return setIndex(index-1)

    }

    const handleNextClick = ()=>{
        if(index === cardsData.length-1){
            return setIndex(cardsData.length-1)
        }
        console.log(index)
        setImages(cardsData.slice(index + 1, cardsData.lenght))
        console.log(images)
        return setIndex(index + 1)
    }

    const handleClick = (key)=>{
        setImgClicked(true)
        setImgIndx(key)
    }
    return(<>
        <div className = 'carousel-div'>
        <button onClick = {()=>handlePrevClick()} className= 'carousel-prev-btn'><AiFillCaretLeft/></button>
        {images.map((item, index)=>{
        return(
        <div  key = {item.id}  className = 'carousel-img-div'>
            <img src = {item.img} className = 'carousel-image' onClick = {()=>handleClick(item.id)} />
        </div>
        )
        })}
        </div>
        <button onClick = {()=>handleNextClick()} className = 'carousel-next-btn'><AiFillCaretRight/></button>

        {imgClicked && <ImageFrame setImgClicked = {setImgClicked} id = {imgIndx} />}
        </>
    )
} 

export default Carousel 