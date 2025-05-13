# Tecanuncios

Tecanuncios es una plataforma web diseñada para gestionar y mostrar anuncios de Tecsup.

## 🚀 Características

- Autenticación y autorización de usuarios
- Creación y gestión de anuncios
- Diseño responsivo para todos los dispositivos
- Actualizaciones en tiempo real
- Soporte para carga de imágenes

## 🛠️ Tecnologías

- Frontend: React.js
- Backend: Django


## 📋 Requisitos Previos

- Python (v3.8 o superior)
- Node.js (v14 o superior)
- PostgreSQL
- npm o yarn

## ⚙️ Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/robbiebriceno/tecanuncios.git
```

2. Instalar dependencias del frontend:
```bash
cd tecanuncios/frontend
npm install
```

3. Instalar dependencias del backend:
```bash
cd ../backend
python -m venv venv
source venv/bin/activate  # En Windows: venv\Scripts\activate
pip install -r requirements.txt
```

4. Crear un archivo .env con las siguientes variables:
```env
DEBUG=True
SECRET_KEY=tu_django_secret_key
DATABASE_URL=tu_postgresql_url
CLOUDINARY_URL=tu_cloudinary_url
```

5. Iniciar los servidores:
```bash
# Terminal 1 (Backend)
python manage.py runserver

# Terminal 2 (Frontend)
npm start
```

## 🔧 Uso

1. Accede a la aplicación en `http://localhost:3000`
2. Inicia sesión con tus credenciales
3. Crea, edita o elimina anuncios
4. Gestiona tu perfil y configuración

## 📦 Estructura del Proyecto

```
tecanuncios/
├── frontend/        # Aplicación Frontend en React
├── backend/         # Servidor Backend en Django
├── public/          # Archivos estáticos
└── docs/           # Documentación
```

## 👥 Contribuir

1. Haz un fork del repositorio
2. Crea tu rama de características (`git checkout -b feature/NuevaCaracteristica`)
3. Haz commit de tus cambios (`git commit -m 'Añadir nueva característica'`)
4. Haz push a la rama (`git push origin feature/NuevaCaracteristica`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo LICENSE para más detalles.

## 📞 Contacto

Enlace del Proyecto: [https://github.com/robbiebriceno/tecanuncios](https://github.com/robbiebriceno/tecanuncios)
