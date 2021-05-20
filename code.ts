figma.showUI(__html__, {
  width: 300,
  height: 260
})

figma.ui.on('message', async (message) => {
  if (message.action === 'image') {    
    const image = figma.createImage(message.data)
    const rect = figma.createRectangle();

    rect.x = 0;
    rect.y = 0;

    rect.resize(300, 200)

    rect.fills = [
      {
        type: "IMAGE",
        imageHash: image.hash,
        scaleMode: "CROP",
      },
  ];
  }
})




