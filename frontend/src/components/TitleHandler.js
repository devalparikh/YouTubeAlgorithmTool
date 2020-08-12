import React, {Component} from 'react';

// Search Bar

import Grid from '@material-ui/core/Grid';
import csc from 'country-state-city';
import usc from 'us-state-codes';

import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';




export default class TitleHandler extends Component{
    
    constructor(props) {
        super(props)
    
        this.state = {
            selected_state_id: "",
            selected_state_name: "",
            selected_city_id: "",
            total_covid: [],
            non: "n/a",

            title: "",
            error: "",

        }
      }  
      
    onChangeUserState(value) {
        if(value) {
            // this.setState({selected_state_id: value.id, selected_state_name: value.name})
            // fetch('https://covidtracking.com/api/states')
            // .then(res => res.json())
            // .then((data) => {

            // for(var i = 0; i < data.length; i++) {
            //     if(data[i].state === usc.getStateCodeByStateName(value.name)) {
            //         this.setState({total_covid: [data[i].state, data[i].positive, data[i].recovered, data[i].hospitalizedCurrently, data[i].death]})
            //         console.log(data[i])
            //     }
            // }
            // })
            // .catch(console.log)
        }
        
    }

    onChangeTitle(event) {
        if(event.target.value) {
            this.setState({title: event.target.value})
            this.setState({error: ""})
        } else {
            this.setState({error: "Please enter a title"})
        }
    }

    onPress(title) {
        if(title) {
            console.log(title);
        }
    }

    // onSubmit = function (event){
    //     alert('it works!');

    //     event.preventDefault();
    //     console.log('hello world')
    // }
    
    render() {
    console.log()
    return (
      <div>
        <Grid container style={{flexGrow: 1, marginTop: 40}} spacing={2}>
            <Grid item xs={12} sm={12}>
                <Grid container style={{marginBottom:10}} justify="center" spacing={3}>
                {/* <h2>Enter Potential Title</h2> */}
                {/* <img src="https://developers.google.com/youtube/images/youtube_home_page_data_api.png" style={{width: "500px"}} /> */}
                </Grid>
                
                <Grid container justify="center" spacing={3}>
                    <Paper component="form" style={{ marginTop: "40px", padding: "2px 4px", display: "flex", alignItems: "center", width: "500px" }}>
                        <InputBase
                            style={{ marginLeft: "30px", flex: "1" }}
                            placeholder="Enter Video Title"
                            inputProps={{ 'aria-label': 'Enter Video Title' }}
                            onChange={(event, value) =>  this.onChangeTitle(event)}
                        />
                        <IconButton aria-label="search" style={{ padding: "10" }}>
                            <SearchIcon onClick={() => {this.onPress(this.state.title)}} />
                        </IconButton>
                    </Paper>
                </Grid>
                <Grid container justify="center" spacing={3}>
                    { this.state.error !== "" ? <p style={{fontWeight:900, fontSize:50, color:'#d58387'}}>{this.state.error}</p> : <p></p> }
                </Grid>


                <Grid container justify="center" spacing={3}>
                    { this.state.selected_state_name !== "" ? <p style={{fontWeight:900, fontSize:50, color:'#444444'}}>{this.state.total_covid[0]}</p> : <p></p> }
                </Grid>
            </Grid>

            <Grid item xs={12} sm={6}>
            <Grid container justify="center" spacing={3}>
                    { this.state.selected_state_name !== "" ? <p>Total Cases:</p> : <p></p> }
                </Grid>
                <Grid container justify="center" spacing={3}>
                    { this.state.selected_state_name !== "" ? <p style={{fontWeight:900, fontSize:50, color:'#3f51b5'}}>{this.state.total_covid[1]!== null ? this.state.total_covid[1] : this.state.non}</p> : <p></p> }
                </Grid>
            </Grid>

            <Grid item xs={12} sm={6}>
                <Grid container justify="center" spacing={3}>
                    { this.state.selected_state_name !== "" ? <p>Total Recovered:</p> : <p></p> }
                </Grid>
                <Grid container justify="center" spacing={3}>
                    { this.state.selected_state_name !== "" ? <p style={{fontWeight:900, fontSize:50, color:'#3fb57a'}}>{this.state.total_covid[2] !== null ? this.state.total_covid[2] : this.state.non}</p> : <p></p> }
                </Grid>
            </Grid>

            <Grid item xs={12} sm={6}>
                <Grid container justify="center" spacing={3}>
                    { this.state.selected_state_name !== "" ? <p>Curently Hospitalized:</p> : <p></p> }
                </Grid>
                <Grid container justify="center" spacing={3}>
                    { this.state.selected_state_name !== "" ? <p style={{fontWeight:900, fontSize:50, color:'#de9554'}}>{this.state.total_covid[3]!== null ? this.state.total_covid[3] : this.state.non}</p> : <p></p> }
                </Grid>
            </Grid>

            <Grid item xs={12} sm={6}>
                <Grid container justify="center" spacing={3}>
                    { this.state.selected_state_name !== "" ? <p>Total Dead:</p> : <p></p> }
                </Grid>
                <Grid container justify="center" spacing={3}>
                    { this.state.selected_state_name !== "" ? <p style={{fontWeight:900, fontSize:50, color:'#b53f6a'}}>{this.state.total_covid[4]!== null ? this.state.total_covid[4] : this.state.non}</p> : <p></p> }
                </Grid>
            </Grid>
            
        </Grid>

      </div>
    )
  }
}
