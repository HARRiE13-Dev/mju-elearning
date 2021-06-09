<template>
  <section class="section-hero section-shaped my-0">
    <div class="shape shape-style-1 shape-default">
      <span class="span-150"></span>
      <span class="span-50"></span>
      <span class="span-50"></span>
    </div>
    <div class="container shape-container d-flex align-items-center">
      <div class="col px-0">
        <div class="row justify-content-center align-items-center">
          <div class="col-lg-7 text-center pt-lg">
            <img
              src="img/brand/logo.png"
              style="width: 800px;"
              class="img-fluid"
            />
            <p class="lead text-white mt-1 mb-5"></p>

            <div class="btn-wrapper fontx">
                <router-link to="/lesson1_1" title="Lesson1_1 Page">
              <base-button
                tag="a"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                class="mb-3 mb-sm-0"
                outline type="white"
                icon="fa fa-book"
              >
                บทเรียน
              </base-button>
              </router-link>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <base-button
                tag="a"
                href="https://www.mju.ac.th/etesting/RegisterICTCOVID.html"
                target="_blank"
                rel="noopener noreferrer"
                class="mb-3 mb-sm-0"
                type="white"
                icon="fa fa-sign-in"
              >
                สมัครสอบ
              </base-button>
            </div>
          </div>
        </div>
        <div
          class="row align-items-center justify-content-around stars-and-coded"
        ></div>
      </div>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style></style>
