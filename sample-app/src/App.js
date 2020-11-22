import React, {Component} from 'react';
import { Layout, Input, Button, Spin } from 'antd';
import './App.css';
import 'antd/dist/antd.css'; 
import axios from 'axios';

const { Header, Footer, Content } = Layout;
class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      handle: '',
      pun: true,
      loading: true,
    }
  }

  callPunAPI(){
    //axios.get(url).then(res=> this.setState({pun: res.data}));
    return
  }

  onClick(){
    this.setState({loading: false})
  }

  onChange(e){
    this.setState({handle: e.target.value});
  }

  render(){
    let pic = !this.state.loading ? (<div style={{marginTop: '20px'}}>
      <img src={`https://tweets-as-an-image.herokuapp.com/tweet?twitterHandle=${this.state.handle}`} maxHeight="600px" alt="tweet"/>
      <div style={{fontWeight: 'bold'}}>Pun Intended</div>
      </div>) : <Spin size="large" style={{marginTop: '50px'}}/>

    return (
    <div className="App">
        <Layout>
          <Header style={{color: 'white'}}>Pun Intended</Header>
          <Content style= {{height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <h1>Enter Twitter Handle:</h1>
            <Input style={{ marginLeft: '600px', width: '300px' }} size="large" placeholder="Twitter Handle" onChange={(e)=> this.onChange(e)}/>
            <Button type="primary" style={{ marginLeft: '600px', width: '300px'}} onClick={()=>this.onClick()}>Check for pun in the lastest tweet</Button>
            {pic}
          </Content>
          <Footer>&copy; Team for Codechella</Footer>
        </Layout>
    </div>
    )
  }
}

export default App;
