<template>
  <div>
    <div class="position-relative">
      <section
        class="fontx section section-lg section-shaped overflow-hidden my-0"
      >
        <div class="shape shape-style-1 shape-default shape-skew">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <br /><br />
        <div class="container py-0 pb-lg">
          <div class="row justify-content-between align-items-center">
            <div class="col-lg-5 mb-5 mb-lg-0">
              <h1 class="text-white font-weight-light display-1">
                1. Documents Service
              </h1>
              <p class="lead text-white mt-4 text-justify">
                โปรแกรมไมโครซอฟต์เวิร์ด (Microsoft Word)
                หรือโปรแกรมจัดการด้านเอกสาร
                เป็นโปรแกรมที่นิยมใช้ในหลากหลายหน่วยงาน ทั้งภาครัฐและเอกชน ...
              </p>
            </div>
            <div class="col-lg-6 mb-lg-auto">
              <div
                class="rounded shadow-lg overflow-hidden transform-perspective-right"
              >
                <b-carousel id="carousel1" controls indicators>
                  <!-- Text slides with image -->
                  <b-carousel-slide
                    img-src="img/lesson1/b1.png"
                  ></b-carousel-slide>
                </b-carousel>
              </div>
            </div>
          </div>
        </div>
        <br /><br /><br /><br /><br /><br />
      </section>

      <section class="section section-shaped my-0 overflow-hidden">
        <div class="container pt-lg pb-80">
          <div class="row justify-content-center">
            <div class="fontx col-lg-10">
              <h2 class="display-3 text-center">
                1. โปรแกรมทำเอกสารด้วย Microsoft Word (2010)
              </h2>
              <br />
              <p class="rem2 text-justify">
                โปรแกรมไมโครซอฟต์เวิร์ด (Microsoft Word)
                หรือโปรแกรมจัดการด้านเอกสาร
                เป็นโปรแกรมที่นิยมใช้ในหลากหลายหน่วยงาน ทั้งภาครัฐและเอกชน
                สำหรับงานทางด้านการประมวลผลคำหรือข้อความ
                รวมถึงจัดการเอกสารในรูปแบบที่ผู้ใช้ต้องการ เช่น จดหมาย รายงาน
                หนังสือ แผ่นพับ เป็นต้น ซึ่งมีคุณสมบัติในการสร้าง
                ตกแต่งสีและจัดรูปแบบเอกสารให้สวยงามและ
                สามารถทำงานได้อย่างรวดเร็ว
              </p>
              <br />

              <h5 >
                ตัวอย่างการจัดการคุณลักษณะสำหรับข้อมูลหรือเอกสารของโปรแกรมไมโครซอฟต์เวิร์ด
                ได้แก่
              </h5>
              <br />
              <table class="table">
                <thead class="thead-light text-center">
                  <tr>
                    <th scope="col">คุณลักษณะของข้อมูลหรือเอกสาร</th>
                    <th scope="col">การจัดการของข้อมูลหรือเอกสาร</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1. ตัวอักษร</td>
                    <td>
                      กำหนดฟอนต์ (Font) ตัวอักษร รูปแบบตัวอักษร ขนาดตัวอักษร
                      สีตัวอักษร
                    </td>
                  </tr>
                  <tr>
                    <td>2. หน้ากระดาษ</td>
                    <td>
                      กำหนดขนาดหน้ากระดาษ ระยะขอบ หัว-ท้ายกระดาษ หมายเลขหน้า
                      การแบ่งหน้า
                    </td>
                  </tr>
                  <tr>
                    <td>3. รูปแบบเอกสาร</td>
                    <td>การจัดย่อหน้า การเพิ่มรูปภาพ ตาราง แผนภูมิ รูปร่าง</td>
                  </tr>
                  <tr>
                    <td>4. ข้อความ</td>
                    <td>
                      การแทรก-ทับข้อความ การคัดลอก-ตัด-วางข้อความ อักขระพิเศษ
                      สัญลักษณ์ สมการ
                    </td>
                  </tr>
                  <tr>
                    <td>5. แฟ้มเอกสาร</td>
                    <td>การเปิด-บันทึก-ปิด แฟ้มเอกสาร</td>
                  </tr>
                  <tr>
                    <td>6. เอกสาร (Hard copy)</td>
                    <td>
                      การพิมพ์เอกสารออกทางเครื่องพิมพ์ การเลือกเครื่องสั่งพิมพ์
                      การกำหนดจำนวนหน้าหรือจำนวนสำเนาชุดที่ต้องการพิมพ์
                    </td>
                  </tr>
                </tbody>
              </table>
              <br />
              <h4>
                1.1 ขั้นตอนการเข้าโปรแกรมไมโครซอฟต์เวิร์ด (Microsoft Word 2010)
              </h4>
              <div class="container">
                <div class="row">
                  <div class="col">1. คลิกที่ปุ่ม</div>

                  <div class="col" @click="modals.modal1 = true">
                    <img src="/img/lesson1/1.png" alt />
                  </div>

                  <modal :show.sync="modals.modal1">
                    <h6
                      slot="header"
                      class="modal-title"
                      id="modal-title-default"
                    >
                      1. คลิกที่ปุ่ม
                    </h6>
                    <div class="col">
                      <img src="/img/lesson1/1.png" width="100%" alt />
                    </div>
                  </modal>
                </div>
                <br />
                <div class="row">
                  <div class="col">2. คลิกที่ Microsoft Word 2010</div>

                  <div class="col" @click="modals.modal2 = true">
                    <img src="/img/lesson1/2.png" alt />
                  </div>
                  <modal :show.sync="modals.modal2">
                    <h6
                      slot="header"
                      class="modal-title"
                      id="modal-title-default"
                    >
                      2. คลิกที่ Microsoft Word 2010
                    </h6>
                    <div class="col">
                      <img src="/img/lesson1/2.png" width="100%" alt />
                    </div>
                  </modal>
                </div>
                <br />
                <div class="row">
                  <div class="col">
                    3. เข้าสู่หน้าจอหลักของโปรแกรมไมโครซอฟต์เวิร์ด
                  </div>

                  <div class="col md-center" @click="modals.modal3 = true">
                    <img src="/img/lesson1/3.png" width="300px" />
                  </div>
                  <modal :show.sync="modals.modal3">
                    <h6
                      slot="header"
                      class="modal-title"
                      id="modal-title-default"
                    >
                      3. เข้าสู่หน้าจอหลักของโปรแกรมไมโครซอฟต์เวิร์ด
                    </h6>
                    <div class="col">
                      <img src="/img/lesson1/3.png" width="100%" alt />
                    </div>
                  </modal>
                </div>
              </div>
              <br />
              <br />
              <br />
              <h4>1.2 ส่วนประกอบของหน้าจอหลักโปรแกรมไมโครซอฟต์เวิร์ด</h4>
              <div class="text-center" @click="modals.modal4 = true">
                <img src="/img/lesson1/4.png" width="80%" />
              </div>
              <modal :show.sync="modals.modal4">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  1.2 ส่วนประกอบของหน้าจอหลักโปรแกรมไมโครซอฟต์เวิร์ด
                </h6>
                <img src="/img/lesson1/4.png" width="100%" />
              </modal>

              
                <b>1. แฟ้ม (File)</b> เป็นส่วนคำสั่งสำหรับจัดการไฟล์ เช่น บันทึก
                (Save) บันทึกเป็น (Save as) เปิด (Open) สร้างไฟล์ใหม่ (New file)
                เป็นต้น
                <br /><b>2. แถบเครื่องมือด่วน (Quick Access Toolbar)</b>
                เป็นแถบเก็บปุ่มคำสั่งที่ใช้งานบ่อย ๆ โดยโปรแกรม
                กำหนดค่าเริ่มต้นให้ แต่สามารถเพิ่มเติมหรือกำหนดเองได้ <br /><b>3.
                แถบชื่อเรื่อง (Title Bar)</b>
                เป็นแถบแสดงชื่อและประเภทหรือนามสกุลของไฟล์ <br /><b>4.
                แถบควบคุมวินโดวส์ (Windows Controls)</b>
                เป็นส่วนจัดการหน้าต่างโปรแกรม ใช้สำหรับ ย่อ ขยาย และปิด <br /><b>5.
                ริบบอน (Ribbon) </b>เป็นแถบกลุ่มคำสั่งซึ่งประกอบด้วยคำสั่งต่าง ๆ
                โดยรวบรวมคำสั่งไว้เป็นหมวดหมู่ ดังนี้
              
              <br>
              <p class=" mt-3" style="text-indent: 2.5em;">
                <b>a. หน้าแรก </b>เป็นหมวดคำสั่งในการจัดรูปแบบและ ลักษณะอักษร ย่อหน้า
                รวมถึงการค้นหา แทนที่ เลือกข้อความ เป็นต้น
                <br />
                <br />
                <img src="/img/lesson1/a.png" width="100%" />
              </p>
              <br />
              <p class=" mt-3" style="text-indent: 2.5em;">
                b. แทรก เป็นหมวดคำสั่งในการแทรกหรือเพิ่มคุณลักษณะต่างๆ เช่น
                แทรกตาราง แทรกภาพประกอบ แทรกการเชื่อมโยง
                แทรกหัวกระดาษและท้ายกระดาษ แทรกข้อความ แทรกสัญลักษณ์ เป็นต้น
                <br />
                <br />
                <img src="/img/lesson1/b.png" width="100%" />
              </p>
              <br />
              <p class=" mt-3" style="text-indent: 2.5em;">
                c. เค้าโครงหน้ากระดาษ เป็นหมวดคำสั่งในการออกแบบหน้ากระดาษ เช่น
                กำหนดชุดรูปแบบ ตั้งค่าหน้ากระดาษ พื้นหลังของหน้า กำหนดย่อหน้า
                กำหนดการจัดเรียง เป็นต้น
                <br />
                <br />
                <img src="/img/lesson1/c.png" width="100%" />
              </p>
              <br />
              <p class=" mt-3" style="text-indent: 2.5em;">
                d. การอ้างอิง เป็นหมวดคำสั่งในการอ้างอิงข้อมูลในเอกสาร เช่น
                สารบัญ เชิงอรรถ ข้อมูลอ้างอิงและบรรณานุกรม คำอธิบายภาพ ดัชนี
                เป็นต้น
                <br />
                <br />
                <img src="/img/lesson1/d.png" width="100%" />
              </p>
              <br />
              <p class=" mt-3" style="text-indent: 2.5em;">
                e. การส่งจดหมาย เป็นหมวดคำสั่งสำหรับสร้างจดหมายเวียน เช่น สร้าง
                เริ่มจดหมายเวียน เขียนและแทรกเขตข้อมูล แสดงผลลัพธ์ เป็นต้น
                <br />
                <br />
                <img src="/img/lesson1/e.png" width="100%" />
              </p>
              <br />
              <p class=" mt-3" style="text-indent: 2.5em;">
                f. ตรวจทาน เป็นหมวดคำสั่งสำหรับการตรวจทานเอกสาร เช่น
                การพิสูจน์อักษร ภาษา ข้อคิดเห็น การติดตาม การเปลี่ยนแปลง
                การเปรียบเทียบ ป้องกัน เป็นต้น
                <br />
                <br />
                <img src="/img/lesson1/f.png" width="100%" />
              </p>
              <br />
              <p class=" mt-3" style="text-indent: 2.5em;">
                g. มุมมอง เป็นหมวดคำสั่งสำหรับการจัดการมุมมองของเอกสาร เช่น
                มุมมองเอกสาร ย่อ/ขยาย มาโคร เป็นต้น
                <br />
                <br />
                <img src="/img/lesson1/b.png" width="100%" />
              </p>
              <br />
              <br />
              <p class="mt-3"></p>
             <b> 6. แถบเลื่อน (Scrollbar) </b>เป็นแถบสำหรับเลื่อนหน้าจอหลัก
              <br /><b>7. แถบย่อ/ขยายเอกสาร (Zoom Controls)</b>
              เป็นปุ่มปรับขนาดการแสดงผลของเอกสาร ย่อ/ขยาย
              <p style="text-indent: 2.5em;">
                - เครื่องหมาย + หมายถึง ขยายเอกสาร
              </p>
              <p style="text-indent: 2.5em;">- เครื่องหมาย – หมายถึง ย่อเอกสาร</p>
              <b>8. แถบมุมมองเอกสาร (View Shortcuts)</b>
              เป็นปุ่มกำหนดมุมมองการแสดงผลของเอกสาร
              <br /><b>9. แถบสถานะ (Status Bar)</b> เป็นแถบแสดงข้อมูลเกี่ยวกับไฟล์ เช่น
              จำนวนหน้า จำนวนคำ และภาษาที่ใช้พิมพ์

              <br /><br /><br>
              <h4>1.3 การจัดการแฟ้มเอกสารในโปรแกรมไมโครซอฟต์เวิร์ด</h4>

              <p>- การสร้างแฟ้มเอกสารใหม่ ต้องดำเนินการได้หลายวิธี ได้แก่</p>
              <p style="text-indent: 5em;">
                <b>วิธีที่ 1.</b> เลือกเมนูแฟ้ม > สร้าง > เอกสารเปล่า
                
              </p>
              <p style="text-indent: 5em;">
                วิธีที่ 2. กดปุ่ม office button เลือกโปรแกรมไมโครซอฟต์เวิร์ด
              </p>
              <p style="text-indent: 5em;">วิธีที่ 3. กดปุ่ม Ctrl + N</p>

              <p>- การบันทึกแฟ้มเอกสาร จะได้ไฟล์นามสกุล .doc</p>
              <p>
                - การบันทึกแฟ้มเอกสารจะมี 2 คำสั่งที่ทำงานแตกต่างกัน ได้แก่ Save
                กับ Save As
              </p>
              <p style="text-indent: 5em;">
                - คำสั่ง Save ใช้สำหรับบันทึกทับข้อมูลเดิม
              </p>
              <p style="text-indent: 5em;">
                - คำสั่ง Save As ใช้สำหรับบันทึกข้อมูลใหม่
              </p>

              <p>
                - การกำหนดหน้าสำหรับสั่งพิมพ์เอกสาร ทำได้หลายรูปแบบ ยกตัวอย่าง
                เช่น
              </p>
              <p style="text-indent: 5em;">
                - สั่งพิมพ์แบบเลือกเป็นหน้า 1, 3, 5, 7
              </p>
              <p style="text-indent: 5em;">
                - สั่งพิมพ์แบบเรียงหน้า 1-5, 10-14, 20-23
              </p>
              <br />
              <h4>1.4 การจัดการข้อความ</h4>
              <p class="mt-3">
                ข้อความทั้งหมดในเอกสารสามารถจัดการปรับแต่ง
                เพิ่มเติมข้อความได้โดยการลากเมาส์คลุมข้อความที่ต้องการปรับแต่ง
              </p>

              <img
                src="/img/lesson1/5.png"
                width="100%"
                @click="modals.modal5 = true"
              />
              <modal :show.sync="modals.modal5">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  1.4 การจัดการข้อความ
                </h6>
                <img src="/img/lesson1/5.png" width="100%" />
              </modal>

              <p class="mt-3">
                อีกทั้งการจัดการข้อความในส่วนขนาดตัวอักษรค่าต่ำสุดและค่าสูงสุดที่โปรแกรมไมโครซอฟต์เวิร์ดมีให้เลือกมีขนาด
                ตั้งแต่ 8-72 และสามารถพิมพ์ขนาดตามที่ต้องการได้
                รวมถึงการกำหนดฟอนต์ (Font)
                ที่รองรับภาษาไทยส่วนใหญ่จะมีชื่อต่อท้ายชื่อฟอนต์ด้วย UPC
              </p>
              <p class="mt-3" style="color:red">
                *** หมายเหตุ สำหรับผู้ที่ใช้งานไมโครซอฟต์เวิร์ด
                จะสังเกตว่าเวลาที่เราพิมพ์ข้อความในเอกสาร บางครั้งจะมีเส้นสีแดง
                สีน้ำเงิน สีเขียวอยู่ใต้ข้อความ ซึ่งเส้นทั้ง 3 สีมีความหมาย
                ดังนี้ ***
              </p>

              <p class="mt-3">
                • สีแดง หมายถึง คำที่พิมพ์/สะกดผิด หรือคำนั้นอาจเป็นชื่อเฉพาะ
                <br />• สีน้ำเงิน หมายถึง
                พิมพ์ถูกต้องแต่อาจไม่ถูกต้องในความหมายของประโยค <br />• สีเขียว
                หมายถึง มีปัญหาเรื่องไวยากรณ์
              </p>
              <br />
              <br />
              <br />
              <br />

              <div class="container">
                <div class="row">
                  <!-- Previous buttom -->
                  <div class="col-auto mr-auto"></div>
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
                  <!-- next buttom -->
                  <div class="col-auto">
                    <router-link to="/lesson1_2" title="Lesson1_2 Page">
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
              <div class="text-center mt-5">Page 1/4</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Author -->
      <hr />
      <div class="col-lg-center">
        <div class="pt-4 text-center">
          <h5 class="title">
            <span class="d-block mb-1">Author | Assis.Prof. Panuwat Mekha</span>
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
import { BCarousel } from "bootstrap-vue/esm/components/carousel/carousel";
import { BCarouselSlide } from "bootstrap-vue/esm/components/carousel/carousel-slide";
import Modal from "@/components/Modal.vue";
export default {
  name: "home",
  components: {
    BCarousel,
    BCarouselSlide,
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
      },
    };
  },
};
</script>
