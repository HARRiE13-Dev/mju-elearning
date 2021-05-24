<template>
    <div>
        <hero></hero>
        <apage></apage>
        <basic-elements></basic-elements>
        <inputs></inputs>
        <custom-controls></custom-controls>
        <navigation></navigation>
        <javascript-components></javascript-components>
        <icons></icons>
        <examples></examples>
        <download-section></download-section>
        <carousel></carousel>
        

    </div>
</template>
<script>
import Hero from "./components/Hero";
import Apage from "./components/Apage";


export default {
  name: "components",
  components: {
    Hero,
    Apage
    
  }
};
</script>
