import logo from '../assets/logo.png'

export default function Header() {
    return (
        <header className='flex justify-between items-center border-b-2 border-focus-blue px-8 py-2 w-full top-0 z-10 bg-white'>
            <img src={logo} alt="logo" style={{ height: "36px" }} />
        </header>
    )
}