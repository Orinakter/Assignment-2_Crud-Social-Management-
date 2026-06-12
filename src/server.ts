import app from "./app";
import { userInitDB } from "./db/userDB.init";

const port = 5000;

const main = ()=>{
    userInitDB()
    app.listen(port,()=>{
        console.log(`This Server running on : ${port}`)
    })

}

main();