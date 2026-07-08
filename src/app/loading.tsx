import { Shield } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-bg-primary">
      <div className="flex flex-col items-center gap-4">
        <Shield className="h-10 w-10 animate-pulse text-accent" />
        <div className="h-1 w-32 overflow-hidden rounded-full bg-bg-card">
          <div className="h-full w-1/3 animate-[loading_1.5s_ease-in-out_infinite] rounded-full bg-accent" />
        </div>
      </div>
    </div>
  );
}
