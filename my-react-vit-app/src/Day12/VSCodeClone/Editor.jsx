// Editor.jsx
export default function Editor() {
  return (
    <div className="flex-1 bg-[#1e1e1e] text-white text-sm p-4 overflow-auto">
      <pre>{`export default function StatusBar() {
  return (
    <div className=\"h-6 bg-gray-800 text-gray-400 flex items-center justify-between text-xs px-4\">
      <span>main*</span>
      <span>{'}'} ⚪ ● ⚠️ ⓘ 0</span>
    </div>
  );
}`}</pre>
    </div>
  );
}