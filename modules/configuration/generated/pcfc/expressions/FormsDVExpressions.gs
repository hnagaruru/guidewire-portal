package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policy/form/FormsDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FormsDVExpressions {
  @javax.annotation.Generated("config/web/pcf/policy/form/FormsDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FormsDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=FormNumber_Cell) at FormsDV.pcf: line 31, column 42
    function sortValue_0 (form :  entity.Form) : java.lang.Object {
      return form.FormNumber
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at FormsDV.pcf: line 36, column 30
    function sortValue_1 (form :  entity.Form) : java.lang.Object {
      return form.FormDescription
    }
    
    // 'value' attribute on TextCell (id=EndorsementNumber_Cell) at FormsDV.pcf: line 42, column 48
    function sortValue_2 (form :  entity.Form) : java.lang.Object {
      return form.EndorsementNumber
    }
    
    // 'value' attribute on TextCell (id=ReplacingEndorsement_Cell) at FormsDV.pcf: line 46, column 65
    function sortValue_3 (form :  entity.Form) : java.lang.Object {
      return form.ReplacingEndorsementNumbersString
    }
    
    // 'value' attribute on RowIterator at FormsDV.pcf: line 25, column 39
    function value_16 () : entity.Form[] {
      return policyPeriod.NewlyAddedForms
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/policy/form/FormsDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends FormsDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=FormNumber_Cell) at FormsDV.pcf: line 31, column 42
    function valueRoot_5 () : java.lang.Object {
      return form
    }
    
    // 'value' attribute on TextCell (id=EndorsementNumber_Cell) at FormsDV.pcf: line 42, column 48
    function value_10 () : java.lang.Integer {
      return form.EndorsementNumber
    }
    
    // 'value' attribute on TextCell (id=ReplacingEndorsement_Cell) at FormsDV.pcf: line 46, column 65
    function value_13 () : java.lang.String {
      return form.ReplacingEndorsementNumbersString
    }
    
    // 'value' attribute on TextCell (id=FormNumber_Cell) at FormsDV.pcf: line 31, column 42
    function value_4 () : java.lang.String {
      return form.FormNumber
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at FormsDV.pcf: line 36, column 30
    function value_7 () : java.lang.String {
      return form.FormDescription
    }
    
    property get form () : entity.Form {
      return getIteratedValue(1) as entity.Form
    }
    
    
  }
  
  
}