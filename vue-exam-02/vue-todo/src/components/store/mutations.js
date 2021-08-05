const addOneItem = (state, todoItem) => {
  var obj = { completed: false, item: todoItem };
  localStorage.setItem(todoItem, JSON.stringify(obj));
  state.todoItems.push(obj);
}

const removeOneItem = (state, payLoad) => {
  state.todoItems.splice(payLoad.index, 1);
  localStorage.removeItem(payLoad.todoItem.item);
}

const toggleOneItem = (state, payLoad) => {
  state.todoItems[payLoad.index].completed = !state.todoItems[payLoad.index].completed;
  localStorage.removeItem(payLoad.todoItem.item);
  localStorage.setItem(payLoad.todoItem.item, JSON.stringify(payLoad.todoItem));
}

const clearAllItems = (state) => {
  state.todoItems = [];
  localStorage.clear();
}

export {addOneItem, removeOneItem, toggleOneItem, clearAllItems}