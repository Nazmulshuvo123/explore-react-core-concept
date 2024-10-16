// export default function Todo({task, isDone}){
//     return(
//         <li>Task: {task}</li>
//     )
// }

//Conditional Rendering Option 1:

// export default function Todo({task, isDone}){
//     if(isDone === true){
//         return <li>Finished : {task}</li>
//     }
//     else{
//         return <li>Work One: {task}</li>
//     }
// }


//Conditional Rendering Option 2:
// export default function Todo({task, isDone}){
//        if(isDone){
//         return <li>Finished : {task}</li>
//        } 
//        return <li>Work Continue: {task}</li> 
//     }

//Conditional Rendering Option 3: ternary operator

// export default function Todo({task, isDone}){
//     return(
//         <li>{isDone ? 'Finish' : 'Work continue'}: {task}</li>
//     )
// }

//Conditional Rendering Option 4: &&
// export default function Todo({task, isDone}){
//     return(
//         <li>{task} {isDone && ': Hoye geche'}</li>
//     )
// }


//Conditional Rendering Option 5: or "||"
// export default function Todo({task, isDone}){
//     return(
//         <li>{task} {isDone || ': Do it'}</li>
//     )
// }


//Conditional Rendering Option 6:

export default function Todo({task, isDone}){
    let lisItem;
       if(isDone){
        return <li>Finished : {task}</li>
       } 
       else{
         lisItem = <li>Work Continue: {task}</li>
       } 
       return lisItem;
    }