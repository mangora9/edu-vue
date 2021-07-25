import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const storage = {
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }

    return arr;
  }
}

export const store = new Vuex.Store({
  state: {
    todoItems: storage.fetch()
  },
  getters: {
    storedTodoItems(state) {
      return state.todoItems;
    }
  },
  mutations: {
    addOneItem(state, todoItem) {
      var obj = { completed: false, item: todoItem };
      localStorage.setItem(todoItem, JSON.stringify(obj));
      state.todoItems.push(obj);
    },
    removeOneItem(state, payLoad) {
      state.todoItems.splice(payLoad.index, 1);
      localStorage.removeItem(payLoad.todoItem.item);
    },
    toggleOneItem(state, payLoad) {//: function (todoItem, index) {
      state.todoItems[payLoad.index].completed = !state.todoItems[payLoad.index].completed;
      localStorage.removeItem(payLoad.todoItem.item);
      localStorage.setItem(payLoad.todoItem.item, JSON.stringify(payLoad.todoItem));
    },
    clearAllItems(state) {
      state.todoItems = [];
      localStorage.clear();
    }
  }
});