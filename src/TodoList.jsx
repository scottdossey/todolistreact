import TodoItem from "./TodoItem"

function TodoList() {
    return (
        <>
            <div className="container board mt-3">
                <div className="row text-center">
                    <h1>To Do List:</h1>
                    <p>
                        Click 'Add' to add a new to do and click
                        a todo to cross it off!
                    </p>
                </div>
                <div className="row justify-center text-center">
                    <TodoItem text="Do the dishes" />
                    <TodoItem text="Walk the dogs" />
                    <TodoItem text="Make dinner" />
                </div>
                <div className="row mt-3 d-flex justify-content-center">
                    <div className="col-md-6">
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Write To Do Task here..."
                                aria-label="To Do Input"
                            />
                            <div className="input-group-append">
                                <button className="btn btn-primary h-100 m-0"
                                        type="button">
                                    Add
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default TodoList;