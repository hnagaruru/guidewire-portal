package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/cpp/policy/CPPRatingCumulPanelSet.scroll.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CPPRatingCumulPanelSet_scrollExpressions {
  @javax.annotation.Generated("config/web/pcf/line/cpp/policy/CPPRatingCumulPanelSet.scroll.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CPPRatingCumulPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'sortBy' attribute on IteratorSort at CPPRatingCumulPanelSet.scroll.pcf: line 24, column 24
    function sortBy_0 (line :  entity.PolicyLine) : java.lang.Object {
      return line.Pattern.Priority
    }
    
    // 'value' attribute on PanelIterator (id=eachline) at CPPRatingCumulPanelSet.scroll.pcf: line 21, column 39
    function value_24 () : entity.PolicyLine[] {
      return period.Lines
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
    
    property get period () : PolicyPeriod {
      return getRequireValue("period", 0) as PolicyPeriod
    }
    
    property set period ($arg :  PolicyPeriod) {
      setRequireValue("period", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/cpp/policy/CPPRatingCumulPanelSet.scroll.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntryExpressionsImpl extends CPPRatingCumulPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at CPPRatingCumulPanelSet.scroll.pcf: line 27, column 38
    function def_onEnter_11 (def :  pcf.RatingCumulDetailsPanelSet_HOPLine) : void {
      def.onEnter(period, jobWizardHelper, isEditable)
    }
    
    // 'def' attribute on PanelRef at CPPRatingCumulPanelSet.scroll.pcf: line 27, column 38
    function def_onEnter_13 (def :  pcf.RatingCumulDetailsPanelSet_IMLine) : void {
      def.onEnter(period, jobWizardHelper, isEditable)
    }
    
    // 'def' attribute on PanelRef at CPPRatingCumulPanelSet.scroll.pcf: line 27, column 38
    function def_onEnter_15 (def :  pcf.RatingCumulDetailsPanelSet_ManualLine) : void {
      def.onEnter(period, jobWizardHelper, isEditable)
    }
    
    // 'def' attribute on PanelRef at CPPRatingCumulPanelSet.scroll.pcf: line 27, column 38
    function def_onEnter_17 (def :  pcf.RatingCumulDetailsPanelSet_PersonalAutoLine) : void {
      def.onEnter(period, jobWizardHelper, isEditable)
    }
    
    // 'def' attribute on PanelRef at CPPRatingCumulPanelSet.scroll.pcf: line 27, column 38
    function def_onEnter_19 (def :  pcf.RatingCumulDetailsPanelSet_WorkersCompLine) : void {
      def.onEnter(period, jobWizardHelper, isEditable)
    }
    
    // 'def' attribute on PanelRef at CPPRatingCumulPanelSet.scroll.pcf: line 27, column 38
    function def_onEnter_21 (def :  pcf.RatingCumulDetailsPanelSet_default) : void {
      def.onEnter(period, jobWizardHelper, isEditable)
    }
    
    // 'def' attribute on PanelRef at CPPRatingCumulPanelSet.scroll.pcf: line 27, column 38
    function def_onEnter_3 (def :  pcf.RatingCumulDetailsPanelSet_BOPLine) : void {
      def.onEnter(period, jobWizardHelper, isEditable)
    }
    
    // 'def' attribute on PanelRef at CPPRatingCumulPanelSet.scroll.pcf: line 27, column 38
    function def_onEnter_5 (def :  pcf.RatingCumulDetailsPanelSet_BusinessAutoLine) : void {
      def.onEnter(period, jobWizardHelper, isEditable)
    }
    
    // 'def' attribute on PanelRef at CPPRatingCumulPanelSet.scroll.pcf: line 27, column 38
    function def_onEnter_7 (def :  pcf.RatingCumulDetailsPanelSet_CPLine) : void {
      def.onEnter(period, jobWizardHelper, isEditable)
    }
    
    // 'def' attribute on PanelRef at CPPRatingCumulPanelSet.scroll.pcf: line 27, column 38
    function def_onEnter_9 (def :  pcf.RatingCumulDetailsPanelSet_GLLine) : void {
      def.onEnter(period, jobWizardHelper, isEditable)
    }
    
    // 'def' attribute on PanelRef at CPPRatingCumulPanelSet.scroll.pcf: line 27, column 38
    function def_refreshVariables_10 (def :  pcf.RatingCumulDetailsPanelSet_GLLine) : void {
      def.refreshVariables(period, jobWizardHelper, isEditable)
    }
    
    // 'def' attribute on PanelRef at CPPRatingCumulPanelSet.scroll.pcf: line 27, column 38
    function def_refreshVariables_12 (def :  pcf.RatingCumulDetailsPanelSet_HOPLine) : void {
      def.refreshVariables(period, jobWizardHelper, isEditable)
    }
    
    // 'def' attribute on PanelRef at CPPRatingCumulPanelSet.scroll.pcf: line 27, column 38
    function def_refreshVariables_14 (def :  pcf.RatingCumulDetailsPanelSet_IMLine) : void {
      def.refreshVariables(period, jobWizardHelper, isEditable)
    }
    
    // 'def' attribute on PanelRef at CPPRatingCumulPanelSet.scroll.pcf: line 27, column 38
    function def_refreshVariables_16 (def :  pcf.RatingCumulDetailsPanelSet_ManualLine) : void {
      def.refreshVariables(period, jobWizardHelper, isEditable)
    }
    
    // 'def' attribute on PanelRef at CPPRatingCumulPanelSet.scroll.pcf: line 27, column 38
    function def_refreshVariables_18 (def :  pcf.RatingCumulDetailsPanelSet_PersonalAutoLine) : void {
      def.refreshVariables(period, jobWizardHelper, isEditable)
    }
    
    // 'def' attribute on PanelRef at CPPRatingCumulPanelSet.scroll.pcf: line 27, column 38
    function def_refreshVariables_20 (def :  pcf.RatingCumulDetailsPanelSet_WorkersCompLine) : void {
      def.refreshVariables(period, jobWizardHelper, isEditable)
    }
    
    // 'def' attribute on PanelRef at CPPRatingCumulPanelSet.scroll.pcf: line 27, column 38
    function def_refreshVariables_22 (def :  pcf.RatingCumulDetailsPanelSet_default) : void {
      def.refreshVariables(period, jobWizardHelper, isEditable)
    }
    
    // 'def' attribute on PanelRef at CPPRatingCumulPanelSet.scroll.pcf: line 27, column 38
    function def_refreshVariables_4 (def :  pcf.RatingCumulDetailsPanelSet_BOPLine) : void {
      def.refreshVariables(period, jobWizardHelper, isEditable)
    }
    
    // 'def' attribute on PanelRef at CPPRatingCumulPanelSet.scroll.pcf: line 27, column 38
    function def_refreshVariables_6 (def :  pcf.RatingCumulDetailsPanelSet_BusinessAutoLine) : void {
      def.refreshVariables(period, jobWizardHelper, isEditable)
    }
    
    // 'def' attribute on PanelRef at CPPRatingCumulPanelSet.scroll.pcf: line 27, column 38
    function def_refreshVariables_8 (def :  pcf.RatingCumulDetailsPanelSet_CPLine) : void {
      def.refreshVariables(period, jobWizardHelper, isEditable)
    }
    
    // 'icon' attribute on TitleBar at CPPRatingCumulPanelSet.scroll.pcf: line 31, column 37
    function icon_2 () : java.lang.String {
      return line.Pattern.Icon
    }
    
    // 'mode' attribute on PanelRef at CPPRatingCumulPanelSet.scroll.pcf: line 27, column 38
    function mode_23 () : java.lang.Object {
      return line.Pattern.PublicID
    }
    
    // 'title' attribute on TitleBar at CPPRatingCumulPanelSet.scroll.pcf: line 31, column 37
    function title_1 () : java.lang.String {
      return line.DisplayName
    }
    
    property get line () : entity.PolicyLine {
      return getIteratedValue(1) as entity.PolicyLine
    }
    
    
  }
  
  
}