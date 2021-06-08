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
              <h4>การประมวลผลภาษาธรรมชาติ (Natural Language Processing – NLP)</h4>
              <p
                class="rem2"
              >เป็นกระบวนการที่ทำให้คอมพิวเตอร์เข้าใจภาษามนุษย์โดยการรับ Input เป็นข้อความในภาษาหนึ่ง แล้วทำความเข้าใจว่าผู้ป้อนกล่าวถึงอะไร</p>
              <p class="rem5">
                • ประโยคเป็นคำอธิบายสารสนเทศที่ผู้พูดตั้งใจถ่ายทอดไปยังผู้ฟัง เช่น ประโยค
                Some dogs are Outside.
                อาจสื่อความหมายได้หลากหลาย เช่น
                Some dogs are on the lawn.
              </p>
              <p class="rem5">
                • ประโยคเดียวกันอาจหมายถึงสิ่งของหลายอย่างโดยขึ้นอยู่กับสถานการณ์ที่พูด เช่น
                Where’s the water?
                ถ้าพูดในห้องทดลองเคมี “ Water ” อาจหมายถึง น้ำบริสุทธิ์ หากพูดตอนเราหิวอาจ หมายถึง น้ำที่เราหยิบดื่มได้
              </p>
              <p class="rem5">
                • มีวิธีการพูดได้หลากหลายแบบสำหรับสิ่งเดียวกัน เช่น
                Mary was born on October 11.
                Mary’s birthday is October 11.
                ทั้งสองประโยคนี้สื่อความหมายเรื่องเดียวกัน
              </p>
              <br />
              <div class="text-center font-italic col">
                <img src="/img/lesson9/24.png" width="60%" />
                <p>
                  <br />รูปที่ 24. การแปลงภาษาธรรมชาติในรูปแบบต่าง ๆ
                </p>
              </div>
              <br />
              <h4>ขั้นตอนในการเข้าใจภาษาธรรมชาติ</h4>
              <p
                class="rem2"
              >1. การวิเคราะห์ทางองค์ประกอบ ( Morphological analysis ) เป็นการวิเคราะห์ในหน่วยคำ ว่าคำ ๆ หนึ่งสามารถแยกออกมาหน่วยได้เป็นอะไรบ้าง</p>
              <p
                class="rem2"
              >2. การวิเคราะห์ทางวากยสัมพันธ์ ( Syntactic analysis ) เป็นการวิเคราะห์ทางไวยากรณ์มีจุดมุ่งหมายต้องการดูว่าประโยคที่รับมาประกอบด้วยคำที่ทำหน้าที่เป็นประธาน กริยา กรรม หรือวลี</p>
              <p
                class="rem2"
              >3. การวิเคราะห์ทางความหมาย ( Semantic analysis ) เป็นการวิเคราะห์ความหมายแต่ละคำหมายถึงสิ่งใด</p>
              <p
                class="rem2"
              >4. บูรณาการทางวจนิพนธ์ ( Discourse integration ) เป็นการพิจารณาความหมายของประโยคโดยดูประโยคข้างเคียง</p>
              <p
                class="rem2"
              >5. การวิเคราะห์ทางปฏิบัติ ( Pragmatic analysis ) เป็นการแปลความหมายของประโยคใหม่อีกครั้ง</p>
              <br />
              <div class="text-center font-italic col">
                <img src="/img/lesson9/25.png" width="80%" />
                <p>
                  <br />รูปที่ 25. รูปภาพการถอดรหัส
                </p>
              </div>
              <br />
              <br />
              <hr />
              <h3 class="text-center display-3">
                ระบบผู้เชี่ยวชาญ
                (Expert System)
              </h3>

              <br />
              <p
                class="rem2"
              >คือระบบคอมพิวเตอร์ ที่จำลองการตัดสินใจของมนุษย์ ผู้เป็นผู้เชี่ยวชาญในด้านใดด้านหนึ่ง โดยใช้ความรู้และการสรุปเหตุผลเชิงอนุมาน (inference) ในการแก้ปัญหายาก ๆ</p>
              <p
                class="rem2"
              >ระบบผู้เชี่ยวชาญ(Expert System) จัดเป็นระบบสารสนเทศประเภทหนึ่งที่นำวิทยาการของปัญหาประดิษฐ์เข้ามาใช้จัดการสารสนเทศ โดยเฉพาะอย่างยิ่งสารสนเทศที่เป็น องค์ความรู้ (knowledge) ในเฉพาะสาขาหรือเฉพาะด้าน ดังนั้นระบบผู้เชี่ยวชาญจึงเป็นซอฟต์แวร์ที่ใช้สร้างฐานความรู้ (knowledge base) และ กลไกในการตั้งคำถาม และหาคำตอบ (จาก knowledge base) ทำให้ผู้ใช้ได้รับความสะดวกในการถามและตอบสิ่งที่ถามเสมือนหนึ่งคุยกับผู้เชี่ยวชาญจริง ๆ</p>
              <div class="container">
                <div class="row">
                  <div class="text-center font-italic col-sm">
                    <img src="/img/lesson9/kl.png" width="80%" />
                    <p>
                      <br />Knowledge
                    </p>
                  </div>
                  <div class="text-center font-italic col-sm">
                    <img src="/img/lesson9/klb.png" width="80%" />
                    <p>
                      <br />Knowledge Base
                    </p>
                  </div>
                </div>
              </div>
              <br>
              <p class="rem2">ทั้งนี้ระบบผู้เชี่ยวชาญจะเลือกเฉพาะสาขาหรือเฉพาะด้านที่ขาดแคลนผู้เชี่ยวชาญเท่านั้น เช่น ใช้ในงานเกี่ยวกับการวินิจฉัยทางการแพทย์ การขุดเจาะน้ำมัน  การจัดทำภาษี การวิเคราะห์ทางเคมี การผ่าตัด การซ่อมเครื่องยนต์ การพยากรณ์อากาศ การซ่อมเครื่องคอมพิวเตอร์ การส่งสัญญาณดาวเทียม ปฏิบัติการเกี่ยวกับอาวุธนิวเคลียร์ การวางรูปแบบหนังสือพิมพ์ การตีความกฎหมาย เป็นต้น อย่างไรก็ตามถึงแม้ว่าระบบผู้เชี่ยวชาญ จะได้รับการพัฒนา ให้ใช้งานได้สะดวก และมีประสิทธิภาพยิ่งขึ้น แต่ระบบสารสนเทศประเภทนี้ก็ไม่สามารถมาแทนที่มนุษย์ได้</p>
                <br>
                 <div class="text-center font-italic">
                    <img src="/img/lesson9/map.png" width="60%" />
                  </div>
                <br>
                <p class="rem2">ระบบผู้เชี่ยวชาญประกอบด้วยฐานความรู้ที่แสดงอยู่ในชุดกฎของ IF/THEN และวิธีการเพื่อนำไปสู่ข้อวินิจฉัยจากฐานความรู้นั้น ระบบนี้จะช่วยบอกข้อมูลที่จำเป็นเพื่อหาทางแก้ปัญหาและนำไปสู่ข้อสรุปในที่สุด ระบบผู้เชี่ยวชาญส่วนมากจะมีข้อสรุปด้วยปัจจัยที่เชื่อถือได้ ด้วยการพิจารณาจากหลักการทางด้านความรู้การวิเคราะห์ต่างต่าง เพื่อยืนยันข้อสรุปนั้น</p>
                <br>
                <h4>ตัวอย่าง Expert System Applications</h4>
                <p class="rem2">•	diagnosis of faults and diseases                                  </p>
                 <div class="text-center font-italic">
                    <img src="/img/lesson9/lung.png" width="40%" />
                  </div>
                  <br>
                <p class="rem2">•	automobile diagnosis</p>
                     <div class="text-center font-italic">
                    <img src="/img/lesson9/auto.png" width="40%" />
                  </div>
                  <br>
                <p class="rem2">•	interpretation of data (เช่น sonar signals)</p>
                 <div class="text-center font-italic">
                    <img src="/img/lesson9/signal.png" width="40%" />
                  </div>
                  <br>
                <p class="rem2">•	mineral exploration</p>
                     <div class="text-center font-italic">
                    <img src="/img/lesson9/exploration.png" width="40%" />
                  </div>
                  <br>
                <p class="rem2">•	personnel scheduling</p>
                 <div class="text-center font-italic">
                    <img src="/img/lesson9/sche.png" width="40%" />
                  </div>
                  <br>
                <p class="rem2">•	computer network management</p>
                     <div class="text-center font-italic">
                    <img src="/img/lesson9/manage.png" width="40%" />
                  </div>
                  <br>
                <p class="rem2">•	weather forecasting</p>
                     <div class="text-center font-italic">
                    <img src="/img/lesson9/forecast.png" width="40%" />
                  </div>
                  <br>
                <p class="rem2">•	stock market prediction </p>
                     <div class="text-center font-italic">
                    <img src="/img/lesson9/predict.png" width="40%" />
                  </div>
                  <br>
                <p class="rem2">•	consumer buying advice </p>
                     <div class="text-center font-italic">
                    <img src="/img/lesson9/buying.png" width="40%" />
                  </div>
                  <br>
                <p class="rem2">•	diet advice </p>
                     <div class="text-center font-italic">
                    <img src="/img/lesson9/diet.png" width="40%" />
                  </div>
                  <br>
                  <br>
                <h4>วัตถุประสงค์หลักของระบบผู้เชี่ยวชาญ</h4>
                <p class="rem2">การช่วยในการตัดสินใจ การให้ความรู้ คำแนะนำ หรือคำปรึกษา อย่างที่เราต้องการจากผู้เชี่ยวชาญเฉพาะด้านระบบผู้เชี่ยวชาญ (EXPERT SYSTEM AND ARTIFICIAL INTELLIGENCE) </p>
                 <br />
              <div class="text-center font-italic col">
                <img src="/img/lesson9/e1.png" width="80%" />
              </div>
              <!-- -------------------------------- -->
              <br />
              <br />
              <br />
              <br />
              <div class="container">
                <div class="row">
                  <div class="col-auto mr-auto">
                    <router-link to="/lesson9_4" title="Lesson9_4 Page">
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
                    <router-link to="/lesson9_6" title="Lesson9_6 Page">
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
              <div class="text-center mt-5">Page 5/8</div>
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
