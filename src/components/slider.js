import React, {useState, useEffect} from 'react'
import { AiOutlineDoubleLeft } from "react-icons/ai";
import { AiOutlineDoubleRight } from "react-icons/ai";
import sliderData from './slider-data'

const Slider = ()=>{
    const [index, setIndex] = useState(0)

    useEffect(()=>{
        let slider = setInterval(()=>{
            handleNextClick()
        }, 6000)
        return ()=>clearInterval(slider)
    },[index, sliderData])

    const handlePrevClick = ()=>{
        if (index === 0){
           return setIndex(sliderData.length-1)
        }
        return setIndex(index-1)
    }

    const handleNextClick = ()=>{
        if(index === sliderData.length-1){
            return setIndex(0)
        }
       return setIndex(index+1)
    }

    return(
        <div className = 'slider-div'>
      
        <button className = 'prevBtn' onClick = {handlePrevClick}><AiOutlineDoubleLeft/></button>
        {   
            sliderData.map((image, currentIndex)=>{
                let sliderClass = 'nextSlide'
            if(index === currentIndex){
                sliderClass = 'currentSlide'
            }
            if(currentIndex === index-1 || index === 0  && currentIndex === sliderData.length-1){
                sliderClass = 'prevSlide'
            }
            console.log(image.imag)
        return(
            

            <article className = {sliderClass}>
                <img src = {image.imag} className = 'slide-img'/>
            </article>
        )
    })}
        <button className = 'nextBtn' onClick = {handleNextClick}><AiOutlineDoubleRight/></button>
        </div>
    )
}

export default Slider