import React from 'react'
import Todotemplate from '../../component/todolist/Todotemplate'
import TodoHead from '../../component/todolist/TodoHead'
import TodoList from '../../component/todolist/TodoList'
import TodoCreate from '../../component/todolist/TodoCreate'
import { TodoProvider } from '../../component/todolist/TodoContext'

function Todo() {

    return (
        <>
            <TodoProvider>               
                <Todotemplate>
                    <TodoHead/>
                    <TodoList/>
                    <TodoCreate/>
                </Todotemplate>
            </TodoProvider>
        </>
    );
}
export default Todo;
