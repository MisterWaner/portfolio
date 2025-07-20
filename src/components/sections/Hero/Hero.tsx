import Image from 'next/image';
import picOfMe from '/public/picofme_4.png'
import SectionContainer from '@/components/layout/SectionContainer';


export default function Hero() {
    return (
        <SectionContainer id='hero'>
            <Image
                src={picOfMe}
                alt='Picture of me'
            />
        </SectionContainer>
    );
}
