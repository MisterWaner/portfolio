export default function SectionContainer({
    children,
    id,
}: {
    children: React.ReactNode;
    id?: string;
}) {
    return <section id={id} className='my-10'>{children}</section>;
}
