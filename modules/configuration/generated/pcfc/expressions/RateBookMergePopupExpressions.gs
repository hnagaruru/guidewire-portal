package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/rating/RateBookMergePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RateBookMergePopupExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateBookMergePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends RateBookMergePopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on RangeRadioCell (id=RateRoutineSelector_Cell) at RateBookMergePopup.pcf: line 499, column 57
    function defaultSetter_200 (__VALUE_TO_SET :  java.lang.Object) : void {
      RateBookMerge.MergedRateRoutines[rateRoutine.Code] = (__VALUE_TO_SET as entity.CalcRoutineDefinition)
    }
    
    // 'editable' attribute on RangeRadioCell (id=RateRoutineSelector_Cell) at RateBookMergePopup.pcf: line 499, column 57
    function editable_197 () : java.lang.Boolean {
      return RateBookMerge.rateRoutineConflictsExist(rateRoutine)
    }
    
    // 'iconLabel' attribute on BooleanRadioCell (id=RateRoutineResult_Cell) at RateBookMergePopup.pcf: line 490, column 36
    function iconLabel_195 () : java.lang.String {
      return mergeUIHelper.getIconToolTip(conflictStatus)
    }
    
    // 'icon' attribute on BooleanRadioCell (id=RateRoutineResult_Cell) at RateBookMergePopup.pcf: line 490, column 36
    function icon_196 () : java.lang.String {
      return mergeUIHelper.getIcon(conflictStatus)
    }
    
    // 'initialValue' attribute on Variable at RateBookMergePopup.pcf: line 474, column 64
    function initialValue_191 () : gw.rating.rtm.RateBookMerge.conflictStatus {
      return RateBookMerge.RateRoutinesIconMap.get(rateRoutine.Code)
    }
    
    // RowIterator (id=RateRoutines) at RateBookMergePopup.pcf: line 470, column 46
    function initializeVariables_209 () : void {
        conflictStatus = RateBookMerge.RateRoutinesIconMap.get(rateRoutine.Code);

    }
    
    // 'label' attribute on RangeRadioCell (id=RateRoutineSelector_Cell) at RateBookMergePopup.pcf: line 499, column 57
    function label_198 () : java.lang.Object {
      return DisplayKey.get("Web.Rating.RateBooks.Merge.PropertyHeader", book1.BookCode, book1.BookEdition, book2.BookCode, book2.BookEdition)
    }
    
    // 'optionLabel' attribute on RangeRadioCell (id=RateRoutineSelector_Cell) at RateBookMergePopup.pcf: line 499, column 57
    function optionLabel_201 (VALUE :  entity.CalcRoutineDefinition) : java.lang.String {
      return mergeUIHelper.getRoutineOrTableOptionLabel(conflictStatus, VALUE.Name)
    }
    
    // 'valueRange' attribute on RangeRadioCell (id=RateRoutineSelector_Cell) at RateBookMergePopup.pcf: line 499, column 57
    function valueRange_202 () : java.lang.Object {
      return RateBookMerge.getRateRoutinesFromBooks(rateRoutine.Code)
    }
    
    // 'value' attribute on TextCell (id=RateRoutineName_Cell) at RateBookMergePopup.pcf: line 480, column 41
    function valueRoot_193 () : java.lang.Object {
      return rateRoutine
    }
    
    // 'value' attribute on TextCell (id=RateRoutineName_Cell) at RateBookMergePopup.pcf: line 480, column 41
    function value_192 () : java.lang.String {
      return rateRoutine.Code
    }
    
    // 'value' attribute on RangeRadioCell (id=RateRoutineSelector_Cell) at RateBookMergePopup.pcf: line 499, column 57
    function value_199 () : entity.CalcRoutineDefinition {
      return RateBookMerge.MergedRateRoutines[rateRoutine.Code]
    }
    
    // 'valueRange' attribute on RangeRadioCell (id=RateRoutineSelector_Cell) at RateBookMergePopup.pcf: line 499, column 57
    function verifyValueRangeIsAllowedType_203 ($$arg :  entity.CalcRoutineDefinition[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeRadioCell (id=RateRoutineSelector_Cell) at RateBookMergePopup.pcf: line 499, column 57
    function verifyValueRangeIsAllowedType_203 ($$arg :  gw.api.database.IQueryBeanResult<entity.CalcRoutineDefinition>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeRadioCell (id=RateRoutineSelector_Cell) at RateBookMergePopup.pcf: line 499, column 57
    function verifyValueRangeIsAllowedType_203 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeRadioCell (id=RateRoutineSelector_Cell) at RateBookMergePopup.pcf: line 499, column 57
    function verifyValueRange_204 () : void {
      var __valueRangeArg = RateBookMerge.getRateRoutinesFromBooks(rateRoutine.Code)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_203(__valueRangeArg)
    }
    
    // 'visible' attribute on Row at RateBookMergePopup.pcf: line 476, column 91
    function visible_208 () : java.lang.Boolean {
      return showAllRows or RateBookMerge.rateRoutineConflictsExist(rateRoutine)
    }
    
    property get conflictStatus () : gw.rating.rtm.RateBookMerge.conflictStatus {
      return getVariableValue("conflictStatus", 1) as gw.rating.rtm.RateBookMerge.conflictStatus
    }
    
    property set conflictStatus ($arg :  gw.rating.rtm.RateBookMerge.conflictStatus) {
      setVariableValue("conflictStatus", 1, $arg)
    }
    
    property get rateRoutine () : entity.CalcRoutineDefinition {
      return getIteratedValue(1) as entity.CalcRoutineDefinition
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateBookMergePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends RateBookMergePopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on RangeRadioCell (id=RateTableSelector_Cell) at RateBookMergePopup.pcf: line 452, column 45
    function defaultSetter_178 (__VALUE_TO_SET :  java.lang.Object) : void {
      RateBookMerge.MergedRateTables[rateTableKey] = (__VALUE_TO_SET as entity.RateTable)
    }
    
    // 'editable' attribute on RangeRadioCell (id=RateTableSelector_Cell) at RateBookMergePopup.pcf: line 452, column 45
    function editable_175 () : java.lang.Boolean {
      return RateBookMerge.tableConflictExists(rateTableKey)
    }
    
    // 'iconLabel' attribute on BooleanRadioCell (id=RateTableResult_Cell) at RateBookMergePopup.pcf: line 443, column 36
    function iconLabel_173 () : java.lang.String {
      return mergeUIHelper.getIconToolTip(conflictStatus)
    }
    
    // 'icon' attribute on BooleanRadioCell (id=RateTableResult_Cell) at RateBookMergePopup.pcf: line 443, column 36
    function icon_174 () : java.lang.String {
      return mergeUIHelper.getIcon(conflictStatus)
    }
    
    // 'initialValue' attribute on Variable at RateBookMergePopup.pcf: line 427, column 64
    function initialValue_170 () : gw.rating.rtm.RateBookMerge.conflictStatus {
      return RateBookMerge.RateTableIconMap.get(rateTableKey)
    }
    
    // RowIterator (id=RateTables) at RateBookMergePopup.pcf: line 423, column 47
    function initializeVariables_187 () : void {
        conflictStatus = RateBookMerge.RateTableIconMap.get(rateTableKey);

    }
    
    // 'label' attribute on RangeRadioCell (id=RateTableSelector_Cell) at RateBookMergePopup.pcf: line 452, column 45
    function label_176 () : java.lang.Object {
      return DisplayKey.get("Web.Rating.RateBooks.Merge.PropertyHeader", book1.BookCode, book1.BookEdition, book2.BookCode, book2.BookEdition)
    }
    
    // 'optionLabel' attribute on RangeRadioCell (id=RateTableSelector_Cell) at RateBookMergePopup.pcf: line 452, column 45
    function optionLabel_179 (VALUE :  entity.RateTable) : java.lang.String {
      return mergeUIHelper.getRoutineOrTableOptionLabel(conflictStatus, VALUE.Definition.TableName)
    }
    
    // 'valueRange' attribute on RangeRadioCell (id=RateTableSelector_Cell) at RateBookMergePopup.pcf: line 452, column 45
    function valueRange_180 () : java.lang.Object {
      return RateBookMerge.getRateTableFromBothBooks(rateTableKey)
    }
    
    // 'value' attribute on TextCell (id=PropertyName_Cell) at RateBookMergePopup.pcf: line 433, column 54
    function value_171 () : java.lang.String {
      return rateTableKey.First.toString()
    }
    
    // 'value' attribute on RangeRadioCell (id=RateTableSelector_Cell) at RateBookMergePopup.pcf: line 452, column 45
    function value_177 () : entity.RateTable {
      return RateBookMerge.MergedRateTables[rateTableKey]
    }
    
    // 'valueRange' attribute on RangeRadioCell (id=RateTableSelector_Cell) at RateBookMergePopup.pcf: line 452, column 45
    function verifyValueRangeIsAllowedType_181 ($$arg :  entity.RateTable[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeRadioCell (id=RateTableSelector_Cell) at RateBookMergePopup.pcf: line 452, column 45
    function verifyValueRangeIsAllowedType_181 ($$arg :  gw.api.database.IQueryBeanResult<entity.RateTable>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeRadioCell (id=RateTableSelector_Cell) at RateBookMergePopup.pcf: line 452, column 45
    function verifyValueRangeIsAllowedType_181 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeRadioCell (id=RateTableSelector_Cell) at RateBookMergePopup.pcf: line 452, column 45
    function verifyValueRange_182 () : void {
      var __valueRangeArg = RateBookMerge.getRateTableFromBothBooks(rateTableKey)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_181(__valueRangeArg)
    }
    
    // 'visible' attribute on Row at RateBookMergePopup.pcf: line 429, column 86
    function visible_186 () : java.lang.Boolean {
      return showAllRows or RateBookMerge.tableConflictExists(rateTableKey)
    }
    
    property get conflictStatus () : gw.rating.rtm.RateBookMerge.conflictStatus {
      return getVariableValue("conflictStatus", 1) as gw.rating.rtm.RateBookMerge.conflictStatus
    }
    
    property set conflictStatus ($arg :  gw.rating.rtm.RateBookMerge.conflictStatus) {
      setVariableValue("conflictStatus", 1, $arg)
    }
    
    property get rateTableKey () : gw.util.Pair<java.lang.String, java.lang.String> {
      return getIteratedValue(1) as gw.util.Pair<java.lang.String, java.lang.String>
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateBookMergePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RateBookMergePopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (book1 :  RateBook, book2 :  RateBook) : int {
      return 0
    }
    
    // 'afterCommit' attribute on Popup (id=RateBookMergePopup) at RateBookMergePopup.pcf: line 11, column 82
    function afterCommit_211 (TopLocation :  pcf.api.Location) : void {
      EditRateBook.go(mergedRateBook)
    }
    
    // 'beforeCommit' attribute on Popup (id=RateBookMergePopup) at RateBookMergePopup.pcf: line 11, column 82
    function beforeCommit_212 (pickedValue :  java.lang.Object) : void {
      RateBookMerge.merge()
    }
    
    // 'value' attribute on BooleanRadioInput (id=ShowAllRows_Input) at RateBookMergePopup.pcf: line 75, column 33
    function defaultSetter_14 (__VALUE_TO_SET :  java.lang.Object) : void {
      showAllRows = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=PropertyBookEdition_Input) at RateBookMergePopup.pcf: line 68, column 49
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      mergedRateBook.BookEdition = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'initialValue' attribute on Variable at RateBookMergePopup.pcf: line 23, column 43
    function initialValue_0 () : gw.rating.rtm.RateBookMerge {
      return new gw.rating.rtm.RateBookMerge (book1, book2)
    }
    
    // 'initialValue' attribute on Variable at RateBookMergePopup.pcf: line 27, column 31
    function initialValue_1 () : entity.RateBook {
      return RateBookMerge.MergedRateBook
    }
    
    // 'initialValue' attribute on Variable at RateBookMergePopup.pcf: line 35, column 55
    function initialValue_2 () : gw.pcf.rating.rtm.RateBookMergeUIHelper {
      return new gw.pcf.rating.rtm.RateBookMergeUIHelper(book1, book2)
    }
    
    // 'label' attribute on RangeRadioCell (id=RateTableSelector_Cell) at RateBookMergePopup.pcf: line 452, column 45
    function label_169 () : java.lang.Object {
      return DisplayKey.get("Web.Rating.RateBooks.Merge.PropertyHeader", book1.BookCode, book1.BookEdition, book2.BookCode, book2.BookEdition)
    }
    
    // 'value' attribute on TextCell (id=PropertyName_Cell) at RateBookMergePopup.pcf: line 433, column 54
    function sortValue_168 (rateTableKey :  gw.util.Pair<java.lang.String, java.lang.String>) : java.lang.Object {
      return rateTableKey.First.toString()
    }
    
    // 'value' attribute on TextCell (id=RateRoutineName_Cell) at RateBookMergePopup.pcf: line 480, column 41
    function sortValue_189 (rateRoutine :  entity.CalcRoutineDefinition) : java.lang.Object {
      return rateRoutine.Code
    }
    
    // 'validationExpression' attribute on TextInput (id=PropertyBookEdition_Input) at RateBookMergePopup.pcf: line 68, column 49
    function validationExpression_7 () : java.lang.Object {
      return RateBookMerge.IsMergedRateBookUnique
    }
    
    // 'value' attribute on TextInput (id=PropertyBookEdition_Input) at RateBookMergePopup.pcf: line 68, column 49
    function valueRoot_10 () : java.lang.Object {
      return mergedRateBook
    }
    
    // 'value' attribute on BooleanRadioInput (id=ShowAllRows_Input) at RateBookMergePopup.pcf: line 75, column 33
    function value_13 () : java.lang.Boolean {
      return showAllRows
    }
    
    // 'value' attribute on RowIterator (id=RateTables) at RateBookMergePopup.pcf: line 423, column 47
    function value_188 () : java.util.List<gw.util.Pair<java.lang.String, java.lang.String>> {
      return RateBookMerge.RateTableKeys
    }
    
    // 'value' attribute on RowIterator (id=RateRoutines) at RateBookMergePopup.pcf: line 470, column 46
    function value_210 () : java.util.List<entity.CalcRoutineDefinition> {
      return RateBookMerge.RateRoutines
    }
    
    // 'value' attribute on TextInput (id=FirstRateBook_Input) at RateBookMergePopup.pcf: line 57, column 127
    function value_3 () : java.lang.String {
      return DisplayKey.get("Web.Rating.RateBooks.Merge.CodeAndEdition", book1.BookCode, book1.BookEdition)
    }
    
    // 'value' attribute on TextInput (id=SecondRateBook_Input) at RateBookMergePopup.pcf: line 61, column 127
    function value_5 () : java.lang.String {
      return DisplayKey.get("Web.Rating.RateBooks.Merge.CodeAndEdition", book2.BookCode, book2.BookEdition)
    }
    
    // 'value' attribute on TextInput (id=PropertyBookEdition_Input) at RateBookMergePopup.pcf: line 68, column 49
    function value_8 () : java.lang.String {
      return mergedRateBook.BookEdition
    }
    
    override property get CurrentLocation () : pcf.RateBookMergePopup {
      return super.CurrentLocation as pcf.RateBookMergePopup
    }
    
    property get RateBookMerge () : gw.rating.rtm.RateBookMerge {
      return getVariableValue("RateBookMerge", 0) as gw.rating.rtm.RateBookMerge
    }
    
    property set RateBookMerge ($arg :  gw.rating.rtm.RateBookMerge) {
      setVariableValue("RateBookMerge", 0, $arg)
    }
    
    property get book1 () : RateBook {
      return getVariableValue("book1", 0) as RateBook
    }
    
    property set book1 ($arg :  RateBook) {
      setVariableValue("book1", 0, $arg)
    }
    
    property get book2 () : RateBook {
      return getVariableValue("book2", 0) as RateBook
    }
    
    property set book2 ($arg :  RateBook) {
      setVariableValue("book2", 0, $arg)
    }
    
    property get mergeUIHelper () : gw.pcf.rating.rtm.RateBookMergeUIHelper {
      return getVariableValue("mergeUIHelper", 0) as gw.pcf.rating.rtm.RateBookMergeUIHelper
    }
    
    property set mergeUIHelper ($arg :  gw.pcf.rating.rtm.RateBookMergeUIHelper) {
      setVariableValue("mergeUIHelper", 0, $arg)
    }
    
    property get mergedRateBook () : entity.RateBook {
      return getVariableValue("mergedRateBook", 0) as entity.RateBook
    }
    
    property set mergedRateBook ($arg :  entity.RateBook) {
      setVariableValue("mergedRateBook", 0, $arg)
    }
    
    property get showAllRows () : boolean {
      return getVariableValue("showAllRows", 0) as java.lang.Boolean
    }
    
    property set showAllRows ($arg :  boolean) {
      setVariableValue("showAllRows", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateBookMergePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RateBookPropertiesLVExpressionsImpl extends RateBookMergePopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on RangeRadioCell (id=PolicyLineSelector_Cell) at RateBookMergePopup.pcf: line 300, column 66
    function defaultSetter_110 (__VALUE_TO_SET :  java.lang.Object) : void {
      RateBookMerge.RadioCellWrapperMap[RateBook#PolicyLine.PropertyInfo.Name] = (__VALUE_TO_SET as gw.rating.rtm.NullableRadioValueWrapper)
    }
    
    // 'value' attribute on RangeRadioCell (id=BookOfferingSelector_Cell) at RateBookMergePopup.pcf: line 321, column 66
    function defaultSetter_122 (__VALUE_TO_SET :  java.lang.Object) : void {
      RateBookMerge.RadioCellWrapperMap[RateBook#BookOffering.PropertyInfo.Name] = (__VALUE_TO_SET as gw.rating.rtm.NullableRadioValueWrapper)
    }
    
    // 'value' attribute on RangeRadioCell (id=EffectiveDateSelector_Cell) at RateBookMergePopup.pcf: line 353, column 41
    function defaultSetter_134 (__VALUE_TO_SET :  java.lang.Object) : void {
      mergedRateBook.EffectiveDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on RangeRadioCell (id=ExpirationDateSelector_Cell) at RateBookMergePopup.pcf: line 374, column 66
    function defaultSetter_147 (__VALUE_TO_SET :  java.lang.Object) : void {
      RateBookMerge.RadioCellWrapperMap[RateBook#ExpirationDate.PropertyInfo.Name] = (__VALUE_TO_SET as gw.rating.rtm.NullableRadioValueWrapper)
    }
    
    // 'value' attribute on RangeRadioCell (id=RenewalEffectiveDatenSelector_Cell) at RateBookMergePopup.pcf: line 406, column 41
    function defaultSetter_159 (__VALUE_TO_SET :  java.lang.Object) : void {
      mergedRateBook.RenewalEffectiveDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on RangeRadioCell (id=BookCodeSelector_Cell) at RateBookMergePopup.pcf: line 149, column 43
    function defaultSetter_29 (__VALUE_TO_SET :  java.lang.Object) : void {
      mergedRateBook.BookCode = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeRadioCell (id=BookNameSelector_Cell) at RateBookMergePopup.pcf: line 170, column 43
    function defaultSetter_41 (__VALUE_TO_SET :  java.lang.Object) : void {
      mergedRateBook.BookName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeRadioCell (id=BookDescriptionSelector_Cell) at RateBookMergePopup.pcf: line 191, column 66
    function defaultSetter_53 (__VALUE_TO_SET :  java.lang.Object) : void {
      RateBookMerge.RadioCellWrapperMap[RateBook#BookDesc.PropertyInfo.Name] = (__VALUE_TO_SET as gw.rating.rtm.NullableRadioValueWrapper)
    }
    
    // 'value' attribute on RangeRadioCell (id=CascadedLookupSelector_Cell) at RateBookMergePopup.pcf: line 214, column 44
    function defaultSetter_64 (__VALUE_TO_SET :  java.lang.Object) : void {
      mergedRateBook.CascadedLookup = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on RangeRadioCell (id=BookGroupSelector_Cell) at RateBookMergePopup.pcf: line 236, column 66
    function defaultSetter_77 (__VALUE_TO_SET :  java.lang.Object) : void {
      RateBookMerge.RadioCellWrapperMap[RateBook#BookGroup.PropertyInfo.Name] = (__VALUE_TO_SET as gw.rating.rtm.NullableRadioValueWrapper)
    }
    
    // 'value' attribute on RangeRadioCell (id=UWCompanySelector_Cell) at RateBookMergePopup.pcf: line 257, column 66
    function defaultSetter_88 (__VALUE_TO_SET :  java.lang.Object) : void {
      RateBookMerge.RadioCellWrapperMap[RateBook#UWCompany.PropertyInfo.Name] = (__VALUE_TO_SET as gw.rating.rtm.NullableRadioValueWrapper)
    }
    
    // 'value' attribute on RangeRadioCell (id=BookJurisdictionSelector_Cell) at RateBookMergePopup.pcf: line 278, column 66
    function defaultSetter_99 (__VALUE_TO_SET :  java.lang.Object) : void {
      RateBookMerge.RadioCellWrapperMap[RateBook#BookJurisdiction.PropertyInfo.Name] = (__VALUE_TO_SET as gw.rating.rtm.NullableRadioValueWrapper)
    }
    
    // 'editable' attribute on RangeRadioCell (id=PolicyLineSelector_Cell) at RateBookMergePopup.pcf: line 300, column 66
    function editable_108 () : java.lang.Boolean {
      return (book1.PolicyLine != book2.PolicyLine)
    }
    
    // 'editable' attribute on RangeRadioCell (id=BookOfferingSelector_Cell) at RateBookMergePopup.pcf: line 321, column 66
    function editable_120 () : java.lang.Boolean {
      return (book1.BookOffering != book2.BookOffering)
    }
    
    // 'editable' attribute on RangeRadioCell (id=EffectiveDateSelector_Cell) at RateBookMergePopup.pcf: line 353, column 41
    function editable_132 () : java.lang.Boolean {
      return (book1.EffectiveDate != book2.EffectiveDate)
    }
    
    // 'editable' attribute on RangeRadioCell (id=ExpirationDateSelector_Cell) at RateBookMergePopup.pcf: line 374, column 66
    function editable_145 () : java.lang.Boolean {
      return (book1.ExpirationDate != book2.ExpirationDate)
    }
    
    // 'editable' attribute on RangeRadioCell (id=RenewalEffectiveDatenSelector_Cell) at RateBookMergePopup.pcf: line 406, column 41
    function editable_157 () : java.lang.Boolean {
      return (book1.RenewalEffectiveDate != book2.RenewalEffectiveDate)
    }
    
    // 'editable' attribute on RangeRadioCell (id=BookCodeSelector_Cell) at RateBookMergePopup.pcf: line 149, column 43
    function editable_27 () : java.lang.Boolean {
      return (book1.BookCode != book2.BookCode)
    }
    
    // 'editable' attribute on RangeRadioCell (id=BookNameSelector_Cell) at RateBookMergePopup.pcf: line 170, column 43
    function editable_39 () : java.lang.Boolean {
      return (book1.BookName != book2.BookName)
    }
    
    // 'editable' attribute on RangeRadioCell (id=BookDescriptionSelector_Cell) at RateBookMergePopup.pcf: line 191, column 66
    function editable_51 () : java.lang.Boolean {
      return (book1.BookDesc != book2.BookDesc)
    }
    
    // 'editable' attribute on RangeRadioCell (id=CascadedLookupSelector_Cell) at RateBookMergePopup.pcf: line 214, column 44
    function editable_62 () : java.lang.Boolean {
      return (book1.CascadedLookup != book2.CascadedLookup)
    }
    
    // 'editable' attribute on RangeRadioCell (id=BookGroupSelector_Cell) at RateBookMergePopup.pcf: line 236, column 66
    function editable_75 () : java.lang.Boolean {
      return (book1.BookGroup != book2.BookGroup)
    }
    
    // 'editable' attribute on RangeRadioCell (id=UWCompanySelector_Cell) at RateBookMergePopup.pcf: line 257, column 66
    function editable_86 () : java.lang.Boolean {
      return (book1.UWCompany != book2.UWCompany)
    }
    
    // 'editable' attribute on RangeRadioCell (id=BookJurisdictionSelector_Cell) at RateBookMergePopup.pcf: line 278, column 66
    function editable_97 () : java.lang.Boolean {
      return (book1.BookJurisdiction != book2.BookJurisdiction)
    }
    
    // 'iconLabel' attribute on BooleanRadioCell (id=PolicyLineResult_Cell) at RateBookMergePopup.pcf: line 292, column 34
    function iconLabel_106 () : java.lang.String {
      return mergeUIHelper.getRateBookPropertyIconToolTip(RateBook#PolicyLine.PropertyInfo.Name)
    }
    
    // 'iconLabel' attribute on BooleanRadioCell (id=BookOfferingResult_Cell) at RateBookMergePopup.pcf: line 314, column 34
    function iconLabel_118 () : java.lang.String {
      return mergeUIHelper.getRateBookPropertyIconToolTip(RateBook#BookOffering.PropertyInfo.Name)
    }
    
    // 'iconLabel' attribute on BooleanRadioCell (id=EffectiveDateResult_Cell) at RateBookMergePopup.pcf: line 345, column 34
    function iconLabel_130 () : java.lang.String {
      return mergeUIHelper.getRateBookPropertyIconToolTip(RateBook#EffectiveDate.PropertyInfo.Name)
    }
    
    // 'iconLabel' attribute on BooleanRadioCell (id=ExpirationDateResult_Cell) at RateBookMergePopup.pcf: line 367, column 34
    function iconLabel_143 () : java.lang.String {
      return mergeUIHelper.getRateBookPropertyIconToolTip(RateBook#ExpirationDate.PropertyInfo.Name)
    }
    
    // 'iconLabel' attribute on BooleanRadioCell (id=RenewalEffectiveDateResult_Cell) at RateBookMergePopup.pcf: line 398, column 34
    function iconLabel_155 () : java.lang.String {
      return mergeUIHelper.getRateBookPropertyIconToolTip(RateBook#RenewalEffectiveDate.PropertyInfo.Name)
    }
    
    // 'iconLabel' attribute on BooleanRadioCell (id=BookCodeResult_Cell) at RateBookMergePopup.pcf: line 142, column 34
    function iconLabel_25 () : java.lang.String {
      return mergeUIHelper.getRateBookPropertyIconToolTip(RateBook#BookCode.PropertyInfo.Name)
    }
    
    // 'iconLabel' attribute on BooleanRadioCell (id=BookNameResult_Cell) at RateBookMergePopup.pcf: line 163, column 34
    function iconLabel_37 () : java.lang.String {
      return mergeUIHelper.getRateBookPropertyIconToolTip(RateBook#BookName.PropertyInfo.Name)
    }
    
    // 'iconLabel' attribute on BooleanRadioCell (id=BookDescriptionResult_Cell) at RateBookMergePopup.pcf: line 184, column 34
    function iconLabel_49 () : java.lang.String {
      return mergeUIHelper.getRateBookPropertyIconToolTip(RateBook#BookDesc.PropertyInfo.Name)
    }
    
    // 'iconLabel' attribute on BooleanRadioCell (id=CascadedLookupResult_Cell) at RateBookMergePopup.pcf: line 205, column 34
    function iconLabel_60 () : java.lang.String {
      return mergeUIHelper.getRateBookPropertyIconToolTip(RateBook#CascadedLookup.PropertyInfo.Name)
    }
    
    // 'iconLabel' attribute on BooleanRadioCell (id=BookGroupResult_Cell) at RateBookMergePopup.pcf: line 228, column 34
    function iconLabel_73 () : java.lang.String {
      return mergeUIHelper.getRateBookPropertyIconToolTip(RateBook#BookGroup.PropertyInfo.Name)
    }
    
    // 'iconLabel' attribute on BooleanRadioCell (id=UWCompanyResult_Cell) at RateBookMergePopup.pcf: line 250, column 34
    function iconLabel_84 () : java.lang.String {
      return mergeUIHelper.getRateBookPropertyIconToolTip(RateBook#UWCompany.PropertyInfo.Name)
    }
    
    // 'iconLabel' attribute on BooleanRadioCell (id=BookJurisdictionResult_Cell) at RateBookMergePopup.pcf: line 271, column 34
    function iconLabel_95 () : java.lang.String {
      return mergeUIHelper.getRateBookPropertyIconToolTip(RateBook#BookJurisdiction.PropertyInfo.Name)
    }
    
    // 'icon' attribute on BooleanRadioCell (id=PolicyLineResult_Cell) at RateBookMergePopup.pcf: line 292, column 34
    function icon_107 () : java.lang.String {
      return mergeUIHelper.getRateBookPropertyIcons(RateBook#PolicyLine.PropertyInfo.Name)
    }
    
    // 'icon' attribute on BooleanRadioCell (id=BookOfferingResult_Cell) at RateBookMergePopup.pcf: line 314, column 34
    function icon_119 () : java.lang.String {
      return mergeUIHelper.getRateBookPropertyIcons(RateBook#BookOffering.PropertyInfo.Name)
    }
    
    // 'icon' attribute on BooleanRadioCell (id=EffectiveDateResult_Cell) at RateBookMergePopup.pcf: line 345, column 34
    function icon_131 () : java.lang.String {
      return mergeUIHelper.getRateBookPropertyIcons(RateBook#EffectiveDate.PropertyInfo.Name)
    }
    
    // 'icon' attribute on BooleanRadioCell (id=ExpirationDateResult_Cell) at RateBookMergePopup.pcf: line 367, column 34
    function icon_144 () : java.lang.String {
      return mergeUIHelper.getRateBookPropertyIcons(RateBook#ExpirationDate.PropertyInfo.Name)
    }
    
    // 'icon' attribute on BooleanRadioCell (id=RenewalEffectiveDateResult_Cell) at RateBookMergePopup.pcf: line 398, column 34
    function icon_156 () : java.lang.String {
      return mergeUIHelper.getRateBookPropertyIcons(RateBook#RenewalEffectiveDate.PropertyInfo.Name)
    }
    
    // 'icon' attribute on BooleanRadioCell (id=BookCodeResult_Cell) at RateBookMergePopup.pcf: line 142, column 34
    function icon_26 () : java.lang.String {
      return mergeUIHelper.getRateBookPropertyIcons(RateBook#BookCode.PropertyInfo.Name)
    }
    
    // 'icon' attribute on BooleanRadioCell (id=BookNameResult_Cell) at RateBookMergePopup.pcf: line 163, column 34
    function icon_38 () : java.lang.String {
      return mergeUIHelper.getRateBookPropertyIcons(RateBook#BookName.PropertyInfo.Name)
    }
    
    // 'icon' attribute on BooleanRadioCell (id=BookDescriptionResult_Cell) at RateBookMergePopup.pcf: line 184, column 34
    function icon_50 () : java.lang.String {
      return mergeUIHelper.getRateBookPropertyIcons(RateBook#BookDesc.PropertyInfo.Name)
    }
    
    // 'icon' attribute on BooleanRadioCell (id=CascadedLookupResult_Cell) at RateBookMergePopup.pcf: line 205, column 34
    function icon_61 () : java.lang.String {
      return mergeUIHelper.getRateBookPropertyIcons(RateBook#CascadedLookup.PropertyInfo.Name)
    }
    
    // 'icon' attribute on BooleanRadioCell (id=BookGroupResult_Cell) at RateBookMergePopup.pcf: line 228, column 34
    function icon_74 () : java.lang.String {
      return mergeUIHelper.getRateBookPropertyIcons(RateBook#BookGroup.PropertyInfo.Name)
    }
    
    // 'icon' attribute on BooleanRadioCell (id=UWCompanyResult_Cell) at RateBookMergePopup.pcf: line 250, column 34
    function icon_85 () : java.lang.String {
      return mergeUIHelper.getRateBookPropertyIcons(RateBook#UWCompany.PropertyInfo.Name)
    }
    
    // 'icon' attribute on BooleanRadioCell (id=BookJurisdictionResult_Cell) at RateBookMergePopup.pcf: line 271, column 34
    function icon_96 () : java.lang.String {
      return mergeUIHelper.getRateBookPropertyIcons(RateBook#BookJurisdiction.PropertyInfo.Name)
    }
    
    // 'initialValue' attribute on Variable at RateBookMergePopup.pcf: line 91, column 34
    function initialValue_16 () : java.util.List {
      return mergeUIHelper.getPossibleValues(RateBook#BookDesc.PropertyInfo.Name)
    }
    
    // 'initialValue' attribute on Variable at RateBookMergePopup.pcf: line 95, column 34
    function initialValue_17 () : java.util.List {
      return mergeUIHelper.getPossibleValues(RateBook#UWCompany.PropertyInfo.Name)
    }
    
    // 'initialValue' attribute on Variable at RateBookMergePopup.pcf: line 99, column 34
    function initialValue_18 () : java.util.List {
      return mergeUIHelper.getPossibleValues(RateBook#BookJurisdiction.PropertyInfo.Name)
    }
    
    // 'initialValue' attribute on Variable at RateBookMergePopup.pcf: line 103, column 34
    function initialValue_19 () : java.util.List {
      return mergeUIHelper.getPossibleValues(RateBook#PolicyLine.PropertyInfo.Name)
    }
    
    // 'initialValue' attribute on Variable at RateBookMergePopup.pcf: line 107, column 34
    function initialValue_20 () : java.util.List {
      return mergeUIHelper.getPossibleValues(RateBook#BookOffering.PropertyInfo.Name)
    }
    
    // 'initialValue' attribute on Variable at RateBookMergePopup.pcf: line 111, column 28
    function initialValue_21 () : java.util.List {
      return mergeUIHelper.getPossibleValues(RateBook#ExpirationDate.PropertyInfo.Name)
    }
    
    // 'initialValue' attribute on Variable at RateBookMergePopup.pcf: line 115, column 28
    function initialValue_22 () : java.util.List {
      return mergeUIHelper.getPossibleValues(RateBook#BookGroup.PropertyInfo.Name)
    }
    
    // 'optionLabel' attribute on RangeRadioCell (id=PolicyLineSelector_Cell) at RateBookMergePopup.pcf: line 300, column 66
    function optionLabel_111 (VALUE :  gw.rating.rtm.NullableRadioValueWrapper) : java.lang.String {
      return (VALUE as String ==DisplayKey.get("Web.Rating.RateBooks.Merge.None"))?DisplayKey.get("Web.Rating.RateBooks.Merge.Generic"):VALUE.toString()
    }
    
    // 'optionLabel' attribute on RangeRadioCell (id=EffectiveDateSelector_Cell) at RateBookMergePopup.pcf: line 353, column 41
    function optionLabel_136 (VALUE :  java.util.Date) : java.lang.String {
      return VALUE.formatDate(SHORT)
    }
    
    // 'optionLabel' attribute on RangeRadioCell (id=CascadedLookupSelector_Cell) at RateBookMergePopup.pcf: line 214, column 44
    function optionLabel_66 (VALUE :  java.lang.Boolean) : java.lang.String {
      return VALUE ? DisplayKey.get("Web.Rating.RateBooks.CascadedLookup.Boolean.True") : DisplayKey.get("Web.Rating.RateBooks.CascadedLookup.Boolean.False")
    }
    
    // 'valueRange' attribute on RangeRadioCell (id=BookJurisdictionSelector_Cell) at RateBookMergePopup.pcf: line 278, column 66
    function valueRange_100 () : java.lang.Object {
      return JursidictionWrapper
    }
    
    // 'valueRange' attribute on RangeRadioCell (id=PolicyLineSelector_Cell) at RateBookMergePopup.pcf: line 300, column 66
    function valueRange_112 () : java.lang.Object {
      return PolicyLineWrapper
    }
    
    // 'valueRange' attribute on RangeRadioCell (id=BookOfferingSelector_Cell) at RateBookMergePopup.pcf: line 321, column 66
    function valueRange_123 () : java.lang.Object {
      return OfferingWrapper
    }
    
    // 'valueRange' attribute on RangeRadioCell (id=EffectiveDateSelector_Cell) at RateBookMergePopup.pcf: line 353, column 41
    function valueRange_137 () : java.lang.Object {
      return (book1.EffectiveDate == book2.EffectiveDate)?{book1.EffectiveDate}:{book1.EffectiveDate, book2.EffectiveDate}
    }
    
    // 'valueRange' attribute on RangeRadioCell (id=ExpirationDateSelector_Cell) at RateBookMergePopup.pcf: line 374, column 66
    function valueRange_148 () : java.lang.Object {
      return BeforeDateWrapper
    }
    
    // 'valueRange' attribute on RangeRadioCell (id=RenewalEffectiveDatenSelector_Cell) at RateBookMergePopup.pcf: line 406, column 41
    function valueRange_162 () : java.lang.Object {
      return (book1.RenewalEffectiveDate == book2.RenewalEffectiveDate)?{book1.RenewalEffectiveDate}:{book1.RenewalEffectiveDate, book2.RenewalEffectiveDate}
    }
    
    // 'valueRange' attribute on RangeRadioCell (id=BookCodeSelector_Cell) at RateBookMergePopup.pcf: line 149, column 43
    function valueRange_31 () : java.lang.Object {
      return (book1.BookCode == book2.BookCode)?{book1.BookCode}:{book1.BookCode, book2.BookCode}
    }
    
    // 'valueRange' attribute on RangeRadioCell (id=BookNameSelector_Cell) at RateBookMergePopup.pcf: line 170, column 43
    function valueRange_43 () : java.lang.Object {
      return (book1.BookName == book2.BookName)?{book1.BookName}:{book1.BookName, book2.BookName}
    }
    
    // 'valueRange' attribute on RangeRadioCell (id=BookDescriptionSelector_Cell) at RateBookMergePopup.pcf: line 191, column 66
    function valueRange_54 () : java.lang.Object {
      return DescriptionWrapper
    }
    
    // 'valueRange' attribute on RangeRadioCell (id=CascadedLookupSelector_Cell) at RateBookMergePopup.pcf: line 214, column 44
    function valueRange_67 () : java.lang.Object {
      return (book1.CascadedLookup == book2.CascadedLookup)?{book1.CascadedLookup}:{book1.CascadedLookup, book2.CascadedLookup}
    }
    
    // 'valueRange' attribute on RangeRadioCell (id=BookGroupSelector_Cell) at RateBookMergePopup.pcf: line 236, column 66
    function valueRange_78 () : java.lang.Object {
      return BookGroupWrapper
    }
    
    // 'valueRange' attribute on RangeRadioCell (id=UWCompanySelector_Cell) at RateBookMergePopup.pcf: line 257, column 66
    function valueRange_89 () : java.lang.Object {
      return UWCompanyWrapper
    }
    
    // 'value' attribute on RangeRadioCell (id=BookCodeSelector_Cell) at RateBookMergePopup.pcf: line 149, column 43
    function valueRoot_30 () : java.lang.Object {
      return mergedRateBook
    }
    
    // 'value' attribute on RangeRadioCell (id=PolicyLineSelector_Cell) at RateBookMergePopup.pcf: line 300, column 66
    function value_109 () : gw.rating.rtm.NullableRadioValueWrapper {
      return RateBookMerge.RadioCellWrapperMap[RateBook#PolicyLine.PropertyInfo.Name]
    }
    
    // 'value' attribute on RangeRadioCell (id=BookOfferingSelector_Cell) at RateBookMergePopup.pcf: line 321, column 66
    function value_121 () : gw.rating.rtm.NullableRadioValueWrapper {
      return RateBookMerge.RadioCellWrapperMap[RateBook#BookOffering.PropertyInfo.Name]
    }
    
    // 'value' attribute on RangeRadioCell (id=EffectiveDateSelector_Cell) at RateBookMergePopup.pcf: line 353, column 41
    function value_133 () : java.util.Date {
      return mergedRateBook.EffectiveDate
    }
    
    // 'value' attribute on RangeRadioCell (id=ExpirationDateSelector_Cell) at RateBookMergePopup.pcf: line 374, column 66
    function value_146 () : gw.rating.rtm.NullableRadioValueWrapper {
      return RateBookMerge.RadioCellWrapperMap[RateBook#ExpirationDate.PropertyInfo.Name]
    }
    
    // 'value' attribute on RangeRadioCell (id=RenewalEffectiveDatenSelector_Cell) at RateBookMergePopup.pcf: line 406, column 41
    function value_158 () : java.util.Date {
      return mergedRateBook.RenewalEffectiveDate
    }
    
    // 'value' attribute on TextCell (id=SelectorHeader_Cell) at RateBookMergePopup.pcf: line 127, column 162
    function value_23 () : java.lang.String {
      return DisplayKey.get("Web.Rating.RateBooks.Merge.PropertyHeader", book1.BookCode, book1.BookEdition, book2.BookCode, book2.BookEdition)
    }
    
    // 'value' attribute on RangeRadioCell (id=BookCodeSelector_Cell) at RateBookMergePopup.pcf: line 149, column 43
    function value_28 () : java.lang.String {
      return mergedRateBook.BookCode
    }
    
    // 'value' attribute on RangeRadioCell (id=BookNameSelector_Cell) at RateBookMergePopup.pcf: line 170, column 43
    function value_40 () : java.lang.String {
      return mergedRateBook.BookName
    }
    
    // 'value' attribute on RangeRadioCell (id=BookDescriptionSelector_Cell) at RateBookMergePopup.pcf: line 191, column 66
    function value_52 () : gw.rating.rtm.NullableRadioValueWrapper {
      return RateBookMerge.RadioCellWrapperMap[RateBook#BookDesc.PropertyInfo.Name]
    }
    
    // 'value' attribute on RangeRadioCell (id=CascadedLookupSelector_Cell) at RateBookMergePopup.pcf: line 214, column 44
    function value_63 () : java.lang.Boolean {
      return mergedRateBook.CascadedLookup
    }
    
    // 'value' attribute on RangeRadioCell (id=BookGroupSelector_Cell) at RateBookMergePopup.pcf: line 236, column 66
    function value_76 () : gw.rating.rtm.NullableRadioValueWrapper {
      return RateBookMerge.RadioCellWrapperMap[RateBook#BookGroup.PropertyInfo.Name]
    }
    
    // 'value' attribute on RangeRadioCell (id=UWCompanySelector_Cell) at RateBookMergePopup.pcf: line 257, column 66
    function value_87 () : gw.rating.rtm.NullableRadioValueWrapper {
      return RateBookMerge.RadioCellWrapperMap[RateBook#UWCompany.PropertyInfo.Name]
    }
    
    // 'value' attribute on RangeRadioCell (id=BookJurisdictionSelector_Cell) at RateBookMergePopup.pcf: line 278, column 66
    function value_98 () : gw.rating.rtm.NullableRadioValueWrapper {
      return RateBookMerge.RadioCellWrapperMap[RateBook#BookJurisdiction.PropertyInfo.Name]
    }
    
    // 'valueRange' attribute on RangeRadioCell (id=BookJurisdictionSelector_Cell) at RateBookMergePopup.pcf: line 278, column 66
    function verifyValueRangeIsAllowedType_101 ($$arg :  gw.rating.rtm.NullableRadioValueWrapper[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeRadioCell (id=BookJurisdictionSelector_Cell) at RateBookMergePopup.pcf: line 278, column 66
    function verifyValueRangeIsAllowedType_101 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeRadioCell (id=PolicyLineSelector_Cell) at RateBookMergePopup.pcf: line 300, column 66
    function verifyValueRangeIsAllowedType_113 ($$arg :  gw.rating.rtm.NullableRadioValueWrapper[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeRadioCell (id=PolicyLineSelector_Cell) at RateBookMergePopup.pcf: line 300, column 66
    function verifyValueRangeIsAllowedType_113 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeRadioCell (id=BookOfferingSelector_Cell) at RateBookMergePopup.pcf: line 321, column 66
    function verifyValueRangeIsAllowedType_124 ($$arg :  gw.rating.rtm.NullableRadioValueWrapper[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeRadioCell (id=BookOfferingSelector_Cell) at RateBookMergePopup.pcf: line 321, column 66
    function verifyValueRangeIsAllowedType_124 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeRadioCell (id=EffectiveDateSelector_Cell) at RateBookMergePopup.pcf: line 353, column 41
    function verifyValueRangeIsAllowedType_138 ($$arg :  java.util.Date[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeRadioCell (id=EffectiveDateSelector_Cell) at RateBookMergePopup.pcf: line 353, column 41
    function verifyValueRangeIsAllowedType_138 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeRadioCell (id=ExpirationDateSelector_Cell) at RateBookMergePopup.pcf: line 374, column 66
    function verifyValueRangeIsAllowedType_149 ($$arg :  gw.rating.rtm.NullableRadioValueWrapper[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeRadioCell (id=ExpirationDateSelector_Cell) at RateBookMergePopup.pcf: line 374, column 66
    function verifyValueRangeIsAllowedType_149 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeRadioCell (id=RenewalEffectiveDatenSelector_Cell) at RateBookMergePopup.pcf: line 406, column 41
    function verifyValueRangeIsAllowedType_163 ($$arg :  java.util.Date[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeRadioCell (id=RenewalEffectiveDatenSelector_Cell) at RateBookMergePopup.pcf: line 406, column 41
    function verifyValueRangeIsAllowedType_163 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeRadioCell (id=BookCodeSelector_Cell) at RateBookMergePopup.pcf: line 149, column 43
    function verifyValueRangeIsAllowedType_32 ($$arg :  java.lang.String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeRadioCell (id=BookCodeSelector_Cell) at RateBookMergePopup.pcf: line 149, column 43
    function verifyValueRangeIsAllowedType_32 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeRadioCell (id=BookNameSelector_Cell) at RateBookMergePopup.pcf: line 170, column 43
    function verifyValueRangeIsAllowedType_44 ($$arg :  java.lang.String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeRadioCell (id=BookNameSelector_Cell) at RateBookMergePopup.pcf: line 170, column 43
    function verifyValueRangeIsAllowedType_44 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeRadioCell (id=BookDescriptionSelector_Cell) at RateBookMergePopup.pcf: line 191, column 66
    function verifyValueRangeIsAllowedType_55 ($$arg :  gw.rating.rtm.NullableRadioValueWrapper[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeRadioCell (id=BookDescriptionSelector_Cell) at RateBookMergePopup.pcf: line 191, column 66
    function verifyValueRangeIsAllowedType_55 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeRadioCell (id=CascadedLookupSelector_Cell) at RateBookMergePopup.pcf: line 214, column 44
    function verifyValueRangeIsAllowedType_68 ($$arg :  java.lang.Boolean[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeRadioCell (id=CascadedLookupSelector_Cell) at RateBookMergePopup.pcf: line 214, column 44
    function verifyValueRangeIsAllowedType_68 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeRadioCell (id=BookGroupSelector_Cell) at RateBookMergePopup.pcf: line 236, column 66
    function verifyValueRangeIsAllowedType_79 ($$arg :  gw.rating.rtm.NullableRadioValueWrapper[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeRadioCell (id=BookGroupSelector_Cell) at RateBookMergePopup.pcf: line 236, column 66
    function verifyValueRangeIsAllowedType_79 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeRadioCell (id=UWCompanySelector_Cell) at RateBookMergePopup.pcf: line 257, column 66
    function verifyValueRangeIsAllowedType_90 ($$arg :  gw.rating.rtm.NullableRadioValueWrapper[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeRadioCell (id=UWCompanySelector_Cell) at RateBookMergePopup.pcf: line 257, column 66
    function verifyValueRangeIsAllowedType_90 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeRadioCell (id=BookJurisdictionSelector_Cell) at RateBookMergePopup.pcf: line 278, column 66
    function verifyValueRange_102 () : void {
      var __valueRangeArg = JursidictionWrapper
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_101(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeRadioCell (id=PolicyLineSelector_Cell) at RateBookMergePopup.pcf: line 300, column 66
    function verifyValueRange_114 () : void {
      var __valueRangeArg = PolicyLineWrapper
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_113(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeRadioCell (id=BookOfferingSelector_Cell) at RateBookMergePopup.pcf: line 321, column 66
    function verifyValueRange_125 () : void {
      var __valueRangeArg = OfferingWrapper
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_124(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeRadioCell (id=EffectiveDateSelector_Cell) at RateBookMergePopup.pcf: line 353, column 41
    function verifyValueRange_139 () : void {
      var __valueRangeArg = (book1.EffectiveDate == book2.EffectiveDate)?{book1.EffectiveDate}:{book1.EffectiveDate, book2.EffectiveDate}
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_138(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeRadioCell (id=ExpirationDateSelector_Cell) at RateBookMergePopup.pcf: line 374, column 66
    function verifyValueRange_150 () : void {
      var __valueRangeArg = BeforeDateWrapper
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_149(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeRadioCell (id=RenewalEffectiveDatenSelector_Cell) at RateBookMergePopup.pcf: line 406, column 41
    function verifyValueRange_164 () : void {
      var __valueRangeArg = (book1.RenewalEffectiveDate == book2.RenewalEffectiveDate)?{book1.RenewalEffectiveDate}:{book1.RenewalEffectiveDate, book2.RenewalEffectiveDate}
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_163(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeRadioCell (id=BookCodeSelector_Cell) at RateBookMergePopup.pcf: line 149, column 43
    function verifyValueRange_33 () : void {
      var __valueRangeArg = (book1.BookCode == book2.BookCode)?{book1.BookCode}:{book1.BookCode, book2.BookCode}
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_32(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeRadioCell (id=BookNameSelector_Cell) at RateBookMergePopup.pcf: line 170, column 43
    function verifyValueRange_45 () : void {
      var __valueRangeArg = (book1.BookName == book2.BookName)?{book1.BookName}:{book1.BookName, book2.BookName}
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_44(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeRadioCell (id=BookDescriptionSelector_Cell) at RateBookMergePopup.pcf: line 191, column 66
    function verifyValueRange_56 () : void {
      var __valueRangeArg = DescriptionWrapper
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_55(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeRadioCell (id=CascadedLookupSelector_Cell) at RateBookMergePopup.pcf: line 214, column 44
    function verifyValueRange_69 () : void {
      var __valueRangeArg = (book1.CascadedLookup == book2.CascadedLookup)?{book1.CascadedLookup}:{book1.CascadedLookup, book2.CascadedLookup}
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_68(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeRadioCell (id=BookGroupSelector_Cell) at RateBookMergePopup.pcf: line 236, column 66
    function verifyValueRange_80 () : void {
      var __valueRangeArg = BookGroupWrapper
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_79(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeRadioCell (id=UWCompanySelector_Cell) at RateBookMergePopup.pcf: line 257, column 66
    function verifyValueRange_91 () : void {
      var __valueRangeArg = UWCompanyWrapper
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_90(__valueRangeArg)
    }
    
    // 'visible' attribute on Row at RateBookMergePopup.pcf: line 260, column 87
    function visible_105 () : java.lang.Boolean {
      return showAllRows or (book1.BookJurisdiction != book2.BookJurisdiction)
    }
    
    // 'visible' attribute on Row at RateBookMergePopup.pcf: line 281, column 75
    function visible_117 () : java.lang.Boolean {
      return showAllRows or (book1.PolicyLine != book2.PolicyLine)
    }
    
    // 'visible' attribute on Row at RateBookMergePopup.pcf: line 303, column 79
    function visible_128 () : java.lang.Boolean {
      return showAllRows or (book1.BookOffering != book2.BookOffering)
    }
    
    // 'visible' attribute on Row at RateBookMergePopup.pcf: line 324, column 131
    function visible_129 () : java.lang.Boolean {
      return showAllRows or (book1.EffectiveDate != book2.EffectiveDate) or (book1.ExpirationDate != book2.ExpirationDate)
    }
    
    // 'visible' attribute on Row at RateBookMergePopup.pcf: line 334, column 81
    function visible_142 () : java.lang.Boolean {
      return showAllRows or (book1.EffectiveDate != book2.EffectiveDate)
    }
    
    // 'visible' attribute on Row at RateBookMergePopup.pcf: line 356, column 83
    function visible_153 () : java.lang.Boolean {
      return showAllRows or (book1.ExpirationDate != book2.ExpirationDate)
    }
    
    // 'visible' attribute on Row at RateBookMergePopup.pcf: line 377, column 95
    function visible_154 () : java.lang.Boolean {
      return showAllRows or (book1.RenewalEffectiveDate != book2.RenewalEffectiveDate)
    }
    
    // 'visible' attribute on Row at RateBookMergePopup.pcf: line 130, column 71
    function visible_36 () : java.lang.Boolean {
      return showAllRows or (book1.BookCode != book2.BookCode)
    }
    
    // 'visible' attribute on Row at RateBookMergePopup.pcf: line 152, column 71
    function visible_48 () : java.lang.Boolean {
      return showAllRows or (book1.BookName != book2.BookName)
    }
    
    // 'visible' attribute on Row at RateBookMergePopup.pcf: line 173, column 71
    function visible_59 () : java.lang.Boolean {
      return showAllRows or (book1.BookDesc != book2.BookDesc)
    }
    
    // 'visible' attribute on Row at RateBookMergePopup.pcf: line 194, column 83
    function visible_72 () : java.lang.Boolean {
      return showAllRows or (book1.CascadedLookup != book2.CascadedLookup)
    }
    
    // 'visible' attribute on Row at RateBookMergePopup.pcf: line 217, column 73
    function visible_83 () : java.lang.Boolean {
      return showAllRows or (book1.BookGroup != book2.BookGroup)
    }
    
    // 'visible' attribute on Row at RateBookMergePopup.pcf: line 239, column 73
    function visible_94 () : java.lang.Boolean {
      return showAllRows or (book1.UWCompany != book2.UWCompany)
    }
    
    property get BeforeDateWrapper () : java.util.List {
      return getVariableValue("BeforeDateWrapper", 1) as java.util.List
    }
    
    property set BeforeDateWrapper ($arg :  java.util.List) {
      setVariableValue("BeforeDateWrapper", 1, $arg)
    }
    
    property get BookGroupWrapper () : java.util.List {
      return getVariableValue("BookGroupWrapper", 1) as java.util.List
    }
    
    property set BookGroupWrapper ($arg :  java.util.List) {
      setVariableValue("BookGroupWrapper", 1, $arg)
    }
    
    property get DescriptionWrapper () : java.util.List {
      return getVariableValue("DescriptionWrapper", 1) as java.util.List
    }
    
    property set DescriptionWrapper ($arg :  java.util.List) {
      setVariableValue("DescriptionWrapper", 1, $arg)
    }
    
    property get JursidictionWrapper () : java.util.List {
      return getVariableValue("JursidictionWrapper", 1) as java.util.List
    }
    
    property set JursidictionWrapper ($arg :  java.util.List) {
      setVariableValue("JursidictionWrapper", 1, $arg)
    }
    
    property get OfferingWrapper () : java.util.List {
      return getVariableValue("OfferingWrapper", 1) as java.util.List
    }
    
    property set OfferingWrapper ($arg :  java.util.List) {
      setVariableValue("OfferingWrapper", 1, $arg)
    }
    
    property get PolicyLineWrapper () : java.util.List {
      return getVariableValue("PolicyLineWrapper", 1) as java.util.List
    }
    
    property set PolicyLineWrapper ($arg :  java.util.List) {
      setVariableValue("PolicyLineWrapper", 1, $arg)
    }
    
    property get UWCompanyWrapper () : java.util.List {
      return getVariableValue("UWCompanyWrapper", 1) as java.util.List
    }
    
    property set UWCompanyWrapper ($arg :  java.util.List) {
      setVariableValue("UWCompanyWrapper", 1, $arg)
    }
    
    
  }
  
  
}