'use client';

import { Attachment, ToolInvocation } from 'ai';
import cx from 'classnames';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Dispatch, ReactNode, SetStateAction } from 'react';

import { Markdown } from './markdown';
import Image from 'next/image';
import { ICONIMAGE } from '@/lib/constants';

export const Message = ({
  role,
  content,
  toolInvocations,
  attachments,
}: {
  role: string;
  content: string | ReactNode;
  toolInvocations: Array<ToolInvocation> | undefined;
  attachments?: Array<Attachment>;
}) => {
  return (
    <motion.div
      className="w-full mx-auto max-w-full group/message"
      initial={{ y: 5, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      data-role={role}
    >
      <div
        className={cx('flex gap-4 w-full max-w-full py-1', {
          'justify-end': role === 'user',
        })}
      >
        {role === 'assistant' && (
          <div className="size-12 rounded-full  flex items-center justify-center">
            <Image
              src={ICONIMAGE}
              alt="Animation 1"
              width={100}
              height={100}
              className='size-12 rounded-full bg-[#ddb76e] flex items-center justify-center'
            />
          </div>
        )}
        <div
          className={cx(
            'flex flex-col gap-2 max-w-[80%] rounded-tr-2xl rounded-bl-2xl rounded-tl-2xl px-4 py-2',
            {
              '': role === 'assistant',
              'bg-[#2b2b2b]': role === 'user',
            }
          )}
        >
          {content && (
            <div className="flex flex-col gap-4 text-lg text-white">
              <Markdown>{content as string}</Markdown>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};
