package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/apd/policy/APDRiskPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDRiskPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDRiskPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDRiskPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (riskCoverable :  APDRiskCoverable, openForEdit :  boolean, jobWizardHelper :  gw.api.web.job.JobWizardHelper, coverDefinitionHelper :  gw.apd.model.CoverDefinitionHelper, edition :  APDProductLineEdition) : int {
      return 0
    }
    
    // 'afterEnter' attribute on Popup (id=APDRiskPopup) at APDRiskPopup.pcf: line 11, column 44
    function afterEnter_3 () : void {
      riskCoverable.syncClauseAvailabilities()
    }
    
    // 'canEdit' attribute on Popup (id=APDRiskPopup) at APDRiskPopup.pcf: line 11, column 44
    function canEdit_4 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'def' attribute on PanelRef at APDRiskPopup.pcf: line 34, column 118
    function def_onEnter_1 (def :  pcf.APDRiskCoverablePanelSet) : void {
      def.onEnter(riskCoverable, openForEdit, jobWizardHelper, coverDefinitionHelper, edition)
    }
    
    // 'def' attribute on PanelRef at APDRiskPopup.pcf: line 34, column 118
    function def_refreshVariables_2 (def :  pcf.APDRiskCoverablePanelSet) : void {
      def.refreshVariables(riskCoverable, openForEdit, jobWizardHelper, coverDefinitionHelper, edition)
    }
    
    // EditButtons at APDRiskPopup.pcf: line 31, column 23
    function label_0 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'title' attribute on Popup (id=APDRiskPopup) at APDRiskPopup.pcf: line 11, column 44
    static function title_6 (coverDefinitionHelper :  gw.apd.model.CoverDefinitionHelper, edition :  APDProductLineEdition, jobWizardHelper :  gw.api.web.job.JobWizardHelper, openForEdit :  boolean, riskCoverable :  APDRiskCoverable) : java.lang.Object {
      return riskCoverable.riskPopupTitle()
    }
    
    override property get CurrentLocation () : pcf.APDRiskPopup {
      return super.CurrentLocation as pcf.APDRiskPopup
    }
    
    property get coverDefinitionHelper () : gw.apd.model.CoverDefinitionHelper {
      return getVariableValue("coverDefinitionHelper", 0) as gw.apd.model.CoverDefinitionHelper
    }
    
    property set coverDefinitionHelper ($arg :  gw.apd.model.CoverDefinitionHelper) {
      setVariableValue("coverDefinitionHelper", 0, $arg)
    }
    
    property get edition () : APDProductLineEdition {
      return getVariableValue("edition", 0) as APDProductLineEdition
    }
    
    property set edition ($arg :  APDProductLineEdition) {
      setVariableValue("edition", 0, $arg)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getVariableValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setVariableValue("jobWizardHelper", 0, $arg)
    }
    
    property get openForEdit () : boolean {
      return getVariableValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setVariableValue("openForEdit", 0, $arg)
    }
    
    property get riskCoverable () : APDRiskCoverable {
      return getVariableValue("riskCoverable", 0) as APDRiskCoverable
    }
    
    property set riskCoverable ($arg :  APDRiskCoverable) {
      setVariableValue("riskCoverable", 0, $arg)
    }
    
    
  }
  
  
}