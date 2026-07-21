import Link from "next/link";
import { ROUTES } from "@/constants";

export default function NotFound() {
  return (
    <main className="section container-shell min-h-[70vh] flex flex-col justify-center">
      <p className="text-eyebrow">404</p>
      <h1 className="text-display text-5xl mt-4">This page doesn&apos;t exist.</h1>
      <p className="text-body mt-4 max-w-md">
        The page you&apos;re looking for was moved, renamed, or never built.
      </p>
      <Link href={ROUTES.home} className="btn-signature mt-8 w-fit">
        Back to home
      </Link>
    </main>
  );
}
