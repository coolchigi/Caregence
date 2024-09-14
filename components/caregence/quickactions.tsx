import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link href="/loggedin/dashboard/providers" passHref>
          <Button className="w-full bg-black hover:bg-purple-600 transition-colors duration-200">
            Find a Provider
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
        <Link href="/loggedin/dashboard/matching" passHref>
          <Button className="w-full bg-black hover:bg-purple-600 transition-colors duration-200">
            Start AI Matching
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
        <Link href="/loggedin/dashboard/community" passHref>
          <Button className="w-full bg-black hover:bg-purple-600 transition-colors duration-200">
            Ask a Question
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
        <Button className="w-full bg-black hover:bg-purple-600 transition-colors duration-200">
          View Health Records
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  )
}