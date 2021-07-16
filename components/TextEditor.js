import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic'
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { convertFromRaw, convertToRaw, EditorState } from 'draft-js';
import { db } from '../firebase';
import { useSession } from 'next-auth/client';
import { useRouter } from 'next/dist/client/router';
import { useDocumentOnce } from 'react-firebase-hooks/firestore';

const Editor = dynamic(() => import('react-draft-wysiwyg').then(module => module.Editor),
    {
        ssr: false,
    }
    )

function TextEditor() {

    const [session] = useSession();
    const router = useRouter();
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const {id} = router.query;

    const [snapshot] = useDocumentOnce(db.collection('userDocs')
    .doc(session?.user?.email)
    .collection('docs')
    .doc(id));

    useEffect(() => {
        if(snapshot?.data()?.editorState){
            setEditorState(EditorState.createWithContent(
                convertFromRaw(snapshot?.data()?.editorState)
            ))
        }
    }, [])

    const onEditorStateChange = editorState => {
        setEditorState(editorState);
        db.collection('userDocs')
        .doc(session?.user?.email)
        .collection('docs')
        .doc(id)
        .set(
            {
                editorState: convertToRaw(editorState.getCurrentContent())
            }, {
                merge: true,
            });
    };

    return (
        <div className='bg-[#F8F9FA] min-h-screen pb-6'>
            <Editor
                editorState={editorState}
                onEditorStateChange={onEditorStateChange}
                toolbarClassName='flex sticky top-0 z-50 !justify-center mx-auto'
                editorClassName='mt-6 bg-white shadow-lg max-w-4xl mx-auto mb-12 border p-8'
            ></Editor>
        </div>
    )
}

export default TextEditor
