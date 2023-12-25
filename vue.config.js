module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/ntou-pop-music/' : '/',
  pages: {
    index: {
      entry: 'src/index.js',
      template: 'src/index.html',
      filename: 'index.html',
      title: 'Home Page',
    },
    about_us: {
      entry: 'src/about_us.js',
      template: 'src/about_us.html',
      filename: 'about_us.html',
      title: 'About Us',
    },
    about_executive: {
      entry: 'src/about_executive.js',
      template: 'src/about_executive.html',
      filename: 'about_executive.html',
      title: 'About Committee Members',
    },
    about_equipment: {
      entry: 'src/about_equipment.js',
      template: 'src/about_equipment.html',
      filename: 'about_equipment.html',
      title: 'About Equipment',
    },
    activity_introduction: {
      entry: 'src/activity_introduction.js',
      template: 'src/activity_introduction.html',
      filename: 'activity_introduction.html',
      title: 'Activity Introduction',
    },
    all_announcement: {
      entry: 'src/all_announcement.js',
      template: 'src/all_announcement.html',
      filename: 'all_announcement.html',
      title: 'All Announcement',
    },
    log_in: {
      entry: 'src/log_in.js',
      template: 'src/log_in.html',
      filename: 'log_in.html',
      title: 'Log IN',
    },
    calendar: {
      entry: 'src/my_calendar.js',
      template: 'src/my_calendar.html',
      filename: 'my_calendar.html',
      title: 'Calendar',
    },
    band_use: {
      entry: 'src/band_use.js',
      template: 'src/band_use.html',
      filename: 'band_use.html',
      title: 'Band Use Time',
    }
  },
};
