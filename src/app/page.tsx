import Link from "next/link";

export default function RootPage() {
  return (
    <main>
      <meta httpEquiv="refresh" content="0;url=/en" />
      <p>
        Redirecting to <Link href="/en">Vision Quest: A New Ascent Wiki</Link>…
      </p>
    </main>
  );
}
