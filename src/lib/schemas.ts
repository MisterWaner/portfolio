import { z } from 'zod';

export const formSchema = z.object({
    name: z.string().min(1, { message: 'Le nom est requis' }).trim(),
    firstName: z.string().min(1, { message: 'Le prénom est requis' }).trim(),
    email: z
        .email({ message: 'Email invalide' })
        .min(1, { message: "L'email est requis" })
        .lowercase()
        .trim(),
    phone: z
        .string({})
        .min(1, { message: 'Le téléphone est requis' })
        .trim()
        .optional(),
    message: z
        .string({ error: 'Le message est requis' })
        .min(1, { message: 'Le message est requis' })
        .trim(),
});
