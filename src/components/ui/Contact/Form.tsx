import Input from './Input';
import Textarea from './Textarea';
import Button from '../Button';

export default function Form() {
    return (
        <form className='lg:w-1/2 w-full mx-auto space-y-4'>
            <Input label='Nom' placeholder='Votre nom' type='text' />
            <Input label='Prénom' placeholder='Votre prénom' type='text' />
            <Input label='Email' placeholder='Votre email' type='email' />
            <Input label='Téléphone' placeholder='Votre téléphone' type='tel' />
            <Textarea className='mb-4' />
            <Button type='submit' className='w-full sm:w-1/2 md:w-1/3'>Envoyer</Button>
        </form>
    );
}
