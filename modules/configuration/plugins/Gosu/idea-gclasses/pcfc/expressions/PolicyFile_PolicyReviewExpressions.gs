package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/ba/policyfile/PolicyFile_PolicyReview.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyFile_PolicyReviewExpressions {
  @javax.annotation.Generated("config/web/pcf/line/ba/policyfile/PolicyFile_PolicyReview.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntryExpressionsImpl extends PolicyFile_PolicyReviewExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_PolicyReview.pcf: line 34, column 44
    function def_onEnter_10 (def :  pcf.PolicyLineSummaryPanelSet_HOPLine) : void {
      def.onEnter(line, null)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_PolicyReview.pcf: line 34, column 44
    function def_onEnter_12 (def :  pcf.PolicyLineSummaryPanelSet_IMLine) : void {
      def.onEnter(line, null)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_PolicyReview.pcf: line 34, column 44
    function def_onEnter_14 (def :  pcf.PolicyLineSummaryPanelSet_PersonalAutoLine) : void {
      def.onEnter(line, null)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_PolicyReview.pcf: line 34, column 44
    function def_onEnter_16 (def :  pcf.PolicyLineSummaryPanelSet_WorkersCompLine) : void {
      def.onEnter(line, null)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_PolicyReview.pcf: line 34, column 44
    function def_onEnter_18 (def :  pcf.PolicyLineSummaryPanelSet_default) : void {
      def.onEnter(line, null)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_PolicyReview.pcf: line 34, column 44
    function def_onEnter_2 (def :  pcf.PolicyLineSummaryPanelSet_BOPLine) : void {
      def.onEnter(line, null)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_PolicyReview.pcf: line 34, column 44
    function def_onEnter_4 (def :  pcf.PolicyLineSummaryPanelSet_BusinessAutoLine) : void {
      def.onEnter(line, null)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_PolicyReview.pcf: line 34, column 44
    function def_onEnter_6 (def :  pcf.PolicyLineSummaryPanelSet_CPLine) : void {
      def.onEnter(line, null)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_PolicyReview.pcf: line 34, column 44
    function def_onEnter_8 (def :  pcf.PolicyLineSummaryPanelSet_GLLine) : void {
      def.onEnter(line, null)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_PolicyReview.pcf: line 34, column 44
    function def_refreshVariables_11 (def :  pcf.PolicyLineSummaryPanelSet_HOPLine) : void {
      def.refreshVariables(line, null)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_PolicyReview.pcf: line 34, column 44
    function def_refreshVariables_13 (def :  pcf.PolicyLineSummaryPanelSet_IMLine) : void {
      def.refreshVariables(line, null)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_PolicyReview.pcf: line 34, column 44
    function def_refreshVariables_15 (def :  pcf.PolicyLineSummaryPanelSet_PersonalAutoLine) : void {
      def.refreshVariables(line, null)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_PolicyReview.pcf: line 34, column 44
    function def_refreshVariables_17 (def :  pcf.PolicyLineSummaryPanelSet_WorkersCompLine) : void {
      def.refreshVariables(line, null)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_PolicyReview.pcf: line 34, column 44
    function def_refreshVariables_19 (def :  pcf.PolicyLineSummaryPanelSet_default) : void {
      def.refreshVariables(line, null)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_PolicyReview.pcf: line 34, column 44
    function def_refreshVariables_3 (def :  pcf.PolicyLineSummaryPanelSet_BOPLine) : void {
      def.refreshVariables(line, null)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_PolicyReview.pcf: line 34, column 44
    function def_refreshVariables_5 (def :  pcf.PolicyLineSummaryPanelSet_BusinessAutoLine) : void {
      def.refreshVariables(line, null)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_PolicyReview.pcf: line 34, column 44
    function def_refreshVariables_7 (def :  pcf.PolicyLineSummaryPanelSet_CPLine) : void {
      def.refreshVariables(line, null)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_PolicyReview.pcf: line 34, column 44
    function def_refreshVariables_9 (def :  pcf.PolicyLineSummaryPanelSet_GLLine) : void {
      def.refreshVariables(line, null)
    }
    
    // 'mode' attribute on PanelRef at PolicyFile_PolicyReview.pcf: line 34, column 44
    function mode_20 () : java.lang.Object {
      return line.Pattern.PublicID
    }
    
    // 'title' attribute on TitleBar at PolicyFile_PolicyReview.pcf: line 37, column 60
    function title_1 () : java.lang.String {
      return line.DisplayName
    }
    
    // 'visible' attribute on TitleBar at PolicyFile_PolicyReview.pcf: line 37, column 60
    function visible_0 () : java.lang.Boolean {
      return policyPeriod.Lines.Count > 1
    }
    
    property get line () : entity.PolicyLine {
      return getIteratedValue(1) as entity.PolicyLine
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/ba/policyfile/PolicyFile_PolicyReview.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyFile_PolicyReviewExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (policyPeriod :  PolicyPeriod, asOfDate :  java.util.Date) : int {
      return 0
    }
    
    // 'canVisit' attribute on Page (id=PolicyFile_PolicyReview) at PolicyFile_PolicyReview.pcf: line 9, column 69
    static function canVisit_22 (asOfDate :  java.util.Date, policyPeriod :  PolicyPeriod) : java.lang.Boolean {
      return perm.PolicyPeriod.view(policyPeriod) and perm.System.pfiledetails
    }
    
    // 'parent' attribute on Page (id=PolicyFile_PolicyReview) at PolicyFile_PolicyReview.pcf: line 9, column 69
    static function parent_23 (asOfDate :  java.util.Date, policyPeriod :  PolicyPeriod) : pcf.api.Destination {
      return pcf.PolicyFile.createDestination(policyPeriod, asOfDate)
    }
    
    // 'value' attribute on PanelIterator at PolicyFile_PolicyReview.pcf: line 31, column 45
    function value_21 () : entity.PolicyLine[] {
      return policyPeriod.Lines
    }
    
    override property get CurrentLocation () : pcf.PolicyFile_PolicyReview {
      return super.CurrentLocation as pcf.PolicyFile_PolicyReview
    }
    
    property get asOfDate () : java.util.Date {
      return getVariableValue("asOfDate", 0) as java.util.Date
    }
    
    property set asOfDate ($arg :  java.util.Date) {
      setVariableValue("asOfDate", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getVariableValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setVariableValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}