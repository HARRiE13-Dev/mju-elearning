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
              <h4>2.10 การคำนวณโดยการใช้สูตร</h4>
              <p style="text-indent: 2.5em;">
                จากเนื้อหาดังกล่าวมาในหัวข้อลำดับ 1-9
                เป็นการป้อนข้อมูลและการจัดรูปแบบให้เหมาะสมกับข้อมูลที่ต้องการนำเสนอ
                เพื่อให้ผู้ใช้งานแยกแยะข้อมูลได้ง่ายและสะดวกต่อการนำไปใช้งาน
                แต่หัวใจสำคัญของโปรแกรม Excel คือ การคำนวณ และวิเคราะห์ข้อมูล
              </p>
              <h5 style="text-indent: 2.5em;">
                2.10.1 หลักการสำคัญของการป้อนสูตรคำนวณ
              </h5>
              <p style="text-indent: 5em;">
                1) ใช้เครื่องหมายเท่ากับ (=) นำหน้าสูตรเสมอ
              </p>
              <p style="text-indent: 5em;">
                2) เครื่องหมายที่ใช้ในการคำนวณ ได้แก่
              </p>
              <p style="text-indent: 7.5em;">• เครื่องหมายบวก (+)</p>
              <p style="text-indent: 7.5em;">• เครื่องหมายลบ (-)</p>
              <p style="text-indent: 7.5em;">
                • เครื่องหมายคูณ (X) (โปรแกรม Excel ใช้เครื่องหมาย *)
              </p>
              <p style="text-indent: 7.5em;">• เครื่องหมายหาร (/)</p>
              <p style="text-indent: 7.5em;">• เครื่องหมายยกกำลัง (^)</p>
              <p style="text-indent: 7.5em;">• เครื่องหมายร้อยละ (%)</p>
              <p style="text-indent: 5em;">
                3) ลำดับการคำนวณจะเกิดขึ้นตามลำดับความสำคัญของเครื่องหมาย ดังนี้
              </p>
              <table class="table">
                <thead class="thead-light text-center">
                  <tr>
                    <th scope="col">ลำดับความสำคัญ</th>
                    <th scope="col">เครื่องหมาย</th>
                  </tr>
                </thead>
                <tbody class="text-center">
                  <tr>
                    <td>1. วงเล็บ</td>
                    <td>( &emsp; )</td>
                  </tr>
                  <tr>
                    <td>2. ยกกำลัง</td>
                    <td>^</td>
                  </tr>
                  <tr>
                    <td>3. คูณ หาร</td>
                    <td>x &emsp; /</td>
                  </tr>
                  <tr>
                    <td>4. บวก ลบ</td>
                    <td>+ &emsp; -</td>
                  </tr>
                </tbody>
              </table>
              <div class="text-center" style="font-style:italic">
                <p><br />ตารางที่ 1 ลำดับความสำคัญของเครื่องหมายคำนวณ</p>
              </div>
              <br />
              <p style="text-indent: 2.5em;">
                หมายเหตุ ถ้าเครื่องหมายที่ใช้ในสูตรคำนวณมีลำดับความสำคัญเท่ากัน
                โปรแกรม Excel จะคำนวณโดยกระทำจากทางซ้ายไปขวาของสูตร
              </p>
              <p style="text-indent: 5em;">
                4) ตัวอย่างวิธีการคำนวณและผลลัพธ์
              </p>
              <div class="container" style="text-indent: 7.5em;">
                <div class="row">
                  <div class="col-sm">
                    สูตรที่ 1
                  </div>
                  <div class="col-sm">
                    สูตร
                  </div>
                  <div class="col-sm">
                    = 3 + 2 x 4 ^ 2
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm">
                    วิธีการคำนวณ
                  </div>
                  <div class="col-sm"></div>
                  <div class="col-sm">
                    = 3 + 2 x 1 6
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm"></div>
                  <div class="col-sm"></div>
                  <div class="col-sm">
                    = 3 + 3 2
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm">
                    ผลลัพธ์
                  </div>
                  <div class="col-sm"></div>
                  <div class="col-sm">
                    = 35
                  </div>
                </div>
              </div>
              <br />
              <div class="container" style="text-indent: 7.5em;">
                <div class="row">
                  <div class="col-sm">
                    สูตรที่ 2
                  </div>
                  <div class="col-sm">
                    สูตร
                  </div>
                  <div class="col-sm">
                    = ( 3 + 2 ) X 4 ^ 2
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm">
                    วิธีการคำนวณ
                  </div>
                  <div class="col-sm"></div>
                  <div class="col-sm">
                    = 5 X 1 6
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm">
                    ผลลัพธ์
                  </div>
                  <div class="col-sm"></div>
                  <div class="col-sm">
                    = 80
                  </div>
                </div>
              </div>
              <br />
              <div class="container" style="text-indent: 7.5em;">
                <div class="row">
                  <div class="col-sm">
                    สูตรที่ 3
                  </div>
                  <div class="col-sm">
                    สูตร
                  </div>
                  <div class="col-sm">
                    = ( 5 + 5 ) - ( 2 / 2 )
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm">
                    วิธีการคำนวณ
                  </div>
                  <div class="col-sm"></div>
                  <div class="col-sm">
                    = 10 - 1
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm">
                    ผลลัพธ์
                  </div>
                  <div class="col-sm"></div>
                  <div class="col-sm">
                    = 9
                  </div>
                </div>
              </div>
              <br />
              <div class="container" style="text-indent: 7.5em;">
                <div class="row">
                  <div class="col-sm">
                    สูตรที่ 4
                  </div>
                  <div class="col-sm">
                    สูตร
                  </div>
                  <div class="col-sm">
                    = 5 + 5 - ( 2 / 2 )
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm">
                    วิธีการคำนวณ
                  </div>
                  <div class="col-sm"></div>
                  <div class="col-sm">
                    = 5 + 5 - 1
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm">
                    ผลลัพธ์
                  </div>
                  <div class="col-sm"></div>
                  <div class="col-sm">
                    = 9
                  </div>
                </div>
              </div>
              <br />
              <h5 style="text-indent: 2.5em;">
                2.10.2 วิธีการป้อนสูตรคำนวณ
              </h5>
              <p style="text-indent: 5em;">
                1) เปิดไฟล์ข้อมูล Excel โดยใช้คำสั่ง Open
              </p>
              <p style="text-indent: 5em;">
                2) ตัวอย่างไฟล์ข้อมูลที่ใช้ในการคำนวณ ดังรูปที่ ......
              </p>
              <p style="text-indent: 5em;">
                3) เลื่อน Cell Pointer ไปยังตำแหน่งที่ต้องการให้ผลลัพธ์ปรากฏ
                เช่น D4
              </p>
              <p style="text-indent: 5em;">4) การคำนวณใช้เงื่อนไขดังนี้</p>
              <p style="text-indent: 7.5em;">
                • ค่าครองชีพ (พิเศษ) ร้อยละ 10 ของเงินเดือน
              </p>
              <p style="text-indent: 7.5em;">
                • ค่าล่วงเวลา กำหนดให้ทุกคนทำงานล่วงเวลาเดือนละ 10 วันๆ ละ 300
                บาท
              </p>
              <p style="text-indent: 7.5em;">
                • ประกันสังคม ร้อยละ 5 ของเงินเดือน (ไม่รวมค่าครองชีพ
                และค่าล่วงเวลา)
              </p>
              <p style="text-indent: 7.5em;">
                • ภาษีเงินได้ ร้อยละ 3 ของเงินเดือน
              </p>
              <p style="text-indent: 7.5em;">• รายรับสุทธิ รายรับ – รายจ่าย</p>
              <p style="text-indent: 9em;">
                - รายรับ คิดจาก เงินเดือน + ค่าครองชีพ (พิเศษ) + ค่าล่วงเวลา
              </p>
              <p style="text-indent: 9em;">
                - รายจ่าย คิดจาก ประกันสังคม + ภาษีเงินได้
              </p>
              <div class="text-center" style="font-style:italic">
                <img src="/img/lesson2/88.png" width="80%" />
                <p><br />รูปที่ 88 ตัวอย่างไฟล์ข้อมูล Excel</p>
              </div>
              <br />
              <p style="text-indent: 5em;">5) คำนวณโดยการป้อนสูตรแบบตัวเลข</p>
              <p style="text-indent: 7.5em;">
                5.1) ตัวอย่างการคำนวณค่าครองชีพ (เงินพิเศษ)
              </p>
              <p style="text-indent: 9em;">
                เงื่อนไขการคำนวณ (เพื่อนำมาสร้างสูตร)
              </p>
              <p style="text-indent: 9em;">
                ค่าครองชีพ (เงินพิเศษ) ร้อยละ 10 ของเงินเดือน
              </p>

              <p style="text-indent: 7.5em; font-weight: bold; ">
                วิธีการคำนวณ
              </p>
              <p style="text-indent: 9em;">พนักงานลำดับ 1</p>
              <p style="text-indent: 9em;">
                - เลื่อน Cell Pointer ไปที่เซลล์ D4
              </p>
              <p style="text-indent: 9em;">
                - พิมพ์สูตร =15000*10/100 หรือ 15000*10%
              </p>
              <p style="text-indent: 9em;">พนักงานลำดับ 2</p>
              <p style="text-indent: 9em;">
                - เลื่อน Cell Pointer ไปที่เซลล์ D5
              </p>
              <p style="text-indent: 9em;">
                - พิมพ์สูตร = 14500*10/100 หรือ =14500*10%
              </p>
              <p style="text-indent: 9em;">พนักงาน ลำดับ 3</p>
              <p style="text-indent: 9em;">
                - เลื่อน Cell Pointer ไปที่เซลล์ D6
              </p>
              <p style="text-indent: 9em;">
                - พิมพ์สูตร = 13200*10/100 หรือ =13200*10%
              </p>
              <p style="text-indent: 9em;">พนักงาน ลำดับ 4</p>
              <p style="text-indent: 9em;">
                - เลื่อน Cell Pointer ไปที่เซลล์ D6
              </p>
              <p style="text-indent: 9em;">
                - พิมพ์สูตร = 12400*10/100 หรือ =12400*10%
              </p>
              <div class="text-center" style="font-style:italic">
                <img src="/img/lesson2/89.png" width="80%" />
                <p>
                  <br />รูปที่ 89 ตัวอย่างการพิมพ์สูตรคำนวณ ค่าครองชีพ (พิเศษ)
                  โดยใช้ตัวเลข
                </p>
              </div>
              <br />
              <p style="text-indent: 2.5em;">
                จากรูปที่ 89 เมื่อเลื่อน Cell Pointer ไปยังตำแหน่ง D4
                และให้สังเกตที่แถบสูตร จะแสดงข้อมูลที่มาของผลลัพธ์ 1,5000
                โดยปรากฏสูตรคำนวณ =15000*10%
              </p>
              <div class="text-center" style="font-style:italic">
                <img src="/img/lesson2/90.png" width="80%" />
                <p>
                  <br />รูปที่ 90 แถบสูตรแสดงสูตรที่ใช้คำนวณค่าครองชีพ (พิเศษ)
                  โดยใข้ค่าตัวเลข
                </p>
              </div>
              <br />
              <p style="text-indent: 2.5em;">
                จากตัวอย่างการคำนวณ ค่าครองชีพ (พิเศษ) โดยใช้ตัวเลข
                จะเห็นได้ว่าผู้ใช้งานต้องเลื่อน Cell Pointer ไปยังตำแหน่งเซลล์
                D4, D5, D6, D7 และพิมพ์สูตรคำนวณ จำนวน 4 ครั้ง จึงจะได้ผลลัพธ์
                แต่การคำนวณโดยวิธีนี้มีข้อจำกัด ดังนี้
              </p>
              <p style="text-indent: 2.5em;">
                1. ข้อมูลตัวอย่างมีพนักงาน จำนวน 4 คน เท่านั้น
                ผู้ใช้งานสามารถพิมพ์สูตรคำนวณพนักงานคนที่ 1 ถึงคนที่ 4 ได้
                โดยไม่ลำบากนัก
              </p>
              <p style="text-indent: 2.5em;">
                2. หากมีการแก้ไขเงินเดือน เช่น เดิม 15,000 บาท เป็น 16,000 บาท
                ผู้ใช้งานต้องแก้ไขสูตรคำนวณใหม่จึงจะได้ค่าครองชีพที่ถูกต้อง
              </p>
              <p style="text-indent: 2.5em;">
                ดังนั้น การมีข้อจำกัดดังกล่าวข้างต้น การสร้างสูตรคำนวณในโปรแกรม
                Excel จึงไม่นิยมใช้ค่าตัวเลขในการสร้างสูตรคำนวณ
                แต่จะใช้ตำแหน่งเซลล์ที่เก็บข้อมูล ซึ่งได้ผลลัพธ์ที่เท่ากัน
                แต่จะลดข้อจำกัดได้ดีกว่า
              </p>
              <!-- -------------------------------- -->
              <br />
              <br />
              <br />
              <br />
              <div class="container">
                <div class="row">
                  <div class="col-auto mr-auto">
                    <router-link to="/lesson2_4" title="Lesson2_4 Page">
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
                          
                          outline type="info"
                        >
                          <i class="fa fa-chevron-up" aria-hidden="true"></i>
                        </base-button>
                      </div>
                  </div>
                  <div class="col-auto">
                    <router-link to="/lesson2_6" title="Lesson2_6 Page">
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
              <div class="text-center mt-5">Page 5/7</div>
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
