import { z } from "zod";

export const MultiStapTeacherSchema = z.object({
    processo: z.number().int().positive().min(1, "Campo obrigatório") || z.string(),
    identificacao: z.string(),
    avatar_url: z.string() || z.null,
    name: z.string(),
    sexo: z.enum(["F", "M"]),
    password: z.string(),
    data_nascimento: z.date() || z.string(),
    email: z.string(),
    telefone: z.string(),
    option_identificacao: z.enum(["BI", "PASSAPORTE"]),
    nivel: z.enum(["1", "2", "3", "4"]),
    turma: z.string(),
    disciplina: z.string(),
    classe: z.string(),
    curso: z.string()
});

export type MultiStapTeacherData = z.infer<typeof MultiStapTeacherSchema>;
