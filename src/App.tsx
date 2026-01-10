import { useState } from "react";
import { fetchUsers } from "./api";
import { useUsers } from "./hooks/useUsers";
import type { User } from "./types/user";
import UserList from "./components/UserList";
import UserDetails from "./components/UserDetails";
import "./app.css";

function App() {
  const { users } = useUsers(fetchUsers);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [activeTab, setActiveTab] = useState<"profile" | "contact">("profile");

  const handleSelect = (user: User) => {
    setSelectedUser(user);
    setActiveTab("profile");
  };

  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "sans-serif" }}>
      <UserList
        users={users}
        selectedUserId={selectedUser?.id || null}
        onSelect={handleSelect}
      />

      <UserDetails
        user={selectedUser}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
    </div>
  );
}

export default App;
