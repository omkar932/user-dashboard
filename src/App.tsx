import { useState } from "react";
import { fetchUsers } from "./api";
import { useUsers } from "./hooks/useUsers";
import type { User } from "./types/user";
import UserList from "./components/UserList";
import UserDetails from "./components/UserDetails";
import ActionsPanel from "./components/Actions";
import "./App.css";

const PAGE_SIZE = 5;

function App() {
  const { users, page, setPage, loading, error } = useUsers(
    fetchUsers,
    PAGE_SIZE
  );

  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [activeTab, setActiveTab] = useState<"profile" | "contact">("profile");

  const handleSelectUser = (user: User) => {
    setSelectedUser(user);
    setActiveTab("profile");
  };

  const handlePageChange = (nextPage: number) => {
    setPage(nextPage);
    setSelectedUser(null); // prevent stale details
  };

  const hasNextPage = users.length === PAGE_SIZE;

  return (
    <div className="app-layout">
      <UserList
        users={users}
        selectedUserId={selectedUser?.id ?? null}
        loading={loading}
        error={error}
        page={page}
        hasNextPage={hasNextPage}
        onSelect={handleSelectUser}
        onNext={() => handlePageChange(page + 1)}
        onPrev={() => handlePageChange(Math.max(1, page - 1))}
      />

      <UserDetails
        user={selectedUser}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      <ActionsPanel disabled={!selectedUser} />
    </div>
  );
}

export default App;
