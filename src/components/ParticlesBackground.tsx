export default function ParticlesBackground() {
  return (
    <div className="fixed inset-0 min-h-screen z-[-10] pointer-events-none bg-dark-bg overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-brand-orange/30 rounded-full animate-float-slow" />
      <div className="absolute top-1/3 right-1/3 w-0.5 h-0.5 bg-brand-blue/30 rounded-full animate-float-medium" />
      <div className="absolute bottom-1/3 left-1/2 w-0.5 h-0.5 bg-brand-yellow/20 rounded-full animate-float-fast" />
      <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-brand-orange/20 rounded-full animate-float-medium" />
      <div className="absolute bottom-1/4 left-1/3 w-0.5 h-0.5 bg-brand-blue/25 rounded-full animate-float-slow" />
      <div className="absolute top-1/5 right-1/2 w-0.5 h-0.5 bg-brand-yellow/15 rounded-full animate-float-fast" />
      <div className="absolute top-2/3 left-1/5 w-1 h-1 bg-brand-orange/15 rounded-full animate-float-slow" />
      <div className="absolute bottom-1/2 right-1/5 w-0.5 h-0.5 bg-brand-blue/20 rounded-full animate-float-medium" />
      <div className="absolute top-1/3 left-2/3 w-0.5 h-0.5 bg-brand-yellow/25 rounded-full animate-float-fast" />
      <div className="absolute bottom-1/3 right-2/3 w-1 h-1 bg-brand-orange/10 rounded-full animate-float-medium" />
      <div className="absolute top-3/4 left-3/4 w-0.5 h-0.5 bg-brand-blue/15 rounded-full animate-float-slow" />
      <div className="absolute top-1/4 right-3/4 w-0.5 h-0.5 bg-brand-yellow/10 rounded-full animate-float-fast" />
    </div>
  )
}
