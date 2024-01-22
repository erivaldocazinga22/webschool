import { z } from "zod";

export const FormAddStudantSchema = z.object({
    nProcess: z.string({
        required_error: "Campo obrigtorio.",
        invalid_type_error: "Digite um número válido.",
      }),
    name: z.string().min(3,"hello"),
    dateNascimento: z.date(),
    gender: z.string({
        required_error: "Campo obrigtorio.",
        invalid_type_error: "Escolha um gênero válido.",
    }).refine(value => ["M", "F"].includes(value)),
    identyDoc: z.enum(["BI", "PASSAPORTE"]),
    nIdentyDoc: z.string(),
    curso: z.string(),
    classe: z.string()
});

export type FormStudantData = z.infer<typeof FormAddStudantSchema>;