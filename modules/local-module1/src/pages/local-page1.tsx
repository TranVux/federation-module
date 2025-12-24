import image from '@/assets/react.svg'
import { AArrowDown } from 'lucide-react'

export default function RemotePage() {
  return (
    <div>
      Xin chao the gioi day la remote module ne nanan
      <input placeholder="xin chao the gioi" />
      <img src={image} />
      <AArrowDown />
    </div>
  )
}
