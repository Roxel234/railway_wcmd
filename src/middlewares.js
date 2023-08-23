import {join} from "path";
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export function fileSend(req,res,next){
	res.file = (path) => res.sendFile(join(__dirname,"front-end",path),(err)=>{
		if (err) {
			console.error(err);
			res.status(400).send("File not found");
		}
	});
	next();
}