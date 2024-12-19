'use client';

import { Search, RefreshCcw, Plus } from 'lucide-react';
import type { Repository } from '../types/repository';

const repositories: Repository[] = [
    {
        name: 'design-system',
        language: 'React',
        size: '7320 KB',
        visibility: 'Public',
        updatedAt: 'Updated 1 day ago',
    },
    {
        name: 'codeant-ci-app',
        language: 'Javascript',
        size: '5871 KB',
        visibility: 'Private',
        updatedAt: 'Updated 2 days ago',
    },
    {
        name: 'analytics-dashboard',
        language: 'Python',
        size: '4521 KB',
        visibility: 'Private',
        updatedAt: 'Updated 5 days ago',
    },
    {
        name: 'mobile-app',
        language: 'Swift',
        size: '3096 KB',
        visibility: 'Public',
        updatedAt: 'Updated 3 days ago',
    },
    {
        name: 'e-commerce-platform',
        language: 'Java',
        size: '6210 KB',
        visibility: 'Private',
        updatedAt: 'Updated 6 days ago',
    },
    {
        name: 'blog-website',
        language: 'HTML/CSS',
        size: '1876 KB',
        visibility: 'Public',
        updatedAt: 'Updated 4 days ago',
    },
];

const languageColors: Record<string, string> = {
    React: 'bg-blue-500',
    Javascript: 'bg-yellow-400',
    Python: 'bg-blue-600',
    Swift: 'bg-orange-500',
    Java: 'bg-red-500',
    'HTML/CSS': 'bg-purple-500',
    PHP: 'bg-indigo-500',
};

export function RepositoryList() {
    return (
        <div className="flex-1 p-4 md:p-6 mt-16 md:mt-0 bg-white">
            <div className="max-w-6xl mx-">
                <div className='lg:flex  justify-between'>
                    <div className="lg:flex flex-col  lg:items-start md:items-center justify-between mb-4">
                        <h1 className="text-2xl text-gray-700 font-semibold lg:mb-2 md:mb-0">Repositories</h1>
                        <p className="text-sm text-gray-500">33 total repositories</p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 mb-4">
                        <button className="flex items-center justify-center w-full sm:w-auto px-4 py-2 border rounded text-sm font-medium text-gray-700 hover:bg-gray-100">
                            <RefreshCcw className="w-4 h-4 mr-2" />
                            Refresh All
                        </button>
                        <button className="flex items-center justify-center w-full sm:w-auto px-4 py-2 bg-blue-600 text-white rounded text-sm font-medium hover:bg-blue-700">
                            <Plus className="w-4 h-4 mr-2" />
                            Add Repository
                        </button>
                    </div>
                </div>
                <div className="relative mb-4">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                        type="text"
                        placeholder="Search Repositories"
                        className="w-full pl-10 pr-4 py-2 border rounded text-sm text-gray-700 focus:outline-none focus:ring focus:ring-blue-200"
                    />
                </div>

                <div className="">
                    {repositories.map((repo) => (
                        <div
                            key={repo.name}
                            className="p-4 bg-white border hover:shadow-sm transition-shadow"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2">
                                    <h3 className="font-medium text-gray-700">{repo.name}</h3>
                                    <span
                                        className={`px-2 py-1 text-xs font-medium rounded ${repo.visibility === 'Public'
                                            ? 'bg-blue-100 text-blue-700'
                                            : 'bg-gray-100 text-gray-700'
                                            }`}
                                    >
                                        {repo.visibility}
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                                <div className="flex items-center gap-1.5">
                                    <span
                                        className={`w-2 h-2 rounded-full ${languageColors[repo.language]}`}
                                    />
                                    {repo.language}
                                </div>
                                <span>{repo.size}</span>
                                <span>{repo.updatedAt}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}