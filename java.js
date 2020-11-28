window.addEventListener("load", function () {
    let input = document.querySelector("#inputEmail");
    let btn = document.querySelector('.btn');
    let img = document.querySelector('.im');

    btn.addEventListener('click', function () {
        const email = input.value;
        const api = `https://disposable.debounce.io/?email=${email}`;
        console.log(api);

        fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data => {
                
                const answer = data.disposable;
                console.log(answer);
                console.log(data);

                if(answer === 'true'){

                   
                    
                    alert("This is disposable Email!");
                }
                else if(answer === 'false'){
                    alert("This is not Disposable Email");
                   
                }
                else{
                alert("Please enter correct email");
            }
            });

    });
});