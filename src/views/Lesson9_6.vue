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
              <h4>ส่วนประกอบของ Expert System</h4>
              <br />
              <div class="text-center font-italic col">
                <img src="/img/lesson9/e2.png" width="80%" />
              </div>
              <br />
              <h5>1. ฐานความรู้ (knowledge base)</h5>
              <p
                class="rem2"
              >ส่วนที่เก็บความรู้ทั้งหมดของผู้เชี่ยวชาญที่รวบรวมจากการศึกษาและจากประสบการณ์ โดยมีการกำหนดโครงสร้างของข้อมูล (Data Structure) ให้เหมาะสมกับการนำไปใช้งาน โดยฐานความรู้จะรวบรวมตรรกะ (Logic) ในการปฏิบัติงาน</p>
              <br />
              <div class="text-center font-italic col">
                <img src="/img/lesson9/i1.png" width="80%" />
              </div>
              <br />
              <h5>2. เครื่องอนุมาน (inference engine)</h5>
              <p
                class="rem2"
              >เป็นส่วนควบคุมการใช้ความรู้ในฐานความรู้ เพื่อวิเคราะห์และแก้ปัญหาที่เกิดขึ้น จะทำหน้าที่ตรวจสอบกฎเกณฑ์ที่อยู่ในฐานความรู้ โดยการใช้เหตุผลทางตรรกะสำหรับแต่ละเหตุการณ์ ซึ่งมักจะอยู่ในลักษณะ ถ้า…แล้ว…</p>
              <br />

              <h5>3. ส่วนดึงความรู้ (knowledge acquisition subsystem)</h5>
              <p
                class="rem2"
              >เป็นส่วนที่ดึงความรู้จากเอกสาร ตำรา ฐานข้อมูล และเชี่ยวชาญ ทีมพัฒนาจะทำการจัดความรู้ที่ได้มาให้อยู่ในรูปที่เข้ากันได้กับโครงสร้างของฐานความรู้ เพื่อที่จะได้สามารถบรรจุความรู้ที่ได้มาลงในฐานความรู้ได้</p>
              <br />
              <div class="text-center font-italic col">
                <img src="/img/lesson9/i3.png" width="60%" />
              </div>
              <br />
              <h5>4. ส่วนอธิบาย (explanation subsystem)</h5>
              <p
                class="rem2"
              >เป็นส่วนที่อธิบายถึงรายละเอียดของข้อสรุปหรือคำตอบที่ได้มานั้น มาได้อย่างไร และทำไมถึงมีคำตอบเช่นนั้น</p>
              <br />
              <div class="text-center font-italic col">
                <img src="/img/lesson9/i4.png" width="60%" />
              </div>
              <br />
              <h5>5. การติดต่อกับผู้ใช้ (user interface)</h5>
              <p>เนื่องจากผู้ใช้จะมีความรู้ในงานสารสนเทศที่แตกต่างกัน หรือผู้ใช้บางคนไม่เคยชินกับการรับคำแนะนำจากระบบสารสนเทศ ตลอดจนผู้ใช้มีความต้องการที่หลากหลาย ดังนั้นผู้พัฒนาระบบจึงต้องคำนึงถึงความสะดวกในการติดต่อระหว่าง ES กับผู้ใช้ ทำให้การติดต่อสื่อสารระหว่าง ES กับผู้ใช้ที่มีความสะดวก ทำให้ผู้ใช้เกิดความพอใจและสามารถใช้ระบบจนเกิดความชำนาญ ซึ่งจะทำให้การปฏิบัติงานมีประสิทธิภาพ</p>
              <br />
              <br />
              <h4>การพัฒนา (Development Sections)</h4>
              <br />
              <div class="text-center font-italic col">
                <img src="/img/lesson9/i5.png" width="60%" />
              </div>
              <br />
              <br />
              <h5>1. การวิเคราะห์ปัญหา</h5>
              <p
                class="rem2"
              >ดำเนินการพิจารณาถึงความต้องการ ความเหมาะสม และความเป็นไปได้ ในสถานการณ์จริง โดยทำความเข้าใจกับปัญหา จัดขั้นตอนในการแก้ปัญหา การกำหนดรูปแบบของการให้คำปรึกษา ตลอดจนรวบรวมความรู้ และความเข้าใจในสาระสำคัญที่จะนำมาประกอบการพัฒนาระบบ และต้องคำนึงถึงความต้องการของผู้ใช้ระบบเป็นสำคัญ</p>
              <h5>2. การเลือกอุปกรณ์</h5>
              <p class="rem2">2.1 การแสดงความรู้</p>
              <p class="rem2">2.2 การติดต่อกับผู้ใช้</p>
              <p class="rem2">2.3 ชุดคำสั่ง</p>
              <p class="rem2">2.4 การบำรุงรักษาและการพัฒนาระบบ</p>

              <h5>3. การถอดความรู้</h5>
              <p
                class="rem2"
              >ผู้พัฒนาระบบต้องทำการสังเกต ศึกษา และทำความเข้าใจกับความรู้ที่จะนำมาพัฒนาเป็น ES จากแหล่งอ้างอิง หรือผู้เชี่ยวชาญในสาขานั้น เพื่อการกำหนดขอบเขตที่เหมาะสมของระบบ</p>

              <h5>4. การสร้างต้นแบบ</h5>
              <p
                class="rem2"
              >นำส่วนประกอบต่าง ๆ ที่กล่าวมามาประกอบการสร้างต้นแบบ พร้อมทั้งทดสอบการทำงานของต้นแบบที่สร้างขึ้นว่าสามารถทำงานได้ตามที่ไว้วางแผนไว้หรือไม่</p>

              <h5>5. การขยาย การทดสอบและบำรุงรักษา</h5>
              <p
                class="rem2"
              >หลังจากที่ต้นแบบได้ถูกสร้างขึ้นและสามารถผ่านการทดสอบการทำงานแล้ว เพื่อที่จะได้ระบบสามารถนำไปใช้สภาวการณ์จริงได้ ก็จะต้องทำการขยายระบบให้ใหญ่ขึ้นจากต้นระบบ โดยเฉพาะส่วนที่เป็นฐานความรู้</p>

              <br />
              <h4>คุณสมบัติของระบบผู้เชี่ยวชาญ</h4>
              <p class="rem2">• ต้องสามารถเรียนรู้สิ่งที่ผ่านมาได้ หรือสามารถเข้าใจจากประสบการณ์</p>
              <p class="rem2">• ต้องสามารถใช้เหตุผลในการแก้ปัญหาที่เผชิญอยู่ได้</p>
              <p class="rem2">• ต้องสามารถคิดโดยใช้หลักการของเหตุผลได้</p>
              <p
                class="rem2"
              >• ต้องสามารถประยุกต์ให้สามารถใช้สิ่งต่างต่างที่อยู่รอบรอบตัวได้ให้เป็นประโยชน์ได้</p>
              <p class="rem2">• ต้องสามารถคิดอะไรต่างต่างได้ด้วยตัวเอง หรือการมีความคิดเป็นของตัวเอง</p>
              <br />
              <br />
              <h4>ประโยชน์ของระบบผู้เชี่ยวชาญ (Expert System)</h4>
              <br />
              <div class="text-center font-italic col">
                <img src="/img/lesson9/i6.png" width="80%" />
              </div>
              <br />
              <br />
              <h4>ระบบผู้เชี่ยวชาญ (Expert Tasks)</h4>
              <p class="rem2">1. Engineer</p>
              <p class="rem5">- Design</p>
              <p class="rem5">- Fault finding</p>
              <p class="rem5">- Manufacturing planning</p>
              <p class="rem2">2. Scientific analysis</p>
              <p class="rem2">3. Medical diagnosis</p>
              <p class="rem2">4. Financial analysis</p>
              <br />
              <h4>ข้อจำกัดของระบบผู้เชี่ยวชาญ (Limitation of Expert Systems)</h4>
              <p class="rem2">• Can handle only narrow domains สามารถจัดการโดเมนที่แคบได้เท่านั้น</p>
              <p class="rem2">• Do not possess common sense ไม่มีสามัญสำนึก</p>
              <p class="rem2">• Have a limited ability to learn มีลิมิตของการเรียนรู้ได้ด้วยตัวเอง</p>
              <p
                class="rem2"
              >• Ethical and societal Issues too Sophisticated Technology เทคโนโลยีซับซ้อน อาจทำให้เกิดปัญหาด้านจริยธรรมและสังคม</p>
              <br />
              <h4>หุ่นยนต์และวิทยาการหุ่นยนต์ (Robot & Robotics)</h4>
              <p
                class="rem2"
              >ความหมายของคำว่าหุ่นยนต์ (robot) ของแต่ละบุคคลนั้น ขึ้นอยู่กับการรับรู้ผ่านประสบการณ์ของแต่ละบุคคลที่มีมาในอดีต ซึ่งอาจจะคล้ายหรือแตกต่างกันก็ได้ แต่เพื่อการรับรู้ร่วมกันว่า หุ่นยนต์ คือ เครื่องจักรกลหรือสิ่งประดิษฐ์ที่ถูกสร้างขึ้นอย่างมีวัตถุประสงค์ เช่น เพื่อทำงาน หรือ เพื่อคิดคำนวณ โดยทั่วไปแล้วหุ่นยนต์เป็นระบบที่ประกอบด้วยกลไกและไฟฟ้า</p>
              <br />
              <h4>หุ่นยนต์อาจมีคุณสมบัติข้อหนึ่งข้อใดหรือหลายข้อจากลักษณะต่อไปนี้</h4>
              <p class="rem2">1. เป็นสิ่งถูกที่ประดิษฐ์ขึ้น</p>
              <p class="rem2">2. สามารถรับรู้สิ่งแวดล้อมรอบตัวมัน และตอบสนองได้</p>
              <p
                class="rem2"
              >3. สามารถคิดได้ในระดับหนึ่ง หรือ สามารถตัดสินใจได้ จากข้อมูลของสิ่งแวดล้อม หรือ จากการควบคุม หรือ จากโปรแกรมที่ตั้งไว้</p>
              <p class="rem2">4. ตั้งโปรแกรมได้</p>
              <p class="rem2">5. มีการเคลื่อนไหวในลักษณะเลื่อนหรือหมุน</p>
              <p class="rem2">6. สามารถเคลื่อนที่ได้ตามพิกัดที่กำหนด</p>
              <p class="rem2">7. ถูกสร้างขึ้นอย่างมีวัตถุประสงค์</p>
              <br />
              <h4>องค์ประกอบของหุ่นยนต์</h4>
              <p
                class="rem2"
              >1. เครื่องจักรกล (Mechanical) เป็นส่วนทางด้านฮาร์ดแวร์ ซึ่งนำมาประกอบกันเป็นหุ่นยนต์</p>
              <p
                class="rem2"
              >2. กำลัง (Power) หุ่นยนต์จะทำงาน หรือเคลื่อนไหวได้ ต้องมีกำลังการขับเคลื่อน</p>
              <p class="rem2">3. ส่วนการรับรู้ (Sensor) ทำหน้าที่รับข้อมูลจากสภาพแวดล้อมภายนอก</p>
              <p class="rem2">4. ส่วนตอบสนอง (Effector) ทำหน้าที่ตอบสนองกลับไปยังสภาพแวดล้อม</p>
              <p
                class="rem2"
              >5. ส่วนของความฉลาด (Intelligent) เป็นส่วนที่นำปัญญาประดิษฐ์มาใส่ไว้ในหุ่นยนต์ เพื่อเป็นตัวควบคุมพฤติกรรมการทำงานของหุ่นยนต์ โดยใช้เทคนิคต่าง ๆ เช่น โครงข่ายใยประสาท, ตรรกะคลุมเครือ,ขั้นตอนวิธีเชิงพฤติกรรมและการค้นหา เป็นต้น</p>
              <br />
              <div class="text-center font-italic col">
                <img src="/img/lesson9/i7.png" width="60%" />
                <p>
                  <br />รูป : องค์ประกอบพื้นฐานของหุ่นยนต์
                </p>
              </div>
              <!-- -------------------------------- -->
              <br />
              <br />
              <br />
              <br />
              <div class="container">
                <div class="row">
                  <div class="col-auto mr-auto">
                    <router-link to="/lesson9_5" title="Lesson9_5 Page">
                      <div class="btn-wrapper">
                        <base-button
                          tag="a"
                          target="_blank"
                          rel="noopener noreferrer"
                          class="mb-3 mb-sm-0"
                          outline
                          type="info"
                          icon="fa fa-chevron-left"
                        >Previous</base-button>
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
                    <router-link to="/lesson9_7" title="Lesson9_7 Page">
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
              <div class="text-center mt-5">Page 6/8</div>
            </div>
          </div>
        </div>
      </section>

      <hr />
      <div class="col-lg-center">
        <div class="pt-4 text-center">
          <h5 class="title">
            <span class="d-block mb-1">Author | Dr.Payungsak Kasemsumran</span>
            <small class="h6 text-black">
              Lecturer in the Computer Science Division at Maejo
              University
            </small>
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
