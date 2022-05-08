import fs from 'fs';

const dataTagsFile = '../Tags/dataTagsFile.json';
class FileService{
      storeFile : string;
      dataToSave : any;

      constructor(storeFile: string, dataToSave:any){
            this.storeFile = storeFile;
            this.dataToSave = dataToSave;
      }
      
      async readStorage(): Promise<void> {
            try {
                  const data = await fs.promises.readFile(this.storeFile, 'utf-8');
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


    

