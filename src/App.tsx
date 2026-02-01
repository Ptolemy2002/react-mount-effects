import { useState } from "react";
import { useMountEffect, useUnmountEffect, useDelayedEffect } from "@ptolemy2002/react-mount-effects";

function App() {
    const [showA, setShowA] = useState(true);
    useDelayedEffect(() => {
        console.log("App Toggled (at least once)")
        return () => console.log("Cleanup after App Toggled");
    }, [showA]);
    useDelayedEffect(() => console.log("App Toggled (more than once)"), [showA], 1);

    return (
        <div>
            {showA ? <A /> : <B />}
            <button onClick={() => setShowA((v) => !v)}>Toggle</button>
        </div>
    );
}

export default App;

function A() {
    useMountEffect(() => console.log("A mounted"));
    useUnmountEffect(() => console.log("A unmounted"));

    return <div>A</div>;
}

function B() {
    useMountEffect(() => console.log("B mounted"));
    useUnmountEffect(() => console.log("B unmounted"));

    return <div>B</div>;
}
