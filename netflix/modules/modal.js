function Modal(props){
    return (
        <div className="modalCurtain">
            <div className="modal">
                {props.children}
            </div>
        </div>
    )
}