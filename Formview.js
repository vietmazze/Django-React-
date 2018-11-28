import React from "react";
import axios from "axios";
import CollectionsPage from '../components/form';
import {connect} from 'react-redux';
class Formview extends React.Component {
    state = {
        cryptos: []
      };
    
    //   componentDidMount() {
    //     let initialPlanets = [];
    //     fetch('https://swapi.co/api/planets/')
    //         .then(response => {
    //             return response.json();
    //         }).then(data => {
    //         initialPlanets = data.results.map((planet) => {
    //             return planet
    //         });
    //         console.log(initialPlanets);
    //         this.setState({
    //             planets: initialPlanets,
    //         });
    //     });
    // }

    
    
    componentWillReceiveProps(newProps) {
        console.log(newProps.token);
        console.log(newProps.data);

        if (newProps.token) {
            axios.defaults.headers = {
                "content-Type":"application/json",
                Authorization: newProps.token
            }
            axios.get("http://127.0.0.1:8000/api/coincap/")
            .then(res => {
                this.setState({cryptos:res.data});
            })
            .catch(error => console.log(error.res));
         }
    }


    render() {

        return (
            <div>
                <CollectionsPage cryptos = {this.state.cryptos}/>
             
                <h1>{this.props.token}</h1>
                <h1>{this.props.data}</h1>
            </div>
        )
    }

    
}

const mapStateToProps = state => {
    return {
        token: state.authReducer.token,
        data: state.fetchReducer.data
        
    }
  }


export default connect(mapStateToProps)(Formview);
