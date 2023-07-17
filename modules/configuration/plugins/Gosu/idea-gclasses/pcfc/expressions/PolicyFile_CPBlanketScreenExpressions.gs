package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/cp/policyfile/PolicyFile_CPBlanketScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyFile_CPBlanketScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/line/cp/policyfile/PolicyFile_CPBlanketScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyFile_CPBlanketScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_CPBlanketScreen.pcf: line 14, column 59
    function def_onEnter_0 (def :  pcf.CPBlanketPanelSet) : void {
      def.onEnter(cpLine, openForEdit, null)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_CPBlanketScreen.pcf: line 14, column 59
    function def_refreshVariables_1 (def :  pcf.CPBlanketPanelSet) : void {
      def.refreshVariables(cpLine, openForEdit, null)
    }
    
    property get cpLine () : CommercialPropertyLine {
      return getRequireValue("cpLine", 0) as CommercialPropertyLine
    }
    
    property set cpLine ($arg :  CommercialPropertyLine) {
      setRequireValue("cpLine", 0, $arg)
    }
    
    property get openForEdit () : boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    
  }
  
  
}