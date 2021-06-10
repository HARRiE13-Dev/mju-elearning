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
                  Regulations Of Examination
              </h1>
              <p class="lead text-white mt-4">
                กฎระเบียบข้อบังคับในการสอบ ศูนย์สอบอิเล็กทรอนิกส์ มหาวิทยาลัยแม่โจ้

              </p>
            </div>
            <div class="col-lg-6 mb-lg-auto">
              <div
                class="rounded shadow-lg overflow-hidden transform-perspective-right"
              >
                <b-carousel id="carousel1" controls indicators>
                  <!-- Text slides with image -->
                  <b-carousel-slide
                    img-src="img/theme/rule.jpg"
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
              <!-- -------------------------------- -->
               
              <!-- ---------------------------------->
              <br />
              <br />
              <br />
              <br />
              <div class="container">
                <div class="row">
                  <div class="col-auto mr-auto">
                   
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
              <div class="text-center mt-5">Page 1/2</div>
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


