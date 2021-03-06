const File=require('./models/file');
const fs=require('fs');
const connectDB=require('./config/db');

connectDB();

async function deleteData(){
    //fetch files from the database older than 24hours
    const pastDate=new Date(Date.now() - (24*60*60*1000));
    const files=File.find({createdAt: {$lt : pastDate}});
    if(files.length){
       for(const file of files){
           try{
               fs.unlinkSync(file.path);
               await file.remove();
               console.log(`successfully deleted ${file.filename}`);
            }catch(err){
                console.log(`Erron while deleting file ${err}`);
            }
       }
       console.log('JOB DONE!');
    }
}
deleteData().then(process.exit);