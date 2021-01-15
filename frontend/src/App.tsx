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


    // Want to use async/await? Add the `async` keyword to your outer function/method.
    async function getData() {
        try {
            const response = await axios.get('/user?ID=12345');
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }

    console.log(motion);
    console.log(sound);
    console.log(alarm);
    console.log(toggle);

    return (
        <div className="py-5 bg-gray-200 text-gray-800 min-h-full">
            <main className="h-full overflow-y-auto">
                <div className="flex container content-center justify-center mx-auto">
                    <div className="card">
                        <p className="font-bold font-xl pb-2">Motion</p>
                        <p>{motion ? 'Motion detected' : 'No motion detected'}</p>
                    </div>
                    <div className="card">
                        <p className="font-bold font-xl pb-2">Sound</p>
                        <p>{sound ? sound : 'No sound detected'}</p>
                    </div>
                    <div className="card">
                        <p className="font-bold font-xl pb-2">Alarm</p>
                        <p>{alarm ? 'Alarm is activated': 'Alarm is off'}</p>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;
