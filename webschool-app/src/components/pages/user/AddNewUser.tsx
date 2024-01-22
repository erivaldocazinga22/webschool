import { ElementType, useState } from "react";
import Modal from "../../basics/Modal";
import { SelectViewForm } from "./SelectViewForm";
import { LuArrowLeft, LuGraduationCap } from "react-icons/lu";
import { PiChalkboardTeacherLight } from "react-icons/pi";
import Button from "../../basics/Form/Button";
import { FormAdd } from "./Form/FormAdd";

type AddNewUserProps = {
    icon: ElementType,
    label: string
}

type nextStapFormType = "Professor" | "Aluno" | null;

export default function AddNewUser({ icon:Icon, label }: AddNewUserProps) {
    const [nextStapForm, setNextStapForm] = useState<nextStapFormType>(null);

    const handleChangeViewForm = (peyload: nextStapFormType)=> {
        setNextStapForm(peyload);
        
    }

    return (
        <Modal style={{
            modalBox: `min-h-max sm:max-w-[420px]`
        }} element={
            <button type="button" 
                className="px-4 py-2 flex items-center gap-1 rounded-md text-white bg-webschool-first">
                <Icon size={20} strokeWidth={1.5} />
                <span>{label}</span>
            </button>
        }>
            <div className="px-4 py-4">
                {!nextStapForm ? (
                    <ul className="flex flex-col gap-2 text-sm">
                        <SelectViewForm.Root handleOnClick={()=> handleChangeViewForm("Aluno")}>
                            <SelectViewForm.Icon icon={LuGraduationCap}/>
                            <SelectViewForm.Context title="Cadastrar Aluno" text="O Aluno terá os seguntes privilégios: Lorem ipsum dolor sit amet consectetur adipisicing elit." />
                        </SelectViewForm.Root>

                        <SelectViewForm.Root handleOnClick={()=> handleChangeViewForm("Professor")}>
                            <SelectViewForm.Icon icon={PiChalkboardTeacherLight}/>
                            <SelectViewForm.Context title="Cadastrar Professor" text="O Professor terá os seguntes privilégios: Lorem ipsum dolor sit amet consectetur adipisicing elit." />
                        </SelectViewForm.Root>
                    </ul>
                ) : (
                    <div>
                        <Button type="button" onClick={()=> handleChangeViewForm(null)}
                            className="bg-transparent p-0 text-zinc-900 text-sm hover:underline hover:text-blue-700 group"
                        > 
                            <LuArrowLeft className="group-hover:-translate-x-1 transition-transform duration-150" />
                            <span>Back</span>
                        </Button>
                        {nextStapForm === "Aluno" ? (
                            <FormAdd.Root>
                                <FormAdd.Studant />
                            </FormAdd.Root>
                        ): nextStapForm === "Professor" && (
                            <FormAdd.Root>
                                <FormAdd.Teacher/>
                            </FormAdd.Root>
                        )}
                        <div className="w-full flex items-center justify-end">
                            <Button type="button" className="min-w-[100px] flex items-center justify-center">Next</Button>
                        </div>
                    </div>
                )}
            </div>
        </Modal>

    )
}

/* 
w-full sm:w-[300px] md:w-2/6 lg:w-2/6 xl:w-[500px] min-h-max rounded-xl py-4 px-4
*/