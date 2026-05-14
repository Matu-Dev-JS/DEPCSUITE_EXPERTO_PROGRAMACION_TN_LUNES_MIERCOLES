ALTER TABLE public.workspaces ENABLE ROW LEVEL SECURITY;

-- Cualquier usuario logueado puede crear un workspace
CREATE POLICY "Autenticados pueden crear workspaces" ON public.workspaces 
FOR INSERT WITH CHECK (auth.role() = 'authenticated');
