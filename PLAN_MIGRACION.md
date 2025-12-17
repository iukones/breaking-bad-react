# Plan de Migración: Breaking Bad → Rick and Morty API

## Análisis del Código Actual

### Archivos Revisados:
1. `src/config/api.js` - Ya configurado para Rick and Morty API ✅
2. `src/hooks/useCharacters.js` - Hook para obtener personajes
3. `src/components/characters/CharacterGrid.js` - Grid para mostrar personajes
4. `src/components/characters/CharacterItem.js` - Componente de personaje individual
5. `src/App.js` - Componente principal

## Problemas Identificados

### 1. Diferencias en Estructura de Datos:
**Breaking Bad API:**
- `char_id` (number)
- `name` (string)
- `nickname` (string)
- `actor` (string)
- `birthday` (string)
- `occupation` (array)
- `status` (string)
- `img` (string)

**Rick and Morty API:**
- `id` (number)
- `name` (string)
- `status` (string)
- `species` (string)
- `type` (string)
- `gender` (string)
- `image` (string)
- `episode` (array) - No existe en Breaking Bad

### 2. Cambios Necesarios:

#### A. src/config/api.js
- ✅ Ya está configurado correctamente para Rick and Morty

#### B. src/hooks/useCharacters.js
- ❌ Está usando `ENDPOINTS.character` (singular) cuando debería ser consistente
- ❌ Manejo de respuesta podría necesitar ajustes para la estructura de Rick and Morty

#### C. src/components/characters/CharacterItem.js
- ❌ Usando `item.char_id` (Breaking Bad) → debe ser `item.id` (Rick and Morty)
- ❌ Mapeando propiedades incorrectas:
  - `item.species` como "Actor" (incorrecto)
  - `item.type` como "Apodo" (incorrecto)
  - `item.gender` como "Cumpleaños" (incorrecto)
- ❌ No está mostrando propiedades relevantes de Rick and Morty

#### D. src/components/characters/CharacterGrid.js
- ✅ Estructura compatible, solo necesita cambio de key

## Cambios Propuestos

### 1. Actualizar CharacterItem.js:
- Cambiar `item.char_id` → `item.id`
- Reasignar correctamente las propiedades:
  - `item.species` → "Especie"
  - `item.type` → "Tipo"
  - `item.gender` → "Género"
  - Agregar `item.status` → "Estado"
  - Mantener `item.name` → "Nombre"
  - Mantener `item.image` → imagen

### 2. Verificar y ajustar useCharacters.js:
- Asegurar que el mapeo de datos sea correcto
- Verificar manejo de paginación de Rick and Morty API

### 3. Actualizar texto de etiquetas en español

## Estado Actual
- ✅ Configuración de API correcta
- ❌ Componentes usando propiedades de Breaking Bad
- ❌ Mapeo de datos incorrecto
- ❌ Etiquetas de información desactualizadas
