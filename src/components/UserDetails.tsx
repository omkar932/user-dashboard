import type { User } from "../types/user";
import Tabs from "./Tabs";
import Actions from "./Actions";
import "../styles/app.css";

interface Props {
  user: User | null;
  activeTab: "profile" | "contact";
  onTabChange: (tab: "profile" | "contact") => void;
}

const UserDetails = ({ user, activeTab, onTabChange }: Props) => {
  if (!user) {
    return <div className="user-empty">Select a user</div>;
  }

  return (
    <div className="user-details">
      <h2 className="user-name">{user.name}</h2>

      <Tabs active={activeTab} onChange={onTabChange} />

      {activeTab === "profile" && (
        <div className="user-section">
          <p>
            <b>Username:</b> {user.username}
          </p>
          <p>
            <b>Website:</b> {user.website}
          </p>
        </div>
      )}

      {activeTab === "contact" && (
        <div className="user-section">
          <p>
            <b>Mobile:</b> {user.phone}
          </p>
          <p>
            <b>Email:</b> {user.email}
          </p>
          <p>
            <b>Skype:</b> {user.username}_skype
          </p>
        </div>
      )}

      <hr className="divider" />

      <h3>Actions</h3>
      <Actions />
    </div>
  );
};

export default UserDetails;
