import { User } from "../types/user";
import Tabs from "./Tabs";
import Actions from "./Actions";

interface Props {
  user: User | null;
  activeTab: "profile" | "contact";
  onTabChange: (tab: "profile" | "contact") => void;
}

const UserDetails = ({ user, activeTab, onTabChange }: Props) => {
  if (!user) return <div style={{ padding: 20 }}>Select a user</div>;

  return (
    <div style={{ width: "70%", padding: 20 }}>
      <h2>{user.name}</h2>

      <Tabs active={activeTab} onChange={onTabChange} />

      {activeTab === "profile" && (
        <>
          <p>
            <b>Username:</b> {user.username}
          </p>
          <p>
            <b>Website:</b> {user.website}
          </p>
        </>
      )}

      {activeTab === "contact" && (
        <>
          <p>
            <b>Mobile:</b> {user.phone}
          </p>
          <p>
            <b>Email:</b> {user.email}
          </p>
          <p>
            <b>Skype:</b> {user.username}_skype
          </p>
        </>
      )}

      <hr />
      <h3>Actions</h3>
      <Actions />
    </div>
  );
};

export default UserDetails;
