import React from 'react';
import UserVideo from './UserVideo';
import AgentVisual from './AgentVisual';
import ControlBar from './ControlBar';

export default function LiveRoom() {
  return (
    // Kontainer utama: tinggi layar penuh, susunan kolom (atas-bawah)
    <div className="flex flex-col h-screen w-full bg-black overflow-hidden">
      
      // Area atas: mengisi sisa ruang (flex-1), dibelah jadi 2 kolom (grid)
      <div className="flex-1 grid grid-cols-2">
        <UserVideo />
        <AgentVisual />
      </div>

      // Area bawah: Bilah kontrol
      <ControlBar />
      
    </div>
  );
}