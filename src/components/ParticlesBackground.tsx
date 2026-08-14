export default function ParticlesBackground() {
  return (
    <div className="fixed inset-0 min-h-screen z-[-10] pointer-events-none bg-dark-bg overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-brand-orange/40 rounded-full animate-float-slow" />
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-brand-blue/35 rounded-full animate-float-medium" />
      <div className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-brand-yellow/30 rounded-full animate-float-fast" />
      <div className="absolute top-2/3 left-1/5 w-1.5 h-1.5 bg-brand-orange/25 rounded-full animate-float-slow" />
      <div className="absolute bottom-1/2 right-1/5 w-1 h-1 bg-brand-blue/30 rounded-full animate-float-medium" />
      <div className="absolute top-3/4 left-3/4 w-1 h-1 bg-brand-blue/25 rounded-full animate-float-slow" />
    </div>
  )
}
