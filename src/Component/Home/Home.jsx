import axios from "axios";
import React,{ Component, Fragment } from "react";
import '../Home/Home.css';

//Component CrudApi
import CrudApi from "../CrudApi/CrudApi";


class Home extends Component{
    
    //State
    state = {
        post: [],
        formBlogPost: {   
            id: 1,
            title: '',
            body: '',
            userId: 1
        },
        putBtn: false
    }


    //Post GET API
    getPostToApi = () => {
        axios.get('http://localhost:3004/posts?_sort=id&_order=desc')
        .then(response => {
            this.setState({ 
                post: response.data,
                formBlogPost: {
                    id: 1,
            title: '',
            body: '',
            userId: 1   
        }
            })
        })
    }
    
    componentDidMount(){
        this.getPostToApi();
    }


    //Handle Remove
    handleRemove = (data) => {
        axios.delete(`http://localhost:3004/posts/${data}`)
        .then(response => {
            this.getPostToApi()
        })
    }

    //Post to api
    postToApi = () => {
        axios.post("http://localhost:3004/posts",this.state.formBlogPost)
        .then(res => console.log(res))
        this.getPostToApi();
    }

    postHandle = (event) => {
        let formAllPost = {...this.state.formBlogPost};
        formAllPost[event.target.name] = event.target.value;
        let time = new Date().getTime();
        if(!this.state.putBtn){


            formAllPost['id'] = time;
        }
        console.log(time)
        this.setState({
            formBlogPost: formAllPost
        }, (error) => {
            console.log(error)
        })
    }
    
    //Api Put/Update
    putToApi = () =>  {
        axios.put(`http://localhost:3004/posts/${this.state.formBlogPost.id}`,this.state.formBlogPost)
        .then(res => {
            console.log(res);
            this.getPostToApi();
            this.setState({
            formBlogPost: {   
            id: 1,
            title: '',
            body: '',
            userId: 1
        },
        putBtn: false
            })
        })
    }

    handleSubmit = () => {
        if(this.state.putBtn){
            this.putToApi();
        }
        else{
            this.postToApi();
        }
    }

    //Update data Api

    updateData = (data) => {
        console.log(data)
        console.log(data)
        this.setState({
            formBlogPost: data,
            putBtn: true
        })
    }



    render(){
        return(
            <Fragment>
                <div className="postApi">
                    <label htmlFor="title">Title :</label>
                    <br />
                    <input type="text" name="title" value={this.state.formBlogPost.title} placeholder="Add Title" onChange={this.postHandle}/>
                    <br />
                    <label htmlFor="body">Body :</label>
                    <br />
                    <textarea name="body" value={this.state.formBlogPost.body} cols="30" rows="10" onChange={this.postHandle}></textarea>
                    <br />
                    <button className="save" onClick={this.handleSubmit}>Save</button>
                </div>
                {
                    this.state.post.map(res => {
                        return <CrudApi key={res.id} data={res} remove={this.handleRemove} update={this.updateData}/>
                    })
                }
            </Fragment>
        )
    }
}

export default Home;