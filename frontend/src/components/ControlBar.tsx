import React, { useRef } from 'react';

export default function ControlBar() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      console.log("File PDF yang diupload:", file.name);
    }
  };

  return (
    <div className="flex items-center justify-center gap-6 p-6 bg-gray-900 text-white border-t border-gray-800 h-28">
      <button className="bg-gray-800 hover:bg-gray-700 transition-colors rounded-full p-4 text-xl shadow-lg cursor-pointer">
        🎤
      </button>
      <button className="bg-gray-800 hover:bg-gray-700 transition-colors rounded-full p-4 text-xl shadow-lg cursor-pointer">
        📷
      </button>
      <div className="flex flex-col items-center">
        <input 
          type="file" 
          accept=".pdf" 
          ref={fileInputRef} 
          className="hidden" 
          onChange={handleFileChange}
        />
        <button 
          onClick={handleUploadClick}
          className="bg-blue-600 hover:bg-blue-500 transition-all px-6 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
        >
          <span>📄</span> Upload PDF
        </button>
      </div>
      <button className="bg-red-600 hover:bg-red-500 transition-colors rounded-full p-4 text-xl shadow-lg cursor-pointer">
        ❌
      </button>

    </div>
  );
}