import React, { ReactElement, useEffect } from 'react'

import './style.scss'

import { ItemProps } from '@/views/HomePage'

interface Props {
  Item: (item: ItemProps) => ReactElement
  showNum: number
  speed: number
  containerWidth: number
  data: Array<any>
  hoverStop?: boolean
  direction?: 'left' | 'right'
}
const fillArray = (arr: any[], length: number): any[] => {
  const result: any[] = []
  while (result.length < length) {
    result.push(...arr)
  }
  return result.concat(result)
}

function Marquee({
  Item,
  showNum,
  speed,
  containerWidth,
  data,
  hoverStop = false,
  direction = 'left'
}: Props) {
  const showData = fillArray(data, showNum)
  const length = showData.length
  const itemWidth = containerWidth / showNum
  useEffect(() => {
    // 创建一个新的样式表对象
    const style = document.createElement('style')
    // 定义样式表的内容
    let start = '0'
    let end = `-${(itemWidth * length) / 2}`
    if (direction === 'right') {
      start = end
      end = '0'
    }

    style.innerText = `
      @keyframes templates-partner-moving {
        0% {
           transform: translateX(${start}px);
        }
        100% {
          transform: translateX(${end}px);
        }
      }
    `
    if (!hoverStop) {
      style.innerText += `.list:hover {
      /*鼠标经过后，动画暂停*/
      animation-play-state: paused !important;
    }`
    }
    // 将样式表插入到文档头部
    document.head.appendChild(style)

    // 组件卸载时清除样式表
    return () => document.head.removeChild(style) as any
  }, [])

  return (
    <div style={{ width: `${containerWidth}px` }} className="wrap">
      <div
        className="list"
        style={{
          width: `${itemWidth * length}px`,
          animation: `templates-partner-moving ${
            (length / showNum / 2) * speed
          }s infinite linear`
        }}
      >
        {showData.map((item, index) => (
          <div key={index} style={{ width: `${itemWidth}px` }}>
            <Item {...item} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Marquee
