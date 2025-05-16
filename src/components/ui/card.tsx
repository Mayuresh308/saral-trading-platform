// import * as React from "react";
// import { cn } from "@/lib/utils";

// interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

// export const Card: React.FC<CardProps> = ({ className, ...props }) => {
//   return (
//     <div
//       className={cn("rounded-xl border bg-white text-black shadow", className)}
//       {...props}
//     />
//   );
// };

// export const CardContent: React.FC<CardProps> = ({ className, ...props }) => {
//   return (
//     <div className={cn("p-4", className)} {...props} />
//   );
// };











import * as React from "react";
import { cn } from "@/lib/utils";

type CardProps = React.HTMLAttributes<HTMLDivElement>;

export const Card: React.FC<CardProps> = ({ className, ...props }) => {
  return (
    <div
      className={cn("rounded-xl border bg-white text-black shadow", className)}
      {...props}
    />
  );
};

export const CardContent: React.FC<CardProps> = ({ className, ...props }) => {
  return (
    <div className={cn("p-4", className)} {...props} />
  );
};
