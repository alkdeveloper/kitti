import { Metadata } from 'next';
import { generatePageMetadata } from '@/utils/metadata';

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata('aydinlatma-metni');
}

export default function AydinlatmaMetniLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

