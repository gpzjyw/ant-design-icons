// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BlockOutlinedSvg from '@ant-design/icons-svg/lib/asn/BlockOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BlockOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BlockOutlinedSvg}></AntdIcon>;
};

BlockOutlined.displayName = 'BlockOutlined';
BlockOutlined.inheritAttrs = false;
export default BlockOutlined;