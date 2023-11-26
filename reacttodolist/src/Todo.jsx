import { useState } from "react";
import { CompleteTodos } from "./components/CompleteTodos";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { InputTodo } from "./components/InputTodo";
import "./styles.css";

export const Todo = () => {
  const [todoText, setTodoText] = useState("")
  const [incompleteTodos, setIncomplereTodos] = useState([]);
  const [completeTodos, setComplereTodos] = useState([]);
  
  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncomplereTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncomplereTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncomplereTodos(newIncompleteTodos);
    setComplereTodos(newCompleteTodos);
  };

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setIncomplereTodos(newIncompleteTodos);
    setComplereTodos(newCompleteTodos);
  };

  return (
    <>
    <InputTodo 
    todoText={todoText} 
    onChange={onChangeTodoText} 
    onClick={onClickAdd}
    />
    <IncompleteTodos
    todos = {incompleteTodos}
    onClickComplete = {onClickComplete}
    onClickDelete = {onClickDelete}
    />
    <CompleteTodos
    todos = {completeTodos}
    onClickBack = {onClickBack}
    />
    </>
  );
}
