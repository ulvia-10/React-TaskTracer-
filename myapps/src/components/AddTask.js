
 const AddTask = () => {
  return (
  <form className='add-form'>
      <div className='form-control'>
          <label>Task</label>
          <input type="text" placeholder='Add Task'></input>
      </div>
      <div className='form-control'>
          <label>Day and Time</label>
          <input type="text" placeholder='Add Date and Time '></input>
      </div>
      <div className='form-control'>
          <label>Set Reminder</label>
          <input type="checkbox" placeholder='Add Reminder'></input>
      </div>
    
      <input type='submit' value='Save Task'/>
  </form>
  )
}

export default AddTask
 