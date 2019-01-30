class VisibilityToggle extends React.Component {
  
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      isHidden: true,
      title:'Visibility Toggle', 
      msg: 'Hi, How you?'
    };

  }
  handleToggleVisibility() {
    this.setState((prevState) =>{
      return {
        isHidden: !prevState.isHidden
        
      };
    });
}
  render() {
    return(
      <div>
        <h1>{this.state.title}</h1>
        <button onClick={this.handleToggleVisibility}>{ this.state.isHidden ? 'Show Details' : 'Hide Details' }</button>
        { this.state.isHidden && (
                <div>
                 <p>{this.state.msg}</p>
                 </div>
                 )}
        
      
      </div>
    ); 
  }
}
ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
