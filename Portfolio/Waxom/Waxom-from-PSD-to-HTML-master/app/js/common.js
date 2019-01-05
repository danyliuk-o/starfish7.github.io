$(function() {
$(document).ready(function(){
$('.c-hamburger').on('click',(function(){
	$(".c-hamburger").toggleClass('is-active');
}));
  $(".owl-carousel.top").owlCarousel({
  	items:1,
  	nav:'true',
  	navText:['<svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40px" height="73px"><defs><filter id="Filter_0"><feFlood flood-color="rgb(255, 255, 255)" flood-opacity="1" result="floodOut" /><feComposite operator="atop" in="floodOut" in2="SourceGraphic" result="compOut" /><feBlend mode="normal" in="compOut" in2="SourceGraphic" /></filter></defs><g filter="url(#Filter_0)"><path fill-rule="evenodd"  opacity="0.502" fill="rgb(0, 0, 0)" d="M38.026,72.979 L0.005,36.498 L38.026,0.018 L39.995,2.022 L4.066,36.498 L39.995,70.977 L38.026,72.979 Z"/></g></svg>','<svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40px" height="73px"><defs><filter id="Filter_0"><feFlood flood-color="rgb(255, 255, 255)" flood-opacity="1" result="floodOut" />    <feComposite operator="atop" in="floodOut" in2="SourceGraphic" result="compOut" />    <feBlend mode="normal" in="compOut" in2="SourceGraphic" /></filter></defs><g filter="url(#Filter_0)"><path fill-rule="evenodd"  fill="rgb(0, 0, 0)" d="M1.974,72.979 L39.995,36.498 L1.974,0.018 L0.005,2.022 L35.934,36.498 L0.005,70.977 L1.974,72.979 Z"/></g></svg>']
  });

    $(".owl-carousel.bot").owlCarousel({
  	items:3,
  	nav:'true',
  	navText:['<svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="22px" height="22px"><path fill-rule="evenodd"  fill="rgb(199, 178, 153)" d="M7.583,10.434 L12.355,5.661 C12.642,5.375 13.108,5.375 13.395,5.661 C13.682,5.949 13.682,6.416 13.395,6.702 L9.141,10.957 L13.395,15.211 C13.682,15.498 13.682,15.963 13.395,16.251 C13.108,16.538 12.642,16.538 12.355,16.251 L7.583,11.480 C7.438,11.335 7.366,11.145 7.367,10.957 C7.367,10.767 7.438,10.579 7.583,10.434 ZM10.987,0.026 C17.053,0.026 21.972,4.943 21.972,11.011 C21.972,17.076 17.053,21.995 10.987,21.995 C4.921,21.995 0.003,17.076 0.003,11.011 C0.003,4.943 4.921,0.026 10.987,0.026 ZM10.987,20.523 C16.232,20.523 20.501,16.253 20.501,11.011 C20.501,5.765 16.232,1.497 10.987,1.497 C5.743,1.497 1.475,5.765 1.475,11.011 C1.475,16.253 5.743,20.523 10.987,20.523 Z"/></svg>','<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="22px" height="22px"><path fill-rule="evenodd"  fill="rgb(199, 178, 153)" d="M14.417,10.434 L9.645,5.661 C9.358,5.375 8.892,5.375 8.605,5.661 C8.318,5.949 8.318,6.416 8.605,6.702 L12.859,10.957 L8.605,15.211 C8.318,15.498 8.318,15.963 8.605,16.251 C8.892,16.538 9.358,16.538 9.645,16.251 L14.417,11.480 C14.562,11.335 14.634,11.145 14.633,10.957 C14.633,10.767 14.562,10.579 14.417,10.434 ZM11.012,0.026 C4.946,0.026 0.028,4.943 0.028,11.011 C0.028,17.076 4.946,21.995 11.012,21.995 C17.079,21.995 21.997,17.076 21.997,11.011 C21.997,4.943 17.079,0.026 11.012,0.026 ZM11.012,20.523 C5.768,20.523 1.499,16.253 1.499,11.011 C1.499,5.765 5.768,1.497 11.012,1.497 C16.257,1.497 20.525,5.765 20.525,11.011 C20.525,16.253 16.257,20.523 11.012,20.523 Z"/></svg>']});
});
});
