const middle1 = document.querySelector('.bonus-middle')

const rock1 = document.querySelector('.bonus-rock')
const paper1 = document.querySelector('.bonus-paper')
const scissor1 = document.querySelector('.bonus-scissor')
const spock1 = document.querySelector('.bonus-spock')
const lizard1 = document.querySelector('.bonus-lizard')


const bonus1 = document.querySelector('.bonus1')
const bonus2 = document.querySelector('.bonus2')
const bonus3 = document.querySelector('.bonus3')

const youPicked1 = document.querySelector('.you-picked1')
const housePick1 = document.querySelector('.house-picked1')
const house1 = document.querySelector('.house1')
const houseImage1 = document.querySelector('.house-image1')

rock1.addEventListener('click', (event)=> {
    bonus1.style.display = 'none'
    bonus2.style.display = 'none'
    lizard1.style.display = 'none'
    middle1.style.backgroundImage = 'none'
    middle1.style.justifyContent = 'flex-end'
    youPicked1.style.display = 'flex'
    housePick1.style.display = 'flex'
    bonus3.style.justifyContent = 'flex-end'
    rock1.style.transform = 'translateX(-300%) translateY(-80%) scale(1.6)'
    const a = ComputerBonus()
    house1.style.display = 'flex'
    picture1(a)
    const b = result1('rock',a)
    
    mode_button.style.visibility = 'hidden'
    mode_button.style.pointerEvents = 'none'
    
    setTimeout(()=>{
        rock1.style.transform = 'translateX(-330%) translateY(-80%) scale(1.6)'
        house1.style.transform = 'translateX(30%)'
        youPicked1.style.transform = 'translateX(-30%)'
        housePick1.style.transform = 'translateX(30%)'
    }, 750
    )

    setTimeout(()=>{
        win_lose.textContent = b
        insert.style.display = 'flex'
        if (b === 'You Win'){
            rock1.style.boxShadow = '0 0 0 20px hsl(349, 71%, 52%), inset 7px 7px lightgray, 6px 6px 0 20px hsl(349, 100%, 25%), 2px 2px 0 40px hsl(215, 47%, 23%), 2px 2px 0 60px hsl(220, 48%, 21%), 2px 2px 0 80px hsl(223, 48%, 20%)'
            rock1.style.transition = 'box-shadow 2s'
            score = score + 1
            document.querySelector('.score-number').textContent = score
    
        }
        if (b === 'You Lose'){
            house1.style.boxShadow = color(a)
            house1.style.transition = 'box-shadow 2s'
            score = score - 1
            document.querySelector('.score-number').textContent = score
        }
    
    
    },1000)
    
})

lizard1.addEventListener('click', (event)=> {
    bonus1.style.display = 'none'
    bonus2.style.display = 'none'
    rock1.style.display = 'none'
    middle1.style.backgroundImage = 'none'
    middle1.style.justifyContent = 'flex-end'
    youPicked1.style.display = 'flex'
    housePick1.style.display = 'flex'
    bonus3.style.justifyContent = 'flex-start'
    lizard1.style.transform = 'translateX(-130%) translateY(-80%) scale(1.6)'
    const a = ComputerBonus()
    house1.style.display = 'flex'
    picture1(a)
    const b = result1('lizard',a)


    mode_button.style.visibility = 'hidden'
    mode_button.style.pointerEvents = 'none'
    
    
    setTimeout(()=>{
        lizard1.style.transform = 'translateX(-160%) translateY(-80%) scale(1.6)'
        house1.style.transform = 'translateX(30%)'
        youPicked1.style.transform = 'translateX(-30%)'
        housePick1.style.transform = 'translateX(30%)'
    }, 750
    )

    setTimeout(()=>{
        win_lose.textContent = b
        insert.style.display = 'flex'
        if (b === 'You Win'){
            lizard1.style.boxShadow = '0 0 0 20px hsl(261, 73%, 60%), inset 7px 7px lightgray, 6px 6px 0 20px hsl(261, 100%, 34%), 2px 2px 0 40px hsl(215, 47%, 23%), 2px 2px 0 60px hsl(220, 48%, 21%), 2px 2px 0 80px hsl(223, 48%, 20%)'
            lizard1.style.transition = 'box-shadow 2s'
            score = score + 1
            document.querySelector('.score-number').textContent = score
        }
        if (b === 'You Lose'){
            house1.style.boxShadow = color(a)
            house1.style.transition = 'box-shadow 2s'
            score = score - 1
            document.querySelector('.score-number').textContent = score
        }
    
    
    },1000)
    
})

