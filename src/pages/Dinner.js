import { useNavigate } from "react-router-dom";
import { useState } from "react";

import outfit1 from "../assets/images/dinner-outfit-1.png";
import outfit2 from "../assets/images/dinner-outfit-2.png";
import outfit3 from "../assets/images/dinner-outfit-3.png";

const PHONE_NUMBER = "61450377415"; // your number, no +, no spaces

const outfits = [
    {
        id: 1,
        title: "Classic & Calm",
        subtitle: "Dark blue blazer, white tee",
        image: outfit1,
        description:
            "A dark blue blazer layered over a clean white tee, paired with black trousers. Calm, confident, and quietly elegant — simple lines with just enough polish. It feels intentional without trying too hard.",
    },
    {
        id: 2,
        title: "Soft & Relaxed",
        subtitle: "Bluish top with cream pants",
        image: outfit2,
        description:
            "A soft bluish top paired with light cream trousers. Clean and relaxed, with gentle colours that feel easy and warm. Effortless, comfortable, and quietly charming.",
    },
    {
        id: 3,
        title: "Easy & Playful",
        subtitle: "Cream tee with blue jeans",
        image: outfit3,
        description:
            "A simple cream tee with classic blue jeans. Casual and familiar, with a comfortable, everyday feel. Easy, honest, and naturally you.",
    },
];

function Dinner() {
    const navigate = useNavigate();
    const [sentOption, setSentOption] = useState(null);

    const sendReaction = (outfit, emoji) => {
        const message = `💖 Dinner outfit choice

Outfit ${outfit.id} — ${outfit.title}
${outfit.subtitle}

${outfit.description} ${emoji}`;

        const url = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");

        setSentOption(outfit.id);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-200 via-rose-200 to-pink-300 px-6 pb-20">

            {/* Back */}
            <button
                onClick={() => navigate("/yes")}
                className="fixed top-4 left-4 z-10 text-gray-800 font-medium"
            >
                ← Back
            </button>

            {/* Intro / Tease */}
            <div className="pt-24 mb-16 max-w-xl mx-auto animate-fade-up">
                <div className="
                    text-center
                    bg-white/30 backdrop-blur-md
                    rounded-3xl
                    px-6 py-10
                    shadow-lg
                    ring-1 ring-white/40">

                    <div className="text-6xl mb-4 animate-float">🐸</div>

                    <h1 className="
                        text-4xl md:text-5xl
                        font-extrabold
                        text-rose-700
                        mb-4
                        text-soft-shadow">
                        Hold up, swan princess…
                    </h1>

                    <p className="
                        text-rose-900/90
                        text-lg
                        leading-relaxed">
                        Not everything can be revealed just yet 😉
                        For now, let’s do something just as important.
                    </p>

                    <p className="
                        mt-4
                        text-rose-800
                        font-semibold
                        text-lg">
                        Help me choose what I should wear for dinner 👀
                    </p>
                </div>
            </div>

            {/* Outfit cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {outfits.map((outfit, index) => (
                    <div
                        key={outfit.id}
                        className="
                            bg-white rounded-3xl shadow-lg overflow-hidden
                            transform animate-fade-up
                            transition-all duration-300
                            hover:-translate-y-1
                            hover:shadow-2xl hover:shadow-rose-300/30
                            hover:ring-2 hover:ring-rose-300/40"
                        style={{ animationDelay: `${index * 120}ms` }}
                    >
                        {/* Image */}
                        <img
                            src={outfit.image}
                            alt={outfit.title}
                            className="w-full aspect-[3/4] object-cover"
                        />

                        {/* Content */}
                        <div className="p-5">
                            <h2 className="text-lg font-semibold text-indigo-600 mb-1">
                                Outfit {outfit.id} — {outfit.title}
                            </h2>

                            <p className="text-sm font-medium text-gray-700 mb-3">
                                {outfit.subtitle}
                            </p>

                            <p className="text-gray-600 text-[13px] leading-relaxed mb-5">
                                {outfit.description}
                            </p>

                            {/* Reactions */}
                            <div className="flex justify-center gap-6">
                                {["💖", "😍", "👀"].map((emoji) => (
                                    <button
                                        key={emoji}
                                        onClick={() => sendReaction(outfit, emoji)}
                                        className="text-2xl transition transform hover:scale-125 active:scale-110"
                                    >
                                        {emoji}
                                    </button>
                                ))}
                            </div>

                            {sentOption === outfit.id && (
                                <p className="mt-3 text-center text-sm text-gray-600">
                                    Message sent 💖 (you can change your mind)
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
