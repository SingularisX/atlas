export default function Home() {
  const chips = ["Computer Vision", "VLSI Design", "Edge AI", "Robotics"];

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center px-4 py-24">
      {/* Session 3: <StarField /> goes here, behind everything */}

      <section className="flex max-w-3xl flex-col items-center gap-6 text-center">
        
        <p className="font-mono text-xs uppercase tracking-widest text-muted">
          Atlas v0.1
        </p>

        
        <h1 className="font-display text-6xl sm:text-8xl text-ink">
          Sutirtha Halder
        </h1>

        
        <p className="text-xl text-ink">
          Electronics engineer building the hardware that lets machines <span className="font-display italic text-star">see</span>.
        </p>

        
        <p className="max-w-2xl text-base text-muted">
          Mapping the path from circuit to camera to autonomy, and proving every step of it here.
        </p>

        
        <div className="flex flex-wrap justify-center gap-2">
          {chips.map((chip) => (
            <span key={chip} className="rounded-full  border  border-line px-3  py-1  font-mono  text-xs  text-star">
              {chip}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}
