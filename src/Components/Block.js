import {Component} from "react";
class Block extends Component{
    constructor(prop) {
        let initialTop=prop.top
        let initialLeft=prop.left
        super(prop);
        this.state={
            id:prop.id,
            text:"click to change text",
            selected:false,
            blockPosition:{
                top:initialTop,
                left:initialLeft,
            }
        }
    };
    pressDown=()=>{
        this.setState({selected:true})
    }
    release=()=>{
        this.setState({
            selected:false,
            blockPosition:{
                top:this.props.top,
                left:this.props.left,
            }
        })
    }
    cancelDefault=(e)=>{
        e.preventDefault();
    }
    render() {
        let style;
        if(this.state.selected){
            style={
                position:"absolute",
                left:this.props.left,
                top:this.props.top
            }
        }
        else{
            style={
                position:"absolute",
                left:this.state.blockPosition.left,
                top:this.state.blockPosition.top
            }
        }
        return (
            <div  style={style}
                  onMouseDown={this.pressDown}
                  onMouseUp={this.release}
                  onDragStart={this.cancelDefault}
                  className={"block"}>
                <div contentEditable={true} >{this.state.text}</div>
            </div>
        );
    }
}


export default Block