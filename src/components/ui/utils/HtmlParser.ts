export const getTextContentOnly = (html: string) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    const walker = document.createTreeWalker(
      doc.body,
      NodeFilter.SHOW_TEXT,
      null
    );
    const texts = [];
    let node;
    while ((node = walker.nextNode())) {
      texts.push(node.nodeValue);
    }
    return texts;
  };