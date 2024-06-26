<template>
    <section class="layout">
        <div class="d1">&nbsp;สัดส่วน เพศ อายุ ของผู้ป่วย<br />
            <SexChart />
        </div>
        <div class="d2">&nbsp;สัดส่วน สถานภาพ อายุ ของผู้ป่วย<br />
            <StatusChart />
        </div>
        <div class="d3">&nbsp;สัดส่วน สัญชาติ อายุ ของผู้ป่วย<br />
            <NatChart />
        </div>
        <div class="d4">&nbsp;สัดส่วน อาชีพ เพศ ของผู้ป่วย<br />
            <OccChart />
        </div>
    </section>
</template>
  <script>
import StatusChart from '../patient/PatientStatus.vue'
import SexChart from '../patient/PatientSex.vue'
import NatChart from '../patient/PatientNationality.vue'
import OccChart from '../patient/PatientOccupation.vue'

  export default {
    name: 'patient',
    components: {
        StatusChart,
        SexChart,
        NatChart,
        OccChart
    }
  }
  </script>
<style scoped>
.layout {
    width: 100%;
    height: 100%;

    display: grid;
    grid:
        'd1 d2' 1fr 
        'd3 d4' 1fr 
        'd5 d6' 1fr 
        'd7 d8' 1fr 
        / 1fr 1fr;
    gap: 3px;
}

.d1 {
    grid-area: d1;
}

.d2 {
    grid-area: d2;
}

.d3 {
    grid-area: d3;
}

.d4 {
    grid-area: d4;
}

.d5 {
    grid-area: d5;
}

.d6 {
    grid-area: d6;
}

.d7 {
    grid-area: d7;
}

.d8 {
    grid-area: d8;
}

.d9 {
    grid-area: d9;
}
</style>