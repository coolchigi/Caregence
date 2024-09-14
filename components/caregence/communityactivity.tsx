import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare } from 'lucide-react'

// Mock data for community activity
const communityActivity = [
  { id: 1, user: "Alice", question: "What are some good exercises for lower back pain?" },
  { id: 2, user: "Bob", question: "How often should I get a dental check-up?" },
]

export default function CommunityActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <MessageSquare className="h-5 w-5 text-blue-500 mr-2" />
          Community Activity
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="divide-y divide-gray-200">
          {communityActivity.map((activity) => (
            <li key={activity.id} className="py-4">
              <p className="text-sm font-medium text-gray-900">{activity.user}</p>
              <p className="text-sm text-gray-500">{activity.question}</p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}