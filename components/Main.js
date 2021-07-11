import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import { useState } from 'react'
import Modal from '@material-tailwind/react/Modal'
import ModalBody from '@material-tailwind/react/ModalBody'
import ModalFooter from '@material-tailwind/react/ModalFooter'
import { db } from "../firebase";
import { useSession } from "next-auth/client";
import firebase from 'firebase';

function Main() {

    const [showModal, setShowModal] = useState(false);
    const [input, setInput] = useState("");
    const [session] = useSession();

    const createDocument = () => {
        if(!input) return; 
        db.collection('userDocs').doc(session.user.email).collection('docs')
        .add({
            fileName: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });

        setInput('');
        setShowModal(false);
    };

    const modal = (
        <Modal
            size='sm'
            active={showModal}
            toggler={() => setShowModal(false)}>

            <ModalBody>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="outline-none w-full"
                    placeholder="Enter name of document..."
                    orKeyDown={(e) => e.key === "Enter" && createDocument()}
                />
            </ModalBody>

            <ModalFooter>
                <Button
                    color='blue'
                    buttonType='link'
                    onClick={(e) => setShowModal(false)}
                    ripple='dark'
                >
                    Cancel
                </Button>
                <Button
                    color='blue'
                    onClick={createDocument}
                    ripple='light'
                >
                    Create
                </Button>
            </ModalFooter>
        </Modal>
    )

    return (
        <div className='max-w-2xl mx-auto py-6'>

            {/* Title for create new Document */}
            <div className='flex justify-between items-center'>
                <h5 className=' tracking-wider text-black text-sm'>Start a new document</h5>
                <Button
                    color='gray'
                    buttonType='outline'
                    rounded={true}
                    iconOnly={true}
                    ripple='dark'
                    className='border-0'
                >
                    <Icon name='more_vert' size='3x1' color='gray' />
                </Button>
            </div>

            {/* Image new Document */}
            {modal}
            <div className='mt-2' onClick={() => setShowModal(true)} >
                <img src="https://links.papareact.com/pju"
                    alt="Document Image"
                    loading='lazy'
                    className=' h-52 w-36 cursor-pointer border-2 hover:border-blue-700 hover:border-4'
                />
            </div>
            <p className='tracking-wide text-black text-sm ml-2 mt-3 font-semibold'>Blank</p>
        </div>
    )
}

export default Main
