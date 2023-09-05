import Logo from '../assets/Logo/logoWhite.png'
const Header = () => {
    return (
        <>
            <header class="  h-24 rounded-[22px] px-8 flex justify-between items-center">
                <img className=' h-6' src={Logo} alt="" />
            </header>
        </>
    );
};

export default Header;