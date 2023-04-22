const GameKeyboard = () => {
    return (
        <div className="flex flex-col items-center gap-2">
                <div className="keyboard_row">
                    <button className="btn">Q</button>
                    <button className="btn">W</button>
                    <button className="btn">E</button>
                    <button className="btn">R</button>
                    <button className="btn">T</button>
                    <button className="btn">Y</button>
                    <button className="btn">U</button>
                    <button className="btn">I</button>
                    <button className="btn">O</button>
                    <button className="btn">P</button>

                </div>
                <div className="keyboard_row">
                    <button className="btn">A</button>
                    <button className="btn">S</button>
                    <button className="btn">D</button>
                    <button className="btn">F</button>
                    <button className="btn">G</button>
                    <button className="btn">H</button>
                    <button className="btn">J</button>
                    <button className="btn">K</button>
                    <button className="btn">L</button>
                </div>
                <div className="keyboard_row">
                    <button className="btn">ENTER</button>
                    <button className="btn">Z</button>
                    <button className="btn">X</button>
                    <button className="btn">C</button>
                    <button className="btn">V</button>
                    <button className="btn">B</button>
                    <button className="btn">N</button>
                    <button className="btn">M</button>
                    <button className="btn">DEL</button>

                </div>
            </div>

    );
};

export default GameKeyboard