import { useRef,useState } from 'react';
import Modal from './modal'

const PostEditor = ({addPost}) => {
    let isValidEntry = false;
    const [showModal,setShowModal] = useState(false);
    const myRef = useRef(null);
    const submitHandler = (e) => {
        e.preventDefault();
        const {title,post} = e.target.elements;
        if(title.value.length == 0 || post.value.length == 0){
            isValidEntry = false;
        }else{
            isValidEntry = true;
            addPost(Date.now(),title.value,post.value,3);
            myRef.current.reset();
        }
        setShowModal(!isValidEntry);
    }

    return (
    <>
    <Modal show={showModal} onClose={ () => { setShowModal(false)} }><p>Invalid title or content length</p></Modal>
    <form onSubmit={submitHandler} ref={myRef} className="p-3 m-2 bg-light border rounded-2 d-inline-flex flex-column ">
        <div className="mb-3">
            <label className='form-label'>Post Title
                <input className='form-control' type="text" placeholder='Enter your post title here' name="title"/>
            </label>
        </div>
        <div className="mb-3">
            <label className='form-label'>Post Content
                <textarea className='form-control' placeholder='Place your post content here' name="post"></textarea>
            </label>
        </div>
        <div>
            <button type="submit" className='btn btn-primary'><strong>Add post</strong></button>
        </div>
    </form>
    </>
    )
}
export default PostEditor;
