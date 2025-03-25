import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import ReusableButton from './index'

export default {
  title: 'Components/ReusableButton',
  component: ReusableButton,
} as Meta

const Template: StoryFn<{ label: string; onClick: () => void; variant?: 'primary' | 'secondary' }> = (args) => (
  <ReusableButton {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  label: 'Primary Button',
  onClick: () => alert('Primary Button Clicked'),
  variant: 'primary',
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Secondary Button',
  onClick: () => alert('Secondary Button Clicked'),
  variant: 'secondary',
}

