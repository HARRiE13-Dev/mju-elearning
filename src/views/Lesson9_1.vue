<template>
  <div>
    <div class="position-relative">
      <section
        class="fontx section section-lg section-shaped overflow-hidden my-0"
      >
        <div class="shape shape-style-1 shape-default shape-skew">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div class="container py-0 pb-lg">
          <div class="row justify-content-between align-items-center">
            <div class="col-lg-5 mb-5 mb-lg-0">
              <h1 class="text-white font-weight-light display-1">
                Technology Trending
              </h1>
              <p class="lead text-white mt-4">
                Internet of Things (IOT) คือ การที่อุปกรณ์อิเล็กทรอนิกส์ต่าง ๆ
                สามารถเชื่อมโยงหรือส่งข้อมูลถึงกันได้ด้วยอินเทอร์เน็ต...
              </p>
            </div>
            <div class="col-lg-6 mb-lg-auto">
              <div
                class="rounded shadow-lg overflow-hidden transform-perspective-right"
              >
                <b-carousel id="carousel1" controls indicators>
                  <!-- Text slides with image -->
                  <b-carousel-slide
                    img-src="img/lesson9/cov.jpg"
                  ></b-carousel-slide>
                </b-carousel>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
       
      </section>

      <section class="section section-shaped my-0 overflow-hidden">
        <div class="container pb-80">
          <div class="row justify-content-center">
            <div class="fontx col-lg-10">
             
              <h2 class="display-3 text-center">
                9. ความรู้พื้นฐานด้านเทคโนโลยีดิจิทัลสมัยใหม่
              </h2>
              <br />
              <br />
              <h4>Internet of Things หรือ IOT คืออะไร</h4>
              <p class="rem2 text-justify">
                Internet of Things (IOT) คือ การที่อุปกรณ์อิเล็กทรอนิกส์ต่าง ๆ
                สามารถเชื่อมโยงหรือส่งข้อมูลถึงกันได้ด้วยอินเทอร์เน็ต
                โดยไม่ต้องป้อนข้อมูล
                การเชื่อมโยงนี้ง่ายจนทำให้เราสามารถสั่งการควบคุมการใช้งานอุปกรณ์อิเล็กทรอนิกส์ต่าง
                ๆ ผ่านทางเครือข่ายอินเตอร์เน็ตได้
                ไปจนถึงการเชื่อมโยงการใช้งานอุปกรณ์อิเล็กทรอนิกส์ต่าง ๆ
                ผ่านทางเครือข่ายอินเตอร์เน็ตเข้ากับการใช้งานอื่น ๆ
                จนเกิดเป็นบรรดา Smart ต่าง ๆ ได้แก่ Smart Device, Smart Grid,
                Smart Home, Smart Network, Smart Intelligent Transportation
                ทั้งหลายที่เราเคยได้ยินนั่นเอง
                ซึ่งแตกต่างจากในอดีตที่อุปกรณ์อิเล็กทรอนิกส์เป็นเพียงสื่อกลางในการส่งและแสดงข้อมูลเท่านั้น
              </p>
              <p class="rem2 text-justify">
                กล่าวได้ว่า Internet of Things
                นี้ได้แก่การเชื่อมโยงของอุปกรณ์อัจฉริยะทั้งหลายผ่านอินเทอร์เน็ตที่เรานึกออก
                เช่น แอปพลิเคชัน แว่นตากูเกิ้ลกลาส
                รองเท้าวิ่งที่สามารถเชื่อมต่อข้อมูลการวิ่ง ทั้งความเร็ว ระยะทาง
                สถานที่ และสถิติได้
              </p>
              <br />
              <h4>แนวคิด Internet of Things</h4>
              <p class="rem2 text-justify">
                เดิมมาจาก Kevin Ashton บิดาแห่ง Internet of Things ในปี 1999
                ในขณะที่ทำงานวิจัยอยู่ที่มหาวิทยาลัย Massachusetts Institute of
                Technology หรือ MIT
                เขาได้ถูกเชิญให้ไปบรรยายเรื่องนี้ให้กับบริษัท Procter & Gamble
                (P&G) เขาได้นำเสนอโครงการที่ชื่อว่า Auto-ID Center
                ต่อยอดมาจากเทคโนโลยี RFID
                ที่ในขณะนั้นถือเป็นมาตรฐานโลกสำหรับการจับสัญญาณเซ็นเซอร์ต่าง ๆ (
                RFID Sensors)
                ว่าตัวเซ็นเซอร์เหล่านั้นสามารถทำให้มันพูดคุยเชื่อมต่อกันได้ผ่านระบบ
                Auto-ID ของเขา โดยการบรรยายให้กับ P&G ในครั้งนั้น Kevin
                ก็ได้ใช้คำว่า Internet of Things
                ในสไลด์การบรรยายของเขาเป็นครั้งแรก โดย Kevin
                นิยามเอาไว้ตอนนั้นว่าอุปกรณ์อิเล็กทรอนิกส์ใด ๆ
                ก็ตามที่สามารถสื่อสารกันได้ก็ถือเป็น “internet-like”
              </p>
              <br />
              <div
                class="text-center font-italic col"
                @click="modals.modal1 = true"
              >
                <img src="/img/lesson9/1.png" width="60%" />
                <p>
                  <br />รูปที่ 1. บทสัมภาษณ์ เควิน อัสตัน เกี่ยวกับเรื่อง IOT
                </p>
              </div>
              <modal :show.sync="modals.modal1">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 1. บทสัมภาษณ์ เควิน อัสตัน เกี่ยวกับเรื่อง IOT
                </h6>
                <img src="/img/lesson9/1.png" width="100%" />
              </modal>
              <br />
              <p class="rem2 text-justify">
                ต่อมาในยุคหลังปี 2000
                มีอุปกรณ์อิเล็กทรอนิกส์ถูกผลิตออกจัดจำหน่ายเป็นจำนวนมากทั่วโลก
                จึงเริ่มมีการใช้คำว่า Smart ซึ่งในที่นี่คือ Smart Device, Smart
                Grid, Smart Home, Smart Network, Smart Intelligent
                Transportation ต่าง ๆ เหล่านี้ ล้วนถูกฝัง RFID Sensors
                เสมือนกับการเติม ID และสมอง
                ทำให้มันสามารถเชื่อมต่อกับโลกอินเตอร์เน็ตได้
                ซึ่งการเชื่อมต่อเหล่านั้นเองก็เลยมาเป็นแนวคิดที่ว่าอุปกรณ์เหล่านั้นก็ย่อมสามารถสื่อสารกันได้ด้วยเช่นกัน
                โดยอาศัยตัว Sensor ในการสื่อสารถึงกัน นั่นแปลว่านอกจาก Smart
                Device ต่าง ๆ จะเชื่อมต่ออินเตอร์เน็ตได้แล้ว
                ยังสามารถเชื่อมต่อไปยังอุปกรณ์ตัวอื่นได้ด้วย
              </p>
              <br />
              <h4>Internet of Things และ Big Data สัมพันธ์กันอย่างไร</h4>
              <p class="rem2 text-justify">
                ปัจจุบัน Internet of Things
                สามารถตอบสนองความต้องการทางด้านการใช้งานของเราได้มากขึ้น
                สาเหตุเพราะอุปกรณ์อิเล็กทรอนิกส์ต่าง ๆ มีราคาถูกลง
                ทำให้เกิดการใช้งานจริงมากขึ้น มีการค้นพบ Use Case ใหม่ ๆ
                ในธุรกิจ ทำให้ผู้ผลิตได้เรียนรู้และคอยแก้โจทย์
                เพื่อเพิ่มประสิทธิภาพให้ตรงใจผู้ใช้ ก่อให้เกิดนวัตกรรมใหม่ ๆ
                ยิ่งไปกว่านั้น Internet of Things มีการเชื่อมโยงกันอย่างเป็นระบบ
                เราจึงเริ่มเห็นธุรกิจที่หันมาให้ความสนใจ Internet of Things
                ในแง่ที่มันสามารถช่วยแก้ปัญหาทางธุรกิจ ทางสังคม
                และช่วยแก้ไขปัญหาชีวิตประจำวันได้ โดยการนำเอาข้อมูลหรือ Big Data
                เข้ามาใช้ในการพัฒนาเพื่อตอบสนองความต้องการของแต่ละรูปแบบ
                ถึงตรงนี้แล้วคงจะสงสัยใช่ไหมคะว่า Big data เกี่ยวข้องอย่างไรกับ
                Internet of Things
              </p>
              <br />
              <div
                class="text-center font-italic col"
                @click="modals.modal2 = true"
              >
                <img src="/img/lesson9/2.png" width="60%" />
                <p><br />รูปที่ 2. IOT กับ Big data</p>
              </div>
              <modal :show.sync="modals.modal2">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 2. IOT กับ Big data
                </h6>
                <img src="/img/lesson9/2.png" width="100%" />
              </modal>
              <br />
              <div class="rem2 text-justify">
                Big Data คือ ข้อมูลขนาดมหาศาลที่เกิดขึ้น ไม่มีโครงสร้างชัดเจน
                หนึ่งในตัวอย่างที่เราจะเห็นได้ง่ายคือข้อมูลจากยุคโซเชียล
                ผู้ใช้เป็นคนสร้างขึ้นมา ซึ่งนอกจากเนื้อหาในโลกออนไลน์แล้ว
                ยังมีข้อมูลอีกประเภทหนึ่งคือ ข้อมูลจากอุปกรณ์ที่เราใช้หรือสวมใส่
                เช่น สายรัดวัดชีพจรตอนออกกำลังกาย ตัวอย่างเช่น
                แบรนด์ไนกี้ตั้งโจทย์ขึ้นมาว่า
                เราจะรู้ได้อย่างไรว่าลูกค้าซื้อรองเท้าแล้วนำไปใส่วิ่งจริง
                แต่ตอนนี้พิสูจน์ได้แล้วเพราะว่าไนกี้ใช้ IOT กับสินค้าของเขา
                ยิ่งไปกว่านั้นตอนนี้ลูกค้าไม่ได้ผลิตข้อมูลที่นำไปสู่ Big Data
                จากการโพสต์ คอมเมนต์ กดไลค์ หรือแชร์เพียงอย่างเดียว
                แต่เกิดจากกิจกรรมในไลฟ์สไตล์ที่ธุรกิจหรือแบรนด์นำไปจับคู่กับสินค้า
                แล้วสร้างเป็นเนื้อหาที่โดนใจผู้รับสารขึ้นมา สิ่งสำคัญคือ
                ข้อมูลพวกนี้บอกว่ามีอะไรเกิดขึ้นได้อย่างเดียว สิ่งสำคัญกว่าคือ
                ธุรกิจ องค์กร และแบรนด์ต่าง ๆ
                จะเปลี่ยนข้อมูลพวกนี้เป็นประโยชน์ได้อย่างไร
                ทำอย่างไรข้อมูลจึงจะสามารถบอกได้ว่า <b>"ทำไมสิ่งต่าง ๆ
                เหล่านั้นถึงเกิดขึ้น"</b> 
                จุดนี้จึงทำให้เรารู้จักความต้องการที่แท้จริงของผู้บริโภค
                (Consumer Insight)
                และรู้ว่าต้องทำอย่างไรให้ธุรกิจหรือบริการของเราจะมีประสิทธิภาพยิ่งขึ้น
              </div>
              <br />
              <h4>ประโยชน์และความเสี่ยง</h4>
              <p class="rem2 text-justify">
                เทคโนโลยี Internet of Things
                มีประโยชน์ในหลายด้านทั้งเรื่องการเก็บข้อมูลที่แม่นยำและเป็นปัจจุบัน
                ช่วยลดต้นทุน แถมยังช่วยเพิ่มผลผลิตของพนักงานหรือผู้ใช้งานได้
                แม้ว่าแนวโน้มของ IOT
                มีแต่จะเพิ่มขึ้นด้วยคุณประโยชน์ตามที่ได้กล่าวมาแล้ว
                แต่ประโยชน์ใด ๆ นั้นก็มาพร้อมกับความเสี่ยง
                เพราะความท้าทายในการรักษาความปลอดภัยของเครือข่ายใหม่ที่เกิดขึ้นนั้น
                จะผลักดันให้ผู้เชี่ยวชาญมีการรับมือทางด้านความปลอดภัยมากขึ้น
                ในทางตรงกันข้ามแฮกเกอร์หรือผู้ไม่หวังดีก็ทำงานหนักเพื่อที่จะเข้าควบคุม
                โจมตีเครือข่าย หรือเรียกค่าไถ่ในช่องโหว่ที่ IOT มีอยู่
                ฉะนั้นผู้เชี่ยวชาญด้านความปลอดภัยทาง IOT
                จึงจำเป็นต้องพัฒนามาตรการ และระบบรักษาความปลอดภัยไอทีควบคู่กันไป
                เพื่อให้ธุรกิจและการใช้งาน IOT สามารถขับเคลื่อนต่อไปได้
              </p>
              <br />
              <br />
              <h3 class="text-center">
                ปัญญาประดิษฐ์ (Artificial Intelligence)
              </h3>
              <br />
              <p class="rem2 text-justify">
                ปัญญาประดิษฐ์ (AI : Artificial Intelligence) คือเครื่องจักร
                (machine) ที่มีฟังก์ชันทีมีความสามารถในการทำความเข้าใจ
                เรียนรู้องค์ความรู้ต่าง ๆ อาทิเช่น การรับรู้ การเรียนรู้
                การให้เหตุผล และการแก้ปัญหาต่าง ๆ
                เครื่องจักรที่มีความสามารถเหล่านี้ก็ถือว่าเป็น ปัญญาประดิษฐ์ (AI
                : Artificial Intelligence) นั่นเอง
              </p>
              <p class="rem2 text-justify">
                เพราะฉะนั้นจึงสามารถกล่าวได้ว่า AI
                ถือกำเนิดขึ้นเมื่อเครื่องจักรมีความสามารถที่จะเรียนรู้นั่นเอง
                ซึ่ง AI ก็ถูกแบ่งออกเป็นหลายระดับตามความสามารถหรือความฉลาด
                โดยจะวัดจากความสามารถในการ ให้เหตุผล การพูด และทัศนคติของ AI
                ตัวนั้น ๆ เมื่อเปรียบเทียบกับมนุษย์อย่างเรา ๆ
              </p>
              <br />
              <h4>AI ถูกจำแนกเป็น 3 ระดับตามความสามารถหรือความฉลาดดังนี้</h4>
              <p class="rem2 text-justify">
                1) ปัญญาประดิษฐ์เชิงแคบ (Narrow AI) หรือ ปัญญาประดิษฐ์แบบอ่อน
                (Weak AI) : คือ AI
                ที่มีความสามารถเฉพาะทางได้ดีกว่ามนุษย์(เป็นที่มาของคำว่า
                Narrow(แคบ) ก็คือ AI ที่เก่งในเรื่องแคบ ๆ
                หรือเรื่องเฉพาะทางนั่นเอง) อาทิ เช่น AI
                ที่ช่วยในการผ่าตัด(AI-assisted robotic surgery)
                ที่อาจจะเชี่ยวชาญเรื่องการผ่าตัดกว่าคุณหมอยุคปัจจุบัน
                แต่แน่นอนว่า AI ตัวนี้ไม่สามารถที่จะทำอาหาร ร้องเพลง
                หรือทำสิ่งอื่นที่นอกเหนือจากการผ่าตัดได้นั่นเอง
                ซึ่งผลงานวิจัยด้าน AI ณ ปัจจุบัน ยังอยู่ที่ระดับนี้
              </p>
              <p class="rem2 text-justify">
                2) ปัญญาประดิษฐ์ทั่วไป (General AI) : คือ AI
                ที่มีความสามารถระดับเดียวกับมนุษย์ สามารถทำทุก ๆ
                อย่างที่มนุษย์ทำได้และได้ประสิทธิภาพที่ใกล้เคียงกับมนุษย์
              </p>
              <div class="rem2 text-justify">
                3) ปัญญาประดิษฐ์แบบเข้ม (Strong AI) : คือ AI
                ที่มีความสามารถเหนือมนุษย์ในหลาย ๆ ด้าน
                จะเห็นได้ว่าวิทยาการของมนุษย์ปัจจุบันอยู่ที่จุดเริ่มต้นของ AI
                เพียงเท่านั้น ปัจจุบัน ได้มีการนำ AI มาใช้ในอุตสาหกรรมจำนวนมาก
                โดย <b>"แมคคินเซย์แอนด์คอมแพนี (McKinsey & Company)"</b> 
                (บริษัทที่ปรึกษาด้านการบริหารชั้นนำของโลก ) ได้กล่าวไว้ว่า<b>" AI
                มีศักยภาพในการทำเงินได้ถึง 600 ล้านดอลล่าร์สหรัฐในการขายปลีก
                สร้างรายได้มากขึ้น 50
                เปอร์เซ็นต์ในการธนาคารเมื่อเทียบกับการใช้เทคนิควิเคราะห์แบบอื่น
                ๆ และสร้างรายได้มากกว่า 89 เปอร์เซ็นต์ ในการขนส่งและคมนาคม "</b> 
              </div>
              <div class="rem2 text-justify">
                ยิ่งไปกว่านั้น หากฝ่ายการตลาดขององค์กรต่าง ๆ หันมาใช่ AI
                จะเป็นการเพิ่มศักยภาพให้กับการทำงานด้านการตลาดอย่างมาก เพราะว่า
                AI สามารถที่จะทำงานที่ซ้ำซากได้อย่างอัตโนมัติ
                ส่งผลให้ตัวแทนจำหน่าย สามารถที่จะโฟกัสไปที่การสนทนากับลูกค้า
                อาทิเช่น บริษัทนามว่า<b>" Gong "</b> มีบริการที่เรียกว่า<b>"conversation
                intelligence"</b> , โดยทุก ๆ
                ครั้งที่ตัวแทนจำหน่ายต่อสายคุยโทรศัพท์กับลูกค้า
                AIจะทำหน้าที่ในการบันทึกเสียงและวิเคราะห์ลูกค้าในขณะเดียวกัน
                มันสามารถแนะนำได้ว่าลูกค้าต้องการอะไร ควรจะคุยแบบไหน
                ถือเป็นการซื้อใจลูกค้าอย่างหนึ่ง
              </div>
              <p class="rem2 text-justify">
                โดยสรุป ปัญญาประดิษฐ์หรือ AI
                เป็นเทคโนโลยีที่ล้ำสมัยที่สามารถรับมือกับปัญหาที่ซับซ้อนเกินกว่าที่มนุษย์จะสามารถรับมือได้
                และ AI
                ยังเป็นเครื่องมือที่สามารถทำงานที่ซ้ำซากน่าเบื่อแทนมนุษย์ได้อย่างดีเยี่ยม
                ช่วยให้เราสามารถมีเวลาไปโฟกัสงานที่สำคัญและสามารถสร้างมูลค่าได้มากกว่า
                นอกจากนี้การประยุกต์ใช้ AI ในระดับอุตสาหกรรม
                ยังช่วยลดต้นทุนและเพิ่มรายได้มหาศาล
              </p>

              <br />
              <h4>ประวัติย่อของ AI</h4>
              <p class="rem2 text-justify">
                AI เป็นคำยอดฮิตที่ปัจจุบัน
                แม้ว่ามันไม่มันจะไม่ใช่คำที่เพิ่งถูกบัญญัติขึ้นมาใหม่แต่อย่างใด
                ในปี 1956 , กลุ่มของผู้เชี่ยวชาญแนวหน้าจากหลาย ๆ
                วงการได้ร่วมกันทำงานวิจัยเกี่ยวกับ AI มีผู้นำทีมได้แก่ John
                McCarthy (Dartmouth College), Marvin Minsky (Harvard
                University), Nathaniel Rochester (IBM) และ Claude Shannon (Bell
                Telephone Laboratories) โดยมีจุดประสงค์หลักของงานวิจัย คือ
                การค้นหามุมมองและหลักการต่าง ๆ
                ที่ใช้การเรียนรู้อย่างครอบคลุมเพื่อที่จะนำมาประยุกต์ใช้ให้เครื่องจักรสามารถเรียนรู้ได้เช่นกัน
                โดยมีเนื้อหาของโครงการมีดังนี้
              </p>
              <p class="rem5">1.) คอมพิวเตอร์อัตโนมัติ (Automatic Computers)</p>
              <p class="rem5">
                2.)
                จะสามารถเขียนโปรแกรมคอมพิวเตอร์โดยใช้ภาษาคอมพิวเตอร์ได้อย่างไร (
                How Can a Computer Be Programmed to Use a Language?)
              </p>
              <p class="rem5">3.) โครงข่ายประสาทเทียม (Neural Networks)</p>
              <p class="rem5">4.) การพัฒนาด้วยตนเอง (Self-improvement)</p>
              <p class="rem2 text-justify">
                องค์ความรู้เหล่านี้เป็นองค์ความรู้พื้นฐานที่ทำให้คอมพิวเตอร์มีความฉลาดมากขึ้น
                และยังทำให้ความคิดที่จะการสร้าง AI มีความเป็นไปได้มากยิ่งขึ้น
                ชนิดของ AI (Type of Artificial Intelligence) AI ถูกแบ่งออกเป็น 3
                sub field ได้แก่
              </p>
              <p class="rem7">1) ปัญญาประดิษฐ์ (Artificial Intelligence)</p>
              <p class="rem7">2) การเรียนรู้ของเครื่อง (Machine learning)</p>
              <p class="rem7">3) การเรียนรู้เชิงลึก(Deep Learning)</p>
              <br />
              <div
                class="text-center font-italic col"
                @click="modals.modal3 = true"
              >
                <img src="/img/lesson9/3.png" width="60%" />
                <p><br />รูปที่ 3. ชนิดของ AI</p>
              </div>
              <modal :show.sync="modals.modal3">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 3. ชนิดของ AI
                </h6>
                <img src="/img/lesson9/3.png" width="100%" />
              </modal>
              <br />
              <br />
              <hr />
              <h3 class="text-center">Machine Learning</h3>
              <br />
              <p class="rem2 text-justify">
                ศาสตร์ของการศึกษา วิธีการคิด (Algorithm) ที่ใช้ในการเรียนรู้
                (learn) จากตัวอย่าง (example) และ ประสบการณ์ (experience)
                โดยมีพื้นฐานมาจากหลักการที่เชื่อว่า
                ทุกสิ่งอย่างมีรูปแบบหรือแบบแผน (pattern)
                ที่สามารถบ่งบอกความเป็นไปของสิ่งนั้น ๆ
                ซึ่งเราสามารถที่จะนำแบบแผนนี้
                มาประยุกต์ใช้เพื่อทำการทำนายถึงความเป็นไปในอนาคตได้ 
                (prediction) อาทิเช่น การใช้ machine learning ในการทำนายราคาหุ้นในอนาคต
                จากข้อมูลกราฟในอดีตและปัจจุบัน
              </p>
              <p class="rem2 text-justify">
                Deep Learning เป็นซับเซตของ Machine Learning โดย Deep Learning
                นั้นไม่ได้หมายความว่า มันคือการทำความเข้าใจองค์ความรู้
                (knowledge) ในเชิงลึก แต่หมายถึงการที่เครื่องจักร
                (machine) ใช้หลาย ๆ เลเยอร์ (layer) ที่แตกต่างกัน
                ในการทำความเข้าใจหรือเรียนรู้ข้อมูล
                โดยความซับซ้อนของโมเดล (model) ก็แปรผันตามจำนวนของเลเยอร์ (layer)
                ยกตัวอย่างเช่น บริษัทกูเกิ้ล ใช้ LeNet model
                ในการวิเคราะห์และทำความเข้าใจภาพ (Image recognition)
                โดยมีการใช้เลเยอร์ทั้งหมด 22 เลเยอร์ โดยใน Deep learning
                จะมีเฟสของการเรียนรู้ (learning phase) ที่ถูกสร้างขึ้นโดย Neural
                Network ซึ่งอาจเรียกได้ว่าเป็นสถาปัตยกรรมของ layer ที่แต่ละ
                layer ซ้อนทับกันอยู่ (stack)
              </p>
              <br />
              <h5>Machine learning มีรูปแบบการเรียนรู้ที่แบบหลัก ๆ 3 รูปแบบ</h5>
              <p class="rem2 text-justify">
                1. การเรียนรู้แบบได้รับคำแนะนำ (Supervised learning)
                เวลาเราป้อนข้อมูลให้กับคอมพิวเตอร์ (Input) เช่น รูปเสือ
                แต่คอมพิวเตอร์มันยังไม่รู้ว่าคือรูปเสือ เราต้องบอกมันก่อน
                แล้วคอมพิวเตอร์มันก็จะไปวิเคราะห์ (Feature Extraction) ว่า
                เสือเป็นสัตว์ 4 ขา มี 2 หู 1 หาง เป็นต้น
                จากนั้นคอมพิวเตอร์ก็นำข้อมูลดังกล่าวไปประมวล/จัดหมวดหมู่
                (Classification)
                เพื่อให้หลังจากนี้มันสามารถแยกออกได้ว่าอะไรคือเสือ
                อะไรไม่ใช่เสือ
              </p>
              <p class="rem2 text-justify">
                2. การเรียนรู้แบบไม่ได้รับคำแนะนำ (Unsupervised learning)
                รูปแบบนี้เรียกได้ว่าตรงกันข้ามกับรูปแบบแรกเลย
                มันคือการที่เราป้อนข้อมูล (Input) รูปเสือเข้าไป
                แต่ไม่ได้บอกมันว่ารูปที่ป้อนเข้าไปเป็นรูปเสือ
                ทีนี้พอคอมพิวเตอร์มันเอาไปวิเคราะห์ (Feature Extraction)
                มันก็วิเคราะห์ได้นะว่ารูปที่ใส่เข้าไปมีลักษณะยังไง
                แต่คราวนี้มันไม่สามารถเอาไปประมวล/จัดหมวดหมู่ (Classification)
                ได้แล้ว มันจะใช้วิธีการแบ่งกลุ่มแทน (Clustering)
                ซึ่งคอมพิวเตอร์มันก็จะเอารูปเสือไปอยู่กับแมว สุนัข หรือสัตว์อื่น
                ๆ ที่มี 4 ขา มี 2 หู 1 หาง เหมือนกัน
              </p>
              <p class="rem2 text-justify">
                3. การเรียนรู้แปบเสริมกำลัง (Reinforcement learning)
                คือการที่เรากำหนดเงื่อนไขบางอย่างให้กับคอมพิวเตอร์
                แล้วทำให้คอมพิวเตอร์เอาชนะหรือทำตามเงื่อนไขนั้นให้ได้
                ยกตัวอย่างเช่น Alpha Go เงื่อนไขของการหมากล้อมคือ
                ใช้หมากของตนล้อมพื้นที่บนกระดาน
                เพื่อให้ได้ดินแดนมากกว่าคู่ต่อสู้ ทีนี้ Alpha Go
                ก็จะเรียนรู้ด้วยตัวมันเองผ่านการจำลองการแข่งขันเป็นแสนๆ ล้านๆ
                รอบ เพื่อให้รู้ว่า ถ้าหากคู่ต่อสู้เดินหมากนี้
                ตัวมันเองจะเดินหมากไหนเพื่อให้บรรลุเงื่อนไขที่กำหนดไว้ให้
                นั่นคือการยึดพื้นที่บนกระดานให้ได้มากที่สุด
              </p>
              <br />
              <h4>AI vs. Machine Learning</h4>
              <div class="rem2 text-justify">
                ในปัจจุบัน อุปกรณ์ (device) ที่เราใช้ในชีวิตประจำวัน
                ไม่ว่าจะเป็นสมาร์ทโฟน หรือ
                แม้กระทั้งอินเทอร์เน็ตก็มีการประยุกต์ใช้ AI ในหลายครั้ง ๆ
                เวลาที่บริษัทใหญ่ ๆ
                จะประกาศให้โลกรับรู้ถึงนวัตกรรมใหม่สุดของพวกเขา
                พวกเขามักจะใช้คำว่า AI หรือ machine learning
                เสมือนว่ามันเป็นคำที่ใช้แทนกันได้ แต่อันที่จริงเเล้ว AI กับ
                machine learning นั้นมีข้อแตกต่างกันบางประการ <b>" AI- artificial
                intelligence คือ วิทยาศาสตร์ของการฝึกฝน (train) เครื่องจักร
                (machine) โดยมีจุดประสงค์เพื่อแก้ไขปัญหาของมนุษย์ "</b>
                ถูกนิยามเมื่อ 1950s
                เมื่อเหล่านักวิทยาศาสตร์เริ่มให้ความสนใจกับปัญหาที่ว่า
                คอมพิวเตอร์สามารถแก้ไขปัญหาด้วยตัวเองอย่างไร (how computers
                could solve problems on their own.)
              </div>
              <br />
              <div
                class="text-center font-italic col"
                @click="modals.modal4 = true"
              >
                <img src="/img/lesson9/4.png" width="60%" />
                <p><br />รูปที่ 4. ภาพอธิบายข้อแตกต่างระหว่างมนุษย์และ AI</p>
              </div>
              <modal :show.sync="modals.modal4">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 4. ภาพอธิบายข้อแตกต่างระหว่างมนุษย์และ AI
                </h6>
                <img src="/img/lesson9/4.png" width="100%" />
              </modal>
              <br />
              <p class="rem2 text-justify">
                ถ้าจะให้อธิบายอย่างง่าย ๆ AI ก็คือ
                คอมพิวเตอร์ที่มีคุณสมบัติและความสามารถคล้ายมนุษย์อีกทั้งยังสามารถทำงานได้อย่างลงตัว
                (seamlessly) หรือ อาจเรียกได้ว่า AI ก็คือ
                วิทยาศาสตร์ของการเลียนแบบทักษะของมนุษย์
              </p>
              <p class="rem2 text-justify">
                Machine learning เป็นเพียงซับเซ็ตของ AI ที่จะเจาะจงไปที่การฝึกฝน
                (train) เครื่องจักร (machine) โดย machine ก็จะพยายามหารูปแบบ
                (pattern) ต่าง ๆ ของข้อมูลขาเข้า (input data)
                ที่ถูกใส่เข้ามาเพื่อในการ train กล่าวโดยสรุป
                เราไม่จำเป็นต้องเขียนโปรแกรมหรือสร้าง model ขึ้นมาเอง
                สิ่งที่เราต้องทำก็ให้ข้อมูลหรือตัวอย่างกับตัว machine เพราะว่า
                machine จะพยายามสร้าง model ที่ใช้วิเคราะห์ pattern
                ของข้อมูลที่ได้จากการ train โดยตัวของมันเอง เป็นที่มาของคำว่า
                machine learning นั่นเอง
              </p>

            
              <br />
              <br />
              <br />
              <br />
              <div class="container">
                <div class="row">
                  <div class="col-auto mr-auto">
                    <router-link to="/lesson8_1" title="Lesson7_1 Page">
                      <div class="btn-wrapper">
                        <base-button
                          tag="a"
                          target="_blank"
                          rel="noopener noreferrer"
                          class="mb-3 mb-sm-0"
                          outline
                          type="info"
                          icon="fa fa-chevron-left"
                          >บทเรียนที่ 8</base-button
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
                    <router-link to="/lesson9_2" title="Lesson9_2 Page">
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
              <div class="text-center mt-5">Page 1/8</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Author -->
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
import { BCarousel } from "bootstrap-vue/esm/components/carousel/carousel";
import { BCarouselSlide } from "bootstrap-vue/esm/components/carousel/carousel-slide";
import Modal from "@/components/Modal.vue";
export default {
  name: "home",
  components: {
    BCarousel,
    BCarouselSlide,
    Modal,
  },
  data() {
    return {
      modals: {
        modal1: false,
        modal2: false,
        modal3: false,
        modal4: false,
      },
    };
  },
};
</script>
