import { useNavigate } from "react-router-dom";
import prestonMarketMap from "../assets/images/preston-market-map.png";

function Brunch() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-rose-100 via-pink-100 to-rose-200 px-6 pb-12">

      {/* Back */}
      <button
        onClick={() => navigate("/modules")}
        className="fixed top-4 left-4 z-10 text-gray-700 font-medium"
      >
        ← Back
      </button>

      <div className="flex flex-col items-center text-center max-w-2xl mx-auto pt-16 pb-12">

        <h1 className="text-4xl md:text-5xl font-extrabold text-rose-600 mb-8">
          Layout & External Link Demo
        </h1>

        <p className="text-gray-700 mb-10 max-w-lg">
          This module demonstrates structured card layouts, image overlays,
          and external link integration within a responsive interface.
        </p>

        {/* External Link Card */}
        <a
          href="https://www.google.com/maps/search/?api=1&query=Preston+Market+Melbourne"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full mb-10"
        >
          <div className="bg-white/50 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg transition transform hover:scale-[1.02] active:scale-[0.98]">

            {/* Image Preview */}
            <div className="relative h-56 w-full">
              <img
                src={prestonMarketMap}
                alt="Map preview"
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 flex items-end">
                <div className="p-5 text-white text-left">
                  <h2 className="text-xl font-semibold">
                    Clickable Image Card
                  </h2>
                  <p className="text-sm opacity-90">
                    Opens an external resource in a new tab
                  </p>
                </div>
              </div>
            </div>

          </div>
        </a>

        {/* Info Block 1 */}
        <div className="bg-white/50 backdrop-blur-md rounded-2xl p-8 w-full shadow-lg mb-8">
          <h2 className="text-xl font-semibold text-rose-600 mb-3">
            Layout Techniques
          </h2>

          <p className="text-gray-700 leading-relaxed">
            This section demonstrates card-based layout design,
            consistent spacing using flexbox, and responsive
            stacking across screen sizes.
          </p>
        </div>

        {/* Info Block 2 */}
        <div className="bg-white/50 backdrop-blur-md rounded-2xl p-8 w-full shadow-lg">
          <h2 className="text-xl font-semibold text-rose-600 mb-3">
            Interaction Design
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Hover scaling, backdrop blur, and subtle shadowing
            enhance visual feedback while maintaining a clean
            and accessible UI structure.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Brunch;
