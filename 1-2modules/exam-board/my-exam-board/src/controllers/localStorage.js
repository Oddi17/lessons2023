
//commit
export const saveDataLS = (key, data) => {
  localStorage.setItem('tasks', JSON.stringify(Store.tasks))
  //Можно расширить
  //localStorage.setItem(key, JSON.stringify(data))
}
export const loadDataLS = (key, data) => {
  return JSON.parse(localStorage.getItem('tasks')) || []
}
