import React from 'react'
import {
    FORMS_SECTION_IMG_1, FORMS_SECTION_IMG_2, FORMS_SECTION_IMG_3,
    FORMS_SECTION_IMG_4, FORMS_SECTION_IMG_5, FORMS_SECTION_IMG_6
} from '../../../Assets/Images'

const FormsInsert = () => {
    return (
        <div className='grid_wrapper p-2  '>
            <img className='media_section_img' src={FORMS_SECTION_IMG_1} alt='default' />
            <img className='media_section_img' src={FORMS_SECTION_IMG_2} alt='default' />
            <img className='media_section_img' src={FORMS_SECTION_IMG_3} alt='default' />
            <img className='media_section_img' src={FORMS_SECTION_IMG_4} alt='default' />
            <img className='media_section_img' src={FORMS_SECTION_IMG_5} alt='default' />
            <img className='media_section_img' src={FORMS_SECTION_IMG_6} alt='default' />
        </div>
    )
}

export default FormsInsert