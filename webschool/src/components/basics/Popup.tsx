import { ReactNode, useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

type PopUpProps = {
  element: ReactNode;
  children: ReactNode;
  className?: string;
};

export default function Popup({ element, children, className }: PopUpProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(()=> {
        const handleCloseNotification = (event: MouseEvent) => {
            if (
                elementRef.current &&
                !elementRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
          };
      
          document.addEventListener("mousedown", handleCloseNotification);
      
          return () => {
            document.removeEventListener("mousedown", handleCloseNotification);
          };
    }, [elementRef]);

  return (
    <div className="relative">
      <div onClick={() => setIsOpen(!isOpen)}>{element}</div>
      {isOpen && (
        <div ref={elementRef} className={twMerge("z-30 absolute", className)}>
          {children}
        </div>
      )}
    </div>
  );
}
