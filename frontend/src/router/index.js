import { createRouter, createWebHistory } from '@ionic/vue-router';

// import PhotosPageOne from '../pages/categoryone/PhotosPageOne';
// import PhotosPageTwo from '../pages/categorytwo/PhotosPageTwo';
// import PhotosPageThree from '../pages/categorythree/PhotosPageThree';
// import PhotosPageFour from '../pages/categoryfour/PhotosPageFour';
// import PhotosPageFive from '../pages/categoryfive/PhotosPageFive';
// import PhotosPageSix from '../pages/categorysix/PhotosPageSix';

const routes  = [
  // {
  //   path: '/photos/categoryone',
  //   component: PhotosPageOne
  // },
  // {
  //   path: '/photos/categorytwo',
  //   component: PhotosPageTwo
  // },
  // {
  //   path: '/photos/categorythree',
  //   component: PhotosPageThree
  // },
  // {
  //   path: '/photos/categoryfour',
  //   component: PhotosPageFour
  // },
  // {
  //   path: '/photos/categoryfive',
  //   component: PhotosPageFive
  // },
  // {
  //   path: '/photos/categorysix',
  //   component: PhotosPageSix
  // },

  // {
  //   path: '',
  //   redirect: '/folder/Inbox'
  // },
  // {
  //   path: '/folder/:id',
  //   component: () => import ('../views/FolderPage.vue')
  // },
  // {
  //   path: '/',
  //   redirect: '/photos'
  // },
  // {
  //   path: '/photos',
  //   component: PhotosPage
  // },
  {
    path: '/photos/:categoryid/',
    component: () => import('../pages/PhotosPage.vue')
  },

  {
    path: '/photos/:categoryid/:id',
    component: () => import('../pages/PhotoDetailsPage.vue')
  },
  {
    path: '/photos/add',
    component: () => import('../pages/AddPhotoPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
