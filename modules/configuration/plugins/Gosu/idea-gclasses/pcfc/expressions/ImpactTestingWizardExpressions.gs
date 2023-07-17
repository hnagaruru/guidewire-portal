package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/rating/impact/ImpactTestingWizard.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ImpactTestingWizardExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/rating/impact/ImpactTestingWizard.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ImpactTestingWizardExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'canVisit' attribute on Wizard (id=ImpactTestingWizard) at ImpactTestingWizard.pcf: line 10, column 86
    static function canVisit_19 () : java.lang.Boolean {
      return perm.System.rateimpacttesting && !gw.api.system.PCDependenciesGateway.ServerMode.Production
    }
    
    // 'initialValue' attribute on Variable at ImpactTestingWizard.pcf: line 14, column 44
    function initialValue_0 () : entity.ImpactTestingTestCase {
      return ImpactTestingTestCase.getSingletonTestCase()
    }
    
    // 'onEnter' attribute on WizardStep (id=ChoosePoliciesStep) at ImpactTestingWizard.pcf: line 19, column 84
    function onEnter_1 () : void {
      testCase.refresh()
    }
    
    // Wizard (id=ImpactTestingWizard) at ImpactTestingWizard.pcf: line 10, column 86
    static function parent_20 () : pcf.api.Destination {
      return pcf.Rating.createDestination()
    }
    
    // 'screen' attribute on WizardStep (id=QuoteTestPeriodsStep) at ImpactTestingWizard.pcf: line 36, column 84
    function screen_onEnter_12 (def :  pcf.ImpactTestingQuoteTestPeriodsScreen) : void {
      def.onEnter(testCase)
    }
    
    // 'screen' attribute on WizardStep (id=ExportToExcelStep) at ImpactTestingWizard.pcf: line 42, column 77
    function screen_onEnter_16 (def :  pcf.ImpactTestingExportScreen) : void {
      def.onEnter(testCase)
    }
    
    // 'screen' attribute on WizardStep (id=ChoosePoliciesStep) at ImpactTestingWizard.pcf: line 19, column 84
    function screen_onEnter_2 (def :  pcf.ImpactTestingChoosePoliciesScreen) : void {
      def.onEnter(testCase)
    }
    
    // 'screen' attribute on WizardStep (id=CreateBaselineStep) at ImpactTestingWizard.pcf: line 24, column 84
    function screen_onEnter_5 (def :  pcf.ImpactTestingCreateBaselineScreen) : void {
      def.onEnter(testCase)
    }
    
    // 'screen' attribute on WizardStep (id=SelectRateBooksStep) at ImpactTestingWizard.pcf: line 30, column 84
    function screen_onEnter_8 (def :  pcf.ImpactTestingSelectRatebooksScreen) : void {
      def.onEnter(testCase)
    }
    
    // 'screen' attribute on WizardStep (id=QuoteTestPeriodsStep) at ImpactTestingWizard.pcf: line 36, column 84
    function screen_refreshVariables_13 (def :  pcf.ImpactTestingQuoteTestPeriodsScreen) : void {
      def.refreshVariables(testCase)
    }
    
    // 'screen' attribute on WizardStep (id=ExportToExcelStep) at ImpactTestingWizard.pcf: line 42, column 77
    function screen_refreshVariables_17 (def :  pcf.ImpactTestingExportScreen) : void {
      def.refreshVariables(testCase)
    }
    
    // 'screen' attribute on WizardStep (id=ChoosePoliciesStep) at ImpactTestingWizard.pcf: line 19, column 84
    function screen_refreshVariables_3 (def :  pcf.ImpactTestingChoosePoliciesScreen) : void {
      def.refreshVariables(testCase)
    }
    
    // 'screen' attribute on WizardStep (id=CreateBaselineStep) at ImpactTestingWizard.pcf: line 24, column 84
    function screen_refreshVariables_6 (def :  pcf.ImpactTestingCreateBaselineScreen) : void {
      def.refreshVariables(testCase)
    }
    
    // 'screen' attribute on WizardStep (id=SelectRateBooksStep) at ImpactTestingWizard.pcf: line 30, column 84
    function screen_refreshVariables_9 (def :  pcf.ImpactTestingSelectRatebooksScreen) : void {
      def.refreshVariables(testCase)
    }
    
    // 'tabBar' attribute on Wizard (id=ImpactTestingWizard) at ImpactTestingWizard.pcf: line 10, column 86
    function tabBar_onEnter_21 (def :  pcf.TabBar) : void {
      def.onEnter()
    }
    
    // 'tabBar' attribute on Wizard (id=ImpactTestingWizard) at ImpactTestingWizard.pcf: line 10, column 86
    function tabBar_refreshVariables_22 (def :  pcf.TabBar) : void {
      def.refreshVariables()
    }
    
    // '$$wizardStepAvailable' attribute on WizardStep (id=SelectRateBooksStep) at ImpactTestingWizard.pcf: line 30, column 84
    function wizardStepAvailable_10 () : java.lang.Boolean {
      return testCase.TestPrepUnprocessedCount == 0
    }
    
    // '$$wizardStepAvailable' attribute on WizardStep (id=QuoteTestPeriodsStep) at ImpactTestingWizard.pcf: line 36, column 84
    function wizardStepAvailable_14 () : java.lang.Boolean {
      return testCase.TestPrepUnprocessedCount == 0 and testCase.Ratebooks.Count > 0
    }
    
    // '$$wizardStepAvailable' attribute on WizardStep (id=ExportToExcelStep) at ImpactTestingWizard.pcf: line 42, column 77
    function wizardStepAvailable_18 () : java.lang.Boolean {
      return testCase.IsTestRunComplete
    }
    
    override property get CurrentLocation () : pcf.ImpactTestingWizard {
      return super.CurrentLocation as pcf.ImpactTestingWizard
    }
    
    property get testCase () : entity.ImpactTestingTestCase {
      return getVariableValue("testCase", 0) as entity.ImpactTestingTestCase
    }
    
    property set testCase ($arg :  entity.ImpactTestingTestCase) {
      setVariableValue("testCase", 0, $arg)
    }
    
    
  }
  
  
}