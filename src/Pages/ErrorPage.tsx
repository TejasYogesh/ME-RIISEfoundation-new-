import { AlertTriangle, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
// Note: If you are using React Router, import 'Link' like this:
// import { Link } from "react-router-dom"

export function NotFoundPage() {
  
  // If using React Router, you would wrap the button in a <Link> component:
  // <Button asChild>
  //   <Link to="/">...</Link>
  // </Button>
  // For this example, I'll use a standard <a> tag.

  return (
    <div className="flex min-h-[calc(100vh-200px)] w-full items-center justify-center bg-white font-poppins text-center">
      <div className="flex flex-col items-center justify-center p-8">
        
        <AlertTriangle className="h-24 w-24 text-blue-500" strokeWidth={1.5} />

        <h1 className="mt-8 text-7xl font-bold text-gray-800 md:text-9xl">
          404
        </h1>
        
        <h2 className="mt-4 text-2xl font-semibold text-gray-700 md:text-3xl">
          Page Not Found
        </h2>
        
        <p className="mt-4 max-w-md text-gray-500">
          Sorry, the page you are looking for doesn't exist or has been moved. Let's get you back on track.
        </p>

        <Button asChild className="mt-10 rounded-full bg-blue-600 px-8 py-6 text-lg font-semibold text-white hover:bg-blue-700">
          <a href="/">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Go Back Home
          </a>
        </Button>
      </div>
    </div>
  )
}