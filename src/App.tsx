function App() {
  return (
    <main className="min-h-screen bg-paper px-6 py-20 text-ink">
      <div className="mx-auto max-w-[1200px]">
        <p className="font-mono text-sm text-route-line">WAYPOINT / SYSTEM</p>

        <h1 className="mt-4 font-display text-5xl font-semibold">Waypoint</h1>

        <p className="mt-6 max-w-[65ch] text-slate">
          Tahu di mana error Anda terjadi, sebelum user memberi tahu Anda.
        </p>

        <button
          type="button"
          className="mt-8 border border-brass bg-brass px-6 py-3 font-medium text-paper transition-colors duration-200 hover:bg-ink"
        >
          Mulai gratis
        </button>
      </div>
    </main>
  );
}

export default App;
