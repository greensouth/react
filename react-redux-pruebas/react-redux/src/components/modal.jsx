import { useEffect,useState } from 'react'
const Modal = ({show=false,onClose=null,onAccept=null,children}) =>{

    const handleCloseModal = () => {
        if(onClose){
            onClose();
        }
    }
    const handleAcceptModal = () => {
        onAccept();
    }

    if(show){
        return(
            <div className="modal">
                <div className="p-4 m-2 border rounded-3 bg-white">
                    {children}
                    <div>
                        <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Close</button>&nbsp;
                        {onAccept && <button type="button" className="btn btn-primary" onClick={handleAcceptModal}>Accept</button>}
                    </div>
                </div>
            </div>
        )
    }else{
        return null;
    }
}

export default Modal;