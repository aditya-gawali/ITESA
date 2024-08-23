import React from 'react'

const Button = ({ name }) => {
    return (
        <button className='bg-[#27E0B3] py-2 rounded-sm text-${md} px-5 text-black'>{name}</button>
    )
}

export default Button
