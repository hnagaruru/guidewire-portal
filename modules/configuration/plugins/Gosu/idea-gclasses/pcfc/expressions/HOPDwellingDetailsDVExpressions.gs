package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/hop/policy/HOPDwellingDetailsDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class HOPDwellingDetailsDVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/hop/policy/HOPDwellingDetailsDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class HOPDwellingDetailsDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at HOPDwellingDetailsDV.pcf: line 38, column 83
    function def_onEnter_10 (def :  pcf.HOPDwellingAnimalsInputSet) : void {
      def.onEnter(openForEdit, jobWizardHelper, dwelling)
    }
    
    // 'def' attribute on InputSetRef at HOPDwellingDetailsDV.pcf: line 41, column 80
    function def_onEnter_12 (def :  pcf.HOPSwimmingPoolInputSet) : void {
      def.onEnter(openForEdit, jobWizardHelper, dwelling)
    }
    
    // 'def' attribute on InputSetRef at HOPDwellingDetailsDV.pcf: line 26, column 76
    function def_onEnter_2 (def :  pcf.HOPDwellingInputSet) : void {
      def.onEnter(openForEdit, jobWizardHelper, dwelling)
    }
    
    // 'def' attribute on InputSetRef at HOPDwellingDetailsDV.pcf: line 29, column 85
    function def_onEnter_4 (def :  pcf.HOPDwellingOccupancyInputSet) : void {
      def.onEnter(openForEdit, jobWizardHelper, dwelling)
    }
    
    // 'def' attribute on InputSetRef at HOPDwellingDetailsDV.pcf: line 33, column 86
    function def_onEnter_6 (def :  pcf.HOPDwellingProtectionInputSet) : void {
      def.onEnter(openForEdit, jobWizardHelper, dwelling)
    }
    
    // 'def' attribute on InputSetRef at HOPDwellingDetailsDV.pcf: line 36, column 83
    function def_onEnter_8 (def :  pcf.HOPDwellingHazardsInputSet) : void {
      def.onEnter(openForEdit, jobWizardHelper, dwelling)
    }
    
    // 'def' attribute on InputSetRef at HOPDwellingDetailsDV.pcf: line 38, column 83
    function def_refreshVariables_11 (def :  pcf.HOPDwellingAnimalsInputSet) : void {
      def.refreshVariables(openForEdit, jobWizardHelper, dwelling)
    }
    
    // 'def' attribute on InputSetRef at HOPDwellingDetailsDV.pcf: line 41, column 80
    function def_refreshVariables_13 (def :  pcf.HOPSwimmingPoolInputSet) : void {
      def.refreshVariables(openForEdit, jobWizardHelper, dwelling)
    }
    
    // 'def' attribute on InputSetRef at HOPDwellingDetailsDV.pcf: line 26, column 76
    function def_refreshVariables_3 (def :  pcf.HOPDwellingInputSet) : void {
      def.refreshVariables(openForEdit, jobWizardHelper, dwelling)
    }
    
    // 'def' attribute on InputSetRef at HOPDwellingDetailsDV.pcf: line 29, column 85
    function def_refreshVariables_5 (def :  pcf.HOPDwellingOccupancyInputSet) : void {
      def.refreshVariables(openForEdit, jobWizardHelper, dwelling)
    }
    
    // 'def' attribute on InputSetRef at HOPDwellingDetailsDV.pcf: line 33, column 86
    function def_refreshVariables_7 (def :  pcf.HOPDwellingProtectionInputSet) : void {
      def.refreshVariables(openForEdit, jobWizardHelper, dwelling)
    }
    
    // 'def' attribute on InputSetRef at HOPDwellingDetailsDV.pcf: line 36, column 83
    function def_refreshVariables_9 (def :  pcf.HOPDwellingHazardsInputSet) : void {
      def.refreshVariables(openForEdit, jobWizardHelper, dwelling)
    }
    
    // 'initialValue' attribute on Variable at HOPDwellingDetailsDV.pcf: line 19, column 30
    function initialValue_0 () : entity.HOPLine {
      return policyPeriod.HOPLine
    }
    
    // 'initialValue' attribute on Variable at HOPDwellingDetailsDV.pcf: line 23, column 34
    function initialValue_1 () : entity.HOPDwelling {
      return line.HOPDwellings.single()
    }
    
    property get dwelling () : entity.HOPDwelling {
      return getVariableValue("dwelling", 0) as entity.HOPDwelling
    }
    
    property set dwelling ($arg :  entity.HOPDwelling) {
      setVariableValue("dwelling", 0, $arg)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get line () : entity.HOPLine {
      return getVariableValue("line", 0) as entity.HOPLine
    }
    
    property set line ($arg :  entity.HOPLine) {
      setVariableValue("line", 0, $arg)
    }
    
    property get openForEdit () : java.lang.Boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  java.lang.Boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    property get policyPeriod () : entity.PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as entity.PolicyPeriod
    }
    
    property set policyPeriod ($arg :  entity.PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}