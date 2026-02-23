import { useNavigate } from "react-router-dom";

function ThankYou() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-rose-200 to-pink-300 flex items-center justify-center px-6">
      <div className="bg-white/40 backdrop-blur-md rounded-3xl shadow-xl p-10 max-w-lg text-center animate-fade-up">

        <div className="text-6xl mb-6">💖</div>

        <h1 className="text-3xl md:text-4xl font-extrabold text-rose-700 mb-4">
          Thank you for being you
        </h1>

        <p className="text-rose-900/90 text-lg leading-relaxed mb-6">
          This little experience was made just for you.
          No matter what you clicked, chose, or explored —
          I’m just really grateful for you.
        </p>

        <p className="text-rose-800 font-medium mb-8">
          Happy Valentine’s 💌
        </p>

        <button
          onClick={() => navigate("/")}
          className="
            px-8 py-3 rounded-full
            bg-rose-500 text-white
            font-semibold
            hover:bg-rose-600
            transition
          "
        >
          Back to start
        </button>
      </div>
    </div>
  );
}

export default ThankYou;
