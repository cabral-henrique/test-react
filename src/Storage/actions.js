const getUsers = () => {
  if (!localStorage.getItem("users")) localStorage.setItem("users", []);
  return (
    localStorage.getItem("users") && JSON.parse(localStorage.getItem("users"))
  );
};

const createUser = (data) => {
  const user = data;
  let users = localStorage.getItem("users")
    ? JSON.parse(localStorage.getItem("users"))
    : [];
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
};

const updateUser = (data) => {
  const { id } = data;
  let users = JSON.parse(localStorage.getItem("users"));
  users.splice(id, 1);
  delete data.id;
  users.push(data);
  localStorage.setItem("users", JSON.stringify(users));
};

const deleteUser = (id) => {
  let users = JSON.parse(localStorage.getItem("users"));
  users.splice(id, 1);
  localStorage.setItem("users", JSON.stringify(users));
  return users;
};

export { createUser, getUsers, updateUser, deleteUser };
export default createUser;
