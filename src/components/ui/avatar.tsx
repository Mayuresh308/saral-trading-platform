import * as React from "react";
import { cn } from "@/lib/utils";

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  fallback?: string;
  alt?: string;
  size?: string;
}

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ src, fallback = "?", alt = "Avatar", size = "40px", className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-full bg-gray-300 flex items-center justify-center text-sm text-white font-medium overflow-hidden",
          className
        )}
        style={{ width: size, height: size }}
        {...props}
      >
        {src ? (
          <img src={src} alt={alt} className="w-full h-full object-cover" />
        ) : (
          fallback
        )}
      </div>
    );
  }
);

Avatar.displayName = "Avatar";
