import { Meta, StoryObj } from "@storybook/nextjs-vite"
import StepItem from "../../../../components/molecules/StepItem";

const meta = {
    title: 'Components/Molecules/StepItem',
    component: StepItem,
    tags: ['autodocs'],
    argTypes: {
        icon: {
            control: "select",
            options: [
                "step1",
                "step2",
                "step3",
            ],
            description: "Icon Step",
        },
    },
} satisfies Meta<typeof StepItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        icon: 'step1',
        title: "1. Start",
        desc1: "Pilih salah satu game",
        desc2: "yang ingin kamu top up",
    }
}
