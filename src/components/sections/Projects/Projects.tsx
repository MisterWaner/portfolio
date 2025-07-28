import ProjectGrid from "@/components/ui/Project/ProjectGrid";

export default function Projects() {
    return (
        <section id='projets' className='mt-20'>
            <h2 className='text-3xl font-bold mb-6 font-poppins'>
                Mes Projets
            </h2>
            <ProjectGrid />
        </section>
    );
}
