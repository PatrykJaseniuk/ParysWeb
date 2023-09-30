import { useMantineColorScheme } from "@mantine/core";

export const IconParysLogoMini = () => {

    const { colorScheme } = useMantineColorScheme();
    const black = '2B2A29';
    const white = 'EBECEC'

    const color1 = colorScheme == 'light' ? white : black;
    const color2 = colorScheme == 'light' ? black : white;

    const rawHTML =
        `
    <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="100%"  version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
viewBox="4000 9000 13000 7000 "
 xmlns:xlink="http://www.w3.org/1999/xlink">
 <defs>
 <style type="text/css">
 <![CDATA[
 .str2 {
     stroke: #${color1};
     stroke-width: 7.62
 }

 .str1 {
     stroke: #${color1};
     stroke-width: 7.62
 }

 .str0 {
     stroke: #${color1};
     stroke-width: 151.45;
     stroke-linecap: round;
     stroke-linejoin: round
 }

 .fil0 {
     fill: none;
     fill-rule: nonzero
 }

 .fil4 {
     fill: #${color2}
 }

 .fil6 {
     fill: #952825
 }

 .fil5 {
     fill: #E31E24
 }

 .fil3 {
     fill: #FEFEFE
 }

 .fil1 {
     fill: #${color2};
     fill-rule: nonzero
 }

 .fil2 {
     fill: #${color1}
 }
 ]]>
</style>
 </defs>
 <g id="Warstwa_x0020_1">
  <metadata id="CorelCorpID_0Corel-Layer"/>
  <g id="_2600714096112">  
   <g id="_2639129046464">
   <path class="fil5" d="M8029 9736l4962 0c458,0 834,373 834,831l0 4120c0,458 -376,831 -834,831l-4962 0c-458,0 -834,-373 -834,-831l0 -4120c0,-458 376,-831 834,-831z"/>
    <path class="fil6" d="M10526 10758c433,0 783,350 783,782 0,432 -350,783 -783,783 -432,0 -782,-351 -782,-783 0,-432 350,-782 782,-782zm1184 2262c155,0 282,125 282,281 0,155 -127,281 -282,281 -204,0 -226,-135 -409,-2l-385 261c-119,92 -110,265 19,371 212,173 480,284 775,284 661,0 1196,-535 1196,-1195 0,-660 -535,-1195 -1196,-1195 -489,0 -909,294 -1095,715 -41,93 -140,92 -182,-3 -185,-420 -605,-712 -1094,-712 -659,0 -1195,535 -1195,1195 0,660 536,1195 1195,1195 296,0 563,-111 775,-284 130,-106 139,-279 19,-371l-383 -261c-183,-133 -206,2 -411,2 -155,0 -280,-126 -280,-281 0,-156 125,-281 280,-281 69,0 128,28 179,64l815 575c140,99 246,95 359,15l839 -590c52,-36 112,-64 179,-64z"/>
    <path class="fil3" d="M10512 10699c431,0 782,350 782,783 0,431 -351,782 -782,782 -433,0 -783,-351 -783,-782 0,-433 350,-783 783,-783zm1184 2263c155,0 281,125 281,280 0,155 -126,281 -281,281 -206,0 -227,-134 -410,-2l-385 261c-119,92 -110,265 20,371 212,173 479,285 775,285 660,0 1195,-536 1195,-1196 0,-659 -535,-1195 -1195,-1195 -490,0 -910,294 -1096,715 -41,93 -139,92 -181,-3 -186,-420 -606,-712 -1094,-712 -661,0 -1196,536 -1196,1195 0,660 535,1196 1196,1196 296,0 562,-112 774,-285 130,-106 139,-279 20,-371l-385 -261c-183,-132 -204,2 -409,2 -156,0 -282,-126 -282,-281 0,-155 126,-280 282,-280 68,0 127,27 178,63l815 576c140,98 245,94 359,14l840 -590c52,-36 110,-63 179,-63z"/>
   </g>
  </g>
 </g>
</svg>
    `
    return <div dangerouslySetInnerHTML={{ __html: rawHTML }} />


}