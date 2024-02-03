import { MultiStapTeacherData } from "@/schemas/MultiStapTeacherSchema";
import { useFormContext } from "react-hook-form"
import { twMerge } from "tailwind-merge";

export default function Stap2() {

    const { register, formState: { errors } } = useFormContext<MultiStapTeacherData>();

    return (
        <div className="flex flex-col gap-4">
            <label htmlFor="curso">
                <span className="text-sm block text-webschool-100">Curso</span>
                <select required {...register("curso")} id="curso"
                    className={twMerge("w-full px-4 py-2 rounded-md outline-none placeholder:text-zinc-400 dark:placeholder:text-webschool-100 bg-zinc-200 dark:bg-webschool-200",`${errors?.curso && "ring-red-500 dark:ring-red-500 focus:ring-1 focus:ring-red-500"}`)} 
                >
                    <option value="">Seleccione o curso</option>
                    <option value="bioquimica">Ensino Geral</option>
                    <option value="bioquimica">Bioquímica</option>
                    <option value="bioquimica">Contrução Civil</option>
                    <option value="informatica">Técnico de Informática</option>
                    <option value="mecanica">Maquinas e Motores</option>
                    <option value="mecanica">Electricidade</option>
                </select>
                <div className="h-6 ">
                    {errors?.curso && <p className="text-sm text-red-500">{errors?.curso.message}</p>}
                </div>
            </label>
                            
            <label htmlFor="classe">
                <span className="text-sm block text-webschool-100">Classe</span>
                <select required {...register("classe")} id="classe"
                    className={twMerge("w-full px-4 py-2 rounded-md outline-none placeholder:text-zinc-400 dark:placeholder:text-webschool-100 bg-zinc-200 dark:bg-webschool-200",`${errors?.classe && "ring-red-500 dark:ring-red-500 focus:ring-1 focus:ring-red-500"}`)} 
                >
                    <option value="">Seleccione a Classe</option>
                    <option value="7">7ª Classe</option>
                    <option value="8">8ª Classe</option>
                    <option value="9">9ª Classe</option>
                    <option value="10">10ª Classe</option>
                    <option value="11">11ª Classe</option>
                    <option value="12">12ª Classe</option>
                    <option value="13">13ª Classe</option>
                </select>
                <div className="h-6 ">
                    {errors?.classe && <p className="text-sm text-red-500">{errors?.classe.message}</p>}
                </div>
            </label>
                        
            <label htmlFor="disciplina">
                <span className="text-sm block text-webschool-100">Disciplina</span>
                <select required {...register("disciplina")} id="disciplina"
                    className={twMerge("w-full px-4 py-2 rounded-md outline-none placeholder:text-zinc-400 dark:placeholder:text-webschool-100 bg-zinc-200 dark:bg-webschool-200",`${errors?.disciplina && "ring-red-500 dark:ring-red-500 focus:ring-1 focus:ring-red-500"}`)} 
                >
                    <option value="">Seleccione a Disciplina</option>
                    <option value="matematica">Matemática</option>
                    <option value="lingua_portugesa">Língua Portuguesa</option>
                    <option value="fisica">Física</option>
                    <option value="quimica">Química</option>
                    <option value="desenho_tecnico">Desenho Técnico</option>
                    <option value="seac">SEAC</option>
                    <option value="tlp">Técnicas de Línguagem de Programação(TLP)</option>
                </select>
                <div className="h-6 ">
                    {errors?.disciplina && <p className="text-sm text-red-500">{errors?.disciplina.message}</p>}
                </div>
            </label>
        </div>
    )
}