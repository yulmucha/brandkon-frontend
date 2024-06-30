"use client";

import { useRouter } from "next/navigation";

interface HeaderProps {
  children: React.ReactNode;
  hasBack: boolean;
}

export default function Header({ children, hasBack }: HeaderProps) {
  const router = useRouter();
  return (
    <header>
      <div className="border-b w-full flex flex-col px-5 py-4">
        <div className="aspect-square size-6">
          {hasBack && (
            <button
              onClick={() => router.back()}
              className="bg-white cursor-pointer"
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5 8.25 12l7.5-7.5"
                  />
                </svg>
              </div>
            </button>
          )}
        </div>
        <div className="font-semmibold h-6 w-full flex justify-center items-center">
          {children}
        </div>
      </div>
    </header>
  );
}
