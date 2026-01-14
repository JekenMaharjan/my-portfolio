import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Maintenance = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-4">
            <div className="bg-gray-900/80 backdrop-blur-md rounded-3xl p-10 md:p-16 flex flex-col items-center text-center shadow-xl animate-fade-in">

                {/* Icon */}
                <div className="bg-yellow-500/20 p-6 rounded-full animate-bounce">
                    <AlertTriangle className="h-14 w-14 text-yellow-400" />
                </div>

                {/* Heading */}
                <h1 className="text-4xl md:text-5xl font-bold mt-6 text-white">
                    Site Under Maintenance
                </h1>

                {/* Description */}
                <p className="text-gray-300 max-w-xl text-lg md:text-xl mt-4 leading-relaxed">
                    We're currently working on something awesome! ✨ <br />
                    The page or GitHub link you tried to access is temporarily unavailable while we make improvements.
                </p>

                <p className="text-sm md:text-base text-gray-400 italic mt-2">
                    Thank you for your patience. We'll be back soon with something even better!
                </p>

                {/* Go Back Button */}
                <a href="/">
                    <Button className="mt-6 bg-gradient-to-r from-[#3ABEFF] to-[#CB52F8] text-black px-8 py-3 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                        Go Back to Homepage
                    </Button>
                </a>
            </div>
        </div>
    );
};

export default Maintenance;
