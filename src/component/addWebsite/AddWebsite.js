import {useState } from "react";
import './AddWebsite.css'

const AddWebsite = () => {
    const [url, setUrl] = useState('');
    
    const handleSubmit = async (e) => {
        if(url === ''){
            return;
        }
        const webURL = {name: url, status: "success"}
        e.preventDefault();
        await fetch("http://localhost:8080/websites",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(webURL)

        }).then(()=>{
            console.log("New Website added")
        })

        setUrl('');
    };

    return (
        <>
            <div class="center-container">
                <form onSubmit={handleSubmit} className="center-form">
                    <input type="text" placeholder="Enter Website here to be monitored" value={url} onChange={(e) => setUrl(e.target.value)} />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    );
}

export default AddWebsite;