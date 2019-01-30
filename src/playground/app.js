//Stateless Functional Component



//Create a parent class
class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options:[]
      
    };

  }
  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if(options) {
        this.setState(()=> ({options}));
      }

    }catch(e) {
     //Do nothing fall back to default array
    }
    
    
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options)
      localStorage.setItem('options', json);
      }
    
  }

  componentWillUnmount() {
    console.log("componentWillUnmount!");
  }


  handleDeleteOptions() {
    this.setState(()=>({ options: [] }));
  }
  //this one is for only one item
  //we want to pass this to Option,but we dont have the
  //direct access to the option.we are going to pass this to options and we are going to allow options to pass that onto
  //option
  handleDeleteOption(optionToRemove) {
    this.setState((prevState)=>({
      options: prevState.options.filter((option)=>{optionToRemove !== option})

    }));
  }
  handlePick() {
    const randomNumber = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNumber];
    alert(option);
  }
  handleAddOption(option) {
    //validation check
    if(!option) {
      return 'Please enter valid item';
      //indexOf will return 0=if First Item, 1=2nd item and 
      //-1= if it does not exist, if the option > -1 that means we have match
    }else if (this.state.options.indexOf(option) > -1) {
      return "this option already exists.";
    }
    //this is equivalent to else
    
    this.setState((prevState)=>({options: prevState.options.concat(option)}));

  }
  render() {
    
    const subtitle = "Creating Website using React!";
    
    return (
      <div>
      {/* pass key value pairs, here key is title */}
        <Header subtitle={subtitle}/>
        {/* Action will check if there is any options,if it has options(if greater than 0) hasOptions will be true  */}
        <Action 
        hasOptions={this.state.options.length > 0}
        handlePick={this.handlePick}
        />
        <Options 
        options={this.state.options}
        handleDeleteOptions={this.handleDeleteOptions}
        //we will pass down handleDeleteOption singular and assign a method
        handleDeleteOption={this.handleDeleteOption} 
        />
        <AddOption 
        handleAddOption={this.handleAddOption}
        />
      </div>

    );

  }

}
//even we don't have the title it will take the
//default one
const Header = (props) => {
  return (
    <div>
     <h1>{props.title}</h1>
  {/* we are going to check if we have props.subtitle
  if it is true we will see it otherwise not. */}
     {props.subtitle&&<h2>{props.subtitle}</h2>}
    </div>

  );
}
Header.defaultProps = {
  title: 'Indecision'
}

//Let us convert Action together for Stateless function
//create function with the exact name Action, render function is same so just copy it
const Action = (props) => {

    return (
     <div>
        <button 
           onClick={props.handlePick}
           disabled={!props.hasOptions}
           >
           What Should I do?
        </button>
     </div>
    );


}
const Options = (props) => {
  return (
    <div>
    {
     props.options.map((option)  => (
       <Option 
       key={option} 
       optionText={option}
       handleDeleteOption = {props.handleDeleteOption}
       />

      ))
    }
      {/*method that passed on */}
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.length === 0&&<p>Please add an option to get started!</p>}
   </div>
   );

}
const Option = (props) => {
  return (
    <div>
    {props.optionText}
    <button 
      onClick={(e)=>{
        props.handleDeleteOption(props.optionText);
      }}
      >
      Remove
    </button>
    </div>

   ); 
}



class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.state = {
      error: undefined
    };
  }
  onFormSubmit(e) {
    e.preventDefault();
    //go into the form element, select the name=option and get the value from the input box and to remove the white space trim() it.
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    
    this.setState(()=> ({ error }));
    if(!error) {
      e.target.elements.option.value = "";
    }
    
 };
 
  render() {
    return (
     <div>
     {this.state.error&&<p>{this.state.error}</p>}
     <form onSubmit={this.onFormSubmit}>
     <input type="text" name="option"/>
     
     <button>Add Option</button>
     </form>
     </div>
    );
  }
}
//Stateless Functional Component, we have to pass props in
//the function. this is same as this .props,
//in class based we say this.props.name but here we say props.name. Stateless is faster than the class based, if it is very simple we will use this one and there is no overhead
// const User = (props) => {
//   return(
//     <div>
//     <p>Name: {props.name} </p>
//     <p>Age: {props.age} </p>
//     </div>

//   );

// };

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));