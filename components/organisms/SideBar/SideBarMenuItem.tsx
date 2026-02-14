import Image from "next/image";
import cx from "classnames"

interface SideBarMenuItemProps {
    title: string;
    icon: "icon-menu-overview" | "icon-menu-transactions" | "icon-menu-message" | "icon-menu-card" | "icon-menu-reward" | "icon-menu-setting" | "icon-menu-logout";
    href: string;
    active?: boolean;
}

export default function SideBarMenuItem(props: Partial<SideBarMenuItemProps>) {
    const { title, icon, href, active } = props

    const classItem = cx({
        'item': true,
        'mb-30': true,
        active: active
    })

    return (
        <div className={classItem}>
            <div className="me-3">
                <Image src={`/icon/${icon}.svg`} alt="icon-menu-overview" width={25} height={25} />
            </div>
            <p className="item-title m-0">
                <a href={href} className="text-lg text-decoration-none">{title}</a>
            </p>
        </div>
    )
}

