import React,{Component,Fragment} from "react"
import {connect} from 'react-redux'
import "../css/movie.css"
class Movie extends Component{
    render(){
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
            <div>
                <p>- 影视 -</p>
                <p>
                    <a href="http://m.wufazhuce.com/movie/1202">豆瓣9.9，再也找不到比它评价更牛的剧了</a>
                </p>
                <p>文／鱼叔</p>
                
                <div>
                    <img className="lazy_img resize_img img_center_x" data-src="http://image.wufazhuce.com/FnZIoKcBRCYN7r7e25vGyJuNTgdu" src="http://image.wufazhuce.com/FnZIoKcBRCYN7r7e25vGyJuNTgdu"/>
                </div>
                <p>到底是谁没打满分!？这剧都拿不到满分，观众也太严格了吧？</p>
                <p>——关于《瑞克和莫蒂 第三季》</p>
                <p>2017/10/31</p>
            </div>
            <div>
                <p>- 影视 -</p>
                <p>
                    <a href="http://m.wufazhuce.com/movie/1202">豆瓣9.9，再也找不到比它评价更牛的剧了</a>
                </p>
                <p>文／鱼叔</p>
                
                <div>
                    <img className="lazy_img resize_img img_center_x" data-src="http://image.wufazhuce.com/FnZIoKcBRCYN7r7e25vGyJuNTgdu" src="http://image.wufazhuce.com/FnZIoKcBRCYN7r7e25vGyJuNTgdu"/>
                </div>
                <p>到底是谁没打满分!？这剧都拿不到满分，观众也太严格了吧？</p>
                <p>——关于《瑞克和莫蒂 第三季》</p>
                <p>2017/10/31</p>
            </div>
       </div>

        </Fragment>
        )
    }
}
const mapStateToProps = (state)=>({
    
 })
 const mapDispatchToProps =(dispatch)=>({
  
 })
export default connect(mapStateToProps,mapDispatchToProps)(Movie)