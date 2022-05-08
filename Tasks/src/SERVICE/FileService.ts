import fs from 'fs';

class FileService{
      storeFile : string;
      dataToSave : any;

      constructor(storeFile: string, dataToSave:any){
            this.storeFile = storeFile;
            this.dataToSave = dataToSave;
      }
      
       async readStorage() {
            try {
                  await fs.readFile(this.storeFile, 'utf8', (error, data) => {
                        if(error){
                           console.log(error);
                           return;
                        }
                        console.log(JSON.parse(data))
                        return JSON.parse(data);
                   
                   })
                  
            } catch (err) {
                  console.log(err)
            }
      }
      async updateStorage(): Promise<void> {
            try {
                  await fs.promises.writeFile(this.storeFile, this.dataToSave);
            } catch (err) {
                  console.log(err)
            }
      }
}
export {FileService}


    

