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
              <h3 class="text-center display-5">
                Image Processing
                การรับรู้ภาพและการประมวลผลภาพ
              </h3>
              <br />
              <h4>1. คลื่น</h4>
              <p
                class="rem2"
              >คลื่น เป็นปรากฎการณ์ที่เกี่ยวกับการเคลื่อนที่รูปแบบหนึ่ง มีการแผ่กระจายเคลื่อนที่ออกไป ในลักษณะของการกวัดแกว่ง หรือกระเพื่อม และมักจะมีการส่งถ่ายพลังงานไปด้วย เช่น คลื่นผิวน้ำ คลื่นยังแบ่งออกเป็นหลายชนิดโดยที่คลื่นบางชนิดอาศัยตัวกลางในการเคลื่อนที่ แต่บางชนิดก็ไม่อาศัย ตัวกลางในการเคลื่อนที่</p>
              <br />
              <div class="text-center font-italic col">
                <img src="/img/lesson9/hz.png" width="60%" />
                <p>
                  <br />กราฟรูปคลื่น
                </p>
              </div>
              <br />
              <h4>2. การดูดกลืนของแสง</h4>
              <p
                class="rem2"
              >เมื่อแสงขาวตกกระทบวัตถุทึบแสง วัตถุนั้นจะดูดกลืนแสงสีที่อยู่ในแสงขาวนั้น ซึ่งปริมาณการดูดกลืนไม่เท่ากัน ส่วนแสงที่เหลือจากการดูดกลืนจะสะท้อนกลับเข้าสู่ตา ทำให้เราเห็นวัตถุเป็นสีเดียวกับแสงที่สะท้อน</p>
              <br />
              <div class="text-center font-italic col">
                <img src="/img/lesson9/light.png" width="60%" />
                <p>
                  <br />รูปการสะท้อนของคลื่นแสง
                </p>
              </div>
              <br />
              <h4>การดูดกลืนของแสง</h4>
              <p class="rem2">- วัตถุสีดำดูดความร้อน</p>
              <p class="rem2">- วัตถุสีขาวสะท้อนความร้อน</p>
              <p class="rem2">- วัตถุเงาสะท้อนรังสี</p>
              <br />
              <h5 class="rem2">2.1 วัตถโปร่งใส (Transparent Object )</h5>
              <p
                class="rem5"
              >เป็นวัตถุ ที่แสงผ่านไปได้เกือบหมด เรามองผ่านวัตถุนี้ได้ชัดเจน เช่น น้ำใส แก้วใส เป็นต้น</p>
              <br />
              <div class="text-center font-italic col">
                <img src="/img/lesson9/glass.png" width="50%" />
                <p>
                  <br />วัตถโปร่งใส
                </p>
              </div>
              <br />
              <h5 class="rem2">2.2 วัตถุโปร่งแสง ( Translucent Object )</h5>
              <p
                class="rem5"
              >เป็น วัตถุที่แสงผ่านไปได้บ้าง ไม่เป็นระเบียบ เรามองผ่านวัตถุนี้ไม่ชัดเจน เช่น น้ำขุ่น กระจกฝ้า เป็นต้น</p>
              <br />
              <div class="text-center font-italic col">
                <img src="/img/lesson9/tran.png" width="60%" />
                <p>
                  <br />วัตถโปร่งแสง
                </p>
              </div>
              <br />
              <h5 class="rem2">2.3 วัตถุทึบแสง ( Opaque Object )</h5>
              <p
                class="rem5"
              >เป็นวัตถุทึบแสงผ่านไม่ได้เลยแสงทั้งหมดจะถูกดูดกลืนไว้ หรือสะท้อนกลับเราไม่สามารถมองผ่านวัตถุชนิดนี้ได้ เช่น กระจกเงา ผนังตึก เป็นต้น</p>
              <br />
              <div class="text-center font-italic col">
                <img src="/img/lesson9/opa.png" width="50%" />
                <p>
                  <br />วัตถุทึบแสง
                </p>
              </div>
              <br />
              <h4
                class="font-weight-bold"
              >รู้หรือไม่ ? ตาเราสามารถมองเห็น visible ในช่วง 400 nm – 700 nm</h4>
              <br />
              <h5>1. ภาพเคลื่อนไหว</h5>
              <p
                class="rem2"
              >ภาพเคลื่อนไหวที่สร้างขึ้น โดยการนำภาพนิ่งหลายๆภาพมาฉายต่อเนื่องกันด้วยความเร็วสูง ทำให้เกิดภาพลองตาของการเคลื่อนไหว โดยปกติความเร็วของภาพเคลื่อนไหว จะฉายด้วยความเร็วที่ต่างกัน ขึ้นอยู่กับอุปกรณ์กับชนิดของการแสดงผล ( Output ) โดยถ้าฉายเป็นภาพยนตร์จะฉายด้วยความเร็ว 24 เฟรม/วินาที ถ้าถ่ายทอดในระบบ PAL จะฉายด้วยความเร็ว 25 เฟรม/วินาที แต่ในระบบ NTSC จะฉายด้วยความเร็ว 29.97 หรือ 30 เฟรม/วินาที</p>
              <br />
              <div class="text-center font-italic col">
                <img src="/img/lesson9/pa.png" width="80%" />
              </div>
              <br />
              <h6 class="rem2">1.1 ประเภทของภาพเคลื่อนไหว</h6>
              <p class="rem5">
                1. 2D Animation
                คือ ภาพเคลื่อนไหว 2 มิติ มองเห็นได้ทั้งความสูงและความกว้าง จะมีความเสมือนจริงพอสมควร และการสร้างจะไม่ซับซ้อนมากนัก เช่น ภาพเคลื่อนไหวในเว็บต่าง ๆ รวมทั้ง Gif Animation
              </p>
              <p
                class="rem5"
              >2. 3D Animation คือภาพเคลื่อนไหวแบ3มิติมองเห็นได้ทั้งความสูง ความกว้าง และความลึก มองเห็นจะมีความสมจริงมากที่สุด เช่น ภาพยนตร์การ์ตูน เรื่อง NEMO เป็นต้น</p>
              <br />
              <h5>รูปแบบของภาพเคลื่อนไหวมี 3 แบบ</h5>
              <p
                class="rem2"
              >1. Traditional Animation หรือ Hand Drawing Animation หรือ 2D Animation คือภาพเคลื่อนไหวที่เกิดจากการวาดภาพทีละภาพหลายๆพันภาพและฉายภาพเหล่านั้นผ่านกล้องโดยใช้เวลาไม่กี่วินาทีเช่น 1 วินาทีใช้รูป 24 เฟรม เป็นภาพเคลื่อนไหวสลับแรกเริ่มมักใช้การวาดมือ</p>
              <p class="rem2">
                2. Stop Motion หรือ Model Animation
                ผู้สร้างภาพเคลื่อนไหวต้องเข้าไปทำการเคลื่อนไหวโดยตรงแบบจำลอง Model และทำการถ่ายภาพเอาไว้ทีละเฟรมๆ แบบจำลองอาจเป็นของเล่นหรือสร้างจากดินน้ำมันการเกิด Stop Motion ต้องอาศัยเวลา และความทุ่มเทมาก
              </p>
              <p class="rem2">
                3. Computer Animation
                เป็นภาพเคลื่อนไหวที่มักพบมากในปัจจุบัน เนื่องจากการใช้โปรแกรมเป็นไปได้ง่ายและมีการนำหลักการแบบ 2D เข้ามาผสมผสานกับโปรแกรมทำได้ง่ายสะดวกในการแก้ไขและการแสดงผล ปัจจุบันมีซอฟต์แวร์ที่ช่วยในการทำภาพเคลื่อนไหวเช่น โปรแกรม 3PS MAX,MAYA,ADOBE FLASH เป็นต้น เป็นวิธที่ประหยัดเวลาและลดต้นทุนการผลิต
              </p>

              <br />
              <h5>รูปภาพ ในคอมพิวเตอร์แบ่งออกเป็น 2 ประเภท</h5>
              <p class="rem2">
                คือรูปภาพแบบ บิตแมพ (Bitmap Image) และรูปภาพแบบเวกเตอร์ (Vector Image)
                โดยบิตแมพจะมีส่วนที่เรียกว่า พิกเซล (Pixels) ส่วนรูปแบบของเวกเตอร์จะประกอบด้วยเส้นลายต่างๆ ที่สร้างขึ้นจากการคำนวนทางคณิตศาสตร์ของลักษณะทางเรขาคณิต ซึ่งเรียกว่า เวกเตอร์
              </p>
              <br />
              <div class="text-center font-italic col">
                <img src="/img/lesson9/bit.png" width="60%" />
              </div>
              <br />
              <h5>ระดับความเข้มเทา (Gray Scales)</h5>
              <p class="rem2">• ภาพ 1 บิต มี 2 ระดับ</p>
              <p class="rem2">• ภาพ 2 บิต มี 4 ระดับ</p>
              <p class="rem2">• ภาพ 3 บิต มี 8 ระดับ</p>
              <p class="rem2">• ภาพ 5 บิต มี 32 ระดับ</p>
              <p class="rem2">• ภาพ 6 บิต มี 64 ระดับ</p>
              <p class="rem2">• ภาพ 7 บิต มี 128 ระดับ</p>
              <p class="rem2">• ภาพ 8 บิต มี 256 ระดับ</p>
              <br />
              <h4>ภาพดิจิตอล</h4>
              <h5 class="rem2">ประเภทของภาพบิทแมป มี4ประเภท ตามการแสดงสีของภาพ</h5>
              <p class="rem5">
                1. ภาพระดับความเข้มเทา(Intensity Image or Gray Scale Image)
                -ในแต่ละพิกเซลจะมีค่าความเข้มแสงในแต่ละระดับแตกต่างกันไปตั้งแต่เทาดำไปยังระดับสีขาว
              </p>
              <p class="rem5">
                2. ภาพสี(Color Image)
                -แต่ละจุดภาพหรือพิกเซลจะเก็บค่าแต่ละแถบแสงของแม่สีหลัก 3 สี ที่ซ้อนกันอยู่คือสีแดง สีเขียว สีน้ำเงินซึ่งในแต่ละพิกเซลก็จะแสดงผลของค่าสีของแต่ละพิกเซลตามระดับความเข้มในแต่ละแถบสี
              </p>
              <p class="rem5">
                3. ภาพไบนารี (Binary Image)
                -มีลักษณะในรูปแบบขาวดำ คือมี 1 bit จะแสดงค่าด้วยไบนารีจะประกอบด้วยค่า 1 หมายถึงจุดสีขาว และ 0 หมายถึงจุดสีดำ
              </p>
              <p class="rem5">
                4. ภาพแบบดัชนี(Index Image)
                -จะเก็บค่าดัชนี ซึ่งเป็นตัวเลขจำนวนเต็มจะถูไปเทียบกับตารางสี (Color Table)
              </p>
              <br />
              <h5 class="rem2">ขนาดของไฟล์ภาพ Image File Sizes</h5>
              <p class="rem2 font-weight-bold">Example</p>
              <p class="rem2">ภาพขาวดำขนาด 512 X 512 พิกเซลขนาดของไฟล์ภาพจะสามารถคำนวณได้จาก</p>
              <p class="rem2">512 x 512 X 1 = 262,144 bit (bit)</p>
              <p class="rem7">= 32,768 ไบต์ (byte) / 8</p>
              <p class="rem7">= 0.033 เมกกะไบต์ (MB) / 1000000</p>
              <br />
              <p class="rem2 font-weight-bold">Example</p>
              <p
                class="rem2"
              >Gray Scale Image ระดับความเข้มเทา ระหว่าง 0-256 8บิต ขนาด 512x512 คำนวณได้จาก</p>
              <p class="rem2">512 x 512 X 8 = 2,097,152 bit</p>
              <p class="rem7">= 262,144 byte</p>
              <p class="rem7">= 0.262 MB</p>
              <br />
              <h5>ตัวอย่าง ภาพสีขนาด 512 x 512 พิกเซล ความละเอียด 8 บิต</h5>
              <p class="rem2">
                คำนวณได้จาก
                512 x 512 x 8 x 3 = 6,291,456 บิต = 786,432 ไบต์ = 0.786 เมกะไบต์
              </p>
              <p class="rem2">imread เรียกดูภาพ </p>
              <p class="rem2">rgb2gray ทำเป็น gray </p>
              <p class="rem2">rot90  หมุนภาพ 90 องศา</p>
              <p class="rem2">testGray + 150 ภาพสว่างขึ้น </p>
              <p class="rem2">subplot การplotกราฟ เช่น subplot(1,3,1) </p>
              <p class="rem2">axis off ไม่มีตาราง , axis on มี </p>
              <p class="rem2">title(’ ’) คำอธิบาย </p>
              <p class="rem2">subimage (test 4) เอารูปมาใส่ในช่อง test 4 </p>
              <p class="rem2">Lab 19.1 </p>
              <p class="rem2">clc ; </p>
              <p class="rem2">clear; test = imread (‘test 3:jpg’);</p>
              <p class="rem2">testGray = rgb2gray (test);</p>
              <p class="rem2">testGray2 = rot20(testGray,1); </p>
              <p class="rem2">test 4 = testGray +150 ;</p>
              <p class="rem2">test 5 = testGray - 150 ; </p>
              <p class="rem2">figure; </p>
              <p class="rem2">subplot(1,3,1),subimage (test 4),axis off , title (‘Brightness image’); </p>
              <p class="rem2">subplot(1,3,2),subimage (testGray 2 ),axis on, title (‘Normal image’); </p>
              <p class="rem2">subplot(1,3,3),subimage (test 5),axis on , title (‘Darkness image’);</p>
            
              <!-- -------------------------------- -->
              <br />
              <br />
              <br />
              <br />
              <div class="container">
                <div class="row">
                  <div class="col-auto mr-auto">
                    <router-link to="/lesson9_7" title="Lesson9_7 Page">
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
                  
                  </div>

                </div>
              </div>
              <div class="text-center mt-5">Page 1/8</div>
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
