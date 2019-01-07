axios.get('http://api.github.com/users/cacrummenauer')
.then(function(response) {
    console.log(response);
})
.catch(function(error) {
    console.warn(error);
});
