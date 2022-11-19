import React from 'react'

const WhyUsCard = ({title, content}) => {
    return (
        <div className='dja_why_card'>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    )
}

export default WhyUsCard