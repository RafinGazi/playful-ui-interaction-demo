import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import ourPhoto from "../assets/images/our-photo.jpeg";

function Home() {
    const navigate = useNavigate();

    const noButtonRef = useRef(null);
    const containerRef = useRef(null);
    const yesButtonRef = useRef(null);

    // Initial calm position for "No"
    const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
    const [activated, setActivated] = useState(false);

    // Moves the "No" button to a random nearby position
    const moveNoButton = () => {
        if (!activated) {
            setActivated(true);
            return;
        }

        if (!containerRef.current) return;

        const maxX = window.innerWidth / 2 - 80;
        const maxY = window.innerHeight / 2 - 200;

        const randomX = (Math.random() * 2 - 1) * maxX;
        const randomY = (Math.random() * 2 - 1) * maxY;

        setNoPosition({ x: randomX, y: randomY });
    };

    // Desktop: run away when cursor gets close
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
        <div className="relative h-screen overflow-hidden bg-gradient-to-br from-pink-200 via-pink-300 to-rose-400">

            {/* Floral background */}
            <div
                className="absolute inset-0 bg-no-repeat bg-center bg-cover opacity-25 md:opacity-40"
                style={{ backgroundImage: "url('/assets/images/floral-bg.png')" }}
            />

            <div
                className="relative z-10 flex items-center justify-center h-full px-4"
                onMouseMove={handleMouseMove}
            >
                <div className="flex flex-col items-center text-center max-w-md w-full">

                    <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl mb-6">
                        <span className="bg-gradient-to-r from-red-500 via-rose-500 to-pink-500 bg-clip-text text-transparent">
                            Will you be my Valentine?
                        </span>
                        <span className="ml-2 text-4xl align-middle">💖🥰</span>
                    </h1>

                    <div className="mb-8">
                        <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-xl ring-4 ring-white/40 border-4 border-rose-300 bg-white/40 animate-float">
                            <img
                                src={ourPhoto}
                                alt="Us"
                                className="w-full h-full object-cover object-top"
                            />
                        </div>
                    </div>

                    <div
                        ref={containerRef}
                        onTouchStart={moveNoButton}
                        className="relative w-full h-32 flex items-center justify-between px-10"
                    >
                        <button
                            ref={yesButtonRef}
                            className="px-8 py-3 rounded-full bg-rose-500 hover:bg-rose-600 text-white font-semibold text-lg shadow-lg transition transform hover:scale-105"
                            onClick={() => navigate("/yes")}
                        >
                            Yes 💕
                        </button>

                        <button
                            ref={noButtonRef}
                            style={{ transform: `translate(${noPosition.x}px, ${noPosition.y}px)` }}
                            className="absolute right-10 px-8 py-3 rounded-full bg-gray-200 text-gray-600 font-semibold text-lg shadow-md transition-transform duration-300 ease-out pointer-events-none select-none"
                        >
                            No 🙃
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Home;
