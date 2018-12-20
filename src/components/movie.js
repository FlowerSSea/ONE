import React,{Component,Fragment} from "react"
import {connect} from 'react-redux'
import {
    get_data_action
}
from "../action/actionCreator";
import "../css/movie.css"
class Movie extends Component{
    render(){
        let {Movie_item} = this.props
        console.log(Movie_item)
        return(
            <Fragment>
            <div className="movie">
               <div className="header">
                    <table>
                        <tbody><tr>

                            <td><a href="#left-panel" className="ui-link"><i className="fa fa-camera-retro fa-5x"></i></a></td>
                            <td align="center">
                                <span className="text-header text">一个影视</span>
                            </td>
                            <td>
                                <a id="header_search_btn_angMovie_index" className="ui-link">
                                <i className="fa-search-plus"></i>
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
        </div>
       
       <div className="content-list">
                {
                    Movie_item.map((item,index)=>{

                        return(
                            <div key={index}>
                            <p>- 影视 -</p>
                            <p>
                                <a href="http://m.wufazhuce.com/movie/1202">{item.title}</a>
                            </p>
                            <p>文/{item.user_name}</p>
                            <div>
                                <img className="lazy_img resize_img img_center_x" data-src={item.img_url} src={item.img_url}/>
                            </div>
                            <p>{item.forward}</p>
                            <p>关于{item.subtitle}</p>
                            <p>{item.date}</p>
                            </div>
                        )
                    })
                }    
       </div>

        </Fragment>
        )
    }
    componentDidMount(){
        // fetch("/movie")
        // .then(res=>res.json())
        // .then((data)=>{
        //     console.log(data);
        // })
        this.props.getData()
    }
}
const mapStateToProps = (state)=>({
    Movie_item:state.reducer.Movie_item
 })
 const mapDispatchToProps =(dispatch)=>({
    getData(){
        dispatch(get_data_action());
    }
 })
export default connect(mapStateToProps,mapDispatchToProps)(Movie)