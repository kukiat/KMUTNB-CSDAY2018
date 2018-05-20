import React from 'react'
import data from '../Utils/Projects.json'
import styled from 'styled-components'
import { Element } from 'react-scroll'
import '../Styles/Table.css'

export default class Table extends React.Component {
  state = {
    projects: [],
    projectsByType: [],
    selectBtn: -1,
    isMobile: false
  }

  componentDidMount() {
    const projects = this.changeData(data)
    window.addEventListener('resize', this.toMobile)
    let statusMobile = this.checkMobile()
    this.setState({ 
      projects, 
      projectsByType: projects,
      selectBtn: -1,
      isMobile: statusMobile
    })
  }

  checkMobile = () => {
    if(window.innerWidth < 764) {
      return true
    }else {
      return false
    }
  }

  toMobile = () => {
    const statusMobile = this.checkMobile()
    this.setState({ isMobile: statusMobile})
  }

  changeData = (datas) => {
    const arrType = ['Web Apllication', 'ML & Data analytics', 'System(ระบบเบื้องหลัง)', 'Blockchain', 'Mobile Application', 'Other']
    let newData = []
    datas.map((data,index) => {
      if(data.name) 
        if(arrType.indexOf(data.type) === -1) {
          newData.push({
            id: index,
            name: data.name, 
            type: 'Other',
            typeId: 5
          })
        }else {
          newData.push({
            id: index,
            name: data.name, 
            type: data.type,
            typeId: arrType.indexOf(data.type)
          })
        }
    })
    return newData
  }

  onScrollTop = () => {
    document.getElementById('table').scrollTo(0,0)
  }

  onSelectType = (type) => {
    if(type === -1) {
      this.onScrollTop()
      this.setState({ 
        projectsByType: this.state.projects,
        selectBtn: -1
      })
    }else {
      this.onScrollTop()
      const selected = this.state.projects.filter((project) => project.typeId === type)
      this.setState({ 
        projectsByType: selected,
        selectBtn: type
      })
    }
  }

  render() {
    const { selectBtn, projectsByType, isMobile} = this.state
    return (
      <Element name="scroll-table" className="mgt-global-20" className="Table">
        <h1 data-aos="fade-up">รายชื่อโครงงานที่เข้าร่วมประกวดแข่งขัน</h1>
        <div className="container-table" data-aos="fade-up">
          <div className="type-table">
            { isMobile ?
              <select className="type-menu-mobile" onChange={(e) => this.onSelectType(parseInt(e.target.value))} data-aos="fade-right">
                <option value={-1} onSelect={(e) => console.log(e)}>All</option>
                <option value={0}>Web Apllication</option>
                <option value={1}>ML & Data analytics</option>
                <option value={2}>System</option>
                <option value={3}>Blockchain</option>
                <option value={4}>Mobile Application</option>
                <option value={5}>Other</option>
              </select>
            :
              <div className="type-menu" data-aos="fade-right">
                <h2 data-aos="fade-down">หมวดหมู่</h2>
                <BtnType backgroudColor={selectBtn === -1}  onClick={() => this.onSelectType(-1)} >All</BtnType>
                <BtnType backgroudColor={selectBtn === 0}  onClick={() => this.onSelectType(0)} >Web Apllication</BtnType>
                <BtnType backgroudColor={selectBtn === 1}  onClick={() => this.onSelectType(1)} >ML & Data analytics</BtnType>
                <BtnType backgroudColor={selectBtn === 2}  onClick={() => this.onSelectType(2)} >System</BtnType>
                <BtnType backgroudColor={selectBtn === 3}  onClick={() => this.onSelectType(3)} >Blockchain</BtnType>
                <BtnType backgroudColor={selectBtn === 4}  onClick={() => this.onSelectType(4)} >Mobile Application</BtnType>
                <BtnType backgroudColor={selectBtn === 5} onClick={() => this.onSelectType(5)} >Other</BtnType>
              </div>
            }
          </div>
          <div className="main-table" data-aos="fade-left">
            <div className="wrap-table">
              <h2 data-aos="fade-down">ชื่อโครงงาน</h2>
              <div id='table' className="project-table">
                { projectsByType.map((project) => (
                    <div key={project.id} className="project-list">
                      <p className="mgt10">{project.name}</p>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </Element>
    )
  }
}

const BtnType = styled.div`
  background: ${props => props.backgroudColor ? '#5AFEED' : 'rgba(0, 0, 0, 0.7);'};
  height: 50px;
  border: 2px solid #5AFEED;
  cursor: pointer;
  border-radius: 15px;
  color: ${props => props.backgroudColor ? 'black' : 'white;'};
  line-height: 50px;
  ${props => props.backgroudColor ? 'animation : type 0.7s ease infinite;' : ''};
`

const DropdownType = styled.option`
  background: ${props => props.backgroudColor ? '#5AFEED' : 'rgba(0, 0, 0, 0.7);'};
  height: 50px;
  border: 2px solid #5AFEED;
  color: ${props => props.backgroudColor ? 'black' : 'white;'};
  cursor: pointer;
  border-radius: 15px;
  line-height: 50px;
`