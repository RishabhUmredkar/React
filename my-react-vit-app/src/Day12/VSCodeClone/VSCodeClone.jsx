
import Sidebar from './Sidebar';
import Editor from './Editor';
import StatusBar from './StatusBar';
import TopBar from './TopBar';
import Explorer from './Explorer';
import Terminal from './Terminal';

export default function App() {
  return (
      <div className="flex flex-col h-screen bg-[#1e1e1e]">
      <TopBar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <Explorer />
        <Editor />
      </div>
      <Terminal />
      <StatusBar />
    </div>
  );
}
