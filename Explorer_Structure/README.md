# Explorer Component using React

## Description
This project implements an Explorer component using React, which mimics the functionality of file explorers like those found in VS Code or Windows Explorer. The Explorer component consists of a tree structure with folders and files. Users can navigate through folders, view files, and perform basic file management actions.

## Requirements
1. **React Component**: Create a component called `Explorer`.
2. **Tree Structure**: Display a tree structure with folders and files.
3. **Expand/Collapse**: Users should be able to expand and collapse folders to view their contents.
4. **File Action**: Clicking on a file should open it or trigger an action (such as displaying its contents).
5. **Nested Folders**: Support nested folders (folders within folders).
6. **Styling**: Style the Explorer to make it visually appealing using CSS or any other styling method.
7. **File Management**: Provide basic functionality like creating, renaming, and deleting folders and files (optional, but encouraged).
8. **Smooth Interaction**: Ensure smooth navigation and interaction within the Explorer component.

## Example Behavior
- Initially, the Explorer displays a root folder with its contents.
- Users can expand or collapse folders by clicking on them.
- Clicking on a file opens it or performs an action associated with it.
- Users can perform basic file management actions like creating, renaming, or deleting folders and files (optional, but encouraged).
- The Explorer provides a visually appealing and intuitive user interface for navigating through folders and viewing files.

## Implementation

### Explorer Component

```jsx
import React, { useState } from 'react';
import './Explorer.css';

const Explorer = ({ data }) => {
  const renderTree = (node) => {
    return (
      <div key={node.name} className="node">
        {node.type === 'folder' ? (
          <Folder node={node} />
        ) : (
          <File node={node} />
        )}
      </div>
    );
  };

  const Folder = ({ node }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <div className="folder" onClick={() => setIsOpen(!isOpen)}>
          📁 {node.name}
        </div>
        {isOpen && (
          <div className="folder-contents">
            {node.contents.map((child) => renderTree(child))}
          </div>
        )}
      </div>
    );
  };

  const File = ({ node }) => {
    const handleClick = () => {
      // Implement file opening logic here
      console.log(`Opening file: ${node.name}`);
    };

    return (
      <div className="file" onClick={handleClick}>
        📄 {node.name}
      </div>
    );
  };

  return <div className="explorer">{renderTree(data)}</div>;
};

export default Explorer;
