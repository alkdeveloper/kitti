import HomePage from '@/components/HomePage';
import { generatePageMetadata } from '@/utils/metadata';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata('home');
}

export default function Page() {
  return <HomePage />;
}