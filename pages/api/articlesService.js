import axios from "axios";


export async function getArticles (req, res){
   let articles = await axios.get("https://api-test-ln.herokuapp.com/articles")


    return articles?.data.articles

}
