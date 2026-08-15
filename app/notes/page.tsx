import { createClient } from '@supabase/supabase-js'

export default async function NotesPage() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
  
  const { data: notes, error } = await supabase.from('notes').select('*')

  if (error) {
    return <div style={{ padding: '40px' }}>Erro ao buscar: {error.message}</div>
  }

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h1>Notas do Supabase na PWlabs:</h1>
      <pre>{JSON.stringify(notes, null, 2)}</pre>
    </div>
  )
}