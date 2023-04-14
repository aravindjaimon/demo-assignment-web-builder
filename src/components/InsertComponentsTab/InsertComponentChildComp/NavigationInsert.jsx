import React from 'react'
import { NAVIGATION_DUMMY, NAVIGATION_DUMMY_2, NAVIGATION_FOOTER_DUMMY, NAVIGATION_FOOTER_DUMMY_2 } from '../../../Assets/Images'

const NavigationInsert = () => {
    return (
        <div className='w-100 '>
            <p className='mb-0'> Topbar </p>
            <div className='wrapper p-2'>
                <img className='navigation_section_img_topbar' src={NAVIGATION_DUMMY} alt='default' />
            </div>
            <div className='wrapper p-2'>
                <img className='navigation_section_img_topbar' src={NAVIGATION_DUMMY_2} alt='default' />
            </div>
            <p className='mb-0 my-2'> Footer </p>
            <div className='wrapper p-2'>
                <img className='navigation_section_img_footer' src={NAVIGATION_FOOTER_DUMMY} alt='default' />
            </div>
            <div className='wrapper p-2'>
                <img className='navigation_section_img_footer' src={NAVIGATION_FOOTER_DUMMY_2} alt='default' />
            </div>
        </div>
    )
}

export default NavigationInsert