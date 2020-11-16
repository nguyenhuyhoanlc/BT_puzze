function changeImgagr(element, number)
{
    let dataname = element.getAttribute('data-name');
    if (dataname === 'girl1'){
        element.src = 'IMG/girl2_part' + number  + '.jpg';
        element.setAttribute('data-name','girl2');
    } else if (dataname === 'girl2') {
        element.src = 'IMG/girl3_part'+ number  + '.jpg';
        element.setAttribute('data-name','girl3')
    } else if (dataname === 'girl3') {
        element.src = 'IMG/girl1_part' + number + '.jpg';
        element.setAttribute('data-name','girl1')
    }
    checkWin()
}
function checkWin() {
    let dataname1 = document.getElementById('img1').getAttribute('data-name');
    let dataname2 = document.getElementById('img2').getAttribute('data-name');
    let dataname3 = document.getElementById('img3').getAttribute('data-name');
    if (dataname1 === dataname2 && dataname1 === dataname3) {
        for(let i = 1; i<=3;i++) {
            document.getElementById('img' + i).style.border='1px sloid blue';
        }
    }else {
        document.getElementById('img1').style.border='1px sloid blue';
        document.getElementById('img2').style.border='1px sloid blue';
        document.getElementById('img3').style.border='1px sloid blue';
    }
}