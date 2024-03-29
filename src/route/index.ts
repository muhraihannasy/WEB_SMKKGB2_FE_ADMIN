const ROUTE: any = {
  Auth: {
    login: '/',
    register: '/register',
    veritification: '/veritification',
    payment_success: '/payment',
  },
  Administrator: {
    Dashboard: '/administrator/dashboard',
    User_Management: {
      root: '/administrator/user_management',
      list: '/administrator/user_management/list',
    },
    Ppdb: {
      root: '/administrator/ppdb',
      list: '/administrator/ppdb/list',
      list_pay: '/administrator/ppdb/list_pembayaran',
      add: '/administrator/ppdb/add',
      edit: '/administrator/ppdb/edit',
      detail: '/administrator/ppdb/detail',
      detail_payment: '/administrator/ppdb/detail',
    },
    Artikel: {
      root: '/administrator/artikel',
      add: '/administrator/artikel/add',
      edit: '/administrator/artikel/edit',
      list: '/administrator/artikel/list',
    },
  },
};

export default ROUTE;
