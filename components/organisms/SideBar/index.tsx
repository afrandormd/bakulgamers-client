import SideBarFooter from "./SideBarFooter";
import Profile from "./Profile";
import SideBarMenuItem from "./SideBarMenuItem"

export default function SideBar() {
    return (
        <section className="sidebar">
            <div className="content pt-50 pb-30 ps-30">
                <Profile />
                <div className="menus">
                    <SideBarMenuItem title="Overview" icon="icon-menu-overview" href="/member" active />
                    <SideBarMenuItem title="Transactions" icon="icon-menu-transactions" href="/member/transactions" />
                    <SideBarMenuItem title="Messages" icon="icon-menu-message" href="/member/messages" />
                    <SideBarMenuItem title="Card" icon="icon-menu-card" href="/member/card" />
                    <SideBarMenuItem title="Rewards" icon="icon-menu-reward" href="/member/reward" />
                    <SideBarMenuItem title="Settings" icon="icon-menu-setting" href="/member/settings" />
                    <SideBarMenuItem title="Log Out" icon="icon-menu-logout" href="/" />
                </div>
                <SideBarFooter />
            </div>
        </section>
    )
}

