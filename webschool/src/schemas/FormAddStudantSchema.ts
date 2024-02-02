import { z } from "zod";

export const FormAddStudantSchema = z.object({
    processo: z.number(),
	identificacao: z.string(),
	avatar_url: z.string() || z.null,
	name: z.string(),
	sexo: z.enum(["F", "M"]),
	password: z.string(),
	data_nascimento: z.date(),
	email: z.string(),
	telefone: z.string(),
	nivel: z.enum(["1", "2", "3", "4"]),
	turma: z.string(),
	classe: z.string(),
	curso: z.string()
});

export type FormStudantData = z.infer<typeof FormAddStudantSchema>;


