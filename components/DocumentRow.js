import Icon from '@material-tailwind/react/Icon'
import Button from '@material-tailwind/react/Button'
import {useRouter} from 'next/dist/client/router'

function DocumentRow({id, key, fileName, date}) {

    const router = useRouter(); 

    return (
        <div onClick={() => router.push(`/doc/${id}`)} className='flex items-center justify-between mt-2 mb-1 p-2 rounded-lg hover:bg-gray-100 cursor-pointer'>
            <div className='flex items-center justify-center'>
                <Icon name='article' size='2x1' color='blue'></Icon>
                <p className='flex-grow truncate text-xs ml-2'>{fileName}</p>
            </div>
            <div className='flex items-center justify-center'>
                <p className='flex items-center justify-center text-xs'>{date?.toDate().toLocaleDateString()}</p>
                <Button
                    color='gray'
                    buttonType='outline'
                    rounded={true}
                    iconOnly={true}
                    ripple='dark'
                    className='border-0'
                >
                    <Icon name='more_vert' size='2x1'></Icon>
                </Button>
            </div>
        </div>
    )
}

export default DocumentRow
