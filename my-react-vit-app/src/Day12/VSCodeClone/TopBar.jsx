
export default function TopBar() {
  return (
    <div className="h-8 bg-[#333333] text-white text-xs flex items-center px-2">
      <span className="mr-4">React JS</span>
      <div className="flex space-x-2">
        <span className="bg-gray-700 px-2 py-0.5 rounded">Sidebar.jsx</span>
        <span className="bg-gray-700 px-2 py-0.5 rounded">TopBar.jsx</span>
      </div>
    </div>
  );
}