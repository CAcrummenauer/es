var xhr = new XMLHttpRequest();

xhr.open('GET', 'http://api.github.com/users/cacrummenauer');
xhr.send(null);

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
        console.log(JSON.parse(xhr.responseText));
    }
}