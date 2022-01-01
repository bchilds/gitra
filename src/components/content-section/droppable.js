import React from 'react';
import PropTypes from 'proptypes';
import { Droppable } from 'react-beautiful-dnd';
import SectionPropTypes from '../../prop-types/section.proptypes';
import ContentSection from './index';

// const WIDTH_BREAK = 850;

const DroppableSection = ({ section, children }) => {
  // const direction =
  //   window.innerWidth >= WIDTH_BREAK ? 'vertical' : 'horizontal';

  return (
    <Droppable droppableId={section.id}>
      {(provided, snapshot) => (
        <ContentSection
          innerRef={provided.innerRef}
          droppableProps={provided.droppableProps}
        >
          <h1>{section.name}</h1>
          {children}
          {provided.placeholder}
        </ContentSection>
      )}
    </Droppable>
  );
};

DroppableSection.propTypes = {
  section: SectionPropTypes.isRequired,
};

export default DroppableSection;
