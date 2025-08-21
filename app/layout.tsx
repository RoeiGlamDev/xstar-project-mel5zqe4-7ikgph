import React from 'react';

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'HouseIL AirBNB rental platform',
  description: 'AirBNB rental platform - HouseIL | Premium hospitality and rental platform with ',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased dark">{children}</body>
    </html>
  );
}