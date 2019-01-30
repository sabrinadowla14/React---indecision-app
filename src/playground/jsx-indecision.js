console.log('App.js is running!');

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: ['One', 'Two']
};

const onFormSubmit = (e) => {
   //to prevent full page refresh
   e.preventDefault();
   //name is option
   const option = e.target.elements.option.value;
   if(option) {
     app.options.push(option);
     e.target.elements.option.value = '';
     counterApp();
     
   }
   
};
const resetApp = () => {
  app.options = [];
  counterApp();
};
const onMakeDecision = () => {
  //Math.random() function will print numbers in between
  //0-1, Math.floor will round it 
  const randomNumber = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNumber];
  alert(option);
  
};
//create a render function which renders the new jxs file
const counterApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <button disabled={app.options.length===0} onClick={onMakeDecision}>What Should I do?</button>
      <button onClick={resetApp}>Remove All</button>
      
      <ol>
        {/*map over app.options getting back an array of list set array of key and text*/}
        {
          app.options.map ((option)  => <li key = {option}>Item: {option}</li>
         )
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        
        <button>Add Option</button>
      </form>
      <br></br>
      
    </div>
      
  );
  ReactDOM.render(template, appRoot);
};

const appRoot = document.getElementById('app');

counterApp();