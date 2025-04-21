export default function SignUpPage() {
  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#12395f] to-[#011529]">
      
      {/* 🎈 3D Floating Spheres - simulate with multiple gradient blur blobs */}
      <div className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-br from-blue-500 to-blue-900 blur-[80px] opacity-40 top-10 left-10 animate-pulse" />
      <div className="absolute w-[200px] h-[200px] rounded-full bg-blue-700 blur-[70px] opacity-30 bottom-20 right-20 animate-pulse delay-200" />
      <div className="absolute w-[150px] h-[150px] rounded-full bg-blue-600 blur-[60px] opacity-40 top-1/4 right-1/3 animate-pulse delay-500" />

      {/* 🧊 Glassmorphic Signup Form */}
      <div className="z-10 w-[400px] h-[480px] bg-white/10 backdrop-blur-md rounded-full shadow-2xl flex flex-col items-center justify-center text-white">
        <h2 className="text-3xl font-thin mb-8 tracking-wide">Sign Up</h2>
        <input
          type="text"
          placeholder="Username"
          className="w-3/4 mb-4 px-4 py-2 bg-white/10 text-white placeholder-white rounded-md shadow-inner backdrop-blur focus:outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-3/4 mb-4 px-4 py-2 bg-white/10 text-white placeholder-white rounded-md shadow-inner backdrop-blur focus:outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-3/4 mb-6 px-4 py-2 bg-white/10 text-white placeholder-white rounded-md shadow-inner backdrop-blur focus:outline-none"
        />
        <button className="bg-white text-blue-900 px-6 py-2 rounded-full font-semibold shadow-md hover:scale-105 transition">
          Submit
        </button>
      </div>
    </div>
  );
}
