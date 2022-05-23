import fs from 'fs';
import { cwd } from 'process';

class FileService{
      storeFile : string;
      dataToSave : any;

      constructor(storeFile: string, dataToSave:any){
            this.storeFile = storeFile;
            this.dataToSave = dataToSave;
      }
      
      async readStorage() {
             return fs.promises.readFile(this.storeFile,{encoding:'utf8'})
             .catch((error) => console.error("err",error));
      }
      async updateStorage() {
            console.log("up")
            return fs.promises.writeFile(this.dataToSave, this.storeFile)
            .catch((error) => console.error("err",error));
     }
}



export {FileService}


    

