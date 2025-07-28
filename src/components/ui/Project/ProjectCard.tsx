import Image from 'next/image';
import type { Project } from '@/data/projects';

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <article className='flex flex-col p-4 border border-slate-200 rounded-lg'>
            <h3 className='text-xl font-semibold font-poppins'>{project.title}</h3>
            <div className=''>
                <Image
                    src={project.image}
                    className='my-4'
                    alt='Project Image'
                    width={500}
                    height={300}
                />
                <p className='mb-4 font-roboto max-w-[500px]'>{project.description}</p>
                <a
                    href={project.link}
                    target='_blank'
                    className='text-blue-500 hover:underline'
                >
                    View Project
                </a>
            </div>
        </article>
    );
}
