import { useState } from "react";
import { Fragment } from "react/cjs/react.production.min";

export function AncestorComponent() {
    let [listOfTodo, setTodo] = useState(["item1", "item2", "item3"]);

    let handleAddTodo = (item) => setTodo((prevState) => [...prevState, item])

    return <Fragment>
        <TodoCount count={listOfTodo.length} />
        <TodoList items={listOfTodo} />
        <AddTodo onClick={handleAddTodo} />
    </Fragment>
}

function TodoCount(props) {
    let { count } = props;

    return <h4>Todo Count: {count}</h4>
}

function TodoList(props) {
    let { items } = props;
    /**
     * This is where the concept of lifting state up comes in:
     * 
     * We lift up state to a common ancestor of components that need it, so that they can all share in the state. This allows us to more easily share state among all of these components that need rely upon it.
     * 
     * Not only by lifting state up and passing its state variable down to the components that need to read from it can we use this pattern – we can also use it for callbacks to be able to update state.
     */

    // let [listOfTodo, setTodo] = useState(["item1", "item2", "item3"]);       // before lifting state up

    return <ul>
        {items.map(item => <li key={item}>{item}</li>)}
    </ul>
}

function AddTodo(props) {
    let { onClick } = props;

    let handleSubmit = (event) => {
        event.preventDefault();
        let todo = event.target.elements.todo.value;
        console.log('todo: ', todo);
        onClick(todo);
    }

    return <form onSubmit={handleSubmit}>
        <input id="todo" />
        <button type="submit">add</button>
    </form>
}