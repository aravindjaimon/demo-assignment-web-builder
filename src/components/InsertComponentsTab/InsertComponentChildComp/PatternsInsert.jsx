import React from 'react'
import { PATTERN_SECTION_IMG1, PATTERN_SECTION_IMG2, PATTERN_SECTION_IMG3, PATTERN_SECTION_IMG4, PATTERN_SECTION_IMG5, } from '../../../Assets/Images'

const PatternsInsert = () => {
    return (
        <div className='w-100 '>
            <div className='wrapper p-2'>
                <img className='section_img' src={PATTERN_SECTION_IMG1} alt='default' />
            </div> <div className='wrapper p-2'>
                <img className='section_img' src={PATTERN_SECTION_IMG2} alt='default' />
            </div> <div className='wrapper p-2'>
                <img className='section_img' src={PATTERN_SECTION_IMG3} alt='default' />
            </div> <div className='wrapper p-2'>
                <img className='section_img' src={PATTERN_SECTION_IMG4} alt='default' />
            </div> <div className='wrapper p-2'>
                <img className='section_img' src={PATTERN_SECTION_IMG5} alt='default' />
            </div>
        </div>
    )
}

export default PatternsInsert