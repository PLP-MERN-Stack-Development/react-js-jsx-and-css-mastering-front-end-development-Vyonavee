import React from 'react'
import TaskManager from '../tasks/TaskManager'
import Card from '../components/ui/Card'

export default function Home(){
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <Card>
          <TaskManager />
        </Card>
      </div>
      <aside>
        <Card className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Tips</h3>
            <p className="text-sm mt-2">Toggle dark mode for a cosy look.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Motivation</h3>
            <p className="text-sm mt-2">“Small steps every day.”</p>
          </div>
        </Card>
      </aside>
    </div>
  )
}
