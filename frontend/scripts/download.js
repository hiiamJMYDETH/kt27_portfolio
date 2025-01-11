document.getElementById('resume-btn').addEventListener('click', function(event) {
    const link = document.createElement('a');
    link.href = "../images/Kevin Trinh, Winter 2024 resume.pdf";
    link.download = "Kevin Trinh, Winter 2024 resume";
    link.click();
    link.remove();
});