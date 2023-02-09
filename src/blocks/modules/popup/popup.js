import $ from 'jquery';

const next = $('.btn[data-btn="next"]'),
      prev = $('.btn[data-btn="prev"]'),
      submit = $('.btn[data-btn="submit"]');

const steps = $('.popup__step'),
      stepsLength = steps.length;

let stepNumber = 1;

next.click((e) => {
    e.preventDefault();
    $(`.popup__step[data-step="${stepNumber}"]`).addClass('hidden');
    stepNumber += 1;
    isSteps();
})

prev.click((e) => {
    e.preventDefault();
    $(`.popup__step[data-step="${stepNumber}"]`).addClass('hidden');
    stepNumber -= 1;
    isSteps();
})

function isSteps() {
    switch(true) {
        case stepNumber < stepsLength && stepNumber > 1: 
            submit.addClass('hidden');
            next.removeClass('hidden');
            prev.removeClass('hidden');
        break;

        case stepNumber == stepsLength: 
            next.addClass('hidden');
            submit.removeClass('hidden');
            prev.removeClass('hidden');
        break;

        case stepNumber === 1: 
            next.removeClass('hidden');
            submit.addClass('hidden');
            prev.addClass('hidden');
        break;

        case stepNumber < stepsLength: 
            prev.addClass('hidden');
        break;
    }

    $(`.popup__step[data-step="${stepNumber}"]`).removeClass('hidden');
}

