import React, {useEffect, useState} from 'react';
import axios from 'axios';

function App(this: any) {
    const [motion, SetMotion] = useState();
    const [sound, SetSound] = useState();
    const [alarm, SetAlarm] = useState();
    const [toggle, SetToggle] = useState();

    useEffect(() => {
        setInterval(() => {
            axios.get("http://localhost:5000/?motion",).then(res => SetMotion(res.data.motion));
            axios.get("http://localhost:5000/?sound",).then(res => SetSound(res.data.sound));
            axios.get("http://localhost:5000/?alarm",).then(res => SetAlarm(res.data.alarm));
            axios.get("http://localhost:5000/?toggle",).then(res => SetToggle(res.data.toggle));
        }, 1000)
    }, []);

    const handleOnclick = () => {
        axios.post("https://maker.ifttt.com/trigger/ESP/with/key/d36vpmTHuWQjEJOh50vmKA", {
            value1: "13:13:13"
        }).then(res => console.log(res)).catch(res => console.log(res));
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
                </div>

                <div className="content-center justify-center">
                    <button onClick={() => handleOnclick()}
                            className={`${alarm ? 'bg-red-500' : 'bg-white'} rounded-full px-4 py-2 `}> {alarm ? 'Slå alarm fra' : 'Slå alarm til'} </button>
                </div>
            </main>

        </div>
    );
}

export default App;
