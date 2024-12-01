import { getModelId } from '@/app/(chat)/goblin-chat/actions';

import { generateUUID } from '@/lib/utils';
import { motion, MotionValue, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Chat } from './custom/chat';
import { SECTION1IMAGE } from '@/lib/constants';
import { IoMdClose } from 'react-icons/io';

const HallComponent = ({
  x,
  y,
  onBack,
}: {
  onBack: () => void;
  x: MotionValue<number>;
  y: MotionValue<number>;
}) => {
  const [selectedModelId, setSelectedModelId] = useState('');
  const id = generateUUID();

  useEffect(() => {
    const fetchModelId = async () => {
      const modelId = await getModelId();
      setSelectedModelId(modelId);
    };
    fetchModelId();
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <div className="relative size-full flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 h-1/2 lg:h-full lg:relative absolute z-10 lg:right-[unset] -right-1/3 bottom-0">
          <Image
            src={SECTION1IMAGE}
            alt="Section 1 Image"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="w-full lg:w-1/2 h-1/2 lg:h-full relative bg-[#191919] pt-12">
          <Chat
            key={id}
            id={id}
            initialMessages={[]}
            selectedModelId={selectedModelId}
          />
        </div>
      </div>

      <button
        className="flex items-center px-3 py-1.5 sm:px-4 sm:py-2  text-white rounded-full shadow-lg  transition-transform hover:scale-105 absolute top-4 sm:top-8 right-4 sm:right-8 z-50 text-sm sm:text-base"
        onClick={onBack}
      >
        <IoMdClose />
      </button>
    </div>
  );
};

export default HallComponent;
