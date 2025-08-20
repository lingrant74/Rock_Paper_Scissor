const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissor = document.querySelector('.scissor')
const image = document.querySelector('.background')

const page = document.querySelector('.middle-space')
const middle_middle = document.querySelector('.middle-middle')
const middle_bottom = document.querySelector('.middle-bottom')
const house = document.querySelector('.house')
const insert = document.querySelector('.insert')
const win_lose = document.querySelector('.win-lose')

const you_pick = document.querySelector('.you-picked')
const house_pick = document.querySelector('.house-picked')

const mode_button = document.querySelector('.mode')

let score = parseInt(document.querySelector('.score-number').textContent)

rock.addEventListener('click', (event)=>{
middle_middle.style.display = 'none'
page.style.backgroundImage = 'none'
middle_bottom.style.justifyContent = 'space-between'
middle_bottom.style.alignItems = 'center'
rock.style.transform = 'scale(1.4)'
rock.style.transform = 'translateX(-120%) scale(1.2)'
house.style.display = 'flex'
you_pick.style.display = 'flex'
house_pick.style.display = 'flex'
const x = computer_chose()
mode_button.style.visibility = 'hidden'
mode_button.style.pointerEvents = 'none'
picture(x)
const y = result('rock',x)

setTimeout(()=>{
    rock.style.transform = 'translateX(-150%) scale(1.2)'
    house.style.transform = 'translateX(30%)'
    you_pick.style.transform = 'translateX(-30%)'
    house_pick.style.transform = 'translateX(30%)'
}, 750
)
setTimeout(()=>{
    win_lose.textContent = y
    insert.style.display = 'flex'
    if (y === 'You Win'){
        rock.style.boxShadow = '0 0 0 25px hsl(349, 71%, 52%), inset 7px 7px lightgray, 10px 10px 0 25px hsl(349, 100%, 25%), 6.5px 6.5px 0 65px hsl(215, 47%, 23%), 6.5px 6.5px 0 105px hsl(220, 48%, 21%), 6.5px 6.5px 0 145px hsl(223, 48%, 20%)'
        rock.style.transition = 'box-shadow 2s'
        score = score + 1
        document.querySelector('.score-number').textContent = score

    }
    if (y === 'You Lose'){
        house.style.boxShadow = color(x)
        house.style.transition = 'box-shadow 2s'
        score = score - 1
        document.querySelector('.score-number').textContent = score
    }


},1000


)
})




paper.addEventListener('click', (event)=>{
    middle_bottom.style.display = 'none'
    page.style.backgroundImage = 'none'
    scissor.style.display = 'none'
    paper.style.transform = 'scale(1.4)'
    paper.style.transform = 'translateX(-60%)  translateY(28%) scale(1.2)'
    house.style.display = 'flex'
    you_pick.style.display = 'flex'
    house_pick.style.display = 'flex'
    const x = computer_chose()
    picture(x)
    const y = result('paper',x)
    mode_button.style.visibility = 'hidden'
    mode_button.style.pointerEvents = 'none'
    setTimeout(()=>{
        paper.style.transform = 'translateX(-90%)  translateY(28%) scale(1.2)'
        house.style.transform = 'translateX(30%)'
        you_pick.style.transform = 'translateX(-30%)'
        house_pick.style.transform = 'translateX(30%)'
    }, 750
    )
    setTimeout(()=>{
        win_lose.textContent = y
        insert.style.display = 'flex'
        if (y === 'You Win'){
            paper.style.boxShadow = '0 0 0 25px hsl(230, 89%, 65%), inset 7px 7px lightgray, 10px 10px 0 25px hsl(230, 100%, 38%), 6.5px 6.5px 0 65px hsl(215, 47%, 23%), 6.5px 6.5px 0 105px hsl(220, 48%, 21%), 6.5px 6.5px 0 145px hsl(223, 48%, 20%)'
            paper.style.transition = 'box-shadow 2s'
            score = score + 1
            document.querySelector('.score-number').textContent = score
        }
        if (y === 'You Lose'){
            house.style.boxShadow = house.style.boxShadow = color(x)
            house.style.transition = 'box-shadow 2s'
            score = score - 1
            document.querySelector('.score-number').textContent = score
        }}
        ,1000
    
    
    )
    })

    scissor.addEventListener('click', (event)=>{
        middle_bottom.style.display = 'none'
        page.style.backgroundImage = 'none'
        paper.style.display = 'none'
        scissor.style.transform = 'scale(1.4)'
        scissor.style.transform = 'translateX(-60%)  translateY(28%) scale(1.2)'
        house.style.display = 'flex'
        you_pick.style.display = 'flex'
        house_pick.style.display = 'flex'
        const x = computer_chose()
        picture(x)
        const y = result('scissor',x)
        mode_button.style.visibility = 'hidden'
        mode_button.style.pointerEvents = 'none'
        setTimeout(()=>{
            scissor.style.transform = 'translateX(-90%)  translateY(28%) scale(1.2)'
            house.style.transform = 'translateX(30%)'
            you_pick.style.transform = 'translateX(-30%)'
            house_pick.style.transform = 'translateX(30%)'
        }, 750
        )
        setTimeout(()=>{
            win_lose.textContent = y
            insert.style.display = 'flex'
            if (y === 'You Win'){
                scissor.style.boxShadow = '0 0 0 25px hsl(349, 71%, 52%), inset 7px 7px lightgray, 10px 10px 0 25px hsl(39, 89%, 49%), 6.5px 6.5px 0 65px hsl(39, 100%, 23%), 6.5px 6.5px 0 105px hsl(220, 48%, 21%), 6.5px 6.5px 0 145px hsl(223, 48%, 20%)'
                scissor.style.transition = 'box-shadow 2s'
                score = score + 1
                document.querySelector('.score-number').textContent = score
            }
            if (y === 'You Lose'){
                house.style.boxShadow = color(x)
                house.style.transition = 'box-shadow 2s'
                score = score - 1
                document.querySelector('.score-number').textContent = score
            }},1000
        
        
        )
        })

