interface Props {
  active: "profile" | "contact";
  onChange: (tab: "profile" | "contact") => void;
}

const Tabs = ({ active, onChange }: Props) => {
  return (
    <div className="tabs">
      <button
        disabled={active === "profile"}
        onClick={() => onChange("profile")}
      >
        Profile
      </button>
      <button
        disabled={active === "contact"}
        onClick={() => onChange("contact")}
      >
        Contact
      </button>
    </div>
  );
};

export default Tabs;
