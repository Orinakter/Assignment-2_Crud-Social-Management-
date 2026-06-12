import app from "./app";

const port = 5000;

const main = ()=>{
    app.listen(port,()=>{
        console.log(`This Server running on : ${port}`)
    })

}

main();