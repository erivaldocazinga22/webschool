
export type UserData = {
    id: number,
    processo: number,
    identificacao: string,
    avatar_url: string | null,
    name: string,
    sexo: string,
    email: string,
    telefone: string,
    nivel: "1" | "2" | "3" | "4",
    created_at: Date | null,
    updated_at?: Date | null
    email_verified_at?: string
    remember_token?: string,
}

export type UserListData = UserData & {
    user_id: number,
    curso: string,
    classe: string,
    turma: string,
}

export type PublicationData = {
    id: number,
    user_id: number,
    name: string,
    email: string,
    text: string,
    fotos: string[] | null,
    avatar_url: string | null,
    nivel: "1" | "2" | "3" | "4",
    created_at?: Date | null
}
