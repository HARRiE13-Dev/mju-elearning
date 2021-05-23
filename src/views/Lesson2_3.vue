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
              <h5 style="text-indent: 2.5em;">8.2 การย้ายข้อมูล (Move)</h5>
              <p style="text-indent: 2.5em;">การย้ายข้อมูลใน Cell มีขั้นตอนการย้ายได้ 2 วิธี คือ</p>
              <p style="text-indent: 2.5em;">1)	การย้ายข้อมูลใน Cell</p>
              <p style="text-indent: 5em;">1.1)	คลิกเลือก Cell ที่ต้องการย้ายข้อมูล</p>
              <p style="text-indent: 5em;">1.2)	ใช้เมาส์คลิกที่เส้นขอบ Cell ให้ปรากฏสัญลักษณ์ลูกศร ดังรูป 52</p>
              <p style="text-indent: 5em;">1.3)	คลิกเลือก Cell ตำแหน่งใหม่</p>
              <p style="text-indent: 5em;">1.4)	ปล่อยมือจากเมาส์เพื่อวางข้อมูล </p>
              <p style="text-indent: 2.5em;">2)	การย้ายข้อมูลในกลุ่ม Cell</p>
              <p style="text-indent: 5em;">2.1)   คลิกเลือกกลุ่ม Cell ที่ต้องการย้ายกลุ่มข้อมูล</p>
              <p style="text-indent: 5em;">2.2)   ใช้เมาส์คลิกที่เส้นขอบ Cell ให้ปรากฏเครื่องหมายลูกศร ดังรูป 5</p>
              <p style="text-indent: 5em;">2.3)   คลิกเลือก Cell ตำแหน่งใหม่</p>
              <p style="text-indent: 5em;">2.4)   ปล่อยมือจากเมาส์เพื่อวางข้อมูล </p>
              <div class="text-center" style="font-style:italic">
                <img src="/img/lesson2/52.png" width="20%" />
                <p>
                  <br />รูปที่ 52 ลูกศรสัญลักษณ์การใช้คำสั่งย้ายข้อมูล (Move)
                </p>
              </div>
              <br>
              <div class="text-center" style="font-style:italic">
                <img src="/img/lesson2/53.png" width="60%" />
                <p>
                  <br />รูปที่ 53 การย้ายข้อมูลใน Cell D6 
                </p>
              </div>
              <br>
              <div class="text-center" style="font-style:italic">
                <img src="/img/lesson2/54.png" width="60%" />
                <p>
                  <br />รูปที่ 54 การย้ายข้อมูลใน Cell D6 
                </p>
              </div>
              <br>
              <h5 style="text-indent: 2.5em;">8.3 การคัดลอกข้อมูล (Copy)</h5>
              <p style="text-indent: 5em;">การป้อนข้อมูลที่ข้อมูลซ้ำ ๆ กัน สามารถใช้คำสั่งคัดลอกข้อมูลเพื่อให้เกิดความรวดเร็วยิ่งขึ้น 
                  โดยใช้คำสั่ง Copy หรือ คัดลอก ขั้นตอนการคัดลอกข้อมูล ดังนี้</p>
            <p style="text-indent: 5em;">1)	การคัดลอกข้อมูลใน Cell</p>
            <p style="text-indent: 7.5em;">1.1)	คลิกเลือก Cell ต้นฉบับ</p><p style="text-indent: 7.5em;">1.2)	วางเมาส์ในตำแหน่ง Cell ต้นฉบับที่เลือก </p>
            <p style="text-indent: 7.5em;">1.3)	คลิกเมาส์ขวา เลือกคำสั่ง Copy </p><p style="text-indent: 7.5em;">1.4)	จะปรากฏเส้นไข่ปลาล้อมรอบ Cell ต้นฉบับ</p>
            <p style="text-indent: 7.5em;">1.5)	เลือกตำแหน่ง Cell ใหม่ที่ต้องการนำข้อมูลไปใช้งาน</p><p style="text-indent: 7.5em;">1.6)	คลิกเมาส์ขวา เลือกคำสั่ง Paste หรือ วาง</p>
            <p style="text-indent: 5em;">2)	การคัดลอกข้อมูลในกลุ่ม Cell</p>
            <p style="text-indent: 7.5em;">2.1)  คลิกเลือกกลุ่ม Cell ต้นฉบับ</p><p style="text-indent: 7.5em;">2.2)  วางเมาส์ในตำแหน่งกลุ่ม Cell ต้นฉบับที่เลือก </p>
            <p style="text-indent: 7.5em;">2.3)  คลิกเมาส์ขวา เลือกคำสั่ง Copy</p><p style="text-indent: 7.5em;">2.4)  จะปราฏเส้นไข่ปลาล้อมรอบกลุ่ม Cell ต้นฉบับ</p>
            <p style="text-indent: 7.5em;">2.5)  เลือกตำแหน่ง Cell ใหม่ที่ต้องการนำข้อมูลไปใช้งาน</p><p style="text-indent: 7.5em;">2.6)  คลิกเมาส์ขวา เลือกคำสั่ง Paste หรือ วาง</p>
            <div class="text-center" style="font-style:italic">
                <img src="/img/lesson2/55.png" width="60%" />
                <p>
                  <br />รูปที่ 55 สัญลักษณ์คำสั่ง Copy (คัดลอก) เส้นไข่ปลา (ต้นฉบับ) และคำสั่ง Paste (การวาง) 
                </p>
              </div>
              <br>
               <div class="text-center" style="font-style:italic">
                <img src="/img/lesson2/56.png" width="60%" />
                <p>
                  <br />รูปที่ 56 การคัดลอกข้อมูลใน Cell ตำแหน่ง B4
                </p>
              </div>
              <br>
              <div class="text-center" style="font-style:italic">
                <img src="/img/lesson2/57.png" width="60%" />
                <p>
                  <br />รูปที่ 57 การคัดลอกข้อมูลในกลุ่ม Cell B4:D5
                </p>
              </div>
              <br>
              <h5 style="text-indent: 2.5em;">8.4 การแทรกข้อมูล (Insert)</h5>
              <p style="text-indent: 5em;">การเพิ่มข้อมูลเข้าไปในสมุดงานหรือแผ่นงานในภายหลัง ทำได้โดยการแทรก (Insert) ข้อมูล           
                  ซึ่งขั้นตอน ดังนี้</p>
                  <p style="text-indent: 5em;">1)	การแทรกข้อมูลใน Cell หรือ กลุ่ม Cell </p>
                  <p style="text-indent: 6em;">1.1)	คลิกเลือก Cell หรือกลุ่ม Cell ที่ต้องการแทรกข้อมูล </p>
                  <p style="text-indent: 6em;">1.2)	คลิกเมาส์ขวา เลือกคำสั่ง Insert หรือ แทรก </p>
                  <p style="text-indent: 6em;">1.3)	เลือกวิธีการจัดการกับข้อมูลใน Cell หรือกลุ่ม Cell ที่อยู่ในข้อ 1.1 โดยเลือกได้ 4 กรณี</p>
                   <p style="text-indent: 7.5em;">- เลื่อนเซลล์ไปทางขวา	ข้อมูลเดิมจะเลื่อนไปยัง Cell ถัดไปที่อยู่ด้านขวามือ </p>
                   <p style="text-indent: 7.5em;">- เลื่อนเซลล์ลง 	   	ข้อมูลเดิมจะเลื่อนไปอยู่ด้านล่างของ Cell เดิม </p>
                   <p style="text-indent: 7.5em;">- ทั้งแถว 			ข้อมูลเดิมทั้งแถวจะเลื่อนไปอยู่ด้านล่างทั้งแถว  </p>
                   <p style="text-indent: 7.5em;">- ทั้งคอลัมน์ 			ข้อมูลเดิมทั้งคอลัมน์จะเลื่อนไปอยู่คอลัมน์ด้านขวา </p>
                <p style="text-indent: 6em;">1.4)	คลิกเมาส์ขวา เลือกคำสั่ง Paste หรือ วาง</p>
                <div class="text-center" style="font-style:italic">
                <img src="/img/lesson2/58.png" width="40%" />
                <p>
                  <br />รูปที่ 58 เลือกวิธีการจัดการกับข้อมูลใน Cell หรือกลุ่ม Cell 
                </p>
              </div>
              <br>
              <div class="text-center" style="font-style:italic">
                <img src="/img/lesson2/59.png" width="60%" />
                <p>
                  <br />รูปที่ 59 ผลการแทรกข้อมูล กรณี O เลื่อนเซลล์ไปทางขวา
                </p>
              </div>
              <br>
              <div class="text-center" style="font-style:italic">
                <img src="/img/lesson2/60.png" width="60%" />
                <p>
                  <br />รูปที่ 60 ผลการแทรกข้อมูล กรณี O เลื่อนเซลล์ลง 
                </p>
              </div>
              <br>
              <div class="text-center" style="font-style:italic">
                <img src="/img/lesson2/61.png" width="60%" />
                <p>
                  <br />รูปที่ 61 ผลการแทรกข้อมูล กรณี O ทั้งแถว 
                </p>
              </div>
              <br>
              <div class="text-center" style="font-style:italic">
                <img src="/img/lesson2/62.png" width="60%" />
                <p>
                  <br />รูปที่ 62 ผลการแทรกข้อมูล กรณี O ทั้งคอลัมน์  
                </p>
              </div>
              <br>




              
              <!-- -------------------------------- -->
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
                        >Previous</base-button>
                      </div>
                    </router-link>
                  </div>
                  <div class="col-auto">
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr />
      <div class="col-lg-center">
        <div class="pt-4 text-center">
          <h5 class="title">
            <span class="d-block mb-1">Author | Dr.Nasi Tantitharanukul</span>
            <small
              class="h6 text-black"
            >Lecturer in the Computer Science Division at Maejo University</small>
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

<style>
</style>