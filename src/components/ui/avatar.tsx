// components/ui/avatar.tsx
import * as React from "react";

export function Avatar({ src, alt, className }: { src: string; alt?: string; className?: string }) {
  return (
    <div className={`relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-200 ${className}`}>
      {src ? (
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      ) : (
        <span className="text-sm text-gray-500 w-full h-full flex items-center justify-center">?</span>
      )}
    </div>
  );
}
