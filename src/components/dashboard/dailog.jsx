import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog({ CloseD, employee, openDailogB }) {
  const [open, setOpen] = React.useState(false);
//   const [emp,setEmp]=React.useState(props.employee)
  const [nameFull,setName]= React.useState('')

const {  email, name } = employee.empObj || {};
const [emailId,setEmail]= React.useState(email)

console.log("employees",employee.empObj);


  const handleClickOpen = () => {

    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    CloseD()
  };
  const editEmailHandler=(e)=>{
      console.log(e.target.value);
      setEmail(e.target.value)



  }
  React.useEffect(()=>{
// setName(employee.name)
setEmail(email)


  },[])
  React.useEffect(()=>{
setEmail(email)
   
  },[emailId])

  return (
    <div>
   
      <Dialog open={openDailogB} onClose={handleClose}>
        <DialogTitle>{name}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            value={email}
            onChange={(e)=>editEmailHandler(e)}
          
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}