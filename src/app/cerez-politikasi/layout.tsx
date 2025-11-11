import { Metadata } from 'next';
import { generatePageMetadata } from '@/utils/metadata';

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata('cerez-politikasi');
}

export default function CerezPolitikasiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

