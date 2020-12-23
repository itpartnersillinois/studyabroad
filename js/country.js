function add() {
    var lookup = {'housing': 'Housing', 'programs': 'Daily Programs and Excursions', 'attractions': 'Attractions and Other Infomration', 'courses': 'Courses', 'topics': 'Key Topics of Study', 'cost': 'Cost and Budgets', 'scholarship': 'Scholarship', 'testimonials': 'Testimonials', 'faculty': 'Faculty and Staff'};
    let item = this.id.replace('button-', '');
    if (currentItem == item) {
        document.getElementById('side-display').style.display = 'none';
        document.getElementById('side-main').style.display = '';
        currentItem = '';
    } else {
        document.getElementById('side-display').innerHTML = '<h2>' + lookup[item] + '</h2>' + document.getElementById(item).innerHTML;
        document.getElementById('side-display').style.display = '';
        document.getElementById('side-main').style.display = 'none';
        currentItem = item;   
    }
    document.getElementById('button-learnmore').scrollIntoView();
}

var currentItem = '';
document.addEventListener("DOMContentLoaded", function(event) { 
    let c = 0;
    if (document.getElementById('housing').innerHTML == '') {
        document.getElementById('button-housing').style.display = 'none';
    } else {
        document.getElementById('button-housing').addEventListener('click', add);
        document.getElementById('button-housing').classList.add(c%2 == 0 ? 'blue' : 'orange');
        c++;
    }
    if (document.getElementById('programs').innerHTML == '') {
        document.getElementById('button-programs').style.display = 'none';
    } else {
        document.getElementById('button-programs').addEventListener('click', add);
        document.getElementById('button-programs').classList.add(c%2 == 0 ? 'blue' : 'orange');
        c++;
    }
    if (document.getElementById('attractions').innerHTML == '') {
        document.getElementById('button-attractions').style.display = 'none';
    } else {
        document.getElementById('button-attractions').addEventListener('click', add);
        document.getElementById('button-attractions').classList.add(c%2 == 0 ? 'blue' : 'orange');
        c++;
    }
    if (document.getElementById('courses').innerHTML == '') {
        document.getElementById('button-courses').style.display = 'none';
    } else {
        document.getElementById('button-courses').addEventListener('click', add);
        document.getElementById('button-courses').classList.add(c%2 == 0 ? 'blue' : 'orange');
        c++;
    }
    if (document.getElementById('topics').innerHTML == '') {
        document.getElementById('button-topics').style.display = 'none';
    } else {
        document.getElementById('button-topics').addEventListener('click', add);
        document.getElementById('button-topics').classList.add(c%2 == 0 ? 'blue' : 'orange');
        c++;
    }
    if (document.getElementById('cost').innerHTML == '') {
        document.getElementById('button-cost').style.display = 'none';
    } else {
        document.getElementById('button-cost').addEventListener('click', add);
        document.getElementById('button-cost').classList.add(c%2 == 0 ? 'blue' : 'orange');
        c++;
    }
    if (document.getElementById('scholarship').innerHTML == '') {
        document.getElementById('button-scholarship').style.display = 'none';
    } else {
        document.getElementById('button-scholarship').addEventListener('click', add);
        document.getElementById('button-scholarship').classList.add(c%2 == 0 ? 'blue' : 'orange');
        c++;
    }
    if (document.getElementById('testimonials').innerHTML == '') {
        document.getElementById('button-testimonials').style.display = 'none';
    } else {
        document.getElementById('button-testimonials').addEventListener('click', add);
        document.getElementById('button-testimonials').classList.add(c%2 == 0 ? 'blue' : 'orange');
        c++;
    }
    if (document.getElementById('faculty').innerHTML == '') {
        document.getElementById('button-faculty').style.display = 'none';
    } else {
        document.getElementById('button-faculty').addEventListener('click', add);
        document.getElementById('button-faculty').classList.add(c%2 == 0 ? 'blue' : 'orange');
        c++;
    }
    document.getElementById('side-display').style.display = 'none';
});