import React, { ButtonHTMLAttributes } from 'react';

import '../styles/button.scss'

type PropsButton = ButtonHTMLAttributes<HTMLButtonElement>

const Button: React.FC<PropsButton> = (props: PropsButton) => {
  return (
    <button className='button' {...props} />
  )
}

export default Button;