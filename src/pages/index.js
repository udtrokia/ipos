import React, {Component} from 'react';
import Typist from 'react-typist';
import './index.css'

const readme = () => (
	<div className="readme"  >
		<br/>
		<div style={{color:'#EE9A49'}}>
		<text>### __ ipos 星际操作系统 __ </text><br/>
		<text>InterPlanetary Operating System</text><br/><br/>
		<text>### __ 一个基于 DAG 技术新数据经济体操作系统 __ </text><br/>
		<text>A new data economy OS based on DAG technology</text><br/><br/>
		<text>### __ 终结数据孤岛，解锁数据价值 __ </text><br/>
		<text>The end of Data islands and Unlock Data Value </text><br/><br/>
		</div>
		<Curl />
	</div>
)

const Curl = () =>(
	<Typist cursor={{element:'_'}} >
		<text>> curl "https://ipfs.io/ipdn/$hash"</text><br/><br/>
		<text style={{marginLeft:'1rem'}}>The New World is Coming Soon
			<span className="roll"> 🚀 </span>...</text>
	</Typist>
)
export default class MyComponent extends Component {
	state={
		avg: 20,
		cursor:false,
		initInfo: true,
		readme: false
	}
	render() {
		const _lineTyped = (line, id)=>{
			if(id === 5 ){
				this.setState({
					initInfo: 'none',
					cursor: true,
					avg: 70
				})
			}
		}
		const _readme = () => this.setState({readme: true})

		return (
			<div>
				<Typist onLineTyped={_lineTyped} onTypingDone = {_readme}
					cursor={{show:this.state.cursor,element:'_'}} avgTypingDelay={this.state.avg} className="page">
					<div style={{display:this.state.initInfo}}><span> Initializing ......  </span><br/>
						<span> Loading modules ...... Complete </span><br/>
						<span> Loading nodes ...... Complete </span><br/>
						<span> Reticulating splines ...... Complete </span><br/>
						<span> -- Initialization Complete -- </span><br/><br/>
					</div>
					<text className="title"> HELLO, IPOS!</text><br /><br/>
					<text >> cat README.md </text>
				</Typist>
				{this.state.readme?readme():''}
			</div>
		);
	}
}

