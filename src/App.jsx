import "./styles.css";
import { useEffect } from "react";

{
    /*



.

User Story #4: Within each .drum-pad, there should be an HTML5 a
udio element which has a src attribute pointing to an audio clip, 
a class name of clip, and an id corresponding to the inner text of its parent 
.drum-pad (e.g. id="Q", id="W", id="E" etc.).

User Story #5: When I click on a .drum-pad element,
 the audio clip contained in its child audio element should be triggered.

User Story #6: When I press the trigger key associated 
with each .drum-pad, the audio clip contained in its child audio element 
hould be triggered (e.g. pressing the Q key should trigger the drum pad 
which contains the string Q, pressing the W key should trigger the drum
 pad which contains the string W, etc.).

User Story #7: When a .drum-pad is triggered,
 a string describing the associated audio clip is displayed as 
 the inner text of the #display element (each string must be unique).

Here are some audio samples you can use for your drum machine:

    Heater 1
    Heater 2
    Heater 3
    Heater 4
    Clap
    Open-HH
    Kick-n'-Hat
    Kick
    Closed-HH

You can build your project by using this CodePen template and clicking 
Save to create your own pen. Or you can use this CDN link to run the tests 
in any environment you like:
 https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js

Once you're done, submit the URL to your working project 
with all its tests passing. */
}
export default function App() {
    useEffect(() => {
        const displayText = document.getElementById("display");
        addEventListener("keydown", (e) => {
            document.getElementById(e.key.toUpperCase()).play();
            displayText.innerHTML = e.key.toUpperCase();
        });
    }, []);
    return (
        <>
            <div id="drum-machine">
                <div id="display"></div>
                <div id="drum-pad-container">
                    <div className="row">
                        <div
                            className="drum-pad"
                            id="drum-pad-Q"
                            onClick={() => {
                                document.getElementById("Q").play();
                                document.getElementById("display").innerHTML =
                                    "Q";
                            }}>
                            <h1>Q</h1>
                            <audio
                                id="Q"
                                className="clip"
                                autoPlay={false}
                                src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3"></audio>
                        </div>
                        <div
                            className="drum-pad"
                            id="drum-pad-W"
                            onClick={() => {
                                document.getElementById("W").play();
                                document.getElementById("display").innerHTML =
                                    "W";
                            }}>
                            <h1>W</h1>{" "}
                            <audio
                                id="W"
                                className="clip"
                                autoPlay={false}
                                src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3"></audio>
                        </div>
                        <div
                            className="drum-pad"
                            id="drum-pad-E"
                            onClick={() => {
                                document.getElementById("E").play();
                                document.getElementById("display").innerHTML =
                                    "E";
                            }}>
                            <h1>E</h1>{" "}
                            <audio
                                id="E"
                                className="clip"
                                autoPlay={false}
                                src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3"></audio>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div
                            className="drum-pad"
                            id="drum-pad-A"
                            onClick={() => {
                                document.getElementById("A").play();
                                document.getElementById("display").innerHTML =
                                    "A";
                            }}>
                            <h1>A</h1>{" "}
                            <audio
                                id="A"
                                className="clip"
                                autoPlay={false}
                                src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3"></audio>
                        </div>
                        <div
                            className="drum-pad"
                            id="drum-pad-S"
                            onClick={() => {
                                document.getElementById("S").play();
                                document.getElementById("display").innerHTML =
                                    "S";
                            }}>
                            <h1>S</h1>{" "}
                            <audio
                                id="S"
                                autoPlay={false}
                                className="clip"
                                src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3"></audio>
                        </div>
                        <div
                            className="drum-pad"
                            id="drum-pad-D"
                            onClick={() => {
                                document.getElementById("D").play();
                                document.getElementById("display").innerHTML =
                                    "D";
                            }}>
                            <h1>D</h1>{" "}
                            <audio
                                id="D"
                                autoPlay={false}
                                className="clip"
                                src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3"></audio>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div
                            className="drum-pad"
                            id="drum-pad-Z"
                            onClick={() => {
                                document.getElementById("Z").play();
                                document.getElementById("display").innerHTML =
                                    "Z";
                            }}>
                            <h1>Z</h1>{" "}
                            <audio
                                id="Z"
                                autoPlay={false}
                                className="clip"
                                src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3"></audio>
                        </div>
                        <div
                            className="drum-pad"
                            id="drum-pad-X"
                            onClick={() => {
                                document.getElementById("X").play();
                                document.getElementById("display").innerHTML =
                                    "X";
                            }}>
                            <h1>X</h1>{" "}
                            <audio
                                id="X"
                                autoPlay={false}
                                className="clip"
                                src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3"></audio>
                        </div>
                        <div
                            className="drum-pad"
                            id="drum-pad-C"
                            onClick={() => {
                                document.getElementById("C").play();
                                document.getElementById("display").innerHTML =
                                    "C";
                            }}>
                            <h1>C</h1>{" "}
                            <audio
                                id="C"
                                autoPlay={false}
                                className="clip"
                                src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3"></audio>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
