import { ElementType, useState } from "react";
import Modal from "@/components/basics/Modal";
import { LuArrowLeft, LuGraduationCap } from "react-icons/lu";
import { PiChalkboardTeacherLight } from "react-icons/pi";
import Button from "../../basics/Form/Button";
import MultiStapFormTeacher from "./Forms/MultiStapFormTeacher";
import FormStapProvider from "@/contexts/FormStap/FormStapProvider";
import { SelectViewForm } from "./Forms/SelectViewForm";
import MultiStapFormStudant from "./Forms/MultiStapFormStudant";

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
        <FormStapProvider>
            <Modal style={{
                modalBox: `min-h-max sm:min-w-[420px] sm:max-w-fit rounded-xl`
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
                            <div className="mb-6">
                                <Button type="button" onClick={()=> handleChangeViewForm(null)}
                                    className="bg-transparent p-0 text-zinc-900 dark:text-webschool-100 text-sm hover:underline hover:text-blue-700 dark:hover:text-blue-700 group"
                                > 
                                    <LuArrowLeft className="group-hover:-translate-x-1 transition-transform duration-150" />
                                    <span>Back</span>
                                </Button>
                            </div>
                            {nextStapForm === "Aluno" ? (
                                <MultiStapFormStudant />
                            ): nextStapForm === "Professor" && (
                                <MultiStapFormTeacher />
                            )}
                        </div>
                    )}
                </div>
            </Modal>
        </FormStapProvider>
    )
}

/* 
w-full sm:w-[300px] md:w-2/6 lg:w-2/6 xl:w-[500px] min-h-max rounded-xl py-4 px-4
*/