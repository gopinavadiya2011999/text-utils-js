
// import About from './components/About.js';
import { useState } from 'react';
import NavBar from './components/Navbar.js';
import TextForm from './components/TextForm.js';
import Alert from './components/Alert.js';

function App() {
  const  colors = [
    'red',
    'blue',
    'green',
    'Violet',
    'purple',
    'Orange'
  ];

    const [selectedColour,setColour ]=useState(null);
  const [mode , setMode ]= useState('light');
  //Whether the dark mode is enabled or not
  const [alert,setAlert] = useState(null);


  const showAlert = (message,type)=>{
    setAlert({
    msg:message,
    type:type

    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

const toggleMode=()=>{
  if(mode==='light'){
    setMode('dark');
document.body.style.backgroundColor='#353839';
document.body.style.color='white';
document.title = "Text Utils - Dark";
showAlert("Dark Mode has been enabled","success");

// setInterval(() => {
//   document.title = "Text Utils - is Amazing";
// }, 2000);

// setInterval(() => {
//   document.title = "Install Text Utils Now";
// }, 1500);  
}
  else{
    setMode('light');
    setColour(null);
    document.body.style.backgroundColor='white';
    document.body.style.color='black';
    document.title = "Text Utils - Light";
    showAlert("Light Mode has been enabled","success");
    
  }
}

  return (
    //this is jsx
  <>  
   <NavBar title= "TextUtils" mode ={mode} toggleMode={toggleMode}  colors={colors} setColour={setColour}/>
   <Alert alert={alert}/>
   <div className="container my-3">
   <TextForm heading = "Enter your text to analyze below" showAlert={showAlert} mode ={mode} selectedColour={selectedColour}/>
   {/* <About/> */}
   </div>
  </>
  
    );
}

export default App;
