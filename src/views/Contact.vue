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
                 Contact Services
              </h1>
              <p class="lead text-white mt-4">
               ช่องทางการติดต่อ ศูนย์สอบอิเล็กทรอนิกส์ มหาวิทยาลัยแม่โจ้

              </p>
            </div>
            <div class="col-lg-6 mb-lg-auto">
              <div
                class="rounded shadow-lg overflow-hidden transform-perspective-right"
              >
                <b-carousel id="carousel1" controls indicators>
                  <!-- Text slides with image -->
                  <b-carousel-slide
                    img-src="img/theme/contact.jpg"
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
              <!-- -------------------------------- -->
               <h2>ศูนย์สอบอิเล็กทรอนิกส์ (e-Testing)</h2>
               <br>
               <p class="lead rem2">ชั้น 2 อาคารเรียนรวม 70 ปี กองเทคโนโลยีดิจิทัล มหาวิทยาลัยแม่โจ้</p>
                <p class="lead rem2">63 หมู่ 4 ต.หนองหาร อ.สันทราย จ.เชียงใหม่ 50290</p>
                <p class="lead rem2">โทรศัพท์ : 053-873296, 053-873294</p>
                <p class="lead rem2">Facebook : <a href="https://www.facebook.com/ETestingMaejo/" target="_blank" rel="noopener">https://www.facebook.com/ETestingMaejo/</a></p>
                
              <!-- ---------------------------------->
              <br />
              <br />
              <br />
              <br />
              <div class="container">
                <div class="row">
                  
                  <div class="col text-center">
                    <router-link to="/" title="Home Page">
                      <div class="btn-wrapper">
                        <base-button
                          tag="a"
                          target="_blank"
                          rel="noopener noreferrer"
                          class="mb-3 mb-sm-0"
                          outline
                          type="info"
                        >
                          กลับสู่หน้าหลัก
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

      <!-- Author -->
      <hr />
      <div class="col-lg-center">
        <div class="pt-4 text-center">
          <h5 class="title fontx">
            <span class="d-block mb-1">MAEJO UNIVERSITY</span>
            <small class="h6 text-black"
              >มหาวิทยาลัยแม่โจ้</small
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


