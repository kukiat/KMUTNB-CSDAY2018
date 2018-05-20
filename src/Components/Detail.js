import React, { Component } from 'react';
import { Element } from 'react-scroll'
import '../Styles/Detail.css';


class Detail extends Component {
  render() {
    return (
      <Element className="mgt-global-20" name="scroll-detail">
        <div className="Detail Detail-textalign-left">
          <div>
            <h1 data-aos="fade-up" className="web-color">WHAT IS CS DAY?</h1>   
            <p data-aos="fade-up" className="Detail-content">
              CS DAY คืองานจัดแสดงและประกวดแข่งขันโครงการของนักศึกษาชั้นปีที่ 4 ขึ้นไป ของภาควิชาวิทยาการคอมพิวเตอร์และสารสนเทศ คณะวิทยาศาสตร์ประยุกต์ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ โดยมีโครงงานของนักศึกษาเป็นจำนวนกว่า 70 โครงงาน จากนักศึกษา 129 คน ทั้งนักศึกษาที่อยู่ในหลักสูตรปกติและสหกิจศึกษา เพื่อแสดงศักยภาพของนักศึกษา และเปิดโอกาสให้นักศึกษารุ่นน้อง ปี 1, 2, และ 3 ได้ค้นหาแรงบรรดาลใจ เก็บเกี่ยวประสบการณ์ ความรู้ และแนวทางในการพัฒนาซอฟต์แวร์ที่มีคุณภาพต่อไป
            </p>  
          </div>
          <div className="Detail-mgtitem">
            <h1 data-aos="fade-up" className="other-color">PARTICIPANTS</h1>
            <p data-aos="fade-up" className="Detail-content">
              Everyone is invited!
              <br />
              งานของเราเปิดกว้างสำหรับทุกคน ไม่ว่าคุณจะเป็นใคร เป็นนักเรียน เป็นนักศึกษา หรือว่าคุณกำลังทำงานอยู่
              หากคุณมีความชื่นชอบ มีใจรักในเทคโนโลยี ขอเชิญชวนมาร่วมเป็นส่วนหนึ่งของกิจกรรมครั้งยิ่งใหญ่ 
              ชั้น 1,6 คณะวิทยาศาสตร์ประยุกต์(78) มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ เวลา 10:00 - 16:00 น.
            </p>  
          </div>
          <div className="Detail-mgtitem">
            <h1 data-aos="fade-up" className="ml-color">REASONS TO COME</h1>
            <p data-aos="fade-up" className="Detail-content">
              คุณจะได้พบกับ พบกับโครงงานและแรงบรรดาลใจใหม่ๆ เทคโนโลยีล้ำสมัยไม่ว่าจะเป็น
              <br /><span className="Detail-technology">►</span>Blockchain Technology
              <br /><span className="Detail-technology">►</span>Machine Learning & Data Analytics
              <br /><span className="Detail-technology">►</span>Internet of Things
              <br /><span className="Detail-technology">►</span>Web & Mobile Application
              <br /><span className="Detail-technology">►</span>Network & Security
              <br />และร่วมโหวตโครงงานที่ท่านชื่นชอบได้ภายในงาน เพื่อเป็นกำลังใจและสนับสนุนให้โครงงานของนักศึกษาเข้าสู่รอบการประกวดต่อไป
              
            </p>  
          </div>
        </div>
      </Element>
    );
  }
}

export default Detail;
