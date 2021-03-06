const projectFactory = (name) => {
    let todoList = [];

    const addItem = (item) => {
        todoList.push(item);
    }

    const deleteItem = (item) => {
        todoList = todoList.filter(task => task.name !== item.name);
    }

    const getList = () => {
        return todoList;
    }

    return {name, addItem, deleteItem, getList}
}

export default projectFactory;