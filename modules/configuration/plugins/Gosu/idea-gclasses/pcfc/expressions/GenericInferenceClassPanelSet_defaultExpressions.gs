package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/forms/GenericInferenceClassPanelSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class GenericInferenceClassPanelSet_defaultExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/forms/GenericInferenceClassPanelSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class GenericInferenceClassPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at GenericInferenceClassPanelSet.default.pcf: line 14, column 92
    function initialValue_0 () : List<gw.admin.PatternRef<gw.api.productmodel.PolicyLinePattern>> {
      return formPattern.PolicyLinePatternRange
    }
    
    property get formPattern () : FormPattern {
      return getRequireValue("formPattern", 0) as FormPattern
    }
    
    property set formPattern ($arg :  FormPattern) {
      setRequireValue("formPattern", 0, $arg)
    }
    
    property get policyLineRange () : List<gw.admin.PatternRef<gw.api.productmodel.PolicyLinePattern>> {
      return getVariableValue("policyLineRange", 0) as List<gw.admin.PatternRef<gw.api.productmodel.PolicyLinePattern>>
    }
    
    property set policyLineRange ($arg :  List<gw.admin.PatternRef<gw.api.productmodel.PolicyLinePattern>>) {
      setVariableValue("policyLineRange", 0, $arg)
    }
    
    
  }
  
  
}