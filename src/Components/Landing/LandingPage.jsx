import React from "react";
import { NavLink } from "react-router-dom";
import { Foot } from "../Footer/Footer";

import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div className="containerL">
        <div><NavLink to="/">
         <svg width="150px" height="100px" viewBox="0 0 661 203" fill="none" xmlns="http://www.w3.org/2000/svg">
<path className="redes" d="M447.668 202.992C435.949 202.987 424.247 202.185 412.637 200.596C379.247 196.018 351.7 180.722 330.544 155.044C312.153 177.962 289.175 192.242 262.06 197.571L262.065 197.566C241.377 201.691 220.253 203.149 199.196 201.904C145.93 198.582 97.9411 179.227 56.7158 144.378C33.7371 124.951 17.6691 103.06 7.59576 77.4564C5.87176 73.0554 4.51243 68.7064 2.9395 63.6697C2.20512 61.2843 1.4187 58.7635 0.517633 56.0604L0.522841 56.0552C-0.997959 51.3469 0.882214 46.2115 5.08017 43.5968C9.28324 40.9771 14.7208 41.5604 18.278 44.9979C52.1167 78.0339 87.3567 82.3579 129.21 58.6432C140.293 52.3672 151.393 45.1645 162.183 38.2005C170.376 32.888 178.85 27.3932 187.381 22.2579C205.479 11.362 223.959 4.35121 242.334 1.41921C270.845 -3.12239 298.73 4.23695 325.214 23.2939C327 24.5595 328.74 25.8928 330.48 27.2262C346.026 15.2418 360.714 7.64215 376.136 3.53282C404.86 -4.07652 434.016 0.564016 465.256 17.8661C485.193 28.9131 504.141 41.2408 520.042 51.8395C543.845 67.7035 564.99 74.4382 586.61 73.0168C607.626 71.6366 624.444 63.6679 638.022 48.6675C638.757 47.855 639.455 47.1727 640.356 46.2978L642.027 44.6467V44.6519C645.184 41.5164 649.944 40.6415 654.012 42.454C658.074 44.2666 660.611 48.3915 660.392 52.8343C659.59 70.7556 654.392 88.209 645.262 103.652C629.256 131.553 606.464 152.782 573.516 170.37C532.871 192.058 490.626 202.99 447.672 202.99L447.668 202.992ZM330.444 126.034V126.039C334.048 126.034 337.413 127.836 339.413 130.831C358.183 158.961 383.09 174.789 415.506 179.227C465.97 186.138 515.694 176.69 563.306 151.325C592.473 135.716 612.603 117.159 626.503 92.8986C628.675 89.1226 630.607 85.2111 632.285 81.1955C619.363 89.0184 604.686 93.4091 587.962 94.4976C561.331 96.2476 535.967 88.3831 508.066 69.743C492.519 59.3836 474.039 47.3576 454.801 36.691C428.675 22.2323 404.77 18.1856 381.686 24.3264C367.165 28.1962 353.139 36.0972 337.525 49.1704C333.665 52.4204 328.072 52.5507 324.066 49.4881C322.733 48.4725 321.441 47.4829 320.17 46.4933C317.545 44.4621 315.097 42.5507 312.561 40.759C290.639 24.9096 268.711 19.0403 245.691 22.6656C229.853 25.202 214.405 31.0875 198.489 40.6763C190.244 45.6347 181.926 51.0252 173.885 56.2496C162.874 63.3747 151.499 70.7603 139.858 77.3536C102.051 98.775 66.5927 100.766 33.998 83.39C42.6855 99.874 54.758 114.499 70.638 127.906C108.242 159.703 151.955 177.365 200.545 180.395C219.753 181.526 239.034 180.187 257.905 176.416C283.659 171.343 305.03 156.047 321.415 130.927V130.922C323.395 127.89 326.764 126.057 330.384 126.041L330.444 126.034Z" fill="black"/>
<path className="redes" d="M263.227 101V66.0909H267.455V97.25H283.682V101H263.227ZM318.322 83.5455C318.322 87.2273 317.658 90.4091 316.328 93.0909C314.999 95.7727 313.175 97.8409 310.857 99.2955C308.538 100.75 305.891 101.477 302.913 101.477C299.936 101.477 297.288 100.75 294.97 99.2955C292.652 97.8409 290.828 95.7727 289.499 93.0909C288.169 90.4091 287.504 87.2273 287.504 83.5455C287.504 79.8636 288.169 76.6818 289.499 74C290.828 71.3182 292.652 69.25 294.97 67.7955C297.288 66.3409 299.936 65.6136 302.913 65.6136C305.891 65.6136 308.538 66.3409 310.857 67.7955C313.175 69.25 314.999 71.3182 316.328 74C317.658 76.6818 318.322 79.8636 318.322 83.5455ZM314.232 83.5455C314.232 80.5227 313.726 77.9716 312.714 75.892C311.714 73.8125 310.357 72.2386 308.641 71.1705C306.936 70.1023 305.027 69.5682 302.913 69.5682C300.8 69.5682 298.885 70.1023 297.169 71.1705C295.464 72.2386 294.107 73.8125 293.095 75.892C292.095 77.9716 291.595 80.5227 291.595 83.5455C291.595 86.5682 292.095 89.1193 293.095 91.1989C294.107 93.2784 295.464 94.8523 297.169 95.9205C298.885 96.9886 300.8 97.5227 302.913 97.5227C305.027 97.5227 306.936 96.9886 308.641 95.9205C310.357 94.8523 311.714 93.2784 312.714 91.1989C313.726 89.1193 314.232 86.5682 314.232 83.5455ZM349.294 77C348.919 75.8523 348.425 74.8239 347.811 73.9148C347.209 72.9943 346.487 72.2102 345.646 71.5625C344.817 70.9148 343.874 70.4205 342.817 70.0795C341.76 69.7386 340.601 69.5682 339.339 69.5682C337.271 69.5682 335.391 70.1023 333.697 71.1705C332.004 72.2386 330.658 73.8125 329.658 75.892C328.658 77.9716 328.158 80.5227 328.158 83.5455C328.158 86.5682 328.663 89.1193 329.675 91.1989C330.686 93.2784 332.055 94.8523 333.783 95.9205C335.51 96.9886 337.453 97.5227 339.612 97.5227C341.612 97.5227 343.374 97.0966 344.896 96.2443C346.43 95.3807 347.624 94.1648 348.476 92.5966C349.339 91.017 349.771 89.1591 349.771 87.0227L351.067 87.2955H340.567V83.5455H353.862V87.2955C353.862 90.1705 353.249 92.6705 352.021 94.7955C350.805 96.9205 349.124 98.5682 346.976 99.7386C344.839 100.898 342.385 101.477 339.612 101.477C336.521 101.477 333.805 100.75 331.464 99.2955C329.135 97.8409 327.317 95.7727 326.01 93.0909C324.714 90.4091 324.067 87.2273 324.067 83.5455C324.067 80.7841 324.436 78.3011 325.175 76.0966C325.925 73.8807 326.982 71.9943 328.345 70.4375C329.709 68.8807 331.322 67.6875 333.186 66.858C335.05 66.0284 337.101 65.6136 339.339 65.6136C341.18 65.6136 342.896 65.892 344.487 66.4489C346.089 66.9943 347.516 67.7727 348.766 68.7841C350.027 69.7841 351.078 70.983 351.919 72.3807C352.76 73.767 353.339 75.3068 353.658 77H349.294ZM390.557 83.5455C390.557 87.2273 389.892 90.4091 388.562 93.0909C387.233 95.7727 385.409 97.8409 383.091 99.2955C380.773 100.75 378.125 101.477 375.148 101.477C372.17 101.477 369.523 100.75 367.205 99.2955C364.886 97.8409 363.063 95.7727 361.733 93.0909C360.403 90.4091 359.739 87.2273 359.739 83.5455C359.739 79.8636 360.403 76.6818 361.733 74C363.063 71.3182 364.886 69.25 367.205 67.7955C369.523 66.3409 372.17 65.6136 375.148 65.6136C378.125 65.6136 380.773 66.3409 383.091 67.7955C385.409 69.25 387.233 71.3182 388.562 74C389.892 76.6818 390.557 79.8636 390.557 83.5455ZM386.466 83.5455C386.466 80.5227 385.96 77.9716 384.949 75.892C383.949 73.8125 382.591 72.2386 380.875 71.1705C379.17 70.1023 377.261 69.5682 375.148 69.5682C373.034 69.5682 371.119 70.1023 369.403 71.1705C367.699 72.2386 366.341 73.8125 365.33 75.892C364.33 77.9716 363.83 80.5227 363.83 83.5455C363.83 86.5682 364.33 89.1193 365.33 91.1989C366.341 93.2784 367.699 94.8523 369.403 95.9205C371.119 96.9886 373.034 97.5227 375.148 97.5227C377.261 97.5227 379.17 96.9886 380.875 95.9205C382.591 94.8523 383.949 93.2784 384.949 91.1989C385.96 89.1193 386.466 86.5682 386.466 83.5455Z" fill="black"/>
</svg>
         </NavLink>
        </div> 
      <div className="conteinerLB">

      <div className="conteinerLB2">
        <NavLink className="navLink" to="/Cafeteria">
     <p className="titInicio">CAFETERIA/PASTELERIA</p>
        </NavLink>
        <NavLink className="navLink" to="/Comidas">
     <p className="titInicio">COMIDAS</p>
     </NavLink>
     <p className="titInicio">BEBIDAS</p>
     <p className="titInicio">MENU DEL DIA</p>
      </div>
      </div>
    </div>
  );
}