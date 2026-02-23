import { useNavigate } from "react-router-dom";
import prestonMarketMap from "../assets/images/preston-market-map.png";

function Brunch() {
    const navigate = useNavigate();

    return (
        <div className="relative min-h-screen bg-gradient-to-br from-orange-200 via-pink-200 to-rose-300 px-6 pb-12">

            {/* Back */}
            <button
                onClick={() => navigate("/yes")}
                className="fixed top-4 left-4 z-10 text-gray-800 font-medium"
            >
                ← Back
            </button>

            <div className="h-full overflow-y-auto flex flex-col items-center justify-start text-center max-w-md mx-auto pt-16 pb-8">

                <h1 className="text-4xl font-extrabold text-white mb-8
               drop-shadow-[0_2px_2px_rgba(0,0,0,0.35)]">
                    Brunch ☕🥐
                </h1>


                {/* Location card */}
                <a
                    href="https://www.google.com/maps/search/?api=1&query=Preston+Market+Melbourne"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full mb-6"
                >

                    <div className="bg-white/30 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg transition transform hover:scale-[1.02] active:scale-[0.98]">

                        {/* Map preview */}
                        <div className="relative h-48 w-full">
                            <img
                                src={prestonMarketMap}
                                alt="Preston Market map"
                                className="w-full h-full object-cover"
                            />


                            {/* Overlay label */}
                            <div className="absolute inset-0 bg-black/20 flex items-end">
                                <div className="p-4 text-white">
                                    <h2 className="text-xl font-semibold">
                                        Preston Market
                                    </h2>
                                    <p className="text-sm opacity-90">
                                        Tap to open in Google Maps
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </a>


                {/* Time */}
                <div className="bg-white/40 backdrop-blur-md rounded-2xl p-6 w-full shadow-lg mb-6">
                    <h2 className="text-xl font-semibold text-rose-700 mb-2">
                        When
                    </h2>
                    <p className="text-rose-800 leading-relaxed">
                        🕐 1:00 PM — 14 February 2026
                        <br />
                        A relaxed late brunch, no rush.
                        <br />
                        We meet at Preston Market and let the day unfold.
                    </p>
                </div>


                {/* Food ideas */}
                <div className="bg-white/40 backdrop-blur-md rounded-2xl p-6 w-full shadow-lg">
                    <h2 className="text-xl font-semibold text-rose-700 mb-3">
                        What we could try
                    </h2>

                    <ul className="text-rose-800 space-y-2 leading-relaxed mb-4">
                        <li>• Tacos & empanadas</li>
                        <li>• A Nashville chicken burger</li>
                        <li>• Teaser Super Dirt Tea</li>
                    </ul>

                    <p className="text-rose-700 italic leading-relaxed">
                        Something warm and comforting.
                        <br />
                        And whatever catches our eye together.
                    </p>
                </div>



            </div>
        </div>
    );
}

export default Brunch;