paper1.addEventListener('click', (event)=> {
    bonus1.style.display = 'none'
    bonus3.style.display = 'none'
    spock1.style.display = 'none'
    middle1.style.backgroundImage = 'none'
    middle1.style.justifyContent = 'center'
    youPicked1.style.display = 'flex'
    housePick1.style.display = 'flex'
    bonus2.style.justifyContent = 'flex-start'
    paper1.style.transform = 'translateX(-80%) translateY(0%) scale(1.6)'
    const a = ComputerBonus()
    house1.style.display = 'flex'
    picture1(a)
    const b = result1('lizard',a)

    mode_button.style.visibility = 'hidden'
    mode_button.style.pointerEvents = 'none'
    
    
    setTimeout(()=>{
        paper1.style.transform = 'translateX(-110%) translateY(0%) scale(1.6)'
        house1.style.transform = 'translateX(30%)'
        youPicked1.style.transform = 'translateX(-30%)'
        housePick1.style.transform = 'translateX(30%)'
    }, 750
    )

    setTimeout(()=>{
        win_lose.textContent = b
        insert.style.display = 'flex'
        if (b === 'You Win'){
            paper1.style.boxShadow = '0 0 0 20px hsl(230, 89%, 65%), inset 7px 7px lightgray, 6px 6px 0 20px hsl(189, 100%, 26%, 2px 2px 0 40px hsl(230, 100%, 38%), 2px 2px 0 60px hsl(220, 48%, 21%), 2px 2px 0 80px hsl(223, 48%, 20%)'
            spock1.style.transition = 'box-shadow 2s'
            score = score + 1
            document.querySelector('.score-number').textContent = score
        }
        if (b === 'You Lose'){
            house1.style.boxShadow = color(a)
            house1.style.transition = 'box-shadow 2s'
            score = score - 1
            document.querySelector('.score-number').textContent = score
        }
    
    
    },1000)
    
})

spock1.addEventListener('click', (event)=> {
    bonus1.style.display = 'none'
    bonus3.style.display = 'none'
    paper1.style.display = 'none'
    middle1.style.backgroundImage = 'none'
    middle1.style.justifyContent = 'center'
    youPicked1.style.display = 'flex'
    housePick1.style.display = 'flex'
    bonus2.style.justifyContent = 'flex-end'
    spock1.style.transform = 'translateX(-345%) translateY(0%) scale(1.6)'
    const a = ComputerBonus()
    house1.style.display = 'flex'
    picture1(a)
    const b = result1('spock',a)

    mode_button.style.visibility = 'hidden'
    mode_button.style.pointerEvents = 'none'
    
    
    
    setTimeout(()=>{
        spock1.style.transform = 'translateX(-375%) translateY(0%) scale(1.6)'
        house1.style.transform = 'translateX(30%)'
        youPicked1.style.transform = 'translateX(-30%)'
        housePick1.style.transform = 'translateX(30%)'
    }, 750
    )

    setTimeout(()=>{
        win_lose.textContent = b
        insert.style.display = 'flex'
        if (b === 'You Win'){
            spock1.style.boxShadow = '0 0 0 20px hsl(189, 59%, 53%), inset 7px 7px lightgray, 6px 6px 0 20px hsl(189, 100%, 26%), 2px 2px 0 40px hsl(215, 47%, 23%), 2px 2px 0 60px hsl(220, 48%, 21%), 2px 2px 0 80px hsl(223, 48%, 20%)'
            spock1.style.transition = 'box-shadow 2s'
            score = score + 1
            document.querySelector('.score-number').textContent = score
    
        }
        if (b === 'You Lose'){
            house1.style.boxShadow = color(a)
            house1.style.transition = 'box-shadow 2s'
            score = score - 1
            document.querySelector('.score-number').textContent = score
        }
    
    
    },1000)
    
})

