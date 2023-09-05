import Logo from '../assets/Logo/logoWhite.png'
const Header = () => {
    return (
        <>
            <header class="  h-24 rounded-[22px] px-8 flex justify-center items-center">
                <a href="/"><img className=' h-6' src={Logo} alt="" /></a>
            </header>
        </>
    );
};

export default Header;