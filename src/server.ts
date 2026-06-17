import app from "./app";
import { postInitDB } from "./db/postDB.init";
import { userInitDB } from "./db/userDB.init";

const port = 5000;

const main = async()=>{
   await userInitDB();
    await postInitDB();
    
    app.listen(port,()=>{
        console.log(`This Server running on : ${port}`)
    })

}

main();