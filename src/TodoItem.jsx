import "./TodoItem.css";

function TodoItem(props) {


    return (
        <div className="row gy-3">
            <div className="col-md-8 todo m-auto">
                <div className="row pt-3 text-box">
                    <p className="text">{props.text}</p>
                </div>
                <div className="row">
                    <div className="col-md-2 p-0">
                        <button className="btn btn-danger w-75 px=0 m-0 my-1">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoItem;