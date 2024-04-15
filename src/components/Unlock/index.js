import {useState} from 'react'

import {BgContainer, Image, Heading, BtnEl} from './styledComponents'

const Unlock = () => {
  const [unLock, setUnLock] = useState(false)
  const imgUrl = unLock
    ? 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
  const btnTxt = unLock ? 'lock' : 'unlock'
  const headingTxt = unLock
    ? 'Your Device is Unlocked'
    : 'Your Device is Locked'
  const altTxt = unLock ? 'Unlock' : 'Lock'

  const onClickChange = () => setUnLock(prevStatus => !prevStatus)

  return (
    <BgContainer>
      <Image src={imgUrl} alt={altTxt} />
      <Heading>{headingTxt}</Heading>
      <BtnEl onClick={onClickChange}>{btnTxt}</BtnEl>
    </BgContainer>
  )
}

export default Unlock
