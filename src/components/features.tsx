import { Icon, icons } from "lucide-react";


export default function Features() {

    const features = [
        {
            title: "Store ideas",
            description: "Capture and organize your thoughts instantly",
            icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNiNjk2YzUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1saWdodGJ1bGIiPjxwYXRoIGQ9Ik0xNSAxNGMuMi0xIC43LTEuNyAxLjUtMi41IDEtLjkgMS41LTIuMiAxLjUtMy41QTYgNiAwIDAgMCA2IDhjMCAxIC4yIDIuMiAxLjUgMy41LjcuNyAxLjMgMS41IDEuNSAyLjUiLz48cGF0aCBkPSJNOSAxOGg2Ii8+PHBhdGggZD0iTTEwIDIyaDQiLz48L3N2Zz4="
        },


        {
            title: "Share your brain",
            description: "Collaborate and share ideas with your team or the world",
            icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNiNjk2YzUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1zaGFyZS0yIj48Y2lyY2xlIGN4PSIxOCIgY3k9IjUiIHI9IjMiLz48Y2lyY2xlIGN4PSI2IiBjeT0iMTIiIHI9IjMiLz48Y2lyY2xlIGN4PSIxOCIgY3k9IjE5IiByPSIzIi8+PGxpbmUgeDE9IjguNTkiIHgyPSIxNS40MiIgeTE9IjEzLjUxIiB5Mj0iMTcuNDkiLz48bGluZSB4MT0iMTUuNDEiIHgyPSI4LjU5IiB5MT0iNi41MSIgeTI9IjEwLjQ5Ii8+PC9zdmc+"
        },


        {
            title: "YouTube integration",
            description: "Save and organize YouTube videos within your second brain",
            icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNiNjk2YzUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1iaXJkIj48cGF0aCBkPSJNMTYgN2guMDEiLz48cGF0aCBkPSJNMy40IDE4SDEyYTggOCAwIDAgMCA4LThWN2E0IDQgMCAwIDAtNy4yOC0yLjNMMiAyMCIvPjxwYXRoIGQ9Im0yMCA3IDIgLjUtMiAuNSIvPjxwYXRoIGQ9Ik0xMCAxOHYzIi8+PHBhdGggZD0iTTE0IDE3Ljc1VjIxIi8+PHBhdGggZD0iTTcgMThhNiA2IDAgMCAwIDMuODQtMTAuNjEiLz48L3N2Zz4="
        },


        {
            title: "Store ideas",
            description: "Capture and organize your thoughts instantly",
            icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNiNjk2YzUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS15b3V0dWJlIj48cGF0aCBkPSJNMi41IDE3YTI0LjEyIDI0LjEyIDAgMCAxIDAtMTAgMiAyIDAgMCAxIDEuNC0xLjQgNDkuNTYgNDkuNTYgMCAwIDEgMTYuMiAwQTIgMiAwIDAgMSAyMS41IDdhMjQuMTIgMjQuMTIgMCAwIDEgMCAxMCAyIDIgMCAwIDEtMS40IDEuNCA0OS41NSA0OS41NSAwIDAgMS0xNi4yIDBBMiAyIDAgMCAxIDIuNSAxNyIvPjxwYXRoIGQ9Im0xMCAxNSA1LTMtNS0zeiIvPjwvc3ZnPg=="
        },

        {
            title: "AI Assistant",
            description: "Capture and organize your thoughts instantly",
            icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNiNjk2YzUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1ib3QiPjxwYXRoIGQ9Ik0xMiA4VjRIOCIvPjxyZWN0IHdpZHRoPSIxNiIgaGVpZ2h0PSIxMiIgeD0iNCIgeT0iOCIgcng9IjIiLz48cGF0aCBkPSJNMiAxNGgyIi8+PHBhdGggZD0iTTIwIDE0aDIiLz48cGF0aCBkPSJNMTUgMTN2MiIvPjxwYXRoIGQ9Ik05IDEzdjIiLz48L3N2Zz4="
        },

        {
            title: "Knowledge Graph",
            description: "Capture and organize your thoughts instantly",
            icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNiNjk2YzUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1icmFpbiI+PHBhdGggZD0iTTEyIDVhMyAzIDAgMSAwLTUuOTk3LjEyNSA0IDQgMCAwIDAtMi41MjYgNS43NyA0IDQgMCAwIDAgLjU1NiA2LjU4OEE0IDQgMCAxIDAgMTIgMThaIi8+PHBhdGggZD0iTTEyIDVhMyAzIDAgMSAxIDUuOTk3LjEyNSA0IDQgMCAwIDEgMi41MjYgNS43NyA0IDQgMCAwIDEtLjU1NiA2LjU4OEE0IDQgMCAxIDEgMTIgMThaIi8+PHBhdGggZD0iTTE1IDEzYTQuNSA0LjUgMCAwIDEtMy00IDQuNSA0LjUgMCAwIDEtMyA0Ii8+PHBhdGggZD0iTTE3LjU5OSA2LjVhMyAzIDAgMCAwIC4zOTktMS4zNzUiLz48cGF0aCBkPSJNNi4wMDMgNS4xMjVBMyAzIDAgMCAwIDYuNDAxIDYuNSIvPjxwYXRoIGQ9Ik0zLjQ3NyAxMC44OTZhNCA0IDAgMCAxIC41ODUtLjM5NiIvPjxwYXRoIGQ9Ik0xOS45MzggMTAuNWE0IDQgMCAwIDEgLjU4NS4zOTYiLz48cGF0aCBkPSJNNiAxOGE0IDQgMCAwIDEtMS45NjctLjUxNiIvPjxwYXRoIGQ9Ik0xOS45NjcgMTcuNDg0QTQgNCAwIDAgMSAxOCAxOCIvPjwvc3ZnPg=="
        }
    ]
    return (
        <div className="h-screen bg-gray-800 text-center p-5">
            <h1 className="flex justify-center text-4xl text-white font-bold mb-10">Features</h1>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-8">
                {features.map((feature) => (
                    <div className="flex flex-col items-center justify-center bg-gray-700 hover:bg-gray-900 p-6 rounded-lg w-full">
                        <img src={feature.icon} className="w-16 h-16 mb-4" />
                        <h2 className="text-lg sm:text-xl text-white font-bold mb-2">{feature.title}</h2>
                        <p className="text-sm sm:text-base text-white">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
    
}    