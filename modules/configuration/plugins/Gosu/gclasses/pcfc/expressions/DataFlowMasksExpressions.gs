package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
uses gw.api.path.Paths
uses gw.api.database.QuerySelectColumns
uses gw.api.database.Query
uses gw.lang.reflect.TypeSystem
uses java.util.Map
@javax.annotation.Generated("config/web/pcf/admin/flowmeta/DataFlowMasks.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DataFlowMasksExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/flowmeta/DataFlowMasks.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DataFlowMasksExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'initialValue' attribute on Variable at DataFlowMasks.pcf: line 11, column 95
    function initialValue_0 () : java.util.Map<Type<entity.KeyableBean>, gw.pl.persistence.core.Key> {
      return getDefaultMasksKeyMap()
    }
    
    // 'initialValue' attribute on Variable at DataFlowMasks.pcf: line 15, column 75
    function initialValue_1 () : gw.api.web.security.DataFlowMasksFilters.DataFlowMaskFilter {
      return gw.api.web.security.DataFlowMasksFilters.ALL_FILTER
    }
    
    // Page (id=DataFlowMasks) at DataFlowMasks.pcf: line 7, column 57
    static function parent_29 () : pcf.api.Destination {
      return pcf.Utilities.createDestination()
    }
    
    override property get CurrentLocation () : pcf.DataFlowMasks {
      return super.CurrentLocation as pcf.DataFlowMasks
    }
    
    property get entityTypeToDefaultMaskKeyMap () : java.util.Map<Type<entity.KeyableBean>, gw.pl.persistence.core.Key> {
      return getVariableValue("entityTypeToDefaultMaskKeyMap", 0) as java.util.Map<Type<entity.KeyableBean>, gw.pl.persistence.core.Key>
    }
    
    property set entityTypeToDefaultMaskKeyMap ($arg :  java.util.Map<Type<entity.KeyableBean>, gw.pl.persistence.core.Key>) {
      setVariableValue("entityTypeToDefaultMaskKeyMap", 0, $arg)
    }
    
    property get selectedTypeFilter () : gw.api.web.security.DataFlowMasksFilters.DataFlowMaskFilter {
      return getVariableValue("selectedTypeFilter", 0) as gw.api.web.security.DataFlowMasksFilters.DataFlowMaskFilter
    }
    
    property set selectedTypeFilter ($arg :  gw.api.web.security.DataFlowMasksFilters.DataFlowMaskFilter) {
      setVariableValue("selectedTypeFilter", 0, $arg)
    }
    
    
          /**
           * Return a map of entity Type's to default EntityFlowMaskData Key's.
           */
          function getDefaultMasksKeyMap(): Map<Type<KeyableBean>, gw.pl.persistence.core.Key> {
            final var ENTITY_TYPE_NAME = "EntityTypeName"
            final var DEFAULT_MASK = "DefaultMask"
    
            var query = Query.make(EntityFlowMaskDefault)
    
            return query
              .select({
                QuerySelectColumns.pathWithAlias(ENTITY_TYPE_NAME, Paths.make(EntityFlowMaskDefault#EntityTypeName)),
                QuerySelectColumns.pathWithAlias(DEFAULT_MASK, Paths.make(EntityFlowMaskDefault#DefaultMask))
              })
              .transformQueryRow(\ def -> { return new Object[] {def.getColumn(ENTITY_TYPE_NAME), def.getColumn(DEFAULT_MASK)} })
              .mapToKeyAndValue(\pair -> TypeSystem.getByFullName(pair[0] as String), \pair -> pair[1] as gw.pl.persistence.core.Key)
          }
    
          /**
           * Set the specified mask as the default for its entity type.
           *
           * This looks up the current default mask for the entity type, if any, and
           * then uses EntityFlowMaskData to set the specified mask as the default
           * and deassign the current mask as the default.
           */
          function setDefaultMask(mask: EntityFlowMaskData) {
            var currentDefaultMask: EntityFlowMaskData = null
            var entityTypeDefaultKey = entityTypeToDefaultMaskKeyMap[mask.EntityType]
            if (entityTypeDefaultKey != null) {
              // get current default assignment...
              var allMasks = selectedTypeFilter.filterFlowMasks()
              currentDefaultMask = allMasks.firstWhere(\m -> m.ID == entityTypeDefaultKey)
            }
    
            EntityFlowMaskData.setAsDefaultMask(mask, currentDefaultMask)
    
      /* set the mask as the default in the map using its ID */
            entityTypeToDefaultMaskKeyMap[mask.EntityType] = mask.ID
          }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/flowmeta/DataFlowMasks.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DataFlowMasksScreenExpressionsImpl extends DataFlowMasksExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=NewMaskButton) at DataFlowMasks.pcf: line 36, column 52
    function action_10 () : void {
      NewDataFlowMask.go(selectedTypeFilter.EntityType)
    }
    
    // 'action' attribute on ToolbarButton (id=NewMaskButton) at DataFlowMasks.pcf: line 36, column 52
    function action_dest_11 () : pcf.api.Destination {
      return pcf.NewDataFlowMask.createDestination(selectedTypeFilter.EntityType)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=Masks_DeleteButton) at DataFlowMasks.pcf: line 45, column 52
    function allCheckedRowsAction_13 (CheckedValues :  entity.EntityFlowMaskData[], CheckedValuesErrors :  java.util.Map) : void {
      gw.api.admin.PCAdminUtil.deleteDataFlowMasks(CheckedValues)
    }
    
    // 'checkedRowAction' attribute on CheckedValuesToolbarButton (id=Masks_MakeDefaultButton) at DataFlowMasks.pcf: line 52, column 52
    function checkedRowAction_15 (mask :  entity.EntityFlowMaskData, CheckedValue :  entity.EntityFlowMaskData) : void {
      setDefaultMask(CheckedValue)
    }
    
    // 'value' attribute on ToolbarRangeInput (id=typeFilter_Input) at DataFlowMasks.pcf: line 29, column 83
    function defaultSetter_4 (__VALUE_TO_SET :  java.lang.Object) : void {
      selectedTypeFilter = (__VALUE_TO_SET as gw.api.web.security.DataFlowMasksFilters.DataFlowMaskFilter)
    }
    
    // 'initialValue' attribute on Variable at DataFlowMasks.pcf: line 22, column 64
    function initialValue_2 () : java.util.Set<entity.EntityFlowMaskData> {
      return selectedTypeFilter.filterFlowMasks().where(\ maskElement -> entityTypeToDefaultMaskKeyMap[maskElement.EntityType] == maskElement.ID).toSet()
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at DataFlowMasks.pcf: line 72, column 34
    function sortValue_16 (mask :  entity.EntityFlowMaskData) : java.lang.Object {
      return mask.Name
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=typeFilter_Input) at DataFlowMasks.pcf: line 29, column 83
    function valueRange_5 () : java.lang.Object {
      return gw.api.web.security.DataFlowMasksFilters.TYPE_FILTER_SET.FilterOptions
    }
    
    // 'value' attribute on RowIterator at DataFlowMasks.pcf: line 63, column 71
    function value_27 () : java.util.List<entity.EntityFlowMaskData> {
      return selectedTypeFilter.filterFlowMasks()
    }
    
    // 'value' attribute on ToolbarRangeInput (id=typeFilter_Input) at DataFlowMasks.pcf: line 29, column 83
    function value_3 () : gw.api.web.security.DataFlowMasksFilters.DataFlowMaskFilter {
      return selectedTypeFilter
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=typeFilter_Input) at DataFlowMasks.pcf: line 29, column 83
    function verifyValueRangeIsAllowedType_6 ($$arg :  gw.api.web.security.DataFlowMasksFilters.DataFlowMaskFilter[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=typeFilter_Input) at DataFlowMasks.pcf: line 29, column 83
    function verifyValueRangeIsAllowedType_6 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=typeFilter_Input) at DataFlowMasks.pcf: line 29, column 83
    function verifyValueRange_7 () : void {
      var __valueRangeArg = gw.api.web.security.DataFlowMasksFilters.TYPE_FILTER_SET.FilterOptions
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_6(__valueRangeArg)
    }
    
    // 'visible' attribute on ToolbarButton (id=NewMaskButton) at DataFlowMasks.pcf: line 36, column 52
    function visible_9 () : java.lang.Boolean {
      return perm.System.exportmasksmanage
    }
    
    property get defaultMasks () : java.util.Set<entity.EntityFlowMaskData> {
      return getVariableValue("defaultMasks", 1) as java.util.Set<entity.EntityFlowMaskData>
    }
    
    property set defaultMasks ($arg :  java.util.Set<entity.EntityFlowMaskData>) {
      setVariableValue("defaultMasks", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/flowmeta/DataFlowMasks.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends DataFlowMasksScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Name_Cell) at DataFlowMasks.pcf: line 72, column 34
    function action_17 () : void {
      DataFlowMaskDetailPage.go(mask)
    }
    
    // 'action' attribute on TextCell (id=Name_Cell) at DataFlowMasks.pcf: line 72, column 34
    function action_dest_18 () : pcf.api.Destination {
      return pcf.DataFlowMaskDetailPage.createDestination(mask)
    }
    
    // 'checkBoxVisible' attribute on RowIterator at DataFlowMasks.pcf: line 63, column 71
    function checkBoxVisible_26 () : java.lang.Boolean {
      return perm.System.exportmasksmanage
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at DataFlowMasks.pcf: line 72, column 34
    function valueRoot_20 () : java.lang.Object {
      return mask
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at DataFlowMasks.pcf: line 72, column 34
    function value_19 () : java.lang.String {
      return mask.Name
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at DataFlowMasks.pcf: line 77, column 102
    function value_22 () : java.lang.String {
      return gw.exportimport.ExportLocaleUtil.lookupEntityTypeDisplayName(mask.EntityType)
    }
    
    // 'value' attribute on CheckBoxCell (id=Default_Cell) at DataFlowMasks.pcf: line 82, column 52
    function value_24 () : java.lang.Boolean {
      return defaultMasks.contains(mask)
    }
    
    property get mask () : entity.EntityFlowMaskData {
      return getIteratedValue(2) as entity.EntityFlowMaskData
    }
    
    
  }
  
  
}