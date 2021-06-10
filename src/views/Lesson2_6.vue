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
              <p style="text-indent: 2.5em; font-weight: bold; ">
                คำนวณโดยการป้อนสูตรแบบตำแหน่งเซลล์
              </p>
              <p style="text-indent: 5em;">พนักงานลำดับ 1</p>
              <p style="text-indent: 7.5em;">
                - เลื่อน Cell Pointer ไปที่เซลล์ D4
              </p>
              <p style="text-indent: 7.5em;">
                - พิมพ์สูตร =C4*10/100 หรือ C4*10%
              </p>
              <p style="text-indent: 5em;">พนักงานลำดับ 2</p>
              <p style="text-indent: 7.5em;">
                - เลื่อน Cell Pointer ไปที่เซลล์ D5
              </p>
              <p style="text-indent: 7.5em;">
                - พิมพ์สูตร =C5*10/100 หรือ =C5*10%
              </p>
              <p style="text-indent: 5em;">พนักงานลำดับ 3</p>
              <p style="text-indent: 7.5em;">
                - เลื่อน Cell Pointer ไปที่เซลล์ D6
              </p>
              <p style="text-indent: 7.5em;">
                - พิมพ์สูตร =C6*10/100 หรือ =C6*10%
              </p>
              <p style="text-indent: 5em;">พนักงานลำดับ 4</p>
              <p style="text-indent: 7.5em;">
                - เลื่อน Cell Pointer ไปที่เซลล์ D6
              </p>
              <p style="text-indent: 7.5em;">
                - พิมพ์สูตร =C7*10/100 หรือ =C7*10%
              </p>
              <div
                class="text-center"
                style="font-style:italic"
                @click="modals.modal1 = true"
              >
                <img src="/img/lesson2/91.png" width="80%" />
                <p>
                  <br />รูปที่ 91 แถบสูตรแสดงสูตรที่ใช้คำนวณค่าครองชีพ (พิเศษ)
                  โดยใข้ค่าตัวเลข
                </p>
              </div>
              <modal :show.sync="modals.modal1">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 91 แถบสูตรแสดงสูตรที่ใช้คำนวณค่าครองชีพ (พิเศษ)
                  โดยใข้ค่าตัวเลข
                </h6>
                <img src="/img/lesson2/91.png" width="100%" />
              </modal>
              <br />
              <p style="text-indent: 2.5em;">
                จากรูปที่ 91 เมื่อเลื่อน Cell Pointer ไปยังตำแหน่ง D4
                และให้สังเกตที่แถบสูตร จะแสดงข้อมูลที่มาของผลลัพธ์ 1,5000
                โดยปรากฏสูตรคำนวณ =C4*10%
              </p>
              <div
                class="text-center"
                style="font-style:italic"
                @click="modals.modal2 = true"
              >
                <img src="/img/lesson2/92.png" width="80%" />
                <p>
                  <br />รูปที่ 92 แถบสูตรแสดงสูตรที่ใช้คำนวณค่าครองชีพ (พิเศษ)
                  โดยใช้ตำแหน่งเซลล์
                </p>
              </div>
              <modal :show.sync="modals.modal2">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 92 แถบสูตรแสดงสูตรที่ใช้คำนวณค่าครองชีพ (พิเศษ)
                  โดยใช้ตำแหน่งเซลล์
                </h6>
                <img src="/img/lesson2/92.png" width="100%" />
              </modal>
              <br />
              <p style="text-indent: 2.5em;">
                จากตัวอย่างการคำนวณ ค่าครองชีพ (พิเศษ) โดยใช้ตำแหน่งเซลล์
                ของพนักงานคนที่ 1 เมื่อต้องการคำนวณพนักงานคนที่ 2
                สูตรที่ใช้ในการคำนวณเปลี่ยนสูตรคำนวณ =C5*10% พนักงานคนที่ 3 สูตร
                =C6*10% พนักงานคนที่ 4 สูตร =C7*10%
                การใช้สูตรที่มีความแตกต่างกันเฉพาะตำแหน่งเซลล์
                สามารถใช้คำสั่งคัดลอกสูตรได้โดยง่าย
                ลักษณะการคัดลอกสูตรมีขั้นตอนดังนี้
              </p>
              <p style="text-indent: 5em;">
                1. เลื่อน Cell Pointer ไปยังตำแหน่งเซลล์ D4
              </p>
              <p style="text-indent: 5em;">
                2. สูตร =C4*10% กดปุ่ม Enter เพื่อให้ปรากฏผลลัพธ์
              </p>
              <p style="text-indent: 5em;">
                3. เลื่อน Cell Pointer ไปยังตำแหน่ง D4
              </p>
              <p style="text-indent: 5em;">
                4. คลิกเมาส์ที่ตำแหน่งด้านล่างของ Cell
                ในบริเวณที่ปรากฏเครื่องหมาย +
              </p>
              <p style="text-indent: 5em;">
                5. คลิกเมาส์ค้างไว้ และลากจนกระทั่งถึงข้อมูลพนักงานคนที่ 4
                และปล่อยมือจากเมาส์
              </p>
              <div
                class="text-center"
                style="font-style:italic"
                @click="modals.modal3 = true"
              >
                <img src="/img/lesson2/93.png" width="80%" />
                <p><br />รูปที่ 93 การคัดลอกสูตรคำนวณโดยใช้ตำแหน่งเซลล์</p>
              </div>
              <modal :show.sync="modals.modal3">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 93 การคัดลอกสูตรคำนวณโดยใช้ตำแหน่งเซลล์
                </h6>
                <img src="/img/lesson2/93.png" width="100%" />
              </modal>
              <br />
              <div
                class="text-center"
                style="font-style:italic"
                @click="modals.modal4 = true"
              >
                <img src="/img/lesson2/94.png" width="80%" />
                <p>
                  <br />รูปที่ 94 ผลลัพธ์ที่ได้จากการคำนวณค่าครองชีพ (พิเศษ)
                </p>
              </div>
              <modal :show.sync="modals.modal4">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 94 ผลลัพธ์ที่ได้จากการคำนวณค่าครองชีพ (พิเศษ)
                </h6>
                <img src="/img/lesson2/94.png" width="100%" />
              </modal>
              <br />
              <p style="text-indent: 2.5em; font-weight: bold; ">
                ข้อดีของการใช้สูตรที่ใช้ตำแหน่งเซลล์ ดังนี้
              </p>
              <p style="text-indent: 5em; ">
                1. สามารถใช้วิธีการคัดลอกสูตร ทำให้ประหยัดเวลาในการคำนวณ
                ถึงแม้จะมีข้อมูลพนักงานจำนวนมากก็ตาม
              </p>
              <p style="text-indent: 5em; ">
                2. หากข้อมูลในตำแหน่งเซลล์มีการเปลี่ยนแปลง เช่น เงินเดือน 15,000
                เปลี่ยนเป็น 16,000
                ผลลัพธ์ที่ได้จากการคำนวณจะเปลี่ยนแปลงให้โดยอัตโนมัติ
                ผู้ใช้งานไม่ต้องกลับมาแก้ไขสูตรคำนวณใหม่
              </p>
              <h5 style="text-indent: 2.5em;">
                2.10.3 ตัวอย่างการใช้สูตรคำนวณ
              </h5>
              <p style="text-indent: 5em; ">
                จากรูปที่ 94 จะแสดงตัวอย่างการคำนวณโดยการใช้สูตร ได้แก่
                ค่าล่วงเวลา ประกันสังคม ภาษีเงินได้ และรายรับสุทธิ
                เพื่อให้เกิดความเข้าใจหลักการสร้างสูตรคำนวณโดยใช้โปรแกรม Excel
                ตามลำดับดังนี้
              </p>
              <h6 style="text-indent: 5em;">
                2.10.3.1 ตัวอย่าง คำนวณค่าล่วงเวลา
              </h6>
              <br />
              <p style="text-indent: 5em;">เงื่อนไขคำนวณค่าล่วงเวลา</p>
              <p style="text-indent: 7.5em;">
                - พนักงานทุกคนทำงานล่วงเวลาเดือนละ 10 วัน
              </p>
              <p style="text-indent: 7.5em;">- ค่าแรงวันละ 300 บาท</p>
              <p style="text-indent: 5em;">พนักงานลำดับ 1</p>
              <p style="text-indent: 7.5em;">
                - เลื่อน Cell Pointer ไปที่เซลล์ E4
              </p>
              <p style="text-indent: 7.5em;">- พิมพ์สูตร =10*300</p>
              <p style="text-indent: 5em;">พนักงานลำดับ 2</p>
              <p style="text-indent: 7.5em;">
                - เลื่อน Cell Pointer ไปที่เซลล์ E5
              </p>
              <p style="text-indent: 7.5em;">- พิมพ์สูตร =10*300</p>
              <p style="text-indent: 5em;">พนักงานลำดับ 3</p>
              <p style="text-indent: 7.5em;">
                - เลื่อน Cell Pointer ไปที่เซลล์ E
              </p>
              <p style="text-indent: 7.5em;">- พิมพ์สูตร =10*300</p>
              <p style="text-indent: 5em;">พนักงานลำดับ 4</p>
              <p style="text-indent: 7.5em;">
                - เลื่อน Cell Pointer ไปที่เซลล์ E5
              </p>
              <p style="text-indent: 7.5em;">- พิมพ์สูตร =10*300</p>
              <br />
              <p style="text-indent: 2.5em; font-weight: bold; ">
                การคำนวณโดยใช้วิธีการคัดลอกสูตร (ควรใช้วิธีนี้)
              </p>
              <p style="text-indent: 2.5em;">พนักงานลำดับ 1</p>
              <p style="text-indent: 5em;">
                - เลื่อน Cell Pointer ไปที่เซลล์ E4
              </p>
              <p style="text-indent: 5em;">- พิมพ์สูตร =10*300</p>
              <p style="text-indent: 5em;">- ได้ผลลัพธ์ที่ตำแหน่ง E4 = 3,000</p>
              <p style="text-indent: 5em;">
                - เลื่อน Cell Pointer ไปยังตำแหน่ง E4
              </p>
              <p style="text-indent: 5em;">
                - คลิกที่เส้นขอบของเซลล์ E4 (บริเวณที่ปรากฏสัญลักษณ์ )+
              </p>
              <p style="text-indent: 5em;">
                - คลิกเมาส์ลากให้เกิดเส้นประครอบคลุมเซลล์ E5 ถึง E7 จะได้ผลลัพธ์
                ดังรูปที่ 95
              </p>
              <div
                class="text-center"
                style="font-style:italic"
                @click="modals.modal5 = true"
              >
                <img src="/img/lesson2/95.png" width="80%" />
                <p><br />รูปที่ 95 ผลลัพธ์ที่ได้จากการคำนวณค่าล่วงเวลา</p>
              </div>
              <modal :show.sync="modals.modal5">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 95 ผลลัพธ์ที่ได้จากการคำนวณค่าล่วงเวลา
                </h6>
                <img src="/img/lesson2/95.png" width="100%" />
              </modal>
              <br />
              <h6 style="text-indent: 5em;">
                2.10.3.2 ตัวอย่างการคำนวณประกันสังคม
              </h6>
              <br />
              <p style="text-indent: 5em;">เงื่อนไขคำนวณประกันสังคม</p>
              <p style="text-indent: 5em; font-style:italic;">
                ร้อยละ 5 ของเงินเดือน (ไม่รวมค่าครองชีพ และค่าล่วงเวลา)
              </p>
              <p style="text-indent: 5em;">การคำนวณโดยใช้วิธีการคัดลอกสูตร</p>
              <p style="text-indent: 5em;">พนักงานลำดับ 1</p>
              <p style="text-indent: 7.5em;">
                - เลื่อน Cell Pointer ไปที่เซลล์ F4
              </p>
              <p style="text-indent: 7.5em;">
                - พิมพ์สูตร =C4*5% หรือ =C4*(5/100) หรือ =C4*5/100
              </p>
              <p style="text-indent: 7.5em;">- ได้ผลลัพธ์ที่ตำแหน่ง F4 = 750</p>
              <p style="text-indent: 7.5em;">
                - เลื่อน Cell Pointer ไปยังตำแหน่ง F4
              </p>
              <p style="text-indent: 7.5em;">
                - คลิกที่เส้นขอบของเซลล์ F4 (บริเวณที่ปรากฏสัญลักษณ์ +)
              </p>
              <p style="text-indent: 7.5em;">
                - คลิกเมาส์ลากให้เกิดเส้นประครอบคลุมเซลล์ F5 ถึง F7 จะได้ผลลัพธ์
                ดังรูปที่ 96
              </p>
              <div
                class="text-center"
                style="font-style:italic"
                @click="modals.modal6 = true"
              >
                <img src="/img/lesson2/96.png" width="80%" />
                <p><br />รูปที่ 96 ผลลัพธ์ที่ได้จากการคำนวณประกันสังคม</p>
              </div>
              <modal :show.sync="modals.modal6">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 96 ผลลัพธ์ที่ได้จากการคำนวณประกันสังคม
                </h6>
                <img src="/img/lesson2/96.png" width="100%" />
              </modal>
              <br />
              <h6 style="text-indent: 5em;">
                2.10.3.3 ตัวอย่างการคำนวณภาษีเงินได้
              </h6>
              <br />
              <p style="text-indent: 5em;">เงื่อนไขคำนวณภาษีเงินได้</p>
              <p style="text-indent: 5em; font-style:italic;">
                ร้อยละ 3 ของเงินเดือน
              </p>
              <p style="text-indent: 5em;">การคำนวณโดยใช้วิธีการคัดลอกสูตร</p>
              <p style="text-indent: 5em;">พนักงานลำดับ 1</p>
              <p style="text-indent: 7.5em;">
                - เลื่อน Cell Pointer ไปที่เซลล์ G4
              </p>
              <p style="text-indent: 7.5em;">
                - พิมพ์สูตร =C4*5% หรือ =C4*(5/100) หรือ =C4*5/100
              </p>
              <p style="text-indent: 7.5em;">- ได้ผลลัพธ์ที่ตำแหน่ง G4 = 750</p>
              <p style="text-indent: 7.5em;">
                - เลื่อน Cell Pointer ไปยังตำแหน่ง G4
              </p>
              <p style="text-indent: 7.5em;">
                - คลิกที่เส้นขอบของเซลล์ G4 (บริเวณที่ปรากฏสัญลักษณ์ + )
              </p>
              <p style="text-indent: 7.5em;">
                - คลิกเมาส์ลากให้เกิดเส้นประครอบคลุมเซลล์ G5 ถึง G7 จะได้ผลลัพธ์
                ดังรูปที่ 97
              </p>
              <div
                class="text-center"
                style="font-style:italic"
                @click="modals.modal7 = true"
              >
                <img src="/img/lesson2/97.png" width="80%" />
                <p><br />รูปที่ 97 ผลลัพธ์ที่ได้จากการคำนวณภาษีเงินได้</p>
              </div>
              <modal :show.sync="modals.modal7">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 97 ผลลัพธ์ที่ได้จากการคำนวณภาษีเงินได้
                </h6>
                <img src="/img/lesson2/97.png" width="100%" />
              </modal>
              <br />
              <h6 style="text-indent: 5em;">
                2.10.3.4 ตัวอย่างการคำนวณรายรับสุทธิ
              </h6>
              <br />
              <p style="text-indent: 5em;">เงื่อนไขคำนวณภาษีเงินได้</p>
              <p style="text-indent: 5em; font-style:italic;">
                รายรับสุทธิ รายรับ – รายจ่าย
              </p>
              <p style="text-indent: 7.5em; font-style:italic;">
                • รายรับ คิดจาก เงินเดือน + ค่าครองชีพ (พิเศษ) + ค่าล่วงเวลา
              </p>
              <p style="text-indent: 7.5em; font-style:italic;">
                • รายจ่าย คิดจาก ประกันสังคม + ภาษีเงินได้
              </p>
              <p style="text-indent: 5em;">การคำนวณโดยใช้วิธีการคัดลอกสูตร</p>
              <p style="text-indent: 5em;">พนักงานลำดับ 1</p>
              <p style="text-indent: 7.5em;">
                - เลื่อน Cell Pointer ไปที่เซลล์ H4
              </p>
              <p style="text-indent: 7.5em;">- พิมพ์สูตร =(C4+D4+E4)-(F4+G4)</p>
              <p style="text-indent: 7.5em;">- ได้ผลลัพธ์ที่ตำแหน่ง G4 = 750</p>
              <p style="text-indent: 7.5em;">
                - เลื่อน Cell Pointer ไปยังตำแหน่ง G4
              </p>
              <p style="text-indent: 7.5em;">
                - คลิกที่เส้นขอบของเซลล์ G4 (บริเวณที่ปรากฏสัญลักษณ์ + )
              </p>
              <p style="text-indent: 7.5em;">
                - คลิกเมาส์ลากให้เกิดเส้นประครอบคลุมเซลล์ G5 ถึง G7 จะได้ผลลัพธ์
                ดังรูปที่ 98
              </p>
              <div
                class="text-center"
                style="font-style:italic"
                @click="modals.modal8 = true"
              >
                <img src="/img/lesson2/98.png" width="80%" />
                <p><br />รูปที่ 98 ผลลัพธ์ที่ได้จากการคำนวณรายรับสุทธิ</p>
              </div>
              <modal :show.sync="modals.modal8">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 98 ผลลัพธ์ที่ได้จากการคำนวณรายรับสุทธิ
                </h6>
                <img src="/img/lesson2/98.png" width="100%" />
              </modal>
              <br />
              <h4>2.11 การคำนวณโดยการใช้สูตรสำเร็จ หรือ ฟังก์ชัน (Function)</h4>
              <p style="text-indent: 2.5em;">
                การคำนวณโดยการป้อนสูตรคำนวณในหัวข้อที่ 10 โปรแกรม Excel
                ยังมีวิธีการคำนวณที่ใช้สูตรสำเร็จ หรือ ฟังก์ชัน (Function) คือ
                สูตรที่กำหนดไว้ล่วงหน้า ที่คำนวณโดยใช้ค่าที่ระบุที่เรียกว่า
                argument ฟังก์ชันจะใช้ในการคำนวณแบบต่างๆ ที่ใช้บ่อย
                การนำฟังก์ชันมาใช้งานจะทำให้ทำงานได้สะดวกยิ่งขึ้น
                เพราะไม่ต้องเขียนสูตรขึ้นมาใหม่ทุกครั้ง ใน Excel
                มีฟังก์ชันมากกว่า 300 ฟังก์ชัน สำหรับทำหน้าที่ต่าง ๆ เน การคำนวณ
                ตัวเลข การวิเคราะห์ข้อมูลสถิติทางการเงิน การจัดการฐานข้อมูล
                เป็ฯต้น ซึ่งแต่ละฟังก์ชันจะมีรายละเอียดการใช้งานที่แตกต่างกันไป
                วิธีการตรวจสอบฟังก์ชันทำได้โดยกดปุ่ม Shift + ปุ่ม F3
                จะปรากฏกล่องโต้ตอบฟังก์ชัน ดังรูปที่ 99
              </p>
              <div
                class="text-center"
                style="font-style:italic"
                @click="modals.modal9 = true"
              >
                <img src="/img/lesson2/99.png" width="60%" />
                <p><br />รูปที่ 99 กล่องโต้ตอบฟังก์ชันของโปรแกรม Excel</p>
              </div>
              <modal :show.sync="modals.modal9">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 99 กล่องโต้ตอบฟังก์ชันของโปรแกรม Excel
                </h6>
                <img src="/img/lesson2/99.png" width="100%" />
              </modal>
              <br />
              <h5 style="text-indent: 2.5em;">
                2.11.1 ส่วนประกอบของฟังก์ชัน
              </h5>
              <br />
              <div
                class="text-center"
                style="font-style:italic"
                @click="modals.modal10 = true"
              >
                <img src="/img/lesson2/100.png" width="60%" />
                <p><br />รูปที่ 100 ส่วนประกอบของฟังก์ชัน</p>
              </div>
              <modal :show.sync="modals.modal10">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 100 ส่วนประกอบของฟังก์ชัน
                </h6>
                <img src="/img/lesson2/100.png" width="100%" />
              </modal>
              <br />
              <p style="text-indent: 2.5em; font-weight: bold; ">
                จากรูปที่ 100 อธิบายดังนี้
              </p>
              <p style="text-indent: 2.5em;">
                1 เมื่อต้องการใช้งานฟังก์ชันต้องขึ้นต้นด้วยเครื่องหมายเท่ากับ
                (=) เช่นเดียวกับสูตรคำนวณทั่วไป
              </p>
              <p style="text-indent: 2.5em;">
                2 ชื่อฟังก์ชัน ต้องเป็นฟังก์ชันที่โปรแกรม Excel รู้จักเท่านั้น
              </p>
              <p style="text-indent: 2.5em;">
                3 เครื่องหมายจุลภาค (,) ใช้แบ่งค่า argument ออกจากกัน
              </p>
              <p style="text-indent: 2.5em;">
                4 ข้อมูลที่ป้อนเพื่อให้ฟังก์ชันนำไปใช้ในการคำนวณ ซึ่งอาจมีค่า
                argument ได้หลายค่า
              </p>
              <p style="text-indent: 2.5em;  font-weight: bold; ">
                ตัวอย่างการพิมพ์ฟังก์ชัน =ROUND ปัดเศษตัวเลขในเซลล์ A10
              </p>
              <div
                class="text-center"
                style="font-style:italic"
                @click="modals.modal11 = true"
              >
                <img src="/img/lesson2/101.png" width="50%" />
                <p>
                  <br />รูปที่ 101 ตัวอย่างการพิมพ์ฟังก์ชัน ROUND
                  (ปัดเศษตัวเลขในเซลล์)
                </p>
              </div>
              <modal :show.sync="modals.modal11">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 101 ตัวอย่างการพิมพ์ฟังก์ชัน ROUND
                  (ปัดเศษตัวเลขในเซลล์)
                </h6>
                <img src="/img/lesson2/101.png" width="100%" />
              </modal>
              <br />
              <p style="text-indent: 2.5em;">จากรูปที่ 101 อธิบายดังนี้</p>
              <p style="text-indent: 5em;">1. เครื่องหมาย =</p>
              <p style="text-indent: 5em;">2. ชื่อฟังก์ชัน ROUND</p>
              <p style="text-indent: 5em;">3. argument (A10,2)</p>
              <p style="text-indent: 5em;">4. คำแนะนำไวยากรณ์และ argument</p>
              <br />

              <p style="text-indent: 2.5em;  font-weight: bold; ">
                ตัวอย่างการพิมพ์ฟังก์ชัน =SUM การหาผลรวมค่าข้อมูลของเซลล์ E3 ถึง
                E5
              </p>
              <div
                class="text-center"
                style="font-style:italic"
                @click="modals.modal12 = true"
              >
                <img src="/img/lesson2/102.png" width="50%" />
                <p><br />รูปที่ 102 ตัวอย่างการพิมพ์ฟังก์ชัน SUM (ผลรวม)</p>
              </div>
              <modal :show.sync="modals.modal12">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 102 ตัวอย่างการพิมพ์ฟังก์ชัน SUM (ผลรวม)
                </h6>
                <img src="/img/lesson2/102.png" width="100%" />
              </modal>
              <br />
              <p style="text-indent: 2.5em;">จากรูปที่ 102 อธิบายดังนี้</p>
              <p style="text-indent: 5em;">1. เครื่องหมาย =</p>
              <p style="text-indent: 5em;">2. ชื่อฟังก์ชัน SUM</p>
              <p style="text-indent: 5em;">3. argument (E3:E15)</p>

              <h5 style="text-indent: 2.5em;">
                2.11.2 อาร์กิวเมนต์ (Argument)
              </h5>
              <p style="text-indent: 5em;">
                อาร์กิวเมนต์ (Argument) คือ
                ส่วนของข้อมูลที่ฟังก์ชั่นจะนำไปใช้ประมวลผล
                ซึ่งอาจจะเป็นเซลอ้างอิง ตัวเลข ข้อความ หรือค่าตรรกะ เช่น
                จริงหรือเท็จ อาร์เรย์ ค่าความผิดพลาด สูตรหรือฟังก์ชั่นอื่น
                ซึ่งแต่ละฟังก์ชั่นจะต้องการอาร์กิวเมนต์ที่แตกต่างกันออกไป
                ขึ้นอยู่กับรูปแบบของฟังก์ชั่นและจำนวนข้อมูลที่จะใช้งาน
                การป้อนค่าอาร์กิวเมนต์ในฟังก์ชันต้องทราบก่อนว่าฟังก์ชันที่ใช้งานอยู่นั้นรับค่าอาร์กิวเมนต์แบบใด
                โดยทั่วไปอาร์กิวเมนต์มีรูปแบบ เช่น
              </p>
              <p style="text-indent: 5em;">
                - ใส่ข้อมูลที่เป็นตัวเลขโดยตรง เช่น =SUM(500,800,900,1000)
                เพื่อหาผลรวมของค่า 500 800 900 1000
              </p>
              <p style="text-indent: 5em;">
                - อ้างอิงค่าใน Excel เช่น =SUM(C2:C5)
                เพื่อหาผลรวมของค่าข้อมูลที่อยู่ในตำแหน่งเซลล์ C2 C3 C4 และ C5
              </p>
              <p style="text-indent: 5em;">
                - บางฟังก์ชันต้องป้อนค่าที่เป็นข้อความ เวลา วันที่
                โดยต้องอยู่ในเครื่องหมาย “” เสมอ
              </p>
              <br />

              <h5 style="text-indent: 2.5em;">
                2.11.3 ฟังก์ชันสำคัญ
              </h5>
              <br />
              <table class="table">
                <thead class="thead-light text-center">
                  <tr>
                    <th scope="col">ฟังก์ชัน</th>
                    <th scope="col">รูปแบบการใช้งาน</th>
                    <th scope="col">ความหมาย</th>
                  </tr>
                </thead>
                <tbody class="text-center">
                  <tr>
                    <td>MAX (Maximum)</td>
                    <td>=MAX(กลุ่มเซลล์)</td>
                    <td>หาค่าสูงสุดของกลุ่มข้อมูลตัวเลข</td>
                  </tr>
                  <tr>
                    <td>MIN (Minimum)</td>
                    <td>=MIN(กลุ่มเซลล์)</td>
                    <td>หาค่าต่ำสุดของกลุ่มข้อมูลตัวเลข</td>
                  </tr>
                  <tr>
                    <td>SUM</td>
                    <td>=SUM(กลุ่มเซลล์)</td>
                    <td>หาผลรวมของกลุ่มข้อมูลตัวเลข</td>
                  </tr>
                  <tr>
                    <td>AVERAGE</td>
                    <td>=AVERAGE(กลุ่มเซลล์)</td>
                    <td>หาค่าเฉลี่ยของกลุ่มข้อมูลตัวเลข</td>
                  </tr>
                </tbody>
              </table>
              <div class="text-center" style="font-style:italic">
                <p><br />ตารางที่ 2 ฟังก์ชันสำหรับการใช้งานทั่วไปของ Excel</p>
              </div>

              <!-- -------------------------------- -->
              <br />
              <br />
              <br />
              <br />
              <div class="container">
                <div class="row">
                  <div class="col-auto mr-auto">
                    <router-link to="/lesson2_5" title="Lesson2_5 Page">
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
                    <router-link to="/lesson2_7" title="Lesson2_7 Page">
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
              <div class="text-center mt-5">Page 6/7</div>
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
      },
    };
  },
};
</script>

<style></style>
