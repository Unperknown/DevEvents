import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'DevEvents';
  events = [
    { "title" : "[웨비나] 네이버 클라우드 플랫폼 Clova Premium Voice 및 OCR", "date" : "2020/2/26(수)", "location" : "온라인", "price" : "₩10,000", "imageLink" : "https://cf.festa.io/img/2020-2-18/b42efc31-75e3-42dc-a907-a4a8de3f37ab.jpg", "hyperLink" : "https://www.festa.io/events/925", "isValid" : true, "__v" : 0 },
    { "title" : "[2월]일 잘하는 주니어 개발자의 4주 실무 Project", "date" : "2020/2/25(화)", "location" : "멀티캠퍼스 선릉 ", "price" : "₩5,000", "imageLink" : "https://cf.festa.io/img/2020-1-14/9b0e9165-686f-4669-9210-18b5cafb8c3b.jpg", "hyperLink" : "https://www.festa.io/events/860", "isValid" : true, "__v" : 0 },
    { "title" : "KB문자분석 알고리즘  경진대회 밋업", "date" : "2020/2/21(금)", "location" : "여의도 위워크 8층", "price" : "무료", "imageLink" : "https://cf.festa.io/img/2020-2-12/32f40cba-7014-4fac-a765-a963dccb1861.png", "hyperLink" : "https://www.festa.io/events/916", "isValid" : false, "__v" : 0 },
    { "title" : "Let'Swift 판교 3차 🎊", "date" : "2020/2/20(목)", "location" : "네이버웹툰 6층 세미나실", "price" : "무료", "imageLink" : "https://cf.festa.io/img/2020-1-17/33d2f8b1-faf1-4147-96b8-1012cb0be6d9.jpeg", "hyperLink" : "https://www.festa.io/events/869", "isValid" : false, "__v" : 0 }
  ];
}