scissor1.addEventListener('click', (event)=> {
    bonus3.style.display = 'none'
    bonus2.style.display = 'none'
    paper1.style.display = 'none'
    middle1.style.backgroundImage = 'none'
    middle1.style.justifyContent = 'flex-start'
    youPicked1.style.display = 'flex'
    housePick1.style.display = 'flex'
    bonus1.style.justifyContent = 'center'
    scissor1.style.transform = 'translateX(-205%) translateY(90%) scale(1.6)'
    const a = ComputerBonus()
    house1.style.display = 'flex'
    picture1(a)
    const b = result1('scissor',a)


    mode_button.style.visibility = 'hidden'
    mode_button.style.pointerEvents = 'none'
    
    
    setTimeout(()=>{
        scissor1.style.transform = 'translateX(-235%) translateY(90%) scale(1.6)'
        house1.style.transform = 'translateX(30%)'
        youPicked1.style.transform = 'translateX(-30%)'
        housePick1.style.transform = 'translateX(30%)'
    }, 750
    )

    setTimeout(()=>{
        win_lose.textContent = b
        insert.style.display = 'flex'
        if (b === 'You Win'){
            scissor1.style.boxShadow = '0 0 0 20px hsl(39, 89%, 49%), inset 7px 7px lightgray, 6px 6px 0 20px hsl(39, 100%, 23%), 2px 2px 0 40px hsl(215, 47%, 23%), 2px 2px 0 60px hsl(220, 48%, 21%), 2px 2px 0 80px hsl(223, 48%, 20%)'
            scissor1.style.transition = 'box-shadow 2s'
            score = score + 1
            document.querySelector('.score-number').textContent = score
    
        }
        if (b === 'You Lose'){
            house1.style.boxShadow = color(a)
            house1.style.transition = 'box-shadow 2s'
            score = score - 1
            document.querySelector('.score-number').textContent = score
        }
    
    
    },1000)
    
})




function ComputerBonus () {
    x = Math.random()
    if (x < 0.2){
        return 'rock'
    }
    if (x < 0.4){
        return 'paper'
    }
    if (x < 0.6){
        return 'scissor'
    }
    if (x < 0.8){
        return 'spock'
    }if (x <= 1){
        return 'lizard'
    }
}

function result1 (playerMove, x) {
    if (playerMove === x){
        return 'You Draw';
    }
    const beats = {
        rock: ['scissor', 'lizard'],
        paper: ['rock', 'spock'],
        scissor: ['paper', 'lizard'],
        lizard: ['spock', 'paper'],
        spock: ['scissor', 'rock']
    }
    if (beats[playerMove].includes(x)){
        return 'You Win';}
    else {
        return 'You Lose';
    }
}


