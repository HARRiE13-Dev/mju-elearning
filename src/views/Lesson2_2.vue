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
              <h6 style="text-indent: 5em;">2.3.1.4 กลุ่มคำสั่ง PAGE LAYOUT</h6>
              <br />
              <p style="text-indent: 7.5em;">
                เป็นกลุ่มคำสั่งที่ใช้ในการตั้งค่าหน้ากระดาษของสมุดงาน
                คำสั่งที่สำคัญ ได้แก่ การกำหนดขนาดกระดาษ (Size) ขอบกระดาษ
                (Margins) การวางแนวกระดาษ (Orientation)
                ขอบเขตการพิมพ์ออกทางเครื่องพิมพ์ (Print Area) การทดสอบก่อนพิมพ์
                (Print Test) เป็นต้น
              </p>
              <br />
              <div
                class="text-center"
                style="font-style:italic"
                @click="modals.modal1 = true"
              >
                <img src="/img/lesson2/26.png" width="100%" />
                <p><br />รูปที่ 24 กลุ่มคำสั่ง PAGE LAYOUT</p>
              </div>
              <modal :show.sync="modals.modal1">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 24 กลุ่มคำสั่ง PAGE LAYOUT
                </h6>
                <img src="/img/lesson2/26.png" width="100%" />
              </modal>
              <br />
              <h6 style="text-indent: 5em;">2.3.1.5 กลุ่มคำสั่ง FORMULAS</h6>
              <p style="text-indent: 7.5em;">
                เป็นกลุ่มคำสั่งที่ใช้ในการคำนวณ วิเคราะห์ข้อมูลในขั้นสูง
                ผู้ใช้งานสามารถใช้เครื่องมือในแถบสูตรนี้เพื่อให้ได้ผลลัพธ์ข้อมูลตามที่ต้องการ
                คำสั่งที่สำคัญ เช่น การใช้สูตรสำเร็จ (Function Library) การคำนวณ
                (Calculation) เป็นต้น
              </p>
              <br />
              <div
                class="text-center"
                style="font-style:italic"
                @click="modals.modal2 = true"
              >
                <img src="/img/lesson2/27.png" width="100%" />
                <p><br />รูปที่ 25 กลุ่มคำสั่ง FORMULAS</p>
              </div>
              <modal :show.sync="modals.modal2">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 25 กลุ่มคำสั่ง FORMULAS
                </h6>
                <img src="/img/lesson2/27.png" width="100%" />
              </modal>
              <br />
              <h6 style="text-indent: 5em;">2.3.1.6 กลุ่มคำสั่ง DATA</h6>
              <p style="text-indent: 7.5em;">
                เป็นกลุ่มคำสั่งทีใช้ในการจัดการข้อมูล
                เพื่อให้ได้ข้อมูลในลักษณะที่ตรงกับความต้องการของผู้ใช้งาน
              </p>
              <br />
              <div class="container">
                <div class="row">
                  <div
                    class="col-sm text-center"
                    style="font-style:italic"
                    @click="modals.modal3 = true"
                  >
                    <img src="/img/lesson2/28.png" width="100%" />
                    <p><br />รูปที่ 26 กลุ่มคำสั่ง DATA</p>
                  </div>
                  <modal :show.sync="modals.modal3">
                    <h6
                      slot="header"
                      class="modal-title"
                      id="modal-title-default"
                    >
                      รูปที่ 26 กลุ่มคำสั่ง DATA
                    </h6>
                    <img src="/img/lesson2/28.png" width="100%" />
                  </modal>
                </div>
                <br />
                <div class="row">
                  <div
                    class="col-sm text-center"
                    style="font-style:italic"
                    @click="modals.modal4 = true"
                  >
                    <img src="/img/lesson2/29.png" width="50%" />
                    <p>
                      <br />รูปที่ 27 กลุ่มคำสั่ง DATA กลุ่ม Get External Data
                    </p>
                  </div>
                  <modal :show.sync="modals.modal4">
                    <h6
                      slot="header"
                      class="modal-title"
                      id="modal-title-default"
                    >
                      รูปที่ 27 กลุ่มคำสั่ง DATA กลุ่ม Get External Data
                    </h6>
                    <img src="/img/lesson2/29.png" width="50%" />
                  </modal>
                  <div
                    class="col-sm text-center"
                    style="font-style:italic"
                    @click="modals.modal5 = true"
                  >
                    <img src="/img/lesson2/30.png" width="50%" />
                    <p><br />รูปที่ 28 กลุ่มคำสั่ง DATA กลุ่ม Sort & Filter</p>
                  </div>
                  <modal :show.sync="modals.modal5">
                    <h6
                      slot="header"
                      class="modal-title"
                      id="modal-title-default"
                    >
                      รูปที่ 28 กลุ่มคำสั่ง DATA กลุ่ม Sort & Filter
                    </h6>
                    <img src="/img/lesson2/30.png" width="50%" />
                  </modal>
                </div>
              </div>

              <br />
              <h6 style="text-indent: 5em;">2.3.1.7 กลุ่มคำสั่ง REVIEW</h6>
              <p style="text-indent: 7.5em;">
                เป็นกลุ่มคำสั่งที่ใช้ทบทวนความถูกต้องของข้อมูลที่กรอกในสมุดงาน
                คำสั่งที่สำคัญ เช่น การสะกาดคำ (Spelling) การแปล (Translate)
                การใส่ข้อคิดเห็น (Comment) เป็นต้น
              </p>
              <br />
              <div
                class="text-center"
                style="font-style:italic"
                @click="modals.modal6 = true"
              >
                <img src="/img/lesson2/31.png" width="100%" />
                <p><br />รูปที่ 29 กลุ่มคำสั่ง REVIEW</p>
              </div>
              <modal :show.sync="modals.modal6">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 29 กลุ่มคำสั่ง REVIEW
                </h6>
                <img src="/img/lesson2/31.png" width="100%" />
              </modal>
              <br />
              <h6 style="text-indent: 5em;">2.3.1.8 กลุ่มคำสั่ง VIEW</h6>
              <p style="text-indent: 7.5em;">
                เป็นกลุ่มคำสั่งที่ใช้ควบคุมการแสดงหน้าจอของสมุดงานในรูปแบบต่าง ๆ
                ให้เหมาะสมกับข้อมูลและการทำงาน คำสั่งที่สำคัญ เช่น
                การปรับปรับมุมมองของสมุดงานในรูปแบบต่าง ๆ (Workbook Views)
                การแสดงเครื่องมือบนหน้าจอ เช่น แถบสูตร (Formulas) เส้นตาราง
                (Gridline) การปรับขนาดหน้าจอ (Zoom) เป็นต้น
              </p>
              <br />
              <div
                class="text-center"
                style="font-style:italic"
                @click="modals.modal7 = true"
              >
                <img src="/img/lesson2/32.png" width="100%" />
                <p><br />รูปที่ 30 กลุ่มคำสั่ง VIEW</p>
              </div>
              <modal :show.sync="modals.modal7">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 30 กลุ่มคำสั่ง VIEW
                </h6>
                <img src="/img/lesson2/32.png" width="100%" />
              </modal>
              <br /><br />

              <h5>2.3.2 แถบสูตร (Formulas Bar)</h5>
              <p style="text-indent: 2.5em;">
                เป็นส่วนที่ผู้ใช้งานใช้กรอกสูตรเพื่อคำนวณหรือวิเคราะห์ข้อมูล
                แบ่งสูตรเป็น 2 ประเภท ได้แก่
              </p>
              <p style="text-indent: 2.5em;">
                2.3.2.1) สูตรที่ผู้ใช้งานคิดสูตรและกรอกด้วยตนเอง
              </p>
              <p style="text-indent: 2.5em;">
                2.3.2.2) สูตรสำเร็จ (function) เพื่อคำนวณ หรือวิเคราะห์ผลข้อมูล
              </p>
              <br />
              <div
                class="text-center"
                style="font-style:italic"
                @click="modals.modal8 = true"
              >
                <img src="/img/lesson2/p31.png" width="60%" />
                <p><br />รูปที่ 31 แถบสูตร (Formulas Bar)</p>
              </div>
              <modal :show.sync="modals.modal8">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 31 แถบสูตร (Formulas Bar)
                </h6>
                <img src="/img/lesson2/p31.png" width="100%" />
              </modal>
              <br />
              <h5>2.3.3 สมุดงาน (Workbook) และแผ่นงาน (Sheet)</h5>
              <p style="text-indent: 2.5em;">
                โปรแกรม Excel กำหนดพื้นที่กรอกข้อมูลเรียกว่า สมุดงาน (Workbook)
                ซึ่งแบ่งพื้นที่เป็นส่วน ดังนี้
              </p>
              <p style="text-indent: 2.5em;">2.3.3.1 คอลัมน์ (Column)</p>
              <p style="text-indent: 5em;">
                - เป็นการแบ่งพื้นที่ทำงานในแนวตั้ง
              </p>
              <p style="text-indent: 5em;">- จำนวน 16,384 คอลัมน์</p>
              <p style="text-indent: 5em;">
                - มีชื่อคอลัมน์ ตั้งแต่ A, B, C, D, …, XFD
              </p>
              <p style="text-indent: 2.5em;">2.3.3.2 แถว (Row)</p>
              <p style="text-indent: 5em;">- เป็นการแบ่งพื้นที่ทำงานในแนวนอน</p>
              <p style="text-indent: 5em;">- จำนวน 1,048,576 แถว</p>
              <p style="text-indent: 5em;">
                - มีชื่อแถว ตั้งแต่แถวที่ 1, 2, 3, 4, ..., 1048576
              </p>
              <p style="text-indent: 2.5em;">3.3.2 แถว (Row)</p>
              <p style="text-indent: 5em;">- จุดตัดกันระหว่าง Column และ Row</p>
              <p style="text-indent: 5em;">
                - เป็นช่องตารางสี่เหลี่ยม ที่ใช้ในการกรอกข้อมูล
              </p>
              <p style="text-indent: 5em;">
                - เซลล์ที่กำลังใช้งาน เรียกว่า Active Cell
              </p>
              <p style="text-indent: 5em;">
                - สามารถป้อนข้อมูลที่เป็นข้อความ ตัวเลข ฯลฯ ลงบน Cell ที่ต้องการ
              </p>
              <p style="text-indent: 5em;">
                - ทุกเซลล์ มีชื่อตำแหน่ง เรียกว่า ตำแหน่งเซลล์ คือ ชื่อ Column
                และ ชื่อ Row เช่น
              </p>
              <p style="text-indent: 7.5em;">A5 หมายถึง คอลัมน์ A แถวที่ 5</p>
              <p style="text-indent: 7.5em;">
                B108 หมายถึง คอลัมน์ B แถวที่ 108
              </p>
              <p style="text-indent: 7.5em;">G10 หมายถึง คอลัมน์ G แถวที่ 10</p>
              <p style="text-indent: 2.5em;">
                2.3.3.4 ตัวชี้เซลล์ (Cell Pointer)
              </p>
              <p style="text-indent: 5em;">
                - เป็นตัวชี้เซลล์ที่กำลังถูกใช้งานอยู่ในขณะนั้น (Active Cell)
              </p>
              <p style="text-indent: 5em;">
                - เซลล์ที่เป็น Active Cell จะมีเส้นกรอบสีเข้มล้อมรอบ ดังรูปที่
                32
              </p>
              <div
                class="text-center"
                style="font-style:italic"
                @click="modals.modal18 = true"
              >
                <img src="/img/lesson2/p32.png" width="40%" />
                <p>
                  <br />รูปที่ 32 สมุดงาน (Workbook) ที่มี Active Cell ตำแหน่ง
                  A1
                </p>
              </div>
              <modal :show.sync="modals.modal18">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 32 สมุดงาน (Workbook) ที่มี Active Cell ตำแหน่ง
                </h6>
                <img src="/img/lesson2/p32.png" width="100%" />
              </modal>
              <br />
              <p style="text-indent: 2.5em;">
                2.3.3.4 สมุดงาน (Workbook) คือ ไฟล์งานหลักของโปรแกรม Excel
                สามารถบันทึกเป็นไฟล์งานเพื่อนำมาเพิ่มเติมหรือแก้ไขข้อมูลครั้งต่อไป
              </p>

              <p style="text-indent: 2.5em;">
                2.3.3.5 แผ่นงาน (Sheet) คือ
                แผ่นงานที่เป็นหน้ากระดาษแต่ละหน้าของสมุดงาน
                เป็นพื้นที่สำหรับการทำงานที่สามารถกรอกข้อมูล โดย
              </p>
              <p style="text-indent: 5em;">
                - สมุดงาน (Workbook) จะมีแผ่นงาน (Sheet) เปิดไว้อย่างน้อย 3 แผ่น
              </p>
              <p style="text-indent: 5em;">
                - สามารถเพิ่มจำนวนแผ่นงานได้ตามต้องการ โดยการคลิกที่ปุ่ม
              </p>
              <p style="text-indent: 5em;">
                - ชื่อแผ่นงาน (Sheet)
                สามารถเปลี่ยนได้โดยดับเบิลคลิกและแก้ไขเป็นชื่อแผ่นงานใหม่
              </p>
              <div
                class="text-center"
                style="font-style:italic"
                @click="modals.modal9 = true"
              >
                <img src="/img/lesson2/p33.png" width="80%" />
                <p><br />รูปที่ 33 ตัวอย่างการเปลี่ยนชื่อแผ่นงาน (Sheet)</p>
              </div>
              <modal :show.sync="modals.modal9">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 33 ตัวอย่างการเปลี่ยนชื่อแผ่นงาน (Sheet)
                </h6>
                <img src="/img/lesson2/p33.png" width="100%" />
              </modal>
              <br />
              <h4>2.4 การทำงานของเซลล์ (Cell)</h4>
              <p style="text-indent: 2.5em;">
                Cell หรือ เซลล์ คือ จุดตัดกันระหว่างคอลัมน์และแถว หรือ
                “ช่องตาราง” ทุกช่องตารางมีตำแหน่งที่ใช้เรียกเซลล์ โดยเรียก ชื่อ
                Column และ ชื่อ Row เช่น A5 (คอลัมน์ A แถวที่ 5) B108 (คอลัมน์ B
                แถวที่ 108) G10 (คอลัมน์ G แถวที่ 10)
                เซลล์เป็นบริเวณที่สามารถกรอกข้อมูลจากคีย์บอร์ด
                วิธีการป้อนข้อมูลมีขั้นตอนตอน ดังนี้
              </p>
              <h5 style="text-indent: 2.5em;">
                2.4.1 เลือกตำแหน่งเซลล์ที่ต้องการป้อนข้อมูล
              </h5>
              <p style="text-indent: 2.5em;">
                เมื่อต้องการกรอกข้อมูลลงบนเซลล์ใด ๆ ต้องเลือกเซลล์ก่อนเสมอ
                วิธีการเลือกเซลล์ 3 วิธี ได้แก่
              </p>
              <p style="text-indent: 5em;">
                2.4.1.1 เลือกเซลล์โดยใช้เมาส์คลิกเลือกตำแหน่งเซลล์ที่ต้องการ
              </p>
              <div
                class="text-center"
                style="font-style:italic"
                @click="modals.modal10 = true"
              >
                <img src="/img/lesson2/p34.png" width="40%" />
                <p><br />รูปที่ 34 ตัวอย่างการคลิกเมาส์เลือกเซลล์ B3</p>
              </div>
              <modal :show.sync="modals.modal10">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 34 ตัวอย่างการคลิกเมาส์เลือกเซลล์ B3
                </h6>
                <img src="/img/lesson2/p34.png" width="100%" />
              </modal>
              <br />
              <p style="text-indent: 5em;">
                2.4.1.2 เลือกเซลล์โดยใช้ปุ่มลูกศรจากคีย์บอร์ดเพื่อเลื่อน Cell
                Pointer ไปยังเซลล์ที่ต้องการ
              </p>
              <div
                class="text-center"
                style="font-style:italic"
                @click="modals.modal11 = true"
              >
                <img src="/img/lesson2/p35.png" width="40%" />
                <p><br />รูปที่ 35 ปุ่มลูกศรบนคีย์บอร์ด</p>
              </div>
              <modal :show.sync="modals.modal11">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 35 ปุ่มลูกศรบนคีย์บอร์ด
                </h6>
                <img src="/img/lesson2/p35.png" width="100%" />
              </modal>
              <br />
              <p style="text-indent: 5em;">
                2.4.1.3 เลือกเซลล์โดยใช้คำสั่ง Go To (หรือ ปุ่ม F5)
                และพิมพ์ตำแหน่งเซลล์ที่ต้องการ เช่น AA200 หมายถึง เลื่อน Cell
                Pointer ไปยัง คอลัมน์ AA แถวที่ 200 เป็นต้น
              </p>
              <p style="text-indent: 5em;">
                2.4.1.2 เลือกเซลล์โดยใช้ปุ่มลูกศรจากคีย์บอร์ดเพื่อเลื่อน Cell
                Pointer ไปยังเซลล์ที่ต้องการ
              </p>
              <div
                class="text-center"
                style="font-style:italic"
                @click="modals.modal12 = true"
              >
                <img src="/img/lesson2/p36.png" width="40%" />
                <p>
                  <br />รูปที่ 36 การเลือกเซลล์โดยการใช้คำสั่ง Go To หรือกดปุ่ม
                  F5
                </p>
              </div>
              <modal :show.sync="modals.modal12">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 36 การเลือกเซลล์โดยการใช้คำสั่ง Go To หรือกดปุ่ม
                </h6>
                <img src="/img/lesson2/p36.png" width="100%" />
              </modal>
              <br />
              <h4>2.5 การป้อนข้อมูลบนสมุดงาน</h4>
              <p style="text-indent: 2.5em;">
                เมื่อเริ่มต้นใช้งานโปรแกรม Excel
                ผู้ใช้งานทำการป้อนข้อมูลลงบนสมุดงาน และปรับรูปแบบ ลักษณะ
                ของข้อมูลให้เหมาะสม สะดวกและง่ายต่อการใช้งานโดยมีหลักการ ดังนี้
              </p>
              <h5 style="text-indent: 2.5em;">5.1 การป้อนข้อมูล</h5>
              <p style="text-indent: 5em;">
                2.5.1.1 เลือกเซลล์ที่ต้องการป้อนข้อมูล (ดังได้กล่าว ข้อ 4)
              </p>
              <p style="text-indent: 5em;">
                2.5.1.2 พิมพ์ข้อความ หรือตัวอักษร หรือตัวเลข และกดปุ่ม Enter
              </p>
              <div
                class="text-center"
                style="font-style:italic"
                @click="modals.modal13 = true"
              >
                <img src="/img/lesson2/p37.png" width="40%" />
                <p><br />รูปที่ 37 การป้อนข้อมูลบนเซลล์</p>
              </div>
              <modal :show.sync="modals.modal13">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 37 การป้อนข้อมูลบนเซลล์
                </h6>
                <img src="/img/lesson2/p37.png" width="100%" />
              </modal>
              <br />
              <h5 style="text-indent: 2.5em;">
                2.5.2 การจัดตำแหน่งของข้อมูลในเซลล์
              </h5>
              <p style="text-indent: 5em;">
                การจัดตำแหน่งของข้อความบนเซลล์ สามารถใช้แถบเครื่องมือ ดังรูปที่
                38
              </p>
              <div
                class="text-center"
                style="font-style:italic"
                @click="modals.modal14 = true"
              >
                <img src="/img/lesson2/p38.png" width="40%" />
                <p><br />รูปที่ 38 แถบเครื่องมือจัดตำแหน่งข้อมูลบนเซลล์</p>
              </div>
              <modal :show.sync="modals.modal14">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 38 แถบเครื่องมือจัดตำแหน่งข้อมูลบนเซลล์
                </h6>
                <img src="/img/lesson2/p38.png" width="100%" />
              </modal>
              <br />
              <h5 style="text-indent: 2.5em;">5.3 การแก้ไขข้อมูลบนเซลล์</h5>
              <p style="text-indent: 5em;">
                2.5.3.1 เลื่อน Cell Point ไปยังเซลล์ที่ต้องการแก้ไขข้อมูล
              </p>
              <p style="text-indent: 5em;">
                2.5.3.2 กดเมาส์ double click หรือ กดปุ่ม F2
              </p>
              <p style="text-indent: 5em;">
                2.5.3.3 พิมพ์ข้อความใหม่ และกด Enter
                หรือเลื่อนเมาส์ไปยังเซลล์อื่น
              </p>
              <h5 style="text-indent: 2.5em;">
                2.5.4 การป้อนข้อมูลที่ซ้ำกัน (AutoComplete)
              </h5>
              <p style="text-indent: 5em;">
                ข้อมูลบางลักษณะมีการป้อนซ้ำๆ กัน สามารถใช้ฟังก์ชั่น AutoComplete
                ที่โปรแกรม Excel เตรียมไว้ หรือเลือกจากรายการที่ปรากฏ
                ซึ่งจะช่วยป้อนข้อมูลให้โดยอัตโนมัติ
                เมื่อเทียบจากข้อมูลเดิมที่เคยป้อนมาก่อนแล้ว
                ทำให้ป้อนข้อมูลได้อย่างรวดเร็ว
              </p>
              <p style="text-indent: 5em;">
                2.5.4.1 พิมพ์ข้อมูลที่เคยป้อน และต้องการข้อมูลนั้นปรากฏขึ้นมา
                ให้กด Enter เพื่อยอมรับ
              </p>
              <p style="text-indent: 5em;">
                2.5.4.2 หากต้องการพิมพ์คำอื่นแทน เช่น วิชา
                ให้พิมพ์คำใหม่ที่ต้องการ และกด Enter
              </p>
              <div
                class="text-center"
                style="font-style:italic"
                @click="modals.modal15 = true"
              >
                <img src="/img/lesson2/p39.png" width="40%" />
                <p><br />รูปที่ 39 ตัวอย่างการป้อนข้อมูล แบบ AutoComplete</p>
              </div>
              <modal :show.sync="modals.modal15">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 39 ตัวอย่างการป้อนข้อมูล แบบ AutoComplete
                </h6>
                <img src="/img/lesson2/p39.png" width="100%" />
              </modal>
              <br />
              <h5 style="text-indent: 2.5em;">
                2.5.5 การป้อนข้อมูล Auto fill Options
              </h5>
              <p style="text-indent: 5em;">
                ข้อมูลที่สามารถป้อนโดยใช้คำสั่ง Auto fill Options คือ
                ข้อมูลที่มีการจัดเป็นรูปแบบไว้ก่อนหน้า
                โดยผู้ใช้งานต้องป้อนข้อมูลอย่างน้อย 2 ชุดที่ต่อเนื่อง
                จากนั้นใช้คำสั่ง Auto fill Options ตัวอย่างข้อมูลเช่น ลำดับเลข
                เดือน เป็นต้น
              </p>
              <div
                class="text-center"
                style="font-style:italic"
                @click="modals.modal16 = true"
              >
                <img src="/img/lesson2/p40.png" width="40%" />
                <p>
                  <br />รูปที่ 40 การป้อนข้อมูลโดยใช้คำสั่ง Auto fill Options
                </p>
              </div>
              <modal :show.sync="modals.modal16">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 40 การป้อนข้อมูลโดยใช้คำสั่ง Auto fill Options
                </h6>
                <img src="/img/lesson2/p40.png" width="100%" />
              </modal>
              <br />
              <h5 style="text-indent: 2.5em;">
                2.5.6 ประเภทข้อมูลที่ป้อนลงโปรแกรม Excel
              </h5>
              <p style="text-indent: 5em;">
                ข้อมูลที่สามารถป้อนบนสมุดงาน หรือแผ่นงาน แบ่งเป็น 5 ประเภท
                ได้แก่
              </p>
              <p style="text-indent: 7.5em;">5.5.1 ข้อมูลชนิดตัวอักษร (Text)</p>
              <p style="text-indent: 7.5em;">5.5.2 ข้อมูลชนิดตัวเลข (Number)</p>
              <p style="text-indent: 7.5em;">5.5.3 ข้อมูลสูตร (Formulas)</p>
              <p style="text-indent: 7.5em;">5.5.4 ข้อมูลชนิดวันที่ (Date)</p>
              <p style="text-indent: 7.5em;">5.5.5 ข้อมูลชนิดเวลา (Time)</p>
              <div
                class="text-center"
                style="font-style:italic"
                @click="modals.modal17 = true"
              >
                <img src="/img/lesson2/p41.png" width="60%" />
                <p>
                  <br />รูปที่ 41 ตัวอย่างข้อมูลที่ป้อนในสมุดงาน ชนิดข้อความ
                  ตัวเลข วันที่ และเวลา
                </p>
              </div>
              <modal :show.sync="modals.modal17">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 41 ตัวอย่างข้อมูลที่ป้อนในสมุดงาน ชนิดข้อความ ตัวเลข
                  วันที่ และเวลา
                </h6>
                <img src="/img/lesson2/p41.png" width="100%" />
              </modal>
              <!-- -------------------------------- -->
              <br />
              <br />
              <br />
              <br />
              <div class="container">
                <div class="row">
                  <div class="col-auto mr-auto">
                    <router-link to="/lesson2_1" title="Lesson2_1 Page">
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
                    <router-link to="/lesson2_3" title="Lesson2_3 Page">
                      <div class="btn-wrapper">
                        <base-button
                          tag="a"
                          target="_blank"
                          rel="noopener noreferrer"
                          class="mb-3 mb-sm-0"
                          outline
                          type="info"
                        >
                          Next
                          <i class="fa fa-chevron-right" aria-hidden="true"></i>
                        </base-button>
                      </div>
                    </router-link>
                  </div>
                </div>
              </div>
              <div class="text-center mt-5">Page 2/7</div>
            </div>
          </div>
        </div>
      </section>

      <hr />
      <div class="col-lg-center">
        <div class="pt-4 text-center">
          <h5 class="title">
            <span class="d-block mb-1">Author | Alongkot Gongmanee</span>
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
