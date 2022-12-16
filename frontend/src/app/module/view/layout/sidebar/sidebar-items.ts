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
    path: 'admin/tva/list',
    title: 'Tva',
    moduleName: 'Tva',
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
    path: 'sousadmin/tva/list',
    title: 'Tva',
    moduleName: 'Tva',
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
    path: 'technicien/tva/list',
    title: 'Tva',
    moduleName: 'Tva',
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
    path: 'client/tva/list',
    title: 'Tva',
    moduleName: 'Tva',
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