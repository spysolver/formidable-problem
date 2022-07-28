import { useState } from "react";
import reactLogo from "./assets/react.svg";
import axios from "axios";
import "./App.css";

function App() {
    const [file, setFile] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        let formData = new FormData();

        formData.append("file", file);
        formData.append("filename", file.name);

        await axios.post("http://localhost:3500/upload", formData);
    };

    return (
        <div className="App">
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src="/vite.svg" className="logo" alt="Vite logo" />
                </a>
                <a href="https://reactjs.org" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <input type="file" onChange={(e) => setFile(e.target.files[0])} />
                    <br />
                    <br />
                    <button type="submit">Submit File</button>
                </form>
            </div>
            <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
        </div>
    );
}

export default App;
