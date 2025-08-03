export type Project = {
    id: number;
    title: string;
    image: string;
    description: string;
    stack: string[];
    link: string;
};

export const projects: Project[] = [
    {
        id: 1,
        title: 'Ninja Quiz',
        image: '/ninjaquiz.png',
        description:
            'Ninja Quiz est un projet de quiz en ligne où les utilisateurs peuvent tester leurs connaissances sur divers sujets. Il propose une interface utilisateur intuitive, des questions variées et un système de score pour suivre les performances. Les utilisateurs peuvent également créer des comptes pour sauvegarder leurs progrès et participer à des classements.',
        stack: [
            'TypeScript',
            'Fastify',
            'React',
            'PostgreSQL',
            'TailwindCSS',
            'shadcn/ui',
        ],
        link: 'https://ninja-quizz.netlify.app/',
    },
    {
        id: 2,
        title: 'Project Two',
        image: 'https://picsum.photos/500/300?random=2',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia voluptatem illum molestiae. Sit vero totam itaque provident veritatis ad cum fuga omnis nihil eveniet obcaecati modi facilis, quod iure cumque sed eos animi vel aperiam incidunt aliquam libero quisquam sint.',
        stack: ['React', 'TypeScript', 'Next.js'],
        link: '#',
    },
    {
        id: 3,
        title: 'Project Three',
        image: 'https://picsum.photos/500/300?random=3',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia voluptatem illum molestiae. Sit vero totam itaque provident veritatis ad cum fuga omnis nihil eveniet obcaecati modi facilis, quod iure cumque sed eos animi vel aperiam incidunt aliquam libero quisquam sint.',
        stack: ['React', 'TypeScript', 'Next.js'],
        link: '#',
    },
];
