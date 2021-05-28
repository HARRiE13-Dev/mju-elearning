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
              <h4>6. การบันทึกข้อมูล</h4>
              <p style="text-indent: 2.5em;">
                เมื่อผู้ใช้งานป้อนข้อมูลลงบนแผ่นงานเสร็จเรียบร้อยแล้ว
                ต้องทำการบันทึกข้อมูลไว้ในรูปแบบของไฟล์ข้อมูล
                เพื่อให้สามารถนำมาใช้งานได้ในครั้งต่อไป
                หรือเพื่อป้องการข้อมูลสูญหายระหว่างการทำงาน เช่น ไฟฟ้าดับ
                โปรแกรมหยุดการทำงาน เป็นต้น ขั้นตอนการบันทึกข้อมูล ดังนี้
              </p>
              <p style="text-indent: 2.5em;">6.1 คลิกแถบรายการคำสั่ง</p>
              <p style="text-indent: 2.5em;">6.2 คลิกเลือก คำสั่ง File</p>
              <p style="text-indent: 2.5em;">6.3 คลิกเลือกคำสั่ง Save</p>
              <p style="text-indent: 2.5em;">
                6.4 เลือกที่เก็บข้อมูล เช่น Drive E หรือ Folder
              </p>
              <p style="text-indent: 2.5em;">
                6.5 ตั้งชื่อไฟล์ข้อมูล เช่น เงินเดือนพนักงาน เป็นต้น
              </p>
              <p style="text-indent: 2.5em;">
                6.6 เลือกชนิดของไฟล์ข้อมูลที่ต้องการบันทึก ซึ่งโดยปกติ Excel
                จะเลือกเป็น Excel Workbook
              </p>
              <p style="text-indent: 2.5em;">
                6.7 คลิกที่ปุ่ม Save หรือ บันทึก
              </p>
              <br />

              <h5 style="text-indent: 2.5em;">หมายเหตุ</h5>
              <p style="text-indent: 5em;">
                - คำสั่ง Save as หมายถึง หยุดถามผู้ใช้งานทุกครั้งก่อนการบันทึก
                ควรใช้ในกรณีต้องการตั้งชื่อไฟล์ใหม่ ที่เก็บไฟล์แห่งใหม่ เป็นต้น
              </p>
              <p style="text-indent: 5em;">
                - ไฟล์ข้อมูลโปรแกรม Excel จะปรากฏนามสกุล .XLS หรือ .XLSX
              </p>
              <p style="text-indent: 5em;">
                -
                ข้อมูลที่อยู่ในไฟล์เป็นข้อมูลที่ปรากฏในสมุดงานในเวลาที่ใช้คำสั่ง
                Save ครั้งล่าสุด
              </p>
              <div class="text-center" style="font-style:italic">
                <img src="/img/lesson2/p42.png" width="80%" />
                <p><br />รูปที่ 42 หน้าจอการบันทึกข้อมูลของโปรแกรม Excel</p>
              </div>
              <br />
              <div class="text-center" style="font-style:italic">
                <img src="/img/lesson2/p43.png" width="40%" />
                <p><br />รูปที่ 43 รูปแบบและสัญลักษณ์ของไฟล์ข้อมูล Excel</p>
              </div>
              <br />
              <div class="text-center" style="font-style:italic">
                <img src="/img/lesson2/p44.png" width="80%" />
                <p>
                  <br />รูปที่ 44 ไฟล์ข้อมูล Excel ในมุมมองแบบแสดงรายละเอียด
                  (Detail)
                </p>
              </div>
              <br />
              <p style="text-indent: 5em;">
                จากรูปที่ 44 ไฟล์ข้อมูลจะปรากฏสัญลักษณ์โปรแกรม Excel ชื่อไฟล์
                วันที่ เวลาบันทึก ชนิดไฟล์ และขนาดของไฟล์
              </p>
              <h4>7. การเปิดใช้งานไฟล์ข้อมูล</h4>
              <p style="text-indent: 2.5em;">
                ไฟล์ Excel ที่ถูกบันทึก
                ผู้ใช้งานสามารถเปิดไฟล์เพื่อใช้งานโดยมีขั้นตอน ดังนี้
              </p>
              <p style="text-indent: 2.5em;">7.1 ไปที่แถบรายการคำสั่ง</p>
              <p style="text-indent: 2.5em;">7.2 คลิกเลือก คำสั่ง Open</p>
              <p style="text-indent: 2.5em;">
                7.3 เลือก Drive หรือ folder ที่เคยใช้เป็นที่เก็บไฟล์ข้อมูล
              </p>
              <p style="text-indent: 2.5em;">7.4 คลิกเลือกไฟล์ที่ต้องการเปิด</p>
              <p style="text-indent: 2.5em;">7.5 คลิกที่ปุ่ม Open หรือ เปิด</p>
              <br />
              <div class="text-center" style="font-style:italic">
                <img src="/img/lesson2/p45.png" width="80%" />
                <p><br />รูปที่ 45 การเปิดไฟล์ข้อมูล Excel</p>
              </div>
              <br />
              <div class="text-center" style="font-style:italic">
                <img src="/img/lesson2/p46.png" width="80%" />
                <p><br />รูปที่ 46 ตัวอย่างข้อมูลที่ได้จากการเปิดไฟล์ Excel</p>
              </div>
              <br />
              <h4>8. การทำงานร่วมกับกลุ่ม Cell</h4>
              <p style="text-indent: 2.5em;">
                การใช้งานสมุดงานที่ประกอบด้วยข้อมูลจำนวนมาก
                วิธีการเลือกเซลล์ที่ถูกวิธีจะช่วยให้ทำงานได้รวดเร็วยิ่งขึ้น
                การทำงานร่วมกับกลุ่มเซลล์มีขั้นตอน ดังนี้
              </p>
              <h5 style="text-indent: 2.5em;">
                8.1 การเลือก Cell หรือกลุ่ม Cell
              </h5>
              <p style="text-indent: 5em;">
                1) เลือก Cell 1 Cell - ใช้เมาส์คลิกเลือก Cell
                หรือใช้คีย์ลูกศรเลื่อนไป Cell ที่เลือก
              </p>
              <p style="text-indent: 5em;">
                2) เลือกทั้งแถว - ใช้เมาส์คลิกเลือกชื่อแถว
              </p>
              <p style="text-indent: 5em;">
                3) เลือกทั้งคอมลัมน์ - ใช้เมาส์คลิกเลือกชื่อคอลัมน์
              </p>
              <p style="text-indent: 5em;">
                4) เลือกกลุ่ม Cell ติดกัน -ใช้เมาส์คลิก Cell เริ่มต้นและลากเลือก
                Cell ที่ต้องการ
              </p>
              <p style="text-indent: 5em;">
                5) การเลือกกลุ่ม Cell ไม่ติดกัน - กดปุ่ม Ctrl ที่คีย์บอร์ด
                และใช้เมาส์คลิกเลือก Cell ที่ต้องการ
              </p>
              <div class="text-center" style="font-style:italic">
                <img src="/img/lesson2/p47.png" width="80%" />
                <p><br />รูปที่ 47 การเลือก Cell 1 Cell ตำแหน่ง B2</p>
              </div>
              <br />
              <div class="text-center" style="font-style:italic">
                <img src="/img/lesson2/p48.png" width="80%" />
                <p><br />รูปที่ 48 การเลือกทั้งแถว-แถวที่ 5</p>
              </div>
              <br />
              <div class="text-center" style="font-style:italic">
                <img src="/img/lesson2/p49.png" width="80%" />
                <p><br />รูปที่ 49 การเลือกทั้งคอลัมน์-คอลัมน์ C</p>
              </div>
              <br />
              <div class="text-center" style="font-style:italic">
                <img src="/img/lesson2/p50.png" width="80%" />
                <p><br />รูปที่ 50 การเลือกกลุ่ม Cell ติดกัน-ตำแหน่ง B4:D5</p>
              </div>
              <br />
              <div class="text-center font-italic">
                <img src="/img/lesson2/p51.png" width="80%" />
                <p>
                  <br />รูปที่ 51 การเลือกกลุ่ม Cell ไม่ติดกัน-ตำแหน่ง B4, B6,
                  E4 และ E6
                </p>
              </div>
              <br><br>
              <h5 style="text-indent: 2.5em;">8.2 การย้ายข้อมูล (Move)</h5>
              <p style="text-indent: 2.5em;">
                การย้ายข้อมูลใน Cell มีขั้นตอนการย้ายได้ 2 วิธี คือ
              </p>
              <p style="text-indent: 2.5em;">1) การย้ายข้อมูลใน Cell</p>
              <p style="text-indent: 5em;">
                1.1) คลิกเลือก Cell ที่ต้องการย้ายข้อมูล
              </p>
              <p style="text-indent: 5em;">
                1.2) ใช้เมาส์คลิกที่เส้นขอบ Cell ให้ปรากฏสัญลักษณ์ลูกศร ดังรูป
                52
              </p>
              <p style="text-indent: 5em;">1.3) คลิกเลือก Cell ตำแหน่งใหม่</p>
              <p style="text-indent: 5em;">
                1.4) ปล่อยมือจากเมาส์เพื่อวางข้อมูล
              </p>
              <p style="text-indent: 2.5em;">2) การย้ายข้อมูลในกลุ่ม Cell</p>
              <p style="text-indent: 5em;">
                2.1) คลิกเลือกกลุ่ม Cell ที่ต้องการย้ายกลุ่มข้อมูล
              </p>
              <p style="text-indent: 5em;">
                2.2) ใช้เมาส์คลิกที่เส้นขอบ Cell ให้ปรากฏเครื่องหมายลูกศร ดังรูป
                5
              </p>
              <p style="text-indent: 5em;">2.3) คลิกเลือก Cell ตำแหน่งใหม่</p>
              <p style="text-indent: 5em;">
                2.4) ปล่อยมือจากเมาส์เพื่อวางข้อมูล
              </p>
              <div class="text-center" style="font-style:italic">
                <img src="/img/lesson2/52.png" width="20%" />
                <p>
                  <br />รูปที่ 52 ลูกศรสัญลักษณ์การใช้คำสั่งย้ายข้อมูล (Move)
                </p>
              </div>
              <br />
              <div class="text-center" style="font-style:italic">
                <img src="/img/lesson2/53.png" width="60%" />
                <p><br />รูปที่ 53 การย้ายข้อมูลใน Cell D6</p>
              </div>
              <br />
              <div class="text-center" style="font-style:italic">
                <img src="/img/lesson2/54.png" width="60%" />
                <p><br />รูปที่ 54 การย้ายข้อมูลใน Cell D6</p>
              </div>
              <br />
              <h5 style="text-indent: 2.5em;">8.3 การคัดลอกข้อมูล (Copy)</h5>
              <p style="text-indent: 5em;">
                การป้อนข้อมูลที่ข้อมูลซ้ำ ๆ กัน
                สามารถใช้คำสั่งคัดลอกข้อมูลเพื่อให้เกิดความรวดเร็วยิ่งขึ้น
                โดยใช้คำสั่ง Copy หรือ คัดลอก ขั้นตอนการคัดลอกข้อมูล ดังนี้
              </p>
              <p style="text-indent: 5em;">1) การคัดลอกข้อมูลใน Cell</p>
              <p style="text-indent: 7.5em;">1.1) คลิกเลือก Cell ต้นฉบับ</p>
              <p style="text-indent: 7.5em;">
                1.2) วางเมาส์ในตำแหน่ง Cell ต้นฉบับที่เลือก
              </p>
              <p style="text-indent: 7.5em;">
                1.3) คลิกเมาส์ขวา เลือกคำสั่ง Copy
              </p>
              <p style="text-indent: 7.5em;">
                1.4) จะปรากฏเส้นไข่ปลาล้อมรอบ Cell ต้นฉบับ
              </p>
              <p style="text-indent: 7.5em;">
                1.5) เลือกตำแหน่ง Cell ใหม่ที่ต้องการนำข้อมูลไปใช้งาน
              </p>
              <p style="text-indent: 7.5em;">
                1.6) คลิกเมาส์ขวา เลือกคำสั่ง Paste หรือ วาง
              </p>
              <p style="text-indent: 5em;">2) การคัดลอกข้อมูลในกลุ่ม Cell</p>
              <p style="text-indent: 7.5em;">
                2.1) คลิกเลือกกลุ่ม Cell ต้นฉบับ
              </p>
              <p style="text-indent: 7.5em;">
                2.2) วางเมาส์ในตำแหน่งกลุ่ม Cell ต้นฉบับที่เลือก
              </p>
              <p style="text-indent: 7.5em;">
                2.3) คลิกเมาส์ขวา เลือกคำสั่ง Copy
              </p>
              <p style="text-indent: 7.5em;">
                2.4) จะปราฏเส้นไข่ปลาล้อมรอบกลุ่ม Cell ต้นฉบับ
              </p>
              <p style="text-indent: 7.5em;">
                2.5) เลือกตำแหน่ง Cell ใหม่ที่ต้องการนำข้อมูลไปใช้งาน
              </p>
              <p style="text-indent: 7.5em;">
                2.6) คลิกเมาส์ขวา เลือกคำสั่ง Paste หรือ วาง
              </p>
              <div class="text-center" style="font-style:italic">
                <img src="/img/lesson2/55.png" width="60%" />
                <p>
                  <br />รูปที่ 55 สัญลักษณ์คำสั่ง Copy (คัดลอก) เส้นไข่ปลา
                  (ต้นฉบับ) และคำสั่ง Paste (การวาง)
                </p>
              </div>
              <br />
              <div class="text-center" style="font-style:italic">
                <img src="/img/lesson2/56.png" width="80%" />
                <p><br />รูปที่ 56 การคัดลอกข้อมูลใน Cell ตำแหน่ง B4</p>
              </div>
              <br />
              <div class="text-center" style="font-style:italic">
                <img src="/img/lesson2/57.png" width="80%" />
                <p><br />รูปที่ 57 การคัดลอกข้อมูลในกลุ่ม Cell B4:D5</p>
              </div>
              <br />
              <h5 style="text-indent: 2.5em;">8.4 การแทรกข้อมูล (Insert)</h5>
              <p style="text-indent: 5em;">
                การเพิ่มข้อมูลเข้าไปในสมุดงานหรือแผ่นงานในภายหลัง
                ทำได้โดยการแทรก (Insert) ข้อมูล ซึ่งขั้นตอน ดังนี้
              </p>
              <p style="text-indent: 5em;">
                1) การแทรกข้อมูลใน Cell หรือ กลุ่ม Cell
              </p>
              <p style="text-indent: 6em;">
                1.1) คลิกเลือก Cell หรือกลุ่ม Cell ที่ต้องการแทรกข้อมูล
              </p>
              <p style="text-indent: 6em;">
                1.2) คลิกเมาส์ขวา เลือกคำสั่ง Insert หรือ แทรก
              </p>
              <p style="text-indent: 6em;">
                1.3) เลือกวิธีการจัดการกับข้อมูลใน Cell หรือกลุ่ม Cell
                ที่อยู่ในข้อ 1.1 โดยเลือกได้ 4 กรณี
              </p>
              <p style="text-indent: 7.5em;">
                - เลื่อนเซลล์ไปทางขวา ข้อมูลเดิมจะเลื่อนไปยัง Cell
                ถัดไปที่อยู่ด้านขวามือ
              </p>
              <p style="text-indent: 7.5em;">
                - เลื่อนเซลล์ลง ข้อมูลเดิมจะเลื่อนไปอยู่ด้านล่างของ Cell เดิม
              </p>
              <p style="text-indent: 7.5em;">
                - ทั้งแถว ข้อมูลเดิมทั้งแถวจะเลื่อนไปอยู่ด้านล่างทั้งแถว
              </p>
              <p style="text-indent: 7.5em;">
                - ทั้งคอลัมน์ ข้อมูลเดิมทั้งคอลัมน์จะเลื่อนไปอยู่คอลัมน์ด้านขวา
              </p>
              <p style="text-indent: 6em;">
                1.4) คลิกเมาส์ขวา เลือกคำสั่ง Paste หรือ วาง
              </p>
              <div class="text-center" style="font-style:italic">
                <img src="/img/lesson2/58.png" width="40%" />
                <p>
                  <br />รูปที่ 58 เลือกวิธีการจัดการกับข้อมูลใน Cell หรือกลุ่ม
                  Cell
                </p>
              </div>
              <br />
              <div class="text-center" style="font-style:italic">
                <img src="/img/lesson2/59.png" width="60%" />
                <p>
                  <br />รูปที่ 59 ผลการแทรกข้อมูล กรณี O เลื่อนเซลล์ไปทางขวา
                </p>
              </div>
              <br />
              <div class="text-center" style="font-style:italic">
                <img src="/img/lesson2/60.png" width="60%" />
                <p><br />รูปที่ 60 ผลการแทรกข้อมูล กรณี O เลื่อนเซลล์ลง</p>
              </div>
              <br />
              <div class="text-center" style="font-style:italic">
                <img src="/img/lesson2/61.png" width="60%" />
                <p><br />รูปที่ 61 ผลการแทรกข้อมูล กรณี O ทั้งแถว</p>
              </div>
              <br />
              <div class="text-center" style="font-style:italic">
                <img src="/img/lesson2/62.png" width="60%" />
                <p><br />รูปที่ 62 ผลการแทรกข้อมูล กรณี O ทั้งคอลัมน์</p>
              </div>
              <br />
              <p style="text-indent: 5em;">2) การแทรกข้อมูลทั้ง Row หรือ แถว</p>
              <p style="text-indent: 6em;">
                2.1) คลิกเลือก Row หรือแถว ที่ต้องการแทรกข้อมูล
              </p>
              <p style="text-indent: 6em;">
                2.2) คลิกเมาส์ขวา เลือกคำสั่ง Insert หรือ แทรก
              </p>
              <p style="text-indent: 6em;">
                2.3) ข้อมูลของแถวที่ถูกเลือกจะเลื่อนมาอยู่แถวด้านล่าง
              </p>
              <div class="text-center" style="font-style:italic">
                <img src="/img/lesson2/63.png" width="60%" />
                <p><br />รูปที่ 63 ผลการแทรกข้อมูลทั้งแถว</p>
              </div>
              <br />
              <p style="text-indent: 5em;">
                3) การแทรกข้อมูลทั้ง Column หรือ คอลัมน์
              </p>
              <p style="text-indent: 6em;">
                3.1) คลิกเลือก Column หรือ คอลัมน์ ที่ต้องการแทรกข้อมูล
              </p>
              <p style="text-indent: 6em;">
                3.2) คลิกเมาส์ขวา เลือกคำสั่ง Insert หรือ แทรก
              </p>
              <p style="text-indent: 6em;">
                3.3)
                ข้อมูลของคอลัมน์ที่ถูกเลือกจะเลื่อนมาอยู่ด้านขวาของคอลัมน์ที่ถูกเลือก
              </p>
              <div class="text-center" style="font-style:italic">
                <img src="/img/lesson2/64.png" width="60%" />
                <p><br />รูปที่ 64 ผลการแทรกข้อมูลทั้งคมลัมน์</p>
              </div>
              <!-- -------------------------------- -->
               <br />
              <br />
              <br />
              <br />
              <div class="container">
                <div class="row">
                  <div class="col-auto mr-auto">
                    <router-link to="/lesson2_2" title="Lesson2_2 Page">
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
                  <div class="col-auto">
                    <router-link to="/lesson2_4" title="Lesson2_4 Page">
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
              <div class="text-center mt-5">Page 3/7</div>
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
export default {
  name: "home",
  components: {},
};
</script>

<style></style>
