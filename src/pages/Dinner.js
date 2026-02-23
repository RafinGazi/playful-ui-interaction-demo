import { useNavigate } from "react-router-dom";
import { useState } from "react";

import outfit1 from "../assets/images/dinner-outfit-1.png";
import outfit2 from "../assets/images/dinner-outfit-2.png";
import outfit3 from "../assets/images/dinner-outfit-3.png";

const items = [
  {
    id: 1,
    title: "Variant A",
    subtitle: "Structured layout example",
    image: outfit1,
    description:
      "Demonstrates card-based layout with image scaling, hover transitions, and structured text hierarchy.",
  },
  {
    id: 2,
    title: "Variant B",
    subtitle: "Alternate visual presentation",
    image: outfit2,
    description:
      "Illustrates reusable component patterns and consistent styling across different content blocks.",
  },
  {
    id: 3,
    title: "Variant C",
    subtitle: "Responsive content demo",
    image: outfit3,
    description:
      "Shows how multiple items can be dynamically rendered using mapped data structures and consistent UI design.",
  },
];

function Dinner() {
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-100 to-rose-200 px-6 pb-20">

      {/* Back */}
      <button
        onClick={() => navigate("/modules")}
        className="fixed top-4 left-4 z-10 text-gray-700 font-medium"
      >
        ← Back
      </button>

      {/* Header */}
      <div className="pt-24 mb-16 max-w-2xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-rose-600 mb-4">
          Dynamic Interaction Demo
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed">
          This module demonstrates event handling, state updates,
          and conditional UI feedback within a mapped component structure.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {items.map((item, index) => (
          <div
            key={item.id}
            className="
              bg-white rounded-3xl shadow-lg overflow-hidden
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-xl
            "
            style={{ animationDelay: `${index * 120}ms` }}
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full aspect-[3/4] object-cover"
            />

            {/* Content */}
            <div className="p-6">
              <h2 className="text-lg font-semibold text-rose-600 mb-1">
                {item.title}
              </h2>

              <p className="text-sm font-medium text-gray-600 mb-3">
                {item.subtitle}
              </p>

              <p className="text-gray-700 text-sm leading-relaxed mb-6">
                {item.description}
              </p>

              <button
                onClick={() => setSelectedId(item.id)}
                className="
                  w-full py-2 rounded-full
                  bg-rose-500 text-white
                  font-semibold
                  hover:bg-rose-600
                  transition
                "
              >
                Select
              </button>

              {selectedId === item.id && (
                <p className="mt-4 text-center text-sm text-rose-600">
                  Selection state updated ✓
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dinner;
