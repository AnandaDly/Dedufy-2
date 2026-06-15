import React from 'react';

export default function AgentVisual() {
  return (
    <div className="flex items-center justify-center h-full bg-gray-800">
      <div className="relative">
        <div className="w-32 h-32 bg-blue-500 rounded-full shadow-[0_0_50px_rgba(59,130,246,0.5)] animate-pulse border-4 border-blue-300/30">
          <div className="absolute inset-4 rounded-full bg-blue-400/20 border border-white/10"></div>
        </div>
        <p className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-blue-300 text-sm font-medium tracking-widest uppercase">
          Agent Ready
        </p>
      </div>
    </div>
  );
}