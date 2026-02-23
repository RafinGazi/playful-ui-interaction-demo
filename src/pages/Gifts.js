import { useNavigate } from "react-router-dom";
import { useState } from "react";

import flowerImage from "../assets/images/flowers.png";
import chocolateImage from "../assets/images/chocolate.png";

function Gifts() {
  const navigate = useNavigate();
  const [selectedModule, setSelectedModule] = useState(null);

  return (
    <div className="relative h-screen bg-gradient-to-br from-rose-100 via-pink-100 to-rose-200 px-6">

      {/* Back button */}
      <button
        onClick={() => navigate("/modules")}
        className="fixed top-4 left-4 z-10 text-gray-700 font-medium"
      >
        ← Back
      </button>

      {/* Module selection */}
      <div className="h-full flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 max-w-xl w-full">

          <div
            onClick={() => setSelectedModule("image")}
            className="bg-white/40 backdrop-blur-md rounded-2xl p-8 flex flex-col items-center shadow-lg transition transform hover:scale-105 active:scale-95 cursor-pointer"
          >
            <div className="text-5xl mb-4">🖼️</div>
            <div className="text-lg font-semibold text-gray-700">
              Image Preview Modal
            </div>
          </div>

          <div
            onClick={() => setSelectedModule("content")}
            className="bg-white/40 backdrop-blur-md rounded-2xl p-8 flex flex-col items-center shadow-lg transition transform hover:scale-105 active:scale-95 cursor-pointer"
          >
            <div className="text-5xl mb-4">📄</div>
            <div className="text-lg font-semibold text-gray-700">
              Content Variant Modal
            </div>
          </div>

        </div>
      </div>

      {/* Modal */}
      {selectedModule && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4"
          onClick={() => setSelectedModule(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[100dvh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex-1 overflow-y-auto">
              <div className="flex flex-col md:flex-row">

                {/* Image Section */}
                <div className="md:w-1/2 bg-gray-50 flex items-center justify-center p-6">
                  <img
                    src={selectedModule === "image" ? flowerImage : chocolateImage}
                    alt="Preview"
                    className="w-full max-h-[70vh] object-cover rounded-xl"
                  />
                </div>

                {/* Text Section */}
                <div className="md:w-1/2 p-8">
                  {selectedModule === "image" && (
                    <>
                      <h2 className="text-2xl font-bold mb-4 text-rose-600">
                        Modal State Control
                      </h2>

                      <p className="text-gray-700 mb-4">
                        This example demonstrates conditional rendering
                        based on React state. When a module is selected,
                        a modal component is dynamically mounted.
                      </p>

                      <p className="text-gray-700 mb-4">
                        The layout adapts responsively using flexbox,
                        and scroll behavior is controlled using a
                        dedicated overflow container.
                      </p>

                      <p className="text-gray-700">
                        Closing the modal resets the state to <strong>null</strong>,
                        removing it from the DOM.
                      </p>
                    </>
                  )}

                  {selectedModule === "content" && (
                    <>
                      <h2 className="text-2xl font-bold mb-4 text-rose-600">
                        Conditional Content Rendering
                      </h2>

                      <p className="text-gray-700 mb-4">
                        Different content blocks are rendered depending
                        on which card is selected.
                      </p>

                      <p className="text-gray-700 mb-4">
                        This demonstrates how state-driven UI patterns
                        can dynamically switch content while maintaining
                        consistent layout structure.
                      </p>

                      <p className="text-gray-700">
                        The component remains reusable and scalable,
                        as additional variants can be introduced with
                        minimal structural changes.
                      </p>
                    </>
                  )}
                </div>

              </div>
            </div>

            {/* Close button */}
            <div className="sticky bottom-0 bg-white/95 flex justify-center p-4 border-t">
              <button
                onClick={() => setSelectedModule(null)}
                className="w-full max-w-xs px-8 py-3 rounded-full bg-rose-500 text-white font-semibold hover:bg-rose-600 transition"
              >
                Close Module
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}

export default Gifts;
