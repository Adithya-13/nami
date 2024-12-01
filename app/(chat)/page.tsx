import { cookies } from 'next/headers';
import React from 'react';

import { DEFAULT_MODEL_NAME, models } from '@/ai/models';
import { Chat } from '@/components/custom/chat';
import MergedSections from '@/components/custom/main-section';
import { generateUUID } from '@/lib/utils';

export default async function Page() {
  const id = generateUUID();
  const cookieStore = await cookies();
  const modelIdFromCookie = cookieStore.get('model-id')?.value;
  const selectedModelId =
    models.find((model) => model.id === modelIdFromCookie)?.id ||
    DEFAULT_MODEL_NAME;

  return (
    <div className="flex flex-col min-h-screen">
      <MergedSections />
      {/* <div className="flex-1 bg-[url('/new/horizontal/bg-chat.jpg')] bg-cover bg-center bg-no-repeat">
        if uncomment this the chat will be displayed duplicated
        i stayed give background for some reasone, dumb reasons
        <Chat
          key={id}
          id={id}
          initialMessages={[]}
          selectedModelId={selectedModelId}
        />
      </div> */}
    </div>
  );
}
