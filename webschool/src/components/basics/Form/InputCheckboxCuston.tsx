import { useState } from "react";
import { LuCheck } from "react-icons/lu";


type InputCheckboxCustonProps = {
    id: string
}

export default function InputCheckboxCuston({ id }: InputCheckboxCustonProps) {
    const [isChecked, setChecked] = useState(false);

  const toggleCheckbox = () => {
    setChecked(!isChecked);
  };

  return (
    <div>
      <input
        id={id}
        type="checkbox"
        className={`hidden`}
        checked={isChecked}
        onChange={toggleCheckbox}
      />
      <div
        className={`w-5 h-5 z-10 rounded-full flex items-center justify-center text-white cursor-pointer ${isChecked ? "bg-webschool-first dark:bg-webschool-first": "bg-zinc-200 dark:bg-webschool-300 "}`}
        onClick={toggleCheckbox}
      >
        {isChecked && (
          <LuCheck size={14} strokeWidth={3} />
        )}
      </div>
    </div>
  );
}