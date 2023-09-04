function move(element) {
    element.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }

    function moveWithArrowKeys(left, bottom, callback){
        let direction = null
        let x = left
        let y = bottom
        //Bonus
        let zIndex = -1

        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
        //Bonus
        element.style.zIndex = zIndex
        //Bonus
        function moveCharacter() {
            const screenWidth = window.innerWidth
            const screenHeight = window.innerHeight
            const characterWidth = element.clientWidth
            const characterHeight = element.clientHeight
        
            if (direction === 'west' && x > 0) {
                x -= 1
            }
            if (direction === 'north' && y + characterHeight < screenHeight) {
                y += 1
                zIndex = 3
            }
            if (direction === 'east' && x + characterWidth < screenWidth) {
                x += 1
            }
            if (direction === 'south' && y > 0) {
                y -= 1
                zIndex = -1
            }
            //Bonus
            element.style.left = x + 'px'
            element.style.bottom = y + 'px'
            element.style.zIndex = zIndex
        }
        
        setInterval(moveCharacter, 1)
        
        document.addEventListener('keydown', function(e){
            if(e.repeat) return
        
            if(e.key === 'ArrowLeft'){
                direction = 'west'
            }
            if(e.key === 'ArrowUp'){
                direction = 'north'
            }
            if(e.key === 'ArrowRight'){
                direction = 'east'
            }
            if(e.key === 'ArrowDown'){
                direction = 'south'
            }
            callback(direction)
        })
        
        document.addEventListener('keyup', function(e){
            direction = null
            callback(direction)
        })
    }

    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys,
    }
}
