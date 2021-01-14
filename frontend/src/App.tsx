import React, {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
    const [motion, SetMotion] = useState();
    const [sound, SetSound] = useState();
    const [alarm, SetAlarm] = useState();
    const [toggle, SetToggle] = useState();

    useEffect(() => {
        axios.get("http://localhost:5000/?motion",).then(res => SetMotion(res.data.motion));
        axios.get("http://localhost:5000/?sound",).then(res => SetSound(res.data.sound));
        axios.get("http://localhost:5000/?alarm",).then(res => SetAlarm(res.data.alarm));
        axios.get("http://localhost:5000/?toggle",).then(res => SetToggle(res.data.toggle));
    }, []);

    console.log(motion);
    console.log(sound);
    console.log(alarm);
    console.log(toggle);

    return (
        <div className="py-5">
            <main className="h-full overflow-y-auto">
                <div className="container mx-auto grid">
                    <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
                        <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                            <div
                                className="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                                </svg>
                            </div>
                            <div>
                                <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                                    Motion
                                </p>
                                <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                                    {motion}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                            <div
                                className="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"/>
                                </svg>
                            </div>
                            <div>
                                <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                                    Sound
                                </p>
                                <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                                    {sound}
                                </p>
                            </div>
                        </div>
                            <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                                <div
                                    className=" inline p-3 mr-4 text-teal-500 bg-teal-100 rounded-full dark:text-teal-100 dark:bg-teal-500">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd"
                                              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                              clipRule="evenodd"/>
                                    </svg>
                                </div>
                                <div>
                                    <button className="rounded-md border border-blue-400 px-2 py-2 bg-blue-400"> {toggle}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
            </main>
        </div>
);
}

export default App;
