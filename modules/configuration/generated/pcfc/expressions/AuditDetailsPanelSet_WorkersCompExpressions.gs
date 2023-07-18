package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/audit/AuditDetailsPanelSet.WorkersComp.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AuditDetailsPanelSet_WorkersCompExpressions {
  @javax.annotation.Generated("config/web/pcf/job/audit/AuditDetailsPanelSet.WorkersComp.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AuditDetailsPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at AuditDetailsPanelSet.WorkersComp.pcf: line 14, column 31
    function initialValue_0 () : WorkersCompLine {
      return policyPeriod.WorkersCompLine
    }
    
    // 'initialValue' attribute on Variable at AuditDetailsPanelSet.WorkersComp.pcf: line 18, column 39
    function initialValue_1 () : entity.WCJurisdiction[] {
      return policyPeriod.WorkersCompLine.Jurisdictions
    }
    
    // 'sortBy' attribute on IteratorSort at AuditDetailsPanelSet.WorkersComp.pcf: line 25, column 24
    function sortBy_2 (jurisdiction :  entity.WCJurisdiction) : java.lang.Object {
      return jurisdiction
    }
    
    // 'value' attribute on PanelIterator at AuditDetailsPanelSet.WorkersComp.pcf: line 22, column 43
    function value_32 () : entity.WCJurisdiction[] {
      return jurisdictions
    }
    
    property get jurisdictions () : entity.WCJurisdiction[] {
      return getVariableValue("jurisdictions", 0) as entity.WCJurisdiction[]
    }
    
    property set jurisdictions ($arg :  entity.WCJurisdiction[]) {
      setVariableValue("jurisdictions", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    property get wcLine () : WorkersCompLine {
      return getVariableValue("wcLine", 0) as WorkersCompLine
    }
    
    property set wcLine ($arg :  WorkersCompLine) {
      setVariableValue("wcLine", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/job/audit/AuditDetailsPanelSet.WorkersComp.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends PanelIteratorEntry2ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=AuditedAmt_Cell) at AuditDetailsPanelSet.WorkersComp.pcf: line 79, column 58
    function defaultSetter_26 (__VALUE_TO_SET :  java.lang.Object) : void {
      wcCovEmp.AuditedAmount = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'label' attribute on TextCell (id=EstPayroll_Cell) at AuditDetailsPanelSet.WorkersComp.pcf: line 73, column 58
    function label_20 () : java.lang.Object {
      return policyPeriod.Audit.AuditInformation.IsRevision ? DisplayKey.get("Web.AuditWizard.PriorAuditedPayroll") : DisplayKey.get("Web.AuditWizard.EstPayroll")
    }
    
    // 'value' attribute on TextCell (id=Location_Cell) at AuditDetailsPanelSet.WorkersComp.pcf: line 59, column 58
    function valueRoot_12 () : java.lang.Object {
      return wcCovEmp.Location
    }
    
    // 'value' attribute on TextCell (id=ClassCode_Cell) at AuditDetailsPanelSet.WorkersComp.pcf: line 64, column 60
    function valueRoot_15 () : java.lang.Object {
      return wcCovEmp.ClassCode
    }
    
    // 'value' attribute on TextCell (id=EstPayroll_Cell) at AuditDetailsPanelSet.WorkersComp.pcf: line 73, column 58
    function valueRoot_22 () : java.lang.Object {
      return wcCovEmp
    }
    
    // 'value' attribute on TextCell (id=Location_Cell) at AuditDetailsPanelSet.WorkersComp.pcf: line 59, column 58
    function value_11 () : java.lang.Integer {
      return wcCovEmp.Location.LocationNum
    }
    
    // 'value' attribute on TextCell (id=ClassCode_Cell) at AuditDetailsPanelSet.WorkersComp.pcf: line 64, column 60
    function value_14 () : java.lang.String {
      return wcCovEmp.ClassCode.Code
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at AuditDetailsPanelSet.WorkersComp.pcf: line 68, column 65
    function value_17 () : java.lang.String {
      return wcCovEmp.ClassCode.ShortDesc
    }
    
    // 'value' attribute on TextCell (id=EstPayroll_Cell) at AuditDetailsPanelSet.WorkersComp.pcf: line 73, column 58
    function value_21 () : java.lang.Integer {
      return wcCovEmp.AuditRatingBasis
    }
    
    // 'value' attribute on TextCell (id=AuditedAmt_Cell) at AuditDetailsPanelSet.WorkersComp.pcf: line 79, column 58
    function value_25 () : java.lang.Integer {
      return wcCovEmp.AuditedAmount
    }
    
    property get wcCovEmp () : entity.WCCoveredEmployee {
      return getIteratedValue(3) as entity.WCCoveredEmployee
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/job/audit/AuditDetailsPanelSet.WorkersComp.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntry2ExpressionsImpl extends PanelIteratorEntryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on Label at AuditDetailsPanelSet.WorkersComp.pcf: line 41, column 252
    function label_4 () : java.lang.String {
      return DisplayKey.get("Web.AuditWizard.Details.PeriodLabel",  gw.api.util.StringUtil.formatDate(ratingPeriod.RatingStart, "short"), gw.api.util.StringUtil.formatDate(ratingPeriod.RatingEnd, "short") )
    }
    
    // 'label' attribute on TextCell (id=EstPayroll_Cell) at AuditDetailsPanelSet.WorkersComp.pcf: line 73, column 58
    function label_8 () : java.lang.Object {
      return policyPeriod.Audit.AuditInformation.IsRevision ? DisplayKey.get("Web.AuditWizard.PriorAuditedPayroll") : DisplayKey.get("Web.AuditWizard.EstPayroll")
    }
    
    // 'value' attribute on TextCell (id=AuditedAmt_Cell) at AuditDetailsPanelSet.WorkersComp.pcf: line 79, column 58
    function sortValue_10 (wcCovEmp :  entity.WCCoveredEmployee) : java.lang.Object {
      return wcCovEmp.AuditedAmount
    }
    
    // 'value' attribute on TextCell (id=Location_Cell) at AuditDetailsPanelSet.WorkersComp.pcf: line 59, column 58
    function sortValue_5 (wcCovEmp :  entity.WCCoveredEmployee) : java.lang.Object {
      return wcCovEmp.Location.LocationNum
    }
    
    // 'value' attribute on TextCell (id=ClassCode_Cell) at AuditDetailsPanelSet.WorkersComp.pcf: line 64, column 60
    function sortValue_6 (wcCovEmp :  entity.WCCoveredEmployee) : java.lang.Object {
      return wcCovEmp.ClassCode.Code
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at AuditDetailsPanelSet.WorkersComp.pcf: line 68, column 65
    function sortValue_7 (wcCovEmp :  entity.WCCoveredEmployee) : java.lang.Object {
      return wcCovEmp.ClassCode.ShortDesc
    }
    
    // 'value' attribute on TextCell (id=EstPayroll_Cell) at AuditDetailsPanelSet.WorkersComp.pcf: line 73, column 58
    function sortValue_9 (wcCovEmp :  entity.WCCoveredEmployee) : java.lang.Object {
      return wcCovEmp.AuditRatingBasis
    }
    
    // 'value' attribute on RowIterator at AuditDetailsPanelSet.WorkersComp.pcf: line 51, column 62
    function value_29 () : entity.WCCoveredEmployee[] {
      return wcLine.getCoveredEmployeeInRatingPeriod(ratingPeriod)
    }
    
    property get ratingPeriod () : gw.lob.wc.rating.WCRatingPeriod {
      return getIteratedValue(2) as gw.lob.wc.rating.WCRatingPeriod
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/job/audit/AuditDetailsPanelSet.WorkersComp.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntryExpressionsImpl extends AuditDetailsPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'editable' attribute on PanelRef at AuditDetailsPanelSet.WorkersComp.pcf: line 27, column 45
    function editable_31 () : java.lang.Boolean {
      return policyPeriod.OpenForEdit
    }
    
    // 'title' attribute on TitleBar (id=StateTitle) at AuditDetailsPanelSet.WorkersComp.pcf: line 30, column 45
    function title_3 () : java.lang.String {
      return jurisdiction.DisplayName
    }
    
    // 'value' attribute on PanelIterator at AuditDetailsPanelSet.WorkersComp.pcf: line 36, column 59
    function value_30 () : gw.lob.wc.rating.WCRatingPeriod[] {
      return jurisdiction.InForceRatingPeriods.toTypedArray()
    }
    
    property get jurisdiction () : entity.WCJurisdiction {
      return getIteratedValue(1) as entity.WCJurisdiction
    }
    
    
  }
  
  
}