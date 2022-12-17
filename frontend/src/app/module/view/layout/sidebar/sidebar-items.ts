import { RouteInfo } from './sidebar.metadata';


export const ROUTES: RouteInfo[] = [
  {
    path: '',
    title: 'MENUITEMS.MAIN.TEXT',
    moduleName: '',
    iconType: '',
    icon: '',
    class: '',
    groupTitle: true,
    badge: '',
    badgeClass: '',
    role: ['All'],
    submenu: [],
  },
 {
    path: '',
    title: 'MENUITEMS.DASHBOARD.TEXT',
    moduleName: 'dashboard',
    iconType: 'material-icons-two-tone',
    // icon: 'dashboard',
    icon: 'home',
    class: 'menu-toggle',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Admin'],
    submenu: [
      {
        path: 'admin/dashboard/main',
        title: 'MENUITEMS.DASHBOARD.LIST.DASHBOARD1',
        moduleName: 'dashboard',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['Admin'],
        submenu: [],
      },
      {
        path: 'admin/dashboard/dashboard2',
        title: 'MENUITEMS.DASHBOARD.LIST.DASHBOARD2',
        moduleName: 'dashboard',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['Admin'],
        submenu: [],
      },
    ],
  },
 
  {
    path: 'admin/rendez-vous/list',
    title: 'Rendez vous',
    moduleName: 'Rendez vous',
    iconType: 'material-icons-two-tone',
    icon: 'add_to_photos',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Admin'],
    submenu: [],
  },


  {
    path: 'admin/service/list',
    title: 'Service',
    moduleName: 'Service',
    iconType: 'material-icons-two-tone',
    icon: 'add_to_photos',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Admin'],
    submenu: [],
  },


  {
    path: 'admin/seccurcales/list',
    title: 'Seccurcales',
    moduleName: 'Seccurcales',
    iconType: 'material-icons-two-tone',
    icon: 'add_to_photos',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Admin'],
    submenu: [],
  },

{
    path: 'admin/settings',
    title: 'Settings',
    moduleName: 'Settings',
    iconType: 'material-icons-two-tone',
    icon: 'settings',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Admin'],
    submenu: [],
  }
  // SideBar for SousAdmin  [Begin]

,{
    path: '',
    title: 'MENUITEMS.DASHBOARD.TEXT',
    moduleName: 'dashboard',
    iconType: 'material-icons-two-tone',
    // icon: 'dashboard',
    icon: 'home',
    class: 'menu-toggle',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['SousAdmin'],
    submenu: [
      {
        path: 'sousadmin/dashboard/main',
        title: 'MENUITEMS.DASHBOARD.LIST.DASHBOARD1',
        moduleName: 'dashboard',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['SousAdmin'],
        submenu: [],
      },
      {
        path: 'sousadmin/dashboard/dashboard2',
        title: 'MENUITEMS.DASHBOARD.LIST.DASHBOARD2',
        moduleName: 'dashboard',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['SousAdmin'],
        submenu: [],
      },
    ],
  },
 
  {
    path: 'sousadmin/rendez-vous/list',
    title: 'Rendez vous',
    moduleName: 'Rendez vous',
    iconType: 'material-icons-two-tone',
    icon: 'add_to_photos',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['SousAdmin'],
    submenu: [],
  },


  {
    path: 'sousadmin/service/list',
    title: 'Service',
    moduleName: 'Service',
    iconType: 'material-icons-two-tone',
    icon: 'add_to_photos',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['SousAdmin'],
    submenu: [],
  },


  {
    path: 'sousadmin/seccurcales/list',
    title: 'Seccurcales',
    moduleName: 'Seccurcales',
    iconType: 'material-icons-two-tone',
    icon: 'add_to_photos',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['SousAdmin'],
    submenu: [],
  },


  // SideBar for SousAdmin  [End]


  // SideBar for Technicien  [Begin]

,{
    path: '',
    title: 'MENUITEMS.DASHBOARD.TEXT',
    moduleName: 'dashboard',
    iconType: 'material-icons-two-tone',
    // icon: 'dashboard',
    icon: 'home',
    class: 'menu-toggle',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Technicien'],
    submenu: [
      {
        path: 'technicien/dashboard/main',
        title: 'MENUITEMS.DASHBOARD.LIST.DASHBOARD1',
        moduleName: 'dashboard',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['Technicien'],
        submenu: [],
      },
      {
        path: 'technicien/dashboard/dashboard2',
        title: 'MENUITEMS.DASHBOARD.LIST.DASHBOARD2',
        moduleName: 'dashboard',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['Technicien'],
        submenu: [],
      },
    ],
  },
 
  {
    path: 'technicien/rendez-vous/list',
    title: 'Rendez vous',
    moduleName: 'Rendez vous',
    iconType: 'material-icons-two-tone',
    icon: 'add_to_photos',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Technicien'],
    submenu: [],
  },


  {
    path: 'technicien/service/list',
    title: 'Service',
    moduleName: 'Service',
    iconType: 'material-icons-two-tone',
    icon: 'add_to_photos',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Technicien'],
    submenu: [],
  },


  {
    path: 'technicien/seccurcales/list',
    title: 'Seccurcales',
    moduleName: 'Seccurcales',
    iconType: 'material-icons-two-tone',
    icon: 'add_to_photos',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Technicien'],
    submenu: [],
  },


  // SideBar for Technicien  [End]


  // SideBar for Client  [Begin]

,{
    path: '',
    title: 'MENUITEMS.DASHBOARD.TEXT',
    moduleName: 'dashboard',
    iconType: 'material-icons-two-tone',
    // icon: 'dashboard',
    icon: 'home',
    class: 'menu-toggle',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Client'],
    submenu: [
      {
        path: 'client/dashboard/main',
        title: 'MENUITEMS.DASHBOARD.LIST.DASHBOARD1',
        moduleName: 'dashboard',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['Client'],
        submenu: [],
      },
      {
        path: 'client/dashboard/dashboard2',
        title: 'MENUITEMS.DASHBOARD.LIST.DASHBOARD2',
        moduleName: 'dashboard',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['Client'],
        submenu: [],
      },
    ],
  },
 
  {
    path: 'client/rendez-vous/list',
    title: 'Rendez vous',
    moduleName: 'Rendez vous',
    iconType: 'material-icons-two-tone',
    icon: 'add_to_photos',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Client'],
    submenu: [],
  },


  {
    path: 'client/service/list',
    title: 'Service',
    moduleName: 'Service',
    iconType: 'material-icons-two-tone',
    icon: 'add_to_photos',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Client'],
    submenu: [],
  },


  {
    path: 'client/seccurcales/list',
    title: 'Seccurcales',
    moduleName: 'Seccurcales',
    iconType: 'material-icons-two-tone',
    icon: 'add_to_photos',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Client'],
    submenu: [],
  },


  // SideBar for Client  [End]


 ]