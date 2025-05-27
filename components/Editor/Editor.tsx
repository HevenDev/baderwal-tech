"use client";

import dynamic from "next/dynamic";

// Dynamically import JoditEditor (client-only)
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

interface EditorProps {
  value: string;
  onChange: (value: string) => void;
}

const Editor = ({ value, onChange }: EditorProps) => {
  return (
    <div className="border rounded-md overflow-hidden">
      <JoditEditor
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Editor;
