import { Meta, StoryObj } from "@storybook/nextjs-vite"
import Input from "../../../../components/atoms/Input"

const meta = {
    title: 'Components/Atoms/Input',
    component: Input,
    tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: "Full Name",
        type: "text",
        placeholder: "Enter your full name"
    }
}
