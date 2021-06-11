<template>
    <footer class="footer has-cards">
        
        <div class="container">
            <div class="row row-grid align-items-center my-md">
                <div class="col-lg-6">
                    <h3 class="text-primary font-weight-light mb-2">MJU e-Learning</h3>
                    <h4 class="mb-0 font-weight-light">Contact Services : 053 - 873296 </h4>
                </div>
                <div class="col-lg-6 text-lg-center btn-wrapper">
                    <a target="_blank" rel="noopener" href="https://it.mju.ac.th/"
                       class="btn btn-neutral btn-icon-only btn-twitter btn-round btn-lg" data-toggle="tooltip"
                       data-original-title="information">
                        <i class="fa fa-info"></i>
                    </a>
                    <a target="_blank" rel="noopener" href="https://www.facebook.com/ETestingMaejo/"
                       class="btn btn-neutral btn-icon-only btn-facebook btn-round btn-lg" data-toggle="tooltip"
                       data-original-title="Like us">
                        <i class="fa fa-facebook-square"></i>
                    </a>
                    <a target="_blank" rel="noopener" href="https://goo.gl/maps/3xBCou84RfPmrjqb8"
                       class="btn btn-neutral btn-icon-only btn-github btn-round btn-lg" data-toggle="tooltip"
                       data-original-title="Location">
                        <i class="fa fa-map-marker"></i>
                    </a>
                </div>
            </div>

            <hr>
            <div class="row align-items-center justify-content-md-between">
                <div class="col-md-6">
                    <div class="copyright">
                        &copy; {{year}}
                        <a href="" target="_blank" rel="noopener">Copyright | </a><a href="http://csmju.jowave.com/" target="_blank" rel="noopener">Computer Science at Maejo University</a>
                    </div>
                </div>
                <div class="col-md-6">
                    <ul class="nav nav-footer justify-content-end">
                        <li class="nav-item">
                            <a href="https://www.mju.ac.th/th/About-MJU.html" class="nav-link" target="_blank" rel="noopener">About
                                Us</a>
                        </li>
                        <li class="nav-item">
                            <a href="https://www.mju.ac.th/etesting/" class="nav-link" target="_blank" rel="noopener">e-Testing</a>
                        </li>
                        <li class="nav-item">
                            <a href="https://www.mju.ac.th/th/"
                               class="nav-link" target="_blank" rel="noopener">Maejo University</a>
                        </li>
                    </ul>
                </div>
            </div>
            <hr>
        </div>

    </footer>
</template>
<script>
export default {
  name: 'app-footer',
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
};
</script>
<style>
</style>
