import SideBarFooter from "./SideBarFooter";
import Profile from "./Profile";
import SideBarMenuItem from "./SideBarMenuItem"

interface SideBarProps {
    activeMenu: "overview" | "transactions" | "settings"
}

export default function SideBar(props: SideBarProps) {
    const { activeMenu } = props;

    return (
        <section className="sidebar">
            <div className="content pt-50 pb-30 ps-30">
                <Profile />
                <div className="menus">
                    <SideBarMenuItem title="Overview" icon="icon-menu-overview" href="/member" active={activeMenu === "overview"} />
                    <SideBarMenuItem title="Transactions" icon="icon-menu-transactions" href="/member/transactions" active={activeMenu === "transactions"} />
                    <SideBarMenuItem title="Messages" icon="icon-menu-message" href="/member" />
                    <SideBarMenuItem title="Card" icon="icon-menu-card" href="/member" />
                    <SideBarMenuItem title="Rewards" icon="icon-menu-reward" href="/member" />
                    <SideBarMenuItem title="Settings" icon="icon-menu-setting" href="/member/edit-profile" active={activeMenu === "settings"} />
                    <SideBarMenuItem title="Log Out" icon="icon-menu-logout" href="/sign-in" />
                </div>
                <SideBarFooter />
            </div>
        </section>
    )
}

