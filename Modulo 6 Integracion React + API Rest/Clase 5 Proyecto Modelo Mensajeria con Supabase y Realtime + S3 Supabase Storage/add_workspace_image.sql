-- 1. Agregar columna image_url a workspaces
ALTER TABLE public.workspaces ADD COLUMN image_url TEXT;

-- 2. Crear bucket para imágenes de workspaces
-- Nota: Si esto falla en el editor SQL es porque no tienes permisos de superusuario, 
-- pero usualmente en Supabase puedes crear buckets desde el Dashboard.
-- Si tienes permisos, este es el comando:
INSERT INTO storage.buckets (id, name, public) 
VALUES ('workspace_images', 'workspace_images', true)
ON CONFLICT (id) DO NOTHING;

-- 3. Políticas de Storage para el bucket 'workspace_images'
-- Permitir que usuarios autenticados suban imágenes
CREATE POLICY "Permitir subida de imágenes a autenticados"
ON storage.objects FOR INSERT 
TO authenticated
WITH CHECK (bucket_id = 'workspace_images');

-- Permitir que todos vean las imágenes
CREATE POLICY "Imágenes de workspaces públicas"
ON storage.objects FOR SELECT 
TO public
USING (bucket_id = 'workspace_images');
