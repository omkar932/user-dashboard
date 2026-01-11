import type { User } from "../types/user";
import "../App.css";

interface Props {
  users: User[];
  selectedUserId: number | null;
  page: number;
  loading: boolean;
  error: boolean;
  hasNextPage: boolean;
  onSelect: (user: User) => void;
  onNext: () => void;
  onPrev: () => void;
}

const UserList = ({
  users,
  selectedUserId,
  page,
  loading,
  error,
  hasNextPage,
  onSelect,
  onNext,
  onPrev,
}: Props) => {
  return (
    <div className="user-list">
      <h3>User List</h3>

      {loading && <p className="muted">Loading users...</p>}
      {error && <p className="muted">Failed to load users</p>}

      {!loading && users.length === 0 && (
        <p className="muted">No users found</p>
      )}

      {users.map((u) => (
        <div
          key={u.id}
          onClick={() => onSelect(u)}
          className={`user-item ${selectedUserId === u.id ? "active" : ""}`}
        >
          {u.name}
        </div>
      ))}

      <div className="pagination">
        <button disabled={page === 1} onClick={onPrev}>
          Prev
        </button>

        <span>Page {page}</span>

        <button disabled={!hasNextPage} onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default UserList;
