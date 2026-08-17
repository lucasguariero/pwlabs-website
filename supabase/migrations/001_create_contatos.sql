-- Criar tabela de contatos/leads
CREATE TABLE public.contatos (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nome TEXT NOT NULL,
  email TEXT NOT NULL,
  telefone TEXT,
  mensagem TEXT,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Habilitar RLS (Row Level Security)
ALTER TABLE public.contatos ENABLE ROW LEVEL SECURITY;

-- Permitir insert público (para o site)
CREATE POLICY "Permitir insert público" ON public.contatos
  FOR INSERT TO anon, authenticated
  WITH CHECK (true);
