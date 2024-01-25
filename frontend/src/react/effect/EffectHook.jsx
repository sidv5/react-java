import { useState, useRef, useEffect } from 'react';

const VideoPlayer = ({ src, isPlaying }) => {
    const ref = useRef(null);

    useEffect(() => {
        if (isPlaying) {
            console.log("Playing Video");
            ref.current.play();
        } else {
            console.log("Pausing Video");
            ref.current.pause();
        }
    }, [isPlaying]);

    return <video ref={ref} src={src} loop playsInline />;
}

function VideoPlayerApp() {
    const [isPlaying, setIsPlaying] = useState(false);
    return (
        <>
            <h4>• Video Player with useEffect</h4>
            <VideoPlayer
                isPlaying={isPlaying}
                src="https://getsamplefiles.com/download/mp4/sample-5.mp4"
            /><br />
            <button onClick={() => setIsPlaying(!isPlaying)}>
                {isPlaying ? 'Pause' : 'Play'}
            </button>
        </>
    );
}

const DataFetching = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        //  API call
        fetch('https://dummyjson.com/products/search?q=Laptop')
            .then(response => response.json())
            .then(data => {
                setData(data);
                setLoading(false);
            });
    }, []); // The empty dependency array means this effect runs once after the initial render

    return (
        <div>
            <h4>• Fetching Data from API</h4>
            {loading ? (
                <p>Loading Data...</p>
            ) : (
                <div>
                    <h5>Data:</h5>
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}

function TimerCleanup() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);
        console.log("Initializing useEffect");
        // Cleanup function to clear interval when component unmounts
        return () => {
            console.log("Cleaning up useEffect");
            clearInterval(intervalId)
        };
    }, []); // Empty dependency array means this effect runs only once after mount

    return (
        <div>
            <h4>• useEffect cleanup </h4>
            <p>Timer: {seconds} seconds</p>
        </div>
    );
}

const DOMDependency = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        // This function will be called whenever `count` changes
        document.title = `You clicked ${count} times`;

        return () => {
            document.title = 'Vite + React';
          };
    }, [count]); // Dependency array with `count`

    return (
        <div>
            <h4>• useEffect Dependency Array</h4>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
}

export default function EffectHook() {
    return (
        <>
            <h2>Effect Hooks (useEffect)</h2>
            <p>useEffect “delays” a piece of code from running until that render is reflected on the screen.</p>
            <DataFetching />
            <br />
            <TimerCleanup />
            <br />
            <DOMDependency />
            <br />
            <VideoPlayerApp />
            <br />
        </>
    )
}