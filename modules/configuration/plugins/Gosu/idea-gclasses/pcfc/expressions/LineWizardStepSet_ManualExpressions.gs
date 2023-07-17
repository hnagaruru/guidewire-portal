package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/apd/job/LineWizardStepSet.Manual.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LineWizardStepSet_ManualExpressions {
  @javax.annotation.Generated("config/web/pcf/line/apd/job/LineWizardStepSet.Manual.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LineWizardStepSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'beforeSave' attribute on JobWizardStep (id=Locations) at LineWizardStepSet.Manual.pcf: line 32, column 70
    function beforeSave_5 () : void {
      gw.policy.PolicyLocationValidation.validateLocationsStep(policyPeriod.PolicyLocations)
    }
    
    // 'label' attribute on WizardStepGroup (id=APDRiskLine7WizardStepGroup) at LineWizardStepSet.Manual.pcf: line 169, column 100
    function label_104 () : java.lang.String {
      return (policyPeriod.ManualLine.RiskCoverables.whereTypeIs(APDRiskPolicyLine)[7].Coverable as APDProductLine).Name
    }
    
    // 'label' attribute on WizardStepGroup (id=APDRiskLine8WizardStepGroup) at LineWizardStepSet.Manual.pcf: line 188, column 100
    function label_116 () : java.lang.String {
      return (policyPeriod.ManualLine.RiskCoverables.whereTypeIs(APDRiskPolicyLine)[8].Coverable as APDProductLine).Name
    }
    
    // 'label' attribute on WizardStepGroup (id=APDRiskLine9WizardStepGroup) at LineWizardStepSet.Manual.pcf: line 207, column 100
    function label_128 () : java.lang.String {
      return (policyPeriod.ManualLine.RiskCoverables.whereTypeIs(APDRiskPolicyLine)[9].Coverable as APDProductLine).Name
    }
    
    // 'label' attribute on WizardStepGroup (id=APDRiskLine0WizardStepGroup) at LineWizardStepSet.Manual.pcf: line 36, column 100
    function label_20 () : java.lang.String {
      return (policyPeriod.ManualLine.RiskCoverables.whereTypeIs(APDRiskPolicyLine)[0].Coverable as APDProductLine).Name
    }
    
    // 'label' attribute on WizardStepGroup (id=APDRiskLine1WizardStepGroup) at LineWizardStepSet.Manual.pcf: line 55, column 100
    function label_32 () : java.lang.String {
      return (policyPeriod.ManualLine.RiskCoverables.whereTypeIs(APDRiskPolicyLine)[1].Coverable as APDProductLine).Name
    }
    
    // 'label' attribute on WizardStepGroup (id=APDRiskLine2WizardStepGroup) at LineWizardStepSet.Manual.pcf: line 74, column 100
    function label_44 () : java.lang.String {
      return (policyPeriod.ManualLine.RiskCoverables.whereTypeIs(APDRiskPolicyLine)[2].Coverable as APDProductLine).Name
    }
    
    // 'label' attribute on WizardStepGroup (id=APDRiskLine3WizardStepGroup) at LineWizardStepSet.Manual.pcf: line 93, column 100
    function label_56 () : java.lang.String {
      return (policyPeriod.ManualLine.RiskCoverables.whereTypeIs(APDRiskPolicyLine)[3].Coverable as APDProductLine).Name
    }
    
    // 'label' attribute on WizardStepGroup (id=APDRiskLine4WizardStepGroup) at LineWizardStepSet.Manual.pcf: line 112, column 100
    function label_68 () : java.lang.String {
      return (policyPeriod.ManualLine.RiskCoverables.whereTypeIs(APDRiskPolicyLine)[4].Coverable as APDProductLine).Name
    }
    
    // 'label' attribute on WizardStepGroup (id=APDRiskLine5WizardStepGroup) at LineWizardStepSet.Manual.pcf: line 131, column 100
    function label_80 () : java.lang.String {
      return (policyPeriod.ManualLine.RiskCoverables.whereTypeIs(APDRiskPolicyLine)[5].Coverable as APDProductLine).Name
    }
    
    // 'label' attribute on WizardStepGroup (id=APDRiskLine6WizardStepGroup) at LineWizardStepSet.Manual.pcf: line 150, column 100
    function label_92 () : java.lang.String {
      return (policyPeriod.ManualLine.RiskCoverables.whereTypeIs(APDRiskPolicyLine)[6].Coverable as APDProductLine).Name
    }
    
    // 'onChange' attribute on JobWizardStep (id=APDRiskScreen8) at LineWizardStepSet.Manual.pcf: line 195, column 80
    function onChange_109 () : void {
      (policyPeriod.ManualLine.RiskCoverables.whereTypeIs(APDRiskPolicyLine)[8]).updateDateUpdatedOnRelatedProducts()
    }
    
    // 'onChange' attribute on JobWizardStep (id=APDRiskScreen9) at LineWizardStepSet.Manual.pcf: line 214, column 80
    function onChange_121 () : void {
      (policyPeriod.ManualLine.RiskCoverables.whereTypeIs(APDRiskPolicyLine)[9]).updateDateUpdatedOnRelatedProducts()
    }
    
    // 'onChange' attribute on JobWizardStep (id=APDRiskScreen0) at LineWizardStepSet.Manual.pcf: line 43, column 80
    function onChange_13 () : void {
      (policyPeriod.ManualLine.RiskCoverables.whereTypeIs(APDRiskPolicyLine)[0]).updateDateUpdatedOnRelatedProducts()
    }
    
    // 'onChange' attribute on JobWizardStep (id=APDRiskScreen1) at LineWizardStepSet.Manual.pcf: line 62, column 80
    function onChange_25 () : void {
      (policyPeriod.ManualLine.RiskCoverables.whereTypeIs(APDRiskPolicyLine)[1]).updateDateUpdatedOnRelatedProducts()
    }
    
    // 'onChange' attribute on JobWizardStep (id=APDRiskScreen2) at LineWizardStepSet.Manual.pcf: line 81, column 80
    function onChange_37 () : void {
      (policyPeriod.ManualLine.RiskCoverables.whereTypeIs(APDRiskPolicyLine)[2]).updateDateUpdatedOnRelatedProducts()
    }
    
    // 'onChange' attribute on JobWizardStep (id=APDRiskScreen3) at LineWizardStepSet.Manual.pcf: line 100, column 80
    function onChange_49 () : void {
      (policyPeriod.ManualLine.RiskCoverables.whereTypeIs(APDRiskPolicyLine)[3]).updateDateUpdatedOnRelatedProducts()
    }
    
    // 'onChange' attribute on JobWizardStep (id=APDRiskScreen4) at LineWizardStepSet.Manual.pcf: line 119, column 80
    function onChange_61 () : void {
      (policyPeriod.ManualLine.RiskCoverables.whereTypeIs(APDRiskPolicyLine)[4]).updateDateUpdatedOnRelatedProducts()
    }
    
    // 'onChange' attribute on JobWizardStep (id=APDRiskScreen5) at LineWizardStepSet.Manual.pcf: line 138, column 80
    function onChange_73 () : void {
      (policyPeriod.ManualLine.RiskCoverables.whereTypeIs(APDRiskPolicyLine)[5]).updateDateUpdatedOnRelatedProducts()
    }
    
    // 'onChange' attribute on JobWizardStep (id=APDRiskScreen6) at LineWizardStepSet.Manual.pcf: line 157, column 80
    function onChange_85 () : void {
      (policyPeriod.ManualLine.RiskCoverables.whereTypeIs(APDRiskPolicyLine)[6]).updateDateUpdatedOnRelatedProducts()
    }
    
    // 'onChange' attribute on JobWizardStep (id=APDRiskScreen7) at LineWizardStepSet.Manual.pcf: line 176, column 80
    function onChange_97 () : void {
      (policyPeriod.ManualLine.RiskCoverables.whereTypeIs(APDRiskPolicyLine)[7]).updateDateUpdatedOnRelatedProducts()
    }
    
    // 'onEnter' attribute on JobWizardStep (id=APDRiskScreen8) at LineWizardStepSet.Manual.pcf: line 195, column 80
    function onEnter_105 () : void {
      if (openForEdit) policyPeriod.ManualLine.RiskCoverables.whereTypeIs(APDRiskPolicyLine)[8].reSyncAgainstModel()
    }
    
    // 'onEnter' attribute on JobWizardStep (id=APDRiskScreen9) at LineWizardStepSet.Manual.pcf: line 214, column 80
    function onEnter_117 () : void {
      if (openForEdit) policyPeriod.ManualLine.RiskCoverables.whereTypeIs(APDRiskPolicyLine)[9].reSyncAgainstModel()
    }
    
    // 'onEnter' attribute on JobWizardStep (id=APDRiskScreen1) at LineWizardStepSet.Manual.pcf: line 62, column 80
    function onEnter_21 () : void {
      if (openForEdit) policyPeriod.ManualLine.RiskCoverables.whereTypeIs(APDRiskPolicyLine)[1].reSyncAgainstModel()
    }
    
    // 'onEnter' attribute on JobWizardStep (id=APDRiskScreen2) at LineWizardStepSet.Manual.pcf: line 81, column 80
    function onEnter_33 () : void {
      if (openForEdit) policyPeriod.ManualLine.RiskCoverables.whereTypeIs(APDRiskPolicyLine)[2].reSyncAgainstModel()
    }
    
    // 'onEnter' attribute on JobWizardStep (id=APDRiskScreen3) at LineWizardStepSet.Manual.pcf: line 100, column 80
    function onEnter_45 () : void {
      if (openForEdit) policyPeriod.ManualLine.RiskCoverables.whereTypeIs(APDRiskPolicyLine)[3].reSyncAgainstModel()
    }
    
    // 'onEnter' attribute on JobWizardStep (id=APDRiskScreen4) at LineWizardStepSet.Manual.pcf: line 119, column 80
    function onEnter_57 () : void {
      if (openForEdit) policyPeriod.ManualLine.RiskCoverables.whereTypeIs(APDRiskPolicyLine)[4].reSyncAgainstModel()
    }
    
    // 'onEnter' attribute on JobWizardStep (id=APDRiskScreen5) at LineWizardStepSet.Manual.pcf: line 138, column 80
    function onEnter_69 () : void {
      if (openForEdit) policyPeriod.ManualLine.RiskCoverables.whereTypeIs(APDRiskPolicyLine)[5].reSyncAgainstModel()
    }
    
    // 'onEnter' attribute on JobWizardStep (id=APDRiskScreen6) at LineWizardStepSet.Manual.pcf: line 157, column 80
    function onEnter_81 () : void {
      if (openForEdit) policyPeriod.ManualLine.RiskCoverables.whereTypeIs(APDRiskPolicyLine)[6].reSyncAgainstModel()
    }
    
    // 'onEnter' attribute on JobWizardStep (id=APDRiskScreen0) at LineWizardStepSet.Manual.pcf: line 43, column 80
    function onEnter_9 () : void {
      if (openForEdit) policyPeriod.ManualLine.RiskCoverables.whereTypeIs(APDRiskPolicyLine)[0].reSyncAgainstModel()
    }
    
    // 'onEnter' attribute on JobWizardStep (id=APDRiskScreen7) at LineWizardStepSet.Manual.pcf: line 176, column 80
    function onEnter_93 () : void {
      if (openForEdit) policyPeriod.ManualLine.RiskCoverables.whereTypeIs(APDRiskPolicyLine)[7].reSyncAgainstModel()
    }
    
    // 'save' attribute on JobWizardStep (id=APDLineSelection) at LineWizardStepSet.Manual.pcf: line 25, column 59
    function save_1 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'screen' attribute on JobWizardStep (id=APDPricingScreen7) at LineWizardStepSet.Manual.pcf: line 183, column 76
    function screen_onEnter_100 (def :  pcf.APDPricingScreen) : void {
      def.onEnter(policyPeriod.ManualLine.RiskCoverables.whereTypeIs(APDRiskPolicyLine)[7], openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=APDRiskScreen8) at LineWizardStepSet.Manual.pcf: line 195, column 80
    function screen_onEnter_107 (def :  pcf.APDRiskScreen) : void {
      def.onEnter(policyPeriod.ManualLine.RiskCoverables.whereTypeIs(APDRiskPolicyLine)[8], openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=APDRiskScreen0) at LineWizardStepSet.Manual.pcf: line 43, column 80
    function screen_onEnter_11 (def :  pcf.APDRiskScreen) : void {
      def.onEnter(policyPeriod.ManualLine.RiskCoverables.whereTypeIs(APDRiskPolicyLine)[0], openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=APDPricingScreen8) at LineWizardStepSet.Manual.pcf: line 202, column 76
    function screen_onEnter_112 (def :  pcf.APDPricingScreen) : void {
      def.onEnter(policyPeriod.ManualLine.RiskCoverables.whereTypeIs(APDRiskPolicyLine)[8], openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=APDRiskScreen9) at LineWizardStepSet.Manual.pcf: line 214, column 80
    function screen_onEnter_119 (def :  pcf.APDRiskScreen) : void {
      def.onEnter(policyPeriod.ManualLine.RiskCoverables.whereTypeIs(APDRiskPolicyLine)[9], openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=APDPricingScreen9) at LineWizardStepSet.Manual.pcf: line 221, column 76
    function screen_onEnter_124 (def :  pcf.APDPricingScreen) : void {
      def.onEnter(policyPeriod.ManualLine.RiskCoverables.whereTypeIs(APDRiskPolicyLine)[9], openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=APDPricingScreen0) at LineWizardStepSet.Manual.pcf: line 50, column 76
    function screen_onEnter_16 (def :  pcf.APDPricingScreen) : void {
      def.onEnter(policyPeriod.ManualLine.RiskCoverables.whereTypeIs(APDRiskPolicyLine)[0], openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=APDLineSelection) at LineWizardStepSet.Manual.pcf: line 25, column 59
    function screen_onEnter_2 (def :  pcf.APDLineSelectionScreen) : void {
      def.onEnter(policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=APDRiskScreen1) at LineWizardStepSet.Manual.pcf: line 62, column 80
    function screen_onEnter_23 (def :  pcf.APDRiskScreen) : void {
      def.onEnter(policyPeriod.ManualLine.RiskCoverables.whereTypeIs(APDRiskPolicyLine)[1], openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=APDPricingScreen1) at LineWizardStepSet.Manual.pcf: line 69, column 76
    function screen_onEnter_28 (def :  pcf.APDPricingScreen) : void {
      def.onEnter(policyPeriod.ManualLine.RiskCoverables.whereTypeIs(APDRiskPolicyLine)[1], openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=APDRiskScreen2) at LineWizardStepSet.Manual.pcf: line 81, column 80
    function screen_onEnter_35 (def :  pcf.APDRiskScreen) : void {
      def.onEnter(policyPeriod.ManualLine.RiskCoverables.whereTypeIs(APDRiskPolicyLine)[2], openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=APDPricingScreen2) at LineWizardStepSet.Manual.pcf: line 88, column 76
    function screen_onEnter_40 (def :  pcf.APDPricingScreen) : void {
      def.onEnter(policyPeriod.ManualLine.RiskCoverables.whereTypeIs(APDRiskPolicyLine)[2], openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=APDRiskScreen3) at LineWizardStepSet.Manual.pcf: line 100, column 80
    function screen_onEnter_47 (def :  pcf.APDRiskScreen) : void {
      def.onEnter(policyPeriod.ManualLine.RiskCoverables.whereTypeIs(APDRiskPolicyLine)[3], openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=APDPricingScreen3) at LineWizardStepSet.Manual.pcf: line 107, column 76
    function screen_onEnter_52 (def :  pcf.APDPricingScreen) : void {
      def.onEnter(policyPeriod.ManualLine.RiskCoverables.whereTypeIs(APDRiskPolicyLine)[3], openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=APDRiskScreen4) at LineWizardStepSet.Manual.pcf: line 119, column 80
    function screen_onEnter_59 (def :  pcf.APDRiskScreen) : void {
      def.onEnter(policyPeriod.ManualLine.RiskCoverables.whereTypeIs(APDRiskPolicyLine)[4], openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=APDPricingScreen4) at LineWizardStepSet.Manual.pcf: line 126, column 76
    function screen_onEnter_64 (def :  pcf.APDPricingScreen) : void {
      def.onEnter(policyPeriod.ManualLine.RiskCoverables.whereTypeIs(APDRiskPolicyLine)[4], openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=Locations) at LineWizardStepSet.Manual.pcf: line 32, column 70
    function screen_onEnter_7 (def :  pcf.LocationsScreen) : void {
      def.onEnter(policyPeriod, openForEdit, jobWizardHelper, policyPeriod.ManualLine.SupportsNonSpecificLocations)
    }
    
    // 'screen' attribute on JobWizardStep (id=APDRiskScreen5) at LineWizardStepSet.Manual.pcf: line 138, column 80
    function screen_onEnter_71 (def :  pcf.APDRiskScreen) : void {
      def.onEnter(policyPeriod.ManualLine.RiskCoverables.whereTypeIs(APDRiskPolicyLine)[5], openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=APDPricingScreen5) at LineWizardStepSet.Manual.pcf: line 145, column 76
    function screen_onEnter_76 (def :  pcf.APDPricingScreen) : void {
      def.onEnter(policyPeriod.ManualLine.RiskCoverables.whereTypeIs(APDRiskPolicyLine)[5], openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=APDRiskScreen6) at LineWizardStepSet.Manual.pcf: line 157, column 80
    function screen_onEnter_83 (def :  pcf.APDRiskScreen) : void {
      def.onEnter(policyPeriod.ManualLine.RiskCoverables.whereTypeIs(APDRiskPolicyLine)[6], openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=APDPricingScreen6) at LineWizardStepSet.Manual.pcf: line 164, column 76
    function screen_onEnter_88 (def :  pcf.APDPricingScreen) : void {
      def.onEnter(policyPeriod.ManualLine.RiskCoverables.whereTypeIs(APDRiskPolicyLine)[6], openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=APDRiskScreen7) at LineWizardStepSet.Manual.pcf: line 176, column 80
    function screen_onEnter_95 (def :  pcf.APDRiskScreen) : void {
      def.onEnter(policyPeriod.ManualLine.RiskCoverables.whereTypeIs(APDRiskPolicyLine)[7], openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=APDPricingScreen7) at LineWizardStepSet.Manual.pcf: line 183, column 76
    function screen_refreshVariables_101 (def :  pcf.APDPricingScreen) : void {
      def.refreshVariables(policyPeriod.ManualLine.RiskCoverables.whereTypeIs(APDRiskPolicyLine)[7], openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=APDRiskScreen8) at LineWizardStepSet.Manual.pcf: line 195, column 80
    function screen_refreshVariables_108 (def :  pcf.APDRiskScreen) : void {
      def.refreshVariables(policyPeriod.ManualLine.RiskCoverables.whereTypeIs(APDRiskPolicyLine)[8], openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=APDPricingScreen8) at LineWizardStepSet.Manual.pcf: line 202, column 76
    function screen_refreshVariables_113 (def :  pcf.APDPricingScreen) : void {
      def.refreshVariables(policyPeriod.ManualLine.RiskCoverables.whereTypeIs(APDRiskPolicyLine)[8], openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=APDRiskScreen0) at LineWizardStepSet.Manual.pcf: line 43, column 80
    function screen_refreshVariables_12 (def :  pcf.APDRiskScreen) : void {
      def.refreshVariables(policyPeriod.ManualLine.RiskCoverables.whereTypeIs(APDRiskPolicyLine)[0], openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=APDRiskScreen9) at LineWizardStepSet.Manual.pcf: line 214, column 80
    function screen_refreshVariables_120 (def :  pcf.APDRiskScreen) : void {
      def.refreshVariables(policyPeriod.ManualLine.RiskCoverables.whereTypeIs(APDRiskPolicyLine)[9], openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=APDPricingScreen9) at LineWizardStepSet.Manual.pcf: line 221, column 76
    function screen_refreshVariables_125 (def :  pcf.APDPricingScreen) : void {
      def.refreshVariables(policyPeriod.ManualLine.RiskCoverables.whereTypeIs(APDRiskPolicyLine)[9], openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=APDPricingScreen0) at LineWizardStepSet.Manual.pcf: line 50, column 76
    function screen_refreshVariables_17 (def :  pcf.APDPricingScreen) : void {
      def.refreshVariables(policyPeriod.ManualLine.RiskCoverables.whereTypeIs(APDRiskPolicyLine)[0], openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=APDRiskScreen1) at LineWizardStepSet.Manual.pcf: line 62, column 80
    function screen_refreshVariables_24 (def :  pcf.APDRiskScreen) : void {
      def.refreshVariables(policyPeriod.ManualLine.RiskCoverables.whereTypeIs(APDRiskPolicyLine)[1], openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=APDPricingScreen1) at LineWizardStepSet.Manual.pcf: line 69, column 76
    function screen_refreshVariables_29 (def :  pcf.APDPricingScreen) : void {
      def.refreshVariables(policyPeriod.ManualLine.RiskCoverables.whereTypeIs(APDRiskPolicyLine)[1], openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=APDLineSelection) at LineWizardStepSet.Manual.pcf: line 25, column 59
    function screen_refreshVariables_3 (def :  pcf.APDLineSelectionScreen) : void {
      def.refreshVariables(policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=APDRiskScreen2) at LineWizardStepSet.Manual.pcf: line 81, column 80
    function screen_refreshVariables_36 (def :  pcf.APDRiskScreen) : void {
      def.refreshVariables(policyPeriod.ManualLine.RiskCoverables.whereTypeIs(APDRiskPolicyLine)[2], openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=APDPricingScreen2) at LineWizardStepSet.Manual.pcf: line 88, column 76
    function screen_refreshVariables_41 (def :  pcf.APDPricingScreen) : void {
      def.refreshVariables(policyPeriod.ManualLine.RiskCoverables.whereTypeIs(APDRiskPolicyLine)[2], openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=APDRiskScreen3) at LineWizardStepSet.Manual.pcf: line 100, column 80
    function screen_refreshVariables_48 (def :  pcf.APDRiskScreen) : void {
      def.refreshVariables(policyPeriod.ManualLine.RiskCoverables.whereTypeIs(APDRiskPolicyLine)[3], openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=APDPricingScreen3) at LineWizardStepSet.Manual.pcf: line 107, column 76
    function screen_refreshVariables_53 (def :  pcf.APDPricingScreen) : void {
      def.refreshVariables(policyPeriod.ManualLine.RiskCoverables.whereTypeIs(APDRiskPolicyLine)[3], openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=APDRiskScreen4) at LineWizardStepSet.Manual.pcf: line 119, column 80
    function screen_refreshVariables_60 (def :  pcf.APDRiskScreen) : void {
      def.refreshVariables(policyPeriod.ManualLine.RiskCoverables.whereTypeIs(APDRiskPolicyLine)[4], openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=APDPricingScreen4) at LineWizardStepSet.Manual.pcf: line 126, column 76
    function screen_refreshVariables_65 (def :  pcf.APDPricingScreen) : void {
      def.refreshVariables(policyPeriod.ManualLine.RiskCoverables.whereTypeIs(APDRiskPolicyLine)[4], openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=APDRiskScreen5) at LineWizardStepSet.Manual.pcf: line 138, column 80
    function screen_refreshVariables_72 (def :  pcf.APDRiskScreen) : void {
      def.refreshVariables(policyPeriod.ManualLine.RiskCoverables.whereTypeIs(APDRiskPolicyLine)[5], openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=APDPricingScreen5) at LineWizardStepSet.Manual.pcf: line 145, column 76
    function screen_refreshVariables_77 (def :  pcf.APDPricingScreen) : void {
      def.refreshVariables(policyPeriod.ManualLine.RiskCoverables.whereTypeIs(APDRiskPolicyLine)[5], openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=Locations) at LineWizardStepSet.Manual.pcf: line 32, column 70
    function screen_refreshVariables_8 (def :  pcf.LocationsScreen) : void {
      def.refreshVariables(policyPeriod, openForEdit, jobWizardHelper, policyPeriod.ManualLine.SupportsNonSpecificLocations)
    }
    
    // 'screen' attribute on JobWizardStep (id=APDRiskScreen6) at LineWizardStepSet.Manual.pcf: line 157, column 80
    function screen_refreshVariables_84 (def :  pcf.APDRiskScreen) : void {
      def.refreshVariables(policyPeriod.ManualLine.RiskCoverables.whereTypeIs(APDRiskPolicyLine)[6], openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=APDPricingScreen6) at LineWizardStepSet.Manual.pcf: line 164, column 76
    function screen_refreshVariables_89 (def :  pcf.APDPricingScreen) : void {
      def.refreshVariables(policyPeriod.ManualLine.RiskCoverables.whereTypeIs(APDRiskPolicyLine)[6], openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=APDRiskScreen7) at LineWizardStepSet.Manual.pcf: line 176, column 80
    function screen_refreshVariables_96 (def :  pcf.APDRiskScreen) : void {
      def.refreshVariables(policyPeriod.ManualLine.RiskCoverables.whereTypeIs(APDRiskPolicyLine)[7], openForEdit, jobWizardHelper)
    }
    
    // 'visible' attribute on JobWizardStep (id=APDLineSelection) at LineWizardStepSet.Manual.pcf: line 25, column 59
    function visible_0 () : java.lang.Boolean {
      return policyPeriod.Policy.APDProduct.Multiline
    }
    
    // 'visible' attribute on WizardStepGroup (id=APDRiskLine7WizardStepGroup) at LineWizardStepSet.Manual.pcf: line 169, column 100
    function visible_103 () : java.lang.Boolean {
      return policyPeriod.ManualLine.RiskCoverables.whereTypeIs(APDRiskPolicyLine).Count > 7
    }
    
    // 'visible' attribute on WizardStepGroup (id=APDRiskLine8WizardStepGroup) at LineWizardStepSet.Manual.pcf: line 188, column 100
    function visible_115 () : java.lang.Boolean {
      return policyPeriod.ManualLine.RiskCoverables.whereTypeIs(APDRiskPolicyLine).Count > 8
    }
    
    // 'visible' attribute on WizardStepGroup (id=APDRiskLine9WizardStepGroup) at LineWizardStepSet.Manual.pcf: line 207, column 100
    function visible_127 () : java.lang.Boolean {
      return policyPeriod.ManualLine.RiskCoverables.whereTypeIs(APDRiskPolicyLine).Count > 9
    }
    
    // 'visible' attribute on WizardStepGroup (id=APDRiskLine0WizardStepGroup) at LineWizardStepSet.Manual.pcf: line 36, column 100
    function visible_19 () : java.lang.Boolean {
      return policyPeriod.ManualLine.RiskCoverables.whereTypeIs(APDRiskPolicyLine).Count > 0
    }
    
    // 'visible' attribute on WizardStepGroup (id=APDRiskLine1WizardStepGroup) at LineWizardStepSet.Manual.pcf: line 55, column 100
    function visible_31 () : java.lang.Boolean {
      return policyPeriod.ManualLine.RiskCoverables.whereTypeIs(APDRiskPolicyLine).Count > 1
    }
    
    // 'visible' attribute on JobWizardStep (id=Locations) at LineWizardStepSet.Manual.pcf: line 32, column 70
    function visible_4 () : java.lang.Boolean {
      return policyPeriod.Policy.APDProduct.UsesLocationListView
    }
    
    // 'visible' attribute on WizardStepGroup (id=APDRiskLine2WizardStepGroup) at LineWizardStepSet.Manual.pcf: line 74, column 100
    function visible_43 () : java.lang.Boolean {
      return policyPeriod.ManualLine.RiskCoverables.whereTypeIs(APDRiskPolicyLine).Count > 2
    }
    
    // 'visible' attribute on WizardStepGroup (id=APDRiskLine3WizardStepGroup) at LineWizardStepSet.Manual.pcf: line 93, column 100
    function visible_55 () : java.lang.Boolean {
      return policyPeriod.ManualLine.RiskCoverables.whereTypeIs(APDRiskPolicyLine).Count > 3
    }
    
    // 'visible' attribute on WizardStepGroup (id=APDRiskLine4WizardStepGroup) at LineWizardStepSet.Manual.pcf: line 112, column 100
    function visible_67 () : java.lang.Boolean {
      return policyPeriod.ManualLine.RiskCoverables.whereTypeIs(APDRiskPolicyLine).Count > 4
    }
    
    // 'visible' attribute on WizardStepGroup (id=APDRiskLine5WizardStepGroup) at LineWizardStepSet.Manual.pcf: line 131, column 100
    function visible_79 () : java.lang.Boolean {
      return policyPeriod.ManualLine.RiskCoverables.whereTypeIs(APDRiskPolicyLine).Count > 5
    }
    
    // 'visible' attribute on WizardStepGroup (id=APDRiskLine6WizardStepGroup) at LineWizardStepSet.Manual.pcf: line 150, column 100
    function visible_91 () : java.lang.Boolean {
      return policyPeriod.ManualLine.RiskCoverables.whereTypeIs(APDRiskPolicyLine).Count > 6
    }
    
    property get job () : Job {
      return getRequireValue("job", 0) as Job
    }
    
    property set job ($arg :  Job) {
      setRequireValue("job", 0, $arg)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get openForEdit () : boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}