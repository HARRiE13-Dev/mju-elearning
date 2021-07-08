<template>
  <div>
    <div class="position-relative">
      <section class="section-shaped my-0">
        <div class="shape shape-style-1 shape-default">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div class="container shape-container d-flex">
          <div class="col px-0"></div>
        </div>
      </section>

      <section class="section section-shaped my-0 overflow-hidden">
        <div class="container pb-80">
          <div class="row justify-content-center">
            <div class="fontx col-lg-10">
              <!-- -------------------------------- -->
              <div class="rem2">
                <b>1. Facebook</b> เป็นโซเชียลยอดนิยมอันดับหนึ่งที่มีผู้ใช้มากที่สุด
                ไอเดียสำหรับการใช้เฟซบุ๊คในการทำงานก็คือ
                การสร้างกลุ่มสังคมเครือข่ายในที่ทำงาน
                เพื่อการทำงานร่วมกันเป็นทีม
                แลกเปลี่ยนไอเดียความคิดเห็นในเรื่องงาน
                การสอบถามปัญหาในงานกับเพื่อนร่วมงานหรือผู้รู้ การนำเสนอผลงานที่
                ต้องการฟีดแบค เป็นต้น
              </div>
              <div
                class="text-center font-italic col"
                @click="modals.modal1 = true"
              >
                <img src="/img/lesson6/5.png" width="20%" />
              </div>
              <modal :show.sync="modals.modal1">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  Facebook
                </h6>
                <img src="/img/lesson6/5.png" width="100%" />
              </modal>
              <br /><br />

              <div class="rem2">
                <b>2. Twitter</b> เหมาะสำหรับการรายงานสถานะความเคลื่อนไหวในการทำงาน
                การเผยแพร่ประชาสัมพันธ์เรื่องที่ต้องการจะประกาศให้ทราบ
                แจ้งข่าวสารกิจกรรมและโครงการต่าง ๆ
                เพื่ออัพเดทความเป็นไปให้ทราบเป็นระยะ ๆ เช่น
                เถ้าแก่จะตื่นมาด้วยความสบายใจเมื่อเห็นข้อความสั้น ๆ
                เหมือนพาดหัวข่าวใน timeline ตอนเช้าว่า
                งานที่มอบหมายให้ลูกจ้างกลับไปทำต่อที่บ้านเสร็จเรียบร้อยแล้ว
                ยามกะดึกที่เฝ้าโกดังรายงานความสงบเรียบร้อยทุก ๆ 20 นาที
                คนขับรถส่งสินค้าไปถึงท่าเรือได้ทันเวลา เป็นต้น
              </div>
              <div
                class="text-center font-italic col"
                @click="modals.modal2 = true"
              >
                <img src="/img/lesson6/6.png" width="20%" />
              </div>
              <modal :show.sync="modals.modal2">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  Twitter
                </h6>
                <img src="/img/lesson6/6.png" width="100%" />
              </modal>
              <br /><br />

              <div class="rem2">
                <b>3. Wiki</b> ใช้สำหรับจัดการความรู้ขององค์กร หรือทำ KM นั่นเอง
                โดยเปิดพื้นที่ให้พนักงานเ้ข้าไปเขียนบันทึกจัดเก็บไว้เป็นคลังความรู้ขององค์กร
                ให้คนทำงานได้สืบค้นและเรียนรู้ตามได้
                ใช้เป็นคู่มือในการทำงานก็ได้ ใช้เป็นแหล่งอ้างอิงในการแก้ไขปัญหา
                หรือตอบคำถามที่พบบ่อยก็ได้ พนักงานบางคนจะไม่มีวันถูกไล่ออกจากงาน
                เพราะเขาเป็นคนเขียน wiki ของที่ทำงาน
                เหมือนเป็นคัมภีร์ประจำออฟฟิศนั่นหมายความว่าความมั่นคงในงานของพนักงานก็สูงขึ้นด้วย
              </div>
              <div
                class="text-center font-italic col"
                @click="modals.modal3 = true"
              >
                <img src="/img/lesson6/7.png" width="20%" />
              </div>
              <modal :show.sync="modals.modal3">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  Wiki
                </h6>
                <img src="/img/lesson6/7.png" width="100%" />
              </modal>
              <br /><br />

              <div class="rem2">
                <b>4. Youtube </b>การถ่ายทอดผ่านวิดีโอ
                เป็นสิ่งที่ทำให้เกิดความเข้าใจได้ดีมากขึ้นกว่าการอ่านผ่านตัวหนังสือ
                ดังนั้น
                ไอเดียในการนำยูทูปมาใช้ในการฝึกอบรมหรือการสาธิตวิธีการทำงานจึงเป็นประโยชน์อย่างมาก
                ในการพัฒนาความรู้ทักษะของพนักงาน
                นอกจากนี้ยังสามารถใช้เป็นเครื่องมือในการสัมภาษณ์พนักงานได้อีกด้วย
                เช่น เมื่อมีผู้สมัครงานที่น่าสนใจจะรับเข้าทำงาน
                ก็ให้ผู้สมัครแนะนำตัวและตอบคำถามตามหัวข้อที่แจ้งไว้
                อัดวิดีโอส่งผ่านยูทูปมา ก็จะลดต้นทุนได้ทั้งสองฝ่าย
                ทั้งผู้สัมภาษณ์ และผู้ถูกสัมภาษณ์ เป็นต้น
              </div>
              <div
                class="text-center font-italic col"
                @click="modals.modal4 = true"
              >
                <img src="/img/lesson6/8.png" width="20%" />
              </div>
              <modal :show.sync="modals.modal4">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  Youtube
                </h6>
                <img src="/img/lesson6/8.png" width="100%" />
              </modal>
              <br /><br />

              <div class="rem2">
                <b>5. Foursquare</b> ใช้ในการบริหารจัดการเชิงพื้นที่
                เหมาะสำหรับองค์กรที่มีสาขาหลายแห่ง และมีการตรวจเยี่ยมพื้นที่
                เช่น เซลส์ที่ต้องไปพบลูกค้าต่างจังหวัด
                ก็เช็คอินเวลาไปถึงสถานที่นัดหมาย
                ทำให้ผู้จัดการหรือหัวหน้าทีมขายติดตามการเข้าพบลูกค้าตามแผนออกทริปได้
                หรือ การตรวจประเมินโดยออดิเตอร์ที่ต้องไปออดิทพนักงานประจำสาขา
                หรือตามห้างร้านต่าง ๆ
                ก็สามารถบันทึกข้อมูลการตรวจเยี่ยมในพื้นที่ต่าง ๆ
                ไว้ให้สำนักงานใหญ่ควบคุมดูแลหรือมอนิเตอร์ดูได้ เป็นต้น
              </div>
              <div
                class="text-center font-italic col"
                @click="modals.modal5 = true"
              >
                <img src="/img/lesson6/9.png" width="20%" />
              </div>
              <modal :show.sync="modals.modal5">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  Foursquare
                </h6>
                <img src="/img/lesson6/9.png" width="100%" />
              </modal>
              <br /><br />

              <div class="rem2">
                <b>6. Instagram </b>เน้นการโพสต์รูปภาพ แชร์รูปภาพเป็นหลัก
                เอามาประยุกต์ใช้ในการรายงานด้วยภาพ เช่น ภาพกิจกรรมต่าง ๆ
                การสัมมนา การประกวด การมอบของรางวัล การทำงานที่เสี่ยงอันตราย
                ชิ้่นงานที่ได้คุณภาพ ตัวอย่างของเสีย กิจกรรมนอกสถานที่
                การแข่งกีฬา การดูงาน การทำ 5ส. สภาพแวดล้อมในสถานประกอบการ ฯลฯ
                หรือนำมาใช้เป็นภาพประกอบในการแจ้งเรื่องร้องเรียน
                หรือข้อเสนอแนะไคเซ็น เป็นต้น
              </div>
              <div
                class="text-center font-italic col"
                @click="modals.modal6 = true"
              >
                <img src="/img/lesson6/10.png" width="20%" />
              </div>
              <modal :show.sync="modals.modal6">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  Instagram
                </h6>
                <img src="/img/lesson6/10.png" width="100%" />
              </modal>
              <br /><br />

              <div class="rem2">
                <b>7. Blog </b>เอาไว้ใช้เขียนบทความ
                หรือข้อความที่มีเนื้อหารายละเอียดมากหน่อย ซึ่งเฟซบุ๊ก
                หรือทวิตเตอร์มีข้อจำกัด สามารถเขียนรีวิว เขียนรายงาน
                เขียนบันทึกการทำงาน ข้อค้นพบ การแก้ไขปัญหาในงาน
                ซึ่งสามารถใส่ภาพประกอบได้
                เป็นการบันทึกข้อมูลที่เป็นหลักฐานอ้างอิงที่ดีไว้สำหรับประเมินผลการปฏิบัติงาน
                
              </div>
              <div
                class="text-center font-italic col"
                @click="modals.modal7 = true"
              >
                <img src="/img/lesson6/11.png" width="20%" />
              </div>
              <modal :show.sync="modals.modal7">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  Blog
                </h6>
                <img src="/img/lesson6/11.png" width="100%" />
              </modal>
              <br /><br />

              <div class="rem2">
                <b>8. Webboard </b>เอาไว้ตั้งกระทู้ สอบถามปัญหาในงาน หรือเรื่องต่าง ๆ
                ที่พนักงานสนใจ เช่น สวัสดิการพนักงาน นโยบาย กฎระเบียบข้อบังคับ
                ฯลฯ หรือเอาไว้ใช้ประกาศตำแหน่งงานว่างในองค์กร
                หรือตั้งกระทู้สำหรับระดมสมอง ประชันไอเดีย รับฟังข้อเสนอแนะ
                เป็นต้น
              </div>
              <div
                class="text-center font-italic col"
                @click="modals.modal8 = true"
              >
                <img src="/img/lesson6/12.png" width="20%" />
              </div>
              <modal :show.sync="modals.modal8">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  Webboard
                </h6>
                <img src="/img/lesson6/12.png" width="100%" />
              </modal>
              <br /><br />

              <div class="rem2">
                <b>9. Google Docs </b>นำมาใช้ในการจัดการไฟล์เอกสารร่วมกัน
                จะได้ไม่ยุ่งยากในการเซฟข้อมูลเป็นหลายไฟล์
                สามารถแก้ไขเอกสารร่วมกันได้
                แล้วเซฟเป็นไฟล์ที่อัพเดทล่าสุดเป็นไฟล์เดียว ทีมงานสามารถอัพโหลด
                ดาวน์โหลด ไฟล์งานไว้ในโฟลเดอร์กลางที่ทุกคนต้อง
              </div>
              <div
                class="text-center font-italic col"
                @click="modals.modal9 = true"
              >
                <img src="/img/lesson6/13.png" width="20%" />
              </div>
              <modal :show.sync="modals.modal9">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  Google Docs
                </h6>
                <img src="/img/lesson6/13.png" width="100%" />
              </modal>
              <br /><br />

              <div class="rem2">
                <b>10. Drop Box</b> มีประโยชน์คือ เป็นฮาร์ดดิสก์สำรองออนไลน์
                ไว้เก็บข้อมูลเผื่อฉุกเฉิน
                บางทีไปทำงานแต่ดันลืมหน่วยความจำสำรองไว้ที่บ้าน
                ก็สามารถดาวน์โหลดไฟล์ที่เก็บไว้ในดร็อปบ็อกซ์มาใช้งานได้อย่างทันท่วงที
                เป็นที่ฝากไฟล์ซึ่งสามารถแชร์กล่องเก็บข้อมูลให้ผู้อื่นใช้ร่วมกันได้ง่าย
              </div>
              <div
                class="text-center font-italic col"
                @click="modals.modal10 = true"
              >
                <img src="/img/lesson6/14.png" width="20%" />
              </div>
              <modal :show.sync="modals.modal10">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  Drop Box
                </h6>
                <img src="/img/lesson6/14.png" width="100%" />
              </modal>
              <br /><br />

              <div class="rem2">
                <b>11. Skype</b> เอาไว้ใช้งานเวลามีประชุมทางไกล
                ออนไลน์แบบเห็นหน้ากันเรียลไทม์ ต้นทุนต่ำแต่ระดับปฏิสัมพันธ์สูง
                นอกจากนี้ยังประยุกต์ใช้ในการนัดหมายสัมภาษณ์งานทางไกลได้ด้วย
                ทั้งผู้สัมภาษณ์และผู้ถูกสัมภาษณ์ต้องมีอุปกรณ์และเวลาที่ตรงกัน
                จำลองสถานการณ์และสิ่งแวดล้อมให้เหมือนเจอตัวจริง
              </div>
              <br>
              <div
                class="text-center font-italic col"
                @click="modals.modal11 = true"
              >
                <img src="/img/lesson6/15.png" width="20%" />
              </div>
              <modal :show.sync="modals.modal11">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  Skype
                </h6>
                <img src="/img/lesson6/15.png" width="100%" />
              </modal>
              <br /><br /><br />

              <h5>
                ตัวอย่าง เว็บไซต์ ที่ให้บริการ Social Network หรือ Social Media
              </h5>
              <p class="rem2">
                Google Group – เว็บไซต์ในรูปแบบ Social Networking
              </p>
              <div
                class="text-center font-italic col"
                @click="modals.modal12 = true"
              >
                <img src="/img/lesson6/16.png" width="60%" />
              </div>
              <modal :show.sync="modals.modal12">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  Google Group
                </h6>
                <img src="/img/lesson6/16.png" width="100%" />
              </modal>
              <br /><br />
              <p class="rem2">Wikipedia – เว็บไซต์ในรูปแบบข้อมูลอ้างอิง</p>
              <div
                class="text-center font-italic col"
                @click="modals.modal13 = true"
              >
                <img src="/img/lesson6/17.png" width="60%" />
              </div>
              <modal :show.sync="modals.modal13">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  Wikipedia
                </h6>
                <img src="/img/lesson6/17.png" width="100%" />
              </modal>
              <br /><br />
              <p class="rem2">MySpace – เว็บไซต์ในรูปแบบ Social Networking</p>
              <div
                class="text-center font-italic col"
                @click="modals.modal14 = true"
              >
                <img src="/img/lesson6/18.png" width="60%" />
              </div>
              <modal :show.sync="modals.modal14">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  MySpace
                </h6>
                <img src="/img/lesson6/18.png" width="100%" />
              </modal>
              <br /><br />
              <p class="rem2">MouthShut – เว็บไซต์ในรูปแบบ Product Reviews</p>
              <div
                class="text-center font-italic col"
                @click="modals.modal15 = true"
              >
                <img src="/img/lesson6/19.png" width="60%" />
              </div>
              <modal :show.sync="modals.modal15">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  MouthShut
                </h6>
                <img src="/img/lesson6/19.png" width="100%" />
              </modal>
              <br /><br />
              <p class="rem2">Yelp – เว็บไซต์ในรูปแบบ Product Reviews</p>
              <div
                class="text-center font-italic col"
                @click="modals.modal16 = true"
              >
                <img src="/img/lesson6/20.png" width="60%" />
              </div>
              <modal :show.sync="modals.modal16">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  Yelp
                </h6>
                <img src="/img/lesson6/20.png" width="100%" />
              </modal>
              <br /><br />
              <p class="rem2">Youmeo – เว็บที่รวม Social Network</p>
              <div
                class="text-center font-italic col"
                @click="modals.modal17 = true"
              >
                <img src="/img/lesson6/21.png" width="60%" />
              </div>
              <modal :show.sync="modals.modal17">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  Youmeo
                </h6>
                <img src="/img/lesson6/21.png" width="100%" />
              </modal>
              <br /><br />
              <p class="rem2">Last.fm – เว็บเพลงส่วนตัว Personal Music</p>
              <div
                class="text-center font-italic col"
                @click="modals.modal18 = true"
              >
                <img src="/img/lesson6/22.png" width="60%" />
              </div>
              <modal :show.sync="modals.modal18">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  Last.fm
                </h6>
                <img src="/img/lesson6/22.png" width="100%" />
              </modal>
              <br /><br />
              <p class="rem2">
                YouTube – เว็บไซต์ Social Networking และ แชร์วิดีโอ
              </p>
              <div
                class="text-center font-italic col"
                @click="modals.modal19 = true"
              >
                <img src="/img/lesson6/23.png" width="60%" />
              </div>
              <modal :show.sync="modals.modal19">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  YouTube
                </h6>
                <img src="/img/lesson6/23.png" width="100%" />
              </modal>
              <br /><br />
              <p class="rem2">Flickr – เว็บแชร์รูปภาพ</p>
              <div
                class="text-center font-italic col"
                @click="modals.modal20 = true"
              >
                <img src="/img/lesson6/24.png" width="60%" />
              </div>
              <modal :show.sync="modals.modal20">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  Flickr
                </h6>
                <img src="/img/lesson6/24.png" width="100%" />
              </modal>
              <br /><br />

              <h4>ข้อดี - ข้อเสีย Social Media</h4>
              <h5 class="rem2">ข้อดีของ Social Media</h5>
              <p class="rem5">
                – สามารถแลกเปลี่ยนข้อมูลความรู้ในสิ่งที่สนใจร่วมกันได้
              </p>
              <p class="rem5">
                –
                เป็นคลังข้อมูลความรู้ขนาดย่อมเพราะเราสามารถเสนอและแสดงความคิดเห็น
                แลกเปลี่ยนความรู้ หรือตั้งคำถามในเรื่องต่างๆ
                เพื่อให้บุคคลอื่นที่สนใจหรือมีคำตอบได้ช่วยกันตอบ
              </p>
              <p class="rem5">
                – ประหยัดค่าใช้จ่ายในการติดต่อสื่อสารกับคนอื่น สะดวกและรวดเร็ว
              </p>
              <p class="rem5">
                – เป็นสื่อในการนำเสนอผลงานของตัวเอง เช่น งานเขียน รูปภาพ
                วีดิโอต่างๆ เพื่อให้ผู้อื่นได้เข้ามารับชมและแสดงความคิดเห็น
              </p>
              <p class="rem5">
                – ใช้เป็นสื่อในการโฆษณา ประชาสัมพันธ์
                หรือบริการลูกค้าสำหรับบริษัทและองค์กรต่างๆ
                ช่วยสร้างความเชื่อมั่นให้ลูกค้า
              </p>
              <p class="rem5">
                – ช่วยสร้างผลงานและรายได้ให้แก่ผู้ใช้งาน เกิดการจ้างงานแบบใหม่ ๆ
                ขึ้น
              </p>
              <p class="rem5">
                – คลายเครียดได้สำหรับผู้ใช้ที่ต้องการหาเพื่อนคุยเล่นสนุก ๆ
              </p>
              <p class="rem5">– สร้างความสัมพันธ์ที่ดีจากเพื่อนสู่เพื่อนได้</p>
              <br />

              <h5 class="rem2">ข้อดีของ Social Media</h5>
              <p class="rem5">
                – เว็บไซต์ให้บริการบางแห่งอาจจะเปิดเผยข้อมูลส่วนตัวมากเกินไป
                หากผู้ใช้บริการไม่ระมัดระวังในการ
                กรอกข้อมูล
                อาจถูกผู้ไม่หวังดีนำมาใช้ในทางเสียหาย
                หรือละเมิดสิทธิส่วนบุคคลได้
              </p>
              <p class="rem5">
                – Social Network เป็นสังคมออนไลน์ที่กว้าง
                หากผู้ใช้รู้เท่าไม่ถึงการณ์หรือขาดวิจารณญาณ
                อาจโดนหลอกลวงผ่านอินเทอร์เน็ต
                หรือการนัดเจอกันเพื่อจุดประสงค์ร้าย
                ตามที่เป็นข่าวตามหน้าหนังสือพิมพ์
              </p>
              <p class="rem5">
                – เป็นช่องทางในการถูกละเมิดลิขสิทธิ์ ขโมยผลงาน หรือถูกแอบอ้าง
                เพราะ Social Network Service เป็นสื่อในการเผยแพร่ผลงาน
                รูปภาพต่างๆ ของเราให้บุคคลอื่นได้ดูและแสดงความคิดเห็น
              </p>
              <p class="rem5">
                – ข้อมูลที่ต้องกรอกเพื่อสมัครสมาชิกและแสดงบนเว็บไซต์ในรูปแบบ
                Social Network ยากแก่การตรวจสอบว่าจริงหรือไม่
                ดังนั้นอาจเกิดปัญหาเกี่ยวกับเว็บไซต์ที่กำหนดอายุการสมัครสมาชิก
                หรือการถูกหลอกโดยบุคคลที่ไม่มีตัวตนได้
              </p>
              <p class="rem5">
                – ผู้ใช้ที่เล่น social network
                และอยู่กับหน้าจอคอมพิวเตอร์เป็นเวลานานอาจสายตาเสียได้หรือบางคนอาจตาบอดได้
              </p>
              <p class="rem5">
                – ถ้าผู้ใช้หมกมุ่นอยู่กับ social network
                มากเกินไปอาจทำให้เสียการเรียนหรือผลการเรียนตกต่ำลงได้
              </p>
              <p class="rem5">– จะทำให้เสียเวลาถ้าผู้ใช้ ใช้งานอย่างไร้ประโยชน์</p>
              <br />

              <p class="rem5 text-justify">
                กล่าวโดยสรุปแล้ว สื่อสังคม หรือสื่อ Social Media
                เป็นสื่อทางการศึกษาเรียนรู้ในยุคแห่งสังคมออนไลน์ที่กำลังก้าวรุดหน้าไปอย่างรวดเร็วในการปรับใช้ในวงการศึกษา
                ดังนั้นผู้ที่มีส่วนเกี่ยวข้องทุกฝ่าย
                ต้องตระหนักและมองเห็นความสำคัญต่อสื่อดังกล่าวรวมทั้งการ
                กำหนดแนวทางของการปรับใช้ให้เหมาะสมกับสภาพการณ์ทางสังคมในปัจจุบัน
                ซึ่ง Social Media
                ในหลากหลายประเภทที่กล่าวถึงในเบื้องต้นนั้นคงเป็นสื่อการศึกษาที่ต้องเข้ามามีบทบาทสำคัญต่อการศึกษาเรียนรู้ในสังคมอย่างแน่นอนจึงเป็นประเด็นสำคัญที่ทุกฝ่ายต้องตระหนักและเตรียมรับการเปลี่ยนแปลงที่เกิดขึ้น
              </p>
              <br />
              <h4>การใช้งาน สังคมออนไลน์อย่างปลอดภัย</h4>
              <p class="rem2 text-justify">
                ความเสี่ยงจากการใช้งานสื่อสังคมออนไลน์มีผู้เชี่ยวชาญด้าน
                Security หลาย ๆ ท่านกล่าวเอาไว้ว่า
                ถ้าอยากจะมีชีวิตปลอดภัยในการใช้งานคอมพิวเตอร์ในโลกอินเตอร์เน็ตก็ให้ตัดการเชื่อมต่อกับอินเตอร์เน็ตซะแล้วทำงานแบบสแตนด์อะโลนแทน
                แต่นั่นก็ยังไม่สามารถจะทำให้มั่นใจได้ว่าคุณจะมีความปลอดภัย
                จะให้ดีก็ต้องปิดพอร์ตไอโอทั้งหมดด้วยเพื่อจะได้ไม่มีการรับไฟล์ที่ไม่ปลอดภัยเข้ามา
                ดังนั้นถ้าจะใช้สื่อสังคมออนไลน์ให้ปลอดภัยก็ไม่ควรจะรับ Add
                Friend ไม่ควรจะโพสต์ข้อมูลใด ๆ เลย
                และที่สำคัญคือไม่ควรจะใส่ข้อมูลใด ๆ เกี่ยวกับตัวเองลงไป
                ซึ่งก็มีหลายคนพูดกันว่าถ้าจะต้องทำกันถึงขนาดนั้นก็ให้เลิกใช้อินเตอร์เน็ตหรือเฟซบุ๊กกันไปเลยดีกว่า
              </p>
              <p class="rem2 text-justify">
                เพื่อให้เราสามารถใช้สื่อสังคมออนไลน์อย่างเช่นเฟซบุ๊กอย่างปลอดภัย
                การประเมินความเสี่ยงจึงเป็นเครื่องมือสำคัญที่ช่วยให้เราสามารถใช้ชีวิตร่วมกับสื่อสังคมออนไลน์ได้อย่างสบายใจ
                เพราะการปฏิเสธไม่ใช้สื่อสังคมออนไลน์สำหรับคนในยุคนี้คงจะเป็นไปไม่ได้
                ดังนั้นการประเมินว่าพฤติกรรมใดที่จะก่อให้เกิดความเสี่ยงกับตัวเราบ้าง
                ก็จะทำให้เราสามารถปรับพฤติกรรมในการใช้สื่อสังคมออนไลน์ให้มีความปลอดภัยแก่ตนเอง
              </p>
              <p class="rem2 text-justify">
                ก่อนอื่นเราก็ควรจะรู้ก่อนว่าภัยในการใช้สื่อสังคมออนไลน์ในปัจจุบันมีอะไรบ้าง
                และมีผลกระทบต่อผู้ใช้สื่อสังคมออนไลน์อย่างเรา ๆ ท่าน ๆ
                อย่างไรบ้าง เพื่อจะได้เตรียมการป้องกันอย่างถูกต้อง
                โดยตัวอย่างต่อไปนี้เป็นแค่บางส่วนของภัยจากสื่อสังคมออนไลน์ที่มีการ
                กล่าวถึงอย่างทั่วไปในปัจจุบัน
              </p>
              <br />
              <p class="rem2 font-weight-bold">การเปิดเผยข้อมูลทางธุรกิจ</p>
              <p class="rem5 text-justify">
                ถือเป็นข้อมูลที่เป็นเป้าหมายหลักของผู้ไม่ประสงค์ดีต้องการ
                ซึ่งบางครั้งเราก็อาจจะโพสต์ข้อมูลของบริษัทออกไปโดยที่เราไม่ทันคิดว่าจะทำให้เกิดอะไรที่เป็นผลเสียต่อบริษัทแต่ก็อาจจะทำให้คู่แข่งเอามาใช้โจมตีเราได้
                เช่น การโพสต์ข้อความว่า กำลังปิดดีลในการควบกิจการกับบริษัท ABC
                ในวันพรุ่งนี้ หลังจากนั้นจะได้ไปเที่ยวกับครอบครัวแล้ว
                ดูเหมือนเป็นการโพสต์ยินดีกับตัวเองเท่านั้น
                แต่อาจจะทำให้เกิดการปั่นราคาหุ้นขึ้นได้
                ดีไม่ดีอาจจะถูกจับข้อหาปั่นหุ้นก็ได้ หรือการโพสต์ข้อความว่า
                ระบบล่มเป็นครั้งที่สามในรอบวันแล้ว
                คืนนี้จะได้กลับบ้านกี่โมงกันล่ะเนี่ย ดูเหมือนเป็นการบ่นธรรมดา
                แต่ผลที่เกิดขึ้นกับบริษัทกลับทำให้ภาพพจน์ของบริษัทดูแย่ไปเลย
                เพราะคนที่เห็นจะรู้สึกว่าระบบของบริษัทเรานั้นไม่มีความเสถียรเลย
                ทำให้ไม่มั่นใจที่จะใช้สินค้าหรือบริการของบริษัท
                หรือแม้แต่การโพสต์ว่า กำลังทำแคมเปญใหม่ที่จะออกตัวในอาทิตย์หน้า
                ดูเหมือนจะเป็นข้อความที่ไม่มีอะไรเลย
                เพราะไม่ได้บอกว่าจะออกแคมเปญอะไร
                แต่การบอกกำหนดการออกไปก็จะทำให้คู่แข่งออกแคมเปญใหม่มาตัดหน้าเพื่อแย่งลูกค้าก่อนก็ได้
                ดังนั้นจะเห็นได้ว่าเราไม่ควรที่จะโพสต์ข้อมูลบริษัทไม่ว่ากรณีใด ๆ
                เพราะจะทำให้เกิดความเสียหายแก่บริษัทโดยไม่รู้ตัวนั่นเอง
              </p>
              

              <!-- -------------------------------- -->
              <br />
              <br />
              <br />
              <br />
              <div class="container">
                <div class="row">
                  <div class="col-auto mr-auto">
                    <router-link to="/lesson6_1" title="Lesson6_1 Page">
                      <div class="btn-wrapper">
                        <base-button
                          tag="a"
                          target="_blank"
                          rel="noopener noreferrer"
                          class="mb-3 mb-sm-0"
                          outline
                          type="info"
                          icon="fa fa-chevron-left"
                          >ย้อนกลับ</base-button
                        >
                      </div>
                    </router-link>
                  </div>
                  <div class="col text-center">
                    <div class="btn-wrapper">
                      <base-button
                        id="back-to-top"
                        href="#"
                        role="button"
                        tag="a"
                        rel="noopener noreferrer"
                        class="btn  back-to-top"
                        outline
                        type="info"
                      >
                        <i class="fa fa-chevron-up" aria-hidden="true"></i>
                      </base-button>
                    </div>
                  </div>
                  <div class="col-auto">
                    <router-link to="/lesson6_3" title="Lesson6_3 Page">
                      <div class="btn-wrapper">
                        <base-button
                          tag="a"
                          target="_blank"
                          rel="noopener noreferrer"
                          class="mb-3 mb-sm-0"
                          outline
                          type="info"
                        >
                          ถัดไป
                          <i class="fa fa-chevron-right" aria-hidden="true"></i>
                        </base-button>
                      </div>
                    </router-link>
                  </div>
                </div>
              </div>
              <div class="text-center mt-5">Page 2/4</div>
            </div>
          </div>
        </div>
      </section>

      <hr />
      <div class="col-lg-center">
        <div class="pt-4 text-center">
          <h5 class="title">
            <span class="d-block mb-1">Author | Dr. Ukrit Marang</span>
            <small class="h6 text-black"
              >Lecturer in The Business Information System at Maejo
              University</small
            >
          </h5>
        </div>
      </div>
      <hr />
    </div>
  </div>
</template>

<script>
import Modal from "@/components/Modal.vue";
export default {
  name: "home",
  components: {
    Modal,
  },
  data() {
    return {
      modals: {
        modal1: false,
        modal2: false,
        modal3: false,
        modal4: false,
        modal5: false,
        modal6: false,
        modal7: false,
        modal8: false,
        modal9: false,
        modal10: false,
        modal11: false,
        modal12: false,
        modal13: false,
        modal14: false,
        modal15: false,
        modal16: false,
        modal17: false,
        modal18: false,
        modal19: false,
        modal20: false,
      },
    };
  },
};
</script>

<style></style>
