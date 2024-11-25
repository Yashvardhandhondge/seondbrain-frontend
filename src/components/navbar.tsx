import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

   const token = localStorage.getItem('token');

    return (
        <nav className="relative">
            <div className="flex justify-between bg-gray-800 text-white p-4">
                {/* Logo */}
                <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNiNjk2YzUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1icmFpbiI+PHBhdGggZD0iTTEyIDVhMyAzIDAgMSAwLTUuOTk3LjEyNSA0IDQgMCAwIDAtMi41MjYgNS43NyA0IDQgMCAwIDAgLjU1NiA2LjU4OEE0IDQgMCAxIDAgMTIgMThaIi8+PHBhdGggZD0iTTEyIDVhMyAzIDAgMSAxIDUuOTk3LjEyNSA0IDQgMCAwIDEgMi41MjYgNS43NyA0IDQgMCAwIDEtLjU1NiA2LjU4OEE0IDQgMCAxIDEgMTIgMThaIi8+PHBhdGggZD0iTTE1IDEzYTQuNSA0LjUgMCAwIDEtMy00IDQuNSA0LjUgMCAwIDEtMyA0Ii8+PHBhdGggZD0iTTE3LjU5OSA2LjVhMyAzIDAgMCAwIC4zOTktMS4zNzUiLz48cGF0aCBkPSJNNi4wMDMgNS4xMjVBMyAzIDAgMCAwIDYuNDAxIDYuNSIvPjxwYXRoIGQ9Ik0zLjQ3NyAxMC44OTZhNCA0IDAgMCAxIC41ODUtLjM5NiIvPjxwYXRoIGQ9Ik0xOS45MzggMTAuNWE0IDQgMCAwIDEgLjU4NS4zOTYiLz48cGF0aCBkPSJNNiAxOGE0IDQgMCAwIDEtMS45NjctLjUxNiIvPjxwYXRoIGQ9Ik0xOS45NjcgMTcuNDg0QTQgNCAwIDAgMSAxOCAxOCIvPjwvc3ZnPg=="
                    alt="Logo"
                    className="w-7 h-7 rounded-full"
                />
                <h1 className="absolute top-2 left-10  font-bold text-sm mt-3 ml-2 lg:text-4xl lg:mt-0 lg:ml-0 ">Second Brain</h1>

                {token ?? token !== null ? (
                <div className="flex space-x-4">
                <Link
                    to="/signup"
                    className="bg-purple-300 hover:bg-blue-900 text-black py-2 px-4 rounded-lg"
                >
                    Sign Up
                </Link>
                <Link
                    to="/signin"
                    className="bg-purple-300 hover:bg-blue-900 text-black py-2 px-4 rounded-lg"
                >
                    Sign In
                </Link>
            </div>
               ) : <p>dbnenn</p>} 
               
                
            </div>
        </nav>
    );
}

export default Navbar;
