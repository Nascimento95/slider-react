import {useState} from 'react'
import './Slider.css'
import dataSlider from './dataSlider';
import BtnSlider from './BtnSlider';
function Slider() {
    
    const [slideImage, setSlideImage] = useState({
        index: 1,
        inProgress: false
    })

    const nextSlide = () => {
        if(slideImage.index !== dataSlider.length && !slideImage.inProgress){
            let index = slideImage.index
            setSlideImage({index: index +1 , inProgress:true})
            setTimeout(() => {
                setSlideImage({index: index +1 , inProgress: false })
            }, 600);
        }
        else if(slideImage.index === dataSlider.length){
            let index = 1
            setSlideImage({index: index, inProgress:true})
            setTimeout(() => {
                setSlideImage({index: index , inProgress: false })
            }, 600);
        }
    }
    const lastSlide = () => {
        if(slideImage.index !== 1 &&  !slideImage.inProgress){
            let index = slideImage.index
            // setSlideImage({index: index -1 , inProgress:true})
            setSlideImage({index: slideImage.index -1, inProgress:true})
            setTimeout(() => {
                setSlideImage({index: index -1 , inProgress: false })
            }, 600);
        }
        if(slideImage.index === 1){
            let index = 5
            setSlideImage({index: index, inProgress:true})
            setTimeout(() => {
                setSlideImage({index: index , inProgress: false })
            }, 600);
        }
    }
    const moveDot= (index) => {
        setSlideImage({index: index , inProgress: false })

    }
    console.log(slideImage)
    return (
        <div className='container-slider'>
            {dataSlider.map((image, index) => 
            
                <div 
                key={image.id} 
                className={slideImage.index === index + 1?
                "slide active-anim" : "slide"} 
                >
                <img src={`/Imgs/img${index+1}.jpg`} alt="ok"/>

                </div>
            )}
            <BtnSlider moveSlide ={nextSlide} direction={"next"} />
            <BtnSlider  moveSlide ={lastSlide} direction={"last"}/>
            <div className='container-dots'>
                    {Array.from({length: 5}).map((item, index) =>{
                        return <div
                        key = {index} 
                        onClick = {() => moveDot(index + 1)}
                        className={slideImage.index === index + 1 ? "dot active" : "dot"} ></div>

                    })}
            </div>

        </div>
    )
}

export default Slider
