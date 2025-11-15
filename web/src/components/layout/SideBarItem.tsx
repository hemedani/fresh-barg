import Link from "next/link";
import { FC, ReactElement, ReactNode } from "react";

type TItemProp = {
    Icon: ReactElement;
    href: string;
    label: string
}

export const SideBarItem: FC<TItemProp> = ({ href, Icon, label }) => {
    return (
        <li className="flex mb-4">
            <Link
                href={`/dashboard${href}`}
                className="text-slate-400 no-underline block p-3 rounded-lg transition-all duration-300 hover:bg-green-500/20 hover:text-white group"
            >
                {Icon}
                {label}
            </Link>
        </li>
    );
};
