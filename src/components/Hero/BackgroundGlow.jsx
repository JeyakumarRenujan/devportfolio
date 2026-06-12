function BackgroundGlow() {
  return (
    <>
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/20 blur-3xl rounded-full"></div>

      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2"></div>
    </>
  );
}

export default BackgroundGlow;