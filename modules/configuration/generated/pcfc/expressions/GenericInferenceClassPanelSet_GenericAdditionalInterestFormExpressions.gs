package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/forms/GenericInferenceClassPanelSet.GenericAdditionalInterestForm.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class GenericInferenceClassPanelSet_GenericAdditionalInterestFormExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/forms/GenericInferenceClassPanelSet.GenericAdditionalInterestForm.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class GenericInferenceClassPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at GenericInferenceClassPanelSet.GenericAdditionalInterestForm.pcf: line 12, column 71
    function def_onEnter_0 (def :  pcf.FormPatternAdditionalInterestValuesPanelSet) : void {
      def.onEnter(formPattern)
    }
    
    // 'def' attribute on PanelRef at GenericInferenceClassPanelSet.GenericAdditionalInterestForm.pcf: line 12, column 71
    function def_refreshVariables_1 (def :  pcf.FormPatternAdditionalInterestValuesPanelSet) : void {
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