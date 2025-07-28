export default function Wrapper({ children }: { children: React.ReactNode }) {
    return (
        <main className='relative top-24 z-0 mx-10 lg:mx-20 xl:mx-auto xl:max-w-7xl'>
            {children}
        </main>
    );
}
