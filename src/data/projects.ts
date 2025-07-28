export type Project = {
    id: number;
    title: string;
    image: string;
    description: string;
    link: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: 'Project One',
        image: 'https://picsum.photos/500/300?random=1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia voluptatem illum molestiae. Sit vero totam itaque provident veritatis ad cum fuga omnis nihil eveniet obcaecati modi facilis, quod iure cumque sed eos animi vel aperiam incidunt aliquam libero quisquam sint.',
        link: '#'
    },
    {
        id: 2,
        title: 'Project Two',
        image: 'https://picsum.photos/500/300?random=2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia voluptatem illum molestiae. Sit vero totam itaque provident veritatis ad cum fuga omnis nihil eveniet obcaecati modi facilis, quod iure cumque sed eos animi vel aperiam incidunt aliquam libero quisquam sint.',
        link: '#'
    },
    {
        id: 3,
        title: 'Project Three',
        image: 'https://picsum.photos/500/300?random=3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia voluptatem illum molestiae. Sit vero totam itaque provident veritatis ad cum fuga omnis nihil eveniet obcaecati modi facilis, quod iure cumque sed eos animi vel aperiam incidunt aliquam libero quisquam sint.',
        link: '#'
    }
]