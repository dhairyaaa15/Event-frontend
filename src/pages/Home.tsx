import React, { useState } from "react";
import { SignupFormDemo } from "../components/SignupFormDemo";
import { BackgroundBeams } from "../components/BackgroundBeams";

const Home = () => {
  const [showSignup, setShowSignup] = useState(false);

  const handleShowSignup = () => setShowSignup(true);
  const handleCloseSignup = () => setShowSignup(false);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* BackgroundBeams Component */}
      <div className="relative w-full h-full">
        <BackgroundBeams />

        {/* Signup Button on Top of BackgroundBeams */}
        {!showSignup && (
          <button
            onClick={handleShowSignup}
            className="absolute top-4 right-4 z-20 bg-blue-500 text-white px-4 py-2 rounded-md shadow-lg"
          >
            Sign Up
          </button>
        )}

        {/* SignupFormDemo Component */}
        {showSignup && (
          <div className="absolute inset-0 z-30 flex items-center justify-center bg-black bg-opacity-50">
            <SignupFormDemo onClose={handleCloseSignup} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
