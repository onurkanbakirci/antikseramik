import Image from 'next/image';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default function HomePage() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Image
        src="/images/landing.jpg"
        alt="Coming Soon"
        fill
        style={{ objectFit: 'cover' }}
        priority
      />
    </div>
  );
}
