// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CiOutlinedSvg from '@ant-design/icons-svg/lib/asn/CiOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CiOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CiOutlinedSvg}></AntdIcon>;
};

CiOutlined.displayName = 'CiOutlined';
CiOutlined.inheritAttrs = false;
export default CiOutlined;