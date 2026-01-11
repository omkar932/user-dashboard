import "../App.css";
type TabKey = "profile" | "contact";

const TABS: { key: TabKey; label: string }[] = [
  { key: "profile", label: "Profile" },
  { key: "contact", label: "Contact" },
];

interface Props {
  active: TabKey;
  onChange: (tab: TabKey) => void;
}

const Tabs = ({ active, onChange }: Props) => {
  return (
    <div className="tabs">
      {TABS.map((tab) => (
        <button
          key={tab.key}
          className={active === tab.key ? "active" : ""}
          onClick={() => onChange(tab.key)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
