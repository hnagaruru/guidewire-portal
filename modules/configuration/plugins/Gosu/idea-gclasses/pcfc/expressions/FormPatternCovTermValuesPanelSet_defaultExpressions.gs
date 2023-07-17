package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/forms/FormPatternCovTermValuesPanelSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FormPatternCovTermValuesPanelSet_defaultExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/forms/FormPatternCovTermValuesPanelSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FormPatternCovTermValuesPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    property get formPatternCovTerm () : FormPatternCovTerm {
      return getRequireValue("formPatternCovTerm", 0) as FormPatternCovTerm
    }
    
    property set formPatternCovTerm ($arg :  FormPatternCovTerm) {
      setRequireValue("formPatternCovTerm", 0, $arg)
    }
    
    
  }
  
  
}