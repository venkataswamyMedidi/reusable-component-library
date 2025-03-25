import React, { useState } from 'react'
import './ReusableButton.module.css'

type ButtonProps = {
  label: string
  onClick: () => void
  variant?: 'primary' | 'secondary'
}


const ReusableButton: React.FC<ButtonProps> = ({ label, onClick, variant = 'primary' }) => {

  return (
    <button className={`btn ${variant}`} onClick={onClick}>
      <span>{label}</span>
    </button>
  )
}

export const StorybookButtonExample = () => (
  <ReusableButton label="Storybook Button" onClick={() => alert('Clicked')} variant="primary" />
)

export default ReusableButton