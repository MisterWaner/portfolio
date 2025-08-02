'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { formSchema, formSchemaType } from '@/lib/schemas';
import Input from './Input';
import Textarea from './Textarea';
import Button from '../Button';

export default function Form() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<formSchemaType>({
        resolver: zodResolver(formSchema),
        mode: 'onTouched',
    });

    const onSubmit = async (data: formSchemaType) => {
        console.log('Form submitted:', data);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Failed to send form data');
            }

            alert('Formulaire envoyé avec succès !');
            reset();
        } catch (error) {
            console.error('Error submitting form:', error);
            alert(
                "Une erreur est survenue lors de l'envoi du formulaire. Veuillez réessayer plus tard."
            );
        }
    };
    return (
        <form
            className='lg:w-1/2 w-full mx-auto space-y-4'
            onSubmit={handleSubmit(onSubmit)}
        >
            <Input
                id='firstName'
                label='Prénom'
                placeholder='Thor'
                type='text'
                {...register('firstName')}
                error={errors.firstName?.message}
            />
            <Input
                id='name'
                label='Nom'
                placeholder='Odinson'
                type='text'
                {...register('name')}
                error={errors.name?.message}
            />
            <Input
                id='email'
                label='Email'
                placeholder='thor.odinson@asgard.com'
                type='email'
                {...register('email')}
                error={errors.email?.message}
            />
            <Input
                id='phone'
                label='Téléphone'
                placeholder='+33 6 12 34 56 78'
                type='tel'
                {...register('phone')}
                error={errors.phone?.message}
            />
            <Textarea
                id='message'
                label='Message'
                placeholder='Votre message'
                className='mb-4'
                {...register('message')}
                error={errors.message?.message}
            />
            <Button type='submit' className='w-full sm:w-1/2 md:w-1/3'>
                Envoyer
            </Button>
        </form>
    );
}
