import React, { useEffect, useRef } from 'react';

export default function UserVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch((error) => {
        console.error('Gagal mengakses kamera atau mikrofon:', error);
      });
  }, []);

  return (
    <div className="flex items-center justify-center h-full bg-gray-700 overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        className="w-full h-full object-cover -scale-x-100"
      />
    </div>
  );
}