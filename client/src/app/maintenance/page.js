import { AlertTriangle, Link } from "lucide-react";
import { Button } from "@/components/ui/button"; // Optional if you already use shadcn/ui


const Maintenance = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col items-center justify-center px-4">
      <div className="flex flex-col items-center text-center space-y-6">
        <div className="bg-yellow-500/10 p-6 rounded-full">
          <AlertTriangle className="h-12 w-12 text-yellow-400" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold">Site Under Maintenance</h1>
        <p className="text-gray-300 max-w-xl text-lg">
          We're currently working on something awesome! ✨<br />
          The site (or GitHub link) you tried to access is temporarily unavailable as we make improvements.
        </p>
        <p className="text-sm text-gray-400 italic">
          Thank you for your patience and support. We'll be back soon with something even better!
        </p>

        {/* Optional button to go back to homepage or elsewhere */}
        <a href="/">
            <Button className="mt-4 bg-gradient-to-r from-[#3ABEFF] to-[#CB52F8] text-black hover:scale-105 cursor-pointer">
                Go Back to Homepage
            </Button>
        </a>
      </div>
    </div>
  );
};

export default Maintenance;
