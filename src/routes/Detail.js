import { useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";


function Detail(){

    const {id} = useParams();


    async function getDetailContents() {

        const response =  await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);

        const json = await response.json();

        console.log(json);
    }


    useEffect(() =>{

        getDetailContents();



    },[])







    console.log(id);

    return <h1>Detail</h1>;
}
 
export default Detail;