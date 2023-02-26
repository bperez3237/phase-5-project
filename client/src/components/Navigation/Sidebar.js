import React, {useState} from 'react'
import '../../App.css';
import './Navigation.css'
import {AiOutlineBars, AiFillCloseSquare} from 'react-icons/ai'
import {ImHome} from 'react-icons/im'
import {useHistory} from 'react-router-dom'
import {VscOpenPreview} from 'react-icons/vsc'
import {MdOutlineConstruction} from 'react-icons/md'
import {FaPencilRuler} from 'react-icons/fa'
import {TbReportMoney} from 'react-icons/tb'

function Sidebar({disable}) {
  const history = useHistory()
  const [selected, setSelected] = useState('home')
  const [showSidebar, setShowSidebar] = useState(false)
  const iconSize = '1.3em'

  const row_class = (name) => {
    if (name === selected) {
      return 'row-selected'
    }
    return 'row'
  }

  return (
    <div className='Sidebar' style={{'width':(showSidebar ? '50px' : '300px'),'minWidth':(showSidebar ? '50px' : '300px')}}>
            <ul className='Sidebar-list'>
                <li id='Sidebar-heading' className='row'  onClick={()=>setShowSidebar(!showSidebar)}>
                    <div id='title' style={{display:(showSidebar ? 'none' : 'block')}}><h3>Menu</h3></div>
                    <div id='icon'>{showSidebar ? <AiOutlineBars size={iconSize} /> : <AiFillCloseSquare size={iconSize} />}</div>
                </li>
                <li id='home' className={row_class('home')}  onClick={()=>{
                        history.push('/')
                        setSelected('home')
                    }}>
                    <div id='icon'><ImHome size={iconSize} /></div>
                    <div id='title' style={{display:(showSidebar ? 'none' : 'block')}}>Home</div>
                </li>
                <li id='view' className={row_class('view')}   onClick={()=>{
                        history.push('/view')
                        setSelected('view')
                    }}>
                    <div id='icon' ><VscOpenPreview size={iconSize} /></div>
                    <div id='title' style={{display:(showSidebar ? 'none' : 'block')}}>View Tables</div>
                </li>
                <li id='upload' className={row_class('upload')}   onClick={()=>{
                        history.push('/upload_review_activities')
                        setSelected('upload')
                    }}>
                    <div id='icon' ><MdOutlineConstruction size={iconSize} /></div>
                    <div id='title' style={{display:(showSidebar ? 'none' : 'block')}}>Upload & Review Activities</div>
                </li>
                <li id='enter' className={row_class('enter')}  onClick={()=>{
                        history.push('/enter')
                        setSelected('enter')
                    }}>
                    <div id='icon' ><FaPencilRuler size={iconSize} /></div>
                    <div id='title' style={{display:(showSidebar ? 'none' : 'block')}}>Enter Units</div>
                </li>
                <li id='report' className={row_class('report')}   onClick={()=>{
                        history.push('/report')
                        setSelected('report')
                    }}>
                    <div id='icon' ><TbReportMoney size={iconSize} /></div>
                    <div id='title' style={{display:(showSidebar ? 'none' : 'block')}}>Weekly Cost Report</div>
                </li>
            </ul>
        </div>
  )
}

export default Sidebar