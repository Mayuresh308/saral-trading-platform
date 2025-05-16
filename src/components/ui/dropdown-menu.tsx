// import React, { useState, useRef, useEffect, createContext, useContext } from "react";

// type WrapperProps = {
//   children: React.ReactNode;
// };

// const DropdownContext = createContext<{
//   isOpen: boolean;
//   toggle: () => void;
//   close: () => void;
// }>({
//   isOpen: false,
//   toggle: () => {},
//   close: () => {},
// });

// export const DropdownMenu: React.FC<WrapperProps> = ({ children }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const dropdownRef = useRef<HTMLDivElement>(null);

//   const toggle = () => setIsOpen(!isOpen);
//   const close = () => setIsOpen(false);

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
//         close();
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   return (
//     <DropdownContext.Provider value={{ isOpen, toggle, close }}>
//       <div className="relative" ref={dropdownRef}>
//         {children}
//       </div>
//     </DropdownContext.Provider>
//   );
// };

// export const DropdownMenuTrigger: React.FC<WrapperProps> = ({ children }) => {
//   const { toggle } = useContext(DropdownContext);

//   return (
//     <div onClick={toggle} className="cursor-pointer">
//       {children}
//     </div>
//   );
// };

// export const DropdownMenuContent: React.FC<WrapperProps> = ({ children }) => {
//   const { isOpen } = useContext(DropdownContext);

//   if (!isOpen) return null;

//   return (
//     <div className="absolute mt-2 bg-white border rounded shadow-lg z-50">
//       {children}
//     </div>
//   );
// };

// export const DropdownMenuItem: React.FC<
//   WrapperProps & { onSelect?: () => void }
// > = ({ children, onSelect }) => {
//   const { close } = useContext(DropdownContext);

//   const handleSelect = () => {
//     if (onSelect) onSelect();
//     close();
//   };

//   return (
//     <div
//       className="hover:bg-gray-100 px-4 py-2 cursor-pointer"
//       onClick={handleSelect}
//     >
//       {children}
//     </div>
//   );
// };





import React, { useState, useRef, useEffect, createContext, useContext } from "react";

type WrapperProps = {
  children: React.ReactNode;
};

type DropdownContextType = {
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
};

const DropdownContext = createContext<DropdownContextType | undefined>(undefined);

export const DropdownMenu: React.FC<WrapperProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggle = () => setIsOpen(prev => !prev);
  const close = () => setIsOpen(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        close();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <DropdownContext.Provider value={{ isOpen, toggle, close }}>
      <div className="relative" ref={dropdownRef}>
        {children}
      </div>
    </DropdownContext.Provider>
  );
};

export const DropdownMenuTrigger: React.FC<WrapperProps> = ({ children }) => {
  const context = useContext(DropdownContext);
  if (!context) throw new Error("DropdownMenuTrigger must be used within DropdownMenu");
  const { toggle } = context;

  return (
    <div onClick={toggle} className="cursor-pointer">
      {children}
    </div>
  );
};

export const DropdownMenuContent: React.FC<WrapperProps> = ({ children }) => {
  const context = useContext(DropdownContext);
  if (!context) throw new Error("DropdownMenuContent must be used within DropdownMenu");
  const { isOpen } = context;

  if (!isOpen) return null;

  return (
    <div className="absolute mt-2 bg-white border rounded shadow-lg z-50">
      {children}
    </div>
  );
};

export const DropdownMenuItem: React.FC<
  WrapperProps & { onSelect?: () => void }
> = ({ children, onSelect }) => {
  const context = useContext(DropdownContext);
  if (!context) throw new Error("DropdownMenuItem must be used within DropdownMenu");
  const { close } = context;

  const handleSelect = () => {
    if (onSelect) onSelect();
    close();
  };

  return (
    <div
      className="hover:bg-gray-100 px-4 py-2 cursor-pointer"
      onClick={handleSelect}
    >
      {children}
    </div>
  );
};
