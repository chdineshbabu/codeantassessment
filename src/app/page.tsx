'use client'

import { Sidebar } from '../components/sidebar'
import { RepositoryList } from '../components/repository-list'

export default function Page() {
  return (
    <div className="flex min-h-screen bg-gray-50 lg:gap-6 md:gap-0">
      <Sidebar />
      <main className="flex-1 lg:ml-0 md:ml-64 border md:mt-0 lg:mr-6 md:mr-0 lg:mt-6 border-gray-200 rounded-xl shadow-sm bg-white">
        <RepositoryList />
      </main>
    </div>
  )
}
