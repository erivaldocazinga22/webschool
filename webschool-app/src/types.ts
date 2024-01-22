export type UserData = {
    id: number,
    processo: number,
    identificacao: string,
    avatar_url: string | null,
    name: string,
    sexo: string,
    email: string,
    telefone: string,
    nivel: string,
    created_at: Date | null,
    updated_at?: Date | null
    email_verified_at?: string
    remember_token?: string
}
