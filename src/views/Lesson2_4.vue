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

              <h5 style="text-indent: 2.5em;">2.8.5 การลบข้อมูล (Delete)</h5>
              <p class="font-weight-bold" style="text-indent: 5em;">
                1) การลบข้อมูลใน Cell หรือ กลุ่ม Cell
              </p>
              <p style="text-indent: 6em;">
                1.1) คลิกเลือก Cell หรือกลุ่ม Cell ที่ต้องการแทรกข้อมูล
              </p>
              <p style="text-indent: 6em;">
                1.2) คลิกเมาส์ขวา เลือกคำสั่ง Delete หรือ ลบ
              </p>
              <p style="text-indent: 7.5em;">
                เลือกวิธีการจัดการกับข้อมูลใน Cell หรือกลุ่ม Cell ที่อยู่ในข้อ
                1.1 โดยเลือกได้ 4 กรณี
              </p>
              <p style="text-indent: 8em;">
                - เลื่อนเซลล์ไปทางซ้าย ข้อมูลเดิมจะเลื่อนไปยัง Cell
                ถัดไปที่อยู่ด้านซ้ายมือ
              </p>
              <p style="text-indent: 8em;">
                - เลื่อนเซลล์ขึ้น ข้อมูลเดิมจะเลื่อนไปอยู่ด้านบนของ Cell เดิม
              </p>
              <p style="text-indent: 8em;">
                - ทั้งแถว ข้อมูลเดิมทั้งแถวจะถูกลบ
              </p>
              <p style="text-indent: 8em;">
                - ทั้งคอลัมน์ ข้อมูลเดิมทั้งคอลัมน์จะถูกลบ
              </p>
              <div
                class="text-center"
                style="font-style:italic"
                @click="modals.modal1 = true"
              >
                <img src="/img/lesson2/65.png" width="40%" />
                <p>
                  <br />รูปที่ 65 เลือกวิธีการจัดการกับข้อมูลใน Cell หรือกลุ่ม
                  Cell
                </p>
              </div>

              <modal :show.sync="modals.modal1">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 65 เลือกวิธีการจัดการกับข้อมูลใน Cell หรือกลุ่ม Cell
                </h6>
                <img src="/img/lesson2/65.png" width="100%" />
              </modal>
              <br />
              <p class="font-weight-bold" style="text-indent: 5em;">2) การลบข้อมูลทั้ง Row หรือ แถว</p>
              <p style="text-indent: 6em;">
                2.1) คลิกเลือก Row หรือแถว ที่ต้องการลบข้อมูล
              </p>
              <p style="text-indent: 6em;">
                2.2) คลิกเมาส์ขวา เลือกคำสั่ง Delete หรือ ลบ
              </p>
              <p style="text-indent: 6em;">
                2.3) ข้อมูลของแถวที่ถูกเลือกจะถูกลบทันที
              </p>
              <div
                class="text-center"
                style="font-style:italic"
                @click="modals.modal2 = true"
              >
                <img src="/img/lesson2/66.png" width="80%" />
                <p><br />รูปที่ 66 การเลือกแถวและการลบข้อมูลทั้งแถว</p>
              </div>

              <modal :show.sync="modals.modal2">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 66 การเลือกแถวและการลบข้อมูลทั้งแถว
                </h6>
                <img src="/img/lesson2/66.png" width="100%" />
              </modal>
              <br />
              <p class="font-weight-bold" style="text-indent: 5em;">
                3) การลบข้อมูลทั้ง Column หรือ คอลัมน์
              </p>
              <p style="text-indent: 6em;">
                3.1) คลิกเลือก Column หรือ คอลัมน์ ที่ต้องการลบข้อมูล
              </p>
              <p style="text-indent: 6em;">
                3.2) คลิกเมาส์ขวา เลือกคำสั่ง Delete หรือ ลบ
              </p>
              <p style="text-indent: 6em;">
                3.3) ข้อมูลของคอลัมน์แถวที่ถูกเลือกจะถูกลบทันที
              </p>
              <div
                class="text-center"
                style="font-style:italic"
                @click="modals.modal3 = true"
              >
                <img src="/img/lesson2/67.png" width="80%" />
                <p><br />รูปที่ 67 การเลือกคอลัมน์ลาการลบข้อมูลทั้งคอลัมน์</p>
              </div>

              <modal :show.sync="modals.modal3">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 67 การเลือกคอลัมน์ลาการลบข้อมูลทั้งคอลัมน์
                </h6>
                <img src="/img/lesson2/67.png" width="100%" />
              </modal>
              <br />
              <p class="font-weight-bold" style="text-indent: 5em;">4) การลบข้อมูลแผ่นงาน (Sheet)</p>
              <p style="text-indent: 6em;">4.1) คลิกเลือกแผ่นงานที่ต้องการลบ</p>
              <p style="text-indent: 6em;">
                4.2) คลิกเมาส์ขวาในชื่อแผ่นงานที่เลือก เลือกคำสั่ง Delete
              </p>
              <p style="text-indent: 6em;">
                4.3) แผ่นงานที่ถูกเลือกจะถูกลบออกจากสมุดงาน
              </p>
              <div
                class="text-center"
                style="font-style:italic"
                @click="modals.modal4 = true"
              >
                <img src="/img/lesson2/68.png" width="80%" />
                <p><br />รูปที่ 68 แสดงการลบสมุดงาน (Sheet)</p>
              </div>

              <modal :show.sync="modals.modal4">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 68 แสดงการลบสมุดงาน (Sheet)
                </h6>
                <img src="/img/lesson2/68.png" width="100%" />
              </modal>
              <br />
              <p class="font-weight-bold" style="text-indent: 5em;">
                5) การลบข้อมูลในสมุดงาน (Workbook)
              </p>
              <p style="text-indent: 6em;">
                5.1) คลิกเลือกจุดตัดระหว่างแถวและคอลัมน์
                ให้เกิดแถบสีแสดงการเลือกทั้งหมด
              </p>
              <p style="text-indent: 6em;">
                5.2) คลิกเมาส์ขวา เลือกคำสั่ง Delete หรือ กดปุ่ม Delete
                ที่คีย์บอร์ด
              </p>
              <div
                class="text-center"
                style="font-style:italic"
                @click="modals.modal5 = true"
              >
                <img src="/img/lesson2/69.png" width="40%" />
                <p>
                  <br />รูปที่ 69 การเลือกสมุดงาน
                  (จุดตัดกันระหว่างคอลัมน์และแถว)
                </p>
              </div>

              <modal :show.sync="modals.modal5">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 69 การเลือกสมุดงาน (จุดตัดกันระหว่างคอลัมน์และแถว)
                </h6>
                <img src="/img/lesson2/69.png" width="100%" />
              </modal>
              <br />
              <div
                class="text-center"
                style="font-style:italic"
                @click="modals.modal6 = true"
              >
                <img src="/img/lesson2/70.png" width="80%" />
                <p><br />รูปที่ 70 การเลือกข้อมูลทั้งสมุดงาน</p>
              </div>

              <modal :show.sync="modals.modal6">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 70 การเลือกข้อมูลทั้งสมุดงาน
                </h6>
                <img src="/img/lesson2/70.png" width="100%" />
              </modal>
              <br />
              <h5 style="text-indent: 2.5em;">2.8.6 การลบข้อมูล (Delete)</h5>
              <p style="text-indent: 5em;">
                1) นำเมาส์ชี้ที่รอยต่อระหว่างชื่อคอลัมน์
                ให้ปรากฏเครื่องหมายลูกศร
              </p>
              <p style="text-indent: 5em;">
                2) กดปุ่มเมาส์ค้างไว้และลากขยายความกว้างคอลัมน์ตามต้องการ
              </p>
              <div
                class="text-center"
                style="font-style:italic"
                @click="modals.modal7 = true"
              >
                <img src="/img/lesson2/71.png" width="80%" />
                <p>
                  <br />รูปที่ 71
                  การเลือกตำแหน่งคอลัมน์เพื่อขยายความกว้างคอลัมน์
                </p>
              </div>

              <modal :show.sync="modals.modal7">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 71 การเลือกตำแหน่งคอลัมน์เพื่อขยายความกว้างคอลัมน์
                </h6>
                <img src="/img/lesson2/71.png" width="100%" />
              </modal>
              <br />
              <div
                class="text-center"
                style="font-style:italic"
                @click="modals.modal23 = true"
              >
                <img src="/img/lesson2/72.png" width="80%" />
                <p><br />รูปที่ 72 ตัวอย่างผลการขยายความกว้างคอลัมน์</p>
              </div>

              <modal :show.sync="modals.modal23">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 72 ตัวอย่างผลการขยายความกว้างคอลัมน์
                </h6>
                <img src="/img/lesson2/72.png" width="100%" />
              </modal>
              <br />
              <h5 style="text-indent: 2.5em;">2.8.7 การปรับความกว้างของแถว</h5>
              <p style="text-indent: 5em;">
                1) นำเมาส์ชี้ที่รอยต่อระหว่างชื่อคอลัมน์
                ให้ปรากฏเครื่องหมายลูกศร
              </p>
              <p style="text-indent: 5em;">
                2) กดปุ่มเมาส์ค้างไว้และลากขยายความกว้างคอลัมน์ตามต้องการ
              </p>
              <div
                class="text-center"
                style="font-style:italic"
                @click="modals.modal8 = true"
              >
                <img src="/img/lesson2/73.png" width="80%" />
                <p>
                  <br />รูปที่ 73 การเลือกตำแหน่งคอลัมน์เพื่อขยายความกว้างแถว
                </p>
              </div>

              <modal :show.sync="modals.modal8">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 73 การเลือกตำแหน่งคอลัมน์เพื่อขยายความกว้างแถว
                </h6>
                <img src="/img/lesson2/73.png" width="80%" />
              </modal>
              <br />
              <div
                class="text-center"
                style="font-style:italic"
                @click="modals.modal9 = true"
              >
                <img src="/img/lesson2/74.png" width="80%" />
                <p><br />รูปที่ 74 ตัวอย่างผลการขยายความกว้างแถว</p>
              </div>
              <modal :show.sync="modals.modal9">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 74 ตัวอย่างผลการขยายความกว้างแถว
                </h6>
                <img src="/img/lesson2/74.png" width="100%" />
              </modal>
              <br />
              <h4>2.9 การตกแต่งสมุดงาน</h4>
              <p style="text-indent: 2.5em;">
                เมื่อป้อนข้อมูลในสมุดงาน การปรับแต่งให้ข้อมูลมีรูปแบบที่เหมาะสม
                จะช่วยให้ง่ายต่อการแสดงข้อมูล หรือไปใช้งานได้ง่ายยิ่งขึ้น
                โดยทั่วไปการตกแต่งสมุดงานจะนำวัตถุ เช่น รูปภาพ รูปร่างอัตโนมัติ
                ตาราง การเปลี่ยนรูปแบบสีตัวหนังสือ รูปแบบพื้นหลัง
                เข้ามาช่วยจัดรูปแบบ ขั้นตอนการตกแต่งสมุดงาน ดังนี้
              </p>
              <h5 style="text-indent: 2.5em;">
                2.9.1 การกำหนดรูปแบบการแสดงผลข้อมูล
              </h5>
              <p style="text-indent: 5em;">
                โดยปกติรูปแบบ ขนาด ลักษณะตัวอักษร จะปรากฏในหน้าแรกของโปรแกรม
                Excel
              </p>
              <div
                class="text-center"
                style="font-style:italic"
                @click="modals.modal10 = true"
              >
                <img src="/img/lesson2/75.png" width="80%" />
                <p>
                  <br />รูปที่ 75 หน้าแรกของโปรแกรม Excel
                  ที่แสดงแถบเครื่องมือในการกำหนดการแสดงผลข้อมูล
                </p>
              </div>
              <modal :show.sync="modals.modal10">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 75 หน้าแรกของโปรแกรม Excel
                  ที่แสดงแถบเครื่องมือในการกำหนดการแสดงผลข้อมูล
                </h6>
                <img src="/img/lesson2/75.png" width="100%" />
              </modal>
              <br />
              <p style="text-indent: 2.5em;">
                จากรูปที่ 75 การกำหนดรูปแบบที่สำคัญได้แก่
              </p>
              <p style="text-indent: 5em;">
                1) เลือก Cell หรือ กลุ่ม Cell ที่ต้องการจัดรูปแบบ
              </p>
              <p style="text-indent: 5em;">2) คลิกที่เครื่องหมายชี้ลง</p>
              <p style="text-indent: 5em;">
                3) จะปรากฏแถบเครื่องมือ การจัดรูปแบบเซลล์ ดังรูปที่ 76
              </p>
              <div
                class="text-center"
                style="font-style:italic"
                @click="modals.modal11 = true"
              >
                <img src="/img/lesson2/76.png" width="80%" />
                <p><br />รูปที่ 76 การจัดรูปแบบเซลล์</p>
              </div>
              <modal :show.sync="modals.modal11">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 76 การจัดรูปแบบเซลล์
                </h6>
                <img src="/img/lesson2/76.png" width="100%" />
              </modal>
              <br />
              <p style="text-indent: 2.5em;">
                จากรูปที่ 76 ประกอบด้วยแถบคำสั่งย่อย ได้แก่
              </p>
              <div style="text-indent: 5em;">
               <b> • ตัวเลข </b>เป็นเครื่องมือในการจัดรูปแบบเซลล์ของข้อมูลที่เป็นตัวเลข
                โดยผู้ใช้งานสามารถเลือกรูปแบบที่ต้องการ ได้เช่น ทั่วไป ตัวเลข
                สกุลเงิน บัญชี วันที่ เวลา เป็นต้น
              </div>
              <div
                class="text-center"
                style="font-style:italic"
                @click="modals.modal12 = true"
              >
                <img src="/img/lesson2/77.png" width="60%" />
                <p><br />รูปที่ 77 การจัดรูปแบบเซลล์-ตัวเลข</p>
              </div>
              <modal :show.sync="modals.modal12">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 77 การจัดรูปแบบเซลล์-ตัวเลข
                </h6>
                <img src="/img/lesson2/77.png" width="100%" />
              </modal>
              <br />
              <div style="text-indent: 5em;">
              <b>  • การจัดแนว </b>เป็นกลุ่มคำสั่งจัดแนวข้อความ ได้แก่ แนวนอน แนวตั้ง
                การตัดข้อความ ย่อให้พอดี การผสานเซลล์ เป็นต้น
              </div>
              <div
                class="text-center"
                style="font-style:italic"
                @click="modals.modal13 = true"
              >
                <img src="/img/lesson2/78.png" width="60%" />
                <p><br />รูปที่ 78 การจัดรูปแบบเซลล์-การจัดแนว</p>
              </div>
              <modal :show.sync="modals.modal13">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 78 การจัดรูปแบบเซลล์-การจัดแนว
                </h6>
                <img src="/img/lesson2/78.png" width="100%" />
              </modal>
              <br />
              <div style="text-indent: 5em;">
               <b> • ฟอนต์ </b>เป็นกลุ่มคำสั่งจัดการฟอนต์ (รูปแบบ) ตัวอักษร
                สไตล์ตัวอักษร ขนาด การขีดเส้น สีตัวอักษร
                โดยจะปรากฏตัวอย่างของคำสั่งที่เลือกให้ผู้ใช้งาน
              </div>
              <div
                class="text-center"
                style="font-style:italic"
                @click="modals.modal14 = true"
              >
                <img src="/img/lesson2/79.png" width="60%" />
                <p><br />รูปที่ 79 การจัดรูปแบบเซลล์-การจัดแนว</p>
              </div>
              <modal :show.sync="modals.modal14">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 79 การจัดรูปแบบเซลล์-การจัดแนว
                </h6>
                <img src="/img/lesson2/79.png" width="100%" />
              </modal>
              <br />
              <div style="text-indent: 5em;">
              <b>  • เส้นขอบ </b>เป็นกลุ่มคำสั่งจัดรูปแบบเส้นขอบ
              </div>
              <div
                class="text-center"
                style="font-style:italic"
                @click="modals.modal15 = true"
              >
                <img src="/img/lesson2/80.png" width="60%" />
                <p><br />รูปที่ 80 การจัดรูปแบบเส้นขอบตาราง</p>
              </div>
              <modal :show.sync="modals.modal15">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 80 การจัดรูปแบบเส้นขอบตาราง
                </h6>
                <img src="/img/lesson2/80.png" width="100%" />
              </modal>
              <br />
              <h5 style="text-indent: 2.5em;">
                2.9.2 การแทรก SmartArt , Shapes
              </h5>
              <p style="text-indent: 5em;">
                สมุดงานสามารถแทรกรูปภาพ เช่น รูปถ่าย รูปภาพที่อยู่เว็บไซต์
                เป็นต้น เข้ามาในสมุดขั้นตอนดังนี้
              </p>
              <p style="text-indent: 5em;">1) คลิกรายการคำสั่ง Insert (แทรก)</p>
              <p style="text-indent: 5em;">
                2) เลือกคำสั่งย่อย Picture (รูปภาพ)
              </p>
              <p style="text-indent: 5em;">
                3) เลือก Drive หรือ folder ที่เก็บรูปภาพที่ต้องการนำมาแทรก
              </p>
              <p style="text-indent: 5em;">
                4) คลิกเลือกชื่อไฟล์รูปภาพที่ต้องการนำมาแทรกในสมุดงาน
              </p>
              <p style="text-indent: 5em;">5) คลิกปุ่ม Insert (แทรก)</p>
              <p style="text-indent: 5em;">
                6) รูปภาพจะปรากฏในสมุดงาน ตัวอย่างดังรูปที่ 81
              </p>
              <div
                class="text-center"
                style="font-style:italic"
                @click="modals.modal16 = true"
              >
                <img src="/img/lesson2/81.png" width="60%" />
                <p><br />รูปที่ 81 การแทรกรูปภาพ</p>
              </div>
              <modal :show.sync="modals.modal16">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 81 การแทรกรูปภาพ
                </h6>
                <img src="/img/lesson2/81.png" width="100%" />
              </modal>
              <br />
              <p style="text-indent: 5em;">
                หากต้องการตกแต่งรูปภาพให้กดเลือกรูปภาพ และกด double click
                จะปรากฏเครื่องหมายการเลือก จะปรากฏแถบเครื่องมือในการตกแต่งรูปภาพ
                ดังรูปที่ 82
              </p>
              <div
                class="text-center"
                style="font-style:italic"
                @click="modals.modal17 = true"
              >
                <img src="/img/lesson2/82.png" width="80%" />
                <p><br />รูปที่ 82 แถบเครื่องมือสำหรับตกแต่งรูปภาพบนสมุดงาน</p>
              </div>
              <modal :show.sync="modals.modal17">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 82 แถบเครื่องมือสำหรับตกแต่งรูปภาพบนสมุดงาน
                </h6>
                <img src="/img/lesson2/82.png" width="100%" />
              </modal>
              <br />
              <h5 style="text-indent: 2.5em;">
                2.9.3 การแทรก SmartArt , Shapes
              </h5>
              <div
                class="text-center"
                style="font-style:italic"
                @click="modals.modal18 = true"
              >
                <img src="/img/lesson2/83.png" width="60%" />
                <p><br />รูปที่ 83 ตัวอย่าง Smart Art</p>
              </div>
              <modal :show.sync="modals.modal18">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 83 ตัวอย่าง Smart Art
                </h6>
                <img src="/img/lesson2/83.png" width="100%" />
              </modal>
              <br />
              <div
                class="text-center"
                style="font-style:italic"
                @click="modals.modal19 = true"
              >
                <img src="/img/lesson2/84.png" width="60%" />
                <p><br />รูปที่ 84 ตัวอย่าง Shapes</p>
              </div>
              <modal :show.sync="modals.modal19">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 84 ตัวอย่าง Shapes
                </h6>
                <img src="/img/lesson2/84.png" width="100%" />
              </modal>
              <br />
              <p style="text-indent: 2.5em;">
                SmartArt และ Shapes
                เป็นเครื่องมือที่ช่วยให้การนำเสนอข้อมูลมีความน่าสนใจ
                ขั้นตอนการใช้งาน ดังนี้
              </p>
              <p style="text-indent: 5em;">1) คลิกรายการคำสั่ง Insert (แทรก)</p>
              <p style="text-indent: 5em;">
                2) เลือกคำสั่งย่อย SmartArt หรือ Shapes
              </p>
              <p style="text-indent: 5em;">
                3) คลิกเลือกรูปแบบที่ต้องการนำมาแทรกในสมุดงาน
              </p>
              <p style="text-indent: 5em;">
                4) ทำตามขั้นตอนที่แต่ละรูปแบบกำหนด เช่น
                คลิกเมาส์และวาดขนาดตามที่ต้องการ หรือกดปุ่ม ok
              </p>
              <br />
              <h5 style="text-indent: 2.5em;">
                2.9.4 การใส่เส้นตารางและการแรเงาพื้นหลังตาราง
              </h5>
              <p style="text-indent: 5em;">
                การใช้เส้นตารางและการแรเงาพื้นหลังตารางจะช่วยดูข้อมูลได้ง่ายและสะดวก
                ขั้นตอนการใส่เส้นตารางและการแรเงาพื้นหลังตาราง ดังนี้
              </p>
              <p style="text-indent: 5em;">
                1) เลือกเซลล์ หรือกลุ่มเซลล์ข้อมูลที่ต้องการใส่เส้นตาราง
              </p>
              <p style="text-indent: 5em;">
                2) คลิกเลือกแถบเครื่องมือการใส่เส้นตาราง
              </p>
              <p style="text-indent: 5em;">
                3) คลิกเลือกรูปแบบเส้นตารางที่ต้องการนำมาใส่ในตาราง ดังรูปที่ 85
              </p>
              <div
                class="text-center"
                style="font-style:italic"
                @click="modals.modal20 = true"
              >
                <img src="/img/lesson2/85.png" width="30%" />
                <p><br />รูปที่ 85 รูปแบบเส้นตาราง</p>
              </div>
              <modal :show.sync="modals.modal20">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 85 รูปแบบเส้นตาราง
                </h6>
                <img src="/img/lesson2/85.png" width="100%" />
              </modal>
              <br />
              <p style="text-indent: 2.5em;">การแรเงาช่องในตาราง</p>
              <p style="text-indent: 5em;">1) คลิกเลือกเซลล์ หรือกลุ่มเซลล์</p>
              <p style="text-indent: 5em;">
                2) คลิกที่ลูกศรหลังแถบเครื่องมือ(การแรเงา)
              </p>
              <p style="text-indent: 5em;">
                3) คลิกเลือกสีที่ต้องการแรเงา และสีตัวอักษรในตารางที่ต้องการ
              </p>
              <div
                class="text-center"
                style="font-style:italic"
                @click="modals.modal21 = true"
              >
                <img src="/img/lesson2/86.png" width="60%" />
                <p>
                  <br />รูปที่ 86 ตัวอย่างข้อมูลที่ยังไม่ใส่เส้นตารางและการแรเงา
                </p>
              </div>

              <modal :show.sync="modals.modal21">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 86 ตัวอย่างข้อมูลที่ยังไม่ใส่เส้นตารางและการแรเงา
                </h6>
                <img src="/img/lesson2/86.png" width="100%" />
              </modal>
              <br />
              <div
                class="text-center"
                style="font-style:italic"
                @click="modals.modal22 = true"
              >
                <img src="/img/lesson2/87.png" width="60%" />
                <p><br />รูปที่ 87 ตัวอย่างข้อมูลที่ใส่เส้นตารางและการแรเงา</p>
              </div>

              <modal :show.sync="modals.modal22">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 87 ตัวอย่างข้อมูลที่ใส่เส้นตารางและการแรเงา
                </h6>
                <img src="/img/lesson2/87.png" width="100%" />
              </modal>
              <!-- -------------------------------- -->
              <br />
              <br />
              <br />
              <br />
              <div class="container">
                <div class="row">
                  <div class="col-auto mr-auto">
                    <router-link to="/lesson2_3" title="Lesson2_3 Page">
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
                    <router-link to="/lesson2_5" title="Lesson2_5 Page">
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
              <div class="text-center mt-5">Page 4/7</div>
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
        modal21: false,
        modal22: false,
        modal23: false,
      },
    };
  },
};
</script>

<style></style>
