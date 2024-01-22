import { z } from "zod";

export const CreatePostSchema = z.object({
    text: z.string().min(2, "Digite alguma coisa"),
    fotos: z.instanceof(FileList),
});


export type CreatePostData = z.infer<typeof CreatePostSchema>;