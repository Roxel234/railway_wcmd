import express from "express";
export const routes = express.Router();
import {commands} from "./commands.js";

routes.get("/",(req,res)=>{
	res.file("index.html");
});

routes.get("/files/:file",(req,res)=>{
	res.file(req.params.file);
});

routes.post("/exec",(req,res)=>{
	const {command} = req.body;
	if (!command) {
		res.status(400).json({result:"<br>"});
		return;
	}

	const commandSpaces = command.split(" ");
	const commandName = commandSpaces.shift();
	const commandArgs = commandSpaces;

	var result = commands.exec(commandName,commandArgs);

	result += "<br>";
	res.json({
		result
	});
});