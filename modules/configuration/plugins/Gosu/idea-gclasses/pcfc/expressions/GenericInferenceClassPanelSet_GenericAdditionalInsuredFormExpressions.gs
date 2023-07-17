package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/forms/GenericInferenceClassPanelSet.GenericAdditionalInsuredForm.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class GenericInferenceClassPanelSet_GenericAdditionalInsuredFormExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/forms/GenericInferenceClassPanelSet.GenericAdditionalInsuredForm.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class GenericInferenceClassPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at GenericInferenceClassPanelSet.GenericAdditionalInsuredForm.pcf: line 12, column 70
    function def_onEnter_0 (def :  pcf.FormPatternAdditionalInsuredValuesPanelSet) : void {
      def.onEnter(formPattern)
    }
    
    // 'def' attribute on PanelRef at GenericInferenceClassPanelSet.GenericAdditionalInsuredForm.pcf: line 12, column 70
    function def_refreshVariables_1 (def :  pcf.FormPatternAdditionalInsuredValuesPanelSet) : void {
      def.refreshVariables(formPattern)
    }
    
    property get formPattern () : FormPattern {
      return getRequireValue("formPattern", 0) as FormPattern
    }
    
    property set formPattern ($arg :  FormPattern) {
      setRequireValue("formPattern", 0, $arg)
    }
    
    
  }
  
  
}