import { ReactNode } from "react";
import Popup from "../Popup";

type FilterPopUpRootProps = { 
    element: ReactNode, 
    children: ReactNode 
}

export default function FilterPopUpRoot({ element, children }: FilterPopUpRootProps) {
    return (
        <Popup element={element} className="top-12 left-1/2 -translate-x-1/2">
            {children}
        </Popup>
    );
} 