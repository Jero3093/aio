# AIO - All In One

AIO es una aplicación web construida con Next.js para la gestión de empresas, usuarios y ventas. Está pensada como un panel administrativo con autenticación por roles, vistas de inventario, facturación, ventas y clientes, y un menú principal con el logo de la aplicación.

## Características principales

- Autenticación por rol: `company` y `user`
- Página de inicio con acceso a empresas y usuarios
- Dashboard protegido para compañías
- Navegación lateral con iconos y logo
- Secciones: Inventario, Facturación, Ventas, Usuarios, Clientes y Ajustes
- Registro de empresas disponible desde el login
- Soporte de sesiones en Supabase
- Estilos con Tailwind CSS y fuentes optimizadas con `next/font`

## Estructura del proyecto

- `src/app` - rutas y páginas del App Router de Next.js
- `src/components` - componentes reutilizables, formularios y navegación
- `src/components/dashboard` - menú y visualización de datos del dashboard
- `src/hooks` - hooks personalizados para sesión y datos de usuario
- `src/utils/supabase` - cliente y middleware de Supabase
- `src/utils/auth` - lógica de sesión y gestión de usuarios
- `public/logo.png` - logo principal usado en el dashboard

## Comenzar

Instala dependencias:

```bash
npm install
```

Inicia el servidor de desarrollo:

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Scripts disponibles

- `npm run dev` - inicia el servidor de desarrollo
- `npm run build` - crea el build de producción
- `npm start` - ejecuta la versión de producción
- `npm run lint` - ejecuta ESLint

## Tecnologías usadas

- Next.js 16.2.2
- React 19.2.4
- Tailwind CSS 4
- Supabase JS 2.x
- Sonner para notificaciones
- React Icons para iconos de interfaz

## Notas

El proyecto usa el App Router de Next.js y rutas dinámicas en `src/app/auth/[role]`. La interfaz principal incluye un menú lateral con logo y accesos rápidos para cada sección del dashboard.

Para despliegue, puede usarse Vercel u otra plataforma compatible con Next.js.

