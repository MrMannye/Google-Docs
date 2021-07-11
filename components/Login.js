import Button from '@material-tailwind/react/Button'
import { signIn } from 'next-auth/client'

function Login() {
    return (
        <div className='flex flex-col mx-auto items-center justify-center min-h-screen py-2'>
            <img 
            src="https://links.papareact.com/1ui" 
            alt="Logo Docs"
            className='object-contain w-96 h-64' 
            />
            <Button
                color='blue'
                buttonType='filled'
                ripple='dark'
                className='w-44 mt-10'
                onClick={signIn}
                >
                    Login
                </Button>
        </div>
    )
}

export default Login
