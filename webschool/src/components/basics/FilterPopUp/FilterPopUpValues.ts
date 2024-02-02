import { LuBookOpen, LuDna, LuHardHat, LuLaptop, LuUsers2, LuWrench, LuZap } from "react-icons/lu"

export const FilterPopUpValues = {
    FiltrarCurso: [
        {
            input: "radio",
            icon: LuUsers2,
            text: "Todos"
        },
        {
            input: "radio",
            icon: LuBookOpen,
            text: "Ensino Geral"
        },
        {
            input: "radio",
            icon: LuDna,
            text: "Bioquímica"
        },
        {
            input: "radio",
            icon: LuHardHat,
            text: "Contrução Civil"
        },
        {
            input: "radio",
            icon: LuLaptop,
            text: "Técnico de Informática"
        },
        {
            input: "radio",
            icon: LuWrench,
            text: "Máquinas e Motores"
        },
        {
            input: "radio",
            icon: LuZap,
            text: "Electricidade"
        }
    ],
    FiltrarClasse: [
        {
            input: "radio",
            text: "Todos"
        },
        {
            input: "radio",
            legend: {
                title: "Ensino Geral",
                text: [
                    "Todos",
                    "7ª Classe",
                    "8ª Classe",
                    "9ª Classe"
                ],
            }
        },
        {
            input: "radio",
            legend: {
                title: "Ensino Médio",
                text: [
                    "Todos",
                    "10ª Classe",
                    "11ª Classe",
                    "12ª Classe",
                    "13ª Classe"
                ],
            }
        },
    ],
    FiltrarTurma: [
        {
            "input": "radio",
            "text": "Todos"
        },
        {
            "input": "radio",
            "text": "Turma A"
        },
        {
            "input": "radio",
            "text": "Turma B"
        },
        {
            "input": "radio",
            "text": "Turma C"
        }
    ],

}
