import React from 'react'
import { PAGES_SECTION_DUMMY_1, PAGES_SECTION_DUMMY_2, PAGES_SECTION_DUMMY_3, PAGES_SECTION_DUMMY_4 } from '../../../Assets/Images'

const PagesInsert = () => {
    return (
        <div className='w-100 '>
            <div className='wrapper p-2'>
                <img className='pages_section_img' src={PAGES_SECTION_DUMMY_1} alt='default' />
            </div>
            <div className='wrapper p-2'>
                <img className='pages_section_img' src={PAGES_SECTION_DUMMY_2} alt='default' />
            </div>
            <div className='wrapper p-2'>
                <img className='pages_section_img' src={PAGES_SECTION_DUMMY_3} alt='default' />
            </div>
            <div className='wrapper p-2'>
                <img className='pages_section_img' src={PAGES_SECTION_DUMMY_4} alt='default' />
            </div>
        </div>
    )
}

export default PagesInsert