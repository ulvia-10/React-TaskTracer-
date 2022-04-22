// import nama kelas header dari url file tersebut 
import {useState} from 'react';
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
// kalau memakai export default(maka tidak diberi {}) namun kalau export const pakai {}

const App = () => {
  const[task, setTasks ] = useState([
    {
       id: 1,
       text: 'Periksa ke Dokter ',
       day:'18 April 2022',
       reminder: true,
    },
    {
      id: 2,
      text: 'Pergi ke salon',
      day:'19 April 2022',
      reminder: true,
    },
    {
      id: 3,
      text: 'Makan bukber ',
      day:'19 April 2022',
      reminder: true,
    },
  ])

// delete task
  const deleteTask = (id) =>{
    // console.log('delete', id)
    setTasks(task.filter((task)=> task.id !== id)) //hapus: dimana task id yang mau didelete tidak akan dimunculin 
   }

   const ToggleReminder = (id) => {
    //  console.log(id);
    setTasks
    (task.map((task => task.id === id ? 
      {...task, reminder: !task.reminder} : task)))
   }
 
return(
// ini adalah halaman tampilan(di app) jadi tampilan di laman diatur di tag ini
  <div className="container">
    <h1>Halo</h1>
    <Header/>
    <AddTask/>
 {/* membuat props dimana yang dipanggil nantinya adalah nama yang dideklarasikan = objek   */}
    {task.length > 0 ? (
    <Tasks 
    tasks={task} ondelete={deleteTask}  onToggle = {ToggleReminder}/> ) : ('Tidak ada task') } 
    {/* kalo mau melakukan aksi, seperti delete, tambah maka penulisannya ada on didepan  */}
  </div>

  
)
}
export default App;

