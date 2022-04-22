import Task from "../components/Task" //Task itu adalah nama kelas sekaligus komponen, jadi nantinya akan dipanggil di halaman yang diimport

// map untuk membuat list 
 const Tasks = ({tasks, ondelete , onToggle}) => {
  return (
    // buat ngewrap 
    //<> tidak mau ada styling apapun 
    
  <> 
  {tasks && tasks.map((task) =>
   ( <Task key={task.id} task={task} hapus={ondelete} onToggle = {onToggle}/>
    ))}

  </>
  ) 
}


export default Tasks;
//untuk menampilkan teks pada task sesuai dengan id pada array 