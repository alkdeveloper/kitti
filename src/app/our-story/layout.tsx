import { Metadata } from 'next';
import { generatePageMetadata } from '@/utils/metadata';

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata('our-story');
}

export default function OurStoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

