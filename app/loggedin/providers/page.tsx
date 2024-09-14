'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, MapPin, Star, ArrowLeft } from 'lucide-react'

// Mock data for healthcare providers
const mockProviders = [
  { id: 1, name: "Dr. Jane Smith", specialty: "Dentist", city: "Ottawa", rating: 4.8 },
  { id: 2, name: "Dr. John Doe", specialty: "General Practitioner", city: "Toronto", rating: 4.5 },
  { id: 3, name: "Dr. Emily Brown", specialty: "Pediatrician", city: "Vancouver", rating: 4.9 },
  { id: 4, name: "Dr. Michael Lee", specialty: "Cardiologist", city: "Montreal", rating: 4.7 },
  { id: 5, name: "Dr. Sarah Johnson", specialty: "Dermatologist", city: "Calgary", rating: 4.6 },
]

export default function ProvidersPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredProviders, setFilteredProviders] = useState(mockProviders)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const filtered = mockProviders.filter(provider => 
      provider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      provider.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
      provider.city.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredProviders(filtered)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <Link href="/loggedin">
            <Button
              variant="outline"
              className="bg-white text-purple-700 border-purple-300 hover:bg-purple-50 hover:text-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-200 ease-in-out"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Button>
          </Link>
        </div>

        <h1 className="text-4xl font-bold text-purple-900">Healthcare Providers</h1>

        <Card className="bg-white shadow-xl border-t-4 border-purple-500">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-purple-800">Find Healthcare Providers</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSearch} className="flex space-x-2 mb-6">
              <Input 
                type="text" 
                placeholder="Search by name, specialty, or city" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-grow border-purple-300 focus:border-purple-500 focus:ring-purple-500"
              />
              <Button type="submit" className="bg-purple-600 text-white hover:bg-purple-700 focus:ring-purple-500">
                <Search className="mr-2 h-4 w-4" />
                Search
              </Button>
            </form>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProviders.map(provider => (
                <Card key={provider.id} className="border-t-2 border-purple-200">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-purple-900">{provider.name}</h3>
                        <p className="text-sm text-purple-600">{provider.specialty}</p>
                      </div>
                      <Badge className="bg-purple-100 text-purple-800">
                        <Star className="h-4 w-4 mr-1" />
                        {provider.rating}
                      </Badge>
                    </div>
                    <div className="mt-2 flex items-center text-sm text-purple-600">
                      <MapPin className="h-4 w-4 mr-1" />
                      {provider.city}
                    </div>
                    <Button className="mt-4 w-full bg-black text-white hover:bg-purple-600 transition-colors duration-200">
                      Book Appointment
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}