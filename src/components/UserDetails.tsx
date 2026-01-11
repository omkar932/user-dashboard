import type { User } from "../types/user";
import Tabs from "./Tabs";
import "../App.css";

interface Props {
  user: User | null;
  activeTab: "profile" | "contact";
  onTabChange: (tab: "profile" | "contact") => void;
}

const UserDetails = ({ user, activeTab, onTabChange }: Props) => {
  if (!user) {
    return <div className="user-details empty">Select a user</div>;
  }

  return (
    <div className="user-details">
      <div className="user-details-layout">
        {/* Left column – Tabs */}
        <div className="user-tabs">
          <Tabs active={activeTab} onChange={onTabChange} />
        </div>

        {/* Right column – Content */}
        <div className="user-content">
          <h2 className="user-name">{user.name}</h2>

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
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
