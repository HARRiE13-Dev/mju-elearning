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
        <br />
        <br />
        <br />
        <br />
      </section>

      <section class="section section-shaped my-0 overflow-hidden">
        <div class="container pt-lg pb-80">
          <div class="row justify-content-center">
            <div class="fontx col-lg-10">
              <!-- ---------------------------------------- -->
              <h2 class=" display-3 text-center">
                ความรู้พื้นฐานด้านเทคโนโลยีดิจิทัลสมัยใหม่
              </h2>
              <br /><br />
              <h4>Internet of Things หรือ IOT คืออะไร</h4>
              <p class="rem2">
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
              <p class="rem2">
                กล่าวได้ว่า Internet of Things
                นี้ได้แก่การเชื่อมโยงของอุปกรณ์อัจฉริยะทั้งหลายผ่านอินเทอร์เน็ตที่เรานึกออก
                เช่น แอปพลิเคชัน แว่นตากูเกิ้ลกลาส
                รองเท้าวิ่งที่สามารถเชื่อมต่อข้อมูลการวิ่ง ทั้งความเร็ว ระยะทาง
                สถานที่ และสถิติได้
              </p>
              <br />
              <h4>แนวคิด Internet of Things</h4>
              <p class="rem2">
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

              <!-- ------------------------------------------->
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
                          >Previous</base-button
                        >
                      </div>
                    </router-link>
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
                          Next
                          <i class="fa fa-chevron-right" aria-hidden="true"></i>
                        </base-button>
                      </div>
                    </router-link>
                  </div>
                </div>
              </div>
              <div class="text-center mt-5">Page 1/3</div>
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
import { BCarousel } from "bootstrap-vue/esm/components/carousel/carousel";
import { BCarouselSlide } from "bootstrap-vue/esm/components/carousel/carousel-slide";
export default {
  name: "home",
  components: {
    BCarousel,
    BCarouselSlide,
  },
};
</script>
