import { NextRequest } from 'next/server'

console.log('uhhhh\n\n\n\n\n\n\n\nasdf')

export function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('query') // e.g. `/api/search?query=hello`

  return new Response(
    JSON.stringify({ result: `You searched for: ${query}` }),
    {
      headers: { 'Content-Type': 'application/json' },
    }
  )
}
