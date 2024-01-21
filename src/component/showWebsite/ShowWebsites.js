import { useEffect, useState } from "react";
import './ShowWebsite.css'

const ShowWebsites = () => {

    const [urls, setUrls] = useState([]);

    // const getStatus = () => {
    //     fetch("http://localhost:8080/websites/getall")
    //     .then(res=>res.json())
    //     .then((result)=>{
    //       setUrls(result);
    //       console.log(result)
    //     }
    //   )
    // }

    useEffect(() => {
        function getStatus() {
            fetch("http://localhost:8080/websites/getall")
            .then(res=>res.json())
            .then((result)=>{
              setUrls(result);
            }
          )
        }
        getStatus()
        const interval = setInterval(() => getStatus(), 120000)
        return () => {
          clearInterval(interval);
        }
    }, []);


    const websiteList = urls.map(url => <tr>
        <td className="blue-underline">{url.name}</td>
        <td ><div className={url.status === "success" ? "success" : "failure"}>{url.status}</div></td>
      </tr>);
    return (
        <>
            <table className="styled-table">
                <tr>
                    <th>Websites</th>
                    <th>Status</th>
                </tr>
                <tbody>
                    {websiteList}
                </tbody>
            </table>
        </>
    );
}

export default ShowWebsites;