import { useNavigate } from "react-router-dom";

function ThankYou() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-100 to-rose-200 flex items-center justify-center px-6">
      <div className="bg-white/50 backdrop-blur-md rounded-3xl shadow-xl p-12 max-w-xl text-center">

        <div className="text-5xl mb-6">✅</div>

        <h1 className="text-3xl md:text-4xl font-extrabold text-rose-600 mb-4">
          Demo Complete
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          You have explored the interactive modules within this React-based UI demonstration.
          This project showcases state management, conditional rendering,
          responsive layout design, and event-driven interaction patterns.
        </p>

        <p className="text-gray-600 mb-10">
          Thank you for reviewing the demo.
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
          Restart Demo
        </button>
      </div>
    </div>
  );
}

export default ThankYou;
