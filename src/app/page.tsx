import Wrapper from '@/components/layout/Wrapper';
import About from '@/components/sections/About/About';
import Contact from '@/components/sections/Contact/Contact';
import Hero from '@/components/sections/Hero/Hero';
import Projects from '@/components/sections/Projects/Projects';

export default function Home() {
    return (
        <Wrapper>
            <Hero />
            <About />
            <Projects />
            <Contact />
        </Wrapper>
    );
}
