package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policyfile/PolicyFileFormsDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyFileFormsDVExpressions {
  @javax.annotation.Generated("config/web/pcf/policyfile/PolicyFileFormsDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends PolicyFileFormsDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=FormNumber_Cell) at PolicyFileFormsDV.pcf: line 34, column 42
    function valueRoot_7 () : java.lang.Object {
      return form
    }
    
    // 'value' attribute on TextCell (id=EndorsementNumber_Cell) at PolicyFileFormsDV.pcf: line 44, column 48
    function value_12 () : java.lang.Integer {
      return form.EndorsementNumber
    }
    
    // 'value' attribute on TextCell (id=ReplacingEndorsement_Cell) at PolicyFileFormsDV.pcf: line 48, column 65
    function value_15 () : java.lang.String {
      return form.ReplacingEndorsementNumbersString
    }
    
    // 'value' attribute on BooleanRadioCell (id=removed_Cell) at PolicyFileFormsDV.pcf: line 52, column 52
    function value_18 () : java.lang.Boolean {
      return !form.RemovedOrSuperseded
    }
    
    // 'value' attribute on DateCell (id=effectiveDate_Cell) at PolicyFileFormsDV.pcf: line 56, column 43
    function value_20 () : java.util.Date {
      return form.FormEffDate
    }
    
    // 'value' attribute on TextCell (id=FormNumber_Cell) at PolicyFileFormsDV.pcf: line 34, column 42
    function value_6 () : java.lang.String {
      return form.FormNumber
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at PolicyFileFormsDV.pcf: line 38, column 47
    function value_9 () : java.lang.String {
      return form.FormDescription
    }
    
    property get form () : entity.Form {
      return getIteratedValue(1) as entity.Form
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/policyfile/PolicyFileFormsDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyFileFormsDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=FormNumber_Cell) at PolicyFileFormsDV.pcf: line 34, column 42
    function sortValue_0 (form :  entity.Form) : java.lang.Object {
      return form.FormNumber
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at PolicyFileFormsDV.pcf: line 38, column 47
    function sortValue_1 (form :  entity.Form) : java.lang.Object {
      return form.FormDescription
    }
    
    // 'value' attribute on TextCell (id=EndorsementNumber_Cell) at PolicyFileFormsDV.pcf: line 44, column 48
    function sortValue_2 (form :  entity.Form) : java.lang.Object {
      return form.EndorsementNumber
    }
    
    // 'value' attribute on TextCell (id=ReplacingEndorsement_Cell) at PolicyFileFormsDV.pcf: line 48, column 65
    function sortValue_3 (form :  entity.Form) : java.lang.Object {
      return form.ReplacingEndorsementNumbersString
    }
    
    // 'value' attribute on BooleanRadioCell (id=removed_Cell) at PolicyFileFormsDV.pcf: line 52, column 52
    function sortValue_4 (form :  entity.Form) : java.lang.Object {
      return !form.RemovedOrSuperseded
    }
    
    // 'value' attribute on DateCell (id=effectiveDate_Cell) at PolicyFileFormsDV.pcf: line 56, column 43
    function sortValue_5 (form :  entity.Form) : java.lang.Object {
      return form.FormEffDate
    }
    
    // 'value' attribute on RowIterator at PolicyFileFormsDV.pcf: line 28, column 39
    function value_23 () : entity.Form[] {
      return policyPeriod.Forms
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}