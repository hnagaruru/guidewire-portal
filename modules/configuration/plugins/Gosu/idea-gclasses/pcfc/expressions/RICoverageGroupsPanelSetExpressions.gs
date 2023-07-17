package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/reinsurance/RICoverageGroupsPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RICoverageGroupsPanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/reinsurance/RICoverageGroupsPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends RICoverageGroupsPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyCell (id=Name_Cell) at RICoverageGroupsPanelSet.pcf: line 61, column 56
    function value_7 () : typekey.RICoverageGroupType {
      return coverageGroup
    }
    
    property get coverageGroup () : typekey.RICoverageGroupType {
      return getIteratedValue(1) as typekey.RICoverageGroupType
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/reinsurance/RICoverageGroupsPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends RICoverageGroupsPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on AddMenuItem (id=GroupType) at RICoverageGroupsPanelSet.pcf: line 32, column 67
    function label_1 () : java.lang.Object {
      return groupType
    }
    
    // 'toCreateAndAdd' attribute on AddMenuItem (id=GroupType) at RICoverageGroupsPanelSet.pcf: line 32, column 67
    function toCreateAndAdd_2 (CheckedValues :  Object[]) : java.lang.Object {
      return owner.addCoverageGroup(groupType)
    }
    
    property get groupType () : typekey.RICoverageGroupType {
      return getIteratedValue(1) as typekey.RICoverageGroupType
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/reinsurance/RICoverageGroupsPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RICoverageGroupsPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'available' attribute on ToolbarButton (id=Add) at RICoverageGroupsPanelSet.pcf: line 23, column 58
    function available_4 () : java.lang.Boolean {
      return remainingGroupTypes.HasElements
    }
    
    // 'initialValue' attribute on Variable at RICoverageGroupsPanelSet.pcf: line 14, column 45
    function initialValue_0 () : typekey.RICoverageGroupType[] {
      return RICoverageGroupType.getTypeKeys(false).disjunction(owner.CoverageGroups).toTypedArray()
    }
    
    // 'sortBy' attribute on IteratorSort at RICoverageGroupsPanelSet.pcf: line 54, column 28
    function sortBy_5 (coverageGroup :  typekey.RICoverageGroupType) : java.lang.Object {
      return coverageGroup.DisplayName
    }
    
    // 'value' attribute on TypeKeyCell (id=Name_Cell) at RICoverageGroupsPanelSet.pcf: line 61, column 56
    function sortValue_6 (coverageGroup :  typekey.RICoverageGroupType) : java.lang.Object {
      return coverageGroup
    }
    
    // 'toRemove' attribute on RowIterator at RICoverageGroupsPanelSet.pcf: line 51, column 73
    function toRemove_9 (coverageGroup :  typekey.RICoverageGroupType) : void {
      owner.removeCoverageGroup(coverageGroup)
    }
    
    // 'value' attribute on RowIterator at RICoverageGroupsPanelSet.pcf: line 51, column 73
    function value_10 () : java.util.List<typekey.RICoverageGroupType> {
      return owner.CoverageGroups
    }
    
    // 'value' attribute on AddMenuItemIterator at RICoverageGroupsPanelSet.pcf: line 27, column 55
    function value_3 () : typekey.RICoverageGroupType[] {
      return remainingGroupTypes
    }
    
    property get owner () : gw.api.domain.reinsurance.RICoverageGroupOwner {
      return getRequireValue("owner", 0) as gw.api.domain.reinsurance.RICoverageGroupOwner
    }
    
    property set owner ($arg :  gw.api.domain.reinsurance.RICoverageGroupOwner) {
      setRequireValue("owner", 0, $arg)
    }
    
    property get remainingGroupTypes () : typekey.RICoverageGroupType[] {
      return getVariableValue("remainingGroupTypes", 0) as typekey.RICoverageGroupType[]
    }
    
    property set remainingGroupTypes ($arg :  typekey.RICoverageGroupType[]) {
      setVariableValue("remainingGroupTypes", 0, $arg)
    }
    
    
  }
  
  
}