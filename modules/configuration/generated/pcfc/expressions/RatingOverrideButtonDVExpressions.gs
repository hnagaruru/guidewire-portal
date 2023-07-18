package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/common/ratingoverride/RatingOverrideButtonDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RatingOverrideButtonDVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/common/ratingoverride/RatingOverrideButtonDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RatingOverrideButtonDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=OverrideRating) at RatingOverrideButtonDV.pcf: line 37, column 44
    function action_3 () : void {
      RatingOverridePopup.push(policyPeriod, policyLine, jobWizardHelper, isEditable)
    }
    
    // 'action' attribute on Link (id=ViewWorksheet) at RatingOverrideButtonDV.pcf: line 43, column 43
    function action_7 () : void {
      RatingWorksheetPopup.push(policyLine)
    }
    
    // 'action' attribute on Link (id=OverrideRating) at RatingOverrideButtonDV.pcf: line 37, column 44
    function action_dest_4 () : pcf.api.Destination {
      return pcf.RatingOverridePopup.createDestination(policyPeriod, policyLine, jobWizardHelper, isEditable)
    }
    
    // 'action' attribute on Link (id=ViewWorksheet) at RatingOverrideButtonDV.pcf: line 43, column 43
    function action_dest_8 () : pcf.api.Destination {
      return pcf.RatingWorksheetPopup.createDestination(policyLine)
    }
    
    // 'initialValue' attribute on Variable at RatingOverrideButtonDV.pcf: line 23, column 23
    function initialValue_0 () : Boolean {
      return policyLine.SupportsRatingOverrides and (perm.System.viewratingoverrides || perm.System.editratingoverrides) and (isEditable or (policyPeriod.AllCosts.hasMatch(\ c -> c.HasOverride)))
    }
    
    // 'initialValue' attribute on Variable at RatingOverrideButtonDV.pcf: line 27, column 23
    function initialValue_1 () : Boolean {
      return gw.rating.worksheet.WorksheetUIHelper.canViewWorksheets(policyLine)
    }
    
    // 'label' attribute on Link (id=OverrideRating) at RatingOverrideButtonDV.pcf: line 37, column 44
    function label_5 () : java.lang.Object {
      return getOverrideRatingLabel()
    }
    
    // 'visible' attribute on Link (id=OverrideRating) at RatingOverrideButtonDV.pcf: line 37, column 44
    function visible_2 () : java.lang.Boolean {
      return overrideRatingVisible
    }
    
    // 'visible' attribute on Link (id=ViewWorksheet) at RatingOverrideButtonDV.pcf: line 43, column 43
    function visible_6 () : java.lang.Boolean {
      return viewWorksheetVisible
    }
    
    // 'visible' attribute on DetailViewPanel (id=RatingOverrideButtonDV) at RatingOverrideButtonDV.pcf: line 7, column 61
    function visible_9 () : java.lang.Boolean {
      return overrideRatingVisible or viewWorksheetVisible
    }
    
    property get isEditable () : boolean {
      return getRequireValue("isEditable", 0) as java.lang.Boolean
    }
    
    property set isEditable ($arg :  boolean) {
      setRequireValue("isEditable", 0, $arg)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get overrideRatingVisible () : Boolean {
      return getVariableValue("overrideRatingVisible", 0) as Boolean
    }
    
    property set overrideRatingVisible ($arg :  Boolean) {
      setVariableValue("overrideRatingVisible", 0, $arg)
    }
    
    property get policyLine () : PolicyLine {
      return getRequireValue("policyLine", 0) as PolicyLine
    }
    
    property set policyLine ($arg :  PolicyLine) {
      setRequireValue("policyLine", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    property get viewWorksheetVisible () : Boolean {
      return getVariableValue("viewWorksheetVisible", 0) as Boolean
    }
    
    property set viewWorksheetVisible ($arg :  Boolean) {
      setVariableValue("viewWorksheetVisible", 0, $arg)
    }
    
    function getOverrideRatingLabel() : String {
      return isEditable ? DisplayKey.get("Button.OverrideRating") : DisplayKey.get("Button.ViewOverrides")
    }
    
    
  }
  
  
}