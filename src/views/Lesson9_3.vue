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
              <h4>การเรียนรู้แบบมีผู้สอน(Supervised learning)</h4>
              <p class="rem2 text-justify">
                อัลกอริทึมจำเป็นต้องใช้ ข้อมูลในส่วนสำหรับ train (training data)
                และส่วนที่รับกลับมาเพื่อปรับปรุง (feedback)
                จากมนุษย์เพื่อที่จะเรียนรู้ความสัมพันธ์ระหว่างข้อมูลที่ถูกป้อนเข้ามาสู่ข้อมูลที่ออกไป
                ยกตัวอย่างเช่น
                มีเด็กหัดคนหนึ่งใช้การค่าใช้จ่ายทางการตลาดและการพยากรณ์สภาพอากาศเป็นข้อมูลขาเข้าเพื่อทำนายจำนวนกระป๋องที่จะขายได้
                คุณสามารถใช้ supervised learning
                เมื่อผลลัพธ์ของข้อมูลเป็นสิ่งที่รู้อยู่แล้ว
                อัลกอริทึมนี้ก็จะทำนายข้อมูลใหม่ได้
              </p>
              <p class="rem2 font-weight-bold">
                มีประเภทของ supervised learning อยู่ 2 ประเภท
              </p>
              <p class="rem5">-การแบ่งแยกประเภท (Classification)</p>
              <p class="rem5">-การถดถอย (Regression)</p>
              <br />
              <h4>การแบ่งแยกประเภท (Classification)</h4>
              <p class="rem2 text-justify">
                ให้สมมุติว่าคุณต้องการทำนายเพศของลูกค้าซักคนหนึ่ง
                คุณจะเริ่มเก็บเกี่ยวข้อมูลตั้งแต่
                ส่วนสูง, น้ำหนัก, อาชีพ, เงินเดือน, สินค้าที่ซื้อ และอื่น ๆ
                จากฐานข้อมูลลูกค้าของคุณ คุณรู้เพศของลูกค้าคุณแต่ละคน
                มันสามารถตอบได้เพียงว่าลูกค้าผู้ชายหรือผู้หญิงเท่านั้น
                ผลลัพธ์จาก ตัวแบ่งแยกประเภท (classifier)
                นี้จะถูกกำหนดด้วยความน่าจะเป็นว่าเป็นผู้ชายหรือผู้หญิง นั่นคือ
                การทำสัญลักษณ์ไว้ (label) โดยขึ้นอยู่กับข้อมูลเป็นหลัก
              </p>
              <p class="rem2 text-justify">
                การทำสัญลักษณ์ไว้ (label) สามารถเป็นไปได้มากกว่า 2
                ประเภทแต่ตัวอย่างด้านบนมีเพียง 2 ประเภทเท่านั้น แต่ถ้า
                classifier ต้องการทำนายวัตถุ
                มันสามารถแบ่งประเภทวัตถุได้อีกมากมาย เช่น
                แก้ว, โต๊ะ, รองเท้า และอื่น ๆ
              </p>
              <br />
              <h4>การถดถอย (Regression)</h4>
              <p class="rem2 text-justify">
                เมื่อผลลัพธ์มีค่าต่อเนื่องกันนั้นจะเป็นงานของ regression
                ที่จะมาช่วยแก้ปัญหานี้ ยกตัวอย่างเช่น
                นักวิเคราะห์ด้านการเงินคนหนึ่งอาจต้องการทำนายมูลค่าของหุ้นโดยดูจาก
                feature ต่าง ๆ เช่น ส่วนได้ส่วนเสีย (equity)
                สถานะของหุ้นก่อนหน้านี้ และดัชนีเศรษฐกิจมหาภาคระบบจะถูก train
                เพื่อประเมินราคาของหุ้นด้วยความผิดพลาดที่น้อยที่สุด
              </p>
              <br />
              <h4>การเรียนรู้แบบไม่มีผู้สอน (Unsupervised learning)</h4>
              <p class="rem2 text-justify">
                อัลกอริทึมจะตรวจสอบเฉพาะข้อมูลที่ป้อนเข้ามาเท่านั้นโดยปราศจากการให้ผลลัพธ์ที่จะเกิดขึ้น
                เช่น การสำรวจข้อมูลประชากรเพื่อหาแบบแผน (pattern) ของข้อมูลนั้น
                คุณสามารถใช้มันเมื่อคุณไม่ต้องการที่จะรู้ว่า machine
                แบ่งประเภทได้อย่างไร และคุณต้องการอัลกอริทึมนั้นเพื่อหา pattern
                และแบ่งประเภทข้อมูลสำหรับคุณ
              </p>
              <br />
              <h4>วิธีการเลือกอัลกอริทึมของ Machine Learning</h4>
              <p class="rem2 text-justify">
                ในปัจจุบันมีอัลกอริทึมของ Machine Learning อยู่มากมาย
                โดยการเลือกอัลกอริทึมจะขึ้นอยู่กับวัตถุประสงค์ที่เราจะนำไปใช้งานตามตัวอย่างด้านล่าง
                เป็นงานการทำนายชนิดของดอกไม้ โดยมีดอกไม้อยู่ 3 ชนิด
                การทำนายนี้จะขึ้นอยู่กับความยาวและความกว้างของกลีบดอกไม้
                รูปด้านล่างนี้จะแสดงให้เห็นถึงผลลัพธ์ที่แตกต่างกันของ 10
                อัลกอริทึม โดยรูปที่อยู่ทางด้านบนซ้ายเป็นชุดของข้อมูล (dataset)
                ข้อมูลนี้จะถูกแบ่งประเภทเป็น 3 ประเภท ได้แก่ สีแดง , สีฟ้าอ่อน,
                สีน้ำเงิน ยกตัวอย่างเช่น
                ที่รูปที่สองสิ่งที่อยู่ในส่วนข้างบนทางซ้ายของรูปนั้นเป็นของดอกไม้สีแดง
                ในส่วนตรงกลางจะเป็นการรวมกันอย่างไม่แน่นอนและดอกไม้สีฟ้าอ่อน
                ขณะที่ส่วนล่างของรูปจะเป็นของดอกไม้สีน้ำเงิน ส่วนรูปอื่นๆ
                จะแสดงถึงการใช้อัลกอริทึมที่แตกต่างกันออกไปและแต่ละอัลกอริทึมจะพยายามแบ่งประเภทข้อมูลอย่างไร
              </p>
              <br />
              <h4>ความท้าทายและข้อจำกัดของ Machine Learning</h4>
              <p class="rem2 text-justify">
                ความท้าทายแรกของ Machine Learning คือ
                ความขาดแคลนข้อมูลหรือความขาดแคลนความหลากหลายในแต่ละชุดข้อมูล โดย
                machine ไม่สามารถเรียนรู้ได้เลยถ้าไม่มีข้อมูลที่สามารถนำไปใช้ได้
                ยิ่งไปกว่านั้น ชุดข้อมูลที่ขาดความหลากหลายนั้นจะทำให้ machine
                ยากต่อการทำนายแต่ละสิ่ง machine
                จำเป็นต้องความแตกต่างกันเพื่อที่จะเรียนรู้แต่ละสิ่งอย่างลึกซึ้งได้
                แต่มันยากที่ <br>
                อัลกอริทึมจะคัดแยกข้อมูลเมื่อข้อมูลแทบจะไม่มีความแตกต่างกันเลย
                มันจึงถูกเสนอแนะให้มีอย่างน้อย 20 การทดลองต่อกลุ่มเพื่อช่วย
                machine เรียนรู้
                ดังนั้นจากข้อจำกัดนี้จะนำไปสู่การพยากรณ์และการประมาณค่าที่ย่ำแย่ลง
              </p>

              <br />

              <h4>การประยุกต์ใช้ Machine Learning</h4>
              <p class="rem2">
                การเพิ่มเติมขึ้นมา (Augmentation): Machine Learning
                ซึ่งช่วยเหลือมนุษย์ในงานต่างๆ
                ทุกวันนี้ทั้งเชิงบุคคลและเชิงพาณิชย์ก็ตามนั้นจะปราศจากการควบคุมโดยสมบูรณ์ของผลลัพธ์ที่เกิดขึ้น
                ซึ่ง Machine Learning ถูกใช้ในหลากหลายรูปแบบ เช่น ผู้ช่วยเสมือน
                (Virtual Assistant), การวิเคราะห์ข้อมูล (Data Analysis) ,
                Software solution เป็นต้น โดยผู้ใช้รายแรก ๆ
                จะเป็นผู้ลดความผิดพลาดเนื่องจากความลำเอียงของมนุษย์เอง
              </p>
              <p class="rem2">
                การทำงานอัตโนมัติ (Automation): Machine Learning
                ซึ่งทำงานทั้งหมดแต่อย่างอัตโนมัติในด้านต่าง ๆ
                โดยปราศจากการแทรกแซงของมนุษย์ ยกตัวอย่าง
                หุ่นยนต์ที่ดำเนินการตามขั้นตอนในโรงงานการผลิต
              </p>
              <p class="rem2">
                อุตสาหกรรมการเงิน (Finance Industry): Machine Learning
                กำลังเติบโตและเป็นที่ต้องการในอุตสาหกรรมการเงินอย่างมาก
                ธนาคารส่วนใหญ่ใช้ Machine Learning(ML) เพื่อหา pattern
                ของข้อมูลเพื่อป้องกันการฉ้อโกงจะเกิดขึ้น
              </p>
              <p class="rem2">
                องค์กรภาครัฐ (Government organization): รัฐบาลใช้ ML
                เพื่อจัดการความปลอดภัยของสาธารณะและสาธารณูปโภค
                ยกตัวอย่างประเทศจีนมีการใช้ระบบการจดจำใบหน้า (face
                recognition) เป็นจำนวนมาก โดยรัฐบาลใช้ปัญญาประดิษฐ์ (Artificial
                Intelligence : AI) เพื่อป้องการผู้ข้ามถนนอย่างไม่ระมัดระวัง
              </p>
              <p class="rem2">
                อุตสาหกรรมการดูแลสุขภาพ (Healthcare industry):
                การดูแลสุขภาพเป็นหนึ่งในอุตสาหกรรมแรก ๆ ที่นำ Machine Learning
                กับการตรวจ จับภาพ (image detection) เข้ามาใช้งาน
              </p>
              <p class="rem2">
                การตลาด (Marketing): AI
                ถูกใช้อย่างกว้างขวางในด้านการตลาดโดยจะใช้การเข้าถึงข้อมูลจำนวนมากในการทำงาน
                ก่อนที่จะถึงยุคที่มีข้อมูลมหาศาลขนาดนี้
                นักวิจัยได้พัฒนาเครื่องมือด้านคณิตศาสตร์ขั้นสูงเหมือนกับการวิเคราะห์ของ
                Bayes (Bayesian analysis) เพื่อประเมินมูลค่าของลูกค้าแต่ละคน
                ฝ่ายการตลาดจะใช้ AI
                เป็นส่วนใหญ่เพื่อประสิทธิภาพการหาความสัมพันธ์ของลูกค้าและการโฆษณาด้านการตลาด
              </p>
            
              <p class="rem2 text-justify">
                ตัวอย่างการประยุกต์ใช้ Machine Learning ในห่วงโซ่อุปทาน (นั่นคือ
                แหล่งของอุตสาหกรรมต่างๆ : Supply chain Machine Learning
                จะให้ผลลัพธ์มากมายออกมาสำหรับการรู้จำแบบทางการมองเห็น (visual
                pattern recognition) เป็นการเปิดทางสำหรับการประยุกต์ใช้ Machine
                Learning เป็นการตรวจสอบสภาพและบำรุงรักษาข้ามเครือข่ายของ supply
                chain ทั้งหมด Unsupervised learning
                สามารถค้นหาแบบแผนที่คล้ายคลึงกันได้อย่างรวดเร็วในชุดข้อมลที่มีความหลากหลาย
                และในอีกรูปแบบหนึ่ง machine
                สามารถดำเนินการตรวจสอบคุณภาพตลอดที่ศูนย์กลางการขนส่ง (logistic
                hub) ความเสียหายของการส่งสินค้า
                และสิ่งที่ใส่เข้าไปยกตัวอย่าง เช่น ระบบ Watson ของ IBM
                สามารถกำหนดความเสียหายของการส่งสินค้าผ่านตู้คอนเทนเนอร์
                (container) Watson ประกอบไปด้วยระบบการมองเห็น (visual)
                และระบบที่มีข้อมูลเป็นพื้นฐานเพื่อสะกดรอย รายงานและคอยเสนอแนะต่างๆ
                อย่างทันท่วงทีในปีที่ผ่านมา
                ผู้จัดการคลังสินค้าใช้วิธีก่อนนี้ในการประเมินว่าจำนวนสินค้าที่คงคลังอยู่
                เมื่อข้อมูลขนาดใหญ่ (Big data) และ Machine Learning
                เริ่มเข้ามามีบทบาทซึ่งเป็นเทคนิคที่ทำให้การพยากรณ์แม่นยำมากยิ่งขึ้น
                เทคนิคใหม่เพิ่มประเพิ่มประสิทธิภาพจากวิธีก่อนหน้านี้ 20-30%
                ในรูปของการขาย ซึ่งหมายความว่าเพิ่มขึ้น 2-3%
                เนื่องจากศักยภาพที่ลดลงของสินค้าที่คงคลังอยู่
              </p>
              <p class="rem2 text-justify">
                ตัวอย่าง Machine Learning กับรถยนต์ของ Google (Google
                car) ยกตัวอย่างเช่น ทุกคนรู้จัก Google car
                รถดังกล่าวเต็มไปด้วยเลเซอร์บนหลังคาที่คอยบอกมันว่ามีสิ่งใดอยู่รอบตัวบ้าง
                มันมีเรดาร์อยู่ข้างหน้ารถซึ่งคอยแจ้งรถเกี่ยวกับความเร็วและการเคลื่อนไหวของรถคันอื่นรอบตัวมัน
                มันจะใช้ข้อมูลทั้งหมดไม่เพียงแค่ขับรถอย่างเดียวแต่เพื่อทำนายว่าจากศักยภาพของคนขับรถคันอื่นรอบตัวมันจะทำอย่างไรต่อไปด้วย
                มันเป็นความน่าประทับใจอย่างมากของรถยนต์ที่จะประมวลผลข้อมูลในหลักกิกะไบต์
                (Gigabyte) ในหลักเพียงวินาทีเท่านั้น
              </p>
              <br />
              <div
                class="text-center font-italic col"
                @click="modals.modal1 = true"
              >
                <img src="/img/lesson9/11.png" width="60%" />
                <p>
                  <br />รูปที่ 11. กราฟแสดงรายได้ชองวิศวกรรม
                  ที่ทำงานเกี่ยวข้องกับ Machine Learning
                </p>
              </div>
              <modal :show.sync="modals.modal1">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 11. กราฟแสดงรายได้ชองวิศวกรรม ที่ทำงานเกี่ยวข้องกับ
                  Machine Learning
                </h6>
                <img src="/img/lesson9/11.png" width="100%" />
              </modal>
              <br />
              <p class="rem2 text-justify">
                ทำไม Machine Learning ถึงสำคัญ ? Machine Learning
                เป็นเครื่องมือที่ดีที่สุด ณ ปัจจุบันเพื่อวิเคราะห์ เข้าใจ และหา
                pattern ของข้อมูล หนึ่งในแนวคิดหลักภายใต้ Machine Learning
                คือการที่คอมพิวเตอร์สามารถถูก train
                อย่างอัตโนมัติซึ่งสามารถทำได้อย่างหมดจด หรือเป็นไปไม่ได้สำหรับที่มนุษย์จะทำ
                และยังมีช่องโหว่ที่ชัดเจนจากการวิเคราะห์แบบก่อนคือการที่ Machine
                Learning สามารถตัดสินใจได้ด้วยการแทรกแซงจากมนุษย์เพียงเล็กน้อย
              </p>
              <br /><br />
              <hr />
              <h3 class="text-center display-3">DATA SCIENCE</h3>
              <br />
              <h4>ความหมายของ Data science</h4>
              <p class="rem2">
                Data Science หมายถึง การนำข้อมูลมาใช้ประโยชน์
                เพื่อค้นหาสิ่งที่เราไม่รู้
                โดยครอบคลุมตั้งแต่ขั้นตอนการเก็บข้อมูล (Collect) >
                การจัดการข้อมูล (Manage) > การวิเคราะห์ข้อมูล (Analyze) >
                ไปจนถึงขั้นตอนการนำข้อมูลมาช่วยตัดสินใจ (Decision)
              </p>
              <p class="rem2">
                วิทยาศาสตร์ข้อมูล คือ ศาสตร์ที่เกี่ยวกับการจัดการ จัดเก็บ รวบรวม
                ตรวจสอบ วิเคราะห์ วิจัย
                และนำเสนอผลการวิเคราะห์ข้อมูลเพื่อนำไปสู่ความรู้ที่สามารถนำไปใช้งานได้จริง
                (Actionable knowledge) หรือหากจะพูดง่าย ๆ วิทยาศาสตร์ข้อมูล
                ก็คือ
                ความรู้เกี่ยวกับวิธีในการเปลี่ยนข้อมูลให้เป็นสารสนเทศที่สามารถนำไปใช้งานต่อได้
              </p>
              <br />
              <h4>ส่วนประกอบของ Data science</h4>
              <p class="rem2">
                Data Science ประกอบด้วย Computer Science + Maths & Stats +
                Business Domain Expert ดังรูป
              </p>
              <br />
              <div
                class="text-center font-italic col"
                @click="modals.modal2 = true"
              >
                <img src="/img/lesson9/12.png" width="50%" />
                <p><br />รูปที่ 12. Venn Diagram ของ Data Science</p>
              </div>
              <modal :show.sync="modals.modal2">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 12. Venn Diagram ของ Data Science
                </h6>
                <img src="/img/lesson9/12.png" width="100%" />
              </modal>
              <br />
              <p class="rem2 text-justify">
                1. Computing Science (วิทยาการคำนวณ) วิทยาการคำนวณ (Computing
                science)
                เป็นวิชาที่มุ่งเน้นการเรียนการสอนให้เด็กสามารถคิดเชิงคำนวณ
                (Computational thinking)
                มีความพื้นฐานความรู้ด้านเทคโนโลยีดิจิทัล (Digital technology)
                และมีพื้นฐานการรู้เท่าทันสื่อและข่าวสาร (Media and information
                literacy) ซึ่งการเรียนวิชาการคำนวณ
                จะเป็นกระบวนการความคิดเชิงวิเคราะห์เพื่อนำมาใช้แก้ปัญหาของมนุษย์
                โดยเป็นการสั่งให้คอมพิวเตอร์ทำงานและช่วยแก้ไขปัญหาตามที่เราต้องการได้อย่างมีประสิทธิภาพ
              </p>
              <p class="rem2 text-justify">
                2. Maths & Statistics (คณิตศาสตร์ และสถิติ) หมายถึง
                ศาสตร์ที่นำมากระทำกับหลักฐานที่เป็นข้อมูลซึ่งอาจจะเป็นข้อมูลเชิงปริมาณหรือเชิงคุณภาพ
                โดยมีวิธีการกระทำได้แก่ การเก็บรวบรวมข้อมูล การนำเสนอข้อมูล
                การวิเคราะห์โดยใช้หลักการทางคณิตศาสตร์
                และการนำผลการวิเคราะห์มาสรุป
              </p>
              <p class="rem2 text-justify">
                3. Business / Domain Expertise (ความรู้ด้านธุรกิจ) หมายถึง
                กระบวนการของกิจการทางเศรษฐกิจที่สัมพันธ์เป็นระบบ
                และอย่างต่อเนื่องในด้านการผลิต
                การซื้อขายแลกเปลี่ยนเกี่ยวกับสินค้าและบริการ
                โดยมีจุดมุ่งหมายที่จะได้กำไรหรือผลตอบแทนจากกิจกรรมนั้น
              </p>
              <p class="rem2 font-weight-bold">
                ปัจจัยที่มีอิทธิพลต่อการประกอบธุรกิจ สามารถแยกได้ 2 ลักษณะคือ
              </p>
              <p class="rem5">
                1. ปัจจัยภายใน หรือทรัพยากรของธุรกิจเป็นปัจจัยที่ธุรกิจ
                สามารถสร้างขึ้นและสามารถควบคุมได้ ได้แก่ คน (Man) หมายถึง
                กำลังคน, เงิน (Money) หมายถึง เงินทุน, วัสดุ (Material) หมายถึง
                กระบวนการต่าง ๆ เช่น การวางแผน การจัดองค์การ
              </p>
              <p class="rem5">
                2. ปัจจัยภายนอก
                เป็นปัจจัยที่ธุรกิจไม่สามารถจะควบคุมกำหนดหรือเปลี่ยนแปลงได้
                ได้แก่ สภาพแวดล้อมทางธุรกิจ เช่น ภาวะแวดล้อมทางเศรษฐกิจ
                กฎหมายการเมือง คู่แข่ง เทคโนโลยี
              </p>
              <br />
              <h4>จรรยาบรรณของนักธุรกิจ</h4>
              <p class="rem2">
                จรรยาบรรณ (Ethics)
                ไม่ใช่กฎหมายแต่เป็นข้อที่ควรปฏิบัติสำหรับอาชีพใดอาชีพหนึ่ง เช่น แพทย์
                ไม่ควรเปิดเผยความลับของคนไข้ เพราะผิดจรรยาแพทย์ เป็นต้น
                สำหรับการประกอบธุรกิจ เช่นกัน
                ผู้ประกอบธุรกิจควรที่จะแสดงความรับผิดชอบต่อสังคมที่เขาอาศัยอยู่
              </p>
              <br />
              <h4>คุณสมบัติของ Data Scientist</h4>
              <p class="rem2">1. การเขียนโปรแกรมและเทคโนโลยี (Hacking Skill)</p>
              <p class="rem2">
                2. ความรู้ด้านสถิติและคณิตศาสตร์ (Math & Statistics Knowledge)
              </p>
              <p class="rem2">
                3. ความรู้เฉพาะทาง (Substantive Expertise หรือ Domain knowledge)
              </p>

              <br />
              <div
                class="text-center font-italic col"
                @click="modals.modal3 = true"
              >
                <img src="/img/lesson9/13.png" width="50%" />
                <p>
                  <br />รูปที่ 13. รูปภาพ Venn Diagram ของ Skill Data Scientist
                </p>
              </div>
              <modal :show.sync="modals.modal3">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 13. รูปภาพ Venn Diagram ของ Skill Data Scientist
                </h6>
                <img src="/img/lesson9/13.png" width="100%" />
              </modal>
              <br />
              <h4>วิทยาการข้อมูลที่ใช้ร่วมกัน</h4>
              <p class="rem2">
                Machine learning Zone คือ โซนที่มีความสามรถในการเขียนโปรแกรมอย่างมาก และมีความสามารถในด้านสถิติ
                แน่นอนสิ่งที่คนที่มีสกิลแบบนี้ต้องทำคือ หาตัวแปรที่นำไปใช้
                และพยายามทำนายแบบจำลองที่รวมเข้าด้วยกัน
              </p>
              <br />
              <div
                class="text-center font-italic col"
                @click="modals.modal4 = true"
              >
                <img src="/img/lesson9/14.png" width="50%" />
                <p><br />รูปที่ 14. Venn Diagram ของ Machine learning Zone</p>
              </div>
              <modal :show.sync="modals.modal4">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 14. Venn Diagram ของ Machine learning Zone
                </h6>
                <img src="/img/lesson9/14.png" width="100%" />
              </modal>
              <br />
              <p class="rem2">
                Traditional Research คือ การวิจัยแบบดั้งเดิม
                ตอนนี้เป็นไปได้เพราะในฟิลด์ดั้งเดิมส่วนใหญ่ชุดข้อมูลและการวิเคราะห์มีโครงสร้างและมีความต่อเนื่องกัน
              </p>

              <br />
              <div
                class="text-center font-italic col"
                @click="modals.modal5 = true"
              >
                <img src="/img/lesson9/15.png" width="50%" />
                <p><br />รูปที่ 15. Venn Diagram ของ Traditional Research</p>
              </div>
              <modal :show.sync="modals.modal5">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 15. Venn Diagram ของ Traditional Research
                </h6>
                <img src="/img/lesson9/15.png" width="100%" />
              </modal>
              <br />
              <p class="rem2">
                Drew Conway เรียกว่า โซนอันตราย
                สิ่งนี้อาจไม่เกิดขึ้นเพราะคนที่มีความสามารถในการเขียนโปรแกรมคอมพิวเตอร์อย่างมากและมีความเชี่ยวชาญที่สำคัญอาจพัฒนาคณิตศาสตร์และสถิติได้
              </p>

              <br />
              <div
                class="text-center font-italic col"
                @click="modals.modal6 = true"
              >
                <img src="/img/lesson9/16.png" width="50%" />
                <p><br />รูปที่ 16. Venn Diagram ของ Drew Conway</p>
              </div>
              <modal :show.sync="modals.modal6">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 16. Venn Diagram ของ Drew Conway
                </h6>
                <img src="/img/lesson9/16.png" width="100%" />
              </modal>

              <!-- -------------------------------- -->
              <br />
              <br />
              <br />
              <br />
              <div class="container">
                <div class="row">
                  <div class="col-auto mr-auto">
                    <router-link to="/lesson9_2" title="Lesson9_2 Page">
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
                    <router-link to="/lesson9_4" title="Lesson9_4 Page">
                      <div class="btn-wrapper">
                        <base-button
                          tag="a"
                          target="_blank"
                          rel="noopener noreferrer"
                          class="mb-3 mb-sm-0"
                          outline
                          type="info"
                        >
                          ถัดไป
                          <i class="fa fa-chevron-right" aria-hidden="true"></i>
                        </base-button>
                      </div>
                    </router-link>
                  </div>
                </div>
              </div>
              <div class="text-center mt-5">Page 3/8</div>
            </div>
          </div>
        </div>
      </section>

      <hr />
      <div class="col-lg-center">
        <div class="pt-4 text-center">
          <h5 class="title">
            <span class="d-block mb-1">Author | Dr.Payungsak Kasemsumran</span>
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
      },
    };
  },
};
</script>

<style></style>
