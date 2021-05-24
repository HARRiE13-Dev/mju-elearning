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
                <img src="/img/lesson2/56.png" width="80%" />
                <p>
                  <br />รูปที่ 56 การคัดลอกข้อมูลใน Cell ตำแหน่ง B4
                </p>
              </div>
              <br>
              <div class="text-center" style="font-style:italic">
                <img src="/img/lesson2/57.png" width="80%" />
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
              <p style="text-indent: 5em;">2)	การแทรกข้อมูลทั้ง Row หรือ แถว</p>
              <p style="text-indent: 6em;">2.1) คลิกเลือก Row หรือแถว ที่ต้องการแทรกข้อมูล </p>
              <p style="text-indent: 6em;">2.2) คลิกเมาส์ขวา เลือกคำสั่ง Insert หรือ แทรก  </p>
              <p style="text-indent: 6em;">2.3) ข้อมูลของแถวที่ถูกเลือกจะเลื่อนมาอยู่แถวด้านล่าง </p>
               <div class="text-center" style="font-style:italic">
                <img src="/img/lesson2/63.png" width="60%" />
                <p>
                  <br />รูปที่ 63 ผลการแทรกข้อมูลทั้งแถว
                </p>
              </div>
              <br>
              <p style="text-indent: 5em;">3)	การแทรกข้อมูลทั้ง Column หรือ คอลัมน์</p>
              <p style="text-indent: 6em;">3.1) คลิกเลือก Column หรือ คอลัมน์ ที่ต้องการแทรกข้อมูล </p>
              <p style="text-indent: 6em;">3.2) คลิกเมาส์ขวา เลือกคำสั่ง Insert หรือ แทรก </p>
              <p style="text-indent: 6em;">3.3) ข้อมูลของคอลัมน์ที่ถูกเลือกจะเลื่อนมาอยู่ด้านขวาของคอลัมน์ที่ถูกเลือก </p>
               <div class="text-center" style="font-style:italic">
                <img src="/img/lesson2/64.png" width="60%" />
                <p>
                  <br />รูปที่ 64 ผลการแทรกข้อมูลทั้งคมลัมน์
                </p>
              </div>
              <br>
              <h5 style="text-indent: 2.5em;">8.5 การลบข้อมูล (Delete)</h5>
              <p style="text-indent: 5em;">1)	การลบข้อมูลใน Cell หรือ กลุ่ม Cell </p>
              <p style="text-indent: 6em;">1.1)	คลิกเลือก Cell หรือกลุ่ม Cell ที่ต้องการแทรกข้อมูล</p>
              <p style="text-indent: 6em;">1.2)	คลิกเมาส์ขวา เลือกคำสั่ง Delete หรือ ลบ</p>
              <p style="text-indent: 7.5em;">เลือกวิธีการจัดการกับข้อมูลใน Cell หรือกลุ่ม Cell ที่อยู่ในข้อ 1.1 โดยเลือกได้ 4 กรณี</p>
              <p style="text-indent: 8em;">O เลื่อนเซลล์ไปทางซ้าย	ข้อมูลเดิมจะเลื่อนไปยัง Cell ถัดไปที่อยู่ด้านซ้ายมือ </p>
              <p style="text-indent: 8em;">O เลื่อนเซลล์ขึ้น 	   	ข้อมูลเดิมจะเลื่อนไปอยู่ด้านบนของ Cell เดิม </p>
              <p style="text-indent: 8em;">O ทั้งแถว 			ข้อมูลเดิมทั้งแถวจะถูกลบ </p>
              <p style="text-indent: 8em;">O ทั้งคอลัมน์ 			ข้อมูลเดิมทั้งคอลัมน์จะถูกลบ </p>
               <div class="text-center" style="font-style:italic">
                <img src="/img/lesson2/65.png" width="40%" />
                <p>
                  <br />รูปที่ 65 เลือกวิธีการจัดการกับข้อมูลใน Cell หรือกลุ่ม Cell 
                </p>
              </div>
              <br>
              <p style="text-indent: 5em;">2)	การลบข้อมูลทั้ง Row หรือ แถว</p>
              <p style="text-indent: 6em;">2.1) คลิกเลือก Row หรือแถว ที่ต้องการลบข้อมูล </p>
              <p style="text-indent: 6em;">2.2) คลิกเมาส์ขวา เลือกคำสั่ง Delete หรือ ลบ </p>
              <p style="text-indent: 6em;">2.3) ข้อมูลของแถวที่ถูกเลือกจะถูกลบทันที  </p>
              <div class="text-center" style="font-style:italic">
                <img src="/img/lesson2/66.png" width="80%" />
                <p>
                  <br />รูปที่ 66  การเลือกแถวและการลบข้อมูลทั้งแถว
                </p>
              </div>
              <br>
              <p style="text-indent: 5em;">3)  การลบข้อมูลทั้ง Column หรือ คอลัมน์</p>
              <p style="text-indent: 6em;">3.1) คลิกเลือก Column หรือ คอลัมน์ ที่ต้องการลบข้อมูล </p>
              <p style="text-indent: 6em;">3.2) คลิกเมาส์ขวา เลือกคำสั่ง Delete หรือ ลบ</p>
              <p style="text-indent: 6em;">3.3) ข้อมูลของคอลัมน์แถวที่ถูกเลือกจะถูกลบทันที </p>
               <div class="text-center" style="font-style:italic">
                <img src="/img/lesson2/67.png" width="80%" />
                <p>
                  <br />รูปที่ 67 การเลือกคอลัมน์ลาการลบข้อมูลทั้งคอลัมน์
                </p>
              </div>
              <br>
              <p style="text-indent: 5em;">4)  การลบข้อมูลแผ่นงาน (Sheet)</p>
              <p style="text-indent: 6em;">4.1) คลิกเลือกแผ่นงานที่ต้องการลบ  </p>
              <p style="text-indent: 6em;">4.2) คลิกเมาส์ขวาในชื่อแผ่นงานที่เลือก เลือกคำสั่ง Delete </p>
              <p style="text-indent: 6em;">4.3) แผ่นงานที่ถูกเลือกจะถูกลบออกจากสมุดงาน</p>
               <div class="text-center" style="font-style:italic">
                <img src="/img/lesson2/68.png" width="80%" />
                <p>
                  <br />รูปที่ 68 แสดงการลบสมุดงาน (Sheet)
                </p>
              </div>
              <br>
              <p style="text-indent: 5em;">5)	การลบข้อมูลในสมุดงาน (Workbook)</p>
              <p style="text-indent: 6em;">5.1) คลิกเลือกจุดตัดระหว่างแถวและคอลัมน์ ให้เกิดแถบสีแสดงการเลือกทั้งหมด  </p>
              <p style="text-indent: 6em;">5.2) คลิกเมาส์ขวา เลือกคำสั่ง Delete หรือ กดปุ่ม Delete ที่คีย์บอร์ด </p>
               <div class="text-center" style="font-style:italic">
                <img src="/img/lesson2/69.png" width="40%" />
                <p>
                  <br />รูปที่ 69 การเลือกสมุดงาน (จุดตัดกันระหว่างคอลัมน์และแถว)
                </p>
              </div>
              <br>
               <div class="text-center" style="font-style:italic">
                <img src="/img/lesson2/70.png" width="80%" />
                <p>
                  <br />รูปที่ 70 การเลือกข้อมูลทั้งสมุดงาน
                </p>
              </div>
              <br>
              <h5 style="text-indent: 2.5em;">8.6 การลบข้อมูล (Delete)</h5>
              <p style="text-indent: 5em;">1) นำเมาส์ชี้ที่รอยต่อระหว่างชื่อคอลัมน์ ให้ปรากฏเครื่องหมายลูกศร</p>
              <p style="text-indent: 5em;">2) กดปุ่มเมาส์ค้างไว้และลากขยายความกว้างคอลัมน์ตามต้องการ</p>
               <div class="text-center" style="font-style:italic">
                <img src="/img/lesson2/71.png" width="80%" />
                <p>
                  <br />รูปที่ 71 การเลือกตำแหน่งคอลัมน์เพื่อขยายความกว้างคอลัมน์
                </p>
              </div>
              <br>
               <div class="text-center" style="font-style:italic">
                <img src="/img/lesson2/72.png" width="80%" />
                <p>
                  <br />รูปที่ 72 ตัวอย่างผลการขยายความกว้างคอลัมน์
                </p>
              </div>
              <br>
              <h5 style="text-indent: 2.5em;">8.7 การปรับความกว้างของแถว</h5>
               <p style="text-indent: 5em;">1) นำเมาส์ชี้ที่รอยต่อระหว่างชื่อคอลัมน์ ให้ปรากฏเครื่องหมายลูกศร</p>
              <p style="text-indent: 5em;">2) กดปุ่มเมาส์ค้างไว้และลากขยายความกว้างคอลัมน์ตามต้องการ</p>
              <div class="text-center" style="font-style:italic">
                <img src="/img/lesson2/73.png" width="80%" />
                <p>
                  <br />รูปที่ 73 การเลือกตำแหน่งคอลัมน์เพื่อขยายความกว้างแถว
                </p>
              </div>
              <br>
               <div class="text-center" style="font-style:italic">
                <img src="/img/lesson2/74.png" width="80%" />
                <p>
                  <br />รูปที่ 74 ตัวอย่างผลการขยายความกว้างแถว
                </p>
              </div>
              <br>
              <h4>9.	การตกแต่งสมุดงาน </h4>
              <p style="text-indent: 2.5em;">เมื่อป้อนข้อมูลในสมุดงาน การปรับแต่งให้ข้อมูลมีรูปแบบที่เหมาะสม จะช่วยให้ง่ายต่อการแสดงข้อมูล หรือไปใช้งานได้ง่ายยิ่งขึ้น โดยทั่วไปการตกแต่งสมุดงานจะนำวัตถุ 
                เช่น รูปภาพ รูปร่างอัตโนมัติ ตาราง การเปลี่ยนรูปแบบสีตัวหนังสือ รูปแบบพื้นหลัง เข้ามาช่วยจัดรูปแบบ ขั้นตอนการตกแต่งสมุดงาน ดังนี้</p>
                <h5 style="text-indent: 2.5em;"> 9.1	การกำหนดรูปแบบการแสดงผลข้อมูล</h5>
                <p style="text-indent: 5em;"> โดยปกติรูปแบบ ขนาด ลักษณะตัวอักษร จะปรากฏในหน้าแรกของโปรแกรม Excel </p>
                <div class="text-center" style="font-style:italic">
                <img src="/img/lesson2/75.png" width="80%" />
                <p>
                  <br />รูปที่ 75 หน้าแรกของโปรแกรม Excel ที่แสดงแถบเครื่องมือในการกำหนดการแสดงผลข้อมูล 
                </p>
              </div>
              <br>
              <p style="text-indent: 2.5em;">จากรูปที่ 75 การกำหนดรูปแบบที่สำคัญได้แก่</p>
              <p style="text-indent: 5em;">1) เลือก Cell หรือ กลุ่ม Cell ที่ต้องการจัดรูปแบบ </p>
              <p style="text-indent: 5em;">2) คลิกที่เครื่องหมายชี้ลง</p>
              <p style="text-indent: 5em;">3) จะปรากฏแถบเครื่องมือ การจัดรูปแบบเซลล์ ดังรูปที่ 76</p>
               <div class="text-center" style="font-style:italic">
                <img src="/img/lesson2/76.png" width="80%" />
                <p>
                  <br />รูปที่ 76 การจัดรูปแบบเซลล์ 
                </p>
              </div>
              <br>
              <p style="text-indent: 2.5em;">จากรูปที่ 76 ประกอบด้วยแถบคำสั่งย่อย ได้แก่</p>
              <p style="text-indent: 5em;">•	ตัวเลข เป็นเครื่องมือในการจัดรูปแบบเซลล์ของข้อมูลที่เป็นตัวเลข โดยผู้ใช้งานสามารถเลือกรูปแบบที่ต้องการ 
                ได้เช่น ทั่วไป ตัวเลข สกุลเงิน บัญชี วันที่ เวลา เป็นต้น</p>
               <div class="text-center" style="font-style:italic">
                <img src="/img/lesson2/77.png" width="60%" />
                <p>
                  <br />รูปที่ 77 การจัดรูปแบบเซลล์-ตัวเลข
                </p>
              </div>
              <br>
              <p style="text-indent: 5em;">•	การจัดแนว เป็นกลุ่มคำสั่งจัดแนวข้อความ ได้แก่ แนวนอน แนวตั้ง การตัดข้อความ 
                ย่อให้พอดี การผสานเซลล์ เป็นต้น </p>
                <div class="text-center" style="font-style:italic">
                <img src="/img/lesson2/78.png" width="60%" />
                <p>
                  <br />รูปที่ 78 การจัดรูปแบบเซลล์-การจัดแนว
                </p>
              </div>
              <br>
              <p style="text-indent: 5em;">•	ฟอนต์ เป็นกลุ่มคำสั่งจัดการฟอนต์ (รูปแบบ) ตัวอักษร สไตล์ตัวอักษร ขนาด การขีดเส้น 
                สีตัวอักษร โดยจะปรากฏตัวอย่างของคำสั่งที่เลือกให้ผู้ใช้งาน </p>
                <div class="text-center" style="font-style:italic">
                <img src="/img/lesson2/79.png" width="60%" />
                <p>
                  <br />รูปที่ 79 การจัดรูปแบบเซลล์-การจัดแนว
                </p>
              </div>
              <br>
              <p style="text-indent: 5em;">•	เส้นขอบ เป็นกลุ่มคำสั่งจัดรูปแบบเส้นขอบ</p>
                <div class="text-center" style="font-style:italic">
                <img src="/img/lesson2/80.png" width="60%" />
                <p>
                  <br />รูปที่ 80 การจัดรูปแบบเส้นขอบตาราง
                </p>
              </div>
              <br>
              <h5 style="text-indent: 2.5em;">9.3	การแทรก SmartArt , Shapes</h5>
              <p style="text-indent: 5em;"> สมุดงานสามารถแทรกรูปภาพ  เช่น รูปถ่าย รูปภาพที่อยู่เว็บไซต์ เป็นต้น เข้ามาในสมุดขั้นตอนดังนี้</p>
              <p style="text-indent: 5em;"> 1)	คลิกรายการคำสั่ง Insert (แทรก)</p>
              <p style="text-indent: 5em;"> 2)	เลือกคำสั่งย่อย Picture (รูปภาพ)</p>
              <p style="text-indent: 5em;"> 3)	เลือก Drive หรือ folder ที่เก็บรูปภาพที่ต้องการนำมาแทรก</p>
              <p style="text-indent: 5em;"> 4)	คลิกเลือกชื่อไฟล์รูปภาพที่ต้องการนำมาแทรกในสมุดงาน</p>
              <p style="text-indent: 5em;"> 5)	คลิกปุ่ม Insert (แทรก)</p>
              <p style="text-indent: 5em;"> 6)	รูปภาพจะปรากฏในสมุดงาน ตัวอย่างดังรูปที่ 81</p>
               <div class="text-center" style="font-style:italic">
                <img src="/img/lesson2/81.png" width="60%" />
                <p>
                  <br />รูปที่ 80 การจัดรูปแบบเส้นขอบตาราง
                </p>
              </div>
              <br>
              <p style="text-indent: 5em;"> หากต้องการตกแต่งรูปภาพให้กดเลือกรูปภาพ และกด double click 
                จะปรากฏเครื่องหมายการเลือก จะปรากฏแถบเครื่องมือในการตกแต่งรูปภาพ ดังรูปที่ 82 </p>
                 <div class="text-center" style="font-style:italic">
                <img src="/img/lesson2/82.png" width="80%" />
                <p>
                  <br />รูปที่ 82 แถบเครื่องมือสำหรับตกแต่งรูปภาพบนสมุดงาน
                </p>
              </div>
              <br>
              <h5 style="text-indent: 2.5em;">9.3	การแทรก SmartArt , Shapes</h5>
               <div class="text-center" style="font-style:italic">
                <img src="/img/lesson2/83.png" width="60%" />
                <p>
                  <br />รูปที่ 83 ตัวอย่าง Smart Art
                </p>
              </div>
              <br>
               <div class="text-center" style="font-style:italic">
                <img src="/img/lesson2/84.png" width="60%" />
                <p>
                  <br />รูปที่ 84 ตัวอย่าง Shapes
                </p>
              </div>
              <br>
              <p style="text-indent: 2.5em;">SmartArt และ Shapes เป็นเครื่องมือที่ช่วยให้การนำเสนอข้อมูลมีความน่าสนใจ 
                ขั้นตอนการใช้งาน ดังนี้</p>
                 <p style="text-indent: 5em;">1) คลิกรายการคำสั่ง Insert (แทรก)</p>
                 <p style="text-indent: 5em;">2) เลือกคำสั่งย่อย SmartArt หรือ Shapes </p>
                 <p style="text-indent: 5em;">3) คลิกเลือกรูปแบบที่ต้องการนำมาแทรกในสมุดงาน</p>
                 <p style="text-indent: 5em;">4) ทำตามขั้นตอนที่แต่ละรูปแบบกำหนด เช่น คลิกเมาส์และวาดขนาดตามที่ต้องการ หรือกดปุ่ม ok </p><br>
                <h5 style="text-indent: 2.5em;">9.4	การใส่เส้นตารางและการแรเงาพื้นหลังตาราง</h5>
                <p style="text-indent: 5em;">การใช้เส้นตารางและการแรเงาพื้นหลังตารางจะช่วยดูข้อมูลได้ง่ายและสะดวก 
                  ขั้นตอนการใส่เส้นตารางและการแรเงาพื้นหลังตาราง ดังนี้ </p>
                  <p style="text-indent: 5em;">1) เลือกเซลล์ หรือกลุ่มเซลล์ข้อมูลที่ต้องการใส่เส้นตาราง </p>
                  <p style="text-indent: 5em;">2) คลิกเลือกแถบเครื่องมือการใส่เส้นตาราง </p>
                  <p style="text-indent: 5em;">3) คลิกเลือกรูปแบบเส้นตารางที่ต้องการนำมาใส่ในตาราง ดังรูปที่ 85</p>
                  <div class="text-center" style="font-style:italic">
                <img src="/img/lesson2/85.png" width="30%" />
                <p>
                  <br />รูปที่ 85 รูปแบบเส้นตาราง
                </p>
              </div>
              <br>
               <p style="text-indent: 2.5em;">การแรเงาช่องในตาราง </p>
               <p style="text-indent: 5em;">1) คลิกเลือกเซลล์ หรือกลุ่มเซลล์</p>
               <p style="text-indent: 5em;">2) คลิกที่ลูกศรหลังกแถบเครื่องมือ(การแรเงา) </p>
               <p style="text-indent: 5em;">3) คลิกเลือกสีที่ต้องการแรเงา และสีตัวอักษรในตารางที่ต้องการ </p>
               <div class="text-center" style="font-style:italic">
                <img src="/img/lesson2/86.png" width="60%" />
                <p>
                  <br />รูปที่ 86 ตัวอย่างข้อมูลที่ยังไม่ใส่เส้นตารางและการแรเงา
                </p>
              </div>
              <br>
               <div class="text-center" style="font-style:italic">
                <img src="/img/lesson2/87.png" width="60%" />
                <p>
                  <br />รูปที่ 87 ตัวอย่างข้อมูลที่ใส่เส้นตารางและการแรเงา
                </p>
              </div>
              
              <br />
              <br />
              <br />
              <br />

                  


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