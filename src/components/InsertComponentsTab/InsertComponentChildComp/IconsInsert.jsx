import React from 'react'
import {
    ICONS_SECTION_IMG_1, ICONS_SECTION_IMG_2, ICONS_SECTION_IMG_3,
    ICONS_SECTION_IMG_4, ICONS_SECTION_IMG_5, ICONS_SECTION_IMG_6,
    ICONS_SECTION_IMG_7, ICONS_SECTION_IMG_8
} from '../../../Assets/Images'

const IconsInsert = () => {
    return (
        <div className='grid_wrapper p-2  '>
            <img className='media_section_img' src={ICONS_SECTION_IMG_1} alt='default' />
            <img className='media_section_img' src={ICONS_SECTION_IMG_2} alt='default' />
            <img className='media_section_img' src={ICONS_SECTION_IMG_3} alt='default' />
            <img className='media_section_img' src={ICONS_SECTION_IMG_4} alt='default' />
            <img className='media_section_img' src={ICONS_SECTION_IMG_5} alt='default' />
            <img className='media_section_img' src={ICONS_SECTION_IMG_6} alt='default' />
            <img className='media_section_img' src={ICONS_SECTION_IMG_7} alt='default' />
            <img className='media_section_img' src={ICONS_SECTION_IMG_8} alt='default' />
        </div>
    )
}

export default IconsInsert