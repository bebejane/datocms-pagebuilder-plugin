import { connect, IntentCtx, RenderPageCtx } from 'datocms-plugin-sdk';
import { render } from './utils/render';
import PageBuilder from './entrypoints/PageBuilder';
import ConfigScreen from './entrypoints/ConfigScreen';
import 'datocms-react-ui/styles.css';

connect({
  renderConfigScreen(ctx) {
    return render(<ConfigScreen ctx={ctx} />);
  },
  mainNavigationTabs(ctx: IntentCtx) {
    return [
      {
        label: 'Page Builder',
        icon: 'cubes',
        pointsTo: {
          pageId: 'pagebuilder',
        },
      },
    ];
  },
  renderPage(pageId, ctx: RenderPageCtx) {
    switch (pageId) {
      case 'pagebuilder':
        return render(<PageBuilder ctx={ctx} />);
    }
  },
});
