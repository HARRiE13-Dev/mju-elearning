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

              <h3>
                4.3.ทักษะที่เด็กและเยาวชนยุคใหม่ควรเรียนรู้ในการเป็นพลเมืองยุคดิจิทัล
              </h3>
              <br />
              <p class="rem2 text-justify">
                เมื่อชีวิตของกลุ่มคนรุ่นใหม่ต้องเข้าไปเกี่ยวข้องกับเทคโนโลยีดิจิทัล
                การเข้าใจและนำหลักการสื่อสารดิจิทัลมาเพื่อปกป้องตนเองจากความเสี่ยงบนโลกออนไลน์
                และสามารถใช้สื่อดิจิทัลให้เกิดประโยชน์สูงสุดจึงสำคัญอย่างยิ่งในการนำมาเสริมสร้างทักษะในการดำเนินชวิตบนโลกดิจิทัลได้อย่างปลอดภัยและมีความสุข
                เมื่อกลางปี พ.ศ. 2559 World Economic Forum ได้จัดทำอินโฟกราฟฟิก
                เรื่องความฉลาดทางดิจิทัล (Digital Intelligence) ซึ่งจัดทำโดย DQ
                Institute เพื่อเสนอทักษะ 8
                ด้านที่เด็กและเยาวชนเรียนรู้เพื่อแสดงให้เห็นถึงทักษะที่เด็กและเยาวชนในยุคดิจิทัลควรเรียนรู้
                ซึ่ง Digital Intelligence หรือ DQ หมายถึงชุดความสามารถทางความรู้
                อารมณ์และสังคมที่ทำให้เด็กสามารถที่จะเผชิญความท้าทายและปรับตัวสู่ชีวิตยุคดิจิทัลได้
                (โสภิดา, 2561) ดังภาพด้านล่าง
              </p>
              <br />
              <div
                class="text-center font-italic"
                @click="modals.modal1 = true"
              >
                <img src="/img/lesson4/3.jpg" width="100%" />
                <p>
                  <br />ภาพที่ 3
                  ทักษะที่เด็กและเยาวชนยุคใหม่ควรเรียนรู้ในการเป็นพลเมืองในยุคดิจิทัล
                </p>
              </div>
              <modal :show.sync="modals.modal1">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  ภาพที่ 3
                  ทักษะที่เด็กและเยาวชนยุคใหม่ควรเรียนรู้ในการเป็นพลเมืองในยุคดิจิทัล
                </h6>
                <img src="/img/lesson4/3.jpg" width="100%" />
              </modal>
              <br />
              <h4 class="rem2">
                4.3.1 การสร้างอัตลักษณ์พลเมืองดิจิทัล (Digital Citizen Identity)
              </h4>
              <p class="rem5">
                ความสามารถในการสร้างและบริหารจัดการอัตลักษณ์ทั้งในโลกออนไลน์และออฟไลน์ด้วยความซื่อตรง
                (integrity) การใช้ application
                เพื่อทำให้ภาพที่ออกมาดูดีเป็นเรื่องธรรมดา
                แต่ไม่ควรจะมีการตกแต่งจนกระทั่งบิดเบือนความจริงและนำไปใช้เพื่อการหลอกลวงหรือหวังผลประโยชน์ในทางมิชอบ
                ดังภาพด้านล่าง
              </p>
              <br />
              <div
                class="text-center font-italic"
                @click="modals.modal2 = true"
              >
                <img src="/img/lesson4/4.png" width="80%" />
                <p><br />ภาพที่ 4 ภาพการสร้างอัตลักษณ์บิดเบือน</p>
              </div>
              <modal :show.sync="modals.modal2">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  ภาพที่ 4 ภาพการสร้างอัตลักษณ์บิดเบือน
                </h6>
                <img src="/img/lesson4/4.png" width="100%" />
              </modal>
              <br />
              <p class="rem5 text-justify">
                ในความเป็นจริงนั้นสิ่งที่เราควรจะเข้าใจคือ
                คนทุกคนล้วนมีความแตกต่างกัน
                แม้แต่ฝาแฝดที่เหมือนกันมากที่สุดก็ยังมีจุดที่แตกต่าง
                และความแตกต่างเหล่านี้เป็นความหลากหลาย (Diversity)
                ที่ควรได้รับการยอมรับ มองเห็นคุณค่า
                อัตลักษณ์ที่โดดเด่นแตกต่างกันไม่ว่าจะเป็น เพศ รูปร่าง สีผิว
                ใบหน้า คุณลักษณะนิสัย เชื้อชาติ ศาสนา ภาษาที่ใช้
                หรือแม้แต่สถานะทางสังคม ฯลฯ มีความงดงามเฉพาะตน
                ซึ่งเราไม่ควรใช้เพียงมาตรฐานเดียวมาเบียดทับหรือลดทอนคุณค่าผู้ที่มีความแตกต่าง
                ในทางตรงกันข้ามผู้ที่ใช้สื่อดิจิทัลอย่างมีวิจารณญาณจะมีโอกาสสูงในการเรียนรู้อยู่ร่วมกับความหลากหลายชาติพันธุ์และมุมมอง
                ซึ่งถือว่าเป็นเรื่องธรรมชาติ ดังนั้น
                การภูมิใจในอัตลักษณ์แห่งตนคือการยอมรับความเป็นตัวตนของตนเองถือเป็นพื้นฐานสำคัญในการมองเห็นคุณค่าตนเอง
                อันจะนำมาซึ่งความมั่นใจในตนเอง
                การสื่อสารตัวตนด้วยความมั่นใจภายใต้เอกลักษณ์ที่แตกต่างนี้เป็นเสน่ห์อย่างหนึ่ง
                ที่ทำให้ผู้มองหรือผู้ดูประทับใจ คนที่ลุกขึ้นมากล้าที่จะแตกต่าง
                น่าดูและน่าสนใจ ดังนั้น สิ่งสำคัญคือการยอมรับความแตกต่าง
                การเคารพคุณค่าของความเป็นมนุษย์ที่ไม่จำเป็นต้องเหมือนกัน
                และสื่อสารด้วยการชื่นชมและมองคุณค่าผู้อื่นไม่ใช่การเข้าไปทับถม
                ล้อเล่น
                หรือนำเอาปมด้อยที่สังคมกำหนดมาทำล้อเลียนผ่านสื่อสังคมออนไลน์จนทำให้บุคคลนั้นๆ
                หมดความมั่นใจในอัตลักษณ์แห่งตนเอง
                การมองและยอมรับในความแตกต่างของคนที่ไม่เท่ากัน ไม่เหมือนกัน
                ไม่ใช่ความแปลกแยกแต่คือ ความหลากหลายและเท่าเทียม
                ซึ่งคนที่ได้ชื่อว่าเป็นพลเมืองยุคดิจิทัลจำเป็นจะต้องเข้าใจและสื่อสารในทางบวกเพื่อสร้างนิเวศน์ที่ดีในโลกออนไลน์และออฟไลน์
                ในส่วนของผู้ปลอมแปลงอัตลักษณ์แห่งตนหรือบิดเบือนความจริงเพื่อใช้หลอกผู้อื่นนั้น
                ผู้ใช้สื่อก็ควรรู้เท่าทัน
                ใช้เหตุและผลมาประกอบการพิจารณามากกว่าอารมณ์ความรู้สึก
                การตรวจสอบข้อมูลจากหลากหลายก่อนที่จะหลงเชื่อแล้วต้องตกเป็นเหยื่อ
              </p>
              <br />
              <h4 class="rem2">
                4.3.2 การจัดสรรเวลาหน้าจอ (Screen time management)
              </h4>
              <p class="rem5 text-justify">
                การเป็นพลเมืองยุคดิจิทัลที่คุณภาพนั้นความสามารถในการบริหารเวลาที่ใช้อุปกรณ์ดิจิทัลในกิจกรรมต่างๆ
                ไม่ว่าจะเป็นโซเชียลมีเดีย การเล่มเกมหรืองานอื่นๆ
                ในแบบที่ควบคุมตนเองได้ถือเป็นเรื่องสำคัญอย่างมาก จากข้อมูลเรื่อง
                การบริหารจัดการเวลาบนโลกดิจิทัล
                โดยสำนักงานกองทุนสนับสนุนการสร้างเสริมสุขภาพหรือ
                สสส.จากการสำรวจพฤตกิรรมผู้ใช้ดิจิทัลทั่วโลกในปี 2561 ของ “We Are
                Social” ดิจิทัลเอเจ็นซี และ “Hootsuite”
                พบว่าประเทศไทยเป็นประเทศที่ใช้เวลาอยู่กับอินเทอร์เน็ต
                (รวมทุกอุปกรณ์) มากที่สุดในโลก โดยเฉลี่ยอยู่ที 98 ชั่วโมง 9
                ชั่วโมง 38 นาทีต่อวัน
                และหากวัดเฉพาะการใช้งานอินเทอร์เน็ตบนสมาร์ทโฟน
                ประเทศไทยยังคงเป็นประเทศที่ใช้เวลาท่องเน็ตต่อวันมากที่สุดในโลกโดยเฉลี่ยอยู่ที่
                4 ชั่วโมง 56 นาที (สุรานนท์, 2563, หน้า 3)
                จึงทำให้เรื่องการบริหารจัดการเวลาหน้าจอเป็นเรื่องสำคัญ
                ทั้งนี้ด้วยลักษณะของสื่อออนไลน์ที่เป็นแบบ anywhere anytime
                ทำให้ผู้ใช้สื่อสามารถจะใช้สื่อดิจิทัลในช่วงเวลาใดหรือที่ไหนก็ได้
                ในความเป็นจริงถือเป็นความท้าทายของพ่อแม่ผู้ปกครองหรือแม้แต่ตัวผู้ใช้สื่อเอง
                ที่จะทำอย่างไรให้สามารถควบคุมตนเองให้สนใจกับกิจกรรมตรงหน้า เช่น
                ในขณะที่เข้าชั้นเรียน
                หรือในขณะที่มีการประชุมโดยไม่ใช้สื่อออนไลน์
                โดยที่ไม่ต้องมีกฏระเบียบมาควบคุม เช่น การกำหนดเวลาในการเล่นเกม
                การยึดโทรศัพท์ในห้องเรียน
                เพราะหากผู้ใช้สามารถรับผิดชอบแยกแยะว่าสิ่งใดควรกระทำหรือไม่ควรกระทำด้วยตนเองจะเกิดผลดีในระยะยาวมากกว่าการถูกควบคุม
                ดังนั้น
                การมีหลักคิดและความรับผิดชอบต่อการใช้สื่อดิจิทัลอย่างเหมาะสม
                และสมดุลจึงมีความสำคัญมาก ทั้งนี้
                การบริหารจัดการเวลาในการใช้สื่อดิจิทัลนั้นเป็นสิ่งสำคัญที่ผู้ใช้จะต้องบริหารเวลาโดยทีไม่มีผลกระทบต่อการดำเนินชีวิตทั้งด้านสุขภาพ
                การเรียน การงาน รวมถึงความสัมพันธ์กับผู้อื่นบนโลกออฟไลน์
                รวมถึงไม่ส่งผลกระทบต่อความรับผิดชอบและมารยาทในการใช้ชีวิตร่วมกับผู้อื่น
                การดำเนินกิจกรรมต่างๆ บนโลกออฟไลน์
                พลเมืองดิจิทัลที่ดีจะต้องมีมรรยาทและความรับผิดชอบต่อการกระทำของตน
                (Digital Etiquette)
                ที่จะเป็นเครื่องมือในการย้ำเตือนสติตลอดจนการกระทำที่เหมาะสมในการสื่อสารทุกประเภท
                การใช้เทคโนโลยีสารสนเทศที่ขาดความเหมาะสมอาจส่งผลเสียต่อสุขภาพโดยรวม
                เช่น
                ความเครียดต่อสุขภาพกายและสุขภาพจิตตลอดจนการก่อให้เกิดการสูญเสียสัมพันธภาพในสังคมได้
              </p>
              <br />
              <h4 class="rem2">
                4.3.3 การรับมือกับการรังแกบนโลกไซเบอร์ (Cyberbullying
                Management)
              </h4>
              <p class="rem5 text-justify">
                ความสามารถในการรับรู้และรับมือกับการคุกคามบนโลกออนไลน์ได้อย่างชาญฉลาดและมีสติถือเป็นเรื่องสำคัญมาก
                การระรานหรือการรังแกกันบนโลกออนไลน์ คือ
                ความตั้งใจที่จะทำให้ผู้ถูกกระทำได้รับความเสียหาย
                หรือทำให้เกิดความรู้สึกแย่หรือเสียใจ
                จนกระทั่งนำไปสู่การลดทอนการมองเห็นคุณค่าในตนเอง
                โดยการกระทำดังกล่าวต้องเกิดจากความตั้งใจและต่อเนื่องโดยมีเป้าหมายเพื่อทำร้ายหรือทำให้ได้รับผลกระทบในทางลบ
                มีงานวิจัยหลายชิ้นศึกษารูปแบบพฤติกรรมการรังแกกันบนโลกออนไลน์และได้สรุปว่า
                สำหรับพฤติกรรมการรังแกกันบนโลกไซเบอร์แบ่งออกเป็น 5 ประเภท คือ
                การนินทาหรือด่าทอผู้อื่น การแอบอ้างชื่อผู้อื่น
                การนำความลับที่เป็นข้อมูลส่วนตัวของผู้อื่นไปเปิดเผย
                และการลบหรือบล็อกผู้อื่นบนโลกไซเบอร์ซึ่งมีผลมาจากจากการเหยียดในความแตกต่างหรือปมด้อยของบุคคลนั้นๆ
                (Tudkuea and Laeheem, 2014)
                โดยมันจะเกิดขึ้นในพื้นที่สังคมออนไลน์ เช่น เฟสบุ๊ก (Facebook),
                ยูทูป (YouTube), อินสตาแกรม (Instagram), ทวิตเตอร์ (Twitter)
                เป็นต้น ตัวอย่างของการกลั่นแกล้งออนไลน์ เช่น
              </p>
              <p class="rem7">
                • การโพสต์วิดีโอที่น่าอับอายของคนอื่นในบริการฝากวิดีโอ เช่น
                ยูทูบหรือเฟสบุ๊ค
              </p>
              <p class="rem7">
                •
                การส่งข้อความหรืออีเมลที่มีเนื้อหาคุกคามหรือน่ารังเกียจให้กับผู้อื่นอย่างต่อเนื่อง
              </p>
              <p class="rem7">
                •
                การโพสต์เนื้อหาที่คุกคามหรือมุ่งทำให้ผู้อื่นอับอายในโซเชียลมีเดีย
              </p>
              <p class="rem7">
                • การสร้างบัญชีในโซเชียลมีเดียสำหรับล้อเลียนคนอื่นเป็นการเฉพาะ
              </p>
              <p class="rem7">
                • การถ่ายวิดีโอการทำร้ายร่างกายผู้อื่นผ่านมือถือ
                แล้วนำไปแชร์ต่อให้คนได้เห็นซ้ำๆ
              </p>
              <p class="rem7">
                • การโพสต์หรือส่งต่อข้อมูลส่วนบุคคลของผู้อื่นโดยไม่ได้รับอนุญาต
                (โดยเฉพาะภาพที่มีเนื้อหาทางเพศของคนอื่น ดังที่เรียกว่า sexting)
              </p>
              <p class="rem7">• การส่งมัลแวร์ไปทำลายคอมพิวเตอร์ของผู้อื่น</p>

              <p class="rem5 text-justify">
                ทั้งนี้
                การรับมือต่อสถานการณ์ดังกล่าวมีหลายรูปแบบนับตั้งแต่การดำเนินคดีแก่ผู้กระทำตามพ.ร.บ.คอมพิวเตอร์
                การ block ผู้กระทำ
                ไปจนถึงการเพิกเฉยหรือไม่ให้คุณค่าและความสำคัญต่อการกระทำ
                โดยสิ่งแรกที่ต้องทำ คือ
                การตั้งสติเมื่อเผชิญกับสถานการณ์การรังแกกันบนโลกออนไลน์
                และดูระดับความเสียหายของการกระทำที่เกิด
                และจัดการปัญหาให้สอดคล้องกับบริบทของแต่ละคน อย่างไรก็ตาม
                ด้วยลักษณะของสื่อดิจิทัลที่มีความเป็น Anyone ที่ใครๆ
                สามารถเข้ามาใช้สื่อเพื่อคุกคามผู้อื่นรวมถึงอาจจะไม่มีระบุตัวตน
                (anonymous)
                ซึ่งจะทำให้บุคคลที่จะรังแกผู้อื่นสามารถใช้ช่องว่างนี้ในการกลั่นแกล้งได้
                เพราะสื่อสังคมออนไลน์สามารถแพร่กระจายข่าวสารได้อย่างรวดเร็วแบบ
                many to many
                ก็ยิ่งทำให้ระดับความรุนแรงของการรังแกเพิ่มมากขึ้นเป็นเท่าทวีคูณ
                ผู้ใช้สื่อจึงมีความจำเป็นที่จะต้องที่มีทักษะในการใช้เทคโนโลยีอย่างมีประสิทธิภาพแล้วจะต้องใฝ่รู้และให้ความสำคัญกับมาตรการเพื่อความปลอดภัยและการคุ้มครองข้อมูลส่วนบุคคลด้วย
                (Digital Security) รู้การสร้างรหัสผ่านที่มีความปลอดภัยและแข็งแรง
                (strong password)
                เพื่อป้องกันปัญหากรณีเกิดการนำข้อมูลเช่นรูปภาพไปใช้เพื่อกลั่นแกล้ง
                การตั้งระบบความปลอดภัยเพื่อคัดเลือกเพื่อนบนโลกออนไลน์
                ด้วยการตั้งค่าความเป็นส่วนตัว (privacy setting)
                เพื่อไม่ให้ข้อมูลถูกเปิดเผยทางอินเทอร์เน็ต
                การศึกษากฎหมายเกี่ยวข้องการใช้สื่อดิจิทัลเช่น พ.ร.บ.คอมพิวเตอร์
                หากการรังแกนั้นเป็นการคุกคามการดำเนินชีวิตและส่งผลกระทบต่อการเรียนหรืออาชีพการงาน
                อาจจะนำเรื่องการถูกคุกคามไปปรึกษาผู้ใหญ่ที่ไว้ใจได้ เช่น
                ผู้ปกครอง หรือครูบาอาจารย์ เพื่อร่วมกันหาทางออกที่เหมาะสมต่อไป
              </p>

              <p class="rem5 font-weight-bold">
                หากต้องเผชิญกับการกลั่นแกล้งออนไลน์ แนวทางในการรับมือมีดังนี้
              </p>
              <p class="rem7">
                • ไม่ตอบโต้หรือคิดแก้แค้น
                เพราะไม่เพียงแต่ทำให้ผู้กลั่นแกล้งได้ใจ
                แต่ยังทำให้เราไม่ต่างจากผู้ที่กลั่นแกล้งเรา
              </p>
              <p class="rem7">
                • ใช้เทคโนโลยีให้เป็นประโยชน์
                บริการในอินเทอร์เน็ตไม่ว่าจะผ่านเว็บไซต์หรือแอปพลิเคชั่น
                อนุญาตให้เราบล็อกคนที่ไม่ต้องการติดต่อได้ ถ้าไม่อยากเห็นข้อความ
                รูปภาพ หรือวิดีโอที่ทำให้คุณรู้สึกแย่
              </p>
              <p class="rem7">
                • ขอความช่วยเหลือ
                ถ้าคุณรู้สึกไม่สบายใจหรือสถานการณ์เลวร้ายลงเรื่อยๆ
                ให้ขอความช่วยเหลือจากคนที่คุณไว้ใจ แต่ถ้าสถานการณ์เลวร้ายมากขึ้น
                คุณควรปรึกษามืออาชีพ
                หรือหากการกลั่นแกล้งรุนแรงไปถึงขั้นทำร้ายร่างกายหรือการคุกคามทางเพศ
                ให้แจ้งตำรวจเพื่อดำเนินคดีกับผู้กระทำ
              </p>
              <p class="rem7">
                • เก็บหลักฐานไว้
                การกลั่นแกล้งในโลกออนไลน์นั้นช่วยให้เราเก็บรวบรวมหลักฐานการกลั่นแกล้งไว้ได้ง่าย
                เช่น การเซฟหน้าจอ เพื่อใช้ในการสืบค้นตัวตนของผู้ที่รังแก
                (กรณีที่ทำโดยไม่เปิดเผย) หรือเป็นหลักฐานในการดำเนินคดี
              </p>
              <p class="rem7">
                • อย่าอยู่เฉยถ้าเห็นผู้อื่นโดนกลั่นแกล้ง ควรให้กำลังใจ
                ให้คำปรึกษาแก่ผู้ที่ถูกรังแกและรายงานเรื่องที่พบเห็นให้ผู้ที่เกี่ยวข้อง
              </p>
              <p class="rem7">
                • รายงานการกลั่นแกล้งออนไลน์ไปยังผู้ให้บริการอินเทอร์เน็ต
                (Internet Service Provider หรือ ISP) หรือผู้ให้บริการมือถือ
                ซึ่งปัจจุบันสื่อโซเชียลมีเดียได้ติดตั้งระบบการรายงานเพื่อลดการใช้สื่อออนไลน์มาเพื่อคุกคามผู้อื่น
                (ความปลอดภัยแห่งศตวรรษที่ 21, 2561)
              </p>
              <br />
              <p class="rem5 text-justify">
                ประการสำคัญที่สุด
                ผู้ที่ถูกกลั่นแกล้งต้องฝึกจิตใจให้เข้มแข็งและเผชิญกับสถานการณ์ที่เกิดขึ้นด้วยสติ
                หากสิ่งที่นำไปเผยแพร่ไม่ใช่ความจริง
                ท่านมีสิทธิ์ในการชี้แจงต่อที่สาธารณะ
                และไม่ควรรู้สึกเสียใจหรือหมดกำลังใจในการดำเนินชีวิต
                การที่ท่านถูกระรานนั้นผู้ที่ผิดคือผู้กระทำ ที่ไม่มีความยั้งคิด
                ขาดวุฒิภาวะ และใช้ความรุนแรงมาแก้ปัญหา
                ซึ่งสะท้อนถึงสภาพพฤติกรรมและจิตใจที่ไม่มีคุณภาพของผู้กระทำ
                ซึ่งคนเหล่านั้นอาจจะมีปัญหาการมองเห็นคุณค่าในตนเองและอยากเห็นคนที่รู้สึกต่ำต้อย
                การขาดการบ่มเพาะให้มีจริยธรรมคุณธรรมที่เหมาะสม
                การขาดความเห็นอกเห็นใจต่อผู้อื่น
                ซึ่งเหล่านี้อาจจะมาจากสภาพแวดล้อม การเลี้ยงดู
                หรือสภาพครอบครัวที่ไม่สร้างพฤติกรรมเชิงบวก
                และพฤติกรรมเหล่านี้ไม่ใช้พฤติกรรมที่น่าชื่นชมหรือควรแก่การยอมรับ
                ดังนั้น ความรับผิดชอบด้วยการรู้คิดและมีจิตสำนึกที่ดี
                ความเห็นอกเห็นใจต่อผู้อื่นจึงเป็นพื้นฐานสำคัญในการลดปัญหาการรังแกและประทุษวาจาบนโลกออนไลน์ได้อีกทางหนึ่ง
                
              </p>
              <p class="rem7 text-justify">
                • การรักษาความปลอดภัยของตนเอง (Cybersecurity management)
                วิธีการเสริมสร้างความปลอดภัยในการใช้เทคโนโลยีสารสนเทศ
                ที่สามารถกระทำได้โดยง่ายมีหลากหลายวิธี เช่น
                การติดตั้งระบบป้องกันการจารกรรมและการทำลายข้อมูลให้กับอุปกรณ์การสื่อสารทุกประเภท
                ตลอดจนรู้เท่าทันต่อรูปแบบและกลอุบายของอาชญากรอิเลคทรอนิกส์ที่มักมีการพัฒนารูปแบบของการกระทำผิดอยู่เสมอ
                เป็นความสามารถในการปกป้องข้อมูลของตนเองโดยการสร้างโดยการสร้างรหัสผ่านที่ซับซ้อนเพียงพอในการเข้าถึงและการจัดการกับการคุกคามทางไซเบอร์แบบต่างๆ
                ข้อมูลส่วนตัวถือเป็นเรื่องสำคัญในด้านการใช้อินเทอร์เน็ตอย่างปลอดภัย
                วารสารสถาบันวิชาการป้องกันประเทศได้ให้คำนิยามคำว่าความมั่นคงปลอดภัยไซเบอร์
                (Cyber Security)
                คือกระบวนการหรือการกระทำทั้งหมดที่จำเป็นเพื่อทำให้องค์กรปราศจากความเสี่ยงและความเสียหายที่มีผลต่อความปลอดภัยของข้อมูลข่าวสาร
                (Information) ในทุกรูปแบบ ในทุกรูปแบบ
                รวมถึงการระวังป้องกันต่อการก่ออาชญากรรม การโจมตี การบ่อนทำลาย
                การจารกรรม และความผิดพลาดต่างๆ
                โดยคำนึงถึงองค์ประกอบพื้นฐานของความปลอดภัยขอข้อมูลหรือ CIA 3
                ประการ ได้แก่ การรักษาความลับข้อมูล (Confidentiality)
                การรักษาความคงสภาพของข้อมูลหรือความสมบูรณ์ของข้อมูล (integrity)
                และความพร้อมใช้งานของข้อมูล (Availability) (อรฉัตร, ทิพสุดา และ
                ธรรณพ, 2559) สำหรับข้อควรระวังในเรื่องข้อมูลส่วนตัว คือ
                การไม่กรอกข้อมูลส่วนตัว ไม่ว่าจะเป็นอีเมล
                หมายเลขโทรศัพท์หรือที่อยู่บนพื้นที่สังคมออนไลน์ที่สามารถเห็นได้ในที่สาธารณะ
                หรือการกรอกหรือใส่ข้อมูลอื่นใดที่สมควรเก็บไว้เป็นข้อมูลส่วนตัว
                เป็นต้น การตั้งชื่อและรหัสผ่านที่มีความปลอดภัยเข้าถึงได้ยาก
                ซึ่งปัจจุบันก็จะมีระบบความบบที่สามารถตรวจสอบความปลอดภัยของการตั้งรหัสผ่านว่ามีความเข้มแข็งเพียงพอและยากในการคาดเดา
                ตัวอย่างเช่น การตั้งรหัสควรมีความยาวอย่างน้อย 8 อักขระขึ้นไป
                หรือหลีกเลี่ยงการใช้ข้อมูลส่วนตัวที่คาดเดาได้ง่ายและไม่เป็นความลับ
                เช่น วันเกิด บ้านเลขที่ เลขผู้เสียภาษี ทะเบียนรถ เบอร์โทรศัพท์
                หรือชื่อเล่น ชื่อสัตว์เลี้ยง ชื่อโรงเรียน ชื่อทีมกีฬาทีมโปรด
                เป็นต้น
              </p>

              <br />
              <p class="rem2 font-weight-bold">
                นอกจากเทคนิคการสร้างรหัสแล้ว
                เราควรคำนึงถึงแนวทางจัดการกับรหัสผ่านดังนี้
              </p>
              <p class="rem5">
                • ไม่แชร์รหัสกับใครทั้งนั้น
                (ยกเว้นพ่อแม่หรือผู้ปกครองในกรณีที่เป็นผู้เยาว์)
              </p>
              <p class="rem5">
                • หากจำเป็นต้องจดรหัสผ่านกันลืมจริงๆ ให้เก็บไว้ในที่ปลอดภัย
                ไม่วางไว้ในตำแหน่งที่เห็นได้ง่าย เช่น
                ข้างจอคอมพิวเตอร์หรือบนโต๊ะ
              </p>
              <p class="rem5">
                • ตั้งรหัสให้แตกต่างกันในบัญชีสำคัญแต่ละบัญชี เช่น บัญชีเฟสบุ๊ค
                อีเมล ธนาคารออนไลน์
                เพราะการใช้รหัสเหมือนกันหมดในทุกบัญชีหมายความว่า
                ถ้ามีคนรู้รหัสผ่านของบริการออนไลน์หนึ่งๆ
                ก็จะสามารถเข้าถึงบริการออนไลน์อื่นๆ ที่สำคัญได้โดยปริยาย
              </p>
              <p class="rem5">
                •
                เลือกผู้ให้บริการที่น่าเชื่อถือและให้ความสำคัญกับเรื่องความปลอดภัย
                โดยเฉพาะบริการสำคัญ เช่น
                บริการด้านการเงินที่อนุญาตให้ตั้งรหัสยาวพอและรองรับการเข้ารหัส
                HTTPS
              </p>
              <p class="rem5">
                •
                ตั้งค่าแจ้งเตือนหากมีใครล็อกอินเข้าบัญชีของเราจากเครื่องที่ไม่รู้จัก
              </p>
              <p class="rem5">
                • เปลี่ยนรหัสทุกครั้งเมื่อสงสัยว่ามีกิจกรรมไม่ปกติเกิดขึ้น เช่น
                มีการเข้าสู่บัญชีของเราจากคอมพิวเตอร์หรืออุปกรณ์เคลื่อนที่ที่เราไม่คุ้นเคย
              </p>
              <p class="rem5">
                • ตั้งค่าการกู้คืนรหัสผ่าน
                บริการส่วนมากจะให้เราใส่เบอร์โทรศัพท์หรืออีเมลสำหรับส่งรหัสผ่านไปให้ใหม่หรือเพื่อรีเซ็ตรหัสผ่านใหม่
                เมื่อต้องการกู้คืนหรือเปลี่ยนรหัสผ่าน
              </p>
              <p class="rem5">
                • เปิดใช้ระบบการพิสูจน์ตัวตนที่ปลอดภัยมากขึ้น เช่น
                การพิสูจน์ตัวตนสองระดับ (two-factor authentication)
                คือระบบที่ต้องพิสูจน์ตัวตนผ่านข้อมูลสองประเภท
              </p>
              <p class="rem2">
                นอกจากนี้ยังมีการรักษาความเป็นส่วนตัวอีกมากมายหลายวิธีโดยเฉพาะในกรณีที่ต้องไปใช้สื่อดิจิทัล
                หรือใช้ wireless ในที่สาธารณะ
                การไม่ทิ้งร่องรอยของรหัสผ่านทุกประเภทบนอุปกรณ์สาธารณะ หรือการไม่
                login เข้าไปยังข้อมูลสำคัญเช่นบัญชีธนาคาร
                ในขณะที่มีการใช้อุปกรณ์ในที่สาธารณะหรือการต่ออินเทอร์เน็ตไร้สาย(wireless)
                ในที่สาธารณะ จะทำให้ลดการถูกละเมิดความปลอดภัยส่วนบุคคลได้
              </p>
              <!-- -------------------------------- -->
              <br />
              <br />
              <br />
              <br />
              <div class="container">
                <div class="row">
                  <div class="col-auto mr-auto">
                    <router-link to="/lesson4_1" title="Lesson4_1 Page">
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
                    <router-link to="/lesson4_3" title="Lesson4_3 Page">
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
              <div class="text-center mt-5">Page 2/3</div>
            </div>
          </div>
        </div>
      </section>

      <hr />
      <div class="col-lg-center">
        <div class="pt-4 text-center">
          <h5 class="title">
            <span class="d-block mb-1">Author | Dr.Sujittra Kaewseenuald</span>
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
      },
    };
  },
};
</script>

<style></style>
