export default function Stap1() {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
                <label htmlFor="cod_aluno">
                    <span className="text-sm block text-webschool-100">Número de Processo</span>
                    <input 
                        required 
                        type="number" 
                        id="cod_aluno" 
                        name="cod_aluno" 
                        min="0" 
                        max="9999999999999999"
                        placeholder="ex: 0055" 
                        className="max-w-[150px] px-4 py-1.5 rounded-md outline-none placeholder:text-zinc-400 dark:placeholder:text-webschool-100 bg-zinc-200 dark:bg-webschool-200" 
                    />
                </label>
                <label htmlFor="nome" className="flex-1">
                    <span className="text-sm block text-webschool-100">Nome do Aluno</span>
                    <input 
                        required 
                        type="text" 
                        id="nome" 
                        name="nome" 
                        placeholder="Digite o nome completo do aluno"
                        className="w-full px-4 py-1.5 rounded-md outline-none placeholder:text-zinc-400 dark:placeholder:text-webschool-100 bg-zinc-200 dark:bg-webschool-200" 
                    />
                </label>
            </div>
            <div >
                <label htmlFor="data_nascimento" >
                    <span className="text-sm block text-webschool-100">Data de Nascimento (dd/MM/aaa)</span>
                    <input 
                        required 
                        type="date" 
                        id="data_nascimento" 
                        name="data_nascimento"
                        className="w-full px-4 py-1.5 rounded-md outline-none placeholder:text-zinc-400 dark:placeholder:text-webschool-100 bg-zinc-200 dark:bg-webschool-200" 
                    />
                </label>
            </div>
            <div className="flex items-center gap-4">
                <label htmlFor="masc" className="space-x-2">
                    <input required type="radio" id="masc" name="genero" value="M" />
                    <span className="text-legend">Masculino</span>
                </label>
                <label htmlFor="fem" className="space-x-2">
                    <input required type="radio" id="fem" name="genero" value="F" />
                    <span className="text-legend">Femenino</span>
                </label>
            </div>
            <div className="flex items-center gap-2">
                <label htmlFor="doc_identif">
                    <span className="text-sm block text-webschool-100">Documento de Identificação</span>
                    <select required name="doc_identif" id="doc_identif"
                        className="w-full px-4 py-2 rounded-md outline-none placeholder:text-zinc-400 dark:placeholder:text-webschool-100 bg-zinc-200 dark:bg-webschool-200" 
                    >
                        <option value="">Seleccione o Documento</option>
                        <option value="BI">Bilhete de Identidade</option>
                        <option value="Ps">Passaporte</option>
                    </select>
                </label>
    
                <label htmlFor="num_doc">
                    <span className="text-sm block text-webschool-100">Número do  Documento</span>
                    <input 
                        required 
                        type="text" 
                        id="num_doc" 
                        name="num_doc" 
                        placeholder="Digite o numero do documento de identificacao "
                        className="w-full px-4 py-1.5 rounded-md outline-none placeholder:text-zinc-400 dark:placeholder:text-webschool-100 bg-zinc-200 dark:bg-webschool-200" 
                    />
                </label>
            </div>
        </div>
    )
}