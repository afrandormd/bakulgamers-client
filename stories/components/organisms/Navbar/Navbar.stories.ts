import { Meta, StoryObj } from "@storybook/nextjs-vite"
import Navbar from "../../../../components/organisms/Navbar";

const meta = {
    title: 'Components/Organisms/Navbar',
    component: Navbar,
    tags: ['autodocs'],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
    }
}
