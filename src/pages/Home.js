import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";

function Home() {
    const navigate = useNavigate();

    const noButtonRef = useRef(null);
    const containerRef = useRef(null);

    const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
    const [activated, setActivated] = useState(false);

    const moveNoButton = () => {
        if (!activated) {
            setActivated(true);
            return;
        }

        const maxX = window.innerWidth / 2 - 80;
        const maxY = window.innerHeight / 2 - 200;

        const randomX = (Math.random() * 2 - 1) * maxX;
        const randomY = (Math.random() * 2 - 1) * maxY;

        setNoPosition({ x: randomX, y: randomY });
    };

    const handleMouseMove = (e) => {
        if (!noButtonRef.current) return;

        const rect = noButtonRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const distance = Math.hypot(
            e.clientX - centerX,
            e.clientY - centerY
        );

        if (distance < 120) {
            moveNoButton();
        }
    };

    return (
        <div className="relative h-screen overflow-hidden bg-gradient-to-br from-rose-200 via-pink-200 to-rose-300">

            <div
                className="relative z-10 flex items-center justify-center h-full px-6"
                onMouseMove={handleMouseMove}
            >
                <div className="flex flex-col items-center text-center max-w-xl w-full">

                    <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl mb-6">
                        <span className="bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
                            Playful UI Interaction Demo
                        </span>
                    </h1>

                    <p className="text-gray-700 text-lg mb-10 max-w-md">
                        A lightweight React application showcasing interactive UI behaviour,
                        conditional rendering, and responsive layout techniques.
                    </p>

                    <div
                        ref={containerRef}
                        onTouchStart={moveNoButton}
                        onMouseMove={handleMouseMove}
                        className="relative w-full h-32 flex items-center justify-center"
                    >
                        {/* Centered button pair */}
                        <div className="relative flex items-center gap-12 -translate-x-4">

                            <button
                                className="px-8 py-3 rounded-full bg-rose-500 hover:bg-rose-600 text-white font-semibold text-lg shadow-lg transition transform hover:scale-105"
                                onClick={() => navigate("/modules")}
                            >
                                Explore
                            </button>

                            <button
                                ref={noButtonRef}
                                style={{ transform: `translate(${noPosition.x}px, ${noPosition.y}px)` }}
                                className="px-8 py-3 rounded-full bg-gray-200 text-gray-600 font-semibold text-lg shadow-md transition-transform duration-300 ease-out pointer-events-none select-none"
                            >
                                Skip
                            </button>

                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default Home;