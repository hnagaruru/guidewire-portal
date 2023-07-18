package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/prerenewal/NonRenewalExplanationPatternsPagePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NonRenewalExplanationPatternsPagePopupExpressions {
  @javax.annotation.Generated("config/web/pcf/prerenewal/NonRenewalExplanationPatternsPagePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends NonRenewalExplanationPatternsPagePopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Explanation_Cell) at NonRenewalExplanationPatternsPagePopup.pcf: line 58, column 84
    function value_4 () : java.lang.String {
      return nonRenewalExplanationPattern.getEvaluatedBody(policyPeriod)
    }
    
    property get nonRenewalExplanationPattern () : entity.NonRenewalExplanationPattern {
      return getIteratedValue(1) as entity.NonRenewalExplanationPattern
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/prerenewal/NonRenewalExplanationPatternsPagePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NonRenewalExplanationPatternsPagePopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (policy :  Policy, policyPeriod :  PolicyPeriod, descriptions :  String[]) : int {
      return 0
    }
    
    // 'action' attribute on ToolbarButton (id=NonRenewalExplanationPatternsPagePopup_CancelButton) at NonRenewalExplanationPatternsPagePopup.pcf: line 42, column 88
    function action_3 () : void {
      CurrentLocation.cancel()
    }
    
    // 'initialValue' attribute on Variable at NonRenewalExplanationPatternsPagePopup.pcf: line 25, column 26
    function initialValue_0 () : PolicyTerm {
      return policyPeriod.PolicyTerm
    }
    
    // 'initialValue' attribute on Variable at NonRenewalExplanationPatternsPagePopup.pcf: line 30, column 53
    function initialValue_1 () : entity.NonRenewalExplanationPattern[] {
      return policyTerm.getAvailableNonRenewalExplanationPatterns()
    }
    
    // 'pickValue' attribute on CheckedValuesToolbarButton (id=NonRenewalExplanationPatternsPagePopup_AddButton) at NonRenewalExplanationPatternsPagePopup.pcf: line 38, column 65
    function pickValue_2 (CheckedValues :  entity.NonRenewalExplanationPattern[]) : entity.NonRenewalExplanation[] {
      return addNonRenewalExplanations(CheckedValues)
    }
    
    // 'value' attribute on RowIterator (id=NonRenewalExplanationPatternIterator) at NonRenewalExplanationPatternsPagePopup.pcf: line 52, column 61
    function value_6 () : entity.NonRenewalExplanationPattern[] {
      return nonRenewalExplanationPatterns
    }
    
    override property get CurrentLocation () : pcf.NonRenewalExplanationPatternsPagePopup {
      return super.CurrentLocation as pcf.NonRenewalExplanationPatternsPagePopup
    }
    
    property get descriptions () : String[] {
      return getVariableValue("descriptions", 0) as String[]
    }
    
    property set descriptions ($arg :  String[]) {
      setVariableValue("descriptions", 0, $arg)
    }
    
    property get nonRenewalExplanationPatterns () : entity.NonRenewalExplanationPattern[] {
      return getVariableValue("nonRenewalExplanationPatterns", 0) as entity.NonRenewalExplanationPattern[]
    }
    
    property set nonRenewalExplanationPatterns ($arg :  entity.NonRenewalExplanationPattern[]) {
      setVariableValue("nonRenewalExplanationPatterns", 0, $arg)
    }
    
    property get policy () : Policy {
      return getVariableValue("policy", 0) as Policy
    }
    
    property set policy ($arg :  Policy) {
      setVariableValue("policy", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getVariableValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setVariableValue("policyPeriod", 0, $arg)
    }
    
    property get policyTerm () : PolicyTerm {
      return getVariableValue("policyTerm", 0) as PolicyTerm
    }
    
    property set policyTerm ($arg :  PolicyTerm) {
      setVariableValue("policyTerm", 0, $arg)
    }
    
    
    function addNonRenewalExplanations(patterns : entity.NonRenewalExplanationPattern[]) : entity.NonRenewalExplanation[] {
      var nonRenewalExplanations = new java.util.ArrayList<NonRenewalExplanation>()
      patterns.each( \ pattern -> nonRenewalExplanations.add(policyTerm.addNonRenewalExplanation(pattern, policyPeriod)) )
      descriptions[0] = descriptions[0] + policyTerm.createNonRenewalExplanationAddedHistoryDescription()
      return nonRenewalExplanations.toTypedArray()
    }
          
        
    
    
  }
  
  
}