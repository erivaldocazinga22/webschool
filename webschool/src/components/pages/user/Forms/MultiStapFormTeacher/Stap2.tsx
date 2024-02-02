export default function Stap2() {
    return (
        <div className="flex flex-col gap-4">
            <label htmlFor="curso">
                <span className="text-sm block text-webschool-100">Curso</span>
                <select required name="curso" id="curso"
                    className="w-full px-4 py-2 rounded-md outline-none placeholder:text-zinc-400 dark:placeholder:text-webschool-100 bg-zinc-200 dark:bg-webschool-200" 
                >
                    <option value="">Seleccione o curso</option>
                    <option value="bioquimica">Ensino Geral</option>
                    <option value="bioquimica">Bioquímica</option>
                    <option value="bioquimica">Contrução Civil</option>
                    <option value="informatica">Técnico de Informática</option>
                    <option value="mecanica">Maquinas e Motores</option>
                    <option value="mecanica">Electricidade</option>
                </select>
            </label>
                            
            <label htmlFor="classe">
                <span className="text-sm block text-webschool-100">Classe</span>
                <select required name="classe" id="classe"
                    className="w-full px-4 py-2 rounded-md outline-none placeholder:text-zinc-400 dark:placeholder:text-webschool-100 bg-zinc-200 dark:bg-webschool-200" 
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
            </label>
                        
            <label htmlFor="ano_curric">
                <span className="text-sm block text-webschool-100">Disciplina</span>
                <select required name="ano_curric" id="anoCurric"
                    className="w-full px-4 py-2 rounded-md outline-none placeholder:text-zinc-400 dark:placeholder:text-webschool-100 bg-zinc-200 dark:bg-webschool-200" 
                >
                    <option value="">Seleccione a Disciplina</option>
                    <option value="2022-2023">2022/2023</option>
                    <option value="2023-2024">2023/2024</option>
                    <option value="2024-2025">2024/2025</option>
                </select>
            </label>
        </div>
    )
}