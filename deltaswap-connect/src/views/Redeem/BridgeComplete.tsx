import React from 'react';
import { useDispatch } from 'react-redux';

import { CTA } from 'config';
import { setRoute } from 'store/router';

import Button from 'components/Button';
import InputContainer from 'components/InputContainer';
import Spacer from 'components/Spacer';
import AddToWallet from './AddToWallet';

function BridgeComplete() {
  const dispatch = useDispatch();
  const toLink = () => {
    if (typeof window !== 'undefined') {
      window.location.href = CTA!.link;
    }
  };
  const toBridge = () => {
    dispatch(setRoute('bridge'));
  };
  return (
    <div>
      <InputContainer>
        <>
          <div>The bridge is now complete.</div>
          {!!CTA && (
            <div>
              Click the button below to begin using your new Deltaswap assets.
            </div>
          )}
          <AddToWallet />
        </>
      </InputContainer>
      <Spacer />
      {!!CTA ? (
        <Button onClick={toLink} action elevated>
          {CTA.text}
        </Button>
      ) : (
        <Button onClick={toBridge} action elevated>
          Bridge more assets
        </Button>
      )}
    </div>
  );
}

export default BridgeComplete;
