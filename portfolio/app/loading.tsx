export default function Loading() {
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-base">
      <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent">
        <span className="h-2 w-2 animate-ping rounded-full bg-accent" />
        Loading
      </div>
    </div>
  );
}
