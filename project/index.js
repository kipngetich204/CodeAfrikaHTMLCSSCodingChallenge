/* document.querySelectorAll('.question').forEach(
    button=>{
        button.addEventListener('click', ()=>{
            const questionItem=button.parentElement;
            const isActive=questionItem.classList.contains('active')

            document.querySelectorAll('.question-item').forEach(item =>{
                item.classList.remove('active')
            })

            if (!isActive){
                questionItem.classList.add('active')
            }
        })
    }
)
 */
document.querySelectorAll('.question').forEach(button => {
  button.addEventListener('click', () => {
    const answer = button.nextElementSibling;

    answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
  });
});


