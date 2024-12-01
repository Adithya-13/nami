'use client';

import Image from 'next/image';
import { Attachment, Message } from 'ai';
import { useChat } from 'ai/react';
import { useState, useRef, useEffect } from 'react';
import { Message as PreviewMessage } from '@/components/custom/message';
import { MultimodalInput } from './multimodal-input';

export function Chat({
  id,
  initialMessages,
  selectedModelId,
}: {
  id: string;
  initialMessages: Array<Message>;
  selectedModelId: string;
}) {
  const {
    messages,
    setMessages,
    handleSubmit,
    input,
    setInput,
    append,
    isLoading,
    stop,
    data: streamingData,
  } = useChat({
    body: { id, modelId: selectedModelId },
    initialMessages,
  });

  const [attachments, setAttachments] = useState<Array<Attachment>>([]);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [autoScroll, setAutoScroll] = useState(true);
  const [isNearBottom, setIsNearBottom] = useState(true);

  const checkIfNearBottom = () => {
    const container = chatContainerRef.current;
    if (container) {
      const threshold = 100;
      const isNear =
        container.scrollHeight - container.scrollTop - container.clientHeight <
        threshold;
      setIsNearBottom(isNear);
    }
  };

  const scrollToBottom = () => {
    const container = chatContainerRef.current;
    if (container && (autoScroll || isNearBottom)) {
      container.scrollTo({
        top: container.scrollHeight,
        behavior: 'smooth',
      });
    }
  };

  const handleScroll = () => {
    checkIfNearBottom();
    const container = chatContainerRef.current;
    if (container) {
      setAutoScroll(
        container.scrollHeight - container.scrollTop === container.clientHeight
      );
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isNearBottom, autoScroll, scrollToBottom]);

  const visibleMessages = messages;

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 bg-contain bg-no-repeat bg-center">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full h-full max-w-7xl mx-auto flex flex-col">
            <div
              ref={chatContainerRef}
              onScroll={handleScroll}
              className="flex-1 overflow-y-auto  shadow-xl  p-4 scrollbar-hide"
            >
              {visibleMessages.map((message) => (
                <PreviewMessage
                  key={message.id}
                  role={message.role}
                  content={message.content}
                  attachments={message.experimental_attachments}
                  toolInvocations={message.toolInvocations}
                />
              ))}
            </div>

            <div className="bg-[#2a2a2a] w-full">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3"
              >
                <MultimodalInput
                  className="min-h-[40px] max-h-[120px] placeholder:text-gray-600 text-gray-600 text-sm sm:text-base resize-none bg-[#313131] rounded px-3 py-2 shadow-sm"
                  input={input}
                  setInput={setInput}
                  handleSubmit={handleSubmit}
                  isLoading={isLoading}
                  stop={stop}
                  attachments={attachments}
                  setAttachments={setAttachments}
                  messages={messages}
                  setMessages={setMessages}
                  append={append}
                />{' '}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
