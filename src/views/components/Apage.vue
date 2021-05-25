<template>
  <div>
      <footer class="footer has-cards">
        
        <div class="container container-lg">           
            <h2 class="mb-5 display-2">
            <span>Online Courses </span>
            <p class="fontx col-lg-10" style="font-size:20px">บทเรียนออนไลน์</p>
            </h2>
            <hr>
            <div class="row fontx">
                <!-- 1 Doc -->
                <div class="col-md-4 mb-4 mb-md-0">
                    <div class="card card-lift--hover shadow border-0">
                        <router-link to="/lesson1_1" title="lesson1_2">
                            <img v-lazy="'img/couse/doc.jpg'" class="card-img">
                            <card class="border-0">
                                    <h3 class="text-primary text-uppercase">1. Documentation</h3>
                                    <p class="description mt-3">โปรแกรมไมโครซอฟต์เวิร์ด (Microsoft Word) หรือโปรแกรมจัดการด้านเอกสาร 
                                    เป็นโปรแกรมที่นิยมใช้ในหลากหลายหน่วยงาน ทั้งภาครัฐและเอกชน ...</p>
                                </card>
                        </router-link>
                    </div>
                </div>
                <!-- 2 MS Excel -->
                <div class="col-md-4 mb-4 mb-md-0">
                    <div class="card card-lift--hover shadow border-0">
                        <router-link to="/lesson2_1" title="Lesson2_1">
                            <img v-lazy="'img/couse/excel.jpg'" class="card-img">
                            <card class="border-0">
                                    <h3 class="text-primary text-uppercase">2. Microsoft Excel</h3>
                                    <p class="description mt-3">โปรแกรม Excel เป็นโปรแกรมประเภทตารางคำนวณ หรือ Spreadsheet 
                                        ที่ใช้บันทึกข้อมูลในลักษณะต่างๆ ซึ่งส่วนใหญ่เป็นข้อมูลประเภทตัวเลขที่มีปริมาณมาก ...</p>
                                </card>
                        </router-link>
                    </div>
                </div>
                <!-- 3 Presentation -->
                <div class="col-md-4 mb-4 mb-md-0">
                    <div class="card card-lift--hover shadow border-0">
                        <router-link to="/lesson3_1" title="Lesson3_1">
                            <img v-lazy="'img/couse/pre.jpg'" class="card-img">
                            <card class="border-0">
                                    <h3 class="text-primary text-uppercase">3. Presentation</h3>
                                    <p class="description mt-3">การนำเสนอ (presentation) หมายถึงการนำข้อมูลเรื่องใดเรื่องหนึ่งไป
                                        นำเสนอต่อผู้ฟังให้เข้าใจ โดยใช้เทคนิคและสื่อต่างๆ ในการนำเสนอ ...</p>
                                </card>
                        </router-link>
                    </div>
                </div>
            </div>
            <br><br>
            <div class="row fontx">
                <!-- 4 Disruption -->
                <div class="col-md-4 mb-4 mb-md-0">
                    <div class="card card-lift--hover shadow border-0">
                        <router-link to="/landing" title="Landing Page">
                            <img v-lazy="'img/couse/digi.jpg'" class="card-img">
                            <card class="border-0">
                                    <h3 class="text-primary text-uppercase">4. Digital Disruption</h3>
                                    <p class="description mt-3">หากพูดถึงสื่อดิจิทัล สิ่งที่หลายคนนึกถึง คือ การสื่อสารระหว่างผู้คน
                                        บนโลกออนไลน์ ที่สามารถเขื่อมต่อหากันได้ด้วยระบบอินเทอร์เน็ต ...</p>
                                </card>
                        </router-link>
                    </div>
                </div>
                 <!--5 serach -->
                <div class="col-md-4 mb-4 mb-md-0">
                    <div class="card card-lift--hover shadow border-0">
                        <router-link to="/landing" title="Landing Page">
                            <img v-lazy="'img/couse/search.jpg'" class="card-img">
                            <card class="border-0">
                                    <h3 class="text-primary text-uppercase">5. Data Searching</h3>
                                    <p class="description mt-3">การหาข้อมูลบนอินเทอร์เน็ตในปัจจุบันสามารถแบ่งประเภทการค้นหาได้ 
                                        2 แบบหลัก ๆ ที่ได้รับความนิยมในปัจจุบัน ขึ้นอยู่กับผู้ใช้งาน ...</p>
                                </card>
                        </router-link>
                    </div>
                </div>
                <!--6 Social -->   
                <div class="col-md-4 mb-4 mb-md-0">
                    <div class="card card-lift--hover shadow border-0">
                        <router-link to="/landing" title="Landing Page">
                            <img v-lazy="'img/couse/social.jpg'" class="card-img">
                            <card class="border-0">
                                    <h3 class="text-primary text-uppercase">6. Social Media</h3>
                                    <p class="description mt-3">สำหรับในยุคนี้ เราคงจะหลีกเลี่ยงหรือหนีคำว่า Social Media 
                                        ไปไม่ได้ เพราะไม่ว่าจะไปที่ไหน ก็จะพบเห็นมันอยู่ตลอดเวลา  ...</p>
                                </card>
                        </router-link>
                    </div>
                </div>   
            </div>
            <br><br>
            <div class="row fontx">
                <!-- 7 Storage -->
                 <div class="col-md-4 mb-4 mb-md-0">
                    <div class="card card-lift--hover shadow border-0">
                        <router-link to="/lesson1_1" title="Landing Page">
                            <img v-lazy="'img/couse/storage.jpg'" class="card-img">
                            <card class="border-0">
                                    <h3 class="text-primary text-uppercase">7. Storage And I/O</h3>
                                    <p class="description mt-3">การทำงานในยุกต์ดิจิทัลนั้นคงหลีกเลี่ยงไม่ได้ที่จะต้องทำงานกับข้อมูล 
                                        ไม่ว่าจะเป็นเอกสารที่เป็นตัวอักษรหรือภาพ ...</p>
                                </card>
                        </router-link>
                    </div>
                </div> 
                <!-- 8 Security -->
                <div class="col-md-4 mb-4 mb-md-0">
                    <div class="card card-lift--hover shadow border-0">
                        <router-link to="/landing" title="Landing Page">
                            <img v-lazy="'img/couse/Security.jpg'" class="card-img">
                            <card class="border-0">
                                    <h3 class="text-primary text-uppercase">8. Security System</h3>
                                    <p class="description mt-3">ในยุคปัจจุบันเป็นโลกแห่งเทคโนโลยีสารสนเทศระบบข้อมูลสารสนเทศ
                                        หลากหลายระบบได้ถูกพัฒนาและนำมาใช้ในการบริหารจัดการองค์กร   ...</p>
                                </card>
                        </router-link>
                    </div>
                </div> 
                <!-- 9 Techno --> 
                 <div class="col-md-4 mb-4 mb-md-0">
                    <div class="card card-lift--hover shadow border-0">
                        <router-link to="/landing" title="Landing Page">
                            <img v-lazy="'img/couse/iot.jpg'" class="card-img">
                            <card class="border-0">
                                    <h3 class="text-primary text-uppercase">9. Technology Trending</h3>
                                    <p class="description mt-3">Internet of Things (IOT) คือ การที่อุปกรณ์อิเล็กทรอนิกส์ต่าง ๆ  
                                        สามารถเชื่อมโยงหรือส่งข้อมูลถึงกันได้ด้วยอินเทอร์เน็ต โดยไม่ต้องป้อนข้อมูล   ...</p>
                                </card>
                        </router-link>
                    </div>
                </div>  
            </div>
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