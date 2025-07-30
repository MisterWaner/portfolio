import Input from './Input';
import Textarea from './Textarea';
import Button from '../Button';

export default function Form() {
    return (
        <form className='lg:w-1/2 w-full mx-auto space-y-4'>
            <Input id='name' label='Nom' placeholder='Votre nom' type='text' />
            <Input id='firstName' label='Prénom' placeholder='Votre prénom' type='text' />
            <Input id='email' label='Email' placeholder='Votre email' type='email' />
            <Input id='phone' label='Téléphone' placeholder='Votre téléphone' type='tel' />
            <Textarea id='message' className='mb-4' />
            <Button type='submit' className='w-full sm:w-1/2 md:w-1/3'>Envoyer</Button>
        </form>
    );
}
