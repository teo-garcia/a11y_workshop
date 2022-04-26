import * as React from 'react';

/**
 * useDocumentTitle - Sets a custom document title
 * @param {string} title - The title of the document
 * return {void}
 */
function useDocumentTitle(title = '') {
  React.useEffect(() => {
    document.title = `Accessibility Workshop - ${title}`;
  });
}

export default useDocumentTitle;
