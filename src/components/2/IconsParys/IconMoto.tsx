import { useMantineColorScheme } from "@mantine/core";
import { useEffect, useState } from "react";

export const IconMotto = () => {
    const { colorScheme } = useMantineColorScheme();
    const [color, setColor] = useState<string>();

    useEffect(() => {
        colorScheme === 'dark' ? setColor('#fff') : setColor('#000')
    }, [colorScheme])
    return (
        <svg style={{ fill: color }} viewBox="0 0 169.9286 19.337503">

            <g transform="matrix(0.01,0,0,0.01,192.71714,-63.813067)">&#10;
                {/* "clip-rule:evenodd;fill-rule:evenodd;image-rendering:optimizeQuality;shape-rendering:geometricPrecision;text-rendering:geometricPrecision" */}
                <g style={{ clipRule: 'evenodd', fillRule: 'evenodd', shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision' }}
                    transform="translate(-21416.322,-9121.6933)">
                    <g>
                        <g>
                            <g>
                                <path
                                    d="m 2841,17122 c -18,-24 -34,-54 -46,-89 -12,-35 -21,-70 -28,-105 -7,-35 -12,-66 -15,-94 -2,-27 -4,-46 -5,-55 -8,-119 -11,-231 -9,-335 3,-104 7,-199 15,-286 7,-86 16,-164 24,-231 9,-68 16,-126 20,-172 5,-47 5,-83 2,-107 -3,-24 -13,-37 -29,-37 -17,0 -39,15 -65,45 -26,30 -55,70 -86,121 -31,51 -63,110 -96,178 -33,67 -65,138 -96,214 -31,75 -60,151 -87,229 -27,78 -50,153 -68,225 -18,72 -30,139 -37,200 -7,62 -6,114 3,156 3,14 -1,24 -12,29 -11,5 -23,5 -35,0 -13,-5 -23,-24 -30,-56 -7,-31 -11,-73 -14,-124 -2,-51 -3,-109 -2,-176 1,-67 3,-136 7,-210 4,-73 8,-148 14,-224 6,-76 11,-149 17,-221 6,-71 12,-137 18,-199 6,-63 12,-116 17,-161 1,-7 6,-14 16,-20 9,-6 19,-10 30,-12 10,-3 19,-1 27,3 8,5 12,15 10,29 -6,40 -12,88 -18,143 -7,55 -13,114 -20,177 -7,63 -13,129 -19,197 -7,69 -12,135 -18,200 -5,65 -9,127 -13,186 -3,58 -6,110 -7,155 10,-58 25,-121 44,-189 20,-69 43,-138 69,-208 26,-71 54,-141 85,-210 31,-70 63,-134 95,-195 33,-60 65,-115 99,-163 33,-49 64,-87 94,-114 31,-28 59,-44 85,-48 26,-4 48,7 67,35 5,7 7,31 5,70 -2,40 -5,91 -9,152 -5,62 -10,132 -16,210 -6,78 -12,159 -16,243 -4,83 -7,167 -9,252 -1,84 1,163 6,237 6,75 15,141 28,199 12,58 31,104 56,136 7,10 9,18 7,24 -3,5 -8,9 -15,11 -7,1 -15,1 -23,-2 -7,-2 -13,-7 -17,-13 z m 81,-725 c 1,-15 5,-25 11,-30 6,-5 12,-7 19,-5 7,1 13,5 18,11 5,7 8,14 8,22 -1,9 -2,24 -2,45 0,21 0,44 1,69 1,26 2,51 4,75 3,25 6,46 11,62 5,16 11,26 20,29 8,3 19,-4 31,-22 8,-12 18,-30 29,-56 12,-25 23,-51 34,-79 11,-28 22,-54 32,-80 10,-26 18,-45 25,-58 6,-12 12,-19 20,-22 7,-3 12,-3 17,-1 4,3 7,8 7,15 1,8 -2,16 -9,25 -10,24 -22,53 -35,88 -14,35 -28,69 -42,103 -15,33 -30,62 -46,88 -16,25 -32,40 -49,44 -5,1 -11,2 -20,3 -9,1 -18,0 -28,-5 -10,-4 -20,-12 -30,-24 -10,-12 -18,-30 -24,-54 -7,-24 -10,-55 -11,-95 -1,-39 2,-88 9,-148 z m 73,-101 c -5,8 -11,13 -19,17 -8,3 -15,5 -21,5 -7,0 -12,-2 -15,-6 -4,-4 -4,-8 -2,-14 2,-3 4,-6 5,-11 5,-6 11,-11 20,-13 8,-3 16,-3 23,1 8,5 11,12 9,21 z m 201,413 c -17,-16 -29,-35 -37,-56 -7,-22 -12,-43 -15,-63 -3,-20 -4,-38 -4,-53 0,-16 -1,-25 -4,-28 -4,-4 -4,-7 -3,-11 3,-10 6,-22 9,-38 3,-15 7,-32 12,-49 5,-18 11,-35 17,-52 7,-18 16,-33 27,-45 11,-13 25,-22 41,-28 16,-6 36,-7 58,-2 17,4 29,14 37,30 8,17 12,35 13,56 1,21 -2,43 -8,66 -6,23 -15,43 -28,60 -13,18 -29,31 -47,40 -19,9 -40,10 -63,4 -3,2 -4,12 -3,28 0,17 3,35 8,54 6,19 14,36 24,51 11,15 26,23 44,23 14,0 28,-6 41,-18 12,-12 25,-28 36,-47 12,-19 22,-41 31,-66 10,-24 18,-48 26,-72 7,-24 14,-47 20,-68 5,-21 10,-38 13,-52 1,-2 4,-4 8,-4 4,0 8,0 11,2 4,2 7,4 9,8 3,4 4,8 3,14 -12,69 -29,129 -48,181 -20,52 -43,92 -67,120 -24,29 -50,45 -78,49 -28,3 -56,-8 -83,-34 z m 85,-377 c -5,-5 -13,-5 -25,-2 -12,3 -23,19 -35,46 -7,16 -13,34 -18,55 -5,21 -7,39 -6,53 1,9 6,16 15,22 10,6 20,4 30,-5 14,-11 24,-25 32,-41 8,-15 14,-31 17,-47 4,-16 5,-31 2,-45 -2,-15 -6,-26 -12,-36 z m 802,135 c -5,19 -15,40 -28,60 -13,21 -29,40 -46,59 -17,18 -35,34 -54,49 -18,14 -35,26 -51,34 -2,1 -4,15 -4,43 -1,27 -2,62 -2,105 -1,42 -1,88 -2,137 0,50 0,97 0,141 0,4 -3,8 -7,11 -4,4 -10,7 -15,8 -6,1 -11,0 -16,-3 -5,-3 -8,-9 -8,-18 0,-8 1,-24 1,-48 1,-23 1,-50 2,-81 1,-31 1,-64 1,-99 0,-35 0,-67 -2,-97 -2,-30 -5,-55 -8,-76 -4,-21 -9,-34 -16,-39 -5,-4 -8,-9 -8,-15 0,-5 3,-10 8,-14 8,-6 13,-12 14,-19 1,-7 2,-15 3,-23 2,-46 5,-89 8,-129 4,-40 6,-81 8,-124 0,-9 3,-17 10,-23 7,-5 14,-9 22,-10 8,-1 15,0 23,4 7,4 10,12 10,23 0,6 1,9 2,8 0,-1 3,-1 7,-1 29,-5 54,-6 76,-4 22,2 40,8 53,18 14,11 22,26 26,46 3,19 1,45 -7,77 z m -97,-101 c -24,0 -41,10 -52,30 -10,20 -18,43 -22,69 -4,27 -6,53 -6,80 0,27 -1,48 -4,63 3,0 10,-4 20,-12 11,-9 22,-20 35,-33 12,-14 25,-29 37,-46 12,-17 22,-35 29,-54 8,-22 12,-39 13,-52 0,-13 -2,-22 -6,-29 -5,-7 -11,-11 -19,-13 -8,-2 -16,-3 -25,-3 z m 389,223 c -18,33 -41,57 -69,71 -28,14 -55,17 -80,8 -25,-9 -44,-29 -57,-61 -14,-33 -16,-79 -5,-139 2,-6 3,-12 4,-18 1,-6 -2,-12 -8,-18 -4,-4 -6,-7 -8,-11 -2,-4 -2,-8 0,-15 2,-6 5,-14 11,-24 6,-10 15,-23 27,-38 10,-14 23,-24 38,-31 15,-7 30,-11 46,-12 16,0 32,2 47,7 16,6 29,14 41,24 7,7 15,17 26,31 10,15 17,32 22,53 5,21 6,46 2,75 -4,29 -17,62 -37,98 z m -104,26 c 14,-2 27,-10 41,-24 14,-14 25,-32 32,-54 8,-21 12,-45 10,-72 -1,-26 -10,-53 -27,-79 -5,-8 -12,-13 -19,-15 -8,-3 -16,-4 -26,-4 -11,0 -21,7 -30,20 -9,13 -17,30 -23,49 -6,20 -11,40 -13,63 -3,22 -3,43 0,61 2,19 8,34 17,44 9,11 22,15 38,11 z m 670,24 c 12,3 17,9 14,18 -3,10 -14,18 -33,24 -49,13 -96,20 -139,23 -43,2 -78,0 -107,-5 -29,-6 -48,-16 -59,-30 -10,-14 -6,-32 12,-54 13,-16 28,-33 46,-52 18,-18 32,-35 44,-52 11,-17 17,-32 17,-46 -1,-13 -13,-23 -37,-30 -27,-7 -55,-15 -82,-24 -28,-8 -56,-14 -84,-18 -9,0 -15,-3 -18,-9 -3,-6 -3,-13 -1,-19 2,-7 6,-12 12,-17 7,-5 15,-6 24,-3 18,7 40,13 67,18 26,4 52,10 77,18 26,7 48,17 68,30 20,13 32,31 37,53 2,11 1,20 -4,29 -5,8 -8,17 -11,26 -4,12 -12,26 -26,41 -14,14 -27,29 -40,42 -13,13 -22,24 -29,34 -7,9 -5,15 5,15 40,5 72,5 96,3 24,-3 45,-5 62,-9 17,-3 31,-6 44,-8 13,-2 28,-1 45,2 z m 386,-355 c 17,-11 32,-11 44,-1 12,10 22,27 28,51 6,24 9,53 9,87 0,35 -3,71 -10,109 -9,41 -23,80 -43,118 -10,19 -23,29 -40,32 -17,2 -34,-3 -52,-15 -18,-12 -35,-32 -51,-60 -16,-28 -28,-62 -35,-104 2,5 0,16 -5,32 -4,16 -11,34 -19,53 -8,20 -16,39 -24,59 -9,19 -16,34 -21,45 -5,11 -13,17 -24,18 -10,1 -21,-1 -31,-6 -10,-6 -19,-14 -25,-24 -7,-10 -9,-21 -8,-33 0,0 0,-6 0,-17 0,-12 0,-26 0,-44 0,-17 0,-36 0,-56 0,-20 1,-40 1,-58 1,-18 1,-34 2,-47 1,-13 2,-21 4,-25 2,-6 2,-11 -1,-16 -2,-5 -1,-11 4,-17 4,-5 9,-8 16,-8 6,-1 11,1 16,5 9,8 15,19 18,35 1,7 1,22 1,44 -1,22 -1,46 -2,71 -1,25 -2,49 -3,72 -1,24 -1,41 -1,51 6,-5 13,-20 20,-43 7,-22 14,-47 20,-73 7,-26 13,-50 18,-72 4,-23 7,-36 8,-40 4,-14 8,-23 12,-26 5,-3 14,-5 29,-5 6,0 10,0 13,1 3,0 5,1 7,2 1,1 2,4 4,7 1,3 3,8 4,15 0,1 2,9 6,23 3,14 8,31 13,51 5,20 11,41 17,63 6,22 13,41 20,57 7,16 14,28 21,35 6,7 12,5 18,-5 16,-27 27,-54 34,-82 7,-28 12,-53 15,-76 2,-24 3,-43 3,-59 0,-17 -1,-27 -1,-32 0,-8 -2,-16 -6,-26 -5,-9 -9,-18 -13,-27 -4,-10 -7,-18 -10,-25 -3,-7 -3,-11 0,-14 z m 356,305 c -18,33 -41,57 -69,71 -28,14 -55,17 -80,8 -24,-9 -44,-29 -57,-61 -14,-33 -16,-79 -5,-139 2,-6 3,-12 4,-18 1,-6 -2,-12 -8,-18 -4,-4 -6,-7 -8,-11 -2,-4 -2,-8 0,-15 2,-6 5,-14 11,-24 6,-10 15,-23 27,-38 10,-14 23,-24 38,-31 15,-7 30,-11 46,-12 16,0 32,2 47,7 16,6 29,14 41,24 7,7 15,17 26,31 10,15 17,32 22,53 5,21 6,46 2,75 -4,29 -17,62 -37,98 z m -104,26 c 14,-2 27,-10 41,-24 14,-14 25,-32 33,-54 7,-21 11,-45 9,-72 -1,-26 -10,-53 -27,-79 -5,-8 -11,-13 -19,-15 -8,-3 -16,-4 -26,-4 -11,0 -20,7 -30,20 -9,13 -17,30 -23,49 -6,20 -11,40 -13,63 -3,22 -3,43 0,61 2,19 8,34 17,44 9,11 22,15 38,11 z m 234,-244 c 0,0 1,-11 2,-34 0,-23 2,-53 4,-89 2,-36 5,-78 9,-125 3,-46 8,-94 14,-142 5,-49 12,-96 20,-142 8,-46 18,-86 28,-121 11,-35 23,-62 37,-82 13,-20 29,-28 46,-25 11,3 20,6 25,8 6,3 6,9 -2,18 -16,22 -32,56 -45,102 -14,47 -26,101 -37,163 -11,63 -19,131 -26,204 -8,73 -13,147 -17,222 -4,75 -6,148 -7,220 -1,71 0,136 2,194 3,58 7,107 14,148 6,40 13,67 22,79 6,10 8,18 5,23 -2,5 -7,9 -13,10 -7,1 -14,1 -22,-2 -8,-2 -14,-6 -18,-12 -3,-7 -7,-13 -10,-20 -3,-7 -5,-13 -7,-20 -11,-45 -18,-92 -21,-140 -4,-47 -5,-95 -5,-144 0,-48 0,-97 2,-146 1,-49 1,-98 0,-147 z m 1025,1 c -1,5 -6,17 -12,37 -7,19 -15,43 -25,70 -10,27 -20,56 -31,87 -11,30 -22,59 -32,85 -10,27 -19,50 -27,69 -8,19 -13,30 -16,33 -8,10 -17,17 -28,20 -11,3 -21,4 -30,2 -10,-2 -20,-6 -28,-13 -9,-7 -16,-15 -22,-24 -12,-19 -22,-41 -29,-65 -8,-25 -12,-55 -13,-90 0,-6 -1,-9 -3,-7 -2,1 -3,4 -5,7 -28,71 -60,111 -98,119 -23,5 -42,3 -55,-8 -13,-10 -23,-26 -28,-46 -6,-21 -8,-45 -7,-73 1,-28 6,-56 13,-85 7,-29 16,-57 29,-84 12,-28 26,-51 42,-71 16,-20 34,-35 53,-44 20,-10 40,-11 60,-4 7,2 12,5 15,9 2,5 5,9 6,13 2,4 5,8 8,10 4,3 10,5 19,5 5,3 9,14 11,33 1,19 3,42 4,70 1,27 1,57 2,89 0,31 2,62 4,91 3,29 7,54 13,75 6,22 14,36 26,44 1,1 5,-8 12,-25 7,-17 15,-39 26,-66 10,-27 21,-56 32,-87 12,-31 23,-60 33,-88 10,-27 18,-50 25,-69 7,-18 10,-28 10,-29 2,-6 5,-9 11,-12 5,-2 10,-2 16,-1 6,1 11,4 15,8 4,4 5,9 4,15 z m -403,291 c 7,0 16,-9 28,-27 12,-18 24,-40 35,-67 12,-27 23,-56 32,-88 10,-32 16,-62 19,-89 5,-43 -5,-65 -29,-65 -12,0 -24,9 -37,25 -13,17 -25,37 -36,62 -11,24 -20,51 -28,80 -8,29 -13,56 -16,80 -2,25 -1,46 4,63 4,17 13,26 28,26 z m 653,-311 c 28,-5 51,-2 68,10 17,12 23,25 20,41 -7,28 -21,54 -40,78 -20,25 -43,48 -69,69 -27,21 -55,40 -86,56 -30,16 -60,29 -88,39 -4,2 -7,3 -9,5 -3,1 -6,5 -9,11 -3,6 -7,16 -11,29 -4,13 -9,33 -15,58 h -1 c -2,27 -2,51 -1,73 1,23 1,39 -1,48 -1,9 -4,14 -10,16 -5,2 -12,3 -20,1 -7,-2 -14,-4 -21,-8 -6,-4 -11,-7 -14,-11 -7,-8 -10,-17 -10,-28 0,-11 0,-22 0,-32 1,-31 3,-56 4,-77 2,-20 2,-38 3,-54 0,-17 1,-32 1,-47 1,-15 1,-32 1,-52 l 32,-732 c 2,-16 3,-35 4,-56 1,-22 1,-43 2,-63 0,-20 0,-38 0,-54 0,-17 0,-28 0,-33 0,-11 4,-19 11,-24 7,-5 15,-8 23,-8 8,0 15,1 21,6 6,4 9,10 9,17 0,17 1,33 2,49 2,16 0,32 -3,48 -5,26 -7,53 -5,79 2,26 1,52 -3,78 0,0 -1,11 -2,31 -1,20 -3,47 -5,80 -2,34 -4,72 -6,114 -2,42 -4,85 -7,130 -3,44 -5,88 -7,131 -3,43 -4,81 -6,114 -1,34 -2,61 -2,82 0,22 1,32 2,33 0,0 2,-5 7,-16 5,-11 12,-24 21,-41 8,-16 19,-34 33,-54 13,-19 29,-38 48,-56 18,-18 39,-35 62,-49 23,-15 49,-25 77,-31 z m -178,240 c 19,-8 40,-19 64,-35 24,-16 46,-33 66,-51 21,-18 38,-36 52,-54 14,-19 21,-34 21,-46 0,-11 -5,-15 -14,-13 -6,2 -14,5 -26,8 -12,4 -27,12 -44,25 -17,12 -36,31 -57,55 -21,25 -42,59 -65,102 -2,4 -1,7 3,9 z"
                                    id="path1-4" />&#10;
                                <path
                                    d="m 7530,16692 c 3,-1 7,-5 12,-11 5,-7 12,-13 19,-20 7,-6 15,-12 23,-16 8,-5 17,-7 25,-6 8,2 11,5 8,10 -6,10 -11,17 -16,22 -5,5 -10,10 -15,15 -5,4 -11,9 -19,16 -7,6 -16,15 -27,26 -7,6 -10,13 -10,20 1,42 1,85 0,132 -2,46 -4,92 -8,139 -3,46 -8,91 -13,136 -5,44 -11,84 -18,121 -7,36 -13,67 -21,93 -7,26 -14,45 -22,56 -5,6 -12,10 -22,11 -10,2 -21,0 -32,-6 -11,-5 -21,-14 -31,-26 -10,-12 -17,-28 -23,-48 -9,-34 -13,-72 -13,-115 0,-43 3,-87 9,-131 5,-44 13,-87 24,-129 10,-42 21,-78 33,-110 12,-30 23,-53 33,-70 10,-17 19,-31 27,-42 8,-11 14,-21 19,-28 4,-8 6,-17 6,-29 0,-36 0,-63 0,-79 1,-17 1,-27 0,-30 0,-3 -3,-1 -7,6 -4,8 -10,18 -19,30 -22,29 -43,48 -63,56 -20,8 -38,9 -55,3 -16,-6 -30,-19 -43,-37 -12,-19 -23,-40 -31,-64 -8,-24 -14,-50 -17,-76 -2,-27 -2,-53 0,-77 2,-16 3,-32 4,-48 1,-16 3,-31 6,-44 2,-14 7,-25 14,-35 6,-9 17,-16 32,-20 8,-3 13,-1 14,6 1,6 1,14 0,22 -1,8 -3,16 -6,24 -3,7 -4,10 -4,10 -5,19 -7,44 -6,77 0,32 4,64 9,95 6,32 14,59 24,82 11,23 23,36 36,37 14,2 29,-11 46,-38 17,-28 35,-76 54,-147 10,-34 16,-63 17,-86 1,-23 3,-41 4,-56 1,-14 5,-25 10,-31 5,-7 17,-12 35,-14 5,2 8,10 10,25 2,15 3,34 2,57 0,24 -1,51 -3,81 -2,29 -4,60 -5,91 -2,31 -4,61 -5,91 -1,30 -2,56 -1,79 z m -126,684 c 1,2 1,4 1,6 -1,3 1,3 4,2 5,-1 9,-9 13,-23 4,-14 8,-31 12,-52 4,-21 8,-44 11,-69 4,-25 7,-48 10,-70 2,-22 4,-41 6,-57 1,-17 2,-26 3,-30 3,-29 6,-61 9,-94 3,-33 5,-64 5,-92 1,-28 2,-51 1,-69 0,-19 -1,-28 -3,-28 -9,8 -19,24 -29,48 -10,24 -20,52 -29,86 -9,34 -17,71 -25,111 -7,41 -11,81 -13,121 -3,40 -2,78 2,115 3,37 11,69 22,95 z m 912,-909 c -5,19 -14,40 -27,60 -14,21 -29,40 -46,59 -18,18 -36,34 -54,49 -19,14 -36,26 -52,34 -2,1 -3,15 -4,43 -1,27 -1,62 -2,105 0,42 -1,88 -1,137 -1,50 -1,97 -1,141 0,4 -2,8 -6,11 -5,4 -10,7 -16,8 -6,1 -11,0 -16,-3 -5,-3 -7,-9 -7,-18 0,-8 0,-24 1,-48 0,-23 1,-50 2,-81 1,-31 1,-64 1,-99 0,-35 -1,-67 -3,-97 -1,-30 -4,-55 -8,-76 -3,-21 -8,-34 -16,-39 -5,-4 -8,-9 -8,-15 0,-5 3,-10 8,-14 8,-6 13,-12 14,-19 2,-7 3,-15 4,-23 1,-46 4,-89 8,-129 3,-40 6,-81 8,-124 0,-9 3,-17 10,-23 6,-5 14,-9 21,-10 8,-1 16,0 23,4 7,4 11,12 11,23 0,6 0,9 1,8 1,-1 4,-1 8,-1 28,-5 54,-6 76,-4 22,2 40,8 53,18 13,11 21,26 25,46 4,19 1,45 -7,77 z m -97,-101 c -23,0 -41,10 -51,30 -11,20 -18,43 -22,69 -4,27 -6,53 -6,80 0,27 -2,48 -4,63 2,0 9,-4 20,-12 10,-9 22,-20 34,-33 13,-14 25,-29 37,-46 13,-17 23,-35 30,-54 8,-22 12,-39 12,-52 1,-13 -1,-22 -6,-29 -4,-7 -10,-11 -18,-13 -8,-2 -17,-3 -26,-3 z m 443,-96 c -14,0 -24,4 -33,10 -8,7 -16,15 -23,24 -30,39 -53,79 -69,120 -15,42 -27,81 -35,119 -8,37 -13,72 -17,104 -4,32 -8,58 -13,78 -4,21 -12,33 -21,39 -9,5 -24,1 -44,-13 1,-59 3,-114 6,-167 3,-52 3,-103 0,-152 0,-9 1,-18 1,-30 0,-12 2,-23 5,-34 2,-11 6,-21 11,-31 5,-9 12,-15 22,-18 8,-3 14,-2 20,0 5,3 9,7 11,12 2,5 3,10 3,15 -1,5 -2,8 -5,10 -5,4 -9,12 -10,23 -1,11 -2,23 -2,35 0,12 1,23 1,33 1,10 1,15 0,17 6,-23 14,-45 24,-66 11,-20 22,-41 34,-62 10,-19 20,-34 29,-46 9,-11 17,-21 26,-28 8,-7 16,-12 24,-17 8,-5 17,-9 27,-14 15,-5 28,-6 38,-2 11,5 18,10 22,16 3,6 3,12 -2,19 -4,6 -14,8 -30,6 z m 486,369 c 12,3 17,9 14,18 -3,10 -14,18 -33,24 -49,13 -96,20 -139,23 -43,2 -78,0 -107,-5 -29,-6 -48,-16 -59,-30 -10,-14 -6,-32 12,-54 13,-16 28,-33 46,-52 18,-18 32,-35 44,-52 11,-17 17,-32 17,-46 -1,-13 -13,-23 -37,-30 -27,-7 -55,-15 -82,-24 -28,-8 -56,-14 -84,-18 -9,0 -15,-3 -18,-9 -3,-6 -3,-13 -1,-19 2,-7 6,-12 12,-17 7,-5 15,-6 24,-3 18,7 40,13 67,18 26,4 52,10 77,18 26,7 48,17 68,30 20,13 32,31 37,53 2,11 1,20 -4,29 -5,8 -8,17 -11,26 -4,12 -12,26 -26,41 -14,14 -27,29 -40,42 -13,13 -22,24 -29,34 -7,9 -5,15 5,15 40,5 72,5 96,3 24,-3 45,-5 62,-9 17,-3 31,-6 44,-8 13,-2 28,-1 45,2 z m 373,53 c 2,-1 6,-5 12,-11 5,-7 11,-13 18,-20 7,-6 15,-12 24,-16 8,-5 16,-7 24,-6 9,2 12,5 8,10 -5,10 -10,17 -15,22 -5,5 -10,10 -15,15 -6,4 -12,9 -19,16 -7,6 -16,15 -28,26 -6,6 -9,13 -9,20 1,42 0,85 -1,132 -1,46 -4,92 -7,139 -4,46 -8,91 -13,136 -6,44 -12,84 -18,121 -7,36 -14,67 -21,93 -7,26 -15,45 -23,56 -4,6 -11,10 -21,11 -11,2 -21,0 -32,-6 -11,-5 -22,-14 -31,-26 -10,-12 -18,-28 -23,-48 -9,-34 -13,-72 -13,-115 0,-43 3,-87 8,-131 6,-44 14,-87 24,-129 10,-42 22,-78 34,-110 12,-30 22,-53 33,-70 10,-17 19,-31 27,-42 8,-11 14,-21 18,-28 5,-8 7,-17 7,-29 -1,-36 -1,-63 0,-79 1,-17 1,-27 0,-30 -1,-3 -3,-1 -7,6 -4,8 -11,18 -20,30 -22,29 -43,48 -63,56 -20,8 -38,9 -54,3 -16,-6 -31,-19 -43,-37 -13,-19 -23,-40 -31,-64 -9,-24 -14,-50 -17,-76 -3,-27 -3,-53 0,-77 2,-16 3,-32 4,-48 1,-16 3,-31 5,-44 3,-14 8,-25 14,-35 7,-9 18,-16 33,-20 8,-3 12,-1 14,6 1,6 1,14 0,22 -2,8 -4,16 -6,24 -3,7 -4,10 -4,10 -6,19 -8,44 -7,77 1,32 4,64 10,95 6,32 14,59 24,82 10,23 22,36 36,37 14,2 29,-11 46,-38 16,-28 35,-76 54,-147 10,-34 15,-63 17,-86 1,-23 2,-41 4,-56 1,-14 4,-25 10,-31 5,-7 16,-12 34,-14 5,2 9,10 11,25 2,15 2,34 2,57 -1,24 -2,51 -4,81 -1,29 -3,60 -5,91 -2,31 -3,61 -5,91 -1,30 -1,56 0,79 z m -126,684 c 1,2 1,4 0,6 0,3 1,3 5,2 4,-1 9,-9 13,-23 4,-14 8,-31 12,-52 4,-21 7,-44 11,-69 3,-25 6,-48 9,-70 3,-22 5,-41 6,-57 1,-17 3,-26 3,-30 4,-29 7,-61 10,-94 2,-33 4,-64 5,-92 1,-28 1,-51 1,-69 -1,-19 -2,-28 -4,-28 -8,8 -18,24 -28,48 -10,24 -20,52 -29,86 -10,34 -18,71 -25,111 -7,41 -12,81 -14,121 -2,40 -1,78 2,115 4,37 11,69 23,95 z m 492,-909 c -5,19 -14,40 -28,60 -13,21 -28,40 -45,59 -18,18 -36,34 -54,49 -19,14 -36,26 -52,34 -2,1 -3,15 -4,43 -1,27 -1,62 -2,105 0,42 -1,88 -1,137 -1,50 -1,97 -1,141 0,4 -2,8 -7,11 -4,4 -9,7 -15,8 -6,1 -11,0 -16,-3 -5,-3 -7,-9 -7,-18 0,-8 0,-24 1,-48 0,-23 1,-50 2,-81 1,-31 1,-64 1,-99 0,-35 -1,-67 -3,-97 -1,-30 -4,-55 -8,-76 -3,-21 -9,-34 -16,-39 -5,-4 -8,-9 -8,-15 0,-5 3,-10 8,-14 8,-6 13,-12 14,-19 2,-7 3,-15 4,-23 1,-46 4,-89 8,-129 3,-40 6,-81 8,-124 0,-9 3,-17 10,-23 6,-5 13,-9 21,-10 8,-1 16,0 23,4 7,4 11,12 11,23 0,6 0,9 1,8 1,-1 4,-1 8,-1 28,-5 54,-6 76,-4 22,2 39,8 53,18 13,11 21,26 25,46 4,19 1,45 -7,77 z m -97,-101 c -23,0 -41,10 -51,30 -11,20 -18,43 -22,69 -4,27 -6,53 -6,80 0,27 -2,48 -4,63 2,0 9,-4 20,-12 10,-9 22,-20 34,-33 13,-14 25,-29 37,-46 13,-17 23,-35 30,-54 8,-22 12,-39 12,-52 1,-13 -1,-22 -6,-29 -4,-7 -10,-11 -18,-13 -8,-2 -17,-3 -26,-3 z m 626,6 c -2,5 -6,17 -13,37 -6,19 -15,43 -24,70 -10,27 -20,56 -32,87 -11,30 -21,59 -31,85 -11,27 -20,50 -28,69 -8,19 -13,30 -16,33 -8,10 -17,17 -27,20 -11,3 -21,4 -31,2 -10,-2 -19,-6 -28,-13 -9,-7 -16,-15 -21,-24 -12,-19 -22,-41 -30,-65 -8,-25 -12,-55 -13,-90 0,-6 0,-9 -2,-7 -2,1 -4,4 -6,7 -27,71 -60,111 -98,119 -23,5 -41,3 -54,-8 -14,-10 -23,-26 -29,-46 -6,-21 -8,-45 -6,-73 1,-28 5,-56 12,-85 7,-29 17,-57 29,-84 13,-28 27,-51 43,-71 16,-20 33,-35 53,-44 19,-10 39,-11 60,-4 7,2 12,5 14,9 3,5 5,9 7,13 2,4 4,8 8,10 3,3 10,5 19,5 5,3 8,14 10,33 2,19 3,42 4,70 1,27 2,57 2,89 1,31 2,62 5,91 2,29 7,54 12,75 6,22 15,36 26,44 1,1 5,-8 12,-25 7,-17 16,-39 26,-66 10,-27 21,-56 33,-87 11,-31 22,-60 32,-88 10,-27 19,-50 25,-69 7,-18 10,-28 10,-29 2,-6 6,-9 11,-12 5,-2 11,-2 17,-1 5,1 10,4 14,8 4,4 6,9 5,15 z m -404,291 c 7,0 17,-9 29,-27 12,-18 23,-40 35,-67 11,-27 22,-56 32,-88 10,-32 16,-62 18,-89 6,-43 -4,-65 -29,-65 -11,0 -24,9 -36,25 -13,17 -25,37 -36,62 -11,24 -21,51 -29,80 -8,29 -13,56 -15,80 -2,25 -1,46 3,63 5,17 14,26 28,26 z m 745,-1125 c 13,0 20,9 19,27 0,18 -4,38 -11,61 -7,22 -15,45 -23,66 -9,22 -14,36 -17,43 -9,28 -18,54 -26,79 -7,26 -14,51 -21,77 -6,26 -13,53 -18,82 -6,28 -11,59 -16,93 -1,11 -3,37 -6,76 -4,39 -7,86 -10,139 -3,53 -5,111 -6,172 0,61 2,120 6,177 5,56 13,107 24,152 11,45 27,79 48,100 10,10 13,18 9,23 -4,6 -11,7 -21,3 -22,-8 -41,-25 -56,-52 -15,-26 -27,-58 -36,-95 -8,-38 -15,-78 -19,-122 -5,-44 -8,-87 -10,-130 -2,-43 -2,-84 -2,-121 1,-38 1,-70 1,-95 0,-26 -1,-43 -1,-52 -1,-8 -3,-5 -7,11 -18,49 -31,86 -39,111 -9,24 -15,42 -19,54 -4,12 -7,22 -9,28 -2,6 -7,16 -13,29 -6,13 -15,34 -27,61 -12,28 -29,69 -52,123 -12,27 -25,44 -38,52 -14,7 -27,9 -39,6 -12,-3 -22,-10 -30,-21 -8,-11 -12,-21 -12,-31 -1,-16 1,-38 7,-65 6,-28 14,-57 23,-87 8,-29 18,-57 28,-84 9,-26 17,-46 23,-58 18,-38 36,-64 54,-76 17,-12 35,-19 54,-19 2,0 4,1 7,3 2,2 5,2 8,2 2,0 5,-1 8,-4 2,-3 4,-8 6,-17 8,-27 17,-52 25,-75 9,-24 18,-46 26,-68 9,-22 17,-45 26,-68 8,-23 16,-49 23,-78 2,-6 4,-17 6,-34 2,-17 5,-38 8,-62 4,-24 8,-50 13,-78 5,-28 10,-56 17,-83 6,-27 13,-53 20,-77 8,-25 16,-45 26,-61 7,-11 16,-21 27,-28 10,-7 24,-10 42,-9 z m -288,798 c 1,-3 2,-6 3,-9 2,-2 0,-4 -4,-6 -7,-2 -14,3 -22,15 -9,13 -18,29 -27,50 -10,21 -20,44 -29,69 -9,26 -17,51 -24,75 -7,24 -12,45 -15,64 -4,18 -5,31 -3,39 7,-17 14,-33 21,-49 7,-15 15,-34 24,-55 9,-21 20,-47 32,-77 11,-31 26,-69 44,-116 z m 327,373 c -17,-16 -29,-35 -37,-56 -7,-22 -12,-43 -15,-63 -3,-20 -4,-38 -4,-53 0,-16 -1,-25 -4,-28 -4,-4 -5,-7 -3,-11 3,-10 6,-22 9,-38 3,-15 7,-32 12,-49 5,-18 10,-35 17,-52 7,-18 16,-33 27,-45 11,-13 24,-22 41,-28 16,-6 35,-7 58,-2 16,4 29,14 37,30 8,17 12,35 13,56 1,21 -2,43 -8,66 -6,23 -16,43 -28,60 -13,18 -29,31 -48,40 -18,9 -39,10 -62,4 -3,2 -4,12 -3,28 0,17 3,35 8,54 6,19 14,36 24,51 11,15 25,23 44,23 14,0 28,-6 41,-18 12,-12 25,-28 36,-47 12,-19 22,-41 31,-66 10,-24 18,-48 25,-72 8,-24 15,-47 20,-68 6,-21 11,-38 14,-52 1,-2 4,-4 8,-4 4,0 7,0 11,2 3,2 7,4 9,8 3,4 4,8 3,14 -13,69 -29,129 -49,181 -20,52 -42,92 -66,120 -24,29 -50,45 -78,49 -28,3 -56,-8 -83,-34 z m 85,-377 c -5,-5 -13,-5 -25,-2 -12,3 -24,19 -35,46 -7,16 -13,34 -18,55 -5,21 -7,39 -6,53 1,9 6,16 15,22 10,6 20,4 30,-5 13,-11 24,-25 32,-41 8,-15 14,-31 17,-47 4,-16 4,-31 2,-45 -2,-15 -6,-26 -12,-36 z"
                                    id="path2" />&#10;
                                <path
                                    d="m 11064,15835 c 5,-18 14,-30 27,-36 13,-6 22,0 29,17 -1,8 -2,28 -4,60 -1,32 -3,70 -4,113 -2,43 -4,89 -6,137 -1,49 -3,95 -4,137 -2,42 -3,78 -5,108 -2,30 -3,48 -4,53 0,6 1,9 3,9 3,-5 10,-13 20,-23 9,-10 21,-21 33,-32 12,-11 26,-22 40,-33 14,-10 27,-18 40,-22 13,-5 22,-6 28,-2 6,4 9,10 9,18 1,7 0,15 -4,24 -3,9 -7,15 -12,20 -7,8 -15,16 -25,24 -9,8 -19,16 -29,24 -10,8 -20,16 -30,24 -11,8 -19,14 -26,20 0,7 1,18 3,34 2,16 6,33 12,50 6,17 14,32 24,45 10,12 24,19 42,19 9,0 22,-7 38,-22 16,-14 32,-33 48,-55 16,-22 30,-47 44,-75 13,-28 22,-55 26,-81 3,-15 7,-24 13,-29 6,-5 11,-7 17,-5 5,2 9,6 11,14 3,7 3,16 -1,27 -29,87 -59,152 -90,195 -31,44 -61,70 -89,78 -28,8 -54,1 -77,-21 -23,-22 -41,-56 -53,-101 -4,-13 -7,-13 -9,-1 -2,13 -4,30 -5,52 0,23 -1,46 -1,72 0,25 1,44 3,57 v 4 c 0,7 -3,13 -8,19 -4,7 -10,10 -16,10 -8,0 -16,-2 -23,-7 -7,-5 -10,-11 -10,-19 -1,-7 -2,-14 -2,-21 0,-7 1,-14 3,-22 1,-5 1,-11 1,-20 0,-9 0,-18 0,-27 -1,-10 -1,-19 -1,-28 0,-8 0,-15 0,-20 2,-32 2,-65 2,-97 0,-32 -1,-65 -1,-97 z m 931,468 c 1,-5 4,-9 8,-11 5,-2 10,-2 15,0 5,1 10,5 14,11 4,5 7,14 8,24 1,15 1,34 0,59 -1,26 -2,53 -4,82 -2,30 -3,60 -5,92 -1,31 -2,60 -3,88 -1,27 -1,51 1,70 1,20 3,34 7,40 4,6 4,11 2,14 -2,4 -5,8 -7,11 -7,7 -14,9 -20,7 -5,-1 -10,-5 -15,-11 -4,-7 -8,-14 -10,-24 -2,-9 -3,-19 -2,-29 0,-3 0,-9 1,-21 0,-11 1,-24 1,-40 1,-16 1,-32 1,-50 0,-17 0,-33 1,-48 0,-15 0,-27 0,-37 0,-9 0,-14 0,-14 -2,3 -5,13 -10,29 -6,15 -12,33 -18,51 -6,19 -12,36 -17,52 -5,16 -9,27 -11,31 -9,25 -20,43 -30,56 -11,13 -21,21 -31,24 -11,4 -20,3 -29,-1 -9,-5 -16,-13 -22,-23 -10,-17 -17,-40 -21,-69 -4,-30 -6,-59 -7,-90 -1,-30 -1,-57 0,-82 1,-24 1,-40 1,-47 -1,-13 -1,-26 1,-39 1,-14 4,-27 8,-38 4,-11 9,-20 16,-28 7,-7 16,-11 27,-11 7,0 12,3 14,8 3,6 4,12 4,18 -1,7 -2,13 -3,19 -1,6 -2,9 -3,11 -6,13 -11,30 -14,52 -2,21 -4,43 -5,67 -1,24 -1,48 1,73 1,24 3,46 5,66 2,19 5,35 8,48 3,13 6,20 10,20 5,2 12,-6 20,-25 8,-19 17,-42 26,-71 10,-28 20,-60 30,-94 9,-34 18,-67 26,-98 8,-31 15,-58 21,-81 6,-23 9,-36 10,-41 z m 400,-324 c -17,66 -35,123 -54,172 -19,49 -38,92 -55,129 -18,37 -35,69 -51,97 -16,27 -29,52 -40,75 -1,10 -3,20 -3,29 0,8 -1,16 -2,23 3,-2 14,-5 35,-10 20,-5 42,-9 65,-13 23,-3 43,-5 62,-5 19,0 28,4 28,12 -2,15 -11,26 -28,32 -17,7 -36,11 -57,15 -21,3 -42,6 -62,8 -21,3 -36,8 -46,17 -6,6 -10,24 -14,53 -3,29 -4,65 -5,109 0,43 0,91 1,144 1,53 2,107 4,161 2,55 3,108 4,159 2,52 3,97 4,137 0,5 -1,10 -4,17 -2,6 -5,10 -10,13 -4,3 -9,4 -15,3 -7,0 -13,-5 -20,-15 -2,-3 -4,-16 -6,-39 -1,-23 -3,-53 -4,-89 -1,-36 -1,-76 -2,-122 -1,-45 -2,-91 -2,-137 -1,-47 -1,-92 -2,-136 0,-44 -1,-83 -2,-118 -1,-35 -1,-63 -2,-83 -1,-21 -2,-31 -3,-31 1,-5 3,-22 5,-50 3,-28 8,-63 14,-106 7,-43 16,-91 26,-145 11,-53 24,-109 40,-166 12,-44 24,-81 36,-112 11,-30 22,-56 32,-77 9,-21 19,-39 27,-52 8,-14 16,-26 22,-37 5,-8 13,-16 24,-22 10,-6 21,-9 32,-10 10,-1 20,1 28,6 9,5 14,14 15,27 5,24 5,47 0,70 -4,22 -9,44 -15,67 z m -210,388 c 55,-121 96,-215 122,-284 26,-69 41,-116 45,-142 4,-26 1,-33 -11,-21 -11,12 -26,38 -45,78 -18,40 -38,92 -59,156 -22,64 -39,135 -52,213 z m 476,222 c -17,33 -40,57 -69,71 -28,14 -54,17 -79,8 -25,-9 -44,-29 -58,-61 -14,-33 -15,-79 -5,-139 2,-6 3,-12 4,-18 1,-6 -1,-12 -8,-18 -3,-4 -6,-7 -8,-11 -1,-4 -1,-8 0,-15 2,-6 6,-14 12,-24 5,-10 14,-23 27,-38 10,-14 22,-24 37,-31 15,-7 31,-11 47,-12 15,0 31,2 47,7 15,6 29,14 40,24 7,7 16,17 26,31 10,15 18,32 23,53 4,21 5,46 1,75 -4,29 -16,62 -37,98 z m -103,26 c 13,-2 27,-10 40,-24 14,-14 25,-32 33,-54 8,-21 11,-45 10,-72 -1,-26 -11,-53 -27,-79 -6,-8 -12,-13 -20,-15 -7,-3 -16,-4 -26,-4 -10,0 -20,7 -29,20 -10,13 -17,30 -24,49 -6,20 -10,40 -13,63 -3,22 -3,43 0,61 3,19 8,34 17,44 9,11 22,15 39,11 z m 479,-345 c -13,0 -24,4 -32,10 -9,7 -16,15 -24,24 -30,39 -52,79 -68,120 -15,42 -27,81 -35,119 -8,37 -14,72 -17,104 -4,32 -8,58 -13,78 -5,21 -12,33 -21,39 -10,5 -24,1 -45,-13 1,-59 3,-114 6,-167 3,-52 4,-103 1,-152 0,-9 0,-18 1,-30 0,-12 2,-23 4,-34 3,-11 7,-21 12,-31 4,-9 12,-15 21,-18 8,-3 15,-2 20,0 6,3 9,7 12,12 2,5 3,10 2,15 0,5 -2,8 -4,10 -6,4 -9,12 -10,23 -2,11 -2,23 -2,35 0,12 0,23 1,33 1,10 1,15 0,17 5,-23 13,-45 24,-66 11,-20 22,-41 33,-62 11,-19 20,-34 29,-46 9,-11 18,-21 26,-28 9,-7 17,-12 25,-17 8,-5 17,-9 26,-14 15,-5 28,-6 39,-2 10,5 18,10 21,16 4,6 3,12 -1,19 -5,6 -15,8 -31,6 z m 428,489 c 0,11 -3,19 -9,23 -7,4 -13,6 -20,5 -7,0 -14,-3 -20,-8 -5,-5 -9,-11 -10,-20 0,0 0,-10 0,-29 0,-20 0,-45 0,-74 -1,-29 -2,-60 -3,-95 -1,-34 -3,-66 -5,-94 -2,-29 -6,-54 -10,-73 -3,-20 -8,-29 -13,-29 -6,4 -12,11 -18,21 -7,10 -13,21 -20,33 -6,13 -12,26 -18,41 -6,14 -11,28 -15,41 -10,39 -17,72 -20,98 -2,26 -4,46 -5,62 -1,15 -2,26 -3,33 -2,7 -7,11 -16,11 -9,1 -15,-1 -20,-4 -5,-3 -8,-8 -10,-13 -2,-5 -3,-11 -4,-18 0,-7 0,-13 0,-19 0,-19 0,-37 -1,-53 0,-16 -1,-31 -1,-47 -1,-16 -2,-33 -3,-50 -1,-18 -2,-39 -3,-63 -1,-13 -3,-18 -7,-16 -4,3 -10,12 -16,25 -7,14 -14,32 -21,54 -7,22 -13,45 -19,70 -6,26 -11,51 -14,77 -4,26 -5,50 -4,72 1,9 -2,14 -7,15 -6,1 -13,2 -20,1 -6,-1 -12,-3 -17,-6 -4,-4 -7,-9 -8,-15 -3,-45 -6,-90 -8,-134 -2,-45 -1,-88 1,-131 1,-24 2,-44 1,-58 0,-14 -1,-25 -1,-32 0,-8 1,-13 2,-18 2,-4 4,-9 9,-15 1,-3 5,-6 10,-8 5,-3 10,-4 15,-5 6,0 10,0 15,2 4,1 7,4 8,8 1,1 1,3 1,6 -1,2 -1,5 -1,6 -2,10 -3,18 -5,24 -1,7 -2,14 -4,24 -1,9 -2,22 -2,38 -1,17 -1,39 -1,68 0,3 1,5 2,6 1,0 2,-2 3,-6 6,-34 15,-62 27,-85 11,-23 23,-39 36,-49 13,-10 26,-13 37,-11 12,3 22,13 30,30 2,4 5,12 8,24 3,13 5,24 7,34 0,2 4,-3 12,-15 8,-11 17,-25 27,-40 10,-16 21,-31 32,-46 11,-14 20,-24 27,-28 24,-14 43,-17 56,-8 13,10 19,25 19,48 z m 296,-170 c -18,33 -41,57 -69,71 -28,14 -55,17 -80,8 -25,-9 -44,-29 -58,-61 -13,-33 -15,-79 -4,-139 2,-6 3,-12 4,-18 1,-6 -2,-12 -8,-18 -4,-4 -6,-7 -8,-11 -2,-4 -2,-8 0,-15 2,-6 5,-14 11,-24 6,-10 15,-23 27,-38 10,-14 23,-24 38,-31 15,-7 30,-11 46,-12 16,0 32,2 47,7 16,6 29,14 41,24 7,7 15,17 26,31 10,15 17,32 22,53 5,21 5,46 1,75 -3,29 -16,62 -36,98 z m -104,26 c 14,-2 27,-10 41,-24 14,-14 24,-32 32,-54 8,-21 12,-45 10,-72 -1,-26 -10,-53 -27,-79 -5,-8 -12,-13 -19,-15 -8,-3 -16,-4 -26,-4 -11,0 -21,7 -30,20 -9,13 -17,30 -23,49 -6,20 -11,40 -13,63 -3,22 -3,43 0,61 2,19 8,34 17,44 9,11 22,15 38,11 z m 534,-331 c 17,-11 32,-11 44,-1 12,10 22,27 28,51 6,24 9,53 9,87 0,35 -3,71 -10,109 -9,41 -23,80 -43,118 -10,19 -23,29 -40,32 -17,2 -34,-3 -52,-15 -18,-12 -35,-32 -51,-60 -16,-28 -28,-62 -35,-104 2,5 0,16 -4,32 -5,16 -12,34 -20,53 -8,20 -16,39 -24,59 -9,19 -16,34 -21,45 -5,11 -13,17 -24,18 -10,1 -21,-1 -31,-6 -10,-6 -19,-14 -25,-24 -7,-10 -9,-21 -8,-33 0,0 0,-6 0,-17 0,-12 0,-26 0,-44 0,-17 0,-36 0,-56 0,-20 1,-40 1,-58 1,-18 1,-34 2,-47 1,-13 2,-21 4,-25 2,-6 2,-11 -1,-16 -2,-5 -1,-11 4,-17 4,-5 10,-8 16,-8 6,-1 11,1 16,5 9,8 16,19 18,35 1,7 1,22 1,44 -1,22 -1,46 -2,71 -1,25 -2,49 -3,72 -1,24 -1,41 -1,51 6,-5 13,-20 20,-43 7,-22 14,-47 20,-73 7,-26 13,-50 18,-72 5,-23 7,-36 8,-40 4,-14 8,-23 12,-26 5,-3 14,-5 29,-5 6,0 10,0 13,1 3,0 5,1 7,2 1,1 2,4 4,7 1,3 3,8 4,15 0,1 2,9 6,23 3,14 8,31 13,51 5,20 11,41 17,63 6,22 13,41 20,57 7,16 14,28 21,35 6,7 12,5 18,-5 16,-27 27,-54 34,-82 7,-28 12,-53 15,-76 2,-24 4,-43 3,-59 0,-17 -1,-27 -1,-32 0,-8 -2,-16 -6,-26 -5,-9 -9,-18 -13,-27 -4,-10 -7,-18 -10,-25 -2,-7 -2,-11 0,-14 z m 592,88 c -1,5 -5,17 -12,37 -7,19 -15,43 -25,70 -9,27 -20,56 -31,87 -11,30 -22,59 -32,85 -10,27 -19,50 -27,69 -8,19 -13,30 -16,33 -8,10 -17,17 -28,20 -10,3 -21,4 -30,2 -10,-2 -19,-6 -28,-13 -9,-7 -16,-15 -21,-24 -13,-19 -23,-41 -30,-65 -8,-25 -12,-55 -13,-90 0,-6 -1,-9 -3,-7 -1,1 -3,4 -5,7 -27,71 -60,111 -98,119 -23,5 -41,3 -55,-8 -13,-10 -22,-26 -28,-46 -6,-21 -8,-45 -7,-73 1,-28 6,-56 13,-85 7,-29 17,-57 29,-84 12,-28 27,-51 42,-71 16,-20 34,-35 54,-44 19,-10 39,-11 59,-4 7,2 12,5 15,9 3,5 5,9 7,13 1,4 4,8 8,10 3,3 9,5 18,5 5,3 9,14 11,33 2,19 3,42 4,70 1,27 1,57 2,89 0,31 2,62 4,91 3,29 7,54 13,75 6,22 14,36 26,44 1,1 5,-8 12,-25 7,-17 16,-39 26,-66 10,-27 21,-56 32,-87 12,-31 23,-60 33,-88 10,-27 18,-50 25,-69 7,-18 10,-28 10,-29 2,-6 5,-9 11,-12 5,-2 10,-2 16,-1 6,1 11,4 15,8 4,4 5,9 4,15 z m -403,291 c 7,0 16,-9 28,-27 12,-18 24,-40 36,-67 11,-27 22,-56 31,-88 10,-32 16,-62 19,-89 5,-43 -4,-65 -29,-65 -12,0 -24,9 -37,25 -13,17 -25,37 -36,62 -11,24 -20,51 -28,80 -8,29 -13,56 -15,80 -3,25 -2,46 3,63 4,17 14,26 28,26 z m 354,-292 c 0,0 1,-11 2,-34 1,-23 2,-53 4,-89 3,-36 5,-78 9,-125 4,-46 8,-94 14,-142 6,-49 13,-96 20,-142 8,-46 18,-86 28,-121 11,-35 23,-62 37,-82 14,-20 29,-28 46,-25 11,3 20,6 26,8 5,3 5,9 -2,18 -17,22 -32,56 -46,102 -14,47 -26,101 -37,163 -10,63 -19,131 -26,204 -7,73 -13,147 -17,222 -4,75 -6,148 -7,220 -1,71 0,136 2,194 3,58 8,107 14,148 6,40 13,67 22,79 7,10 8,18 6,23 -3,5 -8,9 -14,10 -7,1 -14,1 -22,-2 -8,-2 -14,-6 -17,-12 -4,-7 -7,-13 -10,-20 -4,-7 -6,-13 -8,-20 -10,-45 -17,-92 -21,-140 -4,-47 -5,-95 -5,-144 0,-48 0,-97 2,-146 1,-49 1,-98 0,-147 z"
                                    id="path3" />&#10;
                                <path
                                    d="m 16066,15568 c -4,0 -10,2 -16,6 -7,3 -14,8 -20,14 -7,7 -12,13 -17,20 -4,7 -6,14 -5,19 0,0 -2,18 -5,52 -3,34 -7,80 -11,137 -4,57 -9,123 -14,197 -5,75 -9,153 -13,234 -3,81 -5,162 -6,244 -1,81 0,158 2,229 3,72 8,135 16,191 8,55 19,97 34,126 -3,10 -7,17 -12,23 -5,6 -10,9 -15,11 -5,2 -11,1 -16,-3 -5,-4 -10,-12 -13,-23 -23,-52 -40,-119 -49,-200 -10,-81 -15,-169 -16,-264 -1,-94 1,-192 6,-292 6,-100 12,-195 18,-286 7,-91 13,-173 19,-246 6,-73 8,-130 8,-169 0,-4 -12,-7 -36,-7 -24,0 -54,1 -90,3 -36,3 -75,6 -118,11 -42,5 -82,11 -117,16 -36,6 -66,12 -89,19 -24,7 -35,13 -34,19 1,11 -3,18 -11,21 -8,3 -15,8 -21,13 -3,3 -9,2 -19,-2 -11,-3 -20,-9 -28,-17 -8,-8 -12,-17 -13,-27 -1,-11 7,-21 23,-32 17,-11 44,-21 83,-31 39,-11 95,-19 166,-26 68,-7 122,-11 163,-14 41,-2 73,-4 96,-5 23,-1 39,-2 47,-3 8,-1 13,-3 14,-5 4,-7 9,-11 14,-14 6,-2 13,-4 20,-4 20,0 33,0 39,3 6,2 10,5 13,8 3,3 8,6 13,8 6,2 20,4 41,4 167,0 310,0 429,0 118,0 218,0 297,0 80,1 142,2 187,3 46,2 78,4 98,7 20,2 30,6 29,10 0,5 -6,10 -16,17 z m 360,716 c 17,-11 32,-11 44,-1 12,10 22,27 28,51 6,24 9,53 9,87 0,35 -3,71 -10,109 -9,41 -23,80 -43,118 -10,19 -23,29 -40,32 -17,2 -34,-3 -52,-15 -18,-12 -35,-32 -51,-60 -16,-28 -28,-62 -35,-104 2,5 0,16 -5,32 -4,16 -11,34 -19,53 -8,20 -16,39 -24,59 -9,19 -16,34 -21,45 -5,11 -13,17 -24,18 -10,1 -21,-1 -31,-6 -10,-6 -19,-14 -25,-24 -7,-10 -9,-21 -8,-33 0,0 0,-6 0,-17 0,-12 0,-26 0,-44 0,-17 0,-36 0,-56 0,-20 1,-40 1,-58 1,-18 1,-34 2,-47 1,-13 2,-21 4,-25 2,-6 2,-11 -1,-16 -2,-5 -1,-11 4,-17 4,-5 9,-8 16,-8 6,-1 11,1 16,5 9,8 16,19 18,35 1,7 1,22 1,44 -1,22 -1,46 -2,71 -1,25 -2,49 -3,72 -1,24 -1,41 -1,51 6,-5 13,-20 20,-43 7,-22 14,-47 20,-73 7,-26 13,-50 18,-72 5,-23 7,-36 8,-40 4,-14 8,-23 12,-26 5,-3 14,-5 29,-5 6,0 10,0 13,1 3,0 5,1 7,2 1,1 2,4 4,7 1,3 3,8 4,15 0,1 2,9 6,23 3,14 8,31 13,51 5,20 11,41 17,63 6,22 13,41 20,57 7,16 14,28 21,35 6,7 12,5 18,-5 16,-27 27,-54 34,-82 7,-28 12,-53 15,-76 2,-24 4,-43 3,-59 0,-17 -1,-27 -1,-32 0,-8 -2,-16 -6,-26 -5,-9 -9,-18 -13,-27 -4,-10 -7,-18 -10,-25 -2,-7 -2,-11 0,-14 z m 356,305 c -18,33 -41,57 -69,71 -28,14 -55,17 -80,8 -24,-9 -44,-29 -57,-61 -14,-33 -16,-79 -5,-139 2,-6 3,-12 4,-18 1,-6 -2,-12 -8,-18 -4,-4 -6,-7 -8,-11 -2,-4 -2,-8 0,-15 2,-6 6,-14 11,-24 6,-10 15,-23 27,-38 10,-14 23,-24 38,-31 15,-7 30,-11 46,-12 16,0 32,2 47,7 16,6 29,14 41,24 7,7 16,17 26,31 10,15 17,32 22,53 5,21 6,46 2,75 -4,29 -17,62 -37,98 z m -103,26 c 13,-2 26,-10 40,-24 14,-14 25,-32 33,-54 7,-21 11,-45 9,-72 -1,-26 -10,-53 -27,-79 -5,-8 -11,-13 -19,-15 -8,-3 -16,-4 -26,-4 -10,0 -20,7 -30,20 -9,13 -17,30 -23,49 -6,20 -11,40 -13,63 -3,22 -3,43 0,61 2,19 8,34 17,44 9,11 22,15 39,11 z m 435,-244 c 7,-8 13,-12 19,-10 5,2 9,6 11,12 2,7 3,15 2,23 -1,9 -4,16 -8,21 -2,2 -8,12 -18,30 -10,17 -23,38 -37,63 -15,25 -30,51 -46,80 -16,29 -31,55 -44,80 -13,25 -24,46 -33,63 -9,17 -13,26 -13,28 1,5 0,23 -4,54 -3,30 -7,67 -14,111 -6,44 -13,91 -22,141 -9,50 -18,97 -28,142 -10,44 -20,83 -32,116 -11,33 -22,55 -33,64 -4,3 -10,7 -19,11 -8,4 -18,6 -28,5 -10,0 -20,-4 -30,-11 -10,-8 -18,-21 -23,-41 -6,-20 -9,-47 -9,-82 0,-35 5,-80 15,-134 4,-26 12,-55 23,-87 11,-31 24,-64 38,-97 15,-33 30,-65 46,-96 16,-31 31,-59 45,-83 15,-24 22,-47 23,-69 1,-22 2,-40 3,-54 0,-27 2,-56 3,-86 1,-30 3,-58 4,-85 1,-26 3,-49 4,-69 1,-20 2,-34 3,-41 0,-5 3,-9 10,-10 6,-2 12,-3 19,-2 6,0 13,2 18,4 6,3 9,6 9,9 -3,40 -5,84 -6,133 -1,50 -3,98 -5,146 z m -333,984 c 5,-6 11,-23 18,-49 7,-26 15,-57 22,-92 8,-36 15,-74 22,-115 7,-40 14,-78 19,-114 6,-35 11,-66 14,-92 4,-26 6,-43 7,-49 0,-1 -3,5 -10,18 -7,14 -14,30 -23,49 -9,20 -18,40 -27,61 -9,20 -16,37 -21,51 -21,59 -36,111 -43,157 -8,45 -11,82 -10,111 1,29 5,49 11,60 7,11 14,12 21,4 z m 135,-1056 c 6,-7 12,-13 19,-16 8,-3 15,-5 22,-5 6,0 11,2 15,5 4,4 4,9 1,15 -1,2 -3,6 -5,11 -4,6 -11,10 -19,13 -9,3 -16,2 -24,-2 -7,-5 -11,-12 -9,-21 z m 226,410 c -17,-16 -29,-35 -37,-56 -7,-22 -12,-43 -15,-63 -2,-20 -4,-38 -4,-53 0,-16 -1,-25 -4,-28 -3,-4 -4,-7 -2,-11 2,-10 5,-22 8,-38 3,-15 7,-32 12,-49 5,-18 11,-35 17,-52 7,-18 16,-33 27,-45 11,-13 25,-22 41,-28 16,-6 36,-7 58,-2 17,4 29,14 37,30 8,17 12,35 13,56 1,21 -1,43 -8,66 -6,23 -15,43 -28,60 -13,18 -29,31 -47,40 -19,9 -40,10 -63,4 -2,2 -4,12 -3,28 0,17 3,35 9,54 5,19 13,36 23,51 11,15 26,23 44,23 14,0 28,-6 41,-18 13,-12 25,-28 36,-47 12,-19 22,-41 32,-66 9,-24 17,-48 25,-72 7,-24 14,-47 20,-68 5,-21 10,-38 14,-52 1,-2 3,-4 7,-4 4,0 8,0 11,2 4,2 7,4 10,8 2,4 3,8 2,14 -12,69 -28,129 -48,181 -20,52 -42,92 -67,120 -24,29 -50,45 -78,49 -28,3 -56,-8 -83,-34 z m 85,-377 c -4,-5 -13,-5 -25,-2 -12,3 -23,19 -35,46 -7,16 -13,34 -18,55 -5,21 -7,39 -6,53 1,9 6,16 16,22 9,6 19,4 29,-5 14,-11 24,-25 32,-41 8,-15 14,-31 18,-47 3,-16 4,-31 2,-45 -3,-15 -7,-26 -13,-36 z m 927,59 c -16,39 -34,79 -55,120 -21,41 -43,78 -65,112 -23,34 -46,62 -69,84 -24,23 -46,34 -67,35 -7,0 -14,-1 -24,-2 -9,-1 -19,-5 -30,-12 -11,-6 -23,-16 -34,-30 -12,-14 -22,-33 -31,-58 -12,-33 -18,-67 -16,-103 1,-35 7,-69 18,-101 10,-32 24,-60 40,-86 17,-25 33,-44 51,-57 17,-12 34,-18 49,-15 16,2 29,15 38,38 4,13 7,26 7,39 0,14 -1,26 -3,38 -3,11 -7,20 -14,26 -6,6 -13,8 -22,5 -10,-2 -15,-8 -16,-18 -1,-9 -1,-19 0,-29 2,-11 2,-20 2,-28 -1,-8 -5,-11 -13,-9 -36,34 -58,73 -67,117 -8,43 -10,88 -6,134 2,16 5,31 11,45 5,14 11,25 18,35 7,9 15,16 22,20 8,3 14,4 20,1 22,-11 44,-31 66,-58 22,-27 43,-57 62,-89 19,-33 36,-64 51,-96 15,-31 26,-58 34,-79 1,-3 4,-5 10,-7 5,-2 10,-3 16,-1 5,1 10,4 14,8 4,4 5,11 3,21 z m -51,6 c 1,-15 5,-25 11,-30 6,-5 13,-7 19,-5 7,1 13,5 18,11 6,7 8,14 8,22 -1,9 -1,24 -2,45 0,21 0,44 1,69 1,26 2,51 4,75 3,25 6,46 11,62 5,16 12,26 20,29 8,3 19,-4 31,-22 8,-12 18,-30 29,-56 12,-25 23,-51 34,-79 11,-28 22,-54 32,-80 10,-26 19,-45 25,-58 6,-12 13,-19 20,-22 7,-3 13,-3 17,-1 4,3 7,8 7,15 1,8 -2,16 -8,25 -11,24 -23,53 -36,88 -14,35 -27,69 -42,103 -15,33 -30,62 -46,88 -16,25 -32,40 -49,44 -4,1 -11,2 -20,3 -9,1 -18,0 -28,-5 -10,-4 -20,-12 -30,-24 -10,-12 -18,-30 -24,-54 -6,-24 -10,-55 -11,-95 -1,-39 2,-88 9,-148 z m 73,-101 c -5,8 -11,13 -19,17 -7,3 -14,5 -21,5 -7,0 -12,-2 -15,-6 -4,-4 -4,-8 -2,-14 2,-3 4,-6 6,-11 4,-6 10,-11 19,-13 8,-3 16,-3 23,1 8,5 11,12 9,21 z m 602,76 c -2,5 -6,17 -13,37 -6,19 -14,43 -24,70 -10,27 -20,56 -31,87 -11,30 -22,59 -32,85 -10,27 -20,50 -27,69 -8,19 -14,30 -16,33 -8,10 -18,17 -28,20 -11,3 -21,4 -31,2 -10,-2 -19,-6 -28,-13 -9,-7 -16,-15 -21,-24 -12,-19 -22,-41 -30,-65 -7,-25 -12,-55 -12,-90 0,-6 -1,-9 -3,-7 -2,1 -4,4 -5,7 -28,71 -61,111 -99,119 -23,5 -41,3 -54,-8 -13,-10 -23,-26 -29,-46 -5,-21 -8,-45 -6,-73 1,-28 5,-56 12,-85 7,-29 17,-57 29,-84 13,-28 27,-51 43,-71 16,-20 34,-35 53,-44 20,-10 39,-11 60,-4 7,2 12,5 14,9 3,5 5,9 7,13 2,4 5,8 8,10 4,3 10,5 19,5 5,3 8,14 10,33 2,19 3,42 4,70 1,27 2,57 2,89 1,31 2,62 5,91 3,29 7,54 13,75 5,22 14,36 25,44 1,1 5,-8 12,-25 7,-17 16,-39 26,-66 10,-27 21,-56 33,-87 11,-31 22,-60 32,-88 11,-27 19,-50 26,-69 6,-18 10,-28 10,-29 1,-6 5,-9 10,-12 5,-2 11,-2 17,-1 5,1 10,4 14,8 4,4 6,9 5,15 z m -404,291 c 7,0 17,-9 29,-27 12,-18 24,-40 35,-67 12,-27 22,-56 32,-88 10,-32 16,-62 18,-89 6,-43 -4,-65 -29,-65 -11,0 -23,9 -36,25 -13,17 -25,37 -36,62 -11,24 -21,51 -29,80 -8,29 -13,56 -15,80 -2,25 -1,46 3,63 5,17 14,26 28,26 z m 355,-292 c 0,0 0,-11 1,-34 1,-23 3,-53 5,-89 2,-36 5,-78 8,-125 4,-46 9,-94 14,-142 6,-49 13,-96 21,-142 8,-46 17,-86 28,-121 10,-35 23,-62 36,-82 14,-20 29,-28 46,-25 12,3 20,6 26,8 6,3 5,9 -2,18 -17,22 -32,56 -46,102 -13,47 -26,101 -36,163 -11,63 -20,131 -27,204 -7,73 -12,147 -16,222 -4,75 -7,148 -8,220 -1,71 0,136 3,194 3,58 7,107 13,148 6,40 14,67 23,79 6,10 8,18 5,23 -3,5 -7,9 -14,10 -6,1 -14,1 -22,-2 -8,-2 -13,-6 -17,-12 -4,-7 -7,-13 -10,-20 -3,-7 -5,-13 -7,-20 -11,-45 -18,-92 -21,-140 -4,-47 -6,-95 -6,-144 0,-48 1,-97 2,-146 2,-49 2,-98 1,-147 z m 369,218 c -18,33 -41,57 -69,71 -28,14 -55,17 -80,8 -24,-9 -44,-29 -57,-61 -14,-33 -16,-79 -5,-139 2,-6 3,-12 4,-18 1,-6 -2,-12 -8,-18 -4,-4 -6,-7 -8,-11 -2,-4 -2,-8 0,-15 2,-6 5,-14 11,-24 6,-10 15,-23 27,-38 10,-14 23,-24 38,-31 15,-7 30,-11 46,-12 16,0 32,2 47,7 16,6 29,14 41,24 7,7 15,17 26,31 10,15 17,32 22,53 5,21 6,46 2,75 -4,29 -17,62 -37,98 z m -104,26 c 14,-2 27,-10 41,-24 14,-14 25,-32 32,-54 8,-21 12,-45 10,-72 -1,-26 -10,-53 -27,-79 -5,-8 -12,-13 -19,-15 -8,-3 -16,-4 -26,-4 -11,0 -21,7 -30,20 -9,13 -17,30 -23,49 -6,20 -11,40 -13,63 -3,22 -3,43 0,61 2,19 8,34 17,44 9,11 22,15 38,11 z"
                                    id="path4" />&#10;
                            </g>&#10;
                            <path
                                d="m 14764,16246 c -18,10 -34,21 -51,30 -17,9 -35,17 -55,26 -12,4 -21,3 -29,-2 -8,-6 -7,-13 1,-22 14,-14 29,-25 46,-35 17,-10 32,-19 45,-26 l 129,-75 c 4,-2 14,-5 28,-13 6,-3 19,-10 38,-21 18,-11 38,-21 58,-31 21,-10 40,-19 59,-26 18,-7 30,-9 36,-5 5,2 4,9 -3,21 -6,11 -13,19 -20,24 -39,22 -71,40 -96,53 -24,12 -43,22 -56,29 -14,8 -20,15 -26,18 z"
                                id="path5" />&#10;
                            <path
                                d="m 5641,16213 c -12,17 -24,28 -34,34 -10,6 -19,8 -25,6 -6,-2 -9,-9 -9,-19 1,-11 5,-23 13,-37 4,-5 9,-14 16,-26 10,-13 20,-22 31,-27 11,-4 17,0 20,12 2,16 -2,34 -12,57 z"
                                id="path6" />&#10;
                            <path
                                d="m 18769,16246 c -18,10 -34,21 -51,30 -17,9 -35,17 -55,26 -11,4 -21,3 -29,-2 -8,-6 -7,-13 1,-22 14,-14 29,-25 46,-35 17,-10 32,-19 45,-26 l 129,-75 c 4,-2 14,-5 28,-13 6,-3 19,-10 38,-21 19,-11 38,-21 58,-31 21,-10 40,-19 59,-26 18,-7 30,-9 36,-5 5,2 4,9 -3,21 -6,11 -13,19 -20,24 -39,22 -71,40 -96,53 -24,12 -43,22 -56,29 -14,8 -20,15 -26,18 z"
                                id="path7" />&#10;
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    )
}