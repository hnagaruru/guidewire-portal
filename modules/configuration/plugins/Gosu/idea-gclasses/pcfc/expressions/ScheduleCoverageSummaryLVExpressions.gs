package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/common/schedule/ScheduleCoverageSummaryLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ScheduleCoverageSummaryLVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/common/schedule/ScheduleCoverageSummaryLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends IteratorEntryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'sortBy' attribute on IteratorSort at ScheduleCoverageSummaryLV.pcf: line 77, column 28
    function sortBy_17 (covTerm :  gw.api.domain.covterm.CovTerm) : java.lang.Object {
      return covTerm.Pattern.Priority
    }
    
    // 'sortBy' attribute on IteratorSort at ScheduleCoverageSummaryLV.pcf: line 80, column 28
    function sortBy_18 (covTerm :  gw.api.domain.covterm.CovTerm) : java.lang.Object {
      return covTerm.Pattern.PublicID
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at ScheduleCoverageSummaryLV.pcf: line 62, column 74
    function value_13 () : java.lang.String {
      return schedule.getScheduledItemDescription(scheduledItem)
    }
    
    // 'value' attribute on TextCell (id=Empty_Cell) at ScheduleCoverageSummaryLV.pcf: line 67, column 30
    function value_15 () : java.lang.String {
      return empty()
    }
    
    // 'value' attribute on RowIterator at ScheduleCoverageSummaryLV.pcf: line 74, column 55
    function value_25 () : gw.api.domain.covterm.CovTerm[] {
      return scheduledItem.Clause.CovTerms
    }
    
    property get scheduledItem () : entity.ScheduledItem {
      return getIteratedValue(2) as entity.ScheduledItem
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/common/schedule/ScheduleCoverageSummaryLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends IteratorEntry2ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at ScheduleCoverageSummaryLV.pcf: line 87, column 44
    function valueRoot_20 () : java.lang.Object {
      return covTerm
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at ScheduleCoverageSummaryLV.pcf: line 87, column 44
    function value_19 () : java.lang.String {
      return covTerm.DisplayName
    }
    
    // 'value' attribute on TextCell (id=term_Cell) at ScheduleCoverageSummaryLV.pcf: line 92, column 29
    function value_22 () : java.lang.String {
      return covTerm.DisplayValue
    }
    
    property get covTerm () : gw.api.domain.covterm.CovTerm {
      return getIteratedValue(3) as gw.api.domain.covterm.CovTerm
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/common/schedule/ScheduleCoverageSummaryLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ScheduleCoverageSummaryLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on TextCell (id=Empty_Cell) at ScheduleCoverageSummaryLV.pcf: line 44, column 28
    function label_8 () : java.lang.Object {
      return DisplayKey.get("Web.PolicyLine.Coverage.CovTermValue", "")
    }
    
    // 'sortBy' attribute on IteratorSort at ScheduleCoverageSummaryLV.pcf: line 54, column 26
    function sortBy_12 (scheduledItem :  entity.ScheduledItem) : java.lang.Object {
      return schedule.getScheduledItemDescription(scheduledItem)
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at ScheduleCoverageSummaryLV.pcf: line 38, column 42
    function valueRoot_6 () : java.lang.Object {
      return schedule
    }
    
    // 'value' attribute on RowIterator at ScheduleCoverageSummaryLV.pcf: line 51, column 44
    function value_26 () : entity.ScheduledItem[] {
      return schedule.ScheduledItems
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at ScheduleCoverageSummaryLV.pcf: line 38, column 42
    function value_5 () : java.lang.String {
      return schedule.ScheduleName
    }
    
    // 'value' attribute on TextCell (id=Empty_Cell) at ScheduleCoverageSummaryLV.pcf: line 44, column 28
    function value_9 () : java.lang.String {
      return empty()
    }
    
    property get schedule () : gw.api.domain.Schedule {
      return getIteratedValue(1) as gw.api.domain.Schedule
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/common/schedule/ScheduleCoverageSummaryLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ScheduleCoverageSummaryLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on TextCell (id=Empty_Cell) at ScheduleCoverageSummaryLV.pcf: line 44, column 28
    function label_4 () : java.lang.Object {
      return DisplayKey.get("Web.PolicyLine.Coverage.CovTermValue", "")
    }
    
    // 'sortBy' attribute on IteratorSort at ScheduleCoverageSummaryLV.pcf: line 20, column 24
    function sortBy_0 (schedule :  gw.api.domain.Schedule) : java.lang.Object {
      return (schedule as gw.api.domain.Clause).Pattern.CoverageCategory.Priority
    }
    
    // 'sortBy' attribute on IteratorSort at ScheduleCoverageSummaryLV.pcf: line 23, column 24
    function sortBy_1 (schedule :  gw.api.domain.Schedule) : java.lang.Object {
      return (schedule as gw.api.domain.Clause).Pattern.CoverageCategory.PublicID
    }
    
    // 'sortBy' attribute on IteratorSort at ScheduleCoverageSummaryLV.pcf: line 26, column 24
    function sortBy_2 (schedule :  gw.api.domain.Schedule) : java.lang.Object {
      return (schedule as gw.api.domain.Clause).Pattern.Priority
    }
    
    // 'sortBy' attribute on IteratorSort at ScheduleCoverageSummaryLV.pcf: line 29, column 24
    function sortBy_3 (schedule :  gw.api.domain.Schedule) : java.lang.Object {
      return (schedule as gw.api.domain.Clause).Pattern.PublicID
    }
    
    // 'value' attribute on RowIterator at ScheduleCoverageSummaryLV.pcf: line 17, column 66
    function value_27 () : java.util.List<gw.api.domain.Schedule> {
      return schedules
    }
    
    property get schedules () : List<gw.api.domain.Schedule> {
      return getRequireValue("schedules", 0) as List<gw.api.domain.Schedule>
    }
    
    property set schedules ($arg :  List<gw.api.domain.Schedule>) {
      setRequireValue("schedules", 0, $arg)
    }
    
    function empty(): String {
      return ""
    }
    
    
  }
  
  
}