import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { twMerge } from "tailwind-merge";
import { LuLock } from "react-icons/lu";
import Input from "../../../../basics/Form/Input";
import { FormAddStudantSchema, FormStudantData } from "../../../../../schemas/FormAddStudantSchema";


export default function FormAddNewStudant() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormStudantData>({
        mode: "all",
        criteriaMode: "all",
        resolver: zodResolver(FormAddStudantSchema)
    })

    const handleCreateStudant = async (data: FormStudantData) => {
        console.log(data);
    }
    
    return (
        <section>
            <div className="flex items-center gap-1 my-4">
                <div className="min-w-9 w-9 h-9 rounded-full text-white bg-green-500 flex items-center justify-center">
                    1
                </div>
                <span className="h-1 w-full bg-zinc-300"></span>
                <div className="min-w-9 w-9 h-9 rounded-full text-white bg-zinc-400 flex items-center justify-center">
                    <LuLock />
                </div>
                <span className="h-1 w-full bg-zinc-300"></span>
                <div className="min-w-9 w-9 h-9 rounded-full text-white bg-zinc-400 flex items-center justify-center">
                    <LuLock />
                </div>
                
            </div>
            <form onSubmit={handleSubmit(handleCreateStudant)} className="w-full">
                <section>
                    <div className="w-full flex items-center gap-2">
                        <label htmlFor="nProcess" className="min-w-max">
                            <span className="text-xs text-zinc-400">Número de Processo</span>
                            <Input 
                                min={0}
                                id="nProcess"
                                type="number" 
                                {...register("nProcess")}
                                className={twMerge("max-w-[150px]", `${errors?.nProcess && "ring-red-500 dark:ring-red-500 focus:ring-1 focus:ring-red-500"}`)}
                                placeholder="Nº de Processo"
                            />
                            <div className="h-6">
                                {errors?.nProcess && <p className="text-sm text-red-500">{errors?.nProcess.message}</p>}
                            </div>
                        </label>
                        <label htmlFor="name" className="min-w-max w-full">
                            <span className="text-xs text-zinc-400">Nome  do aluno</span> 
                            <Input 
                                id="name"
                                {...register("name")}
                                type="text"
                                className={`w-full flex-1 ${errors?.name && "ring-red-500 dark:ring-red-500 focus:ring-1 focus:ring-red-500"}`}
                                placeholder="Digite o nome completo do aluno"
                            />
                            <div className="h-6">
                                {errors.name &&  <p className="text-xs text-red-500 capitalize">{errors.name.message}</p>}
                            </div>
                        </label>
                    </div>

                    <label htmlFor="dateNascimento" className="min-w-max">
                        <span className="text-xs text-zinc-400">Data de Nascimento(dd/MM/AAA)</span> 
                        <Input 
                            {...register("dateNascimento")}
                            id="dateNascimento"
                            type="date"
                            placeholder="dd/MM/AAA"
                            className={`w-full flex-1 ${errors?.dateNascimento && "ring-red-500 dark:ring-red-500 focus:ring-1 focus:ring-red-500"}`}
                        />
                        <div className="h-6">
                            {errors.dateNascimento &&  <p className="text-xs text-red-500 capitalize">{errors.dateNascimento.message}</p>}
                        </div>
                    </label>
            
                    <div className="flex items-center gap-4 my-2">
                        <label htmlFor="radio_masc" className="min-w-max flex items-center gap-2">
                            <Input 
                                {...register("gender")} 
                                id="radio_masc" 
                                type="radio"
                                checked 
                            />
                            <span className="text-sm text-zinc-400 cursor-pointer">Masculino</span>
                        </label>
                        <label htmlFor="radio_fem" className="min-w-max flex items-center gap-2">
                            <Input 
                                {...register("gender")}
                                id="radio_fem" 
                                type="radio"
                            />
                            <span className="text-sm text-zinc-400 cursor-pointer">Femenino</span>
                        </label>
                    </div>
                    <div className="w-full flex items-center gap-2">
                        <label htmlFor="identyDoc" className="min-w-max flex flex-col gap-1 mt-2">
                            <span className="text-xs text-zinc-400">Documento de identificação</span>
                            <select {...register("identyDoc")} className={twMerge(`block w-full h-9 px-4 rounded-md border-0 py-1.5 bg-transparent shadow-sm ring-1 
                                ring-inset ring-zinc-300 dark:ring-webschool-200 
                                placeholder:text-zinc-400 focus:ring-2 focus:ring-inset 
                                focus:ring-webschool-first sm:text-sm sm:leading-6 outline-none transition-all 
                                duration-150 `, )} >
                                <option value=" ">Selecione um Documento</option>
                                <option value="BI">Bilhete de Identidade</option>
                                <option value="PASSAPORTE">Passporte</option>
                            </select>
                            <div className="h-6">
                                {errors?.identyDoc && <p className="text-sm text-red-500">{errors?.identyDoc.message}</p>}
                            </div>
                        </label>
                        <label htmlFor="nIdentyDoc" className="min-w-max w-full">
                            <span className="text-xs text-zinc-400">Número do documento</span> 
                            <Input 
                                id="nIdentyDoc"
                                {...register("nIdentyDoc")}
                                type="text"
                                className={`w-full flex-1 ${errors?.nIdentyDoc && "ring-red-500 dark:ring-red-500 focus:ring-1 focus:ring-red-500"}`}
                                placeholder="Digite o número do documento"
                            />
                            <div className="h-6">
                                {errors.nIdentyDoc &&  <p className="text-xs text-red-500 capitalize">{errors.nIdentyDoc.message}</p>}
                            </div>
                        </label>
                    </div>
                </section>
                {<section className="hidden">
                    <label htmlFor="curso" className="min-w-max flex flex-col">
                        <span className="text-xs text-zinc-400">Curso</span>
                        <select id="curso" {...register("curso")} className={twMerge(`block w-full px-4 py-1.5 h-9 rounded-md border-0 bg-transparent shadow-sm ring-1 
                            ring-inset ring-zinc-300 dark:ring-webschool-200 
                            placeholder:text-zinc-400 focus:ring-2 focus:ring-inset 
                            focus:ring-webschool-first sm:text-sm sm:leading-6 outline-none transition-all 
                            duration-150 `, )} >
                            <option value=" ">Selecione Curso</option>
                            <option value="Bioquímica">Bioquímica</option>
                            <option value="Contrução Civil">Contrução Civil</option>
                            <option value="Técnico de Informática">Técnico de Informática</option>
                            <option value="Máquinas e Motores">Máquinas e Motores</option>
                            <option value="Electricidade">Electricidade</option>
                        </select>
                        <div className="h-6">
                            {errors?.identyDoc && <p className="text-sm text-red-500">{errors?.identyDoc.message}</p>}
                        </div>
                    </label>
                    <label htmlFor="classe" className="min-w-max flex flex-col">
                        <span className="text-xs text-zinc-400">Classe</span>
                        <select id="classe" {...register("classe")} className={twMerge(`block w-full px-4 rounded-md border-0 py-1.5 h-9 bg-transparent shadow-sm ring-1 
                            ring-inset ring-zinc-300 dark:ring-webschool-200 
                            placeholder:text-zinc-400 focus:ring-2 focus:ring-inset 
                            focus:ring-webschool-first sm:text-sm sm:leading-6 outline-none transition-all 
                            duration-150 `, )} >
                            <option value=" ">Selecione Classe</option>
                            <option value="7ª Classe">7ª Classe</option>
                            <option value="8ª Classe">8ª Classe</option>
                            <option value="9ª Classe">9ª Classe</option>
                            <option value="10ª Classe">10ª Classe</option>
                            <option value="11ª Classe">11ª Classe</option>
                            <option value="12ª Classe">12ª Classe</option>
                            <option value="13ª Classe">13ª Classe</option>
                        </select>
                        <div className="h-6">
                            {errors?.identyDoc && <p className="text-sm text-red-500">{errors?.identyDoc.message}</p>}
                        </div>
                    </label>
                </section>}
            </form>
        </section>
    )
}