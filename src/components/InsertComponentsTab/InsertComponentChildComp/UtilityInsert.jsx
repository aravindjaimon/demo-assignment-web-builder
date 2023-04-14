import React from 'react'
import { UTILITY_SECTION_COPY, UTILITY_SECTION_EVENTS, UTILITY_SECTION_FORK, UTILITY_SECTION_GUM, UTILITY_SECTION_IMG1, UTILITY_SECTION_OPENTABLE, UTILITY_SECTION_STICKY } from '../../../Assets/Images'

const UtilityInsert = () => {
    return (
        <div className='grid_wrapper p-2  '>
            <img className='media_section_img' src={UTILITY_SECTION_COPY} alt='default' />
            <img className='media_section_img' src={UTILITY_SECTION_EVENTS} alt='default' />
            <img className='media_section_img' src={UTILITY_SECTION_FORK} alt='default' />
            <img className='media_section_img' src={UTILITY_SECTION_GUM} alt='default' />
            <img className='media_section_img' src={UTILITY_SECTION_IMG1} alt='default' />
            <img className='media_section_img' src={UTILITY_SECTION_OPENTABLE} alt='default' />
            <img className='media_section_img' src={UTILITY_SECTION_STICKY} alt='default' />
        </div>
    )
}

export default UtilityInsert