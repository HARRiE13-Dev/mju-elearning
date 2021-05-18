<template>
  <div>
      <footer class="footer has-cards">
        
        <div class="container container-lg">
            <h2 class="mb-5">
            <span>Online Courses </span>
            </h2>

            <div class="row">
                <div class="col-md-6 mb-4 mb-md-0">
                    <div class="card card-lift--hover shadow border-0">
                        <router-link to="/landing" title="Landing Page">
                            <img v-lazy="'img/couse/doc.jpg'" class="card-img">
                            <card class="border-0">
                                    <h3 class="text-primary text-uppercase">Documentation Services</h3>
                                    <p class="description mt-3">โปรแกรมไมโครซอฟต์เวิร์ด (Microsoft Word) หรือโปรแกรมจัดการด้านเอกสาร 
                                    เป็นโปรแกรมที่นิยมใช้ในหลากหลายหน่วยงาน ทั้งภาครัฐและเอกชน ...</p>
                                </card>
                        </router-link>
                    </div>
                </div>
                <div class="col-md-6 mb-4 mb-md-0">
                    <div class="card card-lift--hover shadow border-0">
                        <router-link to="/lesson1_2" title="Lesson Page">
                            <img v-lazy="'img/couse/excel.jpg'" class="card-img">
                            <card class="border-0">
                                    <h3 class="text-primary text-uppercase">Microsoft Excel</h3>
                                    <p class="description mt-3">โปรแกรม Excel เป็นโปรแกรมประเภทตารางคำนวณ หรือ Spreadsheet 
                                        ที่ใช้บันทึกข้อมูลในลักษณะต่างๆ ซึ่งส่วนใหญ่เป็นข้อมูลประเภทตัวเลขที่มีปริมาณมาก ...</p>
                                </card>
                        </router-link>
                    </div>
                </div>
            </div>
            <br><br>
            
            <div class="row">
                <div class="col-md-6 mb-4 mb-md-0">
                    <div class="card card-lift--hover shadow border-0">
                        <router-link to="/landing" title="Landing Page">
                            <img v-lazy="'img/couse/pre.jpg'" class="card-img">
                            <card class="border-0">
                                    <h3 class="text-primary text-uppercase">Presentation</h3>
                                    <p class="description mt-3">การนำเสนอ (presentation) หมายถึงการนำข้อมูลเรื่องใดเรื่องหนึ่งไป
                                        นำเสนอต่อผู้ฟังให้เข้าใจ โดยใช้เทคนิคและสื่อต่างๆ ในการนำเสนอ ...</p>
                                </card>
                        </router-link>
                    </div>
                </div>
                <div class="col-md-6 mb-4 mb-md-0">
                    <div class="card card-lift--hover shadow border-0">
                        <router-link to="/landing" title="Landing Page">
                            <img v-lazy="'img/couse/digi.jpg'" class="card-img">
                            <card class="border-0">
                                    <h3 class="text-primary text-uppercase">Digital Disruption</h3>
                                    <p class="description mt-3">หากพูดถึงสื่อดิจิทัล สิ่งที่หลายคนนึกถึง คือ การสื่อสารระหว่างผู้คน
                                        บนโลกออนไลน์ ที่สามารถเขื่อมต่อหากันได้ด้วยระบบอินเทอร์เน็ต ผ่านเครื่องมือดิจิทัลที่หลากหลาย ...</p>
                                </card>
                        </router-link>
                    </div>
                </div>
            </div>

            <br><br>

            <div class="row">
               <div class="col-md-6 mb-4 mb-md-0">
                    <div class="card card-lift--hover shadow border-0">
                        <router-link to="/landing" title="Landing Page">
                            <img v-lazy="'img/couse/search.jpg'" class="card-img">
                            <card class="border-0">
                                    <h3 class="text-primary text-uppercase">Data Searching</h3>
                                    <p class="description mt-3">การหาข้อมูลบนอินเทอร์เน็ตในปัจจุบันสามารถแบ่งประเภทการค้นหาได้ 
                                        2 แบบหลัก ๆ ที่ได้รับความนิยมในปัจจุบัน ขึ้นอยู่กับผู้ใช้งาน ...</p>
                                </card>
                        </router-link>
                    </div>
                </div>   
                <div class="col-md-6 mb-4 mb-md-0">
                    <div class="card card-lift--hover shadow border-0">
                        <router-link to="/landing" title="Landing Page">
                            <img v-lazy="'img/couse/social.jpg'" class="card-img">
                            <card class="border-0">
                                    <h3 class="text-primary text-uppercase">Social Media</h3>
                                    <p class="description mt-3">สำหรับในยุคนี้ เราคงจะหลีกเลี่ยงหรือหนีคำว่า Social Media 
                                        ไปไม่ได้ เพราะไม่ว่าจะไปที่ไหน ก็จะพบเห็นมันอยู่ตลอดเวลา  ...</p>
                                </card>
                        </router-link>
                    </div>
                </div>    
            </div>
            <br><br>
            <div class="row">
                 <div class="col-md-6 mb-4 mb-md-0">
                    <div class="card card-lift--hover shadow border-0">
                        <router-link to="/landing" title="Landing Page">
                            <img v-lazy="'img/couse/storage.jpg'" class="card-img">
                            <card class="border-0">
                                    <h3 class="text-primary text-uppercase">Storage And I/O Interface</h3>
                                    <p class="description mt-3">การทำงานในยุกต์ดิจิทัลนั้นคงหลีกเลี่ยงไม่ได้ที่จะต้องทำงานกับข้อมูล 
                                        ไม่ว่าจะเป็นเอกสารที่เป็นตัวอักษรหรือภาพ ...</p>
                                </card>
                        </router-link>
                    </div>
                </div> 
                <div class="col-md-6 mb-4 mb-md-0">
                    <div class="card card-lift--hover shadow border-0">
                        <router-link to="/landing" title="Landing Page">
                            <img v-lazy="'img/couse/Security.jpg'" class="card-img">
                            <card class="border-0">
                                    <h3 class="text-primary text-uppercase">Security System</h3>
                                    <p class="description mt-3">ในยุคปัจจุบันเป็นโลกแห่งเทคโนโลยีสารสนเทศระบบข้อมูลสารสนเทศ
                                        หลากหลายระบบได้ถูกพัฒนาและนำมาใช้ในการบริหารจัดการองค์กร   ...</p>
                                </card>
                        </router-link>
                    </div>
                </div>  
            </div>
            <br><br>
            <div class="col-md-auto">
                    <div class="card card-lift--hover shadow border-0">
                        <router-link to="/landing" title="Landing Page">
                            <img v-lazy="'img/couse/iot.jpg'" class="card-img" height="300px">
                            <card class="border-0">
                                    <h3 class="text-primary text-uppercase">Technology Trending</h3>
                                    <p class="description mt-3">Internet of Things (IOT) คือ การที่อุปกรณ์อิเล็กทรอนิกส์ต่าง ๆ  
                                        สามารถเชื่อมโยงหรือส่งข้อมูลถึงกันได้ด้วยอินเทอร์เน็ต โดยไม่ต้องป้อนข้อมูล   ...</p>
                                </card>
                        </router-link>
                    </div>
            </div>  
            

        </div>

        <div class="container">
            <div class="row row-grid align-items-center my-md">
                <div class="col-lg-6">
                    <h3 class="text-primary font-weight-light mb-2">MJU e-Learning</h3>
                    <h4 class="mb-0 font-weight-light">Contact Services</h4>
                </div>
                <div class="col-lg-6 text-lg-center btn-wrapper">
                    <a target="_blank" rel="noopener" href="https://twitter.com/creativetim"
                       class="btn btn-neutral btn-icon-only btn-twitter btn-round btn-lg" data-toggle="tooltip"
                       data-original-title="Follow us">
                        <i class="fa fa-twitter"></i>
                    </a>
                    <a target="_blank" rel="noopener" href="https://www.facebook.com/creativetim"
                       class="btn btn-neutral btn-icon-only btn-facebook btn-round btn-lg" data-toggle="tooltip"
                       data-original-title="Like us">
                        <i class="fa fa-facebook-square"></i>
                    </a>
                    <a target="_blank" rel="noopener" href="https://dribbble.com/creativetim"
                       class="btn btn-neutral btn-icon-only btn-dribbble btn-lg btn-round" data-toggle="tooltip"
                       data-original-title="Follow us">
                        <i class="fa fa-dribbble"></i>
                    </a>
                    <a target="_blank" rel="noopener" href="https://github.com/creativetimofficial"
                       class="btn btn-neutral btn-icon-only btn-github btn-round btn-lg" data-toggle="tooltip"
                       data-original-title="Star on Github">
                        <i class="fa fa-github"></i>
                    </a>
                </div>
            </div>

            <hr>
            <div class="row align-items-center justify-content-md-between">
                <div class="col-md-6">
                    <div class="copyright">
                        &copy; {{year}}
                        <a href="https://www.creative-tim.com" target="_blank" rel="noopener">Copyright | </a><a href="https://www.binarcode.com" target="_blank" rel="noopener">Computer Science ,Maejo University</a>
                    </div>
                </div>
                <div class="col-md-6">
                    <ul class="nav nav-footer justify-content-end">
                        <li class="nav-item">
                            <a href="https://www.creative-tim.com/presentation" class="nav-link" target="_blank" rel="noopener">About
                                Us</a>
                        </li>
                        <li class="nav-item">
                            <a href="http://blog.creative-tim.com" class="nav-link" target="_blank" rel="noopener">e-Testing</a>
                        </li>
                        <li class="nav-item">
                            <a href="https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md"
                               class="nav-link" target="_blank" rel="noopener">MJU</a>
                        </li>
                    </ul>
                </div>
            </div>
            <hr>
        </div>

    </footer>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>