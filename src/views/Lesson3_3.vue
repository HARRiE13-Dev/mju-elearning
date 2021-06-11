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
        <div class="container pt-lg pb-80">
          <div class="row justify-content-center">
            <div class="fontx col-lg-10">
              <!-- -------------------------------- -->
              <h5 class="rem2">
                3.4.7 การทำอินโฟกราฟิกด้วยโปรแกรม Microsoft PowerPoint
              </h5>
              <p class="rem2">
                Infographic ย่อมาจากคำว่า Information Graphic หมายถึง
                การนำข้อมูลหรือสารสนเทศ ที่เป็นตัวเลขหรือไม่เป็นตัวเลข
                มาจัดทำให้เป็นภาพกราฟิกทั้งที่เป็นภาพนิ่งหรือภาพเคลื่อนไหว
                ผู้ดูสามารถที่เข้าใจได้ง่าย ในเวลาอันรวดเร็ว
                ปัจจุบันอินโฟกราฟิกเป็นที่นิยมอย่างมากบน Social Network
              </p>
              <p class="rem2">
                การนำเสนอแบบอินโฟกราฟิกจะช่วยดึงดูดความสนใจของผู้อ่าน
                แต่ผู้นำเสนอจะต้องมีการออกแบบอินโฟกราฟิกในรูปแบบใหม่ๆ อยู่เสมอ
                เพื่อให้มีความน่าสนใจ หากผู้ใช้งาน PowerPoint
                เห็นว่าการทำอินโฟกราฟิกเป็นเรื่องยาก ก็สามารถหาอินโฟกราฟิกฟรีจาก
                Free Infographic Templates in PowerPoint บนอินเทอร์เน็ต
                ที่มีแม่แบบอินโฟกราฟิกที่สามารถดาวน์โหลดมาใช้งานได้
              </p>
              <br />
              <div
                class="text-center font-italic"
                @click="modals.modal1 = true"
              >
                <img src="/img/lesson3/23.png" width="60%" />
                <p>
                  <br />ภาพที่ 23 ตัวอย่างอินโฟกราฟิกกราฟแท่ง (ด้านซ้าย)
                  เปรียบเทียบกับ กราฟวงแหวน (ด้านขวา)
                </p>
              </div>
              <modal :show.sync="modals.modal1">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  ภาพที่ 23 ตัวอย่างอินโฟกราฟิกกราฟแท่ง (ด้านซ้าย)
                  เปรียบเทียบกับ กราฟวงแหวน (ด้านขวา)
                </h6>
                <img src="/img/lesson3/23.png" width="100%" />
              </modal>
              <br />
              <p class="rem2 text-justify">
                โปรแกรม PowerPoint มีเครื่องมือ เช่น กราฟ รูปทรงเรขาคณิตต่างๆ
                และ SmartArt Graphic ตลอดจนเอฟเฟ็คพิเศษ
                ที่สามารถนำมาใช้ในการสร้างอินโฟกราฟิกได้
                แต่การทำอินโฟกราฟิกให้ดีและน่าสนใจนั้น
                ขึ้นอยู่กับทักษะการใช้โปรแกรม PowerPoint
                และความคิดสร้างสรรค์ของผู้ใช้งาน ขึ้นตอนหลักๆ ในการทำอินโฟกราฟิก
                มีดังต่อไปนี้
              </p>

              <p class="rem2">
                1)
                กำหนดกลุ่มเป้าหมายของสื่ออินโฟกราฟิกหรือผู้ที่เราอยากจะสื่อสารเนื้อหาด้วยอินโฟกราฟิกนั้นให้ชัดเจนตั้งแต่ต้น
                เช่น กลุ่มอาชีพ อายุ เพศ การศึกษา และความชอบ เป็นต้น
                เพื่อจะได้ออกแบบองค์ประกอบของอินโฟกราฟิกหรือใช้ภาษาที่เหมาะสมที่สามารถเข้าถึงกลุ่มเป้าหมายได้มากที่สุด
              </p>
              <p class="rem2">
                2)
                กำหนดวัตถุประสงค์ของอินโฟกราฟิกให้ชัดเจนว่าอยากให้กลุ่มเป้าหมายได้อะไรจากอินโฟกราฟิก
                ได้ความรู้ ทัศนะคติหรือพฤติกรรมอะไร
              </p>
              <p class="rem2">
                3) การจัดเตรียมเนื้อหาและสรุปเนื้อหาที่ต้องการสื่อสาร
                โดยอาจต้องหาข้อมูลจากหลายแหล่งเพื่อความครบถ้วนถูกต้อง
                โดยเฉพาะหากเป็นข้อมูลตัวเลขหรือข้อมูลเชิงสถิติ
                ต้องตรวจสอบความถูกต้องและความน่าเชื่อถือของข้อมูลว่ามาจากแหล่งใด
                น่าเชื่อถือมากน้อยเพียงใด จากนั้นนำมาสรุปเป็นสารสนเทศ อาทิ
                นำมาจัดหมวดหมู่ตามประเด็นที่ต้องการนำเสนอ
                โดยนำข้อมูลที่สำคัญมาใช้ในการแสดงผล
                จากนั้นก็พร้อมที่จะนำมาสร้างเป็น Infographic ที่มีความน่าสนใจ
                และสามารถนำเสนอข้อมูลให้เข้าใจง่าย
              </p>
              <p class="rem2">
                4) ร่างแบบและจัดทำเลย์เอาท์
                นำสาระสำคัญที่สรุปไว้มาจัดทำเป็นกราฟิกตามความคิดสร้างสรรค์
                โดยอาจร่างคร่าวๆ ด้วยมือในกระดาษก่อน
              </p>
              <p class="rem2">
                5) นำแนวคิดที่ร่างไว้มาจัดทำเป็นภาพกราฟิกใน PowerPoint
                โดยใช้ฟอนต์กับขนาดตัวหนังสือที่อ่านง่าย ใช้เทคนิคทางสี
                การจัดวางหรือการซ้อนทับของรูปทรงต่างๆ
                มีการสร้างจุดเน้นจุดเด่นในส่วนที่สำคัญ
                และอาจค้นหารูปที่สื่อความหมายจากอินเทอร์มาประกอบ
                พร้อมทั้งใส่หัวข้อให้ดึงดูดใจ ตัวอย่างการทำอินโฟกราฟิกใน
                PowerPoint ดังภาพที่ 24 - ภาพที่ 31
              </p>
              <br />
              <div class="container">
                <div class="row">
                  <div
                    class="text-center font-italic col"
                    @click="modals.modal2 = true"
                  >
                    <img src="/img/lesson3/24.png" width="100%" />
                    <p>
                      <br />ภาพที่ 24 - การ insert chart
                      เพื่อทำเป็นกราฟแท่งแบบธรรมดา
                    </p>
                  </div>
                  <modal :show.sync="modals.modal2">
                    <h6
                      slot="header"
                      class="modal-title"
                      id="modal-title-default"
                    >
                      ภาพที่ 24 - การ insert chart เพื่อทำเป็นกราฟแท่งแบบธรรมดา
                    </h6>
                    <img src="/img/lesson3/24.png" width="100%" />
                  </modal>
                  <br />
                  <div
                    class="text-center font-italic col"
                    @click="modals.modal3 = true"
                  >
                    <img src="/img/lesson3/25.png" width="100%" />
                    <p>
                      <br />ภาพที่ 25 – การเปลี่ยนกราฟแท่งเป็นกราฟวงกลมแบบโดนัท
                      เพื่อนำไปจัดทำเป็นอินโฟกราฟิก
                    </p>
                  </div>
                  <modal :show.sync="modals.modal3">
                    <h6
                      slot="header"
                      class="modal-title"
                      id="modal-title-default"
                    >
                      ภาพที่ 25 – การเปลี่ยนกราฟแท่งเป็นกราฟวงกลมแบบโดนัท
                      เพื่อนำไปจัดทำเป็นอินโฟกราฟิก
                    </h6>
                    <img src="/img/lesson3/25.png" width="100%" />
                  </modal>
                  <br />
                  <div
                    class="text-center font-italic col"
                    @click="modals.modal4 = true"
                  >
                    <img src="/img/lesson3/26.png" width="100%" />
                    <p>
                      <br />ภาพที่ 26 –
                      การปรับเปลี่ยนสีในกราฟเพื่อให้มีความสดใสมากขึ้น
                    </p>
                  </div>
                  <modal :show.sync="modals.modal4">
                    <h6
                      slot="header"
                      class="modal-title"
                      id="modal-title-default"
                    >
                      ภาพที่ 26 –
                      การปรับเปลี่ยนสีในกราฟเพื่อให้มีความสดใสมากขึ้น
                    </h6>
                    <img src="/img/lesson3/26.png" width="100%" />
                  </modal>
                </div>
                <br />
                <div class="row">
                  <div
                    class="text-center font-italic col"
                    @click="modals.modal5 = true"
                  >
                    <img src="/img/lesson3/27.png" width="100%" />
                    <p>
                      <br />ภาพที่ 27 -
                      ขั้นตอนการทำอินโฟกราฟิกโดยการนำรูปวงกลมมาซ้อนทำเป็นขอบเพื่อให้ดูมีมิติ
                    </p>
                  </div>
                  <modal :show.sync="modals.modal5">
                    <h6
                      slot="header"
                      class="modal-title"
                      id="modal-title-default"
                    >
                      ภาพที่ 27 -
                      ขั้นตอนการทำอินโฟกราฟิกโดยการนำรูปวงกลมมาซ้อนทำเป็นขอบเพื่อให้ดูมีมิติ
                    </h6>
                    <img src="/img/lesson3/27.png" width="100%" />
                  </modal>
                  <br />
                  <div
                    class="text-center font-italic col"
                    @click="modals.modal6 = true"
                  >
                    <img src="/img/lesson3/28.png" width="100%" />
                    <p>
                      <br />ภาพที่ 28 – การนำวงกลมสีขาวมาซ้อนทับตรงกลาง
                      และการใช้รูปสี่เหลี่ยมมาซ้อนทับเพื่อสร้างจุดเน้นจุดเด่น
                    </p>
                  </div>
                  <modal :show.sync="modals.modal6">
                    <h6
                      slot="header"
                      class="modal-title"
                      id="modal-title-default"
                    >
                      ภาพที่ 28 – การนำวงกลมสีขาวมาซ้อนทับตรงกลาง
                      และการใช้รูปสี่เหลี่ยมมาซ้อนทับเพื่อสร้างจุดเน้นจุดเด่น
                    </h6>
                    <img src="/img/lesson3/28.png" width="100%" />
                  </modal>
                  <br />
                  <div
                    class="text-center font-italic col"
                    @click="modals.modal7 = true"
                  >
                    <img src="/img/lesson3/29.png" width="120%" />
                    <p>
                      <br />ภาพที่ 29 - การเพิ่ม label ให้มีทั้งข้อความและตัวเลข
                    </p>
                  </div>
                  <modal :show.sync="modals.modal7">
                    <h6
                      slot="header"
                      class="modal-title"
                      id="modal-title-default"
                    >
                      ภาพที่ 29 - การเพิ่ม label ให้มีทั้งข้อความและตัวเลข
                    </h6>
                    <img src="/img/lesson3/29.png" width="120%" />
                  </modal>
                  <br />
                </div>
                <br />
                <div class="row">
                  <div
                    class="text-center font-italic col"
                    @click="modals.modal8 = true"
                  >
                    <img src="/img/lesson3/30.png" width="100%" />
                    <p>
                      <br />ภาพที่ 30 –
                      การดาวน์โหลดภาพจากอินเทอร์เน็ตมาใช้ประกอบการทำอินโฟกราฟิก
                    </p>
                  </div>
                  <modal :show.sync="modals.modal8">
                    <h6
                      slot="header"
                      class="modal-title"
                      id="modal-title-default"
                    >
                      ภาพที่ 30 –
                      การดาวน์โหลดภาพจากอินเทอร์เน็ตมาใช้ประกอบการทำอินโฟกราฟิก
                    </h6>
                    <img src="/img/lesson3/30.png" width="100%" />
                  </modal>
                  <br />
                  <div
                    class="text-center font-italic col"
                    @click="modals.modal9 = true"
                  >
                    <img src="/img/lesson3/31.png" width="120%" />
                    <p>
                      <br />ภาพที่ 31
                      –อินโฟกราฟิกนำเสนอข้อมูลสถิติจำนวนชั่วโมงที่คนไทยใช้เวลากับสื่อในแต่ละวันในปี
                      พ.ศ.2563
                    </p>
                  </div>
                  <modal :show.sync="modals.modal9">
                    <h6
                      slot="header"
                      class="modal-title"
                      id="modal-title-default"
                    >
                      ภาพที่ 31
                      –อินโฟกราฟิกนำเสนอข้อมูลสถิติจำนวนชั่วโมงที่คนไทยใช้เวลากับสื่อในแต่ละวันในปี
                      พ.ศ.2563
                    </h6>
                    <img src="/img/lesson3/31.png" width="100%" />
                  </modal>
                  <br />
                </div>
              </div>

              <br />
              <h4>การใช้ SmartArt Graphic ในการทำอินโฟกราฟิก</h4>
              <p class="rem2">
                โปรแกรม Microsoft PowerPoint มีเครื่องมือในชุด SmartArt Graphic
                จัดเป็นหมวดหมู่ที่มีโครงสร้างกราฟิกหลากหลายรูปแบบ
                ที่ผู้ใช้สามารถนำมาประยุกต์ในการสร้างอินโฟกราฟิกที่สวยงามและน่าสนใจได้
              </p>
              <br />
              <div
                class="text-center font-italic"
                @click="modals.modal10 = true"
              >
                <img src="/img/lesson3/32.png" width="60%" />
                <p>
                  <br />ภาพที่ 32 - โครงสร้างกราฟิกในชุด SmartArt Graphic ของ
                  PowerPoint
                </p>
              </div>
              <modal :show.sync="modals.modal10">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  ภาพที่ 32 - โครงสร้างกราฟิกในชุด SmartArt Graphic ของ
                  PowerPoint
                </h6>
                <img src="/img/lesson3/32.png" width="100%" />
              </modal>
              <br />
              <div
                class="text-center font-italic"
                @click="modals.modal11 = true"
              >
                <img src="/img/lesson3/33.jpg" width="80%" />
                <p>
                  <br />ภาพที่ 33 - ตัวอย่างอินโฟกราฟิกที่ได้จากการประยุกต์ใช้
                  SmartArt Graphic
                </p>
              </div>
              <modal :show.sync="modals.modal11">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  ภาพที่ 33 - ตัวอย่างอินโฟกราฟิกที่ได้จากการประยุกต์ใช้
                  SmartArt Graphic
                </h6>
                <img src="/img/lesson3/33.jpg" width="100%" />
              </modal>
              <br />
              <p class="rem2">
                ผู้ใช้สามารถแปลงข้อความที่จัดหมวดหมู่ไว้ให้เป็นกราฟิกโดยใช้เครื่องมือ
                SmartArt Graphic
                โดยเตรียมข้อความเป็นหมวดหมู่และจัดลำดับหัวข้อใหญ่/หัวข้อย่อย
                ดังตัวอย่างต่อไปนี้
              </p>
              <br />
              <div
                class="text-center font-italic"
                @click="modals.modal12 = true"
              >
                <img src="/img/lesson3/34.png" width="60%" />
                <p><br />ภาพที่ 34 - จัดเตรียมข้อความที่จะทำเป็นอินโฟกราฟิก</p>
              </div>
              <modal :show.sync="modals.modal12">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  ภาพที่ 34 - จัดเตรียมข้อความที่จะทำเป็นอินโฟกราฟิก
                </h6>
                <img src="/img/lesson3/34.png" width="100%" />
              </modal>
              <br />
              <p class="rem2 text-justify">
                เมื่อเตรียมข้อความเรียบร้อยแล้ว ไปที่ Home ใน Paragraph Group
                คลิกที่ Covert to SmartArt
                เมื่อใช้เม้าส์คลิกไปยังรูปแบบใดรูปแบบหนึ่งจะปรากฏภาพกราฟิกของข้อความในรูปแบบนั้น
                ให้เลือกรูปแบบที่เหมาะสมและตรงตามความต้องการ
                เมื่อเลือกรูปแบบที่ต้องการเลือก
                ผู้ใช้สามารถตกแต่งกราฟิกได้ตามต้องการ เช่น เปลี่ยนธีม
                เปลี่ยนสีตัวอักษร ปรับขนาดของรูปทรงและขนาดของฟอนต์ และ insert
                ภาพเข้าไป เป็นต้น
              </p>
              <br />
              <div class="container">
                <div class="row">
                  <div
                    class="text-center font-italic col"
                    @click="modals.modal13 = true"
                  >
                    <img src="/img/lesson3/35.png" width="90%" />
                    <p>
                      <br />ภาพที่ 35 – การ convert ข้อความเป็นอินโฟกราฟิกโดยใช้
                      SmartArt
                    </p>
                  </div>
                  <modal :show.sync="modals.modal13">
                    <h6
                      slot="header"
                      class="modal-title"
                      id="modal-title-default"
                    >
                      ภาพที่ 35 – การ convert ข้อความเป็นอินโฟกราฟิกโดยใช้
                      SmartArt
                    </h6>
                    <img src="/img/lesson3/35.png" width="100%" />
                  </modal>
                  <br />
                  <div
                    class="text-center font-italic col"
                    @click="modals.modal14 = true"
                  >
                    <img src="/img/lesson3/36.png" width="100%" />
                    <p>
                      <br />ภาพที่ 36 –รูปแบบที่เลือก และธีมที่เป็นสีชุดต่าง ๆ
                    </p>
                  </div>
                  <modal :show.sync="modals.modal14">
                    <h6
                      slot="header"
                      class="modal-title"
                      id="modal-title-default"
                    >
                      ภาพที่ 36 –รูปแบบที่เลือก และธีมที่เป็นสีชุดต่าง ๆ
                    </h6>
                    <img src="/img/lesson3/36.png" width="100%" />
                  </modal>
                </div>
              </div>
              <br />
              <p class="rem2">
                หากยังไม่ชอบรูปแบบของอินโฟกราฟิกที่ได้ ผู้ใช้สามารถเปลี่ยน
                Layout ได้อย่างง่ายดาย โดยไปที่ Drawing Tools ------> Layout
                จากนั้นเลือก Layout ที่เห็นว่าเหมาะสมและตรงตามความต้องการ
              </p>
              <br />
              <div class="container">
                <div class="row">
                  <div
                    class="text-center font-italic col"
                    @click="modals.modal15 = true"
                  >
                    <img src="/img/lesson3/37.png" width="90%" />
                    <p><br />ภาพที่ 37 – ภาพอินโฟกราฟิกหลังจากปรับแต่ง</p>
                  </div>
                  <modal :show.sync="modals.modal15">
                    <h6
                      slot="header"
                      class="modal-title"
                      id="modal-title-default"
                    >
                      ภาพที่ 37 – ภาพอินโฟกราฟิกหลังจากปรับแต่ง
                    </h6>
                    <img src="/img/lesson3/37.png" width="100%" />
                  </modal>
                  <br />
                  <div
                    class="text-center font-italic col"
                    @click="modals.modal16 = true"
                  >
                    <img src="/img/lesson3/38.png" width="100%" />
                    <p><br />ภาพที่ 38 – การปรับเปลี่ยน Layout เป็นแบบใหม่</p>
                  </div>
                  <modal :show.sync="modals.modal16">
                    <h6
                      slot="header"
                      class="modal-title"
                      id="modal-title-default"
                    >
                      ภาพที่ 38 – การปรับเปลี่ยน Layout เป็นแบบใหม่
                    </h6>
                    <img src="/img/lesson3/38.png" width="100%" />
                  </modal>
                </div>
              </div>
              <br /><br />
              <h5>สรุป</h5>
              <p class="rem2 text-justify">
                โปรแกรม Microsoft PowerPoint
                เป็นโปรแกรมสำหรับการสร้างงานนำเสนอที่มีประสิทธิภาพ
                ผู้ใช้สามารถเรียนรู้การใช้งานขั้นพื้นฐานได้ไม่ยาก
                นอกจากนี้ยังมีเครื่องมือ เทคนิคและเอฟเฟ็คต่างๆ
                มากมายให้ผู้ใช้สามารถเลือกนำไปใช้ในการสร้างงานนำเสนอให้มีความน่าสนใจได้ตามความต้องการ
                สามารถนำเสนอได้ทั้งข้อความ ภาพนิ่ง ภาพเคลื่อนไหว เสียงและวิดีโอ
                และที่โดดเด่น คือ
                มีเครื่องมืออย่างหลากหลายสำหรับให้ผู้ใช้นำไปทำอินโฟกราฟิก
                เพื่อการนำเสนอให้มีความน่าสนใจ รวมทั้ง SmartArt
                ที่อำนวยความสะดวกให้ผู้ใช้สามารถทำอินโฟกราฟิกได้อย่างง่ายดาย
                อย่างไรก็ตามการสร้างงานนำเสนอที่มีประสิทธิภาพ
                รวมทั้งการสร้างสรรค์อินโฟกราฟิกที่สวยงาม
                น่าสนใจและสื่อความหมายได้ดีนั้น นอกจากเนื้อหาสาระแล้ว
                ยังขึ้นอยู่กับความสามารถและทักษะการใช้งานโปรแกรม Microsoft
                PowerPoint ตลอดจนความคิดสร้างสรรค์ของผู้สร้างงานนำเสนอ
                ดังนั้นผู้ที่สนใจ ควรมั่นศึกษาหาความรู้และเทคนิคการใช้งานโปรแกรม
                และมั่นฝึกฝนการใช้งานอยู่เสมอ
                เพื่อจะสามารถสร้างงานนำเสนอให้มีความน่าสนใจและมีประสิทธิภาพมากยิ่งขึ้น
              </p>
              <!-- -------------------------------- -->
              <br />
              <br />
              <br />
              <br />
              <div class="container">
                <div class="row">
                  <div class="col-auto mr-auto">
                    <router-link to="/lesson3_2" title="Lesson3_2 Page">
                      <div class="btn-wrapper">
                        <base-button
                          tag="a"
                          target="_blank"
                          rel="noopener noreferrer"
                          class="mb-3 mb-sm-0"
                          outline
                          type="info"
                          icon="fa fa-chevron-left"
                          >Previous</base-button
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
                    <router-link to="/lesson4_1" title="Lesson4_1 Page">
                      <div class="btn-wrapper">
                        <base-button
                          tag="a"
                          target="_blank"
                          rel="noopener noreferrer"
                          class="mb-3 mb-sm-0"
                          outline
                          type="info"
                        >
                          Continue
                          <i class="fa fa-chevron-right" aria-hidden="true"></i>
                        </base-button>
                      </div>
                    </router-link>
                  </div>
                </div>
              </div>
              <div class="text-center mt-5">Page 3/3</div>
            </div>
          </div>
        </div>
      </section>

      <hr />
      <div class="col-lg-center">
        <div class="pt-4 text-center">
          <h5 class="title">
            <span class="d-block mb-1">Author | Dr.Udomluk Thampunya</span>
            <small class="h6 text-black"
              >Lecturer in the Digital Communications at Maejo University</small
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
