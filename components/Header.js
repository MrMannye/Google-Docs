import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import { signOut, useSession } from "next-auth/client";

function Header() {

    const [session] = useSession();

    return (
        <header className='sticky top-0 z-50 flex items-center px-4 py-3 shadow-md bg-white'>
            <Button
                color='gray'
                buttonType='outline'
                rounded={true}
                iconOnly={true}
                ripple='dark'
                className='h-14 w-14 border-0'
            >
                <Icon name='menu' size='3x1' color='gray'/>
            </Button>

            <div className='flex items-center justify-center mr-2'>
                <Icon name='description' size='4xl' color='blue'/>
                <h1 className='ml-2 transition-all text-black tracking-wide'>Docs</h1>
            </div>

            <div className='flex flex-grow items-center bg-gray-200 mx-5 text-gray-600 rounded-lg focus-within:text-gray-600 focus-within:shadow-md'>
                <Button
                    color='gray'
                    buttonType='outline'
                    rounded={true}
                    iconOnly={true}
                    ripple='dark'
                    className='border-0'
                >
                    <Icon name='search' size='3x1'></Icon>
                </Button>
                <input 
                    type="text" placeholder='Search Document'
                    className='flex-grow bg-transparent ml-2 outline-none transition-all text-sm pl-2 tracking-widest'
                />
            </div>

            <Button
                    color='gray'
                    buttonType='outline'
                    rounded={true}
                    iconOnly={true}
                    ripple='dark'
                    className='ml-5 md:ml-20 border-0'
                >
                    <Icon name='apps' size='3x1' color='gray'></Icon>
            </Button>
            <img
            loading='lazy'
            className='cursor-pointer h-10 w-10 rounded-full ml-2' 
            src={session?.user?.image}
            alt="Image User" 
            onClick={signOut}
            />

        </header>
    )
}

export default Header
