import React, { useEffect, useMemo, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import Button from '../components/ui/Button'
import { TrashIcon, CheckIcon } from './icons'

function TaskItem({ task, onToggle, onDelete }){
  return (
    <div className="flex items-center justify-between gap-4 p-3 rounded-lg hover:bg-white/40 dark:hover:bg-white/5 transition">
      <div className="flex items-center gap-3">
        <button onClick={() => onToggle(task.id)} className="w-9 h-9 rounded-full flex items-center justify-center border">
          {task.completed ? <CheckIcon /> : '○'}
        </button>
        <div>
          <div className={`font-medium ${task.completed ? 'line-through text-gray-400' : ''}`}>{task.title}</div>
          {task.note && <div className="text-xs text-gray-500 mt-1">{task.note}</div>}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button onClick={() => onDelete(task.id)} className="p-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/40 transition">
          <TrashIcon />
        </button>
      </div>
    </div>
  )
}

export default function TaskManager(){
  const [tasks, setTasks] = useLocalStorage('tm_tasks', [
    { id: 1, title: 'Welcome! Add your first task', completed: false, note: '' },
    { id: 2, title: 'Try toggling dark mode ✨', completed: false, note: '' },
  ])
  const [text, setText] = useState('')
  const [filter, setFilter] = useState('all')
  const [query, setQuery] = useState('')

  useEffect(() => {
    // subtle entrance animation (no-op for now, placeholder)
  }, [])

  function addTask(e){
    e?.preventDefault()
    if(!text.trim()) return
    const newTask = {
      id: Date.now(),
      title: text.trim(),
      completed: false,
      note: ''
    }
    setTasks([newTask, ...tasks])
    setText('')
  }

  function toggleTask(id){
    setTasks(tasks.map(t => t.id === id ? {...t, completed: !t.completed} : t))
  }

  function deleteTask(id){
    setTasks(tasks.filter(t => t.id !== id))
  }

  const filtered = useMemo(() => {
    let out = tasks
    if(filter === 'active') out = out.filter(t => !t.completed)
    if(filter === 'completed') out = out.filter(t => t.completed)
    if(query.trim()) out = out.filter(t => t.title.toLowerCase().includes(query.toLowerCase()))
    return out
  }, [tasks, filter, query])

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-2xl font-bold">Your Tasks</h2>
          <p className="text-sm text-gray-500">Focus on what matters — beautifully.</p>
        </div>
      </div>

      <form onSubmit={addTask} className="mb-4">
        <div className="flex gap-2">
          <input
            value={text}
            onChange={e=>setText(e.target.value)}
            onKeyDown={e => { if(e.key === 'Enter') addTask(e) }}
            placeholder="Add a new task..."
            className="flex-1 rounded-lg px-4 py-3 shadow-sm focus:outline-none"
          />
          <Button type="submit">Add</Button>
        </div>
      </form>

      <div className="flex items-center gap-3 mb-4">
        <div className="flex gap-2 bg-white/60 dark:bg-white/5 p-2 rounded-lg">
          <button onClick={()=>setFilter('all')} className={`px-3 py-1 rounded ${filter==='all' ? 'bg-primary-500 text-white' : ''}`}>All</button>
          <button onClick={()=>setFilter('active')} className={`px-3 py-1 rounded ${filter==='active' ? 'bg-primary-500 text-white' : ''}`}>Active</button>
          <button onClick={()=>setFilter('completed')} className={`px-3 py-1 rounded ${filter==='completed' ? 'bg-primary-500 text-white' : ''}`}>Completed</button>
        </div>
        <input placeholder="Search tasks..." value={query} onChange={e=>setQuery(e.target.value)} className="px-3 py-1 rounded-lg flex-1" />
      </div>

      <div className="space-y-3">
        {filtered.length === 0 ? (
          <div className="text-center text-sm text-gray-500 py-8">No tasks found — add something lovely ✨</div>
        ) : filtered.map(task => (
          <TaskItem key={task.id} task={task} onToggle={toggleTask} onDelete={deleteTask} />
        ))}
      </div>
    </div>
  )
}
