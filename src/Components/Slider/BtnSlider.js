import leftArrow from './icons/left-arrow.svg'
import rightArow from './icons/right-arrow.svg'

function BtnSlider({moveSlide, direction}) {
    
    return (
        <button 
        onClick={moveSlide}
        className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
        >
            <img src={direction === 'next' ? `${rightArow}` : `${leftArrow}`} alt="flèche-icon" />
        </button>
    )
}

export default BtnSlider
