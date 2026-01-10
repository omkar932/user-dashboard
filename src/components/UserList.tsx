import { User } from "../types/user";

interface Props {
  users: User[];
  selectedUserId: number | null;
  onSelect: (user: User) => void;
}

const UserList = ({ users, selectedUserId, onSelect }: Props) => {
  return (
    <div style={{ width: "30%", borderRight: "1px solid #ddd", padding: 12 }}>
      <h3>Users</h3>
      {users.map((u) => (
        <div
          key={u.id}
          onClick={() => onSelect(u)}
          style={{
            padding: 10,
            marginBottom: 6,
            cursor: "pointer",
            borderRadius: 6,
            background: selectedUserId === u.id ? "#eef2ff" : "transparent",
          }}
        >
          {u.name}
        </div>
      ))}
    </div>
  );
};

export default UserList;
