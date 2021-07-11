import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import DocumentRow from "./DocumentRow";
import { useSession } from "next-auth/client";
import {useCollectionOnce} from 'react-firebase-hooks/firestore'
import { db } from "../firebase";

function Document(props){
    const [session] = useSession();
    const [snapShot, setsnapShot] = useCollectionOnce(
        db
            .collection('userDocs')
            .doc(session.user.email)
            .collection('docs')
            .orderBy('timestamp', 'desc')
        );

    return(
        <div className='max-w-2xl mx-auto'>
            <div className='flex justify-between items-center text-sm text-gray-700'>
                <h2 className='font-medium flex-grow'>My Documents</h2>
                <div className='flex items-center justify-center'>
                    <p className="text-xs mr-2">Date Created</p>
                    <Button
                        color='gray'
                        buttonType='outline'
                        rounded={true}
                        iconOnly={true}
                        ripple='dark'
                        className='border-0'
                        >
                            <Icon name='folder' size='3x1' color='gray'/>
                    </Button>
                </div>
            </div>
            <div className='flex flex-col px-2'>
                {
                    snapShot?.docs.map((doc) => {
                        return(
                            <DocumentRow
                                key={doc.id}
                                id={doc.id}
                                fileName={doc.data().fileName}
                                date={doc.data().timestamp}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Document