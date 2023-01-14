import { ComponentStory, ComponentMeta } from '@storybook/react'
import PrimaryBtn, { IPrimaryBtn } from './PrimaryBtn'
import { mockPrimaryBtnProps } from './PrimaryBtn.mocks'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'buttons/Primary',
  component: PrimaryBtn,
  argTypes: {},
} as ComponentMeta<typeof PrimaryBtn>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PrimaryBtn> = (args) => (
  <PrimaryBtn {...args} />
)

export const Base = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockPrimaryBtnProps.base,
} as IPrimaryBtn
