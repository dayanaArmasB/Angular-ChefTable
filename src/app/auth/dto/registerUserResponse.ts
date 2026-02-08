export interface RegisterUserResponse {
    success: boolean;   
    message?: string;
    userId?: number; // Puedes ajustar el tipo según lo que tu backend devuelva
}