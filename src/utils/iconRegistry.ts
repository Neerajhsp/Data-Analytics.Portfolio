import type { IconType } from 'react-icons';
import * as Si from 'react-icons/si';
import * as Tb from 'react-icons/tb';
import * as Fa6 from 'react-icons/fa6';
import * as Lu from 'lucide-react';
import { TbDatabase } from 'react-icons/tb';

const registries: Record<string, IconType>[] = [
  Si as unknown as Record<string, IconType>,
  Tb as unknown as Record<string, IconType>,
  Fa6 as unknown as Record<string, IconType>,
];

/**
 * Resolves an icon by name across icon libraries.
 * Falls back to a safe default icon if the name does not exist,
 * so the app never crashes or shows a broken import because of an icon string.
 */
export function getIcon(name: string): IconType {
  for (const registry of registries) {
    if (registry[name]) return registry[name];
  }
  return TbDatabase;
}

export const LucideIcons = Lu;
