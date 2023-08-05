## 한국인터넷진흥원 핀테크 서비스 개발 오픈뱅킹 기반 간편결제/지급결제

### 오픈뱅킹
여러 금융 회사 앱을 설치할 필요 없이 하나의 금융기관이나 

오픈뱅킹에 참여하는 핀테크 기업의 앱만으로 계좌를 조회하고 자금을 이체할 수 있는 서비스

<image src="https://github.com/kjungw1025/KISA-Fintech/assets/120318020/d9463082-ede4-44fb-a425-648448c33f7a"  width="800" height="300"></image>



### 지급결제의 개념
경제 주체들이 경제활동에 따른 채권채무관계를 지급수단을 이용하여 해소하는 행위

**지급 수단** 

현금(화페) : 그 자체로서 지급 결제가 마무리

어음, 수표, 신용카드, 계좌이체 등 : 지급, 청산 및 결제의 세 단계를 거침

<image src="https://github.com/kjungw1025/KISA-Fintech/assets/120318020/70b7b851-5db6-4e3d-9d35-951b22226bfd"  width="800" height="300"></image>

#### CD공동망 현금인출 지급결제 절차

<image src="https://github.com/kjungw1025/KISA-Fintech/assets/120318020/64fefad2-80df-45d5-9b2c-d49bc331cde2"  width="800" height="450"></image>



### 간편결제의 개념
신용카드나 계좌정보를 스마트폰 앱 등에 등록해, 지문인식이나 비밀번호 입력들의

간단한 인증으로 빠르고 간편하게 결제하는 것

높은 보안성과 간단한 사용자 인터페이스를 제공함

<image src="https://github.com/kjungw1025/KISA-Fintech/assets/120318020/8aab7d1d-f6ca-4c5a-a79d-2239fec9b251"  width="450" height="300"></image>

#### 신용카드 기반 온라인 간편결제 업무처리 절차

<image src="https://github.com/kjungw1025/KISA-Fintech/assets/120318020/960cf733-e5ca-4467-b125-1133b12b870b"  width="800" height="400"></image>




## 개발 단계
<h3>사용자 accessToken 발급</h3>
<image src="https://github.com/kjungw1025/KISA-Fintech/assets/120318020/a6d63218-22d6-4ef5-8074-4867bc81ac8e" width="250" height="400"></image>

<h3>사용자 계좌 목록 출력</h3>
<image src="https://github.com/kjungw1025/KISA-Fintech/assets/120318020/f0ffc96d-d14b-42dc-92dd-3638133fee15" width="250" height="400"></image>

<h3>잔액 조회 API / 거래내역조회 API 활용</h3>
<image src="https://github.com/kjungw1025/KISA-Fintech/assets/120318020/9e2ce037-61c9-4563-b9ea-312023dd52f7" width="250" height="400"></image>

<h3>사용자 핀테크번호를 기반으로한 QR 코드 생성</h3>
<image src="https://github.com/kjungw1025/KISA-Fintech/assets/120318020/4759d99f-d64f-48c3-8503-d254a05f7155" width="250" height="400"></image>

<h3>QR 코드 리더기를 통한 핀테크번호 인식 / 결제</h3>
<image src="https://github.com/kjungw1025/KISA-Fintech/assets/120318020/aa0eaa7c-3bf0-4250-b709-66fb7cd99191" width="250" height="400"></image>
