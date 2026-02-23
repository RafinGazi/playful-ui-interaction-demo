import { useNavigate } from "react-router-dom";

function Yes() {
  const navigate = useNavigate();

  return (
    <div className="
      h-screen
      overflow-hidden
      flex flex-col
      items-center
      text-center
      bg-gradient-to-br from-rose-200 via-pink-200 to-rose-300
      px-6
    ">

      {/* Back button */}
      <button
        onClick={() => navigate("/")}
        className="fixed top-4 left-4 z-10 text-gray-700 font-medium"
      >
        ← Back
      </button>

      {/* Header */}
      <div className="pt-16 max-w-lg">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-rose-600">
          Interaction Modules
        </h1>

        <p className="text-lg md:text-xl text-gray-700">
          Select a section below to explore different UI behaviours,
          layout techniques, and component interactions.
        </p>
      </div>

      {/* Options */}
      <div className="flex-1 w-full flex items-center justify-center">
        <div
          className="
            grid grid-cols-1 sm:grid-cols-3
            gap-8
            max-w-4xl w-full
            mt-12
          "
        >

          {/* Modal Interaction */}
          <div
            onClick={() => navigate("/modal-demo")}
            className="bg-white/40 backdrop-blur-md rounded-2xl p-6
              h-[160px] flex flex-col items-center justify-center
              shadow-lg transition transform hover:scale-105 active:scale-95 cursor-pointer"
          >
            <div className="text-4xl mb-3">🧩</div>
            <div className="text-lg font-semibold text-gray-700">
              Modal Interaction
            </div>
          </div>

          {/* Layout Demo */}
          <div
            onClick={() => navigate("/layout-demo")}
            className="bg-white/40 backdrop-blur-md rounded-2xl p-6
              h-[160px] flex flex-col items-center justify-center
              shadow-lg transition transform hover:scale-105 active:scale-95 cursor-pointer"
          >
            <div className="text-4xl mb-3">📐</div>
            <div className="text-lg font-semibold text-gray-700">
              Layout Demo
            </div>
          </div>

          {/* Conditional Rendering */}
          <div
            onClick={() => navigate("/interaction-demo")}
            className="bg-white/40 backdrop-blur-md rounded-2xl p-6
              h-[160px] flex flex-col items-center justify-center
              shadow-lg transition transform hover:scale-105 active:scale-95 cursor-pointer"
          >
            <div className="text-4xl mb-3">⚡</div>
            <div className="text-lg font-semibold text-gray-700">
              Conditional Rendering
            </div>
          </div>

        </div>
      </div>

      {/* Completion Section */}
      <div className="pb-12 flex flex-col items-center">
        <p className="text-gray-600 mb-4">
          Explore all modules or finish the demo.
        </p>

        <button
          onClick={() => navigate("/complete")}
          className="
            px-10 py-4
            rounded-full
            bg-rose-500
            text-white
            font-semibold
            text-lg
            shadow-md
            hover:bg-rose-600
            transition
          "
        >
          Complete Demo
        </button>
      </div>

    </div>
  );
}

export default Yes;
