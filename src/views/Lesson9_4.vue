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
              <h4>ขั้นตอนการทำ Data Science</h4>
              <br />
              <div
                class="text-center font-italic col"
                @click="modals.modal1 = true"
              >
                <img src="/img/lesson9/17.png" width="80%" />
                <p><br />รูปที่ 17. ขั้นตอนการทำ Data Science</p>
              </div>
              <modal :show.sync="modals.modal1">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 17. ขั้นตอนการทำ Data Science
                </h6>
                <img src="/img/lesson9/17.png" width="100%" />
              </modal>
              <br />
              <h5 class="rem2">1. Collection เก็บข้อมูล</h5>
              <br />
              <div
                class="text-center font-italic col"
                @click="modals.modal2 = true"
              >
                <img src="/img/lesson9/18.png" width="80%" />
                <p><br />รูปที่ 18. ตัวอย่างการเก็บข้อมูล</p>
              </div>
              <modal :show.sync="modals.modal2">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 18. ตัวอย่างการเก็บข้อมูล
                </h6>
                <img src="/img/lesson9/18.png" width="100%" />
              </modal>
              <br />
              <p class="rem2">
                ตัวอย่างข้อมูลคนเข้าเว็บไซต์จาก Google Analytics
                ที่เราสามารถดึงผ่าน Google API มาใช้ได้เลย
                การเก็บข้อมูลสามารถทำได้หลายวิธี
              </p>
              <p class="rem5">
                • ถ้าต้องการเก็บ Log การใช้เว็บไซต์ ก็อาจจะเขียน JavaScript
                วางไว้ในเว็บไซต์ของเรา เพื่อเก็บการกระทำต่าง ๆ ของผู้ใช้
              </p>
              <p class="rem5">
                • ถ้าต้องการเก็บข้อมูลจากเว็บไซต์อื่น
                เราต้องเขียนโปรแกรมดึงข้อมูลทาง API หรือ Scrape
                ข้อมูลจากหน้าเว็บไซต์
              </p>
              <p class="rem5">
                • หรือสำหรับคนที่หัด Data Science ผ่านเว็บไซต์อย่าง Kaggle
                ก็จะเห็นว่าข้อมูลเค้าเก็บมาให้เราเรียบร้อยแล้ว เราสามารถ
                Download แล้วนำมาใช้ได้เลย
              </p>
              <br />
              <h5 class="rem2">2. Manage จัดการข้อมูล</h5>
              <br />
              <div
                class="text-center font-italic col"
                @click="modals.modal3 = true"
              >
                <img src="/img/lesson9/19.png" width="80%" />
                <p><br />รูปที่ 19. Venn Diagram ของ Manage จัดการข้อมูล</p>
              </div>
              <modal :show.sync="modals.modal3">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 19. Venn Diagram ของ Manage จัดการข้อมูล
                </h6>
                <img src="/img/lesson9/19.png" width="100%" />
              </modal>
              <br />
              <p class="rem2">
                60% ของเวลาในการทำงานทั้งหมดของ Data Scientist มาจาก Data
                Wrangling “การทำความสะอาดข้อมูล” หรือ Data Wrangling / Data
                Cleaning ขั้นตอนนี้กินเวลาเยอะที่สุดในการทำ Data Science
              </p>

              <br />

              <h5 class="rem2">3. Analyze วิเคราะห์ข้อมูล</h5>
              <p class="rem5">
                • Finding insights – วิเคราะห์เพื่อหาสิ่งที่ซ่อนอยู่ในข้อมูล
                สำหรับนำมาใช้ตัดสินใจเรื่องต่าง ๆ ในธุรกิจ
              </p>
              <p class="rem5">
                • Modelling – วิเคราะห์เพื่อหา Pattern ที่ซ่อนอยู่ในข้อมูล
                และพยายามสร้าง Model เลียนแบบหน้าตาของข้อมูลออกมาให้เหมือนที่สุด
                สำหรับนำมาใช้ทำนายผล
              </p>
              <p class="rem7">
                ใช้ประโยชน์จากการทำ Data Exploration
                เพราะหลายครั้งการพลอตกราฟมาดู Distribution
                ก็มีประโยชน์กว่าการดูเฉพาะสถิติตัวเลข
              </p>
              <br />
              <h5 class="rem2">2. Manage จัดการข้อมูล</h5>
              <br />
              <div
                class="text-center font-italic col"
                @click="modals.modal4 = true"
              >
                <img src="/img/lesson9/20.png" width="80%" />
                <p><br />รูปที่ 20. Venn Diagram ของ Analyze วิเคราะห์ข้อมูล</p>
              </div>
              <modal :show.sync="modals.modal4">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 20. Venn Diagram ของ Analyze วิเคราะห์ข้อมูล
                </h6>
                <img src="/img/lesson9/20.png" width="100%" />
              </modal>
              <br />
              <p class="rem2">
                ทุกกราฟในนี้มีค่า Mean, SD, Correlation เท่ากันหมด แต่หน้าตา
                Distribution ไม่เหมือนกันเลย
                ถ้าเราเห็นแค่ตัวเลขแล้วสรุปจากตัวเลข
              </p>
              <h5 class="rem2">4. Decision นำข้อมูลมาช่วยตัดสินใจ</h5>
              <p class="rem5">
                Data Science มีหน้าที่สรุปผลวิเคราะห์ให้เข้าใจง่าย ๆ
                เพื่อนำไปเสนอผู้ร่วมงานในฝ่ายบริหารค
                ซึ่งเป็นที่มาว่าทำไมหลายแห่งบอกว่า Data Scientist ต้องมี
                “ความสามารถในการสื่อสาร” (Communication Skill)
              </p>
              <p class="rem5">
                ในการแสดงผลวิเคราะห์ ไม่จำเป็นต้องพูดปากเปล่าเสมอไป
                สามารถแสดงเป็นรูปภาพให้ฝ่ายบริหารเข้าใจง่ายขึ้นได้
                ความสามารถด้าน Data Visualization จะมีประโยชน์มาก
              </p>
              <br />
              <div
                class="text-center font-italic col"
                @click="modals.modal5 = true"
              >
                <img src="/img/lesson9/21.png" width="80%" />
                <p>
                  <br />รูปที่ 21. ตัวอย่างการทำ Data Visualization แสดงราคาหุ้น
                </p>
              </div>
              <modal :show.sync="modals.modal5">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 21. ตัวอย่างการทำ Data Visualization แสดงราคาหุ้น
                </h6>
                <img src="/img/lesson9/21.png" width="100%" />
              </modal>
              <br />
              <p class="rem2 font-weight-bold">
                Data Science
                ครอบคลุมทุกอย่างที่เป็นขั้นตอนในการนำข้อมูลมาใช้ประโยชน์ เช่น
              </p>
              <p class="rem5">
                Data Mining คือ การเอาข้อมูลในอดีตมาค้นหาแบบแผน (Pattern)
                เพื่อนำไปใช้ทำนายผล (Predict) ในอนาคต ตัวอย่างคือ
                การนำข้อมูลการซื้อขายในอดีตมาทำนายว่าอนาคตอะไรจะขายดีในช่วงไหน
              </p>
              <p class="rem5">
                Data Analysis คือ การวิเคราะห์ข้อมูลโดยใช้เทคนิคต่าง ๆ
                เพื่ออธิบายข้อมูล เทคนิคต่าง ๆ ที่ใช้ เช่น การพลอตกราฟ (Data
                Visualization) หรือการรัน Clustering พวกนี้สามารถเรียกว่าทำ Data
                Analysis ได้ทั้งหมด
              </p>
              <br />
              <h4>กระบวนการทำงานหลักมีอยู่ 5 ขั้นตอน</h4>
              <br />
              <div
                class="text-center font-italic col"
                @click="modals.modal6 = true"
              >
                <img src="/img/lesson9/22.png" width="50%" />
              </div>
              <modal :show.sync="modals.modal6">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  กระบวนการทำงานหลักมีอยู่ 5 ขั้นตอน
                </h6>
                <img src="/img/lesson9/22.png" width="100%" />
              </modal>
              <br />
              <p class="rem2">
                1. การตั้งคำถามที่น่าสนใจ เป็นประโยชน์ต่อองค์กร และสามารถนำ
                เอาข้อมูลมาช่วยแก้ปัญหาได้
              </p>
              <p class="rem2">2. การค้นหาและจัดเก็บข้อมูล</p>
              <p class="rem2">
                3. การสำรวจข้อมูล หาแบบแผนความเชื่อมโยงระหว่างกัน
              </p>
              <p class="rem2">4. การสร้างแบบจำ ลองเพื่อวิเคราะห์ข้อมูล</p>
              <p class="rem2">
                5. การสื่อสารผลลัพธ์ที่ได้ให้เห็นภาพและเข้าใจง่าย
              </p>
              <br />
              <br />
              <hr />
              <h3 class="text-center display-5">ภาษาธรรมชาติ</h3>
              <br />
              <h4>ภาษาธรรมชาติ (Natural Language)</h4>
              <p class="rem2">
                เป้าหมายหนึ่งของปัญญาประดิษฐ์ คือ
                การสร้างโปรแกรมที่สามารถเข้าใจภาษามนุษย์
                ไม่เพียงแต่เข้าใจที่จะสามารถเข้าใจภาษาธรรมชาติซึ่งดูเหมือนจะเป็นสิ่งหนึ่งที่แสดงความฉลาดของมนุษย์แต่ยังสร้างความสำเร็จในการเพิ่มความสามารถ
                และเพิ่มประสิทธิภาพของเครื่องคอมพิวเตอร์
              </p>
              <p class="rem2">
                การประยุกต์ใช้ภาษาศาสตร์และเครื่องคอมพิวเตอร์เข้าด้วยกัน
                โดยจะหาวิธีให้คอมพิวเตอร์สามารถเข้าใจความหมายของประโยค
                เข้าใจเรื่องของคำ และความหมายของคำ หลักไวยากรณ์ของ ประโยค
                ภาษาธรรมชาติจริง ๆ
                ล้วนเป็นภาษาที่ยอมให้คอมพิวเตอร์รับคำสั่งโดยไม่คำนึงถึงรูปแบบหรือหลักไวยากรณ์ของภาษา
                เหมือนกับโปรแกรมภาษาอื่น ๆ ที่ต้องการมีขั้นตอนในการใช้คำสั่ง
                เช่น การใช้คำสั่งให้เครื่องจักรทำงาน การแปลภาษาด้วย
              </p>
              <p class="rem2">
                คอมพิวเตอร์เป็นต้นภาษาธรรมชาติเป็นภาษาที่มนุษย์ใช้ในชีวิติประจำวัน
                เป็นภาษาที่มีการพัฒนามาตั้งแต่อดีต และมีการ
                เปลี่ยนแปลงไปตามสภาพแวดล้อมและสภาพสังคมในความเป็นจริงในภาษาธรรมชาติยังมีข้อจำกัด
                การใช้ภาษาธรรมชาติเป็นภาษาง่ายไม่ทันสมัย
                ภาษาธรรมชาติที่ใช้ทางด้านธุรกิจส่วนใหญ่ได้ถูกออกแบบ
                เพื่อให้ผู้ใช้ติดต่อกับฐาน
                ความรู้หรือระบบผู้เชี่ยวชาญได้ภาษาธรรมชาติจึงเป็นภาษาคอมพิวเตอร์เป็นโปรแกรมภาษาที่มีจุดประสงค์ให้ผู้ใช้สามารถใช้เครื่องคอมพิวเตอร์ได้ด้วยคำสั่งที่เป็นภาษาที่ใช้กันทั่ว
                ๆ ไป ไม่ต้องมีรูปแบบกฎเกณฑ์เหมือนกับโปรแกรมภาษาระดับสูง
                ที่ใช้กันอยู่ แต่ในทุกวันนี้ก็ยังไม่มีภาษาธรรมชาติที่แท้จริง
                (pure natural language) อย่างไรก็ตามภาษาธรรมชาติก็นับว่าเป็น
                ประโยชน์ต่อผู้ใช้และผู้ใช้ก็ยังคงมีความพยายามพัฒนาภาษาธรรมชาติให้เป็นภาษาธรรมชาติที่แท้จริง
                เพื่อผู้ใช้สามารถติดต่อกับ
                ระบบคอมพิวเตอร์ได้ง่ายขึ้นให้ผู้ใช้ด้านสารสนเทศที่ต้องการโดยผู้ใช้สามารถฝึกทักษะของการใช้ภาษาที่ง่ายขึ้น
                ทำให้เขียนง่ายขึ้น ใช้คำสั่งง่ายไม่ต้องมีรูปแบบคำสั่ง
                ไม่ต้องมีการฝึกใช้คำสั่งภาษาธรรมชาติเหมาะกับงานเฉพาะกิจ (ad hoc)
                หรืองานเฉพาะอย่าง ที่สารสนเทศค่อนข้างจำกัด
              </p>

              <br />
              <div
                class="text-center font-italic col"
                @click="modals.modal7 = true"
              >
                <img src="/img/lesson9/23.png" width="80%" />
                <p>
                  <br />รูปที่ 23. รูปภาพ
                  ลักษณะการแปลงภาษามนุษย์ให้เป็นภาษาธรรมชาติ
                </p>
              </div>
              <modal :show.sync="modals.modal7">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 23. รูปภาพ ลักษณะการแปลงภาษามนุษย์ให้เป็นภาษาธรรมชาติ
                </h6>
                <img src="/img/lesson9/23.png" width="100%" />
              </modal>
              <br />
              <p class="rem2">
                ภาษายุคที่ 5 (fifth generation language) หรือ 5GLs
                ธรรมชาติหมายถึงธรรมชาติของมนุษย์
                คือไม่ต้องสนใจถึงคำสั่งหรือลำดับของข้อมูลที่ถูกต้อง
                ผู้ใช้เพียงแต่พิมพ์สิ่งที่ต้องการลงในเครื่องคอมพิวเตอร์เป็นคำหรือประโยคตามที่ผู้ใช้เข้าใจ
                ซึ่งจะทำให้มีรูปแบบของคำสั่งหรือประโยคที่แตกต่างกันออกไปได้มากมาย
                เพราะผู้ใช้แต่ละคนอาจจะใช้ประโยคต่างกัน ใช้คำศัพท์ต่างกัน
                หรือแม้กระทั่งบางคนอาจจะใช้ศัพท์แสลง
                คอมพิวเตอร์จะพยายามแปลคำหรือประโยคเหล่านั้นตามคำสั่ง
                แต่ถ้าไม่สามารถแปลให้เข้าใจได้
                ก็จะมีคำถามกลับมาถามผู้ใช้เพื่อยืนยันความถูกต้อง
                ภาษาธรรมชาติจะใช้ ระบบฐานความรู้ (knowledge base system)
                ช่วยในการแปลความหมายของคำสั่งต่าง ๆ
              </p>
              <br />
              <p class="rem2 font-weight-bold">
                ตัวอย่างภาษาในยุคต่าง ๆ ดังนี้
              </p>
              <p class="rem5">
                1. Fortran: ภาษาระดับสูงภาษาแรก
                เป็นภาษาโปรแกรมที่ใช้งานด้านวิทยาศาสตร์ วิศวกรรมศาสตร์
                และด้านคณิตศาสตร์ ภาษาฟอร์เทนจะประกอบด้วยข้อความ คำสั่ง
                ทีละบรรทัด
              </p>
              <p class="rem5">
                2. Basic: ภาษาโปรแกรมสำหรับผู้เริ่มต้น
                เป็นภาษาโปรแกรมที่เรียนรู้ง่าย ไม่ซับซ้อน
                เหมาะสำหรับใช้ในวงการศึกษา
              </p>
              <p class="rem5">
                3. C : ภาษาสมัยใหม่
                เป็นภาษาที่ใช้สำหรับเขียนโปรแกรมระบบปฏิบัติการ
                เหมาะสำหรับโปรแกรมเมอร์ที่มีความสามารถสูง
              </p>
              <p class="rem5">
                4. LISP: เป็นภาษาที่ใช้เมื่อประมวลผลด้านสัญลักษณ์, อักขระ,
                หรือคำต่าง ๆ ซึ่งเป็นการได้ตอบระหว่างคนกับคอมพิวเตอร์
                ภาษานี้นิยมใช้เขียนโปรแกรมด้านปัญญาประดิษฐ์
              </p>
              <p class="rem5">
                5. Prolog: เป็นภาษาโปรแกรมสำหรับงานด้านปัญญาประดิษฐ์
                ซึ่งแทนการใช้ภาษา LISP
              </p>
              <p class="rem5">
                6. Pilot:
                เป็นภาษาโปรแกรมที่นิยมใช้มากที่สุดในการเขียนโปรแกรมบทเรียนคอมพิวเตอร์
                ช่วยสอน(CAI) เช่น งานเกี่ยวกับคำสั่ง ฝึกหัด การทดสอบ เป็นต้น
              </p>
              <p class="rem5">
                7. Smalltalk:
                เป็นภาษาเชิงโต้ตอบกับเครื่องคอมพิวเตอร์ประกอบด้วยการจำ
                และการพิมพ์ เป็นภาษาที่สนับสนุนระบบคอมพิวเตอร์ภาพ
                เป็นภาษาเชิงวัตถุไม่ใช่เชิงกระบวนการ
              </p>
              <p class="rem5">
                8. Forth: เป็นภาษาสำหรับงานควบคุมแบบทันที
                เช่นการแนะนำกล้องดาราศาสตร์ และเป็นภาษาโปรแกรมที่มีความเร็วสูง
              </p>
              <br />
              <p class="rem2 lead">
                ข้อดี : ของภาษาคอมพิวเตอร์ในยุคที่ 5
                คือผู้เขียนโปรแกรมสามารถเขียนโปรแกรมได้เร็ว
                โดยไม่ต้องมีความรู้ด้านการเขียนโปรแกรม
                แต่คอมพิวเตอร์ที่ใช้โปรแกรมต้องมีระบบรับคำสั่ง
                และประมวลผลแบบอัจฉริยะ สามารถตอบสนองและทำงานได้หลายแบบ
              </p>

              <!-- -------------------------------- -->
              <br />
              <br />
              <br />
              <br />
              <div class="container">
                <div class="row">
                  <div class="col-auto mr-auto">
                    <router-link to="/lesson9_3" title="Lesson9_3 Page">
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
                    <router-link to="/lesson9_5" title="Lesson9_5 Page">
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
              <div class="text-center mt-5">Page 4/8</div>
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
              Lecturer in the Computer Science Division at Maejo University
            </small>
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
      },
    };
  },
};
</script>

<style></style>
