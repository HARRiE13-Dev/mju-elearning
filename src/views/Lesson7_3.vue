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
        <div class="container pb-80">
          <div class="row justify-content-center">
            <div class="fontx col-lg-10">
              <!-- -------------------------------- -->

              <h4>การระเหิด (Dye-sublimation printers)</h4>
              <p class="rem2 text-justify">
                เครื่องพิมพ์แบบระเหิด
                จะใช้หลักการระเหิดทำการหลอมหมึกที่เป็นของแข็งให้กลายเป็นไอด้วยความร้อน
                และส่งผ่านไอหมึกไปเกาะอยู่บนวัสดุพิมพ์เกิดเป็นภาพขึ้นมาหมึกที่ใช้ในการพิมพ์จะอยู่บนแผ่นริบบิ้น
                ขณะทำการพิมพ์ริบบิ้นนี้จะถูกนำไปทาบลงบนวันดุที่ต้องการพิมพ์และใช้ความร้อนช่วยในการส่งผ่านหมึกจากริบบิ้นลง
                ไปบนวัสดุที่ต้องการพิมพ์ทีละแม่สีจนครบทุกสี
                งานพิมพ์ที่ได้มีคุณภาพสูงเหมือนภาพถ่ายที่อัดมากจากห้องแลป
                เครื่องพิมพ์ระบบนี้เหมาะกับการพิมพ์ภาพมากกว่าพิมพ์ข้อความเอกสารที่เป็นตัวอักษรเพราะมีต้นทุนต่อแผ่นสูง
                ส่วนมากนิยมใช้เทคโนโลยีนี้ในการพิมพ์ภาพบนผ้าใบ
                หรือการพิมพ์ภาพบนบัตรพลาสติก เช่นบัตรพนักงาน เป็นต้น
              </p>
              <br />
              <div
                class="text-center font-italic col"
                @click="modals.modal1 = true"
              >
                <img src="/img/lesson7/17.png" width="70%" />
                <p>
                  <br />รูป 17 เครื่องพิมพ์บัตรพลาสติก (https://www.zebra.com)
                </p>
              </div>
              <modal :show.sync="modals.modal1">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูป 17 เครื่องพิมพ์บัตรพลาสติก (https://www.zebra.com)
                </h6>
                <img src="/img/lesson7/17.png" width="100%" />
              </modal>
              <br />
              <br />
              <div
                class="text-center font-italic col"
                @click="modals.modal2 = true"
              >
                <img src="/img/lesson7/18.png" width="70%" />
                <p>
                  <br />รูป 18 แผ่นริบบิ้นแม่สีที่ใช้ในการพิมพ์ภาพ (By The
                  original uploader was DMahalko at English Wikipedia. -
                  Transferred from en.wikipedia to Commons by Mr H.., CC BY-SA
                  2.5)
                </p>
              </div>
              <modal :show.sync="modals.modal2">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูป 18 แผ่นริบบิ้นแม่สีที่ใช้ในการพิมพ์ภาพ (By The original
                  uploader was DMahalko at English Wikipedia. - Transferred from
                  en.wikipedia to Commons by Mr H.., CC BY-SA 2.5)
                </h6>
                <img src="/img/lesson7/18.png" width="100%" />
              </modal>
              <br />
              <p class="rem2">
                เครื่องพิมพ์ชนิดนี้มีข้อจำกัดการพิมพ์อยู่ที่ขนาดของริบบิ้น
                หากวัสดุที่ต้องการพิมพ์มีขนาดใหญ่กว่าริบบิ้นแม่สี
                ก็จะไม่สามารถพิมพ์ได้
                เป็นเทคโนโลยีการพิมพ์ที่มีความสิ้นเปลืองสูง
                หากหมึกบนริบบิ้นถูกใช้ไปไม่หมด ก็จะต้องทิ้งไปเลย
                ไม่สามารถนำกลับมาใช้พิมพ์ใหม่ได้ ซึ่งส่วนมากจะใช้ไม่หมด
                ต้นทุนการพิมพ์ต่อแผ่นมีราคาสูง
                จึงเหมาะกับการพิมพ์ภาพถ่ายเท่านั้น
                ริบบิ้นที่ใช้งานแล้วจะไม่สามารถทิ้งลงถังขยะได้
                เนื่องจากจะมีภาพเนกาทีฟของภาพที่เคยถูกพิมพ์ค้างอยู่ในริบบิ้น
                ซึ่งสามารถใช้โปรแกรมประมวลภาพทำการกู้คืนภาพที่เคยถูกพิมพ์กลับออกมาได้
                หากภาพที่เคยถูกพิมพ์เป็นความลับขององค์กร ตัวอย่างเช่นบัตรพนักงาน
                หรือบัตรเข้าออกอาคาร ก็จะเป็นภัยต่อความมั่นคงได้
                ดังนั้นริบบิ้นที่ใช้เสร็จแล้วจะต้องมีการกำจัดด้วยการสับ
                หรือทำลายให้ไม่สามารถกู้ข้อมูลได้ก่อน จึงจะทิ้งได้
              </p>
              <br />
              <div
                class="text-center font-italic col"
                @click="modals.modal3 = true"
              >
                <img src="/img/lesson7/19.png" width="70%" />
                <p>
                  <br />รูป 19 ตัวอย่างริบบิ้นหมึกหลังจากที่ผ่านการใช้งานแล้ว
                  (By The original uploader was DMahalko at English Wikipedia. -
                  Transferred from en.wikipedia to Commons by Mr H.., CC BY-SA
                  3.0)
                </p>
              </div>
              <modal :show.sync="modals.modal3">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูป 19 ตัวอย่างริบบิ้นหมึกหลังจากที่ผ่านการใช้งานแล้ว (By The
                  original uploader was DMahalko at English Wikipedia. -
                  Transferred from en.wikipedia to Commons by Mr H.., CC BY-SA
                  3.0)
                </h6>
                <img src="/img/lesson7/19.png" width="100%" />
              </modal>
              <br />

              <h4>ใช้ความร้อน (Thermal printers)</h4>
              <p class="rem2 text-justify">
                เครื่องพิมพ์ด้วยความร้อนเป็นเครื่องพิมพ์ที่ใช้กระดาษชนิดพิเศษที่จะเปลี่ยนเป็นสีดำเมื่อถูกความร้อน
                สามารถพิมพ์ได้อย่างรวดเร็ว ไม่ต้องใช้หมึก
                และเสียงไม่ดังในขณะพิมพ์
                กระดาษที่ใช้พิมพ์จะไม่สามารถคงภาพอยู่ได้อย่างถาวร โดยภาพจะค่อยๆ
                เลือนหายไป และหากถูกความร้อน ตัวอย่างเช่นถูกแสดงแดด
                กระดาษก็จะเปลี่ยนเป็นสีน้ำตาล หรือสีดำ จนไม่สามารถอ่านข้อความได้
                เครื่องพิมพ์ชนิดนี้จึงเหมาะสำหรับใช้พิมพ์เอกสารที่ใช้เพียงชั่วคราว
                ไม่ต้องการให้ข้อความคงอยู่ถาวร ตัวอย่างเช่น บัตรคิว
                ใบกำกับภาษีแบบย่อ ใช้พิมพ์ใบเสร็จจากเครื่องคิดเงิน หรือ
                บัตรโดยสาร นอกจากนั้นยังใช้ในเครื่องแฟกซ์ (fax machine) อีกด้วย
              </p>
              <p class="rem2 text-justify">
                เครื่องพิมพ์ด้วยความร้อนมีราคาไม่สูง เนื่องจากการทำงานไม่ซับซ้อน
                การดูแลรักษาง่าย ไม่มีหมึก
                มีเพียงหัวพิมพ์ที่ทำหน้าที่ส่งผ่านความร้อนไปยังกระดาษเท่านั้น
                พิมพ์เอกสารได้เพียงสีเดียว
                ข้อเสียคือไม่สามรถพิมพ์ลงกระดาษธรรมดาได้
                ต้องใช้กระดาษพิเศษที่ผลิตมาสำหรับพิมพ์ด้วยความร้อนเท่านั้น
              </p>

              <br />
              <div
                class="text-center font-italic col"
                @click="modals.modal4 = true"
              >
                <img src="/img/lesson7/20.png" width="70%" />
                <p>
                  <br />รูป 20 เครื่องพิมพ์ใบเสร็จ (ภาพโดย raoul corciulo จาก
                  Pixabay)
                </p>
              </div>
              <modal :show.sync="modals.modal4">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูป 20 เครื่องพิมพ์ใบเสร็จ (ภาพโดย raoul corciulo จาก Pixabay)
                </h6>
                <img src="/img/lesson7/20.png" width="100%" />
              </modal>
              <br />

              <h4>เครื่องพิมพ์แบบกระแทก ( Impact printers)</h4>
              <p class="rem2 text-justify">
                เครื่องพิมพ์แบบกระแทก
                ใช้หลักของการสร้างภาพบนกระดาษโดยใช้วัตถุกระแทกหมึกเพื่อถ่ายทอด
                หมึกลงบนกระดาษ โดยหมึกจะถูกบรรจุอยู่บนแผ่นริบบิ้น
                และวัตถุที่ใช้กระแทกอาจจะเป็นเข็มสำหรับการพิมพ์แบบจุด (dot
                matrix) หรือเป็นแม่พิมพ์ตัวอักษรเหมือนเครื่องพิมพ์ดีด (
                Typewriter-derived printers) เครื่องพิมพ์ชนิดนี้มีราคาสูง
                แต่ริบบิ้นหมึกมีราคาถูก สามารถพิมพ์ลงบนกระดาษธรรมดาได้
                โดยภาพรวมแล้วต้นทุนต่อแผ่นจะมีราคาถูกที่สุด
              </p>
              <p class="rem2 text-justify">
                เครื่องพิมพ์ชนิดกระแทกนี้มีเสียงที่ดัง
                เนื่องจากต้องใช้แรงกระแทกในการสร้างจุดภาพบนกระดาษ
                จึงไม่นิยมใช้ในสำนักงานเพราะมีเสียงดังรบกวนขณะพิมพ์
                พิมพ์ได้ช้าแต่ไม่ละเอียด
                แต่ข้อดีคือเนื่องจากเป็นการพิมพ์ด้วยแรงกระแทกจึงสามารถพิมพ์ลงบนกระดาษก๊อปปี้ได้
                (carbon copy paper)
                ทำให้สามารถพิมพ์สำเนาเอกสารได้เหมือนกันทุกประการ
                จึงนิยมใช้ในการพิมพ์ใบเสร็จที่ต้องเก็บสำเนาพร้อมลายเซ็นต์
                เล่มสมุดบัญชีเงินฝาก
                หรือใช้พิมพ์ซองแจ้งรหัสผ่านที่ต้องแกะซองก่อนจึงจะอ่านข้อความได้
              </p>

              <br />
              <div
                class="text-center font-italic col"
                @click="modals.modal5 = true"
              >
                <img src="/img/lesson7/21.png" width="40%" />
                <p>
                  <br />รูป 21เครื่องพิมพ์แบบกระแทก EPSON LX-1350
                  (https://www.epson.co.uk/products/printers/dot-matrix-printers/lx-1350)
                </p>
              </div>
              <modal :show.sync="modals.modal5">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูป 21 เครื่องพิมพ์แบบกระแทก EPSON LX-1350
                </h6>
                <img src="/img/lesson7/21.png" width="100%" />
              </modal>
              <br />

              <br />
              <div
                class="text-center font-italic col"
                @click="modals.modal6 = true"
              >
                <img src="/img/lesson7/22.png" width="40%" />
                <p>
                  <br />รูป 22 เครื่องพิมพ์สมุดบัญชีเงินฝาก
                  (https://www.epson.co.uk/products/printers/dot-matrix-printers/plq-30-c11cb64021a0)
                </p>
              </div>
              <modal :show.sync="modals.modal6">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูป 22 เครื่องพิมพ์สมุดบัญชีเงินฝาก
                </h6>
                <img src="/img/lesson7/22.png" width="100%" />
              </modal>
              <br />

              <h4>
                การนำเข้าข้อมูลจากเอกสารที่เป็นกระดาษสู่ระบบแฟ้มข้อมูลดิจิทัล
              </h4>
              <p class="rem2">
                แฟ้มข้อมูลหรือเอกสารที่อยู่ในรูปแบบดิจิทัลนั้นง่ายต่อการจัดเก็บ
                การส่งต่อ และการประมวลผล
                แต่เอกสารหรือภาพถ่ายที่ต้องการประมวลผลอาจอยู่ในรูปแบบแอนะล็อก
                ตัวอย่างเช่น กระดาษ หรือ ฟิล์มถ่ายภาพ
                ดังนั้นเพื่อให้สามารถประมวลผลด้วยเครื่องคอมพิวเตอร์ได้
                เอกสารนั้นจะต้องถูกแปลงให้อยู่ในรูปแบบของดิจิทัลก่อน
                อุปกรณ์ที่ใช้ในการนำเข้าภาพถ่ายจากกระดาษไปเป็นแฟ้มภาพดิจิทัลคือเครื่องสแกนเนอร์
                (Scanner)
              </p>

              <br />
              <div
                class="text-center font-italic col"
                @click="modals.modal7 = true"
              >
                <img src="/img/lesson7/23.png" width="40%" />
                <p>
                  <br />รูป 23 เครื่องสแกนเนอร์ CanoScan 9000F
                  (https://www.usa.canon.com)
                </p>
              </div>
              <modal :show.sync="modals.modal7">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูป 23 เครื่องสแกนเนอร์ CanoScan 9000F
                  (https://www.usa.canon.com)
                </h6>
                <img src="/img/lesson7/23.png" width="100%" />
              </modal>
              <br />

              <p class="rem2 text-justify">
                เครื่องสแกนเนอร์ถ่ายภาพเอกสารโดยใช้อุปกรณ์อิเล็กทรอนิกส์ ซีซีดี
                (charge-coupled device : CCD)
                ซึ่งสร้างขึ้นมาจากสารกึ่งตัวนำชนิดพีและเอ็นประกบกัน (P-Type and
                N-Type) เมื่อทำงานในโหมดรีเวอร์สไบแอส (reverse bias)
                จะไม่นำไฟฟ้า แต่หากมีแสงตกกระทบรอยต่อพีและเอ็น (PN-Junction)
                จะเกิดประจุขึ้นบนแผ่นซิลิคอน กระแสไฟฟ้าจะวิ่งผ่านได้
                โดยปริมาณกระแสไฟฟ้าจะมากหรือน้อยขึ้นอยู่กับปริมาณแสงที่ตกกระทบ
                ในการนำเข้าภาพจะมีการกั้นแผ่นซิลิคอนนี้ออกเป็นส่วนๆ แต่ละช่องคือ
                1 จุดภาพ การอ่านข้อมูลแสงจะไม่อ่านทันที
                แต่จะใช้วิธีปล่อยแรงดันลงไปในเส้นกั้นจุดภาพ
                เพื่อไล่ประจุที่อยู่บนแผ่นซิลิคอนให้เคลื่อนที่ไปด้านใดด้านหนึ่ง
                แล้วจึงทำการอ่านค่าออกมาเป็นจุดภาพ
                ความละเอียดของการสแกนจะขึ้นอยู่กับจำนวนช่องจุดภาพของซีซีดี
              </p>

              <p class="rem2 text-justify">
                ซีซีดีที่ใช้ในเครื่องสแกนเนอร์จะเป็นแบบเส้นตรง ( Linear CCD)
                ดังนั้นหากต้องการถ่ายภาพเอกสารทั้งแผ่น จะต้องทำการกวาด (scan)
                ซีซีดีลงบนเอกสารตั้งแต่หัวไปจนถึงท้ายเอกสาร
                เพื่อให้ได้แผนที่บิตของภาพเอกสาร
                เหมือนการทำแรสเตอร์ไรเซชั่น
                ของเครื่องพิมพ์
                จึงเป็นที่มาของคำว่าสแกนเนอร์
                เนื่องจากขนาดของซีซีดีนั้นเล็กกว่าเอกสารมาก
                เครื่องสแกนเนอร์จึงต้องใช้เลนส์และกระจกเพื่อทำการย่อภาพของเอกสารให้มีขนาดพอดีกับซีซีดี
                การสแกนเอกสารทึบแสงจะใช้หลอดไฟฉายลงบนเอกสาร
                และใช้ซีซีดีในการบันทึกแสงที่สะท้อนกลับออกมาจากเอกสาร
                แต่หากเป็นการสแกนวัตถุโปร่งใสอย่างเช่นฟิล์มถ่ายภาพ
                จะใช้หลอดไฟฉายจากทางด้านหลังเอกสาร
                และใช้ซีซีดีในการบันทึกแสงที่ทะลุเอกสารลงมาได้
              </p>

              <br />
              <div
                class="text-center font-italic col"
                @click="modals.modal8 = true"
              >
                <img src="/img/lesson7/24.png" width="70%" />
                <p><br />รูป 24 ซีซีดีแบบเส้นตรง (Linear CCD)</p>
              </div>
              <modal :show.sync="modals.modal8">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูป 24 ซีซีดีแบบเส้นตรง (Linear CCD)
                </h6>
                <img src="/img/lesson7/24.png" width="100%" />
              </modal>
              <br />
              <p class="rem2">
                การใช้งานให้ทำทำการคว่ำเอกสารโดนหันด้านที่ต้องการสแกนลงบนกระจก
                โดยจัดมุมกระดาษให้ตรงกับตำแหน่งที่ทำเครื่องหมายแสดงมุมกระดาษบนเครื่องสแกนเนอร์
                จากนั้นให้ทำการปิดฝาครอบ และทำการสั่งแสดงตัวอย่าง (Preview)
                จากซอฟต์แวร์สำหรับสแกนภาพ
                จากนั้นให้ทำการระบุตำแหน่งที่ต้องการสแกน
                ปรับความละเอียดที่ต้องการสแกน แล้วจึงกดปุ่มสั่งให้เริ่มทำการสแกน
              </p>

              <br />
              <div
                class="text-center font-italic col"
                @click="modals.modal9 = true"
              >
                <img src="/img/lesson7/25.png" width="70%" />
                <p>
                  <br />รูป 25 ตัวอย่างหน้าจอของโปรแกรมสแกนภาพ (Canon IJ Scan
                  Utility)
                </p>
              </div>
              <modal :show.sync="modals.modal9">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูป 25 ตัวอย่างหน้าจอของโปรแกรมสแกนภาพ (Canon IJ Scan Utility)
                </h6>
                <img src="/img/lesson7/25.png" width="100%" />
              </modal>
              <br />

              <p class="rem2">
                เครื่องสแกนเนอร์จะสร้างภาพดิจิทัลที่มีความละเอียดสูง
                ดังนั้นผู้ใช้จึงควรปรับค่าพารามิเตอร์ของการสแกนให้เหมาะกับการนำภาพไปใช้งาน
                โดยพารามิเตอร์จะประกอบไปด้วย
              </p>
              <p class="rem2">
                ความละเอียด (Resolution) นิยมระบุเป็นจุภาพต่อความยาว 1 นิ้ว
                (DPI) หากผู้ใช้ต้องการนำภาพไปใช้สำหรับแสดงบนจอภาพ อย่างเช่น
                เว็บไซต์ หรือ ใช้นำเสนอ (presentation) ความละเอียด 300dpi
                ก็เพียงพอ แต่หากต้องการนำไปพิมพ์หรือทำสำเนาเอกสาร
                ควรตั้งความละเอียดให้เท่ากับความละเอียดของเครื่องพิมพ์
                หากตั้งความละเอียดมากเกินไปจะทำให้ใช้เวลาในการสแกนนาน
                และแฟ้มภาพที่ได้มีขนาดใหญ่
              </p>
              <p class="rem2">
                ความลึกของบิต (bit –depth)
                เป็นพารามิเตอร์ที่ใช้กำหนดความละเอียดของสี ค่าที่นิยมคือ 8 บิต
                สำหรับภาพระดับเทา (gray scale) 16 บิต
                สำหรับภาพสีที่ความละเอียดสูง (hi-color) 24 บิต สำหรับภาพสีจริง
                (true-color) และ 40 บิต สำหรับสีลึก (deep color)
                พารามิเตอร์นี้จะส่งผลอย่างมากต่อขนาดของข้อมูล
                หากผู้ใช้ต้องการภาพระดับเทาให้ตั้งเป็น 8 บิต
                จะได้ภาพที่ไม่มีสีและมีขนาดเล็ก ใช้หน่วยความจำน้อยในการประมวลผล
                หากต้องการภาพสีสำหรับใช้บนเว็บไซต์หรือในการนำเสนอให้ตั้งค่าเป็น
                24 บิต สำหรับค่า
                40บิตนั้นใช้สำหรับการสแกนภาพถ่ายเพื่อนำมาใช้ในโปรแกรมแต่งภาพเท่านั้น
                เนื่องจากจะได้แฟ้มข้อมูลที่มีขนาดใหญ่
                ยังใช้หน่วยความจำในการประมวลผลมากกว่าปรกติอีกด้วย
              </p>
              <p class="rem2">
                ชนิดของแฟ้มภาพ (Image file type)
                เป็นการระบุชนิดของแฟ้มภาพปลายทาง หรือชนิดของแฟ้มภาพที่ต้องการ
                โดยแฟ้มภาพแต่ละแบบจะใช้เทคโนโลยีในการบีบอัดที่แตกต่างกัน
                ทำให้ขนาดไฟล์และความละเอียดไม่เท่ากันตัวอย่างเช่น
                หากต้องการสแกนเพื่อเก็บถาวร (Archive) ให้บันทึกเป็นแฟ้ม TIF
                เพราะแฟ้มชนิดนี้ไม่ทำให้คุณภาพของภาพลดลงแต่ขนาดของข้อมูลจะใหญ่มาก
                ไม่เหมาะกับการประมวลผล
                กรณีที่ต้องการสแกนเพื่อแนบกับจดหมายอิเล็กทรอนิกส์หรือโพสขึ้นบนเว็บไซต์
                ให้ทำการบรรทุกเป็นแฟ้ม PNG
                เนื่องจากมีขนาดเล็กแต่ความละเอียดจะลดลงเล็กน้อย
              </p>
              <p class="rem2">
                เนื่องจากเครื่องสแกนเนอร์มีชุดกระจกและเลนส์ที่มีกลไกละเอียดอ่อนอยู่ภายใน
                หากได้ได้รับการกระทบกระเทือน กลไกภายในอาจจะเคลื่อนได้
                ดังนั้นหากต้องการเคลื่อนย้ายจะต้องทำการล็อคกลไกภายในก่อน
                ปุ่มล๊อคจะเป็นปุ่มโยกด้านบนของกระจก
                และเมื่อต้องการใช้งานครั้งถัดไปผู้ใช้ต้องทำการปลดล็อคก่อนใช้งานทุกครั้ง
              </p>

              <br />
              <div
                class="text-center font-italic col"
                @click="modals.modal10 = true"
              >
                <img src="/img/lesson7/26.png" width="70%" />
                <p>
                  <br />รูป 26 ตัวอย่างการปลดล็อคกลไกของ CanoScan9000F
                  (จากคู่มือการใช้งาน CanoScan9000F https://www.usa.canon.com)
                </p>
              </div>
              <modal :show.sync="modals.modal10">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูป 26 ตัวอย่างการปลดล็อคกลไกของ CanoScan9000F
                </h6>
                <img src="/img/lesson7/26.png" width="100%" />
              </modal>
              <br />
              <br />
              <div
                class="text-center font-italic col"
                @click="modals.modal11 = true"
              >
                <img src="/img/lesson7/27.png" width="70%" />
                <p>
                  <br />รูป 27 ปุ่มล็อคกลไกที่อยู่ด้านล่างของเครื่องสแกนเนอร์
                  CanoScan LiDE120
                </p>
              </div>
              <modal :show.sync="modals.modal11">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูป 27 ปุ่มล็อคกลไกที่อยู่ด้านล่างของเครื่องสแกนเนอร์ CanoScan
                  LiDE120
                </h6>
                <img src="/img/lesson7/27.png" width="100%" />
              </modal>
              <br />

              <p class="rem2">
                ปัจจุบันนี้มีเทคโนโลยีใหม่เริ่มเข้ามาแทนที่ซีซีดี นั่นคือ
                อุปกรณ์ตรวจจับภาพแบบสัมผัส หรือ ซีไอเอส (contact image sensor :
                CIS) โครงสร้างจะเป็นเซ็นเซอร์ตรวจจับแสงแบบซีมอส (CMOS)
                หลายๆ ตัววางเรียงกันเป็นเป็นเส้นตรง 1 ตัวต่อ 1 จุดภาพ
                เรียงยาวเท่าพื้นที่ในการสแกน
                เนื่องจากพื้นที่รับภาพมีความยาวเท่าพื้นที่สแกน
                จึงไม่จำเป็นต้องมีชุดเลนส์และกระจก
                การสแกนจะวางเซ็นเซอร์ไว้ใกล้กับภาพมากแต่ไม่มีการสัมผัสกับภาพ
                เครื่องสแกนเนอร์แบบนี้จึงมีขนาดเล็ก
                ใช้พลังงานต่ำเมื่อเทียบกับแบบใช้ซีซีดี
                สามารถใช้พลังงานจากยูเอสบีได้โดยตรง
                มีราคาที่ถูกเนื่องจากซีไอเอสมีต้นทุนการผลิตถูกกว่าซีซีดี
                แต่คุณภาพของการสแกน (ณ ขณะที่เขียนบทความนี้)
                ยังด้อยกว่าชนิดที่ใช้ซีซีดี
                เทคโนโลยีซีไอเอสนิยมใช้ในสแกนเนอร์ที่อยู่ในเครื่องพิมพ์แบบออลอินวัน
                (all in one)
              </p>

              <br />
              <div
                class="text-center font-italic col"
                @click="modals.modal12 = true"
              >
                <img src="/img/lesson7/28.png" width="70%" />
                <p>
                  <br />รูป 28 เซ็นเซอร์แบบซีไอเอส (By Michele M. F. (Latente
                  www.latente.it) - originally posted to Flickr as Scannercamera
                  - The Sensor Bar, CC BY-SA 2.0)
                </p>
              </div>
              <modal :show.sync="modals.modal12">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูป 28 เซ็นเซอร์แบบซีไอเอส (By Michele M. F.
                </h6>
                <img src="/img/lesson7/28.png" width="100%" />
              </modal>
              <br />

              <br />
              <div
                class="text-center font-italic col"
                @click="modals.modal13 = true"
              >
                <img src="/img/lesson7/29.png" width="40%" />
                <p>
                  <br />รูป 29 เครื่องพิมพ์แบบ ออลอินวัน
                  (https://www.brother.ca/en/p/MFCJ995DW)
                </p>
              </div>
              <modal :show.sync="modals.modal13">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูป 29 เครื่องพิมพ์แบบ ออลอินวัน
                </h6>
                <img src="/img/lesson7/29.png" width="100%" />
              </modal>
              <br />
              <!-- -------------------------------- -->
              <br />
              <br />
              <br />
              <br />
              <div class="container">
                <div class="row">
                  <div class="col-auto mr-auto">
                    <router-link to="/lesson7_2" title="Lesson7_2 Page">
                      <div class="btn-wrapper">
                        <base-button
                          tag="a"
                          target="_blank"
                          rel="noopener noreferrer"
                          class="mb-3 mb-sm-0"
                          outline
                          type="info"
                          icon="fa fa-chevron-left"
                          >ย้อนกลับ</base-button
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
                    <router-link to="/lesson8_1" title="Lesson8_1 Page">
                      <div class="btn-wrapper">
                        <base-button
                          tag="a"
                          target="_blank"
                          rel="noopener noreferrer"
                          class="mb-3 mb-sm-0"
                          outline
                          type="info"
                        >
                          บทเรียนที่ 8
                          <i class="fa fa-chevron-right" aria-hidden="true"></i>
                        </base-button>
                      </div>
                    </router-link>
                  </div>
                </div>
              </div>
              <div class="text-center mt-5">Page 3/3</div>
            </div>
          </div>
        </div>
      </section>

      <hr />
      <div class="col-lg-center">
        <div class="pt-4 text-center">
          <h5 class="title">
            <span class="d-block mb-1">Author | Dr. Paween Khoenkaw</span>
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
      },
    };
  },
};
</script>

<style></style>
