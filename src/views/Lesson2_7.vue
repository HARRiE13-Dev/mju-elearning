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
              <h5 style="text-indent: 2.5em;">
                2.11.4 ตัวอย่างการใช้งานฟังก์ชัน
              </h5>
              <br />
              <div
                class="text-center"
                style="font-style:italic"
                @click="modals.modal1 = true"
              >
                <img src="/img/lesson2/103.png" width="80%" />
                <p><br />รูปที่ 103 ตัวอย่างผลการคำนวณโดยใช้ฟังก์ชัน</p>
              </div>
              <modal :show.sync="modals.modal1">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 103 ตัวอย่างผลการคำนวณโดยใช้ฟังก์ชัน
                </h6>
                <img src="/img/lesson2/103.png" width="100%" />
              </modal>
              <br />
              <p style="text-indent: 2.5em;">
                จากรูปที่ 103 วิธีการคำนวณโดยการใช้ฟังก์ชันทำได้ดังนี้
              </p>
              <p style="text-indent: 5em;  font-weight: bold; ">
                การคำนวณเงินเดือนโดยใช้ฟังก์ชัน
              </p>
              <p style="text-indent: 5em;">1) ค่าสูงสุดของเงินเดือนพนักงาน</p>
              <p style="text-indent: 7.5em;">
                1.1) เลื่อน Cell Pointer ไปยังตำแหน่ง C9
              </p>
              <p style="text-indent: 7.5em;">
                1.2) พิมพ์ฟังก์ชัน =MAX(เซลล์เริ่มต้น:เซลล์สุดท้าย) หรือ
                =MAX(C4:C7)
              </p>
              <p style="text-indent: 7.5em;">1.3) ผลลัพธ์ =15,000</p>
              <p style="text-indent: 7.5em;">
                1.4) ความหมาย เงินเดือนพนักงานสูงสุด 15,000 บาท
              </p>
              <p style="text-indent: 5em;">2) ค่าต่ำสุดของเงินเดือนพนักงาน</p>
              <p style="text-indent: 7.5em;">
                2.1) เลื่อน Cell Pointer ไปยังตำแหน่ง C10
              </p>
              <p style="text-indent: 7.5em;">
                2.2) พิมพ์ฟังก์ชัน =MIN(เซลล์เริ่มต้น:เซลล์สุดท้าย) หรือ
                =MIN(C4:C7)
              </p>
              <p style="text-indent: 7.5em;">2.3) ผลลัพธ์ =12,400</p>
              <p style="text-indent: 7.5em;">
                2.4) ความหมาย เงินเดือนพนักงานต่ำสุด 12,400 บาท
              </p>
              <p style="text-indent: 5em;">3) ผลรวมของเงินเดือนพนักงาน</p>
              <p style="text-indent: 7.5em;">
                3.1) เลื่อน Cell Pointer ไปยังตำแหน่ง C11
              </p>
              <p style="text-indent: 7.5em;">
                3.2) พิมพ์ฟังก์ชัน =SUM(เซลล์เริ่มต้น:เซลล์สุดท้าย) หรือ
                =SUM(C4:C7)
              </p>
              <p style="text-indent: 7.5em;">3.3) ผลลัพธ์ =55,100</p>
              <p style="text-indent: 7.5em;">
                3.4) ความหมาย เงินเดือนรวมทั้งหมดของพนักงาน 55,100 บาท
              </p>
              <p style="text-indent: 5em;">4) ค่าเฉลี่ยของเงินเดือนพนักงาน</p>
              <p style="text-indent: 7.5em;">
                4.1) เลื่อน Cell Pointer ไปยังตำแหน่ง C12
              </p>
              <p style="text-indent: 7.5em;">
                4.2) พิมพ์ฟังก์ชัน =AVERAGE(เซลล์เริ่มต้น:เซลล์สุดท้าย) หรือ
                =AVERAGE(C4:C7)
              </p>
              <p style="text-indent: 7.5em;">4.3) ผลลัพธ์ =13,775</p>
              <p style="text-indent: 7.5em;">
                4.4) ความหมาย เงินเดือนเฉลี่ยของพนักงาน 13,775 บาท
              </p>
              <div
                class="text-center"
                style="font-style:italic"
                @click="modals.modal2 = true"
              >
                <img src="/img/lesson2/104.png" width="80%" />
                <p><br />รูปที่ 104 การคำนวณเงินเดือนโดยใช้ฟังก์ชัน</p>
              </div>
              <modal :show.sync="modals.modal2">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 104 การคำนวณเงินเดือนโดยใช้ฟังก์ชัน
                </h6>
                <img src="/img/lesson2/104.png" width="100%" />
              </modal>
              <br />

              <p style="text-indent: 5em;  font-weight: bold; ">
                การคำนวณค่าครองชีพ (พิเศษ) โดยใช้ฟังก์ชัน
              </p>
              <p style="text-indent: 5em;">1) ค่าสูงสุดของค่าครองชีพ (พิเศษ)</p>
              <p style="text-indent: 7.5em;">
                1.1) เลื่อน Cell Pointer ไปยังตำแหน่ง D9
              </p>
              <p style="text-indent: 7.5em;">
                1.2) พิมพ์ฟังก์ชัน =MAX(เซลล์เริ่มต้น:เซลล์สุดท้าย)
                หรือ=MAX(D4:D7)
              </p>
              <p style="text-indent: 7.5em;">1.3) ผลลัพธ์ =1,500</p>
              <p style="text-indent: 7.5em;">
                1.4) ความหมาย ค่าครองชีพ (พิเศษ) สูงสุดของพนักงาน 1,500 บาท
              </p>
              <p style="text-indent: 5em;">2) ค่าต่ำสุดของค่าครองชีพ (พิเศษ)</p>
              <p style="text-indent: 7.5em;">
                2.1) เลื่อน Cell Pointer ไปยังตำแหน่ง D10
              </p>
              <p style="text-indent: 7.5em;">
                2.2) พิมพ์ฟังก์ชัน =MIN(เซลล์เริ่มต้น:เซลล์สุดท้าย) หรือ
                =MIN(D4:D7)
              </p>
              <p style="text-indent: 7.5em;">2.3) ผลลัพธ์ =1,240</p>
              <p style="text-indent: 7.5em;">
                2.4) ความหมาย ค่าครองชีพ (พิเศษ) ต่ำสุดของพนักงาน 1,240 บาท
              </p>
              <p style="text-indent: 5em;">3) ผลรวมของค่าครองชีพ (พิเศษ)</p>
              <p style="text-indent: 7.5em;">
                3.1) เลื่อน Cell Pointer ไปยังตำแหน่ง D11
              </p>
              <p style="text-indent: 7.5em;">
                3.2) พิมพ์ฟังก์ชัน =SUM(เซลล์เริ่มต้น:เซลล์สุดท้าย) หรือ
                =SUM(D4:D7)
              </p>
              <p style="text-indent: 7.5em;">3.3) ผลลัพธ์ =5,500</p>
              <p style="text-indent: 7.5em;">
                3.4) ความหมาย ค่าครองชีพ (พิเศษ) รวมทั้งหมดของพนักงาน 5,510 บาท
              </p>
              <p style="text-indent: 5em;">4) ค่าเฉลี่ยของค่าครองชีพ (พิเศษ)</p>
              <p style="text-indent: 7.5em;">
                4.1) เลื่อน Cell Pointer ไปยังตำแหน่ง D12
              </p>
              <p style="text-indent: 7.5em;">
                4.2) พิมพ์ฟังก์ชัน =AVERAGE(เซลล์เริ่มต้น:เซลล์สุดท้าย) หรือ
                =AVERAGE(D4:D7)
              </p>
              <p style="text-indent: 7.5em;">4.3) ผลลัพธ์ =1,377.50</p>
              <p style="text-indent: 7.5em;">
                4.4) ความหมาย ค่าครองชีพ (พิเศษ) เฉลี่ยของพนักงาน 1,377.50 บาท
              </p>
              <br />
              <div
                class="text-center"
                style="font-style:italic"
                @click="modals.modal3 = true"
              >
                <img src="/img/lesson2/105.png" width="80%" />
                <p>
                  <br />รูปที่ 105 การคำนวณค่าครองชีพ (พิเศษ) โดยใช้ฟังก์ชัน
                </p>
              </div>
              <modal :show.sync="modals.modal3">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 105 การคำนวณค่าครองชีพ (พิเศษ) โดยใช้ฟังก์ชัน
                </h6>
                <img src="/img/lesson2/105.png" width="100%" />
              </modal>
              <br />
              <h5 style="text-indent: 2.5em;">
                2.11.5 การคำนวณค่าล่วงเวลา ประกันสังคม ภาษีเงินได้และรายรับสุทธิ
                โดยใช้ฟังก์ชันและการคัดลอกฟังก์ชัน
              </h5>
              <p style="text-indent: 5em;">
                การคำนวณโดยใช้ฟังก์ชันพื้นฐานเพื่อคำนวณค่าสูงสุด ค่าต่ำสุด
                ค่าเฉลี่ยและผลรวม เงินเดือนและค่าครองชีพ (พิเศษ) ของพนักงาน
                หากต้องการคำนวณหาค่าเหล่านั้นของข้อมูล ค่าล่วงเวลา ประกันสังคม
                ภาษีเงินได้และรายรับสุทธิ
                สามารถทำได้ด้วยการใช้คำสั่งคัดลอกฟังก์ชัน
                เนื่องจากเหตุผลฟังก์ชันที่ใช้คำนวณเหมือนกัน ได้แก่ MAX MIN SUM
                และ AVERAGE แตกต่างกันที่ตำแหน่งเซลล์อ้างอิงเท่านั้น
                การคัดลอกจะทำให้คำนวณได้รวดเร็วยิ่งขึ้น วิธีการทำได้ดังนี้
              </p>
              <p style="text-indent: 5em;">
                1) คลิกเลือกกลุ่มเซลล์ต้นฉบับ ในที่นี้เลือก D9:D12
              </p>
              <p style="text-indent: 5em;">
                2) นำเมาส์คลิกที่เส้นขอบกลุ่มเซลล์ ที่ปรากฏสัญลักษณ์การคัดลอก
                ดังรูปที่ 106
              </p>
              <p style="text-indent: 5em;">
                3)
                คลิกเมาส์ลากให้เกิดแถบสีคลุมกลุ่มเซลล์ที่ต้องการนำฟังก์ชันไปใช้งาน
                ดังรูปที่ 107
              </p>
              <p style="text-indent: 5em;">
                4) ค่าที่ได้จากการคำนวณโดยใช้ฟังก์ชันจะปรากฏในกลุ่มเซลล์ E9:E12
                F9:F12 G9:G12
              </p>
              <div
                class="text-center"
                style="font-style:italic"
                @click="modals.modal4 = true"
              >
                <img src="/img/lesson2/106.png" width="80%" />
                <p><br />รูปที่ 106 ตัวอย่างการเลือกต้นฉบับ</p>
              </div>
              <modal :show.sync="modals.modal4">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 106 ตัวอย่างการเลือกต้นฉบับ
                </h6>
                <img src="/img/lesson2/106.png" width="100%" />
              </modal>
              <br />
              <div
                class="text-center"
                style="font-style:italic"
                @click="modals.modal5 = true"
              >
                <img src="/img/lesson2/107.png" width="80%" />
                <p><br />รูปที่ 107 ตัวอย่างการวางฟังก์ชัน</p>
              </div>
              <modal :show.sync="modals.modal5">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 107 ตัวอย่างการวางฟังก์ชัน
                </h6>
                <img src="/img/lesson2/107.png" width="100%" />
              </modal>
              <br />
              <h5 style="text-indent: 2.5em;">
                2.11.6 การคำนวณโดยใช้ AutoSum
              </h5>
              <p style="text-indent: 5em;">
                SUM เป็นฟังก์ชันที่มีการใช้งานมากใน Excel จึงมีคำสั่ง Auto Sum
                ที่สามารถหาผลรวมข้อมูลตัวเลขได้รวดเร็วโดยไม่ต้องเขียนฟังก์ชัน
                SUM ทุกครั้งที่ต้องการหาผลรวม ขั้นตอนการใช้งานคำสั่ง AutoSum
                ดังนี้
              </p>
              <p style="text-indent: 5em;">
                1) เลื่อน Cell Pointer ไปยังตำแหน่ง C8
              </p>
              <p style="text-indent: 5em;">
                2) คลิกคำสั่ง AutoSum ที่แถบเครื่องมือ
              </p>
              <p style="text-indent: 5em;">
                3) จะปรากฏเส้นไข่ปลาล้อมรอบกลุ่มเซลล์ C4 ถึง C7
                และปรากฏสูตรฟังก์ชันที่ตำแหน่ง C8
              </p>
              <p style="text-indent: 5em;">
                4) กดปุ่ม Enter จะได้ผลลัพธ์ที่ตำแหน่งเซลล์ C8
              </p>
              <div
                class="text-center font-italic"
                @click="modals.modal6 = true"
              >
                <img src="/img/lesson2/108.png" width="80%" />
                <p><br />รูปที่ 108 การใช้คำสั่ง AutoSum</p>
              </div>
              <modal :show.sync="modals.modal6">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 108 การใช้คำสั่ง AutoSum
                </h6>
                <img src="/img/lesson2/108.png" width="100%" />
              </modal>
              <br />
              <h4>2.12 การเรียงข้อมูล</h4>
              <p style="text-indent: 2.5em;">
                การเรียงข้อมูลเพื่อให้ง่ายต่อการนำไปใช้งานสามารถทำได้โดยใช้คำสั่ง
                Sort ขั้นตอนการใช้คำสั่งดังนี้
              </p>
              <p style="text-indent: 2.5em;">
                1) คลิกเลือกกลุ่มเซลล์ที่ต้องการจัดเรียงข้อมูล B4 ถึง H7
                ดังรูปที่ 109
              </p>
              <p style="text-indent: 2.5em;">
                2) คลิกเลือกคำสั่ง Sort จากแถบเครื่องมือ ดังรูปที่ 110
              </p>
              <p style="text-indent: 2.5em;">
                3) จะปรากฏกล่องโต้ตอบการเรียงข้อมูล
                เพื่อให้เลือกเงื่อนไขการจัดเรียง ดังรูปที่ 111
              </p>
              <p style="text-indent: 5em;">
                - เลือกเงื่อนไข (Sort By) โดยจะปรากฏชื่อคอลัมน์ให้เลือก เช่น
                เงินเดือน
              </p>
              <p style="text-indent: 5em;">
                - เลือก Order เลือกค่าที่ต้องการใช้เป็นคีย์ในการเลือก เช่น
                น้อยไปหามาก
              </p>
              <p style="text-indent: 2.5em;">4) กดปุ่ม OK</p><br>
              <div
                class="text-center"
                style="font-style:italic"
                @click="modals.modal7 = true"
              >
                <img src="/img/lesson2/109.png" width="80%" />
                <p><br />รูปที่ 109 การเลือกกลุ่มเซลล์เพื่อจัดเรียงข้อมูล</p>
              </div>
              <modal :show.sync="modals.modal7">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 109 การเลือกกลุ่มเซลล์เพื่อจัดเรียงข้อมูล
                </h6>
                <img src="/img/lesson2/109.png" width="100%" />
              </modal>
              <br />
              <div
                class="text-center"
                style="font-style:italic"
                @click="modals.modal8 = true"
              >
                <img src="/img/lesson2/110.png" width="20%" />
                <p><br />รูปที่ 110 คำสั่งการเรียงข้อมูล</p>
              </div>
              <modal :show.sync="modals.modal8">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 110 คำสั่งการเรียงข้อมูล
                </h6>
                <img src="/img/lesson2/110.png" width="100%" />
              </modal>
              <br />
              <div
                class="text-center"
                style="font-style:italic"
                @click="modals.modal9 = true"
              >
                <img src="/img/lesson2/111.png" width="80%" />
                <p>
                  <br />รูปที่ 111 เงื่อนไขการเรียงข้อมูลตามเงินเดือน
                  และเรียงจากน้อยไปหามาก
                </p>
              </div>
              <modal :show.sync="modals.modal9">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 111 เงื่อนไขการเรียงข้อมูลตามเงินเดือน
                  และเรียงจากน้อยไปหามาก
                </h6>
                <img src="/img/lesson2/111.png" width="100%" />
              </modal>
              <br />
              <div
                class="text-center"
                style="font-style:italic"
                @click="modals.modal10 = true"
              >
                <img src="/img/lesson2/112.png" width="80%" />
                <p><br />รูปที่ 112 ข้อมูลก่อนการใช้คำสั่ง Sort</p>
              </div>
              <modal :show.sync="modals.modal10">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 112 ข้อมูลก่อนการใช้คำสั่ง Sort
                </h6>
                <img src="/img/lesson2/112.png" width="100%" />
              </modal>
              <br />
              <div
                class="text-center"
                style="font-style:italic"
                @click="modals.modal11 = true"
              >
                <img src="/img/lesson2/113.png" width="80%" />
                <p><br />รูปที่ 113 ข้อมูลหลังการใช้คำสั่ง Sort</p>
              </div>
              <modal :show.sync="modals.modal11">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 113 ข้อมูลหลังการใช้คำสั่ง Sort
                </h6>
                <img src="/img/lesson2/113.png" width="100%" />
              </modal>
              <br />
              <h4>2.13 การสร้างแผนภูมิ (Chart)</h4>
              <p style="text-indent: 2.5em;">
                เมื่อมีข้อมูลจำนวนมากขึ้น
                การนำเสนอข้อมูลในรูปแบบตารางอาจไม่น่าสนใจ
                และวิเคราะห์ข้อมูลได้ยาก
                การนำเสนอข้อมูลในรูปแบบกราฟจะช่วยให้การวิเคราะห์และเปรียบเทียบข้อมูลทำได้ง่ายขึ้น
                สามารถสื่อความหมายได้ชัดเจน
                โดยสามารถเลือกชนิดของกราฟที่เหมาะกับข้อมูลที่แสดง เช่น กราฟแท่ง
                กราฟเส้น เป็นต้น คำสั่งสำคัญของการสร้างกราฟ ดังนี้
              </p>

              <h5 style="text-indent: 2.5em;">2.13.1 ชนิดของกราฟ</h5>
              <p style="text-indent: 5em;">
                สามารถแสดงชนิดของกราฟที่สามารถนำมาใช้ในการนำเสนอข้อมูลได้โดยคลิกแถบเครื่องมือ
                Chart ที่ปรากฏบนแถบเครื่องมือ ดังรูปที่ 114
              </p>
              <div
                class="text-center"
                style="font-style:italic"
                @click="modals.modal12 = true"
              >
                <img src="/img/lesson2/114.png" width="60%" />
                <p><br />รูปที่ 114 แถบเครื่องมือการเลือกชนิดกราฟ</p>
              </div>
              <modal :show.sync="modals.modal12">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 114 แถบเครื่องมือการเลือกชนิดกราฟ
                </h6>
                <img src="/img/lesson2/114.png" width="100%" />
              </modal>
              <br />
              <h5 style="text-indent: 2.5em;">
                2.13.2 ประเภทกราฟที่สามารถนำมาใช้ในการนำเสนอข้อมูล
              </h5>
              <br />
              <div
                class="text-center"
                style="font-style:italic"
                @click="modals.modal13 = true"
              >
                <img src="/img/lesson2/115.png" width="60%" />
                <p><br />รูปที่ 115 ประเภทกราฟของโปรแกรม Excel</p>
              </div>
              <modal :show.sync="modals.modal13">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 115 ประเภทกราฟของโปรแกรม Excel
                </h6>
                <img src="/img/lesson2/115.png" width="100%" />
              </modal>
              <br />
              <h5 style="text-indent: 2.5em;">2.13.3 การสร้างกราฟ</h5>
              <p style="text-indent: 5em;">
                1) คลิกเลือกกลุ่มเซลล์ที่ต้องการนำข้อมูลเพื่อนำมาสร้างกราฟ
                ตัวอย่างดังรูปที่ 116 เลือกข้อมูล ชื่อ-สกุลและเงินเดือน
              </p>
              <p style="text-indent: 5em;">
                2) คลิกที่แถบเครื่องมือเพื่อเลือกชนิดกราฟ ในที่นี่ให้เลือกกราฟ
                column
              </p>
              <p style="text-indent: 5em;">
                3) กดปุ่ม OK จะปรากฏกราฟในสมุดงาน ดังรูปที่ 117
              </p>
              <div
                class="text-center"
                style="font-style:italic"
                @click="modals.modal14 = true"
              >
                <img src="/img/lesson2/116.png" width="80%" />
                <p><br />รูปที่ 116 การเลือกข้อมูลเพื่อนำมาสร้างกราฟ</p>
              </div>
              <modal :show.sync="modals.modal14">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 116 การเลือกข้อมูลเพื่อนำมาสร้างกราฟ
                </h6>
                <img src="/img/lesson2/116.png" width="100%" />
              </modal>
              <br />
              <h5 style="text-indent: 2.5em;">
                2.13.2 ประเภทกราฟที่สามารถนำมาใช้ในการนำเสนอข้อมูล
              </h5>
              <br />
              <div
                class="text-center"
                style="font-style:italic"
                @click="modals.modal15 = true"
              >
                <img src="/img/lesson2/117.png" width="80%" />
                <p><br />รูปที่ 117 กราฟแสดงเงินเดือนพนักงาน</p>
              </div>
              <modal :show.sync="modals.modal15">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 117 กราฟแสดงเงินเดือนพนักงาน
                </h6>
                <img src="/img/lesson2/117.png" width="100%" />
              </modal>
              <br />
              <h5 style="text-indent: 2.5em;">2.13.4 การสร้างกราฟ</h5>
              <p style="text-indent: 5em;">
                หากต้องการตกแต่งรูปแบบกราฟให้มีความน่าสนใจ
                และมีคำอธิบายที่ชัดเจนยิ่งขึ้น สามารถคลิกที่กราฟ
                และเลือกใช้งานแถบเครื่องมือตกแต่งกราฟที่ปรากฏบนแถบเครื่องมือ
                ดังรูปที่ 118
              </p>
              <div
                class="text-center"
                style="font-style:italic"
                @click="modals.modal16 = true"
              >
                <img src="/img/lesson2/118.png" width="80%" />
                <p><br />รูปที่ 118 เครื่องมือการตกแต่งกราฟ</p>
              </div>
              <modal :show.sync="modals.modal16">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 118 เครื่องมือการตกแต่งกราฟ
                </h6>
                <img src="/img/lesson2/118.png" width="100%" />
              </modal>
              <br />
              <h4>2.14 การพิมพ์ข้อมูลออกจากเครื่องพิมพ์</h4>
              <p style="text-indent: 2.5em;">
                ข้อมูลที่สร้างจากโปรแกรม Excel สามารถสั่งพิมพ์ (Print)
                ออกทางเครื่องพิมพ์ (Printer) ในรูปแบบเอกสารได้
                ขั้นตอนการสั่งพิมพ์ทำได้ดังนี้
              </p>
              <p style="text-indent: 2.5em;">1) เปิดไฟล์งานที่ต้องการ</p>
              <p style="text-indent: 2.5em;">
                2) คลิกคำสั่ง File และ Print จะปรากฏหน้าต่างตอบโต้ ดังรูปที่ 119
              </p>
              <p style="text-indent: 5em;">
                - เลือกชนิดและยี่ห้อของเครื่องพิมพ์ที่ติดตั้ง
              </p>
              <p style="text-indent: 5em;">
                - ตรวจสอบขอบเขตการสั่งพิมพ์ จากหัวข้อ Setting เช่น
                จำนวนชุดที่พิมพ์ หน้าที่พิมพ์ ขนาดกระดาษ ระยะขอบ เป็นต้น
              </p>
              <p style="text-indent: 5em;">
                - ตรวจสอบตัวอย่างเอกสารก่อนพิมพ์จากตัวอย่างที่ปรากฏด้านขวามือ
                หากไม่ตรงกับที่ต้องการให้ปรับ ค่าขอบเขตการพิมพ์ให้ถูกต้อง
              </p>
              <p style="text-indent: 2.5em;">
                3) คลิกคำสั่ง Print โปรแกรม Excel จะสั่ง Print
                สมุดงานออกทางเครื่องพิมพ์ให้ทันที
              </p>
              <div
                class="text-center font-italic"
                @click="modals.modal17 = true"
              >
                <img src="/img/lesson2/119.png" width="80%" />
                <p>
                  <br />รูปที่ 119 กล้องโต้ตอบการสั่งพิมพ์ข้อมูลออกทาง Printer
                </p>
              </div>
              <modal :show.sync="modals.modal17">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 119 กล้องโต้ตอบการสั่งพิมพ์ข้อมูลออกทาง Printer
                </h6>
                <img src="/img/lesson2/119.png" width="100%" />
              </modal>
              <hr>
              <!-- -------------------------------- -->
              <br />
              <br />
              <br />
              <br />
              <div class="container">
                <div class="row">
                  <div class="col-auto mr-auto">
                    <router-link to="/lesson2_6" title="Lesson2_6 Page">
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
                    <router-link to="/lesson3_1" title="Lesson3_1 Page">
                      <div class="btn-wrapper">
                        <base-button
                          tag="a"
                          target="_blank"
                          rel="noopener noreferrer"
                          class="mb-3 mb-sm-0"
                          outline
                          type="info"
                        >
                          บทเรียนที่ 3 
                          <i class="fa fa-chevron-right" aria-hidden="true"></i>
                        </base-button>
                      </div>
                    </router-link>
                  </div>
                </div>
              </div>
              <div class="text-center mt-5">Page 7/7</div>
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
      },
    };
  },
};
</script>

<style></style>
