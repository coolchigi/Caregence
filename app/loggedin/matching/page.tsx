'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Stethoscope, Star, MapPin, Loader2, ArrowLeft } from 'lucide-react'

// Mock data for healthcare providers (same as in providers page)
const mockProviders = [
  { id: 1, name: "Dr. Jane Smith", specialty: "Dentist", city: "Ottawa", rating: 4.8 },
  { id: 2, name: "Dr. John Doe", specialty: "General Practitioner", city: "Toronto", rating: 4.5 },
  { id: 3, name: "Dr. Emily Brown", specialty: "Pediatrician", city: "Vancouver", rating: 4.9 },
  { id: 4, name: "Dr. Michael Lee", specialty: "Cardiologist", city: "Montreal", rating: 4.7 },
  { id: 5, name: "Dr. Sarah Johnson", specialty: "Dermatologist", city: "Calgary", rating: 4.6 },
]

export default function MatchingPage() {
  const [symptoms, setSymptoms] = useState('')
  const [matchedProvider, setMatchedProvider] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  // const handleMatch = () => {
  //   setIsLoading(true)
  //   // Simulating AI matching process
  //   setTimeout(() => {
  //     const randomProvider = mockProviders[Math.floor(Math.random() * mockProviders.length)]
  //     setMatchedProvider(randomProvider)
  //     setIsLoading(false)
  //   }, 2000)
  // }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
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

        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-purple-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            AI-Powered Provider Matching
          </h1>
          <p className="mt-5 text-xl text-purple-600">
            Find the perfect healthcare provider tailored to your needs.
          </p>
        </div>

        <Card className="bg-white shadow-xl border-t-4 border-purple-500">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-purple-900">Find Your Best Match</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label htmlFor="symptoms" className="text-lg font-medium text-purple-700">
                Describe your symptoms or health concerns
              </Label>
              <Input
                id="symptoms"
                value={symptoms}
                onChange={(e) => setSymptoms(e.target.value)}
                placeholder="E.g., persistent cough, lower back pain"
                className="mt-2 block w-full border-purple-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
            <Button 
              className="w-full bg-purple-600 text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Stethoscope className="mr-2 h-4 w-4" />
              )}
              {isLoading ? 'Finding Best Match...' : 'Find Best Match'}
            </Button>
          </CardContent>
        </Card>

        {matchedProvider && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-white shadow-xl border-t-4 border-purple-500">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-purple-900">Best Match</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    {/* <h4 className="text-xl font-semibold text-purple-900">{matchedProvider.name}</h4>
                    <p className="text-lg text-purple-600">{matchedProvider.specialty}</p> */}
                  </div>
                  <Badge className="bg-purple-100 text-purple-800 text-lg px-3 py-1">
                    <Star className="h-5 w-5 mr-1 inline" />
                    {/* {matchedProvider.rating} */}
                  </Badge>
                </div>
                <div className="flex items-center text-lg text-purple-600">
                  <MapPin className="h-5 w-5 mr-2" />
                  {/* {matchedProvider.city} */}
                </div>
                <Button className="w-full bg-purple-600 text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                  Book Appointment
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  )
}