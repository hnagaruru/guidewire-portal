package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/coverage/ScheduleInputSet.true.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ScheduleInputSet_trueExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/coverage/ScheduleInputSet.true.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends ListViewPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=CovTermHeader_Cell) at ScheduleInputSet.true.pcf: line 72, column 44
    function valueRoot_11 () : java.lang.Object {
      return covTermPattern
    }
    
    // 'value' attribute on TextCell (id=CovTermHeader_Cell) at ScheduleInputSet.true.pcf: line 72, column 44
    function value_10 () : java.lang.String {
      return covTermPattern.Name
    }
    
    property get covTermPattern () : gw.api.productmodel.CovTermPattern {
      return getIteratedValue(2) as gw.api.productmodel.CovTermPattern
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/coverage/ScheduleInputSet.true.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends ListViewPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'sortBy' attribute on IteratorSort at ScheduleInputSet.true.pcf: line 97, column 32
    function sortBy_16 (propertyInfo :  gw.api.productmodel.SchedulePropertyInfo<java.lang.Object>) : java.lang.Object {
      return propertyInfo.Priority
    }
    
    // 'value' attribute on CellIterator (id=PropertyValues) at ScheduleInputSet.true.pcf: line 94, column 94
    function value_35 () : gw.api.productmodel.SchedulePropertyInfo<java.lang.Object>[] {
      return propertyInfos
    }
    
    // 'value' attribute on CellIterator (id=CovTermValues) at ScheduleInputSet.true.pcf: line 108, column 84
    function value_55 () : java.util.List<gw.api.productmodel.CovTermPattern> {
      return covTermPatterns
    }
    
    property get scheduledItem () : entity.ScheduledItem {
      return getIteratedValue(2) as entity.ScheduledItem
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/coverage/ScheduleInputSet.true.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry4ExpressionsImpl extends IteratorEntry3ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on ModalCellRef at ScheduleInputSet.true.pcf: line 102, column 51
    function def_onEnter_17 (def :  pcf.ScheduledItemColumnInput_APDPolicyInvolvedParty) : void {
      def.onEnter(propertyInfo, scheduledItem)
    }
    
    // 'def' attribute on ModalCellRef at ScheduleInputSet.true.pcf: line 102, column 51
    function def_onEnter_19 (def :  pcf.ScheduledItemColumnInput_AutoNumber) : void {
      def.onEnter(propertyInfo, scheduledItem)
    }
    
    // 'def' attribute on ModalCellRef at ScheduleInputSet.true.pcf: line 102, column 51
    function def_onEnter_21 (def :  pcf.ScheduledItemColumnInput_Boolean) : void {
      def.onEnter(propertyInfo, scheduledItem)
    }
    
    // 'def' attribute on ModalCellRef at ScheduleInputSet.true.pcf: line 102, column 51
    function def_onEnter_23 (def :  pcf.ScheduledItemColumnInput_Date) : void {
      def.onEnter(propertyInfo, scheduledItem)
    }
    
    // 'def' attribute on ModalCellRef at ScheduleInputSet.true.pcf: line 102, column 51
    function def_onEnter_25 (def :  pcf.ScheduledItemColumnInput_ForeignKey) : void {
      def.onEnter(propertyInfo, scheduledItem)
    }
    
    // 'def' attribute on ModalCellRef at ScheduleInputSet.true.pcf: line 102, column 51
    function def_onEnter_27 (def :  pcf.ScheduledItemColumnInput_Integer) : void {
      def.onEnter(propertyInfo, scheduledItem)
    }
    
    // 'def' attribute on ModalCellRef at ScheduleInputSet.true.pcf: line 102, column 51
    function def_onEnter_29 (def :  pcf.ScheduledItemColumnInput_String) : void {
      def.onEnter(propertyInfo, scheduledItem)
    }
    
    // 'def' attribute on ModalCellRef at ScheduleInputSet.true.pcf: line 102, column 51
    function def_onEnter_31 (def :  pcf.ScheduledItemColumnInput_TypeKey) : void {
      def.onEnter(propertyInfo, scheduledItem)
    }
    
    // 'def' attribute on ModalCellRef at ScheduleInputSet.true.pcf: line 102, column 51
    function def_refreshVariables_18 (def :  pcf.ScheduledItemColumnInput_APDPolicyInvolvedParty) : void {
      def.refreshVariables(propertyInfo, scheduledItem)
    }
    
    // 'def' attribute on ModalCellRef at ScheduleInputSet.true.pcf: line 102, column 51
    function def_refreshVariables_20 (def :  pcf.ScheduledItemColumnInput_AutoNumber) : void {
      def.refreshVariables(propertyInfo, scheduledItem)
    }
    
    // 'def' attribute on ModalCellRef at ScheduleInputSet.true.pcf: line 102, column 51
    function def_refreshVariables_22 (def :  pcf.ScheduledItemColumnInput_Boolean) : void {
      def.refreshVariables(propertyInfo, scheduledItem)
    }
    
    // 'def' attribute on ModalCellRef at ScheduleInputSet.true.pcf: line 102, column 51
    function def_refreshVariables_24 (def :  pcf.ScheduledItemColumnInput_Date) : void {
      def.refreshVariables(propertyInfo, scheduledItem)
    }
    
    // 'def' attribute on ModalCellRef at ScheduleInputSet.true.pcf: line 102, column 51
    function def_refreshVariables_26 (def :  pcf.ScheduledItemColumnInput_ForeignKey) : void {
      def.refreshVariables(propertyInfo, scheduledItem)
    }
    
    // 'def' attribute on ModalCellRef at ScheduleInputSet.true.pcf: line 102, column 51
    function def_refreshVariables_28 (def :  pcf.ScheduledItemColumnInput_Integer) : void {
      def.refreshVariables(propertyInfo, scheduledItem)
    }
    
    // 'def' attribute on ModalCellRef at ScheduleInputSet.true.pcf: line 102, column 51
    function def_refreshVariables_30 (def :  pcf.ScheduledItemColumnInput_String) : void {
      def.refreshVariables(propertyInfo, scheduledItem)
    }
    
    // 'def' attribute on ModalCellRef at ScheduleInputSet.true.pcf: line 102, column 51
    function def_refreshVariables_32 (def :  pcf.ScheduledItemColumnInput_TypeKey) : void {
      def.refreshVariables(propertyInfo, scheduledItem)
    }
    
    // 'mode' attribute on ModalCellRef at ScheduleInputSet.true.pcf: line 102, column 51
    function mode_33 () : java.lang.Object {
      return propertyInfo.ValueType
    }
    
    // 'required' attribute on ModalCellRef at ScheduleInputSet.true.pcf: line 102, column 51
    function required_34 () : java.lang.Boolean {
      return propertyInfo.Required
    }
    
    property get propertyInfo () : gw.api.productmodel.SchedulePropertyInfo<java.lang.Object> {
      return getIteratedValue(3) as gw.api.productmodel.SchedulePropertyInfo<java.lang.Object>
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/coverage/ScheduleInputSet.true.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry5ExpressionsImpl extends IteratorEntry3ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on ModalCellRef at ScheduleInputSet.true.pcf: line 113, column 53
    function def_onEnter_37 (def :  pcf.ScheduledItemCovTermInput_Direct) : void {
      def.onEnter(scheduledItem.getCovTerm(covTermPattern))
    }
    
    // 'def' attribute on ModalCellRef at ScheduleInputSet.true.pcf: line 113, column 53
    function def_onEnter_39 (def :  pcf.ScheduledItemCovTermInput_Option) : void {
      def.onEnter(scheduledItem.getCovTerm(covTermPattern))
    }
    
    // 'def' attribute on ModalCellRef at ScheduleInputSet.true.pcf: line 113, column 53
    function def_onEnter_41 (def :  pcf.ScheduledItemCovTermInput_Package) : void {
      def.onEnter(scheduledItem.getCovTerm(covTermPattern))
    }
    
    // 'def' attribute on ModalCellRef at ScheduleInputSet.true.pcf: line 113, column 53
    function def_onEnter_43 (def :  pcf.ScheduledItemCovTermInput_Typekey) : void {
      def.onEnter(scheduledItem.getCovTerm(covTermPattern))
    }
    
    // 'def' attribute on ModalCellRef at ScheduleInputSet.true.pcf: line 113, column 53
    function def_onEnter_45 (def :  pcf.ScheduledItemCovTermInput_bit) : void {
      def.onEnter(scheduledItem.getCovTerm(covTermPattern))
    }
    
    // 'def' attribute on ModalCellRef at ScheduleInputSet.true.pcf: line 113, column 53
    function def_onEnter_47 (def :  pcf.ScheduledItemCovTermInput_datetime) : void {
      def.onEnter(scheduledItem.getCovTerm(covTermPattern))
    }
    
    // 'def' attribute on ModalCellRef at ScheduleInputSet.true.pcf: line 113, column 53
    function def_onEnter_49 (def :  pcf.ScheduledItemCovTermInput_shorttext) : void {
      def.onEnter(scheduledItem.getCovTerm(covTermPattern))
    }
    
    // 'def' attribute on ModalCellRef at ScheduleInputSet.true.pcf: line 113, column 53
    function def_refreshVariables_38 (def :  pcf.ScheduledItemCovTermInput_Direct) : void {
      def.refreshVariables(scheduledItem.getCovTerm(covTermPattern))
    }
    
    // 'def' attribute on ModalCellRef at ScheduleInputSet.true.pcf: line 113, column 53
    function def_refreshVariables_40 (def :  pcf.ScheduledItemCovTermInput_Option) : void {
      def.refreshVariables(scheduledItem.getCovTerm(covTermPattern))
    }
    
    // 'def' attribute on ModalCellRef at ScheduleInputSet.true.pcf: line 113, column 53
    function def_refreshVariables_42 (def :  pcf.ScheduledItemCovTermInput_Package) : void {
      def.refreshVariables(scheduledItem.getCovTerm(covTermPattern))
    }
    
    // 'def' attribute on ModalCellRef at ScheduleInputSet.true.pcf: line 113, column 53
    function def_refreshVariables_44 (def :  pcf.ScheduledItemCovTermInput_Typekey) : void {
      def.refreshVariables(scheduledItem.getCovTerm(covTermPattern))
    }
    
    // 'def' attribute on ModalCellRef at ScheduleInputSet.true.pcf: line 113, column 53
    function def_refreshVariables_46 (def :  pcf.ScheduledItemCovTermInput_bit) : void {
      def.refreshVariables(scheduledItem.getCovTerm(covTermPattern))
    }
    
    // 'def' attribute on ModalCellRef at ScheduleInputSet.true.pcf: line 113, column 53
    function def_refreshVariables_48 (def :  pcf.ScheduledItemCovTermInput_datetime) : void {
      def.refreshVariables(scheduledItem.getCovTerm(covTermPattern))
    }
    
    // 'def' attribute on ModalCellRef at ScheduleInputSet.true.pcf: line 113, column 53
    function def_refreshVariables_50 (def :  pcf.ScheduledItemCovTermInput_shorttext) : void {
      def.refreshVariables(scheduledItem.getCovTerm(covTermPattern))
    }
    
    // 'editable' attribute on ModalCellRef at ScheduleInputSet.true.pcf: line 113, column 53
    function editable_36 () : java.lang.Boolean {
      return scheduledItem.getCovTerm(covTermPattern) != null
    }
    
    // 'mode' attribute on ModalCellRef at ScheduleInputSet.true.pcf: line 113, column 53
    function mode_51 () : java.lang.Object {
      return covTermPattern.ValueTypeName
    }
    
    // 'required' attribute on ModalCellRef at ScheduleInputSet.true.pcf: line 113, column 53
    function required_53 () : java.lang.Boolean {
      return covTermPattern.Required
    }
    
    property get covTermPattern () : gw.api.productmodel.CovTermPattern {
      return getIteratedValue(3) as gw.api.productmodel.CovTermPattern
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/coverage/ScheduleInputSet.true.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ListViewPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=ColumnHeader_Cell) at ScheduleInputSet.true.pcf: line 59, column 41
    function valueRoot_6 () : java.lang.Object {
      return columnInfo
    }
    
    // 'value' attribute on TextCell (id=ColumnHeader_Cell) at ScheduleInputSet.true.pcf: line 59, column 41
    function value_5 () : java.lang.String {
      return columnInfo.Label
    }
    
    property get columnInfo () : gw.api.productmodel.SchedulePropertyInfo<java.lang.Object> {
      return getIteratedValue(2) as gw.api.productmodel.SchedulePropertyInfo<java.lang.Object>
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/coverage/ScheduleInputSet.true.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ListViewPanelExpressionsImpl extends ScheduleInputSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at ScheduleInputSet.true.pcf: line 39, column 62
    function initialValue_2 () : gw.api.productmodel.SchedulePropertyInfo[] {
      return schedule.PropertyInfos
    }
    
    // 'initialValue' attribute on Variable at ScheduleInputSet.true.pcf: line 44, column 66
    function initialValue_3 () : List<gw.api.productmodel.CovTermPattern> {
      return gw.pcf.coverage.ScheduleInputSetHelper.getCovTermPatterns(scheduledItemPatterns)
    }
    
    // 'sortBy' attribute on IteratorSort at ScheduleInputSet.true.pcf: line 88, column 28
    function sortBy_15 (scheduledItem :  entity.ScheduledItem) : java.lang.Object {
      return scheduledItem.getFieldValue("StringCol1")
    }
    
    // 'sortBy' attribute on IteratorSort at ScheduleInputSet.true.pcf: line 55, column 30
    function sortBy_4 (columnInfo :  gw.api.productmodel.SchedulePropertyInfo<java.lang.Object>) : java.lang.Object {
      return columnInfo.Priority
    }
    
    // 'sortBy' attribute on IteratorSort at ScheduleInputSet.true.pcf: line 68, column 30
    function sortBy_9 (covTermPattern :  gw.api.productmodel.CovTermPattern) : java.lang.Object {
      return covTermPattern.Priority
    }
    
    // 'toCreateAndAdd' attribute on RowIterator (id=ScheduledItemsIterator) at ScheduleInputSet.true.pcf: line 85, column 46
    function toCreateAndAdd_56 () : entity.ScheduledItem {
      return schedule.createAndAddScheduledItem()
    }
    
    // 'toRemove' attribute on RowIterator (id=ScheduledItemsIterator) at ScheduleInputSet.true.pcf: line 85, column 46
    function toRemove_57 (scheduledItem :  entity.ScheduledItem) : void {
      schedule.removeScheduledItem(scheduledItem)
    }
    
    // 'value' attribute on CellIterator (id=CovTermHeaders) at ScheduleInputSet.true.pcf: line 65, column 82
    function value_13 () : java.util.List<gw.api.productmodel.CovTermPattern> {
      return covTermPatterns
    }
    
    // 'value' attribute on RowIterator (id=ScheduledItemsIterator) at ScheduleInputSet.true.pcf: line 85, column 46
    function value_58 () : entity.ScheduledItem[] {
      return schedule.ScheduledItems
    }
    
    // 'value' attribute on CellIterator (id=ColumnHeaders) at ScheduleInputSet.true.pcf: line 52, column 92
    function value_8 () : gw.api.productmodel.SchedulePropertyInfo<java.lang.Object>[] {
      return propertyInfos
    }
    
    // 'visible' attribute on Row at ScheduleInputSet.true.pcf: line 47, column 58
    function visible_14 () : java.lang.Boolean {
      return schedule.ScheduledItems.Count > 0
    }
    
    property get covTermPatterns () : List<gw.api.productmodel.CovTermPattern> {
      return getVariableValue("covTermPatterns", 1) as List<gw.api.productmodel.CovTermPattern>
    }
    
    property set covTermPatterns ($arg :  List<gw.api.productmodel.CovTermPattern>) {
      setVariableValue("covTermPatterns", 1, $arg)
    }
    
    property get propertyInfos () : gw.api.productmodel.SchedulePropertyInfo[] {
      return getVariableValue("propertyInfos", 1) as gw.api.productmodel.SchedulePropertyInfo[]
    }
    
    property set propertyInfos ($arg :  gw.api.productmodel.SchedulePropertyInfo[]) {
      setVariableValue("propertyInfos", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/coverage/ScheduleInputSet.true.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ScheduleInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at ScheduleInputSet.true.pcf: line 18, column 38
    function initialValue_0 () : gw.api.domain.Schedule {
      return clause as gw.api.domain.Schedule
    }
    
    // 'initialValue' attribute on Variable at ScheduleInputSet.true.pcf: line 23, column 61
    function initialValue_1 () : List<gw.api.productmodel.ClausePattern> {
      return schedule.ScheduledItemMultiPatterns?.toList()
    }
    
    property get clause () : gw.api.domain.Clause {
      return getRequireValue("clause", 0) as gw.api.domain.Clause
    }
    
    property set clause ($arg :  gw.api.domain.Clause) {
      setRequireValue("clause", 0, $arg)
    }
    
    property get openForEdit () : boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    property get schedule () : gw.api.domain.Schedule {
      return getVariableValue("schedule", 0) as gw.api.domain.Schedule
    }
    
    property set schedule ($arg :  gw.api.domain.Schedule) {
      setVariableValue("schedule", 0, $arg)
    }
    
    property get scheduledItemPatterns () : List<gw.api.productmodel.ClausePattern> {
      return getVariableValue("scheduledItemPatterns", 0) as List<gw.api.productmodel.ClausePattern>
    }
    
    property set scheduledItemPatterns ($arg :  List<gw.api.productmodel.ClausePattern>) {
      setVariableValue("scheduledItemPatterns", 0, $arg)
    }
    
    
  }
  
  
}