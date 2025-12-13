'use client';

import { useState } from 'react';

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('products');

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-xl font-bold text-text-charcoal">Admin Dashboard</h1>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <button
                  onClick={() => setActiveTab('products')}
                  className={`${activeTab === 'products' ? 'border-primary-gold text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                >
                  Products
                </button>
                <button
                  onClick={() => setActiveTab('content')}
                  className={`${activeTab === 'content' ? 'border-primary-gold text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                >
                  Content
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {activeTab === 'products' && (
          <div className="bg-white shadow sm:rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-medium text-gray-900">Product Management</h2>
              <button className="bg-primary-gold text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-secondary-gold">
                Add New Product
              </button>
            </div>
            
            {/* Placeholder for Product List */}
            <div className="border border-gray-200 rounded-md overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="relative px-6 py-3"><span className="sr-only">Edit</span></th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {/* Mock Row */}
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Royal Gold Chrono</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Luxury</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$250.00</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a href="#" className="text-primary-gold hover:text-secondary-gold">Edit</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-gray-500 italic">
              Note: This is a static admin view. To make this functional, we need to connect a database (like PostgreSQL or MongoDB) or a CMS.
            </p>
          </div>
        )}

        {activeTab === 'content' && (
          <div className="bg-white shadow sm:rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Content Management</h2>
            <p className="text-gray-500">Manage blog posts, FAQs, and page content here.</p>
            {/* Placeholder for Content Form */}
            <div className="mt-6 border-t border-gray-200 pt-6">
              <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div className="sm:col-span-6">
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                  <div className="mt-1">
                    <input type="text" name="title" id="title" className="shadow-sm focus:ring-primary-gold focus:border-primary-gold block w-full sm:text-sm border-gray-300 rounded-md p-2 border" />
                  </div>
                </div>
                <div className="sm:col-span-6">
                  <label htmlFor="body" className="block text-sm font-medium text-gray-700">Content</label>
                  <div className="mt-1">
                    <textarea id="body" name="body" rows={5} className="shadow-sm focus:ring-primary-gold focus:border-primary-gold block w-full sm:text-sm border-gray-300 rounded-md p-2 border"></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
