// 5-10-2020
{
    const months = document.querySelectorAll('.months li');

    // поточний місяць
    const now = new Date().getMonth();

    if(months.length > 0){
        const panes = document.querySelectorAll('.months .panes > div');

        months.forEach(tab => tab.classList.remove('active'));
        months[now].classList.add('active');
        panes.forEach(pane => pane.classList.remove('active'));
        panes[now].classList.add('active');
        
        months.forEach((tab, i) => tab.addEventListener('click', () => {
            months.forEach(tab => tab.classList.remove('active'));
            months[i].classList.add('active');
            panes.forEach(pane => pane.classList.remove('active'));
            panes[i].classList.add('active');
        }));
    }
}