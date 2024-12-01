'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Chat } from '@/components/custom/chat';
import { generateUUID } from '@/lib/utils';
import { getModelId } from './actions';

export default function GoblinClient() {
  const [selectedModelId, setSelectedModelId] = useState('');
  const id = generateUUID();

  useEffect(() => {
    const fetchModelId = async () => {
      const modelId = await getModelId();
      setSelectedModelId(modelId);
    };
    fetchModelId();
  }, []);

  const handleRefresh = () => {
    // Refresh the page
    window.location.reload();
  };

  if (!selectedModelId) {
    return null; // Or a loading state
  }

  return (
    <div className="min-h-screen flex-1 bg-[url('/new/horizontal/bg-chat.jpg')] bg-cover bg-center bg-no-repeat relative">
      <button
        onClick={handleRefresh}
        className="absolute top-4 left-8 z-10 transition-transform duration-200 ease-in-out transform hover:scale-110 active:scale-95 focus:outline-none"
        aria-label="Refresh"
      >
        <Image
          src="/new/icons/back.png"
          alt="Refresh"
          width={180}
          height={50}
          className="w-auto h-auto"
        />
      </button>
      <Chat
        key={id}
        id={id}
        initialMessages={[]}
        selectedModelId={selectedModelId}
      />
    </div>
  );
}
