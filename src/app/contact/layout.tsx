import { Metadata } from 'next';
import { generatePageMetadata } from '@/utils/metadata';

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata('contact');
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

