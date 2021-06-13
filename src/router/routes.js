
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'people', component: () => import('pages/People.vue') },
      { path: 'planets', component: () => import('pages/Planets.vue') },
      { path: 'films', component: () => import('pages/Films.vue') },
      { path: 'species', component: () => import('pages/Species.vue') },
      { path: 'vehicles', component: () => import('pages/Vehicles.vue') },
      { path: 'starships', component: () => import('pages/Starships.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
