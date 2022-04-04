import {Component} from "react";
import Block from "./Block.js";

class MapCanvas extends Component{
    constructor() {
        super();
        this.state={
            top:0,
            left:0,
            blockIDs:[0],
            lineID:[]
        }
    }
    handleClick=()=>{
        let blocks=this.state.blockIDs
        blocks.push(this.state.blockIDs[this.state.blockIDs.length-1]+1)
        this.setState({blockIDs:blocks})
    }

    upDateLocation=(e)=>{
        let topC=e.clientY
        let leftC=e.clientX
        this.setState({top:topC,left:leftC})
    }

    render() {
        let blocks=[]
        for(let i=0;i<this.state.blockIDs.length;i++){
            blocks.push(
                <div><Block id={this.state.blockIDs[i]} top={this.state.top} left={this.state.left}/></div>
            )
        }
        return (<div className={'grid'}
                     onMouseMove={this.upDateLocation}>
            <button onClick={this.handleClick}>
                Add
            </button>
            <div>{this.state.top}</div>
            <div>{this.state.left}</div>
            <div>{blocks}</div>
        </div>)
    }
}

export default MapCanvas;