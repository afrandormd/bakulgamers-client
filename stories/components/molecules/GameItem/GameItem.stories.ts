import { Meta, StoryObj } from "@storybook/nextjs-vite"
import GameItem from "../../../../components/molecules/GameItem";

const meta = {
    title: 'Components/Molecules/GameItem',
    component: GameItem,
    tags: ['autodocs'],
    argTypes: {
        title: {
            control: "text",
            description: "Title Game"
        },
        category: {
            control: "text",
            description: "Category Game"
        },
        thumbnail: {}
    },
} satisfies Meta<typeof GameItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: "Mobile Legends",
        category: "Mobile",
        thumbnail: "Thumbnail-1"
    }
}
