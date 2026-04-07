import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'hello-world-ai',
  description: 'Companion starter for the AI_Workflow curriculum',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 antialiased">{children}</body>
    </html>
  );
}
