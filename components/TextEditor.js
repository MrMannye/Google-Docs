import dynamic from 'next/dynamic'
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const Editor = dynamic(() => import('react-draft-wysiwyg').then(module => module.Editor),
    {
        ssr: false,
    }
    )

function TextEditor() {

    
    return (
        <div className='bg-[#F8F9FA] min-h-screen pb-6'>
            <Editor
                // editorState={editorState}
                toolbarClassName='flex sticky top-0 z-50 !justify-center mx-auto'
                editorClassName='mt-6 bg-white shadow-lg max-w-4xl mx-auto mb-12 border p-8'
            ></Editor>
        </div>
    )
}

export default TextEditor
