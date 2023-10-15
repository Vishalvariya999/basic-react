import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { faPencil, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';

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
    const [deleteId, setdeleteId] = useState('');

    const addItem = () => {
        if (!todoValue) {
            toast.error('Please fill text.');
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
            toast.success('Updated successfully.');
        }
        else {
            const todoModiData = {
                id: new Date().getTime().toString(),
                name: todoValue
            }
            setTodoItem([...todoItems, todoModiData]);
            setTodoValue("")
            toast.success('Insert successfully.');
        }
    }

    const deleteItem = (id) => {
        const updatedTodoList = todoItems.filter((d) => {
            return d.id !== id;
        })
        setTodoItem(updatedTodoList);
        toast.success('Delete successfully.');
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
                            <input type="text" placeholder='Enter text' name="todo" value={todoValue} onChange={(e) => setTodoValue(e.target.value)} className='form-control form-control-lg' />
                        </div>
                        <div className="col-lg-2">
                            {
                                toogleBtn ? <button className='btn btn-lg btn-warning' onClick={addItem}><FontAwesomeIcon icon={faPencil} /></button> : <button className='btn btn-lg btn-primary' onClick={addItem}><FontAwesomeIcon icon={faPlus} /></button>
                            }
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <h2 className="h2 text-center">List</h2><hr />
                    {
                        todoItems.length ?
                            <button className='btn btn-secondary mb-2' onClick={removeAll}><FontAwesomeIcon icon={faTrash} /></button> : ''
                    }
                    <ul className="list-group">
                        {
                            todoItems.length ? todoItems.map((data) => {
                                return (
                                    <div className="row" key={data?.id}>
                                        <div className="col-lg-8">
                                            <li className="list-group-item list-group-item-success rounded mb-2">{data?.name}</li>
                                        </div>
                                        <div className="col-lg-4">
                                            <button className='btn btn-primary mx-1' onClick={() => editItem(data?.id)}> <FontAwesomeIcon icon={faPencil} /></button>
                                            <button className='btn btn-danger' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setdeleteId(data?.id)}><FontAwesomeIcon icon={faTrash} /></button>
                                        </div>
                                    </div>
                                )
                            }) :
                                <h6 className='h6 text-center border p-1 rounded text-danger'>No list found!</h6>
                        }
                    </ul>
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Are you sure?</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-success" data-bs-dismiss="modal">No</button>
                                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal" onClick={() => deleteItem(deleteId)}>Yes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TodoList