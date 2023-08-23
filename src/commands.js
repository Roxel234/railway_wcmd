export const commands = {funcs:{}};

commands.exec = (name,args)=>{
	const func = commands.funcs[name];
	if (func) {
		return func(args);
	} else {
		return '"'+name+'" no se reconoce como un comando interno o externo, programa o archivo por lotes ejecutable.';
	}
}

function newCommand(name,func) {
	commands.funcs[name] = func;
}

newCommand("echo",(args)=>{
	var result = "";

	args.forEach((x)=>{
		result += x + " ";
	});

	return result;
});