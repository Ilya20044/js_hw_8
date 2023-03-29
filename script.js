"use strict"
{
    const body = document.body
    const style =document.createElement("style")
    document.head.append(style)
    style.innerHTML = `
        .container{
            display:flex;
            flex-direction:column;
            height:880px;
            max-width: 1280px;
            border: 1px solid red;
            padding:157px 159px 0px 159px
        }
        .titleContainer{
            display:flex;
            flex-direction:column;
            align-items:center;
            padding-bottom:55px;
        }
        .titleText{
            font-family: 'Arvo';
            font-style: normal;
            font-weight: 400;
            font-size: 36px;
            line-height: 48px;
            color: #212121;
            text-align:center;
        }
        .titleSmallText{
            font-family: 'OpenSans';
            font-size: 14px;
            line-height: 26px;
            text-align: center;
            color: #9FA3A7;
        }
        .cardContainer{
            display:flex;

        }
        .blocks{
            display:flex;
            justify-content:center;
            
        }
        .blockOne{
            width:401px;
            height:480px;
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            background-color:white;
            border: 1px solid #9FA3A7;

        }
        .blockTwo{
            width:401px;
            height:480px;
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            background-color:#8F75BE;
            border: 1px solid #9FA3A7;
        }
        .blockOneTop{
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 700;
            font-size: 12px;
            line-height: 15px;
            text-align: center;
            letter-spacing: 2.4px;
            color: #9FA3A7;
        }
        .blockTwoTop{
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 700;
            font-size: 12px;
            line-height: 15px;
            text-align: center;
            letter-spacing: 2.4px;
            color: #FFC80A;
        }
        .blockOneTitle{
            font-family: 'Arvo';
            font-style: normal;
            font-weight: 400;
            font-size: 36px;
            line-height: 46px;
            text-align: center;
            color: #212121;
            margin: 20px 0;
        }
        .blockTwoTitle{
            font-family: 'Arvo';
            font-style: normal;
            font-weight: 400;
            font-size: 36px;
            line-height: 46px;
            text-align: center;
            color: #FFFFFF;
            margin: 20px 0;
        }
        .blockOneText{
            font-family: 'OpenSans';
            font-size: 12px;
            line-height: 22px;
            text-align: center;
            color: #9FA3A7;
            padding-bottom:15px;
        }
        .blockTwoText{
            font-family: 'OpenSans';
            font-size: 12px;
            line-height: 22px;
            text-align: center;
            color: #FFFFFF;
            padding-bottom:15px;
        }
        .blockOneButtom{
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 700;
            font-size: 12px;
            line-height: 15px;
            text-align: center;
            letter-spacing: 2.4px;
            color: #212121;
            border:3px solid #FFC80A;
            padding:15px 25px;
            border-radius:25px
        }
        .blockTwoButtom{
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 700;
            font-size: 12px;
            line-height: 15px;
            text-align: center;
            letter-spacing: 2.4px;
            color: #FFFFFF;
            border:3px solid #FFC80A;
            padding:15px 25px;
            border-radius:25px
        }

        
        
    `
    const  container = document.createElement('div')
    container.classList.add('container')
    body.prepend(container)



    const titleContainer = document.createElement('div')
    titleContainer.classList.add('titleContainer')
    container.append(titleContainer)

    const titleText = document.createElement('span')
    titleText.classList.add('titleText')
    titleText.innerHTML = "Choose Your Option"
    titleContainer.prepend(titleText)

    const titleSmallText =document.createElement('span')
    titleSmallText.classList.add('titleSmallText')
    titleSmallText.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing'
    titleContainer.append(titleSmallText)

    const blocks = document.createElement('div')
    blocks.classList.add('blocks')
    container.append(blocks)


    const blockOne = document.createElement('div')
    blockOne.classList.add('blockOne')
    blocks.append(blockOne)

    const blockTwo = document.createElement('div')
    blockTwo.classList.add('blockTwo')
    blocks.append(blockTwo)

    const blockOneTop =document.createElement('span')
    blockOneTop.classList.add('blockOneTop')
    blockOneTop.innerHTML = 'FREELANCER'
    blockOne.append(blockOneTop)

    const blockTwoTop =document.createElement('span')
    blockTwoTop.classList.add('blockTwoTop')
    blockTwoTop.innerHTML = 'STUDIO'
    blockTwo.append(blockTwoTop)

    const blockOneTitle = document.createElement('h3')
    blockOneTitle.classList.add('blockOneTitle')
    blockOneTitle.innerHTML = 'Initially designed to '
    blockOne.append(blockOneTitle)

    const blockTwoTitle = document.createElement('h3')
    blockTwoTitle.classList.add('blockTwoTitle')
    blockTwoTitle.innerHTML = 'Initially designed to '
    blockTwo.append(blockTwoTitle)

    const blockOneText = document.createElement('p')
    blockOneText.classList.add('blockOneText')
    blockOneText.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing '
    blockOne.append(blockOneText)

    const blockTwoText = document.createElement('p')
    blockTwoText.classList.add('blockTwoText')
    blockTwoText.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing '
    blockTwo.append(blockTwoText)

    const blockOneButtom = document.createElement('a')
    blockOneButtom.classList.add('blockOneButtom')
    blockOneButtom.innerHTML = 'START HERE'
    blockOne.append(blockOneButtom)

    const blockTwoButtom = document.createElement('a')
    blockTwoButtom.classList.add('blockTwoButtom')
    blockTwoButtom.innerHTML = 'START HERE'
    blockTwo.append(blockTwoButtom)

}