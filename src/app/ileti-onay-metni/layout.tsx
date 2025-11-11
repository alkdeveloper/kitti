import { Metadata } from 'next';
import { generatePageMetadata } from '@/utils/metadata';

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata('ileti-onay-metni');
}

export default function IletiOnayMetniLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

