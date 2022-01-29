let answers = document.querySelectorAll('.answer');
let arrows = document.querySelectorAll('.arrow');
let breaks = document.querySelectorAll('.break');

arrows.forEach(arrow => {

    arrow.onclick = el => {

        arrow.classList.toggle('active');

        let arrowID = arrow.getAttribute('data-arrow-id');

        answers.forEach(answer => {
            
            let answerID = answer.getAttribute('data-answer-id');

            if(arrowID == answerID) {
                answer.classList.toggle('visible');
            }
        });
    }
});