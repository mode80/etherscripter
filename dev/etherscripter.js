/*global Blockly,BlocklyStorage */

// init block canvas
  Blockly.inject(document.getElementById('content-BLL'),
    {path: './',
     toolbox: document.getElementById('toolbox'),
     scrollbars: true,
     trashcan: false 
    });

// simulate menu click for typical tools
  someToolsOn({target:{className:'minimal'}}) 

// wire up local storage save/restore
  window.setTimeout(BlocklyStorage.restoreBlocks, 0);
  BlocklyStorage.backupOnUnload();

// wire splitter events
    $('#splitter').mousedown(function(){ 
      window.split_dragging = true 
    })
    $(document).mousemove(function(event){
      if (window.split_dragging) {
        $('#pane1').css('width',(event.pageX))
        Blockly.fireUiEvent(window,'resize')
      }
    })
    $('#splitter').mouseup(function(event){
      if (window.split_dragging) {
        window.split_dragging = false
        Blockly.fireUiEvent(window,'resize')
      }
    })

// init other stuff
  $(function(){ // onready

    Blockly.addChangeListener(onChange);

    singlePane()

  })

function onChange() {
  if (window.panes==2) showLLL(window.panes)
}

function clearWorkspace() {
  $('#content-XML').val('<xml></xml>')
  window.xml_dirty = true 
  showBLL(1)
}

function showBLL(pane) {
  // Show Blockly workspace 
  pane = pane || 1
  var content_BLL = $('#content-BLL')
  content_BLL.prependTo($('#pane'+pane))
  deactivateOthers(pane)
  content_BLL.css('z-index',9)
  $('#btn-BLL'+pane).addClass('active')
  $('#content-BLL').show()
  // Paint blocks 
  var xmlText = $('#content-XML').val()
  var xmlDom = null
  Blockly.fireUiEvent(window,'resize')
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
  Blockly.fireUiEvent(window,'resize')
} 

function showXML(pane) {
  pane = pane || 1
  var content_XML = $('#content-XML')
  content_XML.prependTo($('#pane'+pane))
  var xmlDom = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace)
  var xmlText = Blockly.Xml.domToPrettyText(xmlDom)
  deactivateOthers(pane)
  content_XML.css('z-index',9)
  $('#btn-XML'+pane).addClass('active')
  $('#content-BLL').hide()
  content_XML.val(xmlText)
}

function showLLL(pane) {
  pane = pane || 1
  var content_LLL = $('#content-LLL')
  content_LLL.prependTo($('#pane'+pane))
  // Generate LLL code and display it.
  //showBLL() // this must be visible to get the code out 
  var code = Blockly.LLL.workspaceToCode();
  deactivateOthers(pane)
  content_LLL.css('z-index',9)
  $('#btn-LLL'+pane).addClass('active')
  content_LLL.html(code)
}

function deactivateOthers(pane){
  pane = pane || 1
  $('#content-BLL').css('z-index', 3)
  $('#content-LLL').css('z-index', 2)
  $('#content-XML').css('z-index', 1)
  $('#pane'+pane+' .btn-show').removeClass('active')
}

function singlePane(){
  $('.pane2-item').hide()
  $('#pane1').css('width','100%')
  $('.1pane-only').show()
  Blockly.fireUiEvent(window,'resize')
  $('#single-menu').addClass('active')
  $('#split-menu').removeClass('active')
  window.panes = 1 
}

function splitPane(){
  $('.pane2-item').show()
  $('.1pane-only').hide()
  $('#pane1').css('width','60%') 
  Blockly.fireUiEvent(window,'resize')
  $('#single-menu').removeClass('active')
  $('#split-menu').addClass('active')
  window.panes = 2 
  onChange() // kick 2nd pane refresh as if on edit 
}

function activeToolboxString(){
  // returns the active <block> items from the #toolbox XML as a string
  window._toolbox_string = '' 
  var xmls = new XMLSerializer()
  $('#toolbox>block[active="true"]').each(function() { 
    window._toolbox_string += ( xmls.serializeToString( this ) + '\n') 
  })
  return '<xml>' + window._toolbox_string + '</xml>'
}

function toggleTool(event) {
  var menuitem = $(event.currentTarget) 
  menuitem.toggleClass('active')  
  $('#toolbox block[type="LLL_' +menuitem.attr('id')+ '"]')
    .attr('active',menuitem.hasClass('active'))
  Blockly.updateToolbox(activeToolboxString())
  event.stopPropagation() // stop menu vanish 
}

function allToolsOn(event){
  $('#toolboxmenu>li').addClass('active')  
  $('#toolbox block').attr('active','true')
  Blockly.updateToolbox(activeToolboxString())
  $('#all-on, #typical-on, #minimal-on').removeClass('active')
  $('#' + event.target.className + '-on').addClass('active')
}

function someToolsOn(event){
  //define defaults
    var minimal = [
      'comment',
      'val',
      'tx',
      'contract',
      'blockinfo',
      'math',
      'compare',
      'logic',
      'store',
      'load',
      'spend',
      'stop',
      'when',
      'whileloop',
      'init',
    ]
    var typical = minimal.concat([
      'currency',
      'input',
      'mstore',
      'mval',
      'if',
    ])
  // which set was picked?
    var toolset
    if (event.target.className == 'minimal')
      toolset = minimal
    else
      toolset = typical
  // first reset all to off
    $('#toolboxmenu>li').removeClass('active')  
    $('#toolbox block').attr('active','false')
  // turn on picked set 
    var i = toolset.length
    while (i--){
      var id = toolset[i]
      $('#'+id).addClass('active')  
      $('#toolbox block[type="LLL_'+id+'"]').attr('active','true')
    }
    $('#' + event.target.className + '-on').addClass('active')
  // render result
    Blockly.updateToolbox(activeToolboxString())
}