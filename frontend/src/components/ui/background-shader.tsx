"use client"

export default function BackgroundShader() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-[hsl(var(--background))]">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-95"
        style={{
          backgroundImage: [
            "radial-gradient(circle at 18% 18%, rgba(59,130,246,0.24), transparent 32%)",
            "radial-gradient(circle at 82% 16%, rgba(99,102,241,0.2), transparent 28%)",
            "radial-gradient(circle at 50% 78%, rgba(14,165,233,0.16), transparent 34%)",
            "linear-gradient(180deg, rgba(248,250,252,0.98), rgba(239,246,255,0.94) 42%, rgba(224,242,254,0.92))",
          ].join(","),
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.16),rgba(255,255,255,0.04)_34%,rgba(15,23,42,0.08))]" />
      <div className="absolute left-[-12%] top-[-16%] h-[28rem] w-[28rem] rounded-full bg-sky-300/18 blur-3xl" />
      <div className="absolute bottom-[-18%] right-[-12%] h-[30rem] w-[30rem] rounded-full bg-indigo-300/14 blur-3xl" />
    </div>
  )
}
