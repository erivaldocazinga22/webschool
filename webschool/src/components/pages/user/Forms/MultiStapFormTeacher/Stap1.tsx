import { MultiStapTeacherData } from "@/schemas/MultiStapTeacherSchema";
import { useFormContext } from "react-hook-form"
import { twMerge } from "tailwind-merge";

export default function Stap1() {

    const { register, formState: { errors} } = useFormContext<MultiStapTeacherData>();

    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
                <label htmlFor="process_number">
                    <span className="text-sm block text-webschool-100">Número de Processo</span>
                    <input 
                        type="number" 
                        id="process_number" 
                        min="0" 
                        max="9999999999999999"
                        placeholder="ex: 0055" 
                        {...register("processo")}
                        className={twMerge("max-w-[150px] px-4 py-1.5 rounded-md outline-none placeholder:text-zinc-400 dark:placeholder:text-webschool-100 bg-zinc-200 dark:bg-webschool-200",  `${errors?.processo && "ring-red-500 dark:ring-red-500 focus:ring-1 focus:ring-red-500"}`)} 
                    />
                    <div className="h-6 ">
                        {errors?.processo && <p className="text-sm text-red-500">{errors?.processo.message}</p>}
                    </div>
                </label>
                <label htmlFor="name" className="flex-1">
                    <span className="text-sm block text-webschool-100">Nome do Professor</span>
                    <input 
                        type="text" 
                        id="name"
                        {...register("name")}
                        placeholder="Digite o nome completo do Professor"
                        className={twMerge("w-full px-4 py-1.5 rounded-md outline-none placeholder:text-zinc-400 dark:placeholder:text-webschool-100 bg-zinc-200 dark:bg-webschool-200",  `${errors?.name && "ring-red-500 dark:ring-red-500 focus:ring-1 focus:ring-red-500"}`)} 
                    />
                    <div className="h-6 ">
                        {errors?.name && <p className="text-sm text-red-500">{errors?.name.message}</p>}
                    </div>
                </label>
            </div>
            <div >
                <label htmlFor="data_nascimento" >
                    <span className="text-sm block text-webschool-100">Data de Nascimento (dd/MM/aaa)</span>
                    <input
                        type="date" 
                        id="data_nascimento" 
                        {...register("data_nascimento")}
                        className={twMerge("w-full px-4 py-1.5 rounded-md outline-none placeholder:text-zinc-400 dark:placeholder:text-webschool-100 bg-zinc-200 dark:bg-webschool-200",  `${errors?.data_nascimento && "ring-red-500 dark:ring-red-500 focus:ring-1 focus:ring-red-500"}`)} 
                    />
                </label>
                <div className="h-6 ">
                    {errors?.data_nascimento && <p className="text-sm text-red-500">{errors?.data_nascimento.message}</p>}
                </div>
            </div>
            <div className="flex items-center gap-4">
                <label htmlFor="masc" className="space-x-2">
                    <input
                        type="radio" 
                        id="masc"
                        {...register("sexo")}
                        value="M" 
                    />
                    <span>Masculino</span>
                </label>
                <label htmlFor="fem" className="space-x-2">
                    <input
                        type="radio" 
                        id="fem" 
                        {...register("sexo")} 
                        value="F" 
                    />
                    <span>Femenino</span>
                </label>
            </div>
            <div className="flex items-center gap-2">
                <label htmlFor="option_identificacao">
                    <span className="text-sm block text-webschool-100">Documento de Identificação</span>
                    <select {...register("option_identificacao")}  name="option_identificacao" id="option_identificacao"
                         className={twMerge("w-full px-4 py-1.5 rounded-md outline-none placeholder:text-zinc-400 dark:placeholder:text-webschool-100 bg-zinc-200 dark:bg-webschool-200",  `${errors?.option_identificacao && "ring-red-500 dark:ring-red-500 focus:ring-1 focus:ring-red-500"}`)} 
                    >
                        <option value="">Seleccione o Documento</option>
                        <option value="BI">Bilhete de Identidade</option>
                        <option value="PASSAPORTE">Passaporte</option>
                    </select>
                    <div className="h-6 ">
                        {errors?.option_identificacao && <p className="text-sm text-red-500">{errors?.option_identificacao.message}</p>}
                    </div>
                </label>
    
                <label htmlFor="identificacao">
                    <span className="text-sm block text-webschool-100">Número do  Documento</span>
                    <input 
                        type="text" 
                        id="identificacao" 
                        {...register("identificacao")}
                        placeholder="Digite o numero do documento de identificacao "
                        className={twMerge("w-full px-4 py-1.5 rounded-md outline-none placeholder:text-zinc-400 dark:placeholder:text-webschool-100 bg-zinc-200 dark:bg-webschool-200",  `${errors?.identificacao && "ring-red-500 dark:ring-red-500 focus:ring-1 focus:ring-red-500"}`)} 
                    />
                    <div className="h-6 ">
                        {errors?.identificacao && <p className="text-sm text-red-500">{errors?.identificacao.message}</p>}
                    </div>
                </label>
            </div>
        </div>
    )
}