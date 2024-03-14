import profile from '../../assets/profile.png'

const Header = () => {
    return (
        <div className='flex items-center justify-between pt-9 pb-6 border-b border-[#11111126] mx-4 lg:mx-11'>
            <h1 className='text-2xl font-bold'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;