import { Metadata } from 'next';
import { generatePageMetadata } from '@/utils/metadata';

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata('toptan-portal');
}

export default function ToptanPortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

