import React from "react";

export default function About() {
  const about = [
    {
      id: 1,
      title: "Our Mission",
      description:
        "When a visitor wants to learn more about you or your business, the About Us page is what they’ll look for. Read on to learn how to craft the perfect About Us page for your business, and get inspired by About Us page examples from successful brands.",
    },
    {
      id: 2,
      title: "Our Story",
      description:
        "Tell shoppers the origin story of your business and why you started it. For the most impact, make it memorable and personal, so customers relate and connect with your brand.",
    },
  ];

  const team = [
    {
      id: 1,
      name: "John Doe",
      role: "CEO",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.NqY3rNMnx2NXYo3KJfg43gHaHa&pid=Api&P=0&h=220",
    },
    {
      id: 2,
      name: "John Doe",
      role: "CTO",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.qQDgUP_imfPJZfqlrT_taAHaHa&pid=Api&P=0&h=220",
    },
    {
      id: 3,
      name: "John Doe",
      role: "Head of Product",
      image:
        "https://tse4.mm.bing.net/th?id=OIP.IGNf7GuQaCqz_RPq5wCkPgHaLH&pid=Api&P=0&h=220",
    },
    {
      id: 4,
      name: "John Doe",
      role: "Lead Designer",
      image:
        "https://tse4.mm.bing.net/th?id=OIP.XSZAFm-5JI7nriDLwZqRQQHaE7&pid=Api&P=0&h=220",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-800 text-center p-5">
        <h1 className="text-4xl text-white font-bold mb-8">About Second Brain</h1>
        
        {/* About Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
            {about.map((item) => (
                <div key={item.id} className="bg-gray-700 p-6 rounded-lg">
                    <h2 className="text-2xl text-white font-bold mb-2">{item.title}</h2>
                    <p className="text-white">{item.description}</p>
                </div>
            ))}
        </div>

        {/* Team Section */}
        <div>
            <h1 className="text-2xl text-white mb-6">Our Team</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {team.map((member) => (
                    <div key={member.id} className="flex flex-col items-center bg-gray-700 p-6 rounded-lg">
                        <img src={member.image} alt={member.name} className="w-20 h-20 rounded-full mb-4" />
                        <h2 className="text-xl text-white font-bold mb-2">{member.name}</h2>
                        <p className="text-white">{member.role}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
);
}
