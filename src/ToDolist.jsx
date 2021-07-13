 
function ToDolist(props) {
   return (
   <>
   
   <li><button onClick={()=>{
       props.delete(props.id);
   }}>delete</button>  {props.text}</li>
   
   </>
   )
}

export default ToDolist;