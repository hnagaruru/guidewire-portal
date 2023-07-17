package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/prerenewal/SelectedNonRenewalExplanationsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class SelectedNonRenewalExplanationsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/prerenewal/SelectedNonRenewalExplanationsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends SelectedNonRenewalExplanationsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Explanation_Cell) at SelectedNonRenewalExplanationsLV.pcf: line 40, column 47
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      nonRenewalExplanation.Body = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=Explanation_Cell) at SelectedNonRenewalExplanationsLV.pcf: line 40, column 47
    function valueRoot_4 () : java.lang.Object {
      return nonRenewalExplanation
    }
    
    // 'value' attribute on TextCell (id=Explanation_Cell) at SelectedNonRenewalExplanationsLV.pcf: line 40, column 47
    function value_2 () : java.lang.String {
      return nonRenewalExplanation.Body
    }
    
    property get nonRenewalExplanation () : entity.NonRenewalExplanation {
      return getIteratedValue(1) as entity.NonRenewalExplanation
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/prerenewal/SelectedNonRenewalExplanationsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SelectedNonRenewalExplanationsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'editable' attribute on RowIterator at SelectedNonRenewalExplanationsLV.pcf: line 31, column 50
    function editable_1 () : java.lang.Boolean {
      return perm.System.editnonrenewexp
    }
    
    // 'initialValue' attribute on Variable at SelectedNonRenewalExplanationsLV.pcf: line 22, column 26
    function initialValue_0 () : PolicyTerm {
      return policyPeriod.PolicyTerm
    }
    
    // 'pickLocation' attribute on RowIterator at SelectedNonRenewalExplanationsLV.pcf: line 31, column 50
    function pickLocation_6 () : void {
      NonRenewalExplanationPatternsPagePopup.push(policy, policyPeriod, descriptions)
    }
    
    // 'toRemove' attribute on RowIterator at SelectedNonRenewalExplanationsLV.pcf: line 31, column 50
    function toRemove_7 (nonRenewalExplanation :  entity.NonRenewalExplanation) : void {
      policyTerm.removeFromNonRenewalExplanations(nonRenewalExplanation); descriptions[0] = descriptions[0] + policyTerm.createNonRenewalExplanationRemovedHistoryDescription();
    }
    
    // 'value' attribute on RowIterator at SelectedNonRenewalExplanationsLV.pcf: line 31, column 50
    function value_8 () : entity.NonRenewalExplanation[] {
      return policyTerm.NonRenewalExplanations
    }
    
    property get descriptions () : String[] {
      return getRequireValue("descriptions", 0) as String[]
    }
    
    property set descriptions ($arg :  String[]) {
      setRequireValue("descriptions", 0, $arg)
    }
    
    property get policy () : Policy {
      return getRequireValue("policy", 0) as Policy
    }
    
    property set policy ($arg :  Policy) {
      setRequireValue("policy", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    property get policyTerm () : PolicyTerm {
      return getVariableValue("policyTerm", 0) as PolicyTerm
    }
    
    property set policyTerm ($arg :  PolicyTerm) {
      setVariableValue("policyTerm", 0, $arg)
    }
    
    
  }
  
  
}