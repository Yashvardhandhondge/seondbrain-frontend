import React from "react";
import { Link } from "react-router-dom";

export default function Pricing() {
    const plans = [
        {
            name: "Basic",
            description: "Perfect for getting started",
            price: "$9.99/month",
            features: [
                "Store up to 1000 ideas",
                "Basic AI assistance",
                "Twitter and YouTube integration",
            ],
        },
        {
            name: "Pro",
            description: "For power users",
            price: "$19.99/month",
            features: [
                "Unlimited ideas storage",
                "Advanced AI features",
                "Collaboration tools",
                "Priority support",
            ],
        },
        {
            name: "Enterprise",
            description: "For large teams and organizations",
            price: "Custom",
            features: [
                "All pro features",
                "Custom integrations",
                "Dedicated account manager",
                "24/7 premium support",
            ],
        },
    ];

    return (
        <div className="h-screen bg-gray-800 text-center">
            <h1 className="flex justify-center text-4xl text-white font-bold mb-8">Pricing</h1>
            <div className="p-5 mt-20 grid grid-cols-1   gap-10 gap-y-10">
                {plans.map((plan, index) => (
                    <div key={index} className="flex flex-col items-center justify-between bg-gray-700 hover:bg-gray-900 p-6 rounded-lg min-h-[350px]">
                        <h2 className="text-4xl text-white font-bold mb-4">{plan.name}</h2>
                        
                        <div className="flex flex-col items-center mb-4">
                        <p className="text-white font-semibold">{plan.description}</p>
                            <p className="text-white font-semibold text-3xl mb-2">{plan.price}</p>
                        </div>

                        <ul className="text-white mb-6">
                            {plan.features.map((feature, idx) => (
                                <li key={idx} className="mb-2">- {feature}</li>
                            ))}
                        </ul>
                            <button className="bg-purple-300 p-3 rounded-lg text-black w-96 hover:bg-blue-900 transition duration-300">
                                Choose Plan
                            </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
