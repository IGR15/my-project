import { DataSource } from "typeorm";
import {Customer} from "./entity/Customer.js"
const AppDataSource = new DataSource({
    type :"mysql",
    host :"localhost",
    port :3306,
    username :"root",
    password :"",
    database :"customer-db",
    synchronize :true,
    logging :false,
    entities:[Customer],
   

})
export default AppDataSource;