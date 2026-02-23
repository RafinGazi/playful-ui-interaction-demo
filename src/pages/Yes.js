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
      bg-gradient-to-br from-rose-300 via-pink-300 to-red-300
      px-6
    ">

      <button
        onClick={() => navigate("/")}
        className="fixed top-4 left-4 z-10 text-gray-800 font-medium"
      >
        ← Back
      </button>

      {/* Top message */}
      <div className="pt-16 max-w-md animate-fade-up">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">
          I knew you’d say yes 💖
        </h1>

        <p className="text-lg md:text-xl text-gray-800">
          You just made me the happiest person.
          Ready for what comes next? 😊
        </p>
      </div>

      {/* Options */}
      <div className="flex-1 w-full flex items-center justify-center">
        <div
          className="
            grid grid-cols-1 sm:grid-cols-3
            gap-6
            max-w-3xl w-full
            mt-12
            animate-fade-up
          "
          style={{ animationDelay: "0.2s" }}
        >
          {/* Gifts */}
          <div
            onClick={() => navigate("/gifts")}
            className="bg-white/30 backdrop-blur-md rounded-2xl p-4 sm:p-6
              h-[140px] flex flex-col items-center justify-center
              shadow-lg transition transform hover:scale-105 active:scale-95 cursor-pointer"
          >
            <div className="text-5xl mb-4">🎁</div>
            <div className="text-xl font-semibold text-gray-700">Gifts</div>
          </div>

          {/* Brunch */}
          <div
            onClick={() => navigate("/brunch")}
            className="bg-white/30 backdrop-blur-md rounded-2xl p-4 sm:p-6
              h-[140px] flex flex-col items-center justify-center
              shadow-lg transition transform hover:scale-105 active:scale-95 cursor-pointer"
          >
            <div className="text-5xl mb-4">🥐</div>
            <div className="text-xl font-semibold text-gray-700">Brunch</div>
          </div>

          {/* Dinner */}
          <div
            onClick={() => navigate("/dinner")}
            className="bg-white/30 backdrop-blur-md rounded-2xl p-4 sm:p-6
              h-[140px] flex flex-col items-center justify-center
              shadow-lg transition transform hover:scale-105 active:scale-95 cursor-pointer"
          >
            <div className="text-5xl mb-4">🍽️</div>
            <div className="text-xl font-semibold text-gray-700">Dinner</div>
          </div>
        </div>
      </div>

      {/* Thank you section */}
      <div className="pb-12 flex flex-col items-center animate-fade-up">
        <p className="text-white/80 mb-4 mt-4">
          Whenever you’re ready…
        </p>

        <button
          onClick={() => navigate("/thank-you")}
          className="
            px-10 py-4
            rounded-full
            bg-white/60 backdrop-blur-md
            text-rose-700
            font-semibold
            text-lg
            shadow-lg
            hover:bg-white/80
            transition
          "
        >
          Thank you 💖
        </button>
      </div>

    </div>
  );
}

export default Yes;
