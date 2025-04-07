// 站点可配置化
const navData: Array<{
    title: string,
    path: string,
    type: 'inner' | 'outer'
}> = [
    {
      title: 'Home',
      path: '/',
      type: 'inner',
    },
    {
      title: 'Writing',
      path: '/archives/',
      type: 'inner',
    },
    {
      title: 'Garden',
      path: 'https://dg.aluc.me',
      type: 'outer',
    },
    {
      title: 'Memos',
      path: 'https://dg.aluc.me/Memos/About-Memos',
      type: 'outer',
    },
    {
      title: 'Tech',
      path: 'https://dg.aluc.me/COMPUTER_SCIENCE/README',
      type: 'outer',
    }
  ];
const GlobalInfo = {
    // 站点名称
    siteName: 'Ming',
    Author: 'Ming',

    // 导航
    navData,
};

export {GlobalInfo}