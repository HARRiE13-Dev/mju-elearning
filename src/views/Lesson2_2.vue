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
              <h5>3.2 แถบสูตร (Formulas Bar)</h5>
              <p
                style="text-indent: 2.5em;"
              >เป็นส่วนที่ผู้ใช้งานใช้กรอกสูตรเพื่อคำนวณหรือวิเคราะห์ข้อมูล แบ่งสูตรเป็น 2 ประเภท ได้แก่</p>
              <p style="text-indent: 2.5em;">3.2.1) สูตรที่ผู้ใช้งานคิดสูตรและกรอกด้วยตนเอง</p>
              <p
                style="text-indent: 2.5em;"
              >3.2.2) สูตรสำเร็จ (function) เพื่อคำนวณ หรือวิเคราะห์ผลข้อมูล</p>
              <br />
              <div class="text-center" style="font-style:italic">
                <img src="/img/lesson2/p31.png" width="60%" />
                <p>
                  <br />รูปที่ 31 แถบสูตร (Formulas Bar)
                </p>
              </div>
              <br />
              <h5>3.3 สมุดงาน (Workbook) และแผ่นงาน (Sheet)</h5>
              <p
                style="text-indent: 2.5em;"
              >โปรแกรม Excel กำหนดพื้นที่กรอกข้อมูลเรียกว่า สมุดงาน (Workbook) ซึ่งแบ่งพื้นที่เป็นส่วน ดังนี้</p>
              <p style="text-indent: 2.5em;">3.3.1 คอลัมน์ (Column)</p>
              <p style="text-indent: 5em;">- เป็นการแบ่งพื้นที่ทำงานในแนวตั้ง</p>
              <p style="text-indent: 5em;">- จำนวน 16,384 คอลัมน์</p>
              <p style="text-indent: 5em;">- มีชื่อคอลัมน์ ตั้งแต่ A, B, C, D, …, XFD</p>
              <p style="text-indent: 2.5em;">3.3.2 แถว (Row)</p>
              <p style="text-indent: 5em;">- เป็นการแบ่งพื้นที่ทำงานในแนวนอน</p>
              <p style="text-indent: 5em;">- จำนวน 1,048,576 แถว</p>
              <p style="text-indent: 5em;">- มีชื่อแถว ตั้งแต่แถวที่ 1, 2, 3, 4, ..., 1048576</p>
              <p style="text-indent: 2.5em;">3.3.2 แถว (Row)</p>
              <p style="text-indent: 5em;">- จุดตัดกันระหว่าง Column และ Row</p>
              <p style="text-indent: 5em;">- เป็นช่องตารางสี่เหลี่ยม ที่ใช้ในการกรอกข้อมูล</p>
              <p style="text-indent: 5em;">- เซลล์ที่กำลังใช้งาน เรียกว่า Active Cell</p>
              <p
                style="text-indent: 5em;"
              >- สามารถป้อนข้อมูลที่เป็นข้อความ ตัวเลข ฯลฯ ลงบน Cell ที่ต้องการ</p>
              <p
                style="text-indent: 5em;"
              >- ทุกเซลล์ มีชื่อตำแหน่ง เรียกว่า ตำแหน่งเซลล์ คือ ชื่อ Column และ ชื่อ Row เช่น</p>
              <p style="text-indent: 7.5em;">A5 หมายถึง คอลัมน์ A แถวที่ 5</p>
              <p style="text-indent: 7.5em;">B108 หมายถึง คอลัมน์ B แถวที่ 108</p>
              <p style="text-indent: 7.5em;">G10 หมายถึง คอลัมน์ G แถวที่ 10</p>
              <p style="text-indent: 2.5em;">3.3.4 ตัวชี้เซลล์ (Cell Pointer)</p>
              <p
                style="text-indent: 5em;"
              >- เป็นตัวชี้เซลล์ที่กำลังถูกใช้งานอยู่ในขณะนั้น (Active Cell)</p>
              <p
                style="text-indent: 5em;"
              >- เซลล์ที่เป็น Active Cell จะมีเส้นกรอบสีเข้มล้อมรอบ ดังรูปที่ 32</p>
              <div class="text-center" style="font-style:italic">
                <img src="/img/lesson2/p32.png" width="40%" />
                <p>
                  <br />รูปที่ 32 สมุดงาน (Workbook) ที่มี Active Cell ตำแหน่ง A1
                </p>
              </div>
              <br />
              <p style="text-indent: 2.5em;">
                3.3.4 สมุดงาน (Workbook) คือ ไฟล์งานหลักของโปรแกรม Excel
                สามารถบันทึกเป็นไฟล์งานเพื่อนำมาเพิ่มเติมหรือแก้ไขข้อมูลครั้งต่อไป
              </p>

              <p style="text-indent: 2.5em;">
                3.3.5 แผ่นงาน (Sheet) คือ แผ่นงานที่เป็นหน้ากระดาษแต่ละหน้าของสมุดงาน
                เป็นพื้นที่สำหรับการทำงานที่สามารถกรอกข้อมูล โดย
              </p>
              <p
                style="text-indent: 5em;"
              >- สมุดงาน (Workbook) จะมีแผ่นงาน (Sheet) เปิดไว้อย่างน้อย 3 แผ่น</p>
              <p style="text-indent: 5em;">- สามารถเพิ่มจำนวนแผ่นงานได้ตามต้องการ โดยการคลิกที่ปุ่ม</p>
              <p
                style="text-indent: 5em;"
              >- ชื่อแผ่นงาน (Sheet) สามารถเปลี่ยนได้โดยดับเบิลคลิกและแก้ไขเป็นชื่อแผ่นงานใหม่</p>
              <div class="text-center" style="font-style:italic">
                <img src="/img/lesson2/p33.png" width="80%" />
                <p>
                  <br />รูปที่ 33 ตัวอย่างการเปลี่ยนชื่อแผ่นงาน (Sheet)
                </p>
              </div>
              <br />
              <h4>4. การทำงานของเซลล์ (Cell)</h4>
              <p style="text-indent: 2.5em;">
                Cell หรือ เซลล์ คือ จุดตัดกันระหว่างคอลัมน์และแถว หรือ “ช่องตาราง” ทุกช่องตารางมีตำแหน่งที่ใช้เรียกเซลล์ โดยเรียก ชื่อ Column และ ชื่อ Row เช่น A5 (คอลัมน์ A แถวที่ 5) B108 (คอลัมน์ B แถวที่ 108)
                G10 (คอลัมน์ G แถวที่ 10) เซลล์เป็นบริเวณที่สามารถกรอกข้อมูลจากคีย์บอร์ด วิธีการป้อนข้อมูลมีขั้นตอนตอน ดังนี้
              </p>
              <h5 style="text-indent: 2.5em;">4.1 เลือกตำแหน่งเซลล์ที่ต้องการป้อนข้อมูล</h5>
              <p style="text-indent: 2.5em;">
                เมื่อต้องการกรอกข้อมูลลงบนเซลล์ใด ๆ ต้องเลือกเซลล์ก่อนเสมอ
                วิธีการเลือกเซลล์ 3 วิธี ได้แก่
              </p>
              <p
                style="text-indent: 5em;"
              >4.1.1 เลือกเซลล์โดยใช้เมาส์คลิกเลือกตำแหน่งเซลล์ที่ต้องการ</p>
              <div class="text-center" style="font-style:italic">
                <img src="/img/lesson2/p34.png" width="40%" />
                <p>
                  <br />รูปที่ 34 ตัวอย่างการคลิกเมาส์เลือกเซลล์ B3
                </p>
              </div>
              <br />
              <p
                style="text-indent: 5em;"
              >4.1.2 เลือกเซลล์โดยใช้ปุ่มลูกศรจากคีย์บอร์ดเพื่อเลื่อน Cell Pointer ไปยังเซลล์ที่ต้องการ</p>
              <div class="text-center" style="font-style:italic">
                <img src="/img/lesson2/p35.png" width="40%" />
                <p>
                  <br />รูปที่ 35 ปุ่มลูกศรบนคีย์บอร์ด
                </p>
              </div>
              <br />
              <p style="text-indent: 5em;">
                4.1.3 เลือกเซลล์โดยใช้คำสั่ง Go To (หรือ ปุ่ม F5) และพิมพ์ตำแหน่งเซลล์ที่ต้องการ เช่น AA200 หมายถึง
                เลื่อน Cell Pointer ไปยัง คอลัมน์ AA แถวที่ 200 เป็นต้น
              </p>
              <p
                style="text-indent: 5em;"
              >4.1.2 เลือกเซลล์โดยใช้ปุ่มลูกศรจากคีย์บอร์ดเพื่อเลื่อน Cell Pointer ไปยังเซลล์ที่ต้องการ</p>
              <div class="text-center" style="font-style:italic">
                <img src="/img/lesson2/p36.png" width="40%" />
                <p>
                  <br />รูปที่ 36 การเลือกเซลล์โดยการใช้คำสั่ง Go To หรือกดปุ่ม F5
                </p>
              </div>
              <br />
              <h4>5. การป้อนข้อมูลบนสมุดงาน</h4>
              <p style="text-indent: 2.5em;">
                เมื่อเริ่มต้นใช้งานโปรแกรม Excel ผู้ใช้งานทำการป้อนข้อมูลลงบนสมุดงาน และปรับรูปแบบ ลักษณะ ของข้อมูลให้เหมาะสม
                สะดวกและง่ายต่อการใช้งานโดยมีหลักการ ดังนี้
              </p>
              <h5 style="text-indent: 2.5em;">5.1 การป้อนข้อมูล</h5>
              <p style="text-indent: 5em;">5.1.1 เลือกเซลล์ที่ต้องการป้อนข้อมูล (ดังได้กล่าว ข้อ 4)</p>
              <p
                style="text-indent: 5em;"
              >5.1.2 พิมพ์ข้อความ หรือตัวอักษร หรือตัวเลข และกดปุ่ม Enter</p>
              <div class="text-center" style="font-style:italic">
                <img src="/img/lesson2/p37.png" width="40%" />
                <p>
                  <br />รูปที่ 37 การป้อนข้อมูลบนเซลล์
                </p>
              </div>
              <br />
              <h5 style="text-indent: 2.5em;">5.2 การจัดตำแหน่งของข้อมูลในเซลล์</h5>
              <p
                style="text-indent: 5em;"
              >การจัดตำแหน่งของข้อความบนเซลล์ สามารถใช้แถบเครื่องมือ ดังรูปที่ 38</p>
              <div class="text-center" style="font-style:italic">
                <img src="/img/lesson2/p38.png" width="40%" />
                <p>
                  <br />รูปที่ 38 แถบเครื่องมือจัดตำแหน่งข้อมูลบนเซลล์
                </p>
              </div>
              <br />
              <h5 style="text-indent: 2.5em;">5.3 การแก้ไขข้อมูลบนเซลล์</h5>
              <p style="text-indent: 5em;">5.3.1 เลื่อน Cell Point ไปยังเซลล์ที่ต้องการแก้ไขข้อมูล</p>
              <p style="text-indent: 5em;">5.3.2 กดเมาส์ double click หรือ กดปุ่ม F2</p>
              <p
                style="text-indent: 5em;"
              >5.3.3 พิมพ์ข้อความใหม่ และกด Enter หรือเลื่อนเมาส์ไปยังเซลล์อื่น</p>
              <h5 style="text-indent: 2.5em;">5.4 การป้อนข้อมูลที่ซ้ำกัน (AutoComplete)</h5>
              <p style="text-indent: 5em;">
                ข้อมูลบางลักษณะมีการป้อนซ้ำๆ กัน สามารถใช้ฟังก์ชั่น AutoComplete ที่โปรแกรม Excel
                เตรียมไว้ หรือเลือกจากรายการที่ปรากฏ ซึ่งจะช่วยป้อนข้อมูลให้โดยอัตโนมัติ เมื่อเทียบจากข้อมูลเดิมที่เคยป้อนมาก่อนแล้ว ทำให้ป้อนข้อมูลได้อย่างรวดเร็ว
              </p>
              <p
                style="text-indent: 5em;"
              >5.4.1 พิมพ์ข้อมูลที่เคยป้อน และต้องการข้อมูลนั้นปรากฏขึ้นมา ให้กด Enter เพื่อยอมรับ</p>
              <p
                style="text-indent: 5em;"
              >5.4.2 หากต้องการพิมพ์คำอื่นแทน เช่น วิชา ให้พิมพ์คำใหม่ที่ต้องการ และกด Enter</p>
              <div class="text-center" style="font-style:italic">
                <img src="/img/lesson2/p39.png" width="40%" />
                <p>
                  <br />รูปที่ 39 ตัวอย่างการป้อนข้อมูล แบบ AutoComplete
                </p>
              </div>
              <br />
              <h5 style="text-indent: 2.5em;">5.5 การป้อนข้อมูล Auto fill Options</h5>
              <p style="text-indent: 5em;">
                ข้อมูลที่สามารถป้อนโดยใช้คำสั่ง Auto fill Options คือ ข้อมูลที่มีการจัดเป็นรูปแบบไว้ก่อนหน้า
                โดยผู้ใช้งานต้องป้อนข้อมูลอย่างน้อย 2 ชุดที่ต่อเนื่อง จากนั้นใช้คำสั่ง Auto fill Options ตัวอย่างข้อมูลเช่น ลำดับเลข เดือน เป็นต้น
              </p>
              <div class="text-center" style="font-style:italic">
                <img src="/img/lesson2/p40.png" width="40%" />
                <p>
                  <br />รูปที่ 40 การป้อนข้อมูลโดยใช้คำสั่ง Auto fill Options
                </p>
              </div>
              <br />
              <h5 style="text-indent: 2.5em;">5.6 ประเภทข้อมูลที่ป้อนลงโปรแกรม Excel</h5>
              <p
                style="text-indent: 5em;"
              >ข้อมูลที่สามารถป้อนบนสมุดงาน หรือแผ่นงาน แบ่งเป็น 5 ประเภท ได้แก่</p>
              <p style="text-indent: 7.5em;">5.5.1 ข้อมูลชนิดตัวอักษร (Text)</p>
              <p style="text-indent: 7.5em;">5.5.2 ข้อมูลชนิดตัวเลข (Number)</p>
              <p style="text-indent: 7.5em;">5.5.3 ข้อมูลสูตร (Formulas)</p>
              <p style="text-indent: 7.5em;">5.5.4 ข้อมูลชนิดวันที่ (Date)</p>
              <p style="text-indent: 7.5em;">5.5.5 ข้อมูลชนิดเวลา (Time)</p>
              <div class="text-center" style="font-style:italic">
                <img src="/img/lesson2/p41.png" width="60%" />
                <p>
                  <br />รูปที่ 41 ตัวอย่างข้อมูลที่ป้อนในสมุดงาน ชนิดข้อความ ตัวเลข วันที่ และเวลา
                </p>
              </div>
              <br />
              <h4>6. การบันทึกข้อมูล</h4>
              <p style="text-indent: 2.5em;">
                เมื่อผู้ใช้งานป้อนข้อมูลลงบนแผ่นงานเสร็จเรียบร้อยแล้ว ต้องทำการบันทึกข้อมูลไว้ในรูปแบบของไฟล์ข้อมูล เพื่อให้สามารถนำมาใช้งานได้ในครั้งต่อไป
                หรือเพื่อป้องการข้อมูลสูญหายระหว่างการทำงาน เช่น ไฟฟ้าดับ โปรแกรมหยุดการทำงาน เป็นต้น ขั้นตอนการบันทึกข้อมูล ดังนี้
              </p>
              <p style="text-indent: 2.5em;">6.1 คลิกแถบรายการคำสั่ง</p>
              <p style="text-indent: 2.5em;">6.2 คลิกเลือก คำสั่ง File</p>
              <p style="text-indent: 2.5em;">6.3 คลิกเลือกคำสั่ง Save</p>
              <p style="text-indent: 2.5em;">6.4 เลือกที่เก็บข้อมูล เช่น Drive E หรือ Folder</p>
              <p style="text-indent: 2.5em;">6.5 ตั้งชื่อไฟล์ข้อมูล เช่น เงินเดือนพนักงาน เป็นต้น</p>
              <p
                style="text-indent: 2.5em;"
              >6.6 เลือกชนิดของไฟล์ข้อมูลที่ต้องการบันทึก ซึ่งโดยปกติ Excel จะเลือกเป็น Excel Workbook</p>
              <p style="text-indent: 2.5em;">6.7 คลิกที่ปุ่ม Save หรือ บันทึก</p>
              <br />

              <h5 style="text-indent: 2.5em;">หมายเหตุ</h5>
              <p style="text-indent: 5em;">
                - คำสั่ง Save as หมายถึง หยุดถามผู้ใช้งานทุกครั้งก่อนการบันทึก ควรใช้ในกรณีต้องการตั้งชื่อไฟล์ใหม่ ที่เก็บไฟล์แห่งใหม่
                เป็นต้น
              </p>
              <p style="text-indent: 5em;">- ไฟล์ข้อมูลโปรแกรม Excel จะปรากฏนามสกุล .XLS หรือ .XLSX</p>
              <p
                style="text-indent: 5em;"
              >- ข้อมูลที่อยู่ในไฟล์เป็นข้อมูลที่ปรากฏในสมุดงานในเวลาที่ใช้คำสั่ง Save ครั้งล่าสุด</p>
              <div class="text-center" style="font-style:italic">
                <img src="/img/lesson2/p42.png" width="80%" />
                <p>
                  <br />รูปที่ 42 หน้าจอการบันทึกข้อมูลของโปรแกรม Excel
                </p>
              </div>
              <br />
              <div class="text-center" style="font-style:italic">
                <img src="/img/lesson2/p43.png" width="40%" />
                <p>
                  <br />รูปที่ 43 รูปแบบและสัญลักษณ์ของไฟล์ข้อมูล Excel
                </p>
              </div>
              <br />
              <div class="text-center" style="font-style:italic">
                <img src="/img/lesson2/p44.png" width="80%" />
                <p>
                  <br />รูปที่ 44 ไฟล์ข้อมูล Excel ในมุมมองแบบแสดงรายละเอียด (Detail)
                </p>
              </div>
              <br />
              <p style="text-indent: 5em;">
                จากรูปที่ 44 ไฟล์ข้อมูลจะปรากฏสัญลักษณ์โปรแกรม Excel ชื่อไฟล์
                วันที่ เวลาบันทึก ชนิดไฟล์ และขนาดของไฟล์
              </p>
              <h4>7. การเปิดใช้งานไฟล์ข้อมูล</h4>
              <p
                style="text-indent: 2.5em;"
              >ไฟล์ Excel ที่ถูกบันทึก ผู้ใช้งานสามารถเปิดไฟล์เพื่อใช้งานโดยมีขั้นตอน ดังนี้</p>
              <p style="text-indent: 2.5em;">7.1 ไปที่แถบรายการคำสั่ง</p>
              <p style="text-indent: 2.5em;">7.2 คลิกเลือก คำสั่ง Open</p>
              <p
                style="text-indent: 2.5em;"
              >7.3 เลือก Drive หรือ folder ที่เคยใช้เป็นที่เก็บไฟล์ข้อมูล</p>
              <p style="text-indent: 2.5em;">7.4 คลิกเลือกไฟล์ที่ต้องการเปิด</p>
              <p style="text-indent: 2.5em;">7.5 คลิกที่ปุ่ม Open หรือ เปิด</p>
              <br>
              <div class="text-center" style="font-style:italic">
                <img src="/img/lesson2/p45.png" width="80%" />
                <p>
                  <br />รูปที่ 45 การเปิดไฟล์ข้อมูล Excel
                </p>
              </div>
              <br />
              <div class="text-center" style="font-style:italic">
                <img src="/img/lesson2/p46.png" width="80%" />
                <p>
                  <br />รูปที่ 46 ตัวอย่างข้อมูลที่ได้จากการเปิดไฟล์ Excel
                </p>
              </div>
              <br />
              <h4>8. การทำงานร่วมกับกลุ่ม Cell</h4>
              <p style="text-indent: 2.5em;">
                การใช้งานสมุดงานที่ประกอบด้วยข้อมูลจำนวนมาก วิธีการเลือกเซลล์ที่ถูกวิธีจะช่วยให้ทำงานได้รวดเร็วยิ่งขึ้น
                การทำงานร่วมกับกลุ่มเซลล์มีขั้นตอน ดังนี้
              </p>
              <h5 style="text-indent: 2.5em;">8.1 การเลือก Cell หรือกลุ่ม Cell</h5>
              <p style="text-indent: 5em;">1) เลือก Cell 1 Cell	- ใช้เมาส์คลิกเลือก Cell หรือใช้คีย์ลูกศรเลื่อนไป Cell ที่เลือก</p>
              <p style="text-indent: 5em;">2) เลือกทั้งแถว 		- ใช้เมาส์คลิกเลือกชื่อแถว </p>
              <p style="text-indent: 5em;">3) เลือกทั้งคอมลัมน์	- ใช้เมาส์คลิกเลือกชื่อคอลัมน์</p>
              <p style="text-indent: 5em;">4) เลือกกลุ่ม Cell ติดกัน	-ใช้เมาส์คลิก Cell เริ่มต้นและลากเลือก Cell ที่ต้องการ</p>
              <p style="text-indent: 5em;">5) การเลือกกลุ่ม Cell ไม่ติดกัน - กดปุ่ม Ctrl ที่คีย์บอร์ด และใช้เมาส์คลิกเลือก Cell ที่ต้องการ </p>
              <div class="text-center" style="font-style:italic">
                <img src="/img/lesson2/p47.png" width="80%" />
                <p>
                  <br />รูปที่ 47 การเลือก Cell 1 Cell ตำแหน่ง B2
                </p>
              </div>
              <br />
              <div class="text-center" style="font-style:italic">
                <img src="/img/lesson2/p48.png" width="80%" />
                <p>
                  <br />รูปที่ 48 การเลือกทั้งแถว-แถวที่ 5
                </p>
              </div>
              <br />
              <div class="text-center" style="font-style:italic">
                <img src="/img/lesson2/p49.png" width="80%" />
                <p>
                  <br />รูปที่ 49 การเลือกทั้งคอลัมน์-คอลัมน์ C
                </p>
              </div>
              <br />
              <div class="text-center" style="font-style:italic">
                <img src="/img/lesson2/p50.png" width="80%" />
                <p>
                  <br />รูปที่ 50 การเลือกกลุ่ม Cell ติดกัน-ตำแหน่ง B4:D5
                </p>
              </div>
              <br />
              <div class="text-center" style="font-style:italic">
                <img src="/img/lesson2/p51.png" width="80%" />
                <p>
                  <br />รูปที่ 51 การเลือกกลุ่ม Cell ไม่ติดกัน-ตำแหน่ง B4, B6, E4 และ E6
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
                    <router-link to="/lesson2_1" title="Lesson2_1 Page">
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