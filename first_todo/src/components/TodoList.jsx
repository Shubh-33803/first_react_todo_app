function TodoList({ items, deleteItem, index }) {
  return (
    <>
      <ul className="list-group myul">
        <li className="list-group-item">
          {items}
          <span className="deleteicon">
            <i
              className="fa-regular fa-trash-can icon-delete"
              onClick={(event) => {
                deleteItem(index);
              }}
            ></i>
          </span>
        </li>
      </ul>
    </>
  );
}

export default TodoList;