const play_again = document.querySelector('.play-again')


play_again.addEventListener('click', () => {
    middle_middle.style.display = ''
    paper.style.display = ''
    page.style.backgroundImage = ''
    middle_bottom.style.justifyContent = ''
    middle_bottom.style.alignItems = ''
    rock.style.transform = ''
    paper.style.transform = ''
    scissor.style.transform = ''
    house.style.display = ''
    you_pick.style.display = ''
    house_pick.style.display = ''
    insert.style.display = ''
    house.style.transform = ''
    you_pick.style.transform = ''
    house_pick.style.transform = ''
    middle_bottom.style.display = ''
    scissor.style.display = ''
    rock.style.display = ''
    rock.style.boxShadow = ''
    house.style.boxShadow = ''
    paper.style.boxShadow = ''
    scissor.style.boxShadow = ''
    house.style.transition = ''
    rock.style.transition = ''
    paper.style.transition = ''
    scissor.style.transition = ''
    mode_button.style.visibility = ''
    mode_button.style.pointerEvents = ''


    //bonus starts

    middle1.style.backgroundImage = ''
    middle1.style.justifyContent = ''
    bonus1.style = ''
    bonus2.style = ''
    bonus3.style = ''

    rock1.style = ''
    paper1.style = ''
    scissor1.style = ''
    spock1.style = ''

    lizard1.style = ''


    house1.style = ''
    youPicked1.style = ''
    housePick1.style = ''


    
})



const rules = document.querySelector('.rules')
const rules_modal = document.querySelector('.rule-modal')

const close_modal = document.querySelector('.close-modal')

rules.addEventListener('click', ()=>{
    rules_modal.style.transform = ''
    rules_modal.showModal()
    rules_modal.style.display = 'flex'
})

close_modal.addEventListener('click', ()=>{
    rules_modal.close()
    rules_modal.style.transform = 'translateY(-200%)'
    rules_modal.style.transition = 'transform 1s'

})



function computer_chose() {
    x = Math.random()
    if (x>0 && x<=0.3333){
        return 'rock'
    }
    if (x>0.3333 && x<=0.6666){
        return 'paper'
    }
    else{
        return 'scissor'
    }
    
}

function result (playerMove, x){
    
    if (playerMove === 'rock'){
        if (x === 'rock'){
            return 'You Draw'}
        if (x === 'paper'){
            return 'You Lose'
        }
        else {
            return 'You Win'
        }
        }
    if (playerMove === 'paper'){
        if (x === 'rock'){
            return 'You Win'}
        if (x === 'paper'){
            return 'You Draw'
        }
        else {
            return 'You Lose'
        }
        }
    if (playerMove === 'scissor'){
        if (x === 'rock'){
            return 'You Lose'}
        if (x === 'paper'){
            return 'You Win'
        }
        else {
            return 'You Draw'
        }
        }   
    }
    function realResult (input) {
        if (input === 'You Win') {
            return 
        }
    }
    
const house_image = document.querySelector('.house-image')
function picture(x){
    if (x === 'rock'){
        house.style.boxShadow = '0 0 0 30px hsl(349, 71%, 52%), inset 7px 7px lightgray, 10px 10px 0 30px hsl(349, 100%, 25%)'
        house_image.src = 'images/icon-rock.svg'
        house_image.style.transform = 'scale(1.4)'}
        
        
    if (x ==='paper'){
        house.style.boxShadow = '0 0 0 30px hsl(230, 89%, 65%), inset 7px 7px lightgray, 10px 10px 0 30px hsl(230, 100%, 38%)'
        house_image.src = 'images/icon-paper.svg'
        house_image.style.transform = 'scale(1.4)'
        }
    
    if (x === 'scissor'){
        house.style.boxShadow = '0 0 0 30px hsl(39, 89%, 49%), inset 7px 7px  lightgray, 10px 10px 0 30px hsl(39, 100%, 23%)'
        house_image.src = 'images/icon-scissors.svg'
        house_image.style.transform = 'scale(1.4)'
        }
    }



