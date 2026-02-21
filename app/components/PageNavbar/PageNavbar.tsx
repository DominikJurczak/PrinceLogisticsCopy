type PageNavbarProps = {
  title: string;
  tabs: { id: string; label: string }[];
  activeTab: string;
  setActiveTab: (id: string) => void;
};

const PageNavbar = ({
  title,
  tabs,
  activeTab,
  setActiveTab,
}: PageNavbarProps) => {
  return (
    <nav className="w-full">
      <h2 className="text-3xl font-extrabold mb-6 italic">{title}</h2>

      <div className="border-t border-gray-300">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              w-full text-left py-1 
              border-b border-gray-300
              transition font-bold italic
              cursor-pointer
              ${
                activeTab === tab.id
                  ? "text-[#e62a26] font-semibold"
                  : "text-black hover:text-[#e62a26]"
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default PageNavbar;