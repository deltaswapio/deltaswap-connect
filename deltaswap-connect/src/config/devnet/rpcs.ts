import { populateRpcField } from '../utils';
const {
  REACT_APP_ETHEREUM_DEVNET_RPC,
  REACT_APP_OSMOSIS_DEVNET_RPC,
  REACT_APP_DELTACHAIN_DEVNET_RPC,
  REACT_APP_TERRA2_DEVNET_RPC,
  REACT_APP_SEI_REST,
} = process.env;

export const DEVNET_RPC_MAPPING = {
  ...populateRpcField('ethereum', REACT_APP_ETHEREUM_DEVNET_RPC),
  ...populateRpcField('osmosis', REACT_APP_OSMOSIS_DEVNET_RPC),
  ...populateRpcField('deltachain', REACT_APP_DELTACHAIN_DEVNET_RPC),
  ...populateRpcField('terra2', REACT_APP_TERRA2_DEVNET_RPC),
};

export const DEVNET_REST_MAPPING = {
  ...populateRpcField('sei', REACT_APP_SEI_REST),
};

export const DEVNET_GRAPHQL_MAPPING = {
  ...populateRpcField('aptos', process.env.REACT_APP_APTOS_DEVNET_REST),
};
