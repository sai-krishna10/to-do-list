(function () {
    let input = document.querySelector('.input input');
    let add = document.querySelector('.add');

    add.addEventListener('click', function () {
        if (input.value.length == 0) {
            alert('Enter a task to add');
        }
        else {
            document.querySelector('#todolist').innerHTML += `
            <div class="newtask">
                <span>${document.querySelector('.input input').value}</span>
                <button class="delete">Delete</button>
            </div>
        `;
        }
        input.value = "";

        var del = document.querySelectorAll('.delete');
        for (var i = 0; i < del.length; i++) {
            del[i].onclick = function () {
                var div = this.parentElement;
                div.style.display = "none";
            }
        }

    })
})();

