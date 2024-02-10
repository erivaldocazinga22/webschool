import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Settings() {
    return (
        <div className="px-4 py-2 divide-y-[1px] dark:divide-webschool-200">
            <header className="px-6 py-4">
                <h1 className="font-bold text-xl">Configurações</h1>
                <p className="text-sm dark:text-webschool-100">Gerencie as configurações da sua conta e defina preferências de e-mail.</p>
            </header>
            <div className="flex">
                <div className="mt-2 max-w-[220px] w-full space-y-2 px-2">
                    {Array.from({ length: 4 }).map((_, index)=> (
                        <div key={index} className={`px-4 py-1.5 rounded-md cursor-pointer ${index === 1 ? "dark:bg-webschool-200 dark:hover:bg-webschool-200": "dark:hover:bg-webschool-200" }`}>
                            Item {index}
                        </div>
                    ))}
                </div>
                <div className=" px-2 py-2 divide-y-[1px] dark:divide-webschool-200">
                    <header className="py-4">
                        <h1 className="font-bold text-lg">Aparência</h1>
                        <p className="text-sm dark:text-webschool-100">Personalize a aparência do aplicativo. Alterne automaticamente entre temas diurnos e noturnos.</p>
                    </header>
                    <div>
                        <div className="mt-4">
                            <span className="font-semibold">Fonte</span>
                            <Select>
                                <SelectTrigger className="w-[180px] dark:bg-webschool-200">
                                    <SelectValue placeholder="Fonte" />
                                </SelectTrigger>
                                <SelectContent className="dark:bg-webschool-200">
                                    <SelectItem value="Arial">Arial</SelectItem>
                                    <SelectItem value="Helvetica">Helvetica</SelectItem>
                                    <SelectItem value="Inter">Inter</SelectItem>
                                    <SelectItem value="Ubuntu">Ubuntu</SelectItem>
                                </SelectContent>
                            </Select>
                            
                            <p className="text-xs dark:text-webschool-100">Defina a fonte que deseja usar no painel.</p>
                        </div>
                        <div>
                            <div>
                                <span className="font-semibold">Aparência</span>
                                <p className="text-xs dark:text-webschool-100">Selecione o tema para o painel.</p>
                            </div>
                            <div className="flex items-center gap-2">
                                {["Ligth","Dark", "System"].map((theme, index )=> (
                                    <Button key={theme + index} 
                                    className={`min-w-[100px] min-h-[100px] max-w-[100px] focus:outline max-h-[100px] rounded-md border border-webschool-200 ${theme === "dark" ? "dark:bg-webschool-300": theme === "system" && "bg-gradient-to-t to-black from-white"}`}>
                                        {theme}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}