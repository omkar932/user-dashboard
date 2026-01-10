import type { User } from "../types/user";
interface Props {
  users: User[];
  selectedUserId: number | null;
  onSelect: (user: User) => void;
}

const UserList = ({ users, selectedUserId, onSelect }: Props) => {
  return (
    <div className="user-list">
      <h3>Users</h3>
      {users.map((u) => (
        <div
          key={u.id}
          onClick={() => onSelect(u)}
          className={`user-item ${selectedUserId === u.id ? "active" : ""}`}
        >
          {u.name}
        </div>
      ))}
    </div>
  );
};

export default UserList;
