import { z } from "zod";

export const MultiStapTeacherSchema = z.object({
    process_number: z.number().int().positive()
        .min(1, "Campo obrigatório")
        .transform(value => parseInt(value, 10) || 0),
    name: z.string().min(3, "Campo obrigatório"),
    data_nascimento: z.date(),
    genero: z.enum(["M", "F"]),
    doc_identif: z.enum(["BI", "PASSAPORTE"]),
    identificacao: z.string().min(13)
});

export type MultiStapTeacherData = z.infer<typeof MultiStapTeacherSchema>;
