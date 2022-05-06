const createElement = (id) => {
  const element = document.createElement('div');
  element.id = id;
  document.body.appendChild(element);

  return element;
};

/*
* This function returns the element having the given id, if that element does’t exist then creates and returns it
*/
const getPortalWrapper = (id) => document.getElementById(id) || createElement(id);

export default getPortalWrapper;
