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
              <h4>แล้ว AI ถูกใช้ที่ไหนบ้าง</h4>
              <br />
              <p class="rem2 text-justify">
                ปัจจุบัน ได้มีการนำ AI มาประยุกต์ใช้อย่างกว้างขวาง อาทิเช่น
                การนำเอา AI ไปประยุกต์ใช้ในงานที่ซ้ำซ้อน ยกตัวอย่างเช่น AI
                ในกระบวนการผลิตต่าง ๆ ซึ่งเป็นงานต้องใช้ความประณีต และ
                ทำเหมือนเดิมตลอดเวลจนกว่าจะมีการเปลี่ยนแปลงกระบวนการผลิต การนำ
                AI มาประยุกต์ใช้จะช่วยเพิ่มผลผลิต และ ยังลดความผิดพลาดในการผลิต
                เพราะว่า AI
                ไม่จำเป็นต้องพักและไม่มีความรู้สึกเหนื่อยล้าอีกทั้งยังไม่มีความรู้สึกเบื่อหน่ายต่องานที่ทำ
              </p>
              <p class="rem2 text-justify">
                การนำเอา AI มาพัฒนาผลิตภัณฑ์ (product) ที่มีอยู่แล้ว
                ก่อนจะถึงยุคของ machine learning , product
                มักจะอยู่ในรูปแบบของโค้ดแต่เพียงอย่างเดียว อยากได้อะไร
                มีฟังก์ชันแบบไหน ก็ต้องลงมือทำขึ้นมาเองทั้งสิ้น ( hard-code rule
                ) ลองนึกถึง Facebook สมัยก่อน ที่เวลาเราอัปโหลดรูปภาพ
                เราต้องเสียเวลามานั่งแท็กเพื่อนทีละคน ๆ แต่ปัจจุบัน Facebook มี
                AI ที่ช่วยในการแท็กรูปได้อย่างอัตโนมัติ
              </p>
              <p class="rem2 text-justify">
                ปัจจุบัน AI ได้ถูกนำมาประยุกต์ใช้ในเกือบทุกอุตสาหกรรม
                ตั้งแต่ระดับการตลาด (marketing) ไปถึงระดับห่วงโซ่อุปทาน (supply
                chain ) , การเงิน (finance) , การกระบวนการทำอาหาร
                (food-processing sector) จากผลสำรวจของบริษัท McKinsey พบว่า
                การให้บริการให้การเงิน (financial services)
                และการสื่อสารด้วยเทคโนโลยีล้ำสมัย ( high tech communication )
                เป็นด้านที่มีการใช้ AI เป็นระดับแนวหน้า เมื่อเทียบกับด้านอื่น ๆ
              </p>
              <br />
              <div
                class="text-center font-italic col"
                @click="modals.modal1 = true"
              >
                <img src="/img/lesson9/5.png" width="60%" />
                <p><br />รูปที่ 5 กราฟทำนายความเป็นไปได้ของ AI</p>
              </div>
              <modal :show.sync="modals.modal1">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 5. กราฟทำนายความเป็นไปได้ของ AI
                </h6>
                <img src="/img/lesson9/5.png" width="60%" />
              </modal>

              <br />
              <h4>ทำไม AI ถึงเป็นเทรนด์ที่มาแรงในปัจจุบัน</h4>
              <br />
              <div
                class="text-center font-italic col"
                @click="modals.modal2 = true"
              >
                <img src="/img/lesson9/6.png" width="60%" />
                <p><br />รูปที่ 6 ภาพเปรียบเทียบระหว่างยุค ของ AI</p>
              </div>
              <modal :show.sync="modals.modal2">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 6. ภาพเปรียบเทียบระหว่างยุค ของ AI
                </h6>
                <img src="/img/lesson9/6.png" width="100%" />
              </modal>

              <br />
              <p class="rem2">
                Neural network องค์ความรู้ที่เกิดขึ้นตั้งเเต่ปี 1990s
                จากผลงานวิจัยของคุณ Yann LeCun แต่อย่างไรก็ตาม Neural network
                ก็เพิ่งมาเป็นที่นิยมเมื่อปี 2012
              </p>
              <p class="rem5">1 ) Hardware</p>
              <p class="rem5">2) Data</p>
              <p class="rem5">3) Algorithm</p>
              <p class="rem2 text-justify">
                Machine learning นั้นก็เป็นศาสตร์แห่งการทดลองและลงมือทำศาสตร์
                เราจำเป็นต้องหาข้อมูล และวิธีการต่างๆ จำนวนมากเพื่อมาทำการ train
                หลังจากที่กระแสการใช้งานอินเทอร์เน็ตถูกแพร่หลาย ข้อมูลต่างๆ ก็สามารถเข้าถึงได้ง่ายขึ้น นอกจากนี้เรื่อง CPU หรือ GPU
                ที่ใช้ในการประมวลผลก็สำคัญในการใช้ train และ test model ต่างๆ
                ซึ่งปัจจุบันก็มี GPU gaming ที่มีสเปกที่สูง
                วางขายอยู่ตามร้านค้าทั่วไปอีกต่างหาก เช่น GPU gaming ของ NVIDIA
                และ AMD
              </p>
              <br />
              <h4>Hardware</h4>
              <p class="rem2 text-justify">
                ตลอด 20 ปีที่ผ่านมา CPU ของเราสามารถ train deep-learning model
                ที่เป็น model ขนาดเล็ก ๆ ผ่าน laptop ก็จริง แต่อย่างไรก็ตาม
                มันไม่เพียงพอต่อการประมวลผลของ deep-learning model ที่ใช้สำหรับ
                computer vision หรือ deep learning
                ซึ่งต้องยกความดีความชอบแก่ผู้ผลิต GPU อย่าง NVIDIA และ AMD
                ที่สร้าง GPU รุ่นใหม่ที่สามารถทำการคำนวณหรือประมวลผลแบบคูขนานได้
                ( parallel computation )
                ซึ่งสามารถช่วยในการยกระดับความเร็วในการประมวลผลอย่างมาก
              </p>
              <p class="rem2 text-justify">
                ตัวอย่างเช่น NVIDIA TITAN X ใช้เวลาเพียง 2 วันในการ train model
                ImageNet ซึ่ง CPU แบบดั่งเดิมใช้เวลาถึงหลายสัปดาห์
                นอกเหนือจากนี้ บริษัทใหญ่ ๆ หลายบริษัทเลือกที่จะใช้ cluster of
                GPU ในการ train deep learning model โดยใช้เป็น NVIDIA Tesla K80
                เพราะว่าจะช่วยลดต้นทุนในการดูแลรักษาศูนย์ข้อมูล (data center )
                อีกทั้งยังได้ประสิทธิภาพที่ดียิ่งขึ้น
              </p>
              <br />
              <h4>Data</h4>
              <p class="rem2 text-justify">
                ถ้าเปรียบ Neural network เป็นรถยนต์ model นั้นๆ ข้อมูล (data)
                ก็เปรียบเสมือนน้ำมันของ model ที่สามารถทำให้มันขับเคลื่อนได้
                ปราศจากน้ำมัน (data) รถยนต์ (model) ก็ไม่สามารถทำอะไรได้เลย
                ปัจจุบันเทคโนโลยีใหม่ ๆ ได้ทำลายขีดจำกัดของการเก็บข้อมูลแบบเดิม
                ๆ เราไม่จำเป็นต้องเก็บข้อมูลขนาดใหญ่ ๆ ไว้ที่ data center
                อีกต่อไป
              </p>
              <p class="rem2 text-justify">
                การปฏิวัติอินเทอร์เน็ต (Internet revolution)
                ทำให้สามารถที่จะเก็บและแจกจ่ายข้อมูลแหล่งข้อมูลมากมายเพื่อนำข้อมูลมาเข้า
                machine learning algorithm
                ถ้าคุณมีประสบการณ์กับแอปพลิเคชันที่เกี่ยวข้องกับการจัดการรูปภาพอย่าง
                Flickr หรือ Instagram คุณคงจะได้เห็นศักยภาพของ AI มาบ้าง
                เพราะว่า
                แอปพลิเคชันเหล่านี้ต้องจัดการกับการรูปภาพที่สามารถแท็กได้เป็นหลาย
                ๆ ล้านรูป ซึ่งรูป ๆ เหล่านี้ก็สามารถถูกนำมาใช้ในการ train model
                เพื่อทำการรับรู้และแยกแยะ (recognize) วัตถุต่าง ๆ บนรูป
                ปราศจากการนำข้อมูลมาจัดเก็บก่อนแบบ
              </p>
              <br />
              <div
                class="text-center font-italic col"
                @click="modals.modal3 = true"
              >
                <img src="/img/lesson9/7.png" width="60%" />
                <p><br />รูปที่ 7 Big Data</p>
              </div>
              <modal :show.sync="modals.modal3">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 7 Big Data
                </h6>
                <img src="/img/lesson9/7.png" width="100%" />
              </modal>

              <br />
              <h4>Algorithm</h4>
              <p class="rem2 text-justify">
                ถึงแม้ว่า hardware จะมีประสิทธิภาพดีกว่าเดิมหลายเท่าตัว
                และข้อมูลก็สามารถเข้าถึงได้ง่าย อย่างไรก็ตาม machine learning
                algorithm ก็ยังเป็นสิ่งที่ต้องให้ความสำคัญอย่างมาก
                ทำไมถึงเป็นเช่นนั้น ? ลองภาพนึกถึง กระบวนการคิดหรือ algorithm
                ที่ผิดตั้งแต่การใช้ตรรกะ หรือ algorithm
                ที่ทำงานแบบซ้ำซ้อนจนเกินไป ต่อให้เรามีข้อมูลหรือ hardware
                ที่ทรงพลังมากแค่ไหน ก็คงสร้าง model ที่มีความแม่นยำสูงๆ ไม่ได้
                โดย algorithm ของ neural network
                ที่ถูกพัฒนาให้แม่นยำมากยิ่งขึ้นนี่แหละเป็นหนึ่งในเหตุผลที่ทำให้
                neural network ได้รับการยอมรับ
              </p>
              <p class="rem2 text-justify">
                ยกตัวอย่าง algorithm ที่มีการใช้ใน AI อย่างแพร่หลายในปัจจุบัน
                เช่น progressive learning algorithm เป็น algorithm
                ที่ทำให้คอมพิวเตอร์เรียนรู้อยู่ตลอดเวลา
                ซึ่งจะช่วยในการรับมือกับปัญหาต่าง ๆ ได้อย่างดี เช่น
                การหาข้อผิดพลาดของระบบ และ การสร้าง chatbot
                ที่สามารถโต้ตอบกับเราได้ราวกับว่าคุยกับคนจริงๆ
                (เพราะมันเรียนรู้วิธีการโต้ตอบมาจากผู้คนที่เคย chat
                กับมันในอดีต)
              </p>
              <br />
              <h4 class="font-italic">สรุป</h4>
              <p class="rem2 font-italic text-justify">
                Artificial intelligence กับ machine learning เป็น 2
                คำที่ทำให้คุณอาจสับสนได้ในตอนแรก
                แต่เราคาดหวังว่าเมื่อคุณได้ทำความเข้าใจเนื้อหาของบทความ
                คุณจะสามารถแยกแยะ 2 คำนี้ออกจากกันได้ Artificial intelligence
                (AI) เป็นวิทยาศาสตร์ในการฝึกฝนเครื่องจักร( train machine
                )ให้มีทักษะคล้ายคลึงกับมนุษย์ โดยวิธีในการ train machine
                ก็มีอยู่หลากหลายวิธีการเช่นกัน ในยุคเริ่มต้นของ AI
                เราใช้วิธีการที่เรียกว่า hard-coded programs หรือ
                การเขียนโค้ดที่เป็นตรรกะทุกสิ่งอย่างที่คาดว่า machine
                จะเผชิญกับมัน
                (ให้ลองนึกภาพถึงหุ่นยนต์ที่ถูกเขียนโปรแกรมมาด้วยการใช้ if-else
                condition เป็นหลักพัน condition
                แน่นอนว่าหุ่นยนต์อาจจะสามารถทำงานได้อย่างดีภายใต้คำสั่งนั้นๆ
                แต่เมื่อ ระบบมีความซับซ้อนมากขึ้น หรือ
                เราอยากจะเพิ่มเติมฟังก์ชันไหน
                ถึงตอนนั้นเราจะสามารถทำได้อย่างยากลำบาก
                เพราะต้องจัดการกับโค้ดจำนวนมาก ) เพื่อที่จะแก้ปัญหานี้
                จึงเกิดเป็นไอเดียของ machine learning หรือก็คือให้ machine
                เรียนรู้หรือปรับตัว (train)
                ให้เข้ากับข้อมูลหรือสภาพแวดล้อมที่ได้รับ (input data ) และ
                feature ที่สำคัญที่สุดที่จะนำมาซึ่ง AI ที่มีประสิทธิภาพ
                คือการมีข้อมูลที่เพียงพ่อต่อการ train ยกตัวอย่างเช่น AI
                สามารถเรียนรู้ได้หลากหลายภาษาตราบใดที่มีคำศัพท์ที่เพียงพอที่จะนำมา
                train
              </p>
              <p class="rem2 font-italic text-justify">
                นอกจากนี้ AI
                ยังเป็นเทคโนโลยีที่ล้ำสมัยที่มีนักลงทุนจำนวนมากยอมที่จะเสี่ยงวางเงินหลักหลายล้านดอลลาร์ในการลงทุนใน
                startup หรือ project ที่เกี่ยวข้องกับ AI อีกทั้ง McKinsey
                ได้ทำการประเมินว่า AI จะทำการขับเคลื่อนทุกๆ
                อุตสาหกรรมให้เติบโตในอัตรา 10 - 99 เปอร์เซ็นต์ เป็นอย่างน้อย
              </p>
              <br />
              <h4 class="display-4">Machine Learning</h4>
              <p class="rem2 text-justify">
                Machine Learning
                คือระบบที่สามารถเรียนรู้ได้จากตัวอย่างด้วยตนเองโดยปราศจากการป้อนคำสั่งของโปรแกรมเมอร์
                ความก้าวหน้าในครั้งนี้มาพร้อมกับความคิดที่ว่าเครื่องคอมพิวเตอร์สามารถเรียนรู้เพียงแค่จากข้อมูลอย่างเดียวเพื่อที่จะผลิตผลลัพธ์ที่แม่นยำออกมาได้
              </p>
              <p class="rem2 text-justify">
                Machine Learning
                ประกอบได้ด้วยข้อมูลและเครื่องมือทางสถิติเพื่อทำนาบผลลัพธ์ออกมา
                ผลลัพธ์ในที่นี้ถูกใช้เพื่อทำประโยชน์กับภายในองค์กรเชิงลึกต่อไป
                Machine Learning เกี่ยวข้องอย่างมากกับ การทำเหมืองข้อมูล (Data
                mining) และ โมเดลการทำนายของ Bayes (Bayesian predictive models)
                เครื่องคอมพิวเตอร์จะรับข้อมูลเข้ามาและใช้อัลกอริทึมเพื่อหาคำตอบขึ้น
              </p>
              <p class="rem2 text-justify">
                งานของ Machine Learning
                โดยทั่วไปจะเป็นการคอยสนับสนุนด้านการแนะนำ (provide a
                recommendation ) สำหรับคนที่เป็นสมาชิกของ Netflix
                ทุกคำแนะนำหนังหรือซีรีย์ต่างๆ
                ขึ้นอยู่กับข้อมูลในการเข้าชมของผู้ใช้ที่ผ่านมา
                บริษัทเทคโนโลยีกำลังใช้วิธี การเรียนรู้แบบไม่มีผู้สอน
                (Unsupervised Learning)
                เพื่อปรับปรุงตามประสบการณ์ของผู้ใช้และการแนะนำส่วนบุคคล
              </p> 
              <p class="rem2 text-justify">
                Machine Learning ยังถูกใช้กับงานหลากหลายด้าน เช่น
                การตรวจจับการฉ้อโกง (Fraud detection),
                การพยากรณ์เพื่อปรับปรุงแก้ไข (Predictive Maintenance) ,
                การเพิ่มประสิทธิภาพในการถือหุ้น (Portfolio optimization) ,
                การทำงานอัตโนมัติ และอื่นๆ
              </p>
              <br />
              <h5>
                ความแตกต่างระหว่าง Machine Learning และการเขียนโปรแกรมสมัยก่อน
              </h5>
              <p class="rem2 text-justify">
                การเขียนโปรแกรมสมัยก่อนแตกต่างอย่างมากกับ Machine Learning
                การเขียนโปรแกรมในสมัยก่อนนั้นโค้ดทั้งหมดจะต้องถูกกำหนดแนวทางไว้ชัดเจนด้วยกฎจากผู้เชี่ยวชาญเพียงคนเดียวในอุตสาหกรรมนั้นที่ซอฟต์แวร์จะถูกพัฒนาขึ้น
                โดยแต่ละกฎจะขึ้นอยู่กับพื้นฐานความเข้าใจด้านตรรกศาสตร์ (Logic
                Foundation) เครื่องจะทำงานและส่งผลลัพธ์ออกมาตามคำสั่งตามตรรกะ
                (Logical statement) เมื่อระบบเริ่มซับซ้อนมากขึ้น
                ยิ่งจำเป็นต้องมีกฎมากขึ้นที่ถูกเขียนขึ้น
                แต่การบำรุงรักษาระบบจะไม่เสถียร
              </p>
              <p class="rem2 text-justify">
                Machine Learning ควรจะเอาชนะวิธีการเขียนโปรแกรมแบบสมัยก่อนได้
                เครื่อง (machine)
                จะเรียนรู้ว่าข้อมูลขาเข้าและข้อมูลขาออกเกี่ยวข้องกับอย่างไรและรู้ว่าจะเขียนกฎซักกฎหนึ่งขึ้นมาอย่างไร
                โปรแกรมเมอร์ไม่จำเป็นต้องเขียนกฎใหม่ทุกครั้งที่มีข้อมูลใหม่
                อัลกอริทึมจะปรับเข้ากับข้อมูลใหม่เพื่อปรับปรุงประสิทธิภาพในเวลาต่อมา
              </p>
              <p class="rem2 text-justify">
                การปฏิวัติอินเทอร์เน็ต (Internet revolution )
                ทำให้สามารถที่จะเก็บและแจกจ่ายข้อมูลแหล่งข้อมูลมากมายเพื่อนำข้อมูลมาเข้า
                machine learning algorithm
                ถ้าคุณมีประสบการณ์กับแอปพลิเคชันที่เกี่ยวข้องกับการจัดการรูปภาพอย่าง
                Flickr หรือ Instagram คุณคงจะได้เห็นศักยภาพของ AI มาบ้าง
                เพราะว่า
                แอปพลิเคชันเหล่านี้ต้องจัดการกับการรูปภาพที่สามารถแท็กได้เป็นหลาย
                ๆ ล้านรูป ซึ่งรูป ๆ เหล่านี้ก็สามารถถูกนำมาใช้ในการ train model
                เพื่อทำการรับรู้และแยกแยะ (recognize) วัตถุต่าง ๆ บนรูป
                ปราศจากการนำข้อมูลมาจัดเก็บก่อนแบบ
              </p>
              <br />
              <div
                class="text-center font-italic col"
                @click="modals.modal4 = true"
              >
                <img src="/img/lesson9/8.png" width="60%" />
                <p><br />รูปที่ 8 การทำงานของ Machine Learning</p>
              </div>
              <modal :show.sync="modals.modal4">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 8 การทำงานของ Machine Learning
                </h6>
                <img src="/img/lesson9/8.png" width="100%" />
              </modal>

              <br />
              <h5>Machine Learning ทำงานอย่างไร?</h5>
              <p class="rem2 text-justify">
                Machine Learning คือสมองที่การเรียนรู้ทั้งหมดเกิดขึ้น วิธีที่
                machine เรียนรู้เหมือนกับมนุษย์ มนุษย์เรียนรู้จากประสบการณ์
                ยิ่งพวกเรารู้มาก ยิ่งง่ายต่อการพยากรณ์ว่าสิ่งต่อไปอะไรจะเกิดขึ้น
                โดยเปรียบเทียบ เมื่อพวกเราประสบกับเหตุการณ์ที่ไม่เคยเจอมาก่อน
                มีความเป็นไปได้ที่คามสำเร็จจะลดลงกว่าเหตุการณ์ที่เคยเจอมาแล้ว
                machine สามารถถูก ฝึก(train) ได้ในรูปแบบเดียวกัน
                เพื่อที่จะเพิ่มความแม่นยำในการพยากรณ์ machine
                สามารถมองเห็นตัวอย่างที่เราต้องการให้เห็นได้
                เมื่อพวกเราให้ตัวอย่างที่เหมือนกันให้ machine ดู
                มันสามารถค้นหาผลลัพธ์นั้นจนพบได้ อย่างไรก็ตามเหมือนกับมนุษย์ ถ้า
                machine ถูกสั่งให้ค้นหาในสิ่งที่ไม่เคยถูก train มาก่อน
                มันก็ยังยากที่จะสามารถค้นพบสิ่งนั้นได้
              </p>
              <p class="rem2 text-justify">
                วัตถุประสงค์หลักของ Machine Learning คือ การเรียนรู้ (learning)
                และการอนุมาน (inference) สิ่งแรกคือ machine
                จะเรียนรู้ผ่านการค้นพบรูปแบบหรือแบบแผนซ้ำๆ เดิมๆ
                การค้นพบต้องขอบคุณถึงการมีอยู่ข้อมูล (data)
                ส่วนหนึ่งที่สำคัญของนักวิทยาศาสตร์ข้อมูล (data scientist)
                จะเป็นการเลือกอย่างระมัดระวังว่าข้อมูลไหนสนับสนุนกับเครื่อง
                คุณสมบัติต่างๆ ที่ถูกใช้เพื่อแก้ปัญหาถูกเรียกว่า feature vector
                คุณสามารถนึกถึง feature vector
                ว่าเป็นซับเซ็ตย่อยของข้อมูลทั้งหมดที่ถูกใช้ในการแก้ปัญหา
              </p>
              <p class="rem2 text-justify">
                บางครั้ง machine ใช้อัลกอริทึมแปลกๆ
                เพื่อทำให้ง่ายต่อชีวิตจริงและดัดแปลงสิ่งที่ค้นพบให้กลายเป็นโมเดล(model)
                ดังนั้น ขั้นของเรียนรู้ (learning stage)
                นั้นถูกใช้เพื่อที่จะอธิบายเกี่ยวกับข้อมูลและรวบรวมให้มันกลายเป็น
                model ขึ้น
              </p>
              <br />
              <div
                class="text-center font-italic col"
                @click="modals.modal5 = true"
              >
                <img src="/img/lesson9/9.png" width="60%" />
                <p>
                  <br />รูปที่ 9 Machine Learning กับการวิเคราะห์การลงทุนในระบบ
                </p>
              </div>
              <modal :show.sync="modals.modal5">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 9 Machine Learning กับการวิเคราะห์การลงทุนในระบบ
                </h6>
                <img src="/img/lesson9/9.png" width="100%" />
              </modal>

              <br />
              <p class="rem2 text-justify">
                ยกตัวอย่างเช่น machine
                พยายามที่จะเข้าใจความสัมพันธ์ระหว่างค่าจ้างและโอกาสที่จะเข้าไปรับประทานอาหารที่ภัตตาคารที่แปลกตา
                ผลที่ได้คือ machine
                ตามหาความสัมพันธ์เชิงบวกระหว่างค่าจ้างและการไปรับประทานอาหารที่ภัตตาคารหรูๆ
                แทน และนี่แหละคือ model
              </p>
              <br />

              <h5>การอนุมาน</h5>
              <p class="rem2 text-justify">
                เมื่อ model ถูกสร้างขึ้นมา
                เป็นไปได้ว่ามันจะถูกทดสอบถูกสมรรถนะของมันกับข้อมูลที่ไม่เคยพบเจอมาก่อน
                โดยข้อมูลที่แปลกตาเหล่านั้นถูกแปลงให้กลายเป็น feature vector
                และถูกรวบรวมให้กลายเป็น model และ ทำการพยากรณ์ออกมาได้
                นี่แหละคือส่วนที่สวยงามของ Machine learning
                ไม่จำเป็นต้องเพิ่มเติมกฎใดๆ ลงไปหรือ train สิ่งใดๆ
                เพิ่มเติมเข้าไปใน model คุณสามารถใช้ model ก่อนหน้านี้ train
                เพื่อทำการอนุมานข้อมูลใหม่ๆ ต่อไปได้
              </p>
              <br />
              <h5>
                หน้าที่ของโปรแกรม Machine learning
                คือการเดินต่อไปข้างหน้าและถูกสรุปได้ตามขั้นตอน
              </h5>
              <p class="rem2">1. นิยามคำถาม (Define a question)</p>
              <p class="rem2">2. เก็บข้อมูล (Collect data)</p>
              <p class="rem2">3. แสดงผลข้อมูล (Visualize data)</p>
              <p class="rem2">4. ขัดเกลาอัลกอริทึม (Train algorithm)</p>
              <p class="rem2">5. ทดสอบอัลกอริทึม (Test algorithm)</p>
              <p class="rem2">6. เก็บข้อมูลข้อเสนอแนะ (Collect feedback)</p>
              <p class="rem2">7. ปรับปรุงอัลกอริทึม (Refine the algorithm)</p>
              <p class="rem5 text-justify">
                ทำข้อ 4.-7. วนไปจนกระทั่งได้ผลลัพธ์ที่พึงพอใจ Loop 4-7 until the
                results are satisfying ใช้ model ในการพยากรณ์ (Use the model to
                make a prediction)
                ถ้าถึงจุดที่อัลกอริทึมนั้นดีพอแล้วจนเกิดข้อสรุปที่ถูกต้องแล้ว
                ให้ลองเอามันและความรู้ไปประยุกต์ใช้กับข้อมูลชุดใหม่ๆ ดู
              </p>

              <h5>
                อัลกอริทึมของ Machine Learning และจุดที่ควรใช้งาน Machine
                Learning
              </h5>
              <br />
              <div
                class="text-center font-italic col"
                @click="modals.modal6 = true"
              >
                <img src="/img/lesson9/10.png" width="60%" />
                <p><br />รูปที่ 10. Algorithm ของ Machine Learning</p>
              </div>
              <modal :show.sync="modals.modal6">
                <h6 slot="header" class="modal-title" id="modal-title-default">
                  รูปที่ 10. Algorithm ของ Machine Learning
                </h6>
                <img src="/img/lesson9/10.png" width="100%" />
              </modal>

              <!-- -------------------------------- -->
              <br />
              <br />
              <br />
              <br />
              <div class="container">
                <div class="row">
                  <div class="col-auto mr-auto">
                    <router-link to="/lesson9_1" title="Lesson9_1 Page">
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
                    <router-link to="/lesson9_3" title="Lesson9_3 Page">
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
              <div class="text-center mt-5">Page 2/8</div>
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
