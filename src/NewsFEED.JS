import { useEffect, useState } from "react";
import axios from 'axios';


const NewsFeed = () => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        axios({
        method: "GET",
        url:"https://newsapi.org/v2/top-headlines",
        params: {
          country: "in",
          apiKey: "ff3806b56301405aad4d08d7b4e786ac"
        }
    }).then((response) => {
        setArticles(response.data.articles);
    }).catch((error) => {
        console.log(error);
    })
    }, []);
return (
    <>
      <h1>news coming here soon!</h1>
      {
        articles.map((article, index) =>{
            return(
                <h1 key={index}>{article.title}</h1>
            )

        })
      }
    </>
 )
}