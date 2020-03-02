$(function() {
    setTimeout(function(){
        $("#sel_zone").val("대전광역시").prop("selected", true); // 지역선택
    },100)
    setInterval(function(){
        getAreaList(this.form,'1','viewList') // 시험장 리스트 업데이트
        $('button').each(function(){
            if(  $(this).text() == "선택" ) {
                $(this).click()
                setTimeout(function(){
                    goNext(); // 접수하기
                },100)
            }
        })
        if ( $('#payBtn').length === 1 ) {
            $('#infoChk').prop('checked',true) // 동의 체크
            setTimeout(function(){
                payAmtChk(); // 결제창 열기
            },100)
        }
    },1000)
    setInterval(function(){
        clear_time('ok') // 로그인 연장
    },30000)
});