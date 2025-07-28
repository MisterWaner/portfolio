import Image from 'next/image';
import Link from 'next/link';
import { User } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function Hero() {
    return (
        <section
            id='accueil'
            className='h-screen mt-10 flex flex-col items-center'
        >
            <article className='w-full h-full flex flex-col items-center md:flex-row md:justify-between'>
                <Image
                    src='/picofme_1.png'
                    alt='Picture of me'
                    className='hidden md:block rounded-full'
                    width={500}
                    height={500}
                />
                <Image
                    src='/picofme_4.png'
                    alt='Picture of me'
                    className='md:hidden'
                    width={500}
                    height={500}
                />

                <div className='mt-24 md:mt-0'>
                    <h1 className='font-poppins text-4xl lg:text-6xl font-bold text-center md:text-left'>
                        Je suis <span className='neon-text'>Erwan</span>.
                        <br />
                        Développeur Web.
                    </h1>
                    <div className='mt-8 w-full flex justify-center md:justify-start'>
                        <Link href='/#a-propos'>
                            <Button className='flex items-end gap-2'>
                                <User height={28} width={28} />
                                À Propos
                            </Button>
                        </Link>
                    </div>
                </div>
            </article>
        </section>
    );
}
