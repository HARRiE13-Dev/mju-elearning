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
              <h5>3.2. วิธีการใช้งานเบื้องต้น</h5>
              <p class="font-weight-bold rem2">1) การสร้างเอกสาร</p>
              <div class="rem2 text-justify">
                เมื่อผู้ใช้เข้าสู่บริการกูเกิลเอกสารแล้ว
                จะพบกับหน้าแสดงรายการเอกสารที่เคยสร้างไว้ (หากมี)
                ซึ่งผู้ใช้สามารถกดสร้างเอกสารใหม่ได้ที่ปุ่ม <b>“สร้างเอกสารใหม่”</b>
                ตรงมุมล่างขวาของเว็บเบราว์เซอร์ ดังรูปที่ 6 ซึ่ง
                จะได้เอกสารเปล่าขึ้นมา 1 ไฟล์
                ดังที่ได้อธิบายรายละเอียดไว้ในรูปที่ 4
                หรือหากผู้ใช้อยู่ในระหว่างแก้ไขเอกสารใดๆ อยู่
                และต้องการที่จะสร้างไฟล์อื่นเพิ่มเติม
                สามารถทำได้ด้วยการเข้าที่เมนู <b>“ไฟล์” -> “ใหม่” ->
                จากนั้นเลือกประเภทเอกสารที่ต้องการสร้าง </b>ดังรูปที่ 6(b)
              </div>
              <br />
              <br />
              <div class="container">
                <div class="row">
                  <div
                    class="text-center font-italic col-sm"
                    @click="modals.modal1 = true"
                  >
                    <img src="/img/lesson1/p6a.png" width="100%" />
                    <p><br />รูปที่ 6 (a) ปุ่มสร้างเอกสารใหม่</p>
                  </div>
                  <modal :show.sync="modals.modal1">
                    <h6
                      slot="header"
                      class="modal-title"
                      id="modal-title-default"
                    >
                      รูปที่ 6 (a) ปุ่มสร้างเอกสารใหม่
                    </h6>
                    <img src="/img/lesson1/p6a.png" width="100%" />
                  </modal>
                  <br />
                  <div
                    class="text-center font-italic col-sm"
                    @click="modals.modal2 = true"
                  >
                    <img src="/img/lesson1/p6b.png" width="60%" />
                    <p><br />รูปที่ 6 (b) การสร้างเอกสารจากเมนู “ไฟล์”</p>
                  </div>
                  <modal :show.sync="modals.modal2">
                    <h6
                      slot="header"
                      class="modal-title"
                      id="modal-title-default"
                    >
                      รูปที่ 6 (b) การสร้างเอกสารจากเมนู “ไฟล์”
                    </h6>
                    <img src="/img/lesson1/p6b.png" width="100%" />
                  </modal>
                </div>
              </div>
              <br />

              <p class="font-weight-bold rem2">2) การแก้ไขเอกสาร</p>
              <p class="rem2 text-justify">
                ภาพรวมของการดำเนินการกับเอกสารของกูเกิลเอกสาร เช่น การพิมพ์
                การจัดหน้ากระดาษ การกำหนดรูปแบบ การกำหนดสีและขนาดตัวอักษร
                การแทรกรูปภาพ ฯลฯ
                จะมีลักษณะคล้ายคลึงกับการดำเนินการในโปรแกรมไมโครซอฟต์เวิร์ดที่ได้นำเสนอเนื้อหาไว้ก่อนหน้านี้แล้ว
                ดังนั้นในหัวข้อนี้จึงอธิบายการแก้ไขเอกสารจากกูเกิลเอกสารโดยสังเขป
                ซึ่งในการแก้ไขเอกสารโดยส่วนใหญ่แล้ว
                ผู้ใช้มักต้องใช้งานตัวเลือกต่างๆ จาก เมนู และแถบเครื่องมือลัด
                (ส่วน B และส่วน D ตามที่แสดงไว้ในรูปที่ 4)
                โดยตัวเลือกของเมนูที่ถูกใช้งานบ่อยครั้งแสดงไว้ในรูปที่ 7(a) 7(b)
                และ7(c)
                โดยที่ความหมายและการใช้งานเครื่องมือลัดพร้อมทั้งผลลัพธ์จากการใช้งานเครื่องมือลัดเพื่อ
                แก้ไขเอกสารแสดงไว้ดังรูปที่ 8
                โดยการแก้ไขข้อความสามารถกระทำได้โดยเลือกขอบเขตของข้อความที่ต้องการด้วยการคลุมแถบแสงบนข้อความนั้นๆ
                จากนั้นจึงคลิกบนปุ่มเครื่องมือลัด
                ซึ่งผลลัพธ์ที่ได้จะถูกแสดงบนหน้ากระดาษการทำงานในทันที
              </p>
              <br />

              <div class="container">
                <div class="row">
                  <div
                    class="text-center font-italic col-sm"
                    @click="modals.modal3 = true"
                  >
                    <img src="/img/lesson1/p7a.png" width="80%" />
                    <p><br />รูปที่ 7 (a) ตัวเลือกในเมนู “ไฟล์”</p>
                  </div>
                  <modal :show.sync="modals.modal3">
                    <h6
                      slot="header"
                      class="modal-title"
                      id="modal-title-default"
                    >
                      รูปที่ 7 (a) ตัวเลือกในเมนู “ไฟล์”
                    </h6>
                    <img src="/img/lesson1/p7a.png" width="100%" />
                  </modal>
                  <br />
                  <div
                    class="text-center font-italic col-sm"
                    @click="modals.modal4 = true"
                  >
                    <img src="/img/lesson1/p7b.png" width="80%" />
                    <p><br />รูปที่ 7 (b) ตัวเลือกในเมนู “แก้ไข”</p>
                  </div>
                  <modal :show.sync="modals.modal4">
                    <h6
                      slot="header"
                      class="modal-title"
                      id="modal-title-default"
                    >
                      รูปที่ 7 (b) ตัวเลือกในเมนู “แก้ไข”
                    </h6>
                    <img src="/img/lesson1/p7b.png" width="100%" />
                  </modal>
                  <br />
                  <div
                    class="text-center font-italic col-sm"
                    @click="modals.modal5 = true"
                  >
                    <img src="/img/lesson1/p7c.png" width="60%" />
                    <p><br />7(c) ตัวเลือกในเมนู “แทรก”</p>
                  </div>
                  <modal :show.sync="modals.modal5">
                    <h6
                      slot="header"
                      class="modal-title"
                      id="modal-title-default"
                    >
                      7(c) ตัวเลือกในเมนู “แทรก”
                    </h6>
                    <img src="/img/lesson1/p7c.png" width="100%" />
                  </modal>
                </div>
              </div>
              <br />
              <br />

              <div
                class="text-center font-italic"
                @click="modals.modal6 = true"
              >
                <img src="/img/lesson1/p8.png" width="100%" />
                <p>
                  <br />รูปที่ 8
                  การใช้งานเครื่องมือลัดพร้อมทั้งผลลัพธ์จากการใช้งาน
                </p>
              </div>
              <modal :show.sync="modals.modal6">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 8 การใช้งานเครื่องมือลัดพร้อมทั้งผลลัพธ์จากการใช้งาน
                </h6>
                <img src="/img/lesson1/p8.png" width="100%" />
              </modal>
              <br />

              <p class="font-weight-bold rem2">
                3) การบันทึก (Save) การดาวน์โหลดไฟล์ (Download) และการพิมพ์
                (Print)
              </p>
              <p class="rem2">
                •
                ในการแก้ไขเอกสารของกูเกิลเอกสารนั้นจะถูกบันทึกไว้โดยอัตโนมัติทุกครั้งหลังจากที่มีการแก้ไข
                โดยที่ผู้ใช้ไม่ต้องกดบันทึกด้วยตนเอง
                ซึ่งเป็นการเพิ่มความสะดวกและลดข้อผิดพลาดที่อาจเกิดขึ้นได้มาก
              </p>
              <div class="rem2">
                • เอกสารของกูเกิลเอกสาร
                นอกจากจะบันทึกไว้เป็นไฟล์ในรูปแบบเฉพาะที่ใช้สำหรับประมวลผลบนบริการกูเกิลเอกสารแล้ว
                เอกสารนั้นยังสามารถส่งออกและถูกดาวน์โหลดเป็นไฟล์รูปแบบอื่นๆ
                ได้อีกด้วย เช่น <b>“.docx” </b>หรือ <b>“.pdf”</b> ดังแสดงในรูปที่ 7(a)
              </div>
              <div class="rem2">
                • ผู้ใช้สามารถพิมพ์เอกสารออกทางเครื่องพิมพ์ได้ผ่านเมนู <b>“ไฟล์” ->
                “พิมพ์”</b>
              </div>
              <br />
              <p class="font-weight-bold rem2">
                4) การทำงานร่วมกัน / การแชร์ไฟล์
              </p>
              <div class="rem2 text-justify">
                ความสามารถของกูเกิลเอกสารที่ถือว่าเป็นจุดเด่นและมีประโยชน์เป็นอย่างยิ่งในการทำงานยุคใหม่คือ
                การทำงานร่วมกันและการแชร์ไฟล์ระหว่างกัน
                โดยผู้ใช้ทุกคนที่มีสิทธิสามารถทำงานร่วมกันในไฟล์เดียวกันใน ณ
                เวลาเดียวกัน
                โดยเห็นความเปลี่ยนแปลงทั้งหมดของเอกสารได้อย่างเรียลไทม์
                การทำงานร่วมกันจะเริ่มต้นขึ้นโดยผู้ใช้แชร์สิทธิการเข้าถึงไฟล์ใหกับผู้อื่น
                ทำได้โดยคลิกที่ปุ่ม <b>“แชร์”</b>
                จากนั้นเลือกตัวเลือกว่าจะแชร์ไฟล์ในรูปแบบใด ให้ผู้ใช้คนใดบ้าง
                ดังแสดงในรูปที่ 9 โดย รูปที่ 9 (a)
                เป็นหน้าต่างของการแชร์ไฟล์โดยระบุชื่อผู้ใช้อื่นที่ต้องการ
                หรือสามารถกดปุ่ม “ขั้นสูง” เพื่อกำหนดสิทธิโดยละเอียดได้ดังรูปที่
                9 (b) ซึ่งรูปแบบสิทธิที่มีทั้งหมดแสดงในรูปที่ 10
              </div>
              <br /><br />

              <div class="container">
                <div class="row">
                  <div
                    class="text-center font-italic col-sm"
                    @click="modals.modal7 = true"
                  >
                    <img src="/img/lesson1/9a.png" width="100%" />
                    <p><br />รูปที่ 9 (a) การตั้งค่าการแชร์ไฟล์กับผู้ใช้อื่น</p>
                  </div>

                  <modal :show.sync="modals.modal7">
                    <h6
                      slot="header"
                      class="modal-title"
                      id="modal-title-default"
                    >
                      รูปที่ 9 (a) การตั้งค่าการแชร์ไฟล์กับผู้ใช้อื่น
                    </h6>
                    <img src="/img/lesson1/9a.png" width="100%" />
                  </modal>
                  <br />
                  <div
                    class="text-center font-italic col-sm"
                    @click="modals.modal8 = true"
                  >
                    <img src="/img/lesson1/p9b.png" width="60%" />
                    <p><br />รูปที่ 9 (b) การตั้งค่าขั้นสูงของการแชร์ไฟล์</p>
                  </div>

                  <modal :show.sync="modals.modal8">
                    <h6
                      slot="header"
                      class="modal-title"
                      id="modal-title-default"
                    >
                      รูปที่ 9 (b) การตั้งค่าขั้นสูงของการแชร์ไฟล์
                    </h6>
                    <img src="/img/lesson1/p9b.png" width="100%" />
                  </modal>
                </div>
              </div>
              <br />

              <div
                class="text-center font-italic"
                @click="modals.modal9 = true"
              >
                <img src="/img/lesson1/p10.png" width="60%" />
                <p>
                  <br />รูปที่ 10
                  สิทธิที่สามารถกำหนดให้แก่ผู้ใช้อื่นที่จะสามารถเข้าถึงไฟล์ที่แชร์ได้
                </p>
              </div>

              <modal :show.sync="modals.modal9">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 10
                  สิทธิที่สามารถกำหนดให้แก่ผู้ใช้อื่นที่จะสามารถเข้าถึงไฟล์ที่แชร์ได้
                </h6>
                <img src="/img/lesson1/p10.png" width="100%" />
              </modal>
              <br />
              <p class="font-weight-bold rem2">
                5) การควบคุมเวอร์ชัน (Version control)
              </p>
              <div class="rem2 text-justify">
                ความสามารถที่โดดเด่นของกูเกิลเอกสารอีกหนึ่งอย่างคือความสามารถในการเรียกคืนเวอร์ชันก่อนหน้าหรือสลับไปสู่เวอร์ชันของเอกสารที่ต้องการได้
                ซึ่งมีข้อดี เช่น
                ผู้ใช้อาจแก้ไขเอกสารไปแล้วหลายครั้งเมื่อเวลาผ่านไปผู้ใช้ต้องการยกเลิกการแก้ไขทั้งหมดก็สามารถทำได้โดยง่าย
                เพียงเลือกจากเวอร์ชันของเอกสารที่มี
                จากนั้นเอกสารจะเปลี่ยนเป็นเวอร์ชันที่ต้องการทันที โดยเข้าเมนู
                <b>“ไฟล์” -> “ประวัติเวอร์ชัน” -> “ดูประวัติเวอร์ชัน”</b>
              </div>
              <br>
              <p class="font-weight-bold rem2">6) เทคนิคน่ารู้</p>
              <div class="rem2 text-justify">
                นอกจากการพิมพ์ด้วยแป้นพิมพ์โดยปกติแล้ว
                กูเกิลเอกสารยังมีเครื่องมืออำนวยความสะดวกในการพิมพ์ที่น่าสนใจคือ
                “การพิมพ์ด้วยเสียง”
                โดยผู้ใช้สามารถพูดผ่านไมโครไฟนของเครื่องคอมพิวเตอร์เพื่อให้
                กูเกิลเอกสารประมวลผลและพิมพ์ลงบนเอกสารโดยอัตโนมัติได้
                โดยคำที่พิมพ์ออกมามีความถูกต้องค่อนข้างสูง
                โดยวิธีการใช้งานการพิมพ์ด้วยเสียงทำได้โดยเข้าไปที่เมนู
                <b>“เครื่องมือ” -> “พิมพ์ด้วยเสียง”</b>
                จากนั้นจะมีกล่องเครื่องมือไมโครโฟนปรากฏขึ้นมา ดังรูปที่ 11 (a)
                จากนั้นให้ผู้ใช้คลิกแล้วเริ่มพูดโดยกูเกิลเอกสารจะแปลงคำพูดเป็นตัวอักษรดังแสดงในรูปที่
                11 (b)
              </div>
              <br /><br />
              <div class="container">
                <div class="row">
                  <div
                    class="text-center font-italic col-sm"
                    @click="modals.modal10 = true"
                  >
                    <img src="/img/lesson1/p11a.png" width="90%" />
                    <p><br />รูปที่ 11 (a) เครื่องมือพิมพ์ด้วยเสียง</p>
                  </div>
                  <modal :show.sync="modals.modal10">
                    <h6
                      slot="header"
                      class="modal-title"
                      id="modal-title-default"
                    >
                      รูปที่ 11 (a) เครื่องมือพิมพ์ด้วยเสียง
                    </h6>
                    <img src="/img/lesson1/p11a.png" width="100%" />
                  </modal>

                  <br />

                  <div
                    class="text-center font-italic col-sm"
                    @click="modals.modal11 = true"
                  >
                    <img src="/img/lesson1/p11b.png" width="90%" />
                    <p><br />รูปที่ 11 (b) ทดสอบการพิมพ์ด้วยเสียง</p>
                  </div>
                  <modal :show.sync="modals.modal11">
                    <h6
                      slot="header"
                      class="modal-title"
                      id="modal-title-default"
                    >
                      รูปที่ 11 (b) ทดสอบการพิมพ์ด้วยเสียง
                    </h6>
                    <img src="/img/lesson1/p11b.png" width="90%" />
                  </modal>
                </div>
              </div>
              <br />
              <p class="font-weight-bold rem2">
                7) สามารถเรียนรู้เพิ่มเติมได้ที่
                https://www.google.com/docs/about/
              </p>
              <br /><br />
              <h4>4. กูเกิลฟอร์ม (Google Form)</h4>
              <h5 class="rem2">
                4.1. ภาพรวม องค์ประกอบและเครื่องมือต่างๆ ของกูเกิลฟอร์ม
              </h5>
              <p class="rem2 text-justify">
                กูเกิลฟอร์ม เป็นเครื่องมือที่มีไว้สำหรับสร้าง แก้ไข
                จัดการแบบฟอร์ม แบบทดสอบ แบบสอบถาม หรือคำเชิญต่างๆ แบบออนไลน์
                โดยมีความสามารถโดดเด่นในแชร์แบบฟอร์มกับผู้อื่นได้อย่างง่ายดาย
                และสามารถบริหารจัดการข้อมูลได้โดยง่าย
                เหมาะที่จะใช้เป็นแบบสอบถามกับกลุ่มเป้าหมายจำนวนมากได้
                เนื่องจากจะทำให้ต้นทุนการสำรวจลดลงเป็นอย่างมากเมื่อเทียบกับแบบสอบถามที่อยู่ในรูปแบบของกระดาษ
              </p>
              <br />
              <div
                class="text-center font-italic"
                @click="modals.modal12 = true"
              >
                <img src="/img/lesson1/p12.png" width="80%" />
                <p><br />รูปที่ 12 ภาพรวมและองค์ประกอบของกูเกิลฟอร์ม</p>
              </div>
              <modal :show.sync="modals.modal12">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 12 ภาพรวมและองค์ประกอบของกูเกิลฟอร์ม
                </h6>
                <img src="/img/lesson1/p12.png" width="100%" />
              </modal>

              <br />
              <p class="rem2">
                จากรูปที่ 12 แสดงให้เห็นถึงหน้าตาภาพรวมและเครื่องมือต่างๆ
                ของกูเกิลฟอร์ม โดยแยกพื้นที่การดำเนินการออกเป็น 6 ส่วนหลักๆ
                ดังนี้
              </p>
              <br />
              <div class="rem2">
               <b> 1) ส่วน A :</b> ส่วนของการจัดการไฟล์งาน
              </div>
              <p class="rem5">
                • ช่องข้อความ เป็นส่วนของการกำหนดชื่อไฟล์งาน
                โดยสามารถคลิกลงตรงช่อง “เอกสารไม่มีชื่อ”
                จากนั้นพิมพ์ชื่อไฟล์ที่ต้องการตั้งลงไปได้ทันที
              </p>
              <p class="rem5">
                • ปุ่มย้าย เป็นการย้ายที่เก็บไฟล์ไปยังโฟลเดอร์อื่นๆ
                ในกูเกิลไดรฟ์
              </p>
              <p class="rem5">
                • สัญลักษณ์รูปดาว เป็นส่วนของการติดดาวให้กับไฟล์
                (ใช้เพื่อแยกหมวดหมู่ของไฟล์ในกูเกิลไดรฟ์)
              </p>
              <div class="rem2">
                <b>2) ส่วน B :</b> เป็นเมนูเพื่อเลือกโหมดการทำงาน ประกอบด้วย
              </div>
              <p class="rem5">
                • คำถาม จะเป็นการทำงานบนการ สร้างและแก้ไขแบบฟอร์ม
              </p>
              <p class="rem5">
                • การตอบกลับ จะเป็นการทำงานบนการตอบกลับ เช่นการดูสถิติการตอบกลับ
                สามารถเลือกเปิด/ปิดการตอบกลับ
                พร้อมกันนี้ยังสามารถเรียกไฟล์ที่เป็นแหล่งจัดเก็บข้อมูลดิบออกมาดูได้ผ่านบริการของกูเกิลชีตได้อีกด้วย
              </p>
              <div class="rem2">
               <b> 3) ส่วน C :</b> เป็นการดำเนินการกับตัวฟอร์ม ประกอบด้วย การปรับแต่ธีม
                การแสดงตัวอย่าง การตั้งค่า และการส่งฟอร์มไปยังผู้อื่น
              </div>
              <div class="rem2">
               <b> 4) ส่วน D :</b> เป็นส่วนหัวของแบบฟอร์ม
                ผู้ใช้สามารถพิมพ์ชื่อและคำอธิบายของฟอร์มลงไปในช่องว่างเพื่อใช้แสดงแก่ผู้ที่ได้รับฟอร์ม
              </div>
              <div class="rem2">
               <b> 5) ส่วน E :</b> เป็นส่วนเนื้อหาของฟอร์ม
                โดยสามารถสร้างเป็นคำถามและตัวเลือกของคำตอบได้
                และสามารถเพิ่มจำนวนได้
              </div>
              <div class="rem2">
               <b> 6) ส่วน F :</b>
                เป็นส่วนของการดำเนินการเพิ่มเติมกับเนื้อหาที่ผู้ใช้กำลังแก้ไขอยู่
                เช่นการแทรกรูปภาพ หรือวีดีโอ เป็นต้น
              </div>
              <br />
              <h5 class="rem2">4.2. วิธีการใช้งานเบื้องต้น</h5>
              <p class="rem5 text-justify">
                1) การสร้างฟอร์ม
                การสร้างฟอร์มจะดำเนินการคล้ายกับการสร้างเอกสารจากกูเกิลเอกสาร
                คือ เมื่อผู้ใช้เข้าสู่บริการกูเกิลฟอร์มแล้ว
                จะพบกับหน้าแสดงรายการเอกสารที่เคยสร้างไว้ (หากมี)
                ซึ่งผู้ใช้สามารถกดสร้างเอกสารใหม่ได้ที่ปุ่ม “สร้างเอกสารใหม่”
                ตรงมุมล่างขวาของเว็บเบราว์เซอร์ ซึ่ง จะได้เอกสารเปล่าขึ้นมา 1
                ไฟล์
              </p>
              <p class="rem5 text-justify">
                2) การแก้ไขฟอร์ม การแก้ไขฟอร์มนั้นสามารถทำได้มากมายหลายรูปแบบ
                โดยจะแบ่งพื้นที่การทำงานเป็นสองส่วนหลัก คือ
                ส่วนหัวของฟอร์มและเนื้อหาของฟอร์ม
                ซึ่งผู้ใช้สามารถแก้ไขได้ทั้งหมด โดยในส่วนของคำถาม
                จะสามารถเลือกได้ว่าจะให้เป็นคำถามประเภทใด โดยคลิกที่ปุ่มตัวเลือก
                ดังรูปที่ 13 (a) และ 13 (b)
                โดยประเภทของคำถามจะมีอยู่อย่างหลากหลาย เช่น
                เป็นคำถามที่มีคำตอบเป็นแบบหลายตัวเลือก
                คำถามที่มีคำตอบแบบมีช่องให้ทำเครื่องหมาย
                หรือคำถามที่มีคำตอบเป็นเวลาเป็นต้น
                นอกจากนี้ผู้ใช้ยังสามารถเพิ่มจำนวนคำถามที่มีประเภทที่แตกต่างกันได้อีกด้วย
                โดยการกดปุ่ม “เพิ่มคำถาม” ด้านข้างพื้นที่คำถาม (อยู่ในส่วน F
                ของรูปที่ 12)
              </p>
              <br />
              <div class="container">
                <div class="row">
                  <div
                    class="text-center font-italic col-sm"
                    @click="modals.modal13 = true"
                  >
                    <img src="/img/lesson1/p13a.png" width="120%" />
                    <p><br />รูปที่ 13 (a) ปุ่มเลือกประเภทของคำถาม</p>
                  </div>
                  <modal :show.sync="modals.modal13">
                    <h6
                      slot="header"
                      class="modal-title"
                      id="modal-title-default"
                    >
                      รูปที่ 13 (a) ปุ่มเลือกประเภทของคำถาม
                    </h6>
                    <img src="/img/lesson1/p13a.png" width="100%" />
                  </modal>

                  <br />
                  <div
                    class="text-center font-italic col-sm"
                    @click="modals.modal14 = true"
                  >
                    <img src="/img/lesson1/p13b.png" width="50%" />
                    <p><br />รูปที่ 13 (b) ตัวเลือกประเภทของคำถาม</p>
                  </div>
                  <modal :show.sync="modals.modal14">
                    <h6
                      slot="header"
                      class="modal-title"
                      id="modal-title-default"
                    >
                      รูปที่ 13 (b) ตัวเลือกประเภทของคำถาม
                    </h6>
                    <img src="/img/lesson1/p13b.png" width="100%" />
                  </modal>
                </div>
              </div>
              <br>
              <div class="rem5 text-justify">
                3) การตั้งค่าฟอร์ม
                การตั้งค่าฟอร์มถือเป็นอีกหนึ่งการดำเนินงานที่สำคัญ
                เนื่องจากจะเป็นการตั้งค่าข้อกำหนดต่างๆ ให้กับฟอร์ม เช่น
                จำกัดการตอบกลับให้ผู้ใช้แต่ละคนตอบกลับได้เพียงหนึ่งครั้งเท่านั้น
                หรือผู้ตอบสามารถแก้ไขคำตอบหลังจากที่ตอบกลับไปแล้วหนึ่งครั้งได้หรือไม่เป็นต้น
                ดังแสดงในรูปที่ 14 โดยการตั้งค่าฟอร์มสามารถกระทำได้โดยกดปุ่ม
               <b>“การตั้งค่า”</b> ที่อยู่ในส่วน C
              </div>
              <br />
              <div
                class="text-center font-italic"
                @click="modals.modal15 = true"
              >
                <img src="/img/lesson1/p14.png" width="60%" />
                <p><br />รูปที่ 14 ตัวเลือกการตั้งค่าฟอร์ม</p>
              </div>
              <modal :show.sync="modals.modal15">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 14 ตัวเลือกการตั้งค่าฟอร์ม
                </h6>
                <img src="/img/lesson1/p14.png" width="100%" />
              </modal>
              <br />
              <p class="rem5">
                4) การบันทึก
                ในการแก้ไขฟอร์มนั้นจะถูกบันทึกไว้โดยอัตโนมัติทุกครั้งหลังจากที่มีการแก้ไข
                โดยที่ผู้ใช้ไม่ต้องกดบันทึกด้วยตนเองซึ่งเป็นการเพิ่มความสะดวกและลดข้อผิดพลาดที่อาจเกิดขึ้นได้มาก
              </p>
              <div class="rem5 text-justify">
                5) การส่งฟอร์มแก่กลุ่มเป้าหมาย
                การส่งฟอร์มแก่กลุ่มเป้าหมายสามารถกระทำได้โดยกดปุ่ม
                <b>“ส่ง”</b> ที่อยู่ในส่วน C ตามรูปที่ 12
                ซึ่งจะมีตัวเลือกขึ้นมาว่าจะส่งฟอร์มในรูปแบบใด (แสดงในรูปที่ 15)
                เช่น ส่งเป็นลิงค์ ส่งเป็นอีเมล หรือฝังเป็นรหัส HTML เป็นต้น
                โดยที่ผู้ใช้จะต้องกรอกรายละเอียดลงไปให้ครบถ้วน เช่น
                หากส่งผ่านอีเมลมีความจำเป็นที่จะต้องกรอกอีเมลของผู้รับลงไปด้วยเป็นต้น
              </div>
              <br />
              <div
                class="text-center font-italic"
                @click="modals.modal16 = true"
              >
                <img src="/img/lesson1/p15.png" width="60%" />
                <p><br />รูปที่ 15 ตัวเลือกการส่งฟอร์ม</p>
              </div>
              <modal :show.sync="modals.modal16">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 15 ตัวเลือกการส่งฟอร์ม
                </h6>
                <img src="/img/lesson1/p15.png" width="100%" />
              </modal>
              <br />
              <p class="rem5 text-justify">
                เครื่องมือจัดการเอกสารของกูเกิลมีประโยชน์ในหลายมิติ
                สามารถช่วยให้ทำงานร่วมกันได้ในเวลาเดียวกัน
                สามารถทำงานได้โดยไม่ขึ้นอยู่กับสถานที่ ไม่ว่าอยู่ ณ ที่ใด
                ไม่ว่าใช้อุปกรณ์แบบไหน
                ซึ่งเอื้อต่อทิศทางของการทำงานยุคใหม่ในอนาคตอันใกล้นี้
                อีกทั้งยังช่วยลดต้นทุนของการทำงานรวมทั้งเวลาลงได้
                จึงเป็นสิ่งที่ควรศึกษาไว้เป็นพื้นฐาน
                และช่วยอำนวยความสะดวกแก่การทำงาน
              </p>
              <hr>
              <!-- -------------------------------- -->
              <br /><br /><br /><br />
              <div class="container">
                <div class="row">
                  <div class="col-auto mr-auto">
                    <router-link to="/lesson1_3" title="Lesson1_3 Page">
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
                    <router-link to="/lesson2_1" title="Lesson2_1 Page">
                      <div class="btn-wrapper">
                        <base-button
                          tag="a"
                          target="_blank"
                          rel="noopener noreferrer"
                          class="mb-3 mb-sm-0"
                          outline
                          type="info"
                        >
                          บทเรียนที่ 2 
                          <i class="fa fa-chevron-right" aria-hidden="true"></i>
                        </base-button>
                      </div>
                    </router-link>
                  </div>
                </div>
              </div>
              <div class="text-center mt-5">Page 4/4</div>
            </div>
          </div>
        </div>
      </section>

      <hr />
      <div class="col-lg-center">
        <div class="pt-4 text-center">
          <h5 class="title">
            <span class="d-block mb-1">Author | Dr.Nasi Tantitharanukul</span>
            <small class="h6 text-black"
              >Lecturer in the Computer Science Division at Maejo
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
      },
    };
  },
};
</script>

<style></style>
