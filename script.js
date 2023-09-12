function queueOperations(commands){
   let queue = new Array(100).fill(0);

    for (let i=0; i <commands.length; i++){
        let parts = commands[i].split(" ");
        let command=parts[0];

        if (command==="COME"){
            let number = parseInt(parts[1]);
            if (number>0){
                queue = queue.concat(new Array(number).fill(0));
            }
            else{
                queue=queue.slice(0, number);
            }
        } 
        else if (command ==="WORRY"){
            let number=parseInt(parts[1]);
            queue[number]=1;
        }
        else if (command === "QUIET"){
            let number = parseInt(parts[1]);
            queue[number]=0;
        }
        else if (command==="WORRY_COUNT"){
            let count = queue.filter(person =>person ===1).length;
            console.log(count)
        }
    }
}
let commands=["COME 5", "WORRY 1", "WORRY_COUNT", "WORRY 3", "WORRY_COUNT", "QUIET 1", "WORRY_COUNT"];
queueOperations(commands)