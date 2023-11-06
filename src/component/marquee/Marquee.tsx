import React, { ReactElement, useEffect } from 'react'

export interface ItemProps {
  num: number
}

interface MarqueeProps {
  Item: (item: ItemProps) => ReactElement
  showNum: number
  speed: number
  containerWidth: number
  data: Array<string>
  hoverStop?: boolean
  direction?: 'left' | 'right'
}

const fillArray = (arr: string[], length: number): string[] => {
  const result: string[] = []
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
}: MarqueeProps) {
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
    <div style={{ width: `${containerWidth}px` }} className="overflow-hidden">
      <div
        className="relative flex top-0 left-0 h-full"
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
