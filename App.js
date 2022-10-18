import React, { useState, useEffect } from "react";
import { Card, Button } from "antd";
import axios from "axios";
import "./App.css";
import { borderRadius, margin } from "@mui/system";

const { Meta } = Card;

// npx create-react-app appname
// npm i antd
// npm i axios

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const loadNews = async () => {
      const response = await axios.get(
        "http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=3da128da75bb4e819bb876090635ca8f"
      );
      setNews(response.data.articles);
    };
    loadNews();
  }, []);

  console.log("news", news);

  return (
    <div className="App">
          
      {
        news.map((e, i) => {
          return (
            <Card
              key={i}
              hoverable
           
              style={{ width: "40%",display:"inline-block", margin:"10px"}}
              cover={<img alt="image" src={e.urlToImage} style={{display:"flex"}} />}
            >
              <Meta title={e.title} description={e.content} />
              <a href={e.url} target="_blank" rel="noopener noreferrer">
                <Button type="btn btn-secondary" style={{ marginTop: "10px" ,borderRadius:"20px"}}>
                 Learn More 
                </Button>
              </a>
            </Card>
          );
        })}
    </div>
  );
}

export default App;