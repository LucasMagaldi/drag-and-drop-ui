import { useState } from "react"

  function Column(props: {title: string, column: string, headingColor: string}) {
  const [active, setActive] = useState(false)
  return (
    <div className="w-56 shrink-0">
      <div className="mb-3 flex items-center justify-between">
        <h3 className={`font-medium ${props.headingColor}`}>{props.title}</h3>
      </div>
      <div
        className={`h-full w-full transition-colors ${
          !active ? "bg-neutral-800/50"
          : "bg-neutral-800/0"
        }`}
      >

      </div>
    </div>
  )
}

function Board() {
  return (
    <div className='flex h-full w-full gap-3 overflow-scroll p-12 justify-around'>
      <Column 
          title="Backlog"
          column="backlog"
          headingColor="text-neutral-500"
      />
      <Column 
          title="TODO"
          column="todo"
          headingColor="text-yellow-200"
      />
      <Column 
          title="In Progress"
          column="doing"
          headingColor="text-blue-200"
      />
      <Column 
          title="Complete"
          column="complete"
          headingColor="text-emerald-200"
      />
    </div>
  )
}

function App() {
  return (
    <div className='h-screen w-full bg-neutral-900 text-netral-50'>
      <Board />
    </div>
  )
}

export default App
