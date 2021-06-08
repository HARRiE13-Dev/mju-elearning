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
              <p class="font-weight-bold">กรณีที่ 2 AND operator</p>
              <br />
              <div class="text-center font-italic col">
                <img src="/img/lesson5/g6.png" width="60%" />
                <p><br />รูป จากเว็บไซต์ Google</p>
              </div>
              <br />
              <div class="text-center font-italic col">
                <img src="/img/lesson5/b6.png" width="60%" />
                <p><br />รูป จากเว็บไซต์ Bing</p>
              </div>
              <br />
              <div class="text-center font-italic col">
                <img src="/img/lesson5/y6.png" width="60%" />
                <p><br />รูป จากเว็บไซต์ Yahoo</p>
              </div>
              <br />
              <p class="rem2">
                ในกรณีแบบที่ 2 AND operator เมื่อค้นหาโดยการพิมพ์ว่า “selling
                AND retailing” ซึ่งผลการค้นหาจะคืนค่าข้อมูลที่เกี่ยวกับคำว่า
                selling หรือ retailing โดยปรากฏทั้งสองคำในเว็บเดียวกัน
              </p>
              <p class="rem5">
                • Search a Specific Site การค้นหาเจาะจงเว็บไซต์ โดยการพิมพ์คำว่า
                site: ตามด้วย URL ของเว็บไซต์ที่ต้องการค้นหา เช่น
                site:www.mju.ac.th "information technology"
                ซึ่งจะแสดงผลเฉพาะเว็บไซต์ที่ปรากฏคำค้นหา
                เฉพาะภายในเว็บไซต์ของมหาวิทยาลัยแม่โจ้เท่านั้น
              </p>

              <br />
              <div class="text-center font-italic col">
                <img src="/img/lesson5/g7.png" width="60%" />
                <p><br />รูป จากเว็บไซต์ Google</p>
              </div>
              <br />
              <div class="text-center font-italic col">
                <img src="/img/lesson5/b7.png" width="60%" />
                <p><br />รูป จากเว็บไซต์ Bing</p>
              </div>
              <br />
              <div class="text-center font-italic col">
                <img src="/img/lesson5/y7.png" width="60%" />
                <p><br />รูป จากเว็บไซต์ Yahoo</p>
              </div>
              <br />
              <p class="rem2">
                เมื่อค้นหาโดยการเจาะจงเว็บไซต์ โดยการพิมพ์ว่า
                “site:www.mju.ac.th "information
                technology"”จะแสดงผลเฉพาะเว็บไซต์ของมหาวิทยาลัยแม่โจ้
                และจะพบคำที่ค้นหาในเว็บไซต์ คือ information technology
              </p>
              <p class="rem5">
                • Finding Related Sites การค้นหาจากเว็บไซต์ที่เกี่ยวข้อง
                โดยการพิมพ์คำว่า related: ตามด้วยเว็บไซต์ที่เรารู้จัก เช่น
                related:www.mju.ac.th “information technology”
                ซึ่งจะแสดงผลเว็บตามคำที่ต้องการค้นหา
                และมีความเหมือนกับเว็บไซต์ของมหาวิทยาลัยแม่โจ้
              </p>

              <br />
              <div class="text-center font-italic col">
                <img src="/img/lesson5/g9.png" width="60%" />
                <p><br />รูป จากเว็บไซต์ Google</p>
              </div>
              <br />
              <div class="text-center font-italic col">
                <img src="/img/lesson5/b8.png" width="60%" />
                <p><br />รูป จากเว็บไซต์ Bing</p>
              </div>
              <br />
              <div class="text-center font-italic col">
                <img src="/img/lesson5/y9.png" width="60%" />
                <p><br />รูป จากเว็บไซต์ Yahoo</p>
              </div>
              <br />
              <p class="rem2">
                เมื่อค้นหาจากเว็บไซต์ที่เกี่ยวข้อง โดยการพิมพ์ว่า
                “related:www.mju.ac.th “information
                technology””จะแสดงผลเว็บไซต์ของมหาวิทยาลัยแม่โจ้
                และมหาวิทยาลัยขอนแก่น เป็นต้น จะพบคำที่ค้นหาในเว็บไซต์ คือ
                information technology ในส่วนของเว็บไซต์ Bing
                ไม่สนับสนุนในการใช้ Finding Related Sites
              </p>
              <p class="rem2">
                เทคนิคที่ 7 การค้นหาเฉพาะไฟล์ที่ต้องการเท่านั้น โดยการระบุคำสั่ง
                filetype: ต่อท้ายคำที่ต้องการค้นหา เช่น คู่มือการสร้างเว็บไซต์
                filetype:pdf
                จากสูตรนี้เราสามารถเลือกประเภทไฟล์ที่ต้องการดาวน์โหลดไปใช้งานได้ไม่ว่าจะเป็น
                pdf, docs, pptx และ xlsx ซึ่ง Google
                จะแสดงผลลัพธ์เกี่ยวข้องกับคำที่อยากค้นหา
                เฉพาะประเภทไฟล์ที่เราต้องการ
              </p>
              <p class="rem2">
                เทคนิคที่ 8 หลีกเลี่ยงหลุมพรางการค้นหา
                ในปัจจุบันการค้นหาข้อมูลออนไลน์
                สิ่งที่สำคัญคือพึงระลึกไว้ว่าหลายบริษัท ในขณะนี้มีการจ้างพนักงาน
                เพื่อปรับปรุงการค้นหาข้อมูลทางออนไลน์
                โดยการปรับแต่งเว็บไซต์อย่างต่อเนื่องเพื่อให้ตรงกับคำหลักที่ใช้ในการค้นหาบ่อยที่สุด
                ซึ่งกระบวนการที่เรียกว่า Search Engine Optimization (SEO)
                จะทำให้เว็บไซต์ของบริษัทตนเองแสดงผลในการค้นหาเป็นอันดับต้น ๆ
                ซึ่งเว็บไซต์ที่แสดงผลในอันดับแรก หรืออันดับต้น ๆ
                ของการค้นหาอาจจะเกิดจากการสร้าง SEO ที่ดีมาก ๆ ก็เป็นได้
                โดยที่อาจจะไม่จำเป็นต้องเป็นข้อมูลที่ดีที่สุดสำหรับการค้นหานั้น
                ๆ ถึงแม้ว่าเราจะระบุคำค้นหาที่ดีที่แล้วก็ตาม
                ดังนั้นจำเป็นต้องตรวจสอบข้อมูลของแหล่งที่มา
                ผู้เขียนหรือเจ้าของข้อมูลก่อนการนำมาใช้งาน
                โดยเจ้าของข้อมูลควรเป็นผู้ที่เชี่ยวชาญในด้านนั้น ๆ
                หรือเป็นสถาบันการศึกษา องค์กรวิชาชีพ หรือสำนักข่าวที่น่าเชื่อถือ
                อีกสิ่งหนึ่งที่จำเป็นต้องระมัดระวังคือเว็บไซต์ที่มีการซื้อโฆษณา
                ซึ่งสามารถแสดงผลในอันดับต้น ๆ ของการค้นหา
                เช่นกันโดยบริษัทเหล่านี้มีวัตถุประสงค์เพื่อประชาสัมพันธ์บริษัท
                หรือขายสินค้าโดยเฉพาะ
              </p><br>

              <h4>การอ้างอิงข้อมูลจากอินเทอร์เน็ต</h4>
              <p class="rem2 font-weight-bold">รูปแบบการอ้างอิงข้อมูล</p>
              <p class="rem5">
                วิธีการเขียนบรรณานุกรม
                เพื่ออ้างอิงข้อมูลจากอินเทอร์เน็ตสามารถเขียนได้หลากหลายรูปแบบตามมาตรฐานการเขียนบรรณานุกรม
                การอ้างอิงทางบรรณานุกรม หมายถึง รายการเอกสาร สิ่งพิมพ์
                หรือสื่ออื่นใด
                ที่ผู้ผลิตผลงานทางวิชาการใช้อ้างอิงในเอกสารผลงานของตน
                การแสดงรายการทางบรรณานุกรมไว้ที่ผลงานของตนเองจึงนับเป็นการให้ความเคารพผลงานทางปัญญาที่ผู้อื่นได้แสดงไว้
                และไม่เป็นการละเมิดสิทธิ์คนอื่นด้วย
                การอ้างอิงข้อมูลจากอินเทอร์เน็ต สามารถทำได้หลายรูปแบบ
                หลักสำคัญในการเลือกรูปแบบคือ
                การเลือกใช้รูปแบบที่เป็นที่นิยมในแต่ละสาขาวิชา หรือสถาบัน
                การเลือกใช้รูปแบบใดรูปแบบหนึ่งนั้น
                ผู้เลือกใช้ต้องเลือกใช้เพียงแบบใดแบบหนึ่งเท่านั้น
                ไม่ควรนำรูปแบบใดรูปแบบหนึ่งมาผสม หรือประยุกต์ใช้ปนกัน
              </p>
              <p class="rem5">
                รูปแบบการอ้างอิงข้อมูล หรือบรรณานุกรมที่เป็นสากล
                หรือนิยมใช้กันทั่วไป
                ซึ่งสามารถตัดสินใจเลือกโดยพิจารณาจากสาขาวิชาที่ท่านสังกัดอยู่เป็นแนวทาง
                เช่น
              </p>
              <p class="rem7">
                1) APA (American Psychological Association)
                เป็นรูปแบบการลงรายการทางบรรณานุกรมที่เป็นที่นิยมใช้ในสาขาวิชา
                จิตวิทยา การศึกษา และสาขาสังคมศาสตร์อื่น ๆ
              </p>
              <p class="rem7">
                2) AMA (American Medical Association)
                เป็นรูปแบบการลงรายการทางบรรณานุกรมที่เป็นที่นิยมใช้ในสาขาวิชาแพทยศาสตร์
                สาธารณสุขศาสตร์ และวิทยาศาสตร์ โดยเฉพาะทางชีววิทยา
              </p>
              <p class="rem7">
                3) Chicago
                เป็นรูปแบบการลงรายการทางบรรณานุกรมที่เป็นที่นิยมใช้ในทุกสาขาวิชา
                นิยมใช้ในการลงรายการหนังสือ นิตยสาร หนังสือพิมพ์
                และเอกสารที่อ้างอิงเป็นเอกสารที่ไม่เป็นวิชาการมากนัก
              </p>
              <p class="rem7">
                4) MLA (Modern Language Association) หรือ
                เป็นรูปแบบการลงรายการทางบรรณานุกรมที่เป็นที่นิยมใช้ในสาขาวิชา
                วรรณกรรม ศิลปะ และสาขามนุษยศาสตร์
              </p>
              <p class="rem7">
                5) Turabian
                เป็นรูปแบบการลงรายการทางบรรณานุกรมที่เป็นที่นิยมใช้ในสาขาวิชาทั่วไปในระดับวิทยาลัย/มหาวิทยาลัย
              </p>
              <p class="rem7">
                6) Vancouver
                เป็นรูปแบบการลงรายการทางบรรณานุกรมที่นิยมใช้ในสาขาวิทยาศาสตร์และการแพทย์
              </p>
              <br />
              <p class="font-weight-bold">
                ตัวอย่างการอ้างอิงข้อมูลที่อยู่บนเว็บไซต์ในรูปแบบของ APA 6th
                Referencing Style
              </p>
              <p class="rem2">รูปแบบการอ้างอิงสำหรับเว็บไซต์</p>
              <div class="text-center font-italic col">
                <img src="/img/lesson5/ref.png" width="90%" />
              </div>
              <br /><br />
              <p class="font-weight-bold rem2">
                • กรณีอ้างอิงข้อมูลจากหน้าเว็บเพจ
              </p>
              <p class="rem5">(กรณีปกติ)</p>

              <p class="rem5">
                Sayan, U. (2019). How to reference website in APA style.
                Retrieved February 2, 2020
              </p>
              <p class="rem7">from http://www.itsci.mju.ac.th/sayan/apa.html</p>
              <p class="rem5">
                สายัณห์ อุ่นนันกาศ. วิธีการอ้างอิงข้อมูลจากเว็บไซต์ในรูปแบบ APA.
              </p>
              <p class="rem7">
                สืบค้นเมื่อ 2 กุมภาพันธ์ 2563 จาก
                http://www.itsci.mju.ac.th/sayan/apa.html
              </p>
              <br />
              <p class="rem5">
                (กรณีที่ไม่มีวันที่เผยแพร่ ให้ระบุ n.d. [no date])
              </p>
              <p class="rem5">
                Sayan, U. (n.d.). How to reference website in APA style.
                Retrieved February 2, 2020
              </p>
              <p class="rem7">from http://www.itsci.mju.ac.th/sayan/apa.html</p>
              <br />
              <p class="rem5">
                (กรณีที่ไม่ทราบผู้แต่ง ให้ขึ้นต้นด้วยชื่อเรื่อง
                และตามด้วยปีที่เผยแพร่)
              </p>
              <p class="rem5">
                How to reference website in APA style. (2019). Retrieved
                February 2, 2020 from
              </p>
              <p class="rem7">http://www.itsci.mju.ac.th/sayan/apa.html</p>
              <br />
              <p class="rem5">
                (กรณีที่เป็นสำนักข่าวจากเว็บไซต์ จะระบุ [Press release]
                หลังจากชื่อหัวข้อข่าว)
              </p>
              <p class="rem5">
                Cable News Network. (2020). China cautiously returns to work as
                Wuhan coronavirus
              </p>
              <p class="rem7">
                death toll tops 900 worldwide [Press release]. Retrieved from
              </p>
              <p class="rem7">
                https://edition.cnn.com/2020/02/09/asia/wuhan-coronavirus-update-intl-
              </p>
              <p class="rem7">hnk/index.html</p>
              <br />
              <p class="font-weight-bold rem2">
                • กรณีอ้างอิงข้อมูลที่เป็นไฟล์เอกสาร เช่น Pdf หรือ PowerPoint
              </p>
              <p class="rem5">
                (กรณีที่เป็นไฟล์ Pdf หรือ เอกสารในรูปแบบอื่น ๆ ยกเว้น
                PowerPoints)
              </p>
              <p class="rem5">
                Sayan, U. (2019). How to reference website in APA style.
                Retrieved from
              </p>
              <p class="rem7">http://www.itsci.mju.ac.th/sayan/apa_style.pdf</p>
              <p class="rem5">
                สายัณห์ อุ่นนันกาศ. วิธีการอ้างอิงข้อมูลจากเว็บไซต์ในรูปแบบ APA.
                สืบค้นจาก
              </p>
              <p class="rem7">http://www.itsci.mju.ac.th/sayan/apa_style.pdf</p>
              <br />
              <p class="rem5">
                (กรณีที่เป็นไฟล์ PowerPoints จะระบุ [PowerPoints slides]
                หลังจากชื่อเอกสาร)
              </p>
              <p class="rem5">
                Sayan, U. (2019). How to reference website in APA style
                [PowerPoints slides]. Retrieved
              </p>
              <p class="rem7">
                from http://www.itsci.mju.ac.th/sayan/apa_style.pptx
              </p>
              <br />
              <p class="font-weight-bold rem2">
                • กรณีอ้างอิงข้อมูลจากเว็บไซต์ Wikipedia
              </p>
              <p class="rem5">
                Global warming. (n.d.). In Wikipedia. Retrieved December 6,
                2009, from
              </p>
              <p class="rem7">http://en.wikipedia.org/wiki/Global_warming</p>
              <br />
              <p class="font-weight-bold rem2">
                • กรณีที่มีผู้แต่ง 2 คน ให้ใช้เครื่องหมาย &
                คั่นระหว่างชื่อผู้แต่ง
              </p>
              <p class="rem5">
                Sayan, U & Wanvimol, N. (2019). How to reference website in APA
                style. Retrieved
              </p>
              <p class="rem7">
                February 2, 2020 from http://www.itsci.mju.ac.th/sayan/apa.html
              </p>
              <br />
              <p class="font-weight-bold rem2">
                • กรณีที่มีผู้แต่ง 3 - 5 คน ให้ใช้เครื่องหมาย ,
                คั่นระหว่างชื่อผู้แต่ง และเครื่องหมาย & ก่อนหน้าคนสุดท้าย
              </p>
              <p class="rem5">
                Sayan, U., Somchai, J. & Wanvimol, N. (2019). How to reference
                website in APA style.
              </p>
              <p class="rem7">
                Retrieved February 2, 2020 from
                http://www.itsci.mju.ac.th/sayan/apa.html
              </p>
              <br />
              <p class="font-weight-bold rem2">
                • กรณีที่มีผู้แต่งตั้งแต่ 6 คนขึ้นไป จะระบุเฉพาะชื่อคนแรก
                และต่อด้วย et al. เพื่อแทนคนที่เหลือ
              </p>
              <p class="rem5">
                Sayan, U. et al. (2019). How to reference website in APA style.
                Retrieved
              </p>
              <p class="rem7">
                February 2, 2020 from http://www.itsci.mju.ac.th/sayan/apa.html
              </p>
              <br />
              <hr>

              <h5>ความน่าเชื่อถือของข้อมูล</h5>
              <p class="rem2">
                ปัจจุบันข้อมูลที่มีอยู่ในอินเทอร์เน็ตมีจำนวนมาก โดยในปี 2563 นี้
                มีจำนวนเว็บไซต์ทั้งหมดทั่วโลกเป็นจำนวนถึง 1.7 billions เว็บไซต์
                หรือ 1,700 ล้านเว็บไซต์
                ซึ่งแน่นอนว่าในบรรดาเว็บไซต์ทั้งหมดนั้นย่อมมีทั้งข้อมูลที่เชื่อถือได้
                และไม่น่าเชื่อถือ
                ซึ่งเทคนิคที่ได้รับความนิยมในการตรวจสอบความน่าเชื่อถือของแหล่งข้อมูลที่ได้มาจากอินเทอร์เน็ตนั้น
                ประกอบไปด้วย 7 เทคนิคหลัก ๆ ดังนี้
              </p>

              <p class="rem5">
                • เทคนิคที่ 1 เริ่มต้นหาจากเว็บไซต์ที่ตนเองรู้จักก่อน
                เริ่มต้นจากเว็บไซต์ที่มีความน่าเชื่อถือที่เรารู้จักก่อน
                ซึ่งอาจมีข้อมูลที่ดีกว่าในเว็บไซต์อื่น ๆ ก็อาจจะเป็นไปได้
                แต่การเริ่มต้นกับบริษัท
                หรือเว็บไซต์ที่คุณเชื่อถือแล้วเป็นวิธีที่ดีในการจำกัดการค้นหาของเรา
                ถ้าหากตัดสินใจค้นหาข้อมูลจากแหล่งอื่น
                ก็ยังสามารถเปรียบเทียบกับสิ่งที่ค้นหาได้ก่อนหน้านี้
              </p>
              <p class="rem5">
                • เทคนิคที่ 2 ตรวจสอบวันที่
                เคล็ดลับที่มีประโยชน์อีกประการหนึ่งคือการดูวันที่ของบทความ
                รวมถึงวันที่อ้างอิงในการค้นหาข้อมูลของแหล่งข้อมูลภายในบทความนั้น
                ๆ หากบทความอ้างถึงการศึกษาที่ทำเมื่อ 10 ปีก่อน
                อาจจะนำไปสู่คำถามเกี่ยวกับความน่าเชื่อถือของข้อมูลได้
                โดยเฉพาะอย่างยิ่งหากมีการศึกษาเพิ่มเติมในหัวข้อนี้
                อีกตัวบ่งชี้ที่ดีว่าบทความอาจล้าสมัย หรือไม่คือ “dead links”
                หรือ “ลิงค์ตาย”
                บทความในเว็บไซต์จำนวนมากมีลิงค์ที่ผู้เข้าชมสามารถคลิกเพื่อดูข้อมูลเพิ่มเติม
                หากลิงค์เหล่านั้นไม่สามารถเชื่อมไปยังหน้าเว็บที่อ้างอิงได้
                ก็มีโอกาสที่จะเป็นบทความเก่า
              </p>
              <p class="rem5">
                • เทคนิคที่ 3 ตรวจสอบการรับรองข้อมูล
                หนึ่งในวิธีที่ดีที่สุดในการประเมินบทความหรือเนื้อหาประเภทอื่นที่เผยแพร่ทางออนไลน์คือการตรวจสอบข้อมูลรับรองของผู้เขียน
                หากผู้เขียนมีรายการของการอ้างอิงเพื่อตรวจสอบข้อมูลประจำตัวของผู้เขียนจะดียิ่งขึ้น
                เว็บไซต์จำนวนมาก รวมถึงเว็บไซต์ข่าวที่เชื่อถือได้
                มีการอนุญาตการเขียนบทความให้กับเจ้าหน้าที่หรือนักเขียนอิสระ
                สิ่งเหล่านี้อาจไม่ใช่มืออาชีพในสาขาที่พวกเขากำลังเขียน
                แต่อย่างไรก็ตาม ยังสามารถเชื่อถือได้
                เพราะมีการตรวจสอบจากผู้เชี่ยวชาญในเว็บไซต์นั้น ๆ
              </p>
              <p class="rem5">
                • เทคนิคที่ 4 การตรวจสอบ Top Level Domain (TLD)
                และโดเมนของเว็บไซต์
                หนึ่งในวิธีที่ง่ายที่สุดในการพิจารณาความน่าเชื่อถือของแหล่งข้อมูลออนไลน์คือการดูวัตถุประสงค์ของเว็บไซต์ซึ่งมักจะเรียนรู้ได้จากการสิ้นสุดที่อยู่ของเว็บไซต์
                เช่น .com หรือ .org เป็นต้น ซึ่ง .com เป็น TLD
                ที่ได้รับความนิยมมากที่สุดบนอินเทอร์เน็ต
                และสามารถใช้งานได้โดยบุคคล ธุรกิจ หรือหน่วยงานอื่น ๆ
                ซึ่งหมายความว่าหากคุณกำลังค้นคว้าอะไรบางอย่างไซต์ .com
                จำเป็นต้องประเมินความน่าเชื่อถือมากกว่าเว็บไซต์อื่น ๆ
                เพราะเว็บไซต์ที่ลงท้ายด้วย .com
                มักจะเป็นเว็บไซต์ของบริษัทที่ต้องการขายสินค้า และบริการของตนเอง
                จึงทำให้ข้อมูลที่ได้อาจจะมีบางส่วนที่เข้าข้างบริษัทนั้น ๆ เช่น
                หากต้องการหาข้อมูลเพื่อเปรียบเทียบสินค้าระหว่าง iOS กับ Android
                ก็ไม่ควรจะเชื่อถือข้อมูลทั้งหมดจากเว็บไซต์ ของ Apple.com
                ประเภทของ Domain เช่น
              </p>
              <p class="rem7">
                .com = commercial สำหรับองค์กร ธุรกิจ หรือ บุคคลทั่วไป
              </p>
              <p class="rem7">.edu = educational สำหรับสถาบันการศึกษา</p>
              <p class="rem7">.mil = military สำหรับหน่วยงานทางการทหาร</p>
              <p class="rem7">.gov = government สำหรับหน่วยงานของรัฐ</p>
              <p class="rem7">
                .org = nonprofit สำหรับหน่วยงานที่ไม่แสวงผลกำไร มูลนิธิต่าง ๆ
              </p>
              <br>

              <p class="rem5">
                • เทคนิคที่ 5 เจาะลึกข้อมูล
                หากยังไม่แน่ใจในความน่าเชื่อถือของข้อมูล
                ให้ทำการเจาะลึกลงในรายละเอียดเพิ่มเติมเข้าไป
                โดยการอ่านบทความอื่น ๆ
                ในเว็บไซต์โดยเฉพาะบทความที่เขียนโดยผู้เขียนคนเดียวกัน
                โดยดูความเห็นของผู้เขียนในหัวข้ออื่น ๆ
                ว่ามีการเขียนสอดคล้องไปในทิศทางเดียวกันหรือไม่
                การสะกดคำก็เป็นอีกส่วนหนึ่งที่สำคัญ
                การสะกดคำผิดจำนวนมากบนเว็บไซต์
                ก็เป็นสิ่งที่บ่งบอกว่าไม่ใช่แหล่งข้อมูลที่น่าเชื่อถือ
                คนที่สร้างเว็บไซต์ที่ถูกต้อง
                ออกแบบมาเพื่อให้ข้อมูลที่เป็นข้อเท็จจริงแก่ผู้คน
                ดังนั้นการสะกดคำ และไวยากรณ์ จะทำให้ดูเป็นมืออาชีพมากขึ้น
              </p>
              <p class="rem5">
                • เทคนิคที่ 6 ตรวจสอบกับข้อมูลในห้องสมุด
                อินเทอร์เน็ตเป็นแหล่งข้อมูลที่ดีเยี่ยม
                แต่เมื่อกล่าวถึงความถูกต้อง
                ห้องสมุดยังคงเป็นหนึ่งในสถานที่ที่ดีที่สุดในการศึกษาค้นคว้า
                ขณะนี้ห้องสมุดส่วนใหญ่อนุญาตให้สมาชิก
                ค้นหาข้อมูลจากฐานข้อมูลทางออนไลน์ ได้อีกด้วย
                เนื่องจากทรัพยากรจำนวนมากเหล่านี้ได้รับการตรวจสอบโดยผู้เชี่ยวชาญอื่น
                ๆ ภายในสาขาที่เกี่ยวข้องแล้ว ดังนั้น
                การตรวจสอบกับข้อมูลที่ค้นหาได้จากห้องสมุด
                จะเป็นอีกส่วนหนึ่งที่ช่วยยืนยันความน่าเชื่อถือของข้อมูลที่ค้นหาได้จากอินเทอร์เน็ต
              </p>
              <p class="rem5">
                • เทคนิคที่ 7 อย่าไว้ใจข้อมูลที่ได้มาในครั้งแรก
                ท้ายที่สุดไม่ว่าคุณจะค้นหาข้อมูลจากที่ไหน
                ก็ควรตรวจสอบซ้ำกับแหล่งข้อมูลอื่น ๆ
                คุณสามารถทำได้โดยดำเนินการค้นคว้าเพิ่มเติมทางออนไลน์
                หรือตรวจสอบสิ่งพิมพ์ที่ห้องสมุด
                หากคุณพบข้อมูลเดียวกันในเว็บไซต์ที่ถูกต้องในที่อื่น ๆ
                รวมทั้งในสิ่งพิมพ์ที่ห้องสมุด
                จะเป็นการเพิ่มความเชื่อถือของข้อมูลนั้นว่าเป็นข้อมูลที่ถูกต้อง
              </p>

              <!-- -------------------------------- -->
              <br />
              <br />
              <br />
              <br />
              <div class="container">
                <div class="row">
                  <div class="col-auto mr-auto">
                    <router-link to="/lesson5_1" title="Lesson5_1 Page">
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
                          
                          outline type="info"
                        >
                          <i class="fa fa-chevron-up" aria-hidden="true"></i>
                        </base-button>
                      </div>
                  </div>
                  <div class="col-auto">
                    <router-link to="/lesson6_1" title="Lesson6_1 Page">
                    <div class="btn-wrapper">
                      <base-button
                        tag="a"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="mb-3 mb-sm-0"
                        outline
                        type="info"
                      >
                        Continue
                        <i class="fa fa-chevron-right" aria-hidden="true"></i>
                      </base-button>
                    </div>
                    </router-link>
                  </div>
                </div>
              </div>
              <div class="text-center mt-5">Page 2/2</div>
            </div>
          </div>
        </div>
      </section>

      <hr />
      <div class="col-lg-center">
        <div class="pt-4 text-center">
          <h5 class="title">
            <span class="d-block mb-1">Author | Dr.Sayan Unankard</span>
            <small class="h6 text-black"
              >Lecturer in the Information Technology Division at Maejo University</small
            >
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
