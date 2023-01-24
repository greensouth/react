import Modal from "./modal"
import { useState } from 'react';

const PostlistTable = ({items = [],remove}) => {
    const [showModal, setShowModal] = useState(false);
    const [currentId, setCurrentId] = useState(null);
    const handleRemove = (id) => {
        setShowModal(true)
        setCurrentId(id);
    }
    const handleCloseModal = () => {
        setShowModal(false)
    }
    const handleAcceptModal = (id) => {
        remove(id);
        handleCloseModal();
    }
    const entries = items.map( (item) => { return <PostlistEntry remove={remove} title={item.title} date={item.date} key={item.id} id={item.id} onremove={handleRemove}></PostlistEntry>} )
    if(entries.length > 0 ){
        return(
        <>  {showModal && <Modal show={showModal} onClose={handleCloseModal} onAccept={() => handleAcceptModal(currentId)}><p>Are you sure that you want to remove this record?</p></Modal>}
            <ul className="postList m-2 p-2 border rounded-2 bg-light">
                {entries}
            </ul>
        </>
        )
    }else{
        return(
        <h2><span>☠️</span><br/>Sorry! no records yet!</h2>
        )
    }
}

const PostlistEntry = ({title,date,id,onremove}) => {
    const format = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric',minute: 'numeric',second: 'numeric' };
    const readableDate = new Date(date).toLocaleDateString('es-ES', format);
    const handleRemove = () =>{
        onremove(id);
    }
    return (
        <li className='border-bottom p-3 d-flex gap-3 '><small>({readableDate})</small><strong>"{title}"</strong><button className="btn btn-outline-primary btn-sm" onClick={handleRemove}>Remove</button></li>
    )
}

export default PostlistTable;