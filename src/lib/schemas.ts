import { z } from 'zod';
import { parsePhoneNumberFromString } from 'libphonenumber-js';

export const formSchema = z.object({
    name: z.string().min(1, { message: 'Le nom est requis' }).trim(),
    firstName: z.string().min(1, { message: 'Le prénom est requis' }).trim(),
    email: z
        .email({ message: 'Email invalide' })
        .min(1, { message: "L'email est requis" })
        .lowercase()
        .trim(),
    phone: z
        .string()
        .min(1, { message: 'Le téléphone est requis' })
        .trim()
        .refine(
            (value) => {
                const phoneNumber = parsePhoneNumberFromString(value);
                return phoneNumber ? phoneNumber.isValid() : false;
            },
            { message: 'Numéro de téléphone invalide' }
        ),
    message: z.string().min(1, { message: 'Le message est requis' }).trim(),
});

export type formSchemaType = z.infer<typeof formSchema>;
