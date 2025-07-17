export default function Wrapper({ children }: { children: React.ReactNode }) {
    return <main className='relative top-24 -z-10'>{children}</main>;
}
