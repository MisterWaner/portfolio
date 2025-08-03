import Image from 'next/image';
import type { Project } from '@/data/projects';
import Button from '../Button';

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <article className='flex flex-col p-4 border border-slate-200 rounded-lg'>
            <h3 className='text-xl font-semibold font-poppins'>
                {project.title}
            </h3>
            <div className='flex flex-col h-full'>
                <Image
                    src={project.image}
                    className='my-4'
                    alt='Project Image'
                    width={500}
                    height={300}
                />
                <div className='mb-4 font-roboto max-w-[500px]'>
                    <p>{project.description}</p>
                    <ul
                        className={`mt-4 list-disc pl-5 grid ${project.stack.length > 3 ? 'grid-cols-2' : 'grid-cols-1'} gap-2`}
                    >
                        {project.stack.map((tech) => (
                            <li key={tech}>{tech}</li>
                        ))}
                    </ul>
                </div>
                <Button className='mt-auto'>
                    <a
                        href={project.link}
                        target='_blank'
                    >
                        View Project
                    </a>
                </Button>
            </div>
        </article>
    );
}
