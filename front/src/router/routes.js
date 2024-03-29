
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainClient.vue'),
    children: [
      { path: '', component: () => import('pages/EventosCliente.vue'), meta: { title: 'Inicio' } }
    ]
  },
  {
    path: '/login',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/Login.vue'), meta: { title: 'Login' } },
      { path: '/recovery', component: () => import('pages/Recovery.vue'), meta: { title: 'Recovery' } }
    ]
  },
  {
    path: '/admin',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue'), meta: { title: 'Admin', requireSession: true } },
      { path: '/admin/events', component: () => import('pages/EventsAdmin.vue'), meta: { title: 'Eventos', requireSession: true } },
      { path: '/admin/reports', component: () => import('pages/ReportsAdmin.vue'), meta: { title: 'Reportes', requireSession: true } },
      { path: '/admin/users', component: () => import('pages/UsersAdmin.vue'), meta: { title: 'Usuarios', requireSession: true } }
    ]
  },
  {
    path: '/client',
    component: () => import('layouts/MainClient.vue'),
    children: [
      { path: '/eventos', component: () => import('pages/EventosCliente.vue'), meta: { title: 'Eventos Choclo' } },
      { path: '/eventos/:id', name: 'eventos', component: () => import('pages/Evento[id].vue') }
    ]
  },
  {
    name: 'logout',
    path: '/logout',
    meta: {
      title: 'Logout', requireSession: true
    }
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
