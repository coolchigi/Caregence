import Header from '@/components/caregence/header'
import RatedProviders from '@/components/caregence/ratedproviders'
import CommunityActivity from '@/components/caregence/communityactivity'
import QuickActions from '@/components/caregence/quickactions'

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-purple-900 mb-8">Dashboard</h1>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-purple-500">
              <h2 className="text-2xl font-semibold mb-4 text-purple-800">Jump right in!</h2>
              <p className="text-purple-600 mb-4">Welcome back!</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <RatedProviders />
                <CommunityActivity />
              </div>
            </div>
          </div>
          <div className='bg-white rounded-lg shadow-lg p-6 border-t-4 border-purple-500'>
            <QuickActions />
          </div>
        </div>
      </main>
    </div>
  )
}