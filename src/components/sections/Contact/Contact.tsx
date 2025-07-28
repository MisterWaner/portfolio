import Form from '@/components/ui/Contact/Form';

export default function Contact() {
    return (
        <section id='contact' className='mt-20'>
            <h2 className='text-3xl font-bold mb-6 font-poppins'>
                Me Contacter
            </h2>
            <article>
                <p>
                    Un projet en tête ? <br />
                    Une question ? <br />
                    N&apos;hésitez pas à me contacter via les réseaux sociaux ou
                    par email. Je suis toujours ouvert aux nouvelles
                    opportunités et collaborations.
                </p>
                <p className='mt-4'>
                    Vous pouvez également remplir le formulaire ci-dessous pour
                    me contacter directement.
                </p>
                <div className='mt-6'>
                    <Form />
                </div>
            </article>
        </section>
    );
}
