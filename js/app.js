console.log('JS LOADED')

//Identify the global variables & set them.
//Add event listener to make sure it works when click 
//Grab the "0" element 
//Increment moving to the right 

function volumeAdjuster() {
    let input = document.getElementById('start')
    input.addEventListener('change', function () {
        document.getElementById('volume-level').innerHTML = this.value
    })
}

volumeAdjuster()