function picture1(x){
    if (x === 'rock'){
        house1.style.boxShadow = '0 0 0 25px hsl(349, 71%, 52%), inset 7px 7px lightgray, 7px 7px 0 30px hsl(349, 100%, 25%)'
        houseImage1.src = 'images/icon-rock.svg'
        houseImage1.style.transform = 'scale(1.4)'}
        
        
    if (x ==='paper'){
        house1.style.boxShadow = '0 0 0 25px hsl(230, 89%, 65%), inset 7px 7px lightgray, 7px 7px 0 30px hsl(230, 100%, 38%)'
        houseImage1.src = 'images/icon-paper.svg'
        houseImage1.style.transform = 'scale(1.4)'
        }
    
    if (x === 'scissor'){
        house1.style.boxShadow = '0 0 0 25px hsl(39, 89%, 49%), inset 7px 7px  lightgray, 7px 7px 0 30px hsl(39, 100%, 23%)'
        houseImage1.src = 'images/icon-scissors.svg'
        houseImage1.style.transform = 'scale(1.4)'
        }

    if (x === 'spock'){
        house1.style.boxShadow = '0 0 0 25px hsl(189, 59%, 53%), inset 7px 7px  lightgray, 7px 7px 0 30px hsl(189, 100%, 27%)'
        houseImage1.src = 'images/icon-spock.svg'
        houseImage1.style.transform = 'scale(1.4)'
    }

    if (x === 'lizard'){
        house1.style.boxShadow = '0 0 0 25px hsl(261, 73%, 60%), inset 7px 7px  lightgray, 7px 7px 0 30px hsl(261, 100%, 34%)'
        houseImage1.src = 'images/icon-lizard.svg'
        houseImage1.style.transform = 'scale(1.4)'
        }
    }

    function color (x) {
        if (x === 'rock'){
            return '0 0 0 25px hsl(349, 71%, 52%), inset 7px 7px lightgray, 10px 10px 0 25px hsl(349, 100%, 25%), 6.5px 6.5px 0 65px hsl(215, 47%, 23%), 6.5px 6.5px 0 105px hsl(220, 48%, 21%), 6.5px 6.5px 0 145px hsl(223, 48%, 20%)'
        }
        if (x === 'paper'){
            return '0 0 0 25px hsl(230, 89%, 65%), inset 7px 7px lightgray, 10px 10px 0 25px hsl(230, 100%, 38%), 6.5px 6.5px 0 65px hsl(215, 47%, 23%), 6.5px 6.5px 0 105px hsl(220, 48%, 21%), 6.5px 6.5px 0 145px hsl(223, 48%, 20%)'
        }
        if (x === 'scissor'){
            return '0 0 0 25px hsl(39, 89%, 49%), inset 7px 7px lightgray, 10px 10px 0 25px hsl(39, 100%, 23%), 6.5px 6.5px 0 65px hsl(215, 47%, 23%), 6.5px 6.5px 0 105px hsl(220, 48%, 21%), 6.5px 6.5px 0 145px hsl(223, 48%, 20%)'
        }
        if (x === 'spock'){
            return '0 0 0 25px hsl(189, 59%, 53%), inset 7px 7px lightgray, 10px 10px 0 25px hsl(189, 100%, 26%), 6.5px 6.5px 0 65px hsl(215, 47%, 23%), 6.5px 6.5px 0 105px hsl(220, 48%, 21%), 6.5px 6.5px 0 145px hsl(223, 48%, 20%)'
        }
        if (x === 'lizard'){
            return '0 0 0 25px hsl(261, 73%, 60%), inset 7px 7px lightgray, 10px 10px 0 25px hsl(261, 100%, 34%), 6.5px 6.5px 0 65px hsl(215, 47%, 23%), 6.5px 6.5px 0 105px hsl(220, 48%, 21%), 6.5px 6.5px 0 145px hsl(223, 48%, 20%)'
        }

    }


    const mode = document.querySelector('.mode')
    const modalImage = document.querySelector('.modal-image')
    const title = document.querySelector('.title-image')

    regularMiddle = document.querySelector('.middle')
    let xy = true
    mode.addEventListener('click', ()=>{
        
        if (xy===true) {
            regularMiddle.style.display = 'none'
            middle1.style.display = 'flex'
            xy = false
            modalImage.src = 'images/image-rules-bonus.svg'
            title.src = 'images/logo-bonus.svg'
            title.style.marginTop = '-5px'
        }
        else {
            regularMiddle.style.display = 'flex'
            middle1.style.display = 'none'
            xy = true
            modalImage.src = 'images/image-rules.svg'
            title.src = 'images/logo.svg'
            title.style.marginTop = ''
        }

    })

    