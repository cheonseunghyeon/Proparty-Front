
// This is the function that will be called when a user joins a room
const addUser = ({id, name, room}) => {
  // Clean the data
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  // Check for existing user
  const existingUser = users.find((user) => user.room === room && user.name === name);

  // Validate name and room
  if (!name || !room) return {error: '이름과 방이 필요해요.'};

  // Validate username
  if (existingUser) {
    return {error: '이미 존재하는 이름입니다.'};
  }

  // Store user
  const user = {id, name, room};
  users.push(user);

  return {user};