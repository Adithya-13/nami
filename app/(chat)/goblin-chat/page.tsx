import { cookies } from 'next/headers';
import { DEFAULT_MODEL_NAME, models } from '@/ai/models';
import GoblinClient from './goblin-client';

export default function GoblinPage() {
  // Move cookie logic to a separate Server Action
  return <GoblinClient />;
}
