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
             

<h1>Smooth Scroll</h1>

<div class="main"  id="section1">
  <h2>Section 1</h2>
  
  <a href="#section2">Click Me to Smooth Scroll to Section 2 Below</a>

</div>

<div class="main" id="section2">
  <h2>Section 2</h2>
  <a href="#section1">Click Me to Smooth Scroll to Section 1 Above</a>
</div>



              <!-- -------------------------------- -->
              <br />
              <br />
              <br />
              <br />
              <div class="container">
                <div class="row">
                  <div class="col-auto mr-auto">
                    <router-link to="/lesson9_7" title="Lesson9_7 Page">
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
                    <router-link to="/lesson_ref" title="Lesson_ref Page">
                      <div class="btn-wrapper">
                        <base-button
                          tag="a"
                          target="_blank"
                          rel="noopener noreferrer"
                          class="mb-3 mb-sm-0"
                          outline
                          type="info"
                        >
                          บรรณานุกรม
                          <i class="fa fa-chevron-right" aria-hidden="true"></i>
                        </base-button>
                      </div>
                    </router-link>
                  </div>
                </div>
              </div>
              <div class="text-center mt-5">Page 8/8</div>
            </div>
          </div>
        </div>
      </section>

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
      },
    };
  },
};
</script>

<style></style>
