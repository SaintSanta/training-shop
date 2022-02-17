import { MainHeader } from '../../components/main-blocks/main-header';
import { Benefits } from '../../components/main-blocks/benefits';
import { Clothes } from '../../components/main-blocks/clothes';
import { MainNews } from '../../components/main-blocks/main-news';
import { MainSubscribe } from '../../components/main-blocks/main-subscribe';
import { MainBlog } from '../../components/main-blocks/main-blog';

export const MainPage = () => (
  <>
    <div className='wrapper'>
      <MainHeader />
      <Benefits />
      <Clothes productType='women' />
      <Clothes productType='men' />
      <MainNews />
    </div>
    <MainSubscribe />
    <div className='wrapper'>
      <MainBlog />
    </div>
  </>
);
