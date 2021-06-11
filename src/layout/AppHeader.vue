<template>
    <header class="header-global">
        <base-nav class="navbar-main" transparent type="" effect="light" expand>
            <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
                <img src="img/brand/white.png" alt="logo" height="150px">
            </router-link>

            <div class="row" slot="content-header" slot-scope="{closeMenu}">
                <div class="col-6 collapse-brand">
                    <a href="">
                        <img src="img/brand/white.png" height="100%">
                    </a>
                </div>
                <div class="col-6 collapse-close">
                    <close-button @click="closeMenu"></close-button>
                </div>
            </div>

            <ul class="navbar-nav align-items-lg-center ml-lg-auto">
                    <a slot="title" href="" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="ni ni-ui-04 d-lg-none"></i>
                        <span class="nav-link-inner--text fontx">หน้าหลัก</span>
                    </a>
                
                <base-dropdown tag="li" class="fontx nav-item">
                    <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="ni ni-collection d-lg-none"></i>
                        <span class="nav-link-inner--text fontx">บทเรียน</span>
                    </a>
                    <router-link to="/lesson1_1" class="dropdown-item">1. Documentation </router-link>
                    <router-link to="/lesson2_1" class="dropdown-item">2. Microsoft Excel</router-link>
                    <router-link to="/lesson3_1" class="dropdown-item">3. Presentation</router-link>
                    <router-link to="/lesson4_1" class="dropdown-item">4. Digital Disruption</router-link>
                    <router-link to="/lesson5_1" class="dropdown-item">5. Data Searching</router-link>
                    <router-link to="/lesson6_1" class="dropdown-item">6. Social Media</router-link>
                    <router-link to="/lesson7_1" class="dropdown-item">7. Storage and Interface</router-link>
                    <router-link to="/lesson8_1" class="dropdown-item">8. Security System</router-link>
                    <router-link to="/lesson9_1" class="dropdown-item">9. Technology Trending</router-link>
                    <router-link to="/lesson_ref" class="dropdown-item">References</router-link>

                    
                </base-dropdown>
              

                    <a slot="title" href="" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="ni ni-collection d-lg-none"></i>
                        <router-link to="/regulations" title="regulations Page" class="nav-link-inner--text fontx text-white">
                        ข้อบังคับ
                        </router-link>
                    </a>
                    
                    <a slot="title" href="https://it.mju.ac.th/" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="ni ni-collection d-lg-none"></i>
                        <span class="nav-link-inner--text fontx">ติดต่อ</span>
                    </a>
                       <a slot="title" href="https://www.mju.ac.th/etesting/" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="ni ni-collection d-lg-none"></i>
                        <span class="nav-link-inner--text fontx">ศูนย์สอบวันมาตรฐาน ICT </span>
                    </a>
                    
            </ul>
            
            <ul class="navbar-nav align-items-lg-center ml-lg-auto">
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://www.facebook.com/ETestingMaejo/" target="_blank" rel="noopener"
                       data-toggle="tooltip" title="Like us on Facebook">
                        <i class="fa fa-facebook-square"></i>
                        <span class="nav-link-inner--text d-lg-none">Facebook</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://it.mju.ac.th/"
                       target="_blank" rel="noopener" data-toggle="tooltip" title="Follow us on Instagram">
                        <i class="fa fa-globe"></i>
                        <span class="nav-link-inner--text d-lg-none">Instagram</span>
                    </a>
                </li>
                
                
            
            </ul>
        </base-nav>
    </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";

export default {
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown
  }
};
</script>
<style>
</style>
