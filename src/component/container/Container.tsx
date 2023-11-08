import React from 'react'

const Container: React.FC = () => {
  return (
    <div className="flex items-center flex-col dark:bg-black">
      <h1 className="text-4xl font-bold m-10 dark:text-white">
        Shape your Imagination
      </h1>
      <span className="text-2xl font-semibold dark:text-white">
        What kind of world do you want to shape ?
      </span>
    </div>
  )
}

export default Container
