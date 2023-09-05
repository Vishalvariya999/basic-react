import React, { useEffect, useState } from 'react'

const TodoList = () => {
    const getData = () => {
        const lists = localStorage.getItem('todoLists');
        if (lists) {
            return JSON.parse(lists);
        }
        else {
            return [];
        }
    }

    const [todoValue, setTodoValue] = useState("");
    const [todoItems, setTodoItem] = useState(getData());
    const [editTodoItem, setEditItem] = useState("");
    const [toogleBtn, setToogleBtn] = useState(false);

    const addItem = () => {
        if (!todoValue) {
            console.log('Please fill text');
        }
        else if (todoValue && toogleBtn) {
            setTodoItem(
                todoItems.map((d) => {
                    if (d.id === editTodoItem) {
                        return {
                            ...d,
                            name: todoValue
                        }
                    }
                    return d;
                })
            )
            setTodoValue("");
            setEditItem(null);
            setToogleBtn(false);
        }
        else {
            const todoModiData = {
                id: new Date().getTime().toString(),
                name: todoValue
            }
            setTodoItem([...todoItems, todoModiData]);
            setTodoValue("")
        }
    }

    const deleteItem = (id) => {
        const updatedTodoList = todoItems.filter((d) => {
            return d.id !== id;
        })
        setTodoItem(updatedTodoList);
    }

    const removeAll = () => {
        setTodoItem([]);

    }

    const editItem = (id) => {
        const findEditItem = todoItems.find((e) => {
            return e.id === id;
        })
        setTodoValue(findEditItem.name);
        setEditItem(id);
        setToogleBtn(true);
    }

    useEffect(() => {
        localStorage.setItem('todoLists', JSON.stringify(todoItems))
    }, [todoItems])

    return (
        <>
            <div className="row mt-3">
                <div className="col-lg-6">
                    <h2 className='h2 text-center'>Add Lisr here!</h2><hr />
                    <div className='row g-3'>
                        <div className="col-lg-10">
                            <input type="text" placeholder='Enter text' name="todo" value={todoValue} onChange={(e) => setTodoValue(e.target.value)} className='form-control' id="" />
                        </div>
                        <div className="col-lg-2">
                            {
                                toogleBtn ? <button className='btn btn-warning' onClick={addItem}>Update</button> : <button className='btn btn-primary' onClick={addItem}>Add</button>
                            }
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <h2 className="h2 text-center">List</h2><hr />
                    {
                        todoItems.length ?
                            <button className='btn btn-secondary mb-2' onClick={removeAll}>Remove All</button> : ''
                    }
                    <ul className="list-group">
                        {
                            todoItems.length ? todoItems.map((data) => {
                                return (
                                    <div className="row" key={data?.id}>
                                        <div className="col-lg-8">
                                            <li className="list-group-item list-group-item-success mb-2">{data?.name}</li>
                                        </div>
                                        <div className="col-lg-4">
                                            <button className='btn btn-primary mx-1' onClick={() => editItem(data?.id)}>Edit</button>
                                            <button className='btn btn-danger' onClick={() => deleteItem(data?.id)}>Delete</button>
                                        </div>
                                    </div>
                                )
                            }) :
                                <h6 className='h6 text-center border p-1 rounded text-danger'>No list found!</h6>
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default TodoList