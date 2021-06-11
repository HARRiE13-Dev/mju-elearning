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

              <h5 class="rem2">3.4.2 การใส่เนื้อหาให้เหมาะสมบนแต่ละสไลด์</h5>
              <p class="rem5">
                เนื้อหาเป็นหัวใจสำคัญของการนำเสนอ
                แต่ผู้นำเสนอไม่จำเป็นต้องใส่เนื้อหาทุกอย่างลงไปในสไลด์
                การใส่เนื้อหาให้เหมาะสมสำหรับการนำเสนอที่มีประสิทธิภาพ
                มีแนวทางดังนี้
              </p>
              <p class="rem5">
                1) การเตรียมเนื้อหา ต้องมีการย่อยข้อมูลที่จะนำเสนอ
                โดยสรุปข้อมูลที่สำคัญไว้เป็นหัวข้อใหญ่และหัวข้อรองลงไป
              </p>
              <p class="rem5">
                2) ควรใส่เนื้อหาหนึ่งประเด็นต่อหนึ่งสไลด์
                ถ้าจะมีหลายประเด็นในหนึ่งสไลด์ ให้นำเสนอทีละประเด็น
                เพื่อดึงความสนใจของผู้ฟังให้อยู่กับสิ่งที่ผู้นำเสนอกำลังพูด
              </p>
              <p class="rem5">
                3) ไม่ใส่ข้อมูลมากเกินไป ควรใส่เฉพาะข้อความที่เป็นใจความสำคัญ
                ส่วนรายละเอียดไม่ต้องใส่ลงไป แต่ให้เตรียมไว้อธิบายประกอบ
              </p>
              <p class="rem5">
                4) หลีกเลี่ยงการนำเสนอข้อความยาวๆ ในรูปแบบย่อหน้า (Paragraph)
                แต่ให้ตัดข้อความเป็นรายการสั้นๆ ทีละบรรทัด
                และแต่ละรายการควรให้จบในบรรทัดเดียว
              </p>
              <p class="rem5">
                5) ในแต่ละสไลด์ ไม่ควรมีเกิน 6 รายการ
                หรือหากเป็นบรรทัดก็ไม่ควรเกิน 8-10 บรรทัด
              </p>
              <p class="rem5">
                6) อาจหลีกเลี่ยงการใส่ Bullets โดยใส่หัวข้อให้ดูโดดเด่น
                เป็นลำดับขั้นที่เข้าใจง่ายแทน
              </p>
              <br />
              <div
                class="text-center font-italic"
                @click="modals.modal1 = true"
              >
                <img src="/img/lesson3/10.png" width="80%" />
                <p>
                  <br />ภาพที่ 10 – ตัวอย่างการใส่เนื้อหา
                  และการใช้ขนาดของตัวอักษรที่เหมาะสมใน PowerPoint สไลด์
                </p>
              </div>
              <modal :show.sync="modals.modal1">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  ภาพที่ 10 – ตัวอย่างการใส่เนื้อหา
                  และการใช้ขนาดของตัวอักษรที่เหมาะสมใน PowerPoint สไลด์
                </h6>
                <img src="/img/lesson3/10.png" width="100%" />
              </modal>
              <br />
              <h5 class="rem2">
                3.4.3 การเลือกใช้ฟอนต์ให้เหมาะสม (choose appropriate fonts)
              </h5>
              <p class="rem2">
                ฟอนต์ถือเป็นสิ่งสำคัญรองลงมาจากการใช้สีพื้นหลัง
                การเลือกใช้ฟอนต์ที่เหมาะสมจะช่วยเพิ่มประสิทธิภาพในการนำเสนอ
                ทำให้การนำเสนอดูดีและเป็นที่จดจำ ในการทำสไลด์นำเสนอควรใช้ฟอนต์
                ดังนี้
              </p>
              <p class="rem5">
                1) ควรใช้ตัวอักษรขนาดใหญ่ที่ง่ายต่อการอ่าน
                โดยหัวเรื่องควรใช้ฟอนต์ขนาด 36 ถึง 44 points
                และเนื้อหาควรใช้ฟอนต์ขนาดไม่ต่ำกว่า 24 point
              </p>
              <p class="rem5">
                2) อย่าใช้ตัวอักษรที่เป็นตัวหนาทั้งหมด ควรใช้เน้นเฉพาะคำสำคัญ
              </p>
              <p class="rem5">
                3) อย่าใช้ฟอนต์หลากหลายเกินไป ควรใช้ไม่เกิน 3 ฟอนต์
                เพื่อให้งานดูมี Concept และออกมาในทิศทางเดียวกัน
                หากต้องการเน้นข้อความ
                ให้เพิ่มลูกเล่นโดยใช้ฟอนต์ตัวเข้มหรือตัวเอียงเพื่อเน้นข้อความ
              </p>
              <p class="rem5">
                4) พิจารณาใช้ฟอนต์ที่เหมาะสม เช่น ฟอนต์ Serif เป็นฟอนต์มีหัว
                ช่วยให้กวาดสายตาอ่านได้ง่ายงานดูคลาสสิค
                เหมาะสำหรับพิมพ์เนื้อหาที่เป็นทางการ ส่วนฟอนต์ Sans Serif
                เป็นตัวอักษรแบบเรียบ ไม่มีหัว น้ำหนักเส้นเท่ากันหมด ดูแล้วสบายตา
                ทำให้งานดูทันสมัย เหมาะกับการใช้ในส่วนของหัวข้อ
              </p>
              <p class="rem5">
                5) ใช้ตัวอักษรสีเข้มบนพื้นหลังสีสว่าง เช่น
                พื้นหลังสีขาวและสีเหลือง ให้ใช้ตัวอักษรสีดำหรือน้ำเงิน
                แต่ถ้าต้องการใช้พื้นสีเข้มก็ควรเลือกใช้ตัวอักษรสีอ่อน
              </p>
              <p class="rem5">
                6) หลีกเลี่ยงความจำเจจากการใช้ตัวอักษรแบบเดิมๆ ลองหาฟอนต์ใหม่ๆ
                ให้เข้ากับงาน
                แต่อย่างไรก็ตามหากต้องนำไฟล์ที่จะนำเสนอที่ใช้ฟอนต์ใหม่ที่ไม่ใช่ฟอนต์มาตรฐานไปเปิดที่คอมพิวเตอร์เครื่องอื่น
                ควรทำการฝัง (Embed) Font นั้นไว้ในไฟล์ที่จะใช้นำเสนอ
                เพื่อป้องกันไม่มีปัญหาเรื่องฟอนต์ โดยใช้คำสั่ง ดังนี้
              </p>
              <p class="rem5">
                ไปที่ Menu Bar คลิกที่ File > Options แล้วคลิก Save เลือก Embed
                fonts in the file เพื่อฝัง Font ที่ใช้ในไฟล์ แล้วคลิก OK
              </p>
              <div
                class="text-center font-italic"
                @click="modals.modal2 = true"
              >
                <img src="/img/lesson3/11.png" width="80%" />
                <p><br />ภาพที่ 11 – การฝังฟอนต์ใหม่ไว้ในไฟล์นำเสนอ</p>
              </div>
              <modal :show.sync="modals.modal2">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  ภาพที่ 11 – การฝังฟอนต์ใหม่ไว้ในไฟล์นำเสนอ
                </h6>
                <img src="/img/lesson3/11.png" width="100%" />
              </modal>
              <br />
              <h5 class="rem2">
                3.4.4 แผนภูมิหรือกราฟที่ใช้ประกอบการนำเสนอต้องต้องมีความถูกต้อง
                และตรงประเด็น (use accurate and relevant charts and graphs)
              </h5>
              <p class="rem5">
                การนำเสนองานที่มีเนื้อหาในเชิงตัวเลข สถิติ หรือตารางข้อมูล
                ควรใช้แผนภูมิ แผนภาพหรือกราฟในการนำเสนอ เพื่อให้ presentation
                มีความน่าสนใจ ให้ผู้ฟังเห็นภาพและเข้าใจได้ดีขึ้น ทั้งนี้
                ควรเลือกประเภทให้เหมาะกับเนื้อหา มีข้อแนะนำ ดังนี้
              </p>
              <p class="rem5">1) ควรมีการแบ่งส่วนให้ดูง่าย และสวยงาม</p>
              <p class="rem5">
                2)
                กราฟแท่งเหมาะกับการนำเสนอข้อมูลที่ต้องการแสดงให้เห็นความแตกต่างกันของข้อมูลแต่ละ
                item โดยมีชื่อและแสดงลำดับของข้อมูล อาจวางแบบแนวตั้งหรือแนวนอน
                และอาจเพิ่มมิติเพื่อความสวยงาม
              </p>
              <p class="rem5">
                3) กราฟวงกลมและวงแหวน เหมาะกับการนำเสนอข้อมูล
                ที่มีส่วนประกอบย่อยที่สามารถนำมารวมกันเป็นส่วนรวม เช่น ค่าร้อยละ
                จะเป็นการเน้นการนำเสนอให้เห็นถึงสัดส่วนของแต่ละ item
              </p>
              <p class="rem5 text-justify">
                แต่เนื่องจากไม่สามารถสร้างกราฟจากโปรแกรม PowerPoint ได้โดยตรง
                ผู้นำเสนอต้องทำกราฟด้วยโปรแกรมอื่นมาก่อน เช่น ใช้โปรแกรม
                Microsoft Excel ในกรณีที่ข้อมูลมีเป็นจำนวนมากและซับซ้อน
                ซึ่งหลังจาก plot graph ด้วยโปรแกรมอื่นแล้วจึงนำมาเข้าในโปรแกรม
                PowerPoint โดยการ copy และ paste
                แต่ถ้าต้องการให้มีการเชื่อมโยงไปยังข้อมูลดิบในไฟล์ Excel
                เพื่อให้เมื่อมีการแก้ไขข้อมูลที่ Excel กราฟที่เชื่อมโยงใน
                PowerPoint จะมีการปรับตามโดยอัตโนมัติ ต้องใช้คำสั่ง Paste
                โดยเลือก Paste Options แล้วเลือกแบบที่มีรูปโซ่ คือ Use
                Destination Theme & Link Data หรือ Keep Source Formatting & Link
                Data ดังภาพที่ 12
              </p>
              <div
                class="text-center font-italic"
                @click="modals.modal3 = true"
              >
                <img src="/img/lesson3/12.png" width="80%" />
                <p>
                  <br />ภาพที่ 12 – การเพิ่มกราฟจาก Microsoft Excel
                  แบบเชื่อมโยงไปยังข้อมูลในไฟล์ Excel
                </p>
              </div>
              <modal :show.sync="modals.modal3">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  ภาพที่ 12 – การเพิ่มกราฟจาก Microsoft Excel
                  แบบเชื่อมโยงไปยังข้อมูลในไฟล์ Excel
                </h6>
                <img src="/img/lesson3/12.png" width="100%" />
              </modal>
              <br />
              <p class="rem2">
                ถ้าจำนวนตัวเลขไม่มาก ผู้ใช้งานสามารถเรียกใช้โปรแกรม Microsoft
                Graph ในขณะที่อยู่ในโปรแกรม PowerPoint โดยใช้คำสั่ง ดังนี้
              </p>
              <p class="rem2">
                Insert ---> Chart แล้วเลือกรูปแบบของกราฟที่ต้องการ
                จากนั้นให้ผู้ใช้กรอกข้อมูลต่างๆ ลงในตาราง เช่น ชื่อแถว
                ชื่อคอลัมน์ และตัวเลข ลงในตารางข้อมูล ดังภาพที่ 13
                ซึ่งผู้ใช้งานสามารถปรับเปลี่ยนประเภทของกราฟ สี
                และฟอนต์ได้ตามต้องการ
              </p>
              <div
                class="text-center font-italic"
                @click="modals.modal4 = true"
              >
                <img src="/img/lesson3/13.png" width="80%" />
                <p>
                  <br />ภาพที่ 13 – การสร้างกราฟโดยการเรียกใช้โปรแกรม Microsoft
                  Graph
                </p>
              </div>
              <modal :show.sync="modals.modal4">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  ภาพที่ 13 – การสร้างกราฟโดยการเรียกใช้โปรแกรม Microsoft Graph
                </h6>
                <img src="/img/lesson3/13.png" width="100%" />
              </modal>
              <h5 class="rem2">
                3.4.5 การใช้ภาพหรือกราฟิกที่มีคุณภาพประกอบการนำเสนอ (use
                high-quality photos and graphics)
              </h5>
              <p class="rem2 text-justify">
                การนำเสนอด้วยภาพหรือมีภาพประกอบคำบรรยายจะช่วยดึงดูดใจและสร้างแรงบันดาลใจแก่ผู้ฟัง
                ทำให้เข้าใจในสิ่งที่ต้องการนำเสนอได้ดีขึ้น ดังคำสุภาษิตที่ว่า "A
                picture is worth a thousand words" หรือ
                ภาพหนึ่งภาพแทนคำพูดนับพันคำ นอกจากนี้
                รูปภาพยังช่วยให้ผู้ฟังสามารถจดจำเรื่องราวหรือเนื้อหาที่เรานำเสนอได้
                การใช้ภาพใน PowerPoint เพื่อการนำเสนอที่ดี มีข้อแนะนำ ดังนี้
              </p>
              <p class="rem2">
                1) ในหนึ่งสไลด์ไม่ควรใส่ภาพหลายภาพ ควรใส่ภาพที่มีคุณภาพสูงเพียง
                1 ภาพก็เพียงพอ
              </p>
              <p class="rem2">
                2) ภาพที่ใช้ต้องเกี่ยวข้องสัมพันธ์กับเนื้อหาที่นำเสนอ
                รวมถึงภาพที่ใส่เพื่อเพิ่มความสวยงามของสไลด์ เช่น
                ภาพตกแต่งข้อความ หรือภาพพื้นหลัง
              </p>
              <p class="rem2">
                3) ควรมีการเน้นจุดสำคัญในภาพ เช่น ภาพที่เป็นกราฟ
                หากมีการพูดถึงตัวเลขสถิติควรมีการใช้สีเน้นไปที่ตัวเลขสำคัญๆ
                เป็นต้น
              </p>
              <p class="rem2">
                4) การใช้พื้นหลัง (Background)
                ควรหลีกเลี่ยงการใช้ภาพเป็นพื้นหลังเพราะจะทำให้ตัวหนังสืออ่านยาก
                หรือถ้าต้องการใช้พื้นหลังเป็นรูปภาพ ควรทำภาพให้จางลง (ลด
                Opacity) และใส่เงาให้กับตัวอักษรด้วยเพื่อให้ตัวอักษรเด่นขึ้น
              </p>
              <p class="rem2">
                5) รูปภาพที่นำมาใส่ในงานนำเสนอจะต้องมีขนาดไม่ใหญ่จนเกินไป
                เพราะจะทำให้ขนาดของไฟล์นำเสนอใหญ่ไปด้วย ควรจะทำการลดขนาดของภาพ
                รวมทั้งตกแต่งภาพโดยใช้โปรแกรมจัดการภาพ เช่น Paint, PhotoScape,
                PhotoShop หรือ Lightroom ให้เรียบร้อยก่อนที่นำมาใส่ในงานนำเสนอ
                เพราะหากไปตกแต่งภาพใน PowerPoint จะทำให้ไฟล์นำเสนอมีขนาดใหญ่
              </p>
              <p class="rem2">
                6) ควรใช้ภาพที่ถ่ายเองหรือสร้างขึ้นเอง
                หลีกเลี่ยงการดาวน์โหลดภาพมาจากอินเทอร์เน็ตเพราะปัจจุบันมีกฎหมายลิขสิทธิ์เกี่ยวกับภาพถ่าย
                และบางเว็บไซต์ให้บริการขายรูปภาพ เช่น Shutterstock และ
                Dreamstime แต่มีเว็บไซต์ที่ให้ดาวน์โหลดรูปภาพมาใช้งานได้ฟรี เช่น
                Pixabay, Pexels, Freepik และ Stocksnap เป็นต้น
              </p>
              <p class="rem2">
                7) การใส่รูปภาพลงสไลด์ ควร insert
                ภาพจากไฟล์ที่เป็นไฟล์ขนาดเล็กแต่คุณภาพสูง
                จะช่วยให้ไฟล์สไลด์มีขนาดเล็กด้วย แต่ถ้า copy ภาพจากเว็บมา paste
                ลงสไลด์ จะทำให้สไลด์ PowerPoint มีขนาด File Size ใหญ่
              </p>
              <p class="rem2">
                8) การแต่งภาพด้วยเครื่องมือใน PowerPoint จะทำให้ File Size
                มีขนาดใหญ่ขึ้น ดังนั้น ควรลงภาพอย่างเดียว
                โดยไม่ต้องแก้ไขแต่งเติมบน PowerPoint หากไม่จำเป็น
              </p>
              <p class="rem2">
                การนำภาพมาใส่ในสไลด์ ทำได้โดยใช้คำสั่ง ดังนี้ ไปที่แถบ Insert
                -----> Images คลิกที่ Pictures จากนั้นจะมีกล่องข้อความ Insert
                Picture Form
                ถ้าจะนำเข้าไฟล์ภาพจากเครื่องคอมพิวเตอร์ที่กำลังใช้งานอยู่
                ให้คลิกที่ This Device หากจะนำเข้าจากอินเทอร์เน็ต ให้คลิกที่
                Online Pictures
                นอกจากนี้ยังสามารถจับภาพหน้าจอของโปรแกรมอื่นที่กำลังเปิดใช้งานอยู่บนคอมพิวเตอร์เครื่องนั้นมาให้เลือกใส่ในสไลด์ได้
                ดังแสดงในภาพ
              </p>
              <br />
              <div
                class="text-center font-italic"
                @click="modals.modal5 = true"
              >
                <img src="/img/lesson3/14.png" width="80%" />
                <p>
                  <br />ภาพที่ 14 ภาพที่ปรากฏบนหน้าจอ จากการใช้คำสั่ง Insert
                  -----> Images Graph
                </p>
              </div>
              <modal :show.sync="modals.modal5">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  ภาพที่ 14 ภาพที่ปรากฏบนหน้าจอ จากการใช้คำสั่ง Insert ----->
                  Images Graph
                </h6>
                <img src="/img/lesson3/14.png" width="100%" />
              </modal>
              <br />
              <div
                class="text-center font-italic"
                @click="modals.modal6 = true"
              >
                <img src="/img/lesson3/15.png" width="80%" />
                <p>
                  <br />ภาพที่ 15 การนำเข้าภาพจากอินเทอร์เน็ต โดยใช้ keyword
                  ในการค้นหาภาพ
                </p>
              </div>
              <modal :show.sync="modals.modal6">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  ภาพที่ 15 การนำเข้าภาพจากอินเทอร์เน็ต โดยใช้ keyword
                  ในการค้นหาภาพ
                </h6>
                <img src="/img/lesson3/15.png" width="100%" />
              </modal>
              <br />
              <div
                class="text-center font-italic"
                @click="modals.modal7 = true"
              >
                <img src="/img/lesson3/16.png" width="80%" />
                <p><br />ภาพที่ 16 การนำเข้าภาพจาก Screen shot</p>
              </div>
              <modal :show.sync="modals.modal7">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  ภาพที่ 16 การนำเข้าภาพจาก Screen shot
                </h6>
                <img src="/img/lesson3/16.png" width="100%" />
              </modal>
              <br />
              <p class="rem2">
                หากไม่ได้ตกแต่งภาพมาก่อนนำมาจัดทำ presentation
                ผู้ใช้สามารถตกแต่งภาพในโปรแกรม Microsoft PowerPoint ได้ เช่น
                การปรับความเข้ม/สว่าง การลบสีพื้น การใส่ขอบ
                การตัดภาพเป็นรูปทรางต่างๆ เป็นต้น ตัวอย่าง วิธีการตกแต่งภาพใน
                PowerPoint ดังแสดงในภาพที่ 17, 18 และ 19
              </p>
              <br />
              <div
                class="text-center font-italic"
                @click="modals.modal8 = true"
              >
                <img src="/img/lesson3/17.png" width="80%" />
                <p>
                  <br />ภาพที่ 17 การ double click
                  ที่รูปภาพเพื่อให้แถบเมนูของการแก้ไขรูปภาพปรากฏขึ้นมา
                </p>
              </div>
              <modal :show.sync="modals.modal8">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  ภาพที่ 17 การ double click
                  ที่รูปภาพเพื่อให้แถบเมนูของการแก้ไขรูปภาพปรากฏขึ้นมา
                </h6>
                <img src="/img/lesson3/17.png" width="100%" />
              </modal>
              <br />
              <div
                class="text-center font-italic"
                @click="modals.modal9 = true"
              >
                <img src="/img/lesson3/18.png" width="80%" />
                <p>
                  <br />ภาพที่ 18 การคลิกที่แถบ Corrections
                  เพื่อเลือกรูปที่ปรับแก้ความคมชัด/นุ่มนวล และความเข้ม/สว่าง
                </p>
              </div>
              <modal :show.sync="modals.modal9">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  ภาพที่ 18 การคลิกที่แถบ Corrections
                  เพื่อเลือกรูปที่ปรับแก้ความคมชัด/นุ่มนวล และความเข้ม/สว่าง
                </h6>
                <img src="/img/lesson3/18.png" width="100%" />
              </modal>
              <br />
              <div
                class="text-center font-italic"
                @click="modals.modal10 = true"
              >
                <img src="/img/lesson3/19.png" width="80%" />
                <p>
                  <br />ภาพที่ 19 – การ crop ภาพเป็นรูปต่างๆ โดยคลิกที่ Crop
                  -----> Crop to Shape
                </p>
              </div>
              <modal :show.sync="modals.modal10">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  ภาพที่ 19 – การ crop ภาพเป็นรูปต่างๆ โดยคลิกที่ Crop ----->
                  Crop to Shape
                </h6>
                <img src="/img/lesson3/19.png" width="100%" />
              </modal>
              <br />
              <p class="rem2">
                การใส่รูปภาพหลาย รูป และการตกแต่ภาพในโปรแกรม PowerPoint
                จะส่งผลให้ไฟล์มีขนาดใหญ่ ผู้ใช้สามารถลดขนาดไฟล์ให้เล็กลง
                ด้วยการบีบอัดภาพ (compress pictures) ในตัว presentation
                หรือในขั้นตอน การ Save ดังนี้
              </p>
              <br />
              <p class="rem2 font-weight-bold ">
                การลดขนาดไฟล์ด้วยการบีบอัดภาพบนสไลด์ ทำได้ดังนี้
              </p>
              <p class="rem2 ">
                - ไปแถบเมนูของการแก้ไขรูปภาพ คลิกที่ Compress Pictures
                จะปรากฏหน้าต่าง Compression options ให้เลือก Resolution
                ที่ต้องการ และสามารถระบุว่าจะลบกรอบที่ตัดออกไปด้วยหรือไม่
                โดยสามารถเลือกบีบอัดและลบส่วนที่ตัดออกเฉพาะภาพนั้นหรือทำทุกภาพพร้อมกัน
              </p>
              <div
                class="text-center font-italic"
                @click="modals.modal11 = true"
              >
                <img src="/img/lesson3/20.png" width="60%" />
                <p>
                  <br />ภาพที่ 20 – การบันทึกไฟล์ Presentation
                  แบบบีบอัดภาพเพื่อลดขนาดไฟล์การลดขนาดไฟล์ด้วย save
                  ไฟล์แบบบีบอัด
                </p>
              </div>
              <modal :show.sync="modals.modal11">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  ภาพที่ 20 – การบันทึกไฟล์ Presentation
                  แบบบีบอัดภาพเพื่อลดขนาดไฟล์การลดขนาดไฟล์ด้วย save
                  ไฟล์แบบบีบอัด
                </h6>
                <img src="/img/lesson3/20.png" width="100%" />
              </modal>
              <br />
              <p class="rem2 ">
                - ไปที่ File ----> save as ตั้งชื่อภาพแล้วคลิกที่ Tools ----->
                Compress Pictures จะมีกล่อง Compression options ขึ้นมาให้ติกที่
                web (150 ppi) ซึ่งเป็นขนาดที่เหมาะสำหรับ
                การนำเสนอผ่านเว็บไซต์และจอภาพทั่วไป
              </p>
              <br />
              <div
                class="text-center font-italic"
                @click="modals.modal12 = true"
              >
                <img src="/img/lesson3/21.png" width="60%" />
                <p>
                  <br />ภาพที่ 21 – การบันทึกไฟล์presentation
                  แบบบีบอัดภาพเพื่อลดขนาดไฟล์
                </p>
              </div>
              <modal :show.sync="modals.modal12">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  ภาพที่ 21 – การบันทึกไฟล์presentation
                  แบบบีบอัดภาพเพื่อลดขนาดไฟล์
                </h6>
                <img src="/img/lesson3/21.png" width="100%" />
              </modal>
              <br />
              <h5 class="rem2">3.4.6 การใส่วิดีโอเข้าไปในการนำเสนอ</h5>
              <p class="rem2 ">
                การนำเสนอข้อมูลหรือไอเดียใหม่ๆ
                การนำเสนอด้วยมุมมองที่แตกต่างจะช่วยให้มีความน่าสนใจมากขึ้น เช่น
                เพิ่มการนำเสนอด้วยวิดีโอเข้ามาในสไลด์ที่กำลังนำเสนอ
                การนำเข้าวิดีโอมีวิธีการทำ ดังนี้
              </p>
              <p class="rem2 ">
                - ไปที่ Insert --------> Media จะปรากฏกล่องประเภทของ Media
                ขึ้นมาให้เลือก จากนั้นให้ติกที่ Video
                แล้วเลือกไฟล์วิดีโอที่เตรียมไว้ หรือจากอินเทอร์เน็ต เช่น Youtube
                โดยใส่ URL ของวิดีโอลงไป
              </p>
              <br />
              <div
                class="text-center font-italic"
                @click="modals.modal13 = true"
              >
                <img src="/img/lesson3/22.png" width="60%" />
                <p><br />ภาพที่ 22 – การใส่วิดีโอเข้าไปในสไลด์ presentation</p>
              </div>
              <modal :show.sync="modals.modal13">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  ภาพที่ 22 – การใส่วิดีโอเข้าไปในสไลด์ presentation
                </h6>
                <img src="/img/lesson3/22.png" width="100%" />
              </modal>
              <!-- -------------------------------- -->
              <br />
              <br />
              <br />
              <br />
              <div class="container">
                <div class="row">
                  <div class="col-auto mr-auto">
                    <router-link to="/lesson3_1" title="Lesson3_1 Page">
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
                    <router-link to="/lesson3_3" title="Lesson3_3 Page">
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
              <div class="text-center mt-5">Page 2/3</div>
            </div>
          </div>
        </div>
      </section>

      <hr />
      <div class="col-lg-center">
        <div class="pt-4 text-center">
          <h5 class="title">
            <span class="d-block mb-1">Author | Dr.Udomluk Thampunya</span>
            <small class="h6 text-black"
              >Lecturer in the Digital Communications at Maejo University</small
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
        modal18: false,
        modal19: false,
        modal20: false,
      },
    };
  },
};
</script>

<style></style>
