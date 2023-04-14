import React from 'react'
import { SOCIAL_SECTION_DUMMY, SOCIAL_SECTION_FB, SOCIAL_SECTION_GMAPS, SOCIAL_SECTION_INSTA, SOCIAL_SECTION_TRUST, SOCIAL_SECTION_TWITTER } from '../../../Assets/Images'

const SocialInsert = () => {
    return (
        <div className='grid_wrapper p-2  '>
            <img className='media_section_img' src={SOCIAL_SECTION_FB} alt='default' />
            <img className='media_section_img' src={SOCIAL_SECTION_DUMMY} alt='default' />
            <img className='media_section_img' src={SOCIAL_SECTION_INSTA} alt='default' />
            <img className='media_section_img' src={SOCIAL_SECTION_TRUST} alt='default' />
            <img className='media_section_img' src={SOCIAL_SECTION_TWITTER} alt='default' />
            <img className='media_section_img' src={SOCIAL_SECTION_GMAPS} alt='default' />
        </div>
    )
}

export default SocialInsert