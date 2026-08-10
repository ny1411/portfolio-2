import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const checkDeviceCapabilities = () => {
  if (typeof window === "undefined" || typeof navigator === "undefined") return false;
  
  // Screen size check (e.g. >= 1024px for laptops/computers)
  if (window.innerWidth < 1024) return false;
  
  // CPU check (assume good if unknown, otherwise >= 4 cores)
  const cores = navigator.hardwareConcurrency;
  if (cores && cores < 4) return false;
  
  // Memory check (if available, >= 4GB)
  // @ts-ignore - deviceMemory is not in standard TS DOM lib yet
  const memory = (navigator as any).deviceMemory;
  if (memory && memory < 4) return false;
  
  // Save Data mode check (if user enabled save data, don't show high quality site)
  // @ts-ignore - connection is not fully typed
  const connection = (navigator as any).connection;
  if (connection && connection.saveData) return false;
  
  return true;
};
