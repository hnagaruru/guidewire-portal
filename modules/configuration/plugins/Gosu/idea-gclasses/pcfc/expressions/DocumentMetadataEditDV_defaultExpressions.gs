package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/document/DocumentMetadataEditDV.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DocumentMetadataEditDV_defaultExpressions {
  @javax.annotation.Generated("config/web/pcf/document/DocumentMetadataEditDV.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DocumentMetadataEditDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at DocumentMetadataEditDV.default.pcf: line 20, column 89
    function def_onEnter_1 (def :  pcf.DocumentMetadataInputSet_LossHistory) : void {
      def.onEnter(documentDetailsApplicationHelper, fromTemplate)
    }
    
    // 'def' attribute on InputSetRef at DocumentMetadataEditDV.default.pcf: line 20, column 89
    function def_onEnter_3 (def :  pcf.DocumentMetadataInputSet_default) : void {
      def.onEnter(documentDetailsApplicationHelper, fromTemplate)
    }
    
    // 'def' attribute on InputSetRef at DocumentMetadataEditDV.default.pcf: line 20, column 89
    function def_refreshVariables_2 (def :  pcf.DocumentMetadataInputSet_LossHistory) : void {
      def.refreshVariables(documentDetailsApplicationHelper, fromTemplate)
    }
    
    // 'def' attribute on InputSetRef at DocumentMetadataEditDV.default.pcf: line 20, column 89
    function def_refreshVariables_4 (def :  pcf.DocumentMetadataInputSet_default) : void {
      def.refreshVariables(documentDetailsApplicationHelper, fromTemplate)
    }
    
    // 'initialValue' attribute on Variable at DocumentMetadataEditDV.default.pcf: line 17, column 47
    function initialValue_0 () : gw.document.DocumentDetailsInfo {
      return new gw.document.DocumentDetailsInfo(documentDetailsApplicationHelper.Documents[0])
    }
    
    property get documentDetailsApplicationHelper () : gw.document.DocumentDetailsApplicationHelper {
      return getRequireValue("documentDetailsApplicationHelper", 0) as gw.document.DocumentDetailsApplicationHelper
    }
    
    property set documentDetailsApplicationHelper ($arg :  gw.document.DocumentDetailsApplicationHelper) {
      setRequireValue("documentDetailsApplicationHelper", 0, $arg)
    }
    
    property get documentDetailsInfo () : gw.document.DocumentDetailsInfo {
      return getVariableValue("documentDetailsInfo", 0) as gw.document.DocumentDetailsInfo
    }
    
    property set documentDetailsInfo ($arg :  gw.document.DocumentDetailsInfo) {
      setVariableValue("documentDetailsInfo", 0, $arg)
    }
    
    property get fromTemplate () : boolean {
      return getRequireValue("fromTemplate", 0) as java.lang.Boolean
    }
    
    property set fromTemplate ($arg :  boolean) {
      setRequireValue("fromTemplate", 0, $arg)
    }
    
    
  }
  
  
}