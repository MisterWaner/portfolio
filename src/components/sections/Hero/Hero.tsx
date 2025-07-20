import Image from 'next/image';
import picOfMe from '/public/picofme_4.png';
import SectionContainer from '@/components/layout/SectionContainer';

export default function Hero() {
    return (
        <SectionContainer id='hero'>
            <article className='w-full flex flex-col items-center lg:flex-row'>
                <Image src={picOfMe} alt='Picture of me' />
                <h1 className='font-poppins text-4xl md:text-6xl font-bold mt-4'>
                    Je suis <span className='neon-text'>Erwan</span>.
                    <br />
                    Développeur Web.
                </h1>
            </article>
        </SectionContainer>
    );
}
