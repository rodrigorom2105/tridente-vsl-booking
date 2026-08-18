# VSL Closer GHL

Landing VSL en Next.js para video, CTA "Aplicar al equipo" y calendario de GoHighLevel con formulario integrado.

## Stack

- Next.js 16
- React 19
- Tailwind CSS 4
- TypeScript
- lucide-react

## Desarrollo

```bash
npm install
npm run dev -- -p 3001
```

Abre `http://localhost:3001`.

Si quieres verla por Tailscale Serve:

```bash
tailscale serve --bg --https=8444 http://127.0.0.1:3001
```

En este proyecto `next.config.ts` permite el origen
`tridente-server.tail814f21.ts.net` para que Next.js dev cargue JS/CSS desde
Tailscale sin bloquear los assets internos.

## Configuracion

Copia `.env.example` a `.env.local` y pega tus URLs reales:

```bash
cp .env.example .env.local
```

Variables:

- `NEXT_PUBLIC_VIDEO_EMBED_URL`: iframe/embed URL del video.
- `NEXT_PUBLIC_GHL_CALENDAR_EMBED_URL`: URL publica del calendario de GoHighLevel. Ese calendario debe tener un custom form adjunto en GHL para que el lead y la cita queden asociados.

Si una variable queda vacia, la pagina muestra un placeholder listo para reemplazar.

## Flujo

1. El usuario ve la VSL.
2. Hace click en `Aplicar al equipo`.
3. Se revela la seccion de aplicacion.
4. Se muestra el calendario de GHL con formulario integrado.
5. GHL crea/actualiza el contacto, guarda las respuestas y asocia la cita al lead.

## Configuracion en GoHighLevel

1. Crea o edita el calendario en GHL.
2. Agrega un custom form al calendario con los campos de calificacion.
3. Copia el embed o URL publica del calendario.
4. Pegalo en `NEXT_PUBLIC_GHL_CALENDAR_EMBED_URL`.

## Produccion

```bash
npm run build
npm start
```

Para hosting estatico puro, habria que configurar export estatico y evitar cualquier feature server-side futura.
