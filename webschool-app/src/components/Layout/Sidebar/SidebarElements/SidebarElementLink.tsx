import { ElementType } from "react";
import { Link } from "react-router-dom";
import SidebarElementItem from "./SidebarElementItem";

type SidebarElementLinkProps = {
    active: string,
    icon: ElementType, 
    text: string, 
    href: string
}


export default function SidebarElementLink({ icon, text, active, href }: SidebarElementLinkProps) {
    return (
        <Link to={href}>
            <SidebarElementItem 
                icon={icon} text={text}  
                className={`${active === href && "bg-webschool-first hover:bg-webschool-first dark:bg-webschool-first dark:hover:bg-webschool-first text-white dark:text-white transition-colors duration-150"}`}
            />
        </Link>
    )
}