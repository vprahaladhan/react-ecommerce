import React from 'react';
import { Card } from 'react-bootstrap';

const MAX_POSSIBLE_HEIGHT = 500;

const styles = {
  container: {
    width: 300,
    margin: "0 auto"
  },
  card: {
    backgroundColor: "#B7E0F2",
    borderRadius: 55,
    padding: "3rem"
  }
};

const ExpandableText = ({ maxHeight, children }) => {
  const ref = React.useRef();
  const [shouldShowExpand, setShouldShowExpand] = React.useState(false);
  const [expanded, setExpanded] = React.useState(true);

  React.useEffect(() => {
    if (ref.current.scrollHeight > maxHeight) {
      setShouldShowExpand(true);
      setExpanded(false);
    }
  }, [maxHeight]);

  return (
    <Card.Text style={styles.cardText} ref={ref}>
      <div
        className="inner"
        style={{ maxHeight: expanded ? MAX_POSSIBLE_HEIGHT : maxHeight }}
      >
        {children}
      </div>
      {shouldShowExpand && (
        <button onClick={() => setExpanded(!expanded)}>{expanded ? 'Less...' : 'More...'}</button>
      )}
    </Card.Text>      
  );
};

export default ExpandableText;