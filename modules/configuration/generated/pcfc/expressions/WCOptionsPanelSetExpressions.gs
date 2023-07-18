package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/wc/policy/WCOptionsPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class WCOptionsPanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/WCOptionsPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends ListDetailPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=OptionName_Cell) at WCOptionsPanelSet.pcf: line 60, column 41
    function valueRoot_7 () : java.lang.Object {
      return wcOption
    }
    
    // 'value' attribute on TextCell (id=OptionName_Cell) at WCOptionsPanelSet.pcf: line 60, column 41
    function value_6 () : java.lang.String {
      return wcOption.Label
    }
    
    property get wcOption () : gw.lob.wc.options.WCOption {
      return getIteratedValue(2) as gw.lob.wc.options.WCOption
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/WCOptionsPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends WCOptionsPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on AddMenuItem (id=CurrentOption) at WCOptionsPanelSet.pcf: line 32, column 86
    function label_1 () : java.lang.Object {
      return wcOption.Label
    }
    
    // 'toCreateAndAdd' attribute on AddMenuItem (id=CurrentOption) at WCOptionsPanelSet.pcf: line 32, column 86
    function toCreateAndAdd_2 (CheckedValues :  Object[]) : java.lang.Object {
      wcOption.moveFromMenuToActiveList(); return wcOption
    }
    
    property get wcOption () : gw.lob.wc.options.WCOption {
      return getIteratedValue(1) as gw.lob.wc.options.WCOption
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/WCOptionsPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ListDetailPanelExpressionsImpl extends WCOptionsPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at WCOptionsPanelSet.pcf: line 70, column 45
    function def_onEnter_11 (def :  pcf.WCOptionCardPanelSet_AircraftSeat) : void {
      def.onEnter(period.WorkersCompLine, openForEdit)
    }
    
    // 'def' attribute on PanelRef at WCOptionsPanelSet.pcf: line 70, column 45
    function def_onEnter_13 (def :  pcf.WCOptionCardPanelSet_EmployeeLeasing) : void {
      def.onEnter(period.WorkersCompLine, openForEdit)
    }
    
    // 'def' attribute on PanelRef at WCOptionsPanelSet.pcf: line 70, column 45
    function def_onEnter_15 (def :  pcf.WCOptionCardPanelSet_Exclusions) : void {
      def.onEnter(period.WorkersCompLine, openForEdit)
    }
    
    // 'def' attribute on PanelRef at WCOptionsPanelSet.pcf: line 70, column 45
    function def_onEnter_17 (def :  pcf.WCOptionCardPanelSet_FederalLiability) : void {
      def.onEnter(period.WorkersCompLine, openForEdit)
    }
    
    // 'def' attribute on PanelRef at WCOptionsPanelSet.pcf: line 70, column 45
    function def_onEnter_19 (def :  pcf.WCOptionCardPanelSet_IndividualsIncludedExcluded) : void {
      def.onEnter(period.WorkersCompLine, openForEdit)
    }
    
    // 'def' attribute on PanelRef at WCOptionsPanelSet.pcf: line 70, column 45
    function def_onEnter_21 (def :  pcf.WCOptionCardPanelSet_Manuscript) : void {
      def.onEnter(period.WorkersCompLine, openForEdit)
    }
    
    // 'def' attribute on PanelRef at WCOptionsPanelSet.pcf: line 70, column 45
    function def_onEnter_23 (def :  pcf.WCOptionCardPanelSet_OwnerOfficer) : void {
      def.onEnter(period.WorkersCompLine, openForEdit)
    }
    
    // 'def' attribute on PanelRef at WCOptionsPanelSet.pcf: line 70, column 45
    function def_onEnter_25 (def :  pcf.WCOptionCardPanelSet_ParticipatingPlan) : void {
      def.onEnter(period.WorkersCompLine, openForEdit)
    }
    
    // 'def' attribute on PanelRef at WCOptionsPanelSet.pcf: line 70, column 45
    function def_onEnter_27 (def :  pcf.WCOptionCardPanelSet_RetrospectiveRatingPlan) : void {
      def.onEnter(period.WorkersCompLine, openForEdit)
    }
    
    // 'def' attribute on PanelRef at WCOptionsPanelSet.pcf: line 70, column 45
    function def_onEnter_29 (def :  pcf.WCOptionCardPanelSet_WaiversOfSubrogation) : void {
      def.onEnter(period.WorkersCompLine, openForEdit)
    }
    
    // 'def' attribute on PanelRef at WCOptionsPanelSet.pcf: line 70, column 45
    function def_refreshVariables_12 (def :  pcf.WCOptionCardPanelSet_AircraftSeat) : void {
      def.refreshVariables(period.WorkersCompLine, openForEdit)
    }
    
    // 'def' attribute on PanelRef at WCOptionsPanelSet.pcf: line 70, column 45
    function def_refreshVariables_14 (def :  pcf.WCOptionCardPanelSet_EmployeeLeasing) : void {
      def.refreshVariables(period.WorkersCompLine, openForEdit)
    }
    
    // 'def' attribute on PanelRef at WCOptionsPanelSet.pcf: line 70, column 45
    function def_refreshVariables_16 (def :  pcf.WCOptionCardPanelSet_Exclusions) : void {
      def.refreshVariables(period.WorkersCompLine, openForEdit)
    }
    
    // 'def' attribute on PanelRef at WCOptionsPanelSet.pcf: line 70, column 45
    function def_refreshVariables_18 (def :  pcf.WCOptionCardPanelSet_FederalLiability) : void {
      def.refreshVariables(period.WorkersCompLine, openForEdit)
    }
    
    // 'def' attribute on PanelRef at WCOptionsPanelSet.pcf: line 70, column 45
    function def_refreshVariables_20 (def :  pcf.WCOptionCardPanelSet_IndividualsIncludedExcluded) : void {
      def.refreshVariables(period.WorkersCompLine, openForEdit)
    }
    
    // 'def' attribute on PanelRef at WCOptionsPanelSet.pcf: line 70, column 45
    function def_refreshVariables_22 (def :  pcf.WCOptionCardPanelSet_Manuscript) : void {
      def.refreshVariables(period.WorkersCompLine, openForEdit)
    }
    
    // 'def' attribute on PanelRef at WCOptionsPanelSet.pcf: line 70, column 45
    function def_refreshVariables_24 (def :  pcf.WCOptionCardPanelSet_OwnerOfficer) : void {
      def.refreshVariables(period.WorkersCompLine, openForEdit)
    }
    
    // 'def' attribute on PanelRef at WCOptionsPanelSet.pcf: line 70, column 45
    function def_refreshVariables_26 (def :  pcf.WCOptionCardPanelSet_ParticipatingPlan) : void {
      def.refreshVariables(period.WorkersCompLine, openForEdit)
    }
    
    // 'def' attribute on PanelRef at WCOptionsPanelSet.pcf: line 70, column 45
    function def_refreshVariables_28 (def :  pcf.WCOptionCardPanelSet_RetrospectiveRatingPlan) : void {
      def.refreshVariables(period.WorkersCompLine, openForEdit)
    }
    
    // 'def' attribute on PanelRef at WCOptionsPanelSet.pcf: line 70, column 45
    function def_refreshVariables_30 (def :  pcf.WCOptionCardPanelSet_WaiversOfSubrogation) : void {
      def.refreshVariables(period.WorkersCompLine, openForEdit)
    }
    
    // 'mode' attribute on PanelRef at WCOptionsPanelSet.pcf: line 70, column 45
    function mode_31 () : java.lang.Object {
      return selectedWCOption.Mode
    }
    
    // 'value' attribute on TextCell (id=OptionName_Cell) at WCOptionsPanelSet.pcf: line 60, column 41
    function sortValue_5 (wcOption :  gw.lob.wc.options.WCOption) : java.lang.Object {
      return wcOption.Label
    }
    
    // 'title' attribute on Card (id=OptionCard) at WCOptionsPanelSet.pcf: line 67, column 44
    function title_32 () : java.lang.String {
      return selectedWCOption.Label
    }
    
    // 'toRemove' attribute on RowIterator at WCOptionsPanelSet.pcf: line 54, column 54
    function toRemove_9 (wcOption :  gw.lob.wc.options.WCOption) : void {
      wcOption.moveToMenuFromActiveList()
    }
    
    // 'value' attribute on RowIterator at WCOptionsPanelSet.pcf: line 54, column 54
    function value_10 () : gw.lob.wc.options.WCOption[] {
      return wcOptions.where(\ option -> not option.ShowOnMenu).toTypedArray()
    }
    
    property get selectedWCOption () : gw.lob.wc.options.WCOption {
      return getCurrentSelection(1) as gw.lob.wc.options.WCOption
    }
    
    property set selectedWCOption ($arg :  gw.lob.wc.options.WCOption) {
      setCurrentSelection(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/WCOptionsPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class WCOptionsPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at WCOptionsPanelSet.pcf: line 13, column 64
    function initialValue_0 () : java.util.List<gw.lob.wc.options.WCOption> {
      return period.WorkersCompLine.WCOptions
    }
    
    // 'value' attribute on AddMenuItemIterator at WCOptionsPanelSet.pcf: line 27, column 54
    function value_3 () : gw.lob.wc.options.WCOption[] {
      return wcOptions.where(\option -> option.ShowOnMenu).toTypedArray()
    }
    
    // 'visible' attribute on AddButton (id=OptionIteratorButton) at WCOptionsPanelSet.pcf: line 23, column 33
    function visible_4 () : java.lang.Boolean {
      return openForEdit
    }
    
    property get openForEdit () : boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    property get period () : PolicyPeriod {
      return getRequireValue("period", 0) as PolicyPeriod
    }
    
    property set period ($arg :  PolicyPeriod) {
      setRequireValue("period", 0, $arg)
    }
    
    property get wcOptions () : java.util.List<gw.lob.wc.options.WCOption> {
      return getVariableValue("wcOptions", 0) as java.util.List<gw.lob.wc.options.WCOption>
    }
    
    property set wcOptions ($arg :  java.util.List<gw.lob.wc.options.WCOption>) {
      setVariableValue("wcOptions", 0, $arg)
    }
    
    
  }
  
  
}