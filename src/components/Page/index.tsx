import React from 'react';

import DefaultOverlayContent from '../DefaultOverlayContent';
import { ModelsWrapper, ModelSection } from '../Model';
import UniqueOverlay from '../UniqueOverlay';

import { Container, Spacer } from './styles';

const Page: React.FC = () => (
  <Container>
    <ModelsWrapper>
      <div>
        {['Wave One', 'Wave Two', 'Wave Three'].map(modelName => (
          <ModelSection
            key={modelName}
            modelName={modelName}
            className="colored"
            overlayNode={
              <DefaultOverlayContent
                label={modelName}
                description="Order Online for Delivery"
              />
            }
          />
        ))}
      </div>

      <Spacer />

      <UniqueOverlay />
    </ModelsWrapper>
  </Container>
);

export default Page;
