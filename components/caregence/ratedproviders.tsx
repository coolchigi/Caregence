import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from 'lucide-react'

// Mock data for rated providers
const ratedProviders = [
  { id: 1, name: "Dr. Jane Smith", specialty: "Dentist", city: "Ottawa", rating: 4.8 },
  { id: 2, name: "Dr. John Doe", specialty: "General Practitioner", city: "Toronto", rating: 4.5 },
]

export default function RatedProviders() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Star className="h-5 w-5 text-yellow-400 mr-2" />
          Rated Providers
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="divide-y divide-gray-200">
          {ratedProviders.map((provider) => (
            <li key={provider.id} className="py-4 flex items-center justify-between">
              <div className="flex items-center">
                <Avatar className="h-10 w-10 rounded-full">
                  <AvatarFallback>{provider.name[0]}</AvatarFallback>
                </Avatar>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">{provider.name}</p>
                  <p className="text-sm text-gray-500">{provider.specialty}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 mr-1" />
                <span className="text-sm text-gray-600">{provider.rating}</span>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}