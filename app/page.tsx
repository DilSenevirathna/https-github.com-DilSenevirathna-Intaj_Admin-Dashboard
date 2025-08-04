import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white/10 backdrop-blur-lg border-white/20">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-gradient-to-r from-orange-400 to-amber-400 w-12 h-12 rounded-lg flex items-center justify-center">
              <span className="text-white text-xl font-bold">I</span>
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-center text-white">Intaj Admin</CardTitle>
          <CardDescription className="text-center text-white/70">
            Enter your credentials to access the admin panel
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-white">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="admin@intaj.com"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-white">
              Password
            </Label>
            <Input id="password" type="password" className="bg-white/10 border-white/20 text-white" />
          </div>
          <Button
            asChild
            className="w-full bg-gradient-to-r from-orange-400 to-amber-400 hover:from-orange-500 hover:to-amber-500 text-white"
          >
            <Link href="/dashboard">Sign In</Link>
          </Button>
          <div className="text-center">
            <Link href="/forgot-password" className="text-sm text-white/70 hover:text-white">
              Forgot your password?
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
