package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/document/DocumentDetailsEditLVPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DocumentDetailsEditLVPanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/document/DocumentDetailsEditLVPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DocumentDetailsEditLVPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at DocumentDetailsEditLVPanelSet.pcf: line 21, column 93
    function def_onEnter_0 (def :  pcf.DocumentMetadataEditLV_LossHistory) : void {
      def.onEnter(DocumentApplicationContext,DocumentCreationInfos)
    }
    
    // 'def' attribute on PanelRef at DocumentDetailsEditLVPanelSet.pcf: line 21, column 93
    function def_onEnter_2 (def :  pcf.DocumentMetadataEditLV_default) : void {
      def.onEnter(DocumentApplicationContext,DocumentCreationInfos)
    }
    
    // 'def' attribute on PanelRef at DocumentDetailsEditLVPanelSet.pcf: line 21, column 93
    function def_refreshVariables_1 (def :  pcf.DocumentMetadataEditLV_LossHistory) : void {
      def.refreshVariables(DocumentApplicationContext,DocumentCreationInfos)
    }
    
    // 'def' attribute on PanelRef at DocumentDetailsEditLVPanelSet.pcf: line 21, column 93
    function def_refreshVariables_3 (def :  pcf.DocumentMetadataEditLV_default) : void {
      def.refreshVariables(DocumentApplicationContext,DocumentCreationInfos)
    }
    
    // 'mode' attribute on PanelRef at DocumentDetailsEditLVPanelSet.pcf: line 21, column 93
    function mode_4 () : java.lang.Object {
      return (DocumentApplicationContext as gw.api.web.document.DocumentPCContext).PCFMode
    }
    
    property get DocumentApplicationContext () : gw.document.DocumentApplicationContext {
      return getRequireValue("DocumentApplicationContext", 0) as gw.document.DocumentApplicationContext
    }
    
    property set DocumentApplicationContext ($arg :  gw.document.DocumentApplicationContext) {
      setRequireValue("DocumentApplicationContext", 0, $arg)
    }
    
    property get DocumentCreationInfos () : java.util.Collection<gw.document.DocumentCreationInfo> {
      return getRequireValue("DocumentCreationInfos", 0) as java.util.Collection<gw.document.DocumentCreationInfo>
    }
    
    property set DocumentCreationInfos ($arg :  java.util.Collection<gw.document.DocumentCreationInfo>) {
      setRequireValue("DocumentCreationInfos", 0, $arg)
    }
    
    
  }
  
  
}