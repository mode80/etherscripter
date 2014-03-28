    // DOM manipulation abbreviations 
      var doc = document ; doc.el = doc.getElementById
      var unclass = goog.dom.classes.remove
      var addclass = goog.dom.classes.add


    Blockly.inject(doc.el('content_BLL'),
        {path: './',
         toolbox:  doc.el('toolbox'),
         scrollbars: true,
         trashcan: false 
        });

    // wire up local storage save/restore
      window.setTimeout(BlocklyStorage.restoreBlocks, 0);
      BlocklyStorage.backupOnUnload();


    function showBLL() {
      // Show Blockly workspace 
      hideOthers()
      addclass(doc.el('btn_BLL'),'active')
      doc.el('content_BLL').style.display = 'block'
      var xmlText = doc.el('content_XML').value
      var xmlDom = null
      Blockly.fireUiEvent(window,"resize")
      if (window.xml_dirty) {
        try {
          xmlDom = Blockly.Xml.textToDom(xmlText);
        } catch (e) {
          var msg = 'ERROR PARSING XML\n\nSelect OK to abandon your changes.\nSelect Cancel to further edit the XML.'
          var q = window.confirm(msg.replace('%1', e));
          if (!q) return ; else return showXML() 
        }
        Blockly.mainWorkspace.clear()
        Blockly.Xml.domToWorkspace(Blockly.getMainWorkspace(), xmlDom)
        window.xml_dirty = false
      }
      Blockly.fireUiEvent(window,"resize")
    } 

    function showXML() {
      var xmlDom = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace)
      var xmlText = Blockly.Xml.domToPrettyText(xmlDom)
      var content_XML = doc.el('content_XML')
      hideOthers()
      addclass(doc.el('btn_XML'),'active')
      content_XML.style.display = 'block'
      content_XML.value = xmlText
    }

    function showHLL() {
      // Generate HLL code and display it.
      contentXMLToBLL() 
      hideOthers()
      doc.el('content_HLL').style.display = 'block'
      addclass(doc.el('btn_HLL'),'active')
    }

    function showLLL() {
      // Generate LLL code and display it.
      showBLL() // this must be visible to get the code out 
      var code = Blockly.LLL.workspaceToCode();
      var content_LLL = doc.el('content_LLL')
      hideOthers()
      addclass(doc.el('btn_LLL'),'active')
      content_LLL.style.display = 'block'
      content_LLL.innerHTML = code
    }

    function showEVM() {
      // Generate HLL code and display it.
      hideOthers()
      doc.el('content_EVM').style.display = 'block'
      addclass(doc.el('btn_EVM'),'active')
      contentXMLToBLL() 
    }


    function hideOthers() {
      doc.el('content_BLL').style.display = 'none'
      unclass(doc.el('btn_BLL'), 'active')
      doc.el('content_XML').style.display = 'none'
      unclass(doc.el('btn_XML'), 'active')
      doc.el('content_HLL').style.display = 'none'
      unclass(doc.el('btn_HLL'), 'active')
      doc.el('content_LLL').style.display = 'none'
      unclass(doc.el('btn_LLL'), 'active')
      doc.el('content_EVM').style.display = 'none'
      unclass(doc.el('btn_EVM'), 'active')
    }

