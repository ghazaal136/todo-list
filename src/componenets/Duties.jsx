
import Duty from './Duty';

const Duties = ({dutiesArr, handleDelete,handleDoneDuty , handleEditInput , handleEditTask , handleConfirmation}) => {
    return ( 
      
     dutiesArr.map(each => (
       <Duty 
        key={each.id}
        eachDuty ={each.duty}
        doneTask = {each.done}
        editTask = {each.edit}
        deleted = {() =>handleDelete()}
        done = {() =>handleDoneDuty(each.id)}
        editInput = {() => handleEditInput(each.id)}
        editTasks={(event) => handleEditTask(each.id , event)}
        confirmation={()=>handleConfirmation(each.id)}
    />
))
    );   
}
export default Duties;
