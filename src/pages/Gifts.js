import { useNavigate } from "react-router-dom";
import { useState } from "react";

import flowerImage from "../assets/images/flowers.png";
import chocolateImage from "../assets/images/chocolate.png";

function Gifts() {
  const navigate = useNavigate();
  const [selectedGift, setSelectedGift] = useState(null);

  return (
    <div className="relative h-screen bg-gradient-to-br from-pink-200 via-pink-300 to-rose-300 px-6">

      {/* Back button */}
      <button
        onClick={() => navigate("/yes")}
        className="fixed top-4 left-4 z-10 text-gray-800 font-medium"
      >
        ← Back
      </button>

      {/* Gift cards */}
      <div className="h-full flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-14 sm:gap-20 max-w-xl w-full">

          <div
            onClick={() => setSelectedGift("flowers")}
            className="bg-white/30 backdrop-blur-md rounded-2xl p-8 flex flex-col items-center shadow-lg transition transform hover:scale-105 active:scale-95 cursor-pointer"
          >
            <div className="text-6xl mb-4">🌸</div>
            <div className="text-xl font-semibold text-gray-700">Flowers</div>
          </div>

          <div
            onClick={() => setSelectedGift("chocolate")}
            className="bg-white/30 backdrop-blur-md rounded-2xl p-8 flex flex-col items-center shadow-lg transition transform hover:scale-105 active:scale-95 cursor-pointer"
          >
            <div className="text-6xl mb-4">🍫</div>
            <div className="text-xl font-semibold text-gray-700">Chocolate</div>
          </div>

        </div>
      </div>

      {/* Modal */}
      {selectedGift && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4"
          onClick={() => setSelectedGift(null)}
        >
          {/* Modal container */}
          <div
            className="
              bg-white rounded-2xl shadow-2xl
              w-full max-w-4xl
              max-h-[100dvh]
              animate-fade-up
              flex flex-col
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* Scrollable content */}
            <div className="flex-1 overflow-y-auto">
              <div className="flex flex-col md:flex-row">

                {/* Image */}
                <div className="md:w-1/2 bg-rose-50 flex items-center justify-center p-4">
                  <img
                    src={selectedGift === "flowers" ? flowerImage : chocolateImage}
                    alt={selectedGift}
                    className="w-full max-h-[70vh] object-cover rounded-xl"
                  />
                </div>

                {/* Text */}
                <div className="md:w-1/2 p-6">
                  {selectedGift === "flowers" && (
                    <>
                      <h2 className="text-2xl font-bold mb-4 text-rose-500">
                        Why these flowers 🌸
                      </h2>

                      <p className="text-gray-700 mb-4">
                        At the centre are white, pink, and red roses. They are symbols of
                        pure love, gentle affection, and a love that grows deeper
                        every day. They’re your favourite, and it felt right that
                        they sit at the heart of it all.
                      </p>

                      <p className="text-gray-700 mb-4">
                        Surrounding them are colourful tulips. In the language of
                        flowers, tulips represent warmth, joy, and a love that
                        feels safe and true — just like the many beautiful sides
                        of you.
                      </p>

                      <p className="text-gray-700">
                        And around everything are blue chrysanthemums — my
                        favourite. A quiet promise of loyalty, calm, and care.
                      </p>
                    </>
                  )}

                  {selectedGift === "chocolate" && (
                    <>
                      <h2 className="text-2xl font-bold mb-4 text-rose-500">
                        Something sweet 🍫
                      </h2>

                      <p className="text-gray-700 mb-4">
                        I didn’t choose these chocolates because they’re perfect.
                        I chose them because they’re comforting, warm, and meant
                        to be shared.
                      </p>

                      <p className="text-gray-700 mb-4">
                        Just like the little moments with you. Sitting close,
                        laughing softly, enjoying something sweet together.
                      </p>

                      <p className="text-gray-700">
                        It’s not about the chocolate. It’s about the feeling of
                        sharing it with you. 💖
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Sticky Close button */}
            <div
              className="
                sticky bottom-0
                bg-white/95 backdrop-blur
                flex justify-center
                p-4
                border-t border-rose-100
              "
            >
              <button
                onClick={() => setSelectedGift(null)}
                className="
                  w-full max-w-xs
                  px-8 py-3
                  rounded-full
                  bg-rose-500 text-white
                  font-semibold
                  hover:bg-rose-600
                  transition">
                Close 💖
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gifts;
