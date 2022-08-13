import React, {Children, cloneElement, useEffect, useState} from 'react';
import '../App.css';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const PAGE_WIDTH = 450;

const Carousel = ({children, setIsCorrect}) => {
    const [pages, setPages] = useState([])
    const [offset, setOffset] = useState(0)

    const handleArrowLeft = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset + PAGE_WIDTH;
            return Math.min(newOffset, 0)
        })
    }
    const handleArrowRight = () => {
        setOffset((currentOffset)=> {
            const newOffset = currentOffset - PAGE_WIDTH;
            const maxOffset = -(PAGE_WIDTH * (pages.length - 1))
            return Math.max(newOffset, maxOffset)
        })
    }
    useEffect(()=>{
        setPages(
            Children.map(children, (child) => {
                return cloneElement(child, {
                    style: {
                        height: '100%',
                        minWidth: `${PAGE_WIDTH}px`,
                        maxWidth: `${PAGE_WIDTH}px`,
                    },
                })
            })
        )
    },[])



    return (
        <div className='main-container'>
            <FaChevronLeft className='arrow' onClick={handleArrowLeft}/>
           <div className='window'>
               <div className='all-pages-container'
                   style={{
                   transform: `translateX(${offset}px)`,
               }}>
                   {pages}
               </div>
           </div>
            <FaChevronRight className='arrow' onClick={handleArrowRight}/>

        </div>
    );
};

export default Carousel;