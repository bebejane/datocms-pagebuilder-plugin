import { RenderPageCtx } from 'datocms-plugin-sdk';
import { Canvas } from 'datocms-react-ui';
import s from './PageBuilder.module.scss'

type PropTypes = {
  ctx: RenderPageCtx,
};
export default function PageBuilder({ ctx }: PropTypes) {
  return (
    <Canvas ctx={ctx}>
      <div className={s.container}>
        <iframe  frameBorder={0} className={s.editor} src={'https://meadow.admin.datocms.com/editor/item_types/69229/items/5788003'}/>
        <iframe  frameBorder={0} className={s.site} src={'http://localhost:3001'}/>
      </div>
    </Canvas>
  );
}