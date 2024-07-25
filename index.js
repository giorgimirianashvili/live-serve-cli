import express from 'express';
const dictionaryOfCommands = {
  help: "-h",
  run: "-r",
  port: "-p"
};
const command0 = process.argv[2];
const port0 = process.argv[4];

switch(command0){
  case dictionaryOfCommands.help:
    console.log(`
      help: -h
      run: -r (but you must specify a port, to do that you can write -p after -r argument e.g.: -r -p 3000)
    `);
  case dictionaryOfCommands.run:
    if (port0){
      const app = express();
      app.use(express.json());
      app.get('/', (req, res)=>{
        res.json({ message: "hello world"})
      });
      app.listen(port0, ()=>{
        console.log("App is listening on port=>",port0);
      });
    }else{
      console.log("You must specify a port!");
    }
  case dictionaryOfCommands.port:
    // no preconfigs allowed!
  default:
    console.log("You need to pass an argument! (use -h for help)");
}
