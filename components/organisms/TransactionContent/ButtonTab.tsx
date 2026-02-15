import Link from "next/link";
import cx from "classnames"

interface ButtonTabProps {
    title: string;
    active?: boolean;
}

export default function ButtonTab(props: Partial<ButtonTabProps>) {
    const { title, active } = props;

    const btnTabClass = cx({
        'btn btn-status rounded-pill text-sm me-3': true,
        'btn-active': active
    })


    return (
        <Link data-filter="*" href="/" className={btnTabClass}>{title}</Link>
    )
}

