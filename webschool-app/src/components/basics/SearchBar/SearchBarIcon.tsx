import { ElementType } from "react";

export default function SearchBarIcon({ icon:Icon }: { icon: ElementType }) {
    return <Icon size={20} strokeWidth={1.5} className="text-zinc-500 transition-colors duration-150" />
}
