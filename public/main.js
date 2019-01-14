// Annimate Smooth Scroll
$('#btn_experience').on('click', () => {
    const experience = $('#experience').position().top;
    $('html, body').animate({
        scrollTop: experience
    }, 900);
});


$('#btn_education').on('click', () => {
    const education = $('#education').position().top;
    $('html, body').animate({
        scrollTop: education
    }, 900);
});

$('#btn_reference').on('click', () => {
    const reference = $('#reference').position().top;
    $('html, body').animate({
        scrollTop: reference
    }, 900);
});

$('#btn_skill').on('click', () => {
    const skill = $('#skill').position().top;
    $('html, body').animate({
        scrollTop: skill
    }, 900);
});