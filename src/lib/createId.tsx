let id = parseInt(window.localStorage.getItem('inMax')||'0');
const createId = () => {
  id += 1;
  window.localStorage.setItem('idMax', JSON.stringify(id));
  return id;
};
//用来给每个标签生成一个独一无二的id
export {createId};