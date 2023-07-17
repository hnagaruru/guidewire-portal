package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/rating/RateBookDetailsScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RateBookDetailsScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateBookDetailsScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends RateBookDetailsScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Name_Cell) at RateBookDetailsScreen.pcf: line 414, column 45
    function action_183 () : void {
      RateRoutineDetail.go(rateRoutine, rateBook)
    }
    
    // 'action' attribute on TextCell (id=Name_Cell) at RateBookDetailsScreen.pcf: line 414, column 45
    function action_dest_184 () : pcf.api.Destination {
      return pcf.RateRoutineDetail.createDestination(rateRoutine, rateBook)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at RateBookDetailsScreen.pcf: line 414, column 45
    function valueRoot_186 () : java.lang.Object {
      return rateRoutine
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at RateBookDetailsScreen.pcf: line 414, column 45
    function value_185 () : java.lang.String {
      return rateRoutine.Name
    }
    
    // 'value' attribute on TextCell (id=Code_Cell) at RateBookDetailsScreen.pcf: line 418, column 45
    function value_188 () : java.lang.String {
      return rateRoutine.Code
    }
    
    // 'value' attribute on TextCell (id=Jurisdiction_Cell) at RateBookDetailsScreen.pcf: line 423, column 53
    function value_191 () : typekey.Jurisdiction {
      return rateRoutine.Jurisdiction
    }
    
    // 'value' attribute on TextCell (id=Version_Cell) at RateBookDetailsScreen.pcf: line 429, column 50
    function value_194 () : java.lang.Integer {
      return rateRoutine.Version
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at RateBookDetailsScreen.pcf: line 433, column 52
    function value_197 () : java.lang.String {
      return rateRoutine.Description
    }
    
    property get rateRoutine () : entity.CalcRoutineDefinition {
      return getIteratedValue(1) as entity.CalcRoutineDefinition
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateBookDetailsScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends RateBookDetailsScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Name_Cell) at RateBookDetailsScreen.pcf: line 368, column 67
    function action_157 () : void {
      RateTableFactorList.go(gw.rating.rtm.domain.RateTableFactorListController.createDatabaseBasedController(), includedRateTable, rateBook)
    }
    
    // 'action' attribute on TextCell (id=Name_Cell) at RateBookDetailsScreen.pcf: line 368, column 67
    function action_dest_158 () : pcf.api.Destination {
      return pcf.RateTableFactorList.createDestination(gw.rating.rtm.domain.RateTableFactorListController.createDatabaseBasedController(), includedRateTable, rateBook)
    }
    
    // 'def' attribute on ModalCellRef (id=Strategy) at RateBookDetailsScreen.pcf: line 386, column 94
    function def_onEnter_170 (def :  pcf.RateTableStrategyCell_default) : void {
      def.onEnter(includedRateTable)
    }
    
    // 'def' attribute on ModalCellRef (id=Strategy) at RateBookDetailsScreen.pcf: line 386, column 94
    function def_onEnter_172 (def :  pcf.RateTableStrategyCell_owning) : void {
      def.onEnter(includedRateTable)
    }
    
    // 'def' attribute on ModalCellRef (id=Strategy) at RateBookDetailsScreen.pcf: line 386, column 94
    function def_refreshVariables_171 (def :  pcf.RateTableStrategyCell_default) : void {
      def.refreshVariables(includedRateTable)
    }
    
    // 'def' attribute on ModalCellRef (id=Strategy) at RateBookDetailsScreen.pcf: line 386, column 94
    function def_refreshVariables_173 (def :  pcf.RateTableStrategyCell_owning) : void {
      def.refreshVariables(includedRateTable)
    }
    
    // 'mode' attribute on ModalCellRef (id=Strategy) at RateBookDetailsScreen.pcf: line 386, column 94
    function mode_174 () : java.lang.Object {
      return includedRateTable.Owned ? "owning" : "default"
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at RateBookDetailsScreen.pcf: line 368, column 67
    function valueRoot_160 () : java.lang.Object {
      return includedRateTable.Definition
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at RateBookDetailsScreen.pcf: line 368, column 67
    function value_159 () : java.lang.String {
      return includedRateTable.Definition.TableName
    }
    
    // 'value' attribute on TextCell (id=Code_Cell) at RateBookDetailsScreen.pcf: line 372, column 67
    function value_162 () : java.lang.String {
      return includedRateTable.Definition.TableCode
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at RateBookDetailsScreen.pcf: line 376, column 67
    function value_165 () : java.lang.String {
      return includedRateTable.Definition.TableDesc
    }
    
    // 'value' attribute on TextCell (id=Usage_Cell) at RateBookDetailsScreen.pcf: line 381, column 97
    function value_168 () : java.lang.String {
      return gw.rating.rtm.util.RatingUIUtil.getOwnershipLabel(includedRateTable)
    }
    
    property get includedRateTable () : entity.RateTable {
      return getIteratedValue(1) as entity.RateTable
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateBookDetailsScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RateBookDVExpressionsImpl extends RateBookDetailsScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'actionAvailable' attribute on AltUserInput (id=LastUpdatedBy_Input) at RateBookDetailsScreen.pcf: line 228, column 48
    function actionAvailable_91 () : java.lang.Boolean {
      return rateBook.UpdateUser != null
    }
    
    // 'action' attribute on Link (id=StorageIcon) at RateBookDetailsScreen.pcf: line 249, column 68
    function action_100 () : void {
      rateBookDVUI.makeRateTablesOwned()
    }
    
    // 'action' attribute on MenuItem (id=ExportToSpreadsheetItem) at RateBookDetailsScreen.pcf: line 127, column 99
    function action_28 () : void {
      exportType = RateBookExportType.TC_EXCEL; excelExportInProgress = true; exporter.start(rateBook, RateBookExportType.TC_EXCEL)
    }
    
    // 'action' attribute on MenuItem (id=ExportToXMLItem) at RateBookDetailsScreen.pcf: line 132, column 91
    function action_30 () : void {
      exportType = RateBookExportType.TC_XML; xmlExportInProgress = true;  exporter.start(rateBook, RateBookExportType.TC_XML)
    }
    
    // 'action' attribute on MenuItem (id=DownloadSpreadsheetItem) at RateBookDetailsScreen.pcf: line 165, column 195
    function action_54 () : void {
      exporter.downloadFile(rateBook.ExcelExportResultFromDB)
    }
    
    // 'action' attribute on MenuItem (id=DownloadXMLItem) at RateBookDetailsScreen.pcf: line 171, column 191
    function action_56 () : void {
      exporter.downloadFile(rateBook.XMLExportResultFromDB)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at RateBookDetailsScreen.pcf: line 228, column 48
    function action_87 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // 'action' attribute on AltUserInput (id=LastUpdatedBy_Input) at RateBookDetailsScreen.pcf: line 228, column 48
    function action_89 () : void {
      UserDetailPage.go(rateBook.UpdateUser)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at RateBookDetailsScreen.pcf: line 228, column 48
    function action_dest_88 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // 'action' attribute on AltUserInput (id=LastUpdatedBy_Input) at RateBookDetailsScreen.pcf: line 228, column 48
    function action_dest_90 () : pcf.api.Destination {
      return pcf.UserDetailPage.createDestination(rateBook.UpdateUser)
    }
    
    // 'available' attribute on MenuItem (id=ExportToXMLItem) at RateBookDetailsScreen.pcf: line 132, column 91
    function available_29 () : java.lang.Boolean {
      return !rateBook.isDraft()
    }
    
    // 'available' attribute on ButtonInput (id=ExportButton_Input) at RateBookDetailsScreen.pcf: line 123, column 81
    function available_31 () : java.lang.Boolean {
      return not rateBook.ExportLock
    }
    
    // 'editable' attribute on RangeInput (id=PolicyLine_Input) at RateBookDetailsScreen.pcf: line 263, column 48
    function editable_101 () : java.lang.Boolean {
      return rateBook.RateTables.IsEmpty
    }
    
    // 'initialValue' attribute on Variable at RateBookDetailsScreen.pcf: line 90, column 67
    function initialValue_22 () : gw.pcf.rating.ratebook.RateBookDVUIHelper {
      return new gw.pcf.rating.ratebook.RateBookDVUIHelper (rateBook)
    }
    
    // 'initialValue' attribute on Variable at RateBookDetailsScreen.pcf: line 95, column 42
    function initialValue_23 () : java.lang.String {
      return rateBookDVUI.AreRateTablesReferenced ? DisplayKey.get("Web.Rating.RateBooks.ContainsReferences") : DisplayKey.get("Web.Rating.RateBooks.SelfContained")
    }
    
    // 'initialValue' attribute on Variable at RateBookDetailsScreen.pcf: line 99, column 59
    function initialValue_24 () : gw.rating.rtm.RateBookBatchExport {
      return new gw.rating.rtm.RateBookBatchExport()
    }
    
    // 'initialValue' attribute on Variable at RateBookDetailsScreen.pcf: line 104, column 33
    function initialValue_25 () : boolean {
      return (rateBook.ExcelExportResultFromDB != null) ? rateBook.ExcelExportResultFromDB.CompletionPercentage != 100 : false
    }
    
    // 'initialValue' attribute on Variable at RateBookDetailsScreen.pcf: line 109, column 33
    function initialValue_26 () : boolean {
      return (rateBook.XMLExportResultFromDB != null) ? rateBook.XMLExportResultFromDB.CompletionPercentage != 100 : false
    }
    
    // 'initialValue' attribute on Variable at RateBookDetailsScreen.pcf: line 114, column 44
    function initialValue_27 () : RateBookExportType {
      return excelExportInProgress ? RateBookExportType.TC_EXCEL : (xmlExportInProgress ? RateBookExportType.TC_XML : null)
    }
    
    // 'label' attribute on DateInput (id=ExcelExportResultDateTimeStamp_Input) at RateBookDetailsScreen.pcf: line 146, column 107
    function label_40 () : java.lang.Object {
      return rateBookDetailsScreenUIHelper.getExportResultDateTimeStampLabel(RateBookExportType.TC_EXCEL)
    }
    
    // 'label' attribute on DateInput (id=XMLExportResultDateTimeStamp_Input) at RateBookDetailsScreen.pcf: line 153, column 105
    function label_47 () : java.lang.Object {
      return rateBookDetailsScreenUIHelper.getExportResultDateTimeStampLabel(RateBookExportType.TC_XML)
    }
    
    // 'label' attribute on DateInput (id=ActivationDate_Input) at RateBookDetailsScreen.pcf: line 222, column 58
    function label_82 () : java.lang.Object {
      return rateBookDVUI.StatusChangeDateLabel
    }
    
    // 'label' attribute on Link (id=StorageLabel) at RateBookDetailsScreen.pcf: line 241, column 45
    function label_98 () : java.lang.Object {
      return storageDetails
    }
    
    // 'onChange' attribute on PostOnChange at RateBookDetailsScreen.pcf: line 307, column 89
    function onChange_131 () : void {
      rateBookDVUI.possiblyAutoPopulateRenewalEffectiveDate()
    }
    
    // 'optionLabel' attribute on RangeInput (id=PolicyLine_Input) at RateBookDetailsScreen.pcf: line 263, column 48
    function optionLabel_104 (VALUE :  java.lang.String) : java.lang.String {
      return gw.rating.GenericRateBookFieldEnhancement.policyLineCodeToDescription(VALUE)
    }
    
    // 'optionLabel' attribute on RangeInput (id=Jurisdiction_Input) at RateBookDetailsScreen.pcf: line 274, column 91
    function optionLabel_112 (VALUE :  gw.util.Pair<java.lang.String, typekey.Jurisdiction>) : java.lang.String {
      return VALUE.First ?: DisplayKey.get("Web.Rating.Filter.Generic")
    }
    
    // 'optionLabel' attribute on RangeInput (id=UWCompany_Input) at RateBookDetailsScreen.pcf: line 283, column 87
    function optionLabel_119 (VALUE :  gw.util.Pair<java.lang.String, entity.UWCompany>) : java.lang.String {
      return VALUE.First ?: DisplayKey.get("Web.Rating.Filter.Generic")
    }
    
    // 'optionLabel' attribute on RangeInput (id=Offering_Input) at RateBookDetailsScreen.pcf: line 293, column 49
    function optionLabel_126 (VALUE :  java.lang.String) : java.lang.String {
      return gw.rating.GenericRateBookFieldEnhancement.offeringCodeToDescription(VALUE)
    }
    
    // 'percentage' attribute on ProgressInput (id=ExportProgressBar_Input) at RateBookDetailsScreen.pcf: line 139, column 75
    function percentage_36 () : java.lang.Double {
      return rateBookDetailsScreenUIHelper.progressBarPercentage(exportType)
    }
    
    // 'status' attribute on ProgressInput (id=ExportProgressBar_Input) at RateBookDetailsScreen.pcf: line 139, column 75
    function status_37 () : java.lang.String {
      return rateBookDetailsScreenUIHelper.progressBarStatus(exportType)
    }
    
    // 'validationExpression' attribute on DateInput (id=EffectiveDate_Input) at RateBookDetailsScreen.pcf: line 305, column 63
    function validationExpression_132 () : java.lang.Object {
      return rateBookDVUI.checkDateIsEarlierThanBefore(rateBookDVUI.RateBook.EffectiveDate)
    }
    
    // 'validationExpression' attribute on DateInput (id=ExpirationDate_Input) at RateBookDetailsScreen.pcf: line 314, column 64
    function validationExpression_137 () : java.lang.Object {
      return rateBookDVUI.checkBeforeOccursLaterThanPolicyEffectiveDateOrRenewalEffectiveDate()
    }
    
    // 'validationExpression' attribute on DateInput (id=RenewalEffectiveDate_Input) at RateBookDetailsScreen.pcf: line 328, column 71
    function validationExpression_142 () : java.lang.Object {
      return rateBookDVUI.checkDateIsEarlierThanBefore(rateBookDVUI.RateBook.RenewalEffectiveDate)
    }
    
    // 'valueRange' attribute on RangeInput (id=PolicyLine_Input) at RateBookDetailsScreen.pcf: line 263, column 48
    function valueRange_105 () : java.lang.Object {
      return gw.rating.rtm.util.ProductModelUtils.getAllPolicyLinesForSearch()
    }
    
    // 'valueRange' attribute on RangeInput (id=Jurisdiction_Input) at RateBookDetailsScreen.pcf: line 274, column 91
    function valueRange_113 () : java.lang.Object {
      return gw.rating.rtm.util.ProductModelUtils.getAllJurisdictionsForSearch()
    }
    
    // 'valueRange' attribute on RangeInput (id=UWCompany_Input) at RateBookDetailsScreen.pcf: line 283, column 87
    function valueRange_120 () : java.lang.Object {
      return gw.rating.rtm.util.ProductModelUtils.getAllUWCompaniesForSearch()
    }
    
    // 'valueRange' attribute on RangeInput (id=Offering_Input) at RateBookDetailsScreen.pcf: line 293, column 49
    function valueRange_127 () : java.lang.Object {
      return gw.rating.rtm.util.ProductModelUtils.getAllDisplayOfferingsFor(rateBook.PolicyLine)
    }
    
    // 'value' attribute on RangeInput (id=PolicyLine_Input) at RateBookDetailsScreen.pcf: line 263, column 48
    function valueRoot_103 () : java.lang.Object {
      return rateBookDVUI
    }
    
    // 'value' attribute on DateInput (id=EffectiveDate_Input) at RateBookDetailsScreen.pcf: line 305, column 63
    function valueRoot_134 () : java.lang.Object {
      return rateBookDVUI.RateBook
    }
    
    // 'value' attribute on DateInput (id=ExcelExportResultDateTimeStamp_Input) at RateBookDetailsScreen.pcf: line 146, column 107
    function valueRoot_42 () : java.lang.Object {
      return rateBook.ExcelExportResultFromDB
    }
    
    // 'value' attribute on DateInput (id=XMLExportResultDateTimeStamp_Input) at RateBookDetailsScreen.pcf: line 153, column 105
    function valueRoot_49 () : java.lang.Object {
      return rateBook.XMLExportResultFromDB
    }
    
    // 'value' attribute on TextInput (id=Code_Input) at RateBookDetailsScreen.pcf: line 181, column 46
    function valueRoot_60 () : java.lang.Object {
      return rateBook
    }
    
    // 'value' attribute on RangeInput (id=PolicyLine_Input) at RateBookDetailsScreen.pcf: line 263, column 48
    function value_102 () : java.lang.String {
      return rateBookDVUI.PolicyLineWrapper
    }
    
    // 'value' attribute on RangeInput (id=Jurisdiction_Input) at RateBookDetailsScreen.pcf: line 274, column 91
    function value_110 () : gw.util.Pair<java.lang.String, typekey.Jurisdiction> {
      return rateBookDVUI.BookJurisdictionWrapper
    }
    
    // 'value' attribute on RangeInput (id=UWCompany_Input) at RateBookDetailsScreen.pcf: line 283, column 87
    function value_117 () : gw.util.Pair<java.lang.String, entity.UWCompany> {
      return rateBookDVUI.UWCompanyWrapper
    }
    
    // 'value' attribute on RangeInput (id=Offering_Input) at RateBookDetailsScreen.pcf: line 293, column 49
    function value_124 () : java.lang.String {
      return rateBookDVUI.BookOfferingWrapper
    }
    
    // 'value' attribute on DateInput (id=EffectiveDate_Input) at RateBookDetailsScreen.pcf: line 305, column 63
    function value_133 () : java.util.Date {
      return rateBookDVUI.RateBook.EffectiveDate
    }
    
    // 'value' attribute on DateInput (id=ExpirationDate_Input) at RateBookDetailsScreen.pcf: line 314, column 64
    function value_138 () : java.util.Date {
      return rateBookDVUI.RateBook.ExpirationDate
    }
    
    // 'value' attribute on DateInput (id=RenewalEffectiveDate_Input) at RateBookDetailsScreen.pcf: line 328, column 71
    function value_143 () : java.util.Date {
      return rateBookDVUI.RateBook.RenewalEffectiveDate
    }
    
    // 'value' attribute on DateInput (id=RenewalExpirationDate_Input) at RateBookDetailsScreen.pcf: line 335, column 52
    function value_147 () : java.util.Date {
      return rateBook.ExpirationDate
    }
    
    // 'value' attribute on DateInput (id=ExcelExportResultDateTimeStamp_Input) at RateBookDetailsScreen.pcf: line 146, column 107
    function value_41 () : java.util.Date {
      return rateBook.ExcelExportResultFromDB.UpdateTime
    }
    
    // 'value' attribute on DateInput (id=XMLExportResultDateTimeStamp_Input) at RateBookDetailsScreen.pcf: line 153, column 105
    function value_48 () : java.util.Date {
      return rateBook.XMLExportResultFromDB.UpdateTime
    }
    
    // 'value' attribute on TextInput (id=Code_Input) at RateBookDetailsScreen.pcf: line 181, column 46
    function value_59 () : java.lang.String {
      return rateBook.BookCode
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at RateBookDetailsScreen.pcf: line 188, column 57
    function value_63 () : java.lang.String {
      return rateBook.BookName
    }
    
    // 'value' attribute on TextInput (id=Edition_Input) at RateBookDetailsScreen.pcf: line 194, column 49
    function value_67 () : java.lang.String {
      return rateBook.BookEdition
    }
    
    // 'value' attribute on TextInput (id=Description_Input) at RateBookDetailsScreen.pcf: line 199, column 46
    function value_70 () : java.lang.String {
      return rateBook.BookDesc
    }
    
    // 'value' attribute on TypeKeyInput (id=Status_Input) at RateBookDetailsScreen.pcf: line 204, column 55
    function value_73 () : typekey.RateBookStatus {
      return rateBook.Status
    }
    
    // 'value' attribute on CheckBoxInput (id=CascadedLookup_Input) at RateBookDetailsScreen.pcf: line 210, column 52
    function value_76 () : java.lang.Boolean {
      return rateBook.CascadedLookup
    }
    
    // 'value' attribute on TextInput (id=Group_Input) at RateBookDetailsScreen.pcf: line 216, column 47
    function value_79 () : java.lang.String {
      return rateBook.BookGroup
    }
    
    // 'value' attribute on DateInput (id=ActivationDate_Input) at RateBookDetailsScreen.pcf: line 222, column 58
    function value_83 () : java.util.Date {
      return rateBook.LastStatusChangeDate
    }
    
    // 'value' attribute on AltUserInput (id=LastUpdatedBy_Input) at RateBookDetailsScreen.pcf: line 228, column 48
    function value_92 () : entity.User {
      return rateBook.UpdateUser
    }
    
    // 'value' attribute on DateInput (id=LastUpdateTime_Input) at RateBookDetailsScreen.pcf: line 234, column 47
    function value_95 () : java.util.Date {
      return rateBook.UpdateTime
    }
    
    // 'valueRange' attribute on RangeInput (id=PolicyLine_Input) at RateBookDetailsScreen.pcf: line 263, column 48
    function verifyValueRangeIsAllowedType_106 ($$arg :  java.lang.String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=PolicyLine_Input) at RateBookDetailsScreen.pcf: line 263, column 48
    function verifyValueRangeIsAllowedType_106 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Jurisdiction_Input) at RateBookDetailsScreen.pcf: line 274, column 91
    function verifyValueRangeIsAllowedType_114 ($$arg :  gw.util.Pair<java.lang.String, typekey.Jurisdiction>[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Jurisdiction_Input) at RateBookDetailsScreen.pcf: line 274, column 91
    function verifyValueRangeIsAllowedType_114 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=UWCompany_Input) at RateBookDetailsScreen.pcf: line 283, column 87
    function verifyValueRangeIsAllowedType_121 ($$arg :  gw.util.Pair<java.lang.String, entity.UWCompany>[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=UWCompany_Input) at RateBookDetailsScreen.pcf: line 283, column 87
    function verifyValueRangeIsAllowedType_121 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Offering_Input) at RateBookDetailsScreen.pcf: line 293, column 49
    function verifyValueRangeIsAllowedType_128 ($$arg :  java.lang.String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Offering_Input) at RateBookDetailsScreen.pcf: line 293, column 49
    function verifyValueRangeIsAllowedType_128 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=PolicyLine_Input) at RateBookDetailsScreen.pcf: line 263, column 48
    function verifyValueRange_107 () : void {
      var __valueRangeArg = gw.rating.rtm.util.ProductModelUtils.getAllPolicyLinesForSearch()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_106(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=Jurisdiction_Input) at RateBookDetailsScreen.pcf: line 274, column 91
    function verifyValueRange_115 () : void {
      var __valueRangeArg = gw.rating.rtm.util.ProductModelUtils.getAllJurisdictionsForSearch()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_114(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=UWCompany_Input) at RateBookDetailsScreen.pcf: line 283, column 87
    function verifyValueRange_122 () : void {
      var __valueRangeArg = gw.rating.rtm.util.ProductModelUtils.getAllUWCompaniesForSearch()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_121(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=Offering_Input) at RateBookDetailsScreen.pcf: line 293, column 49
    function verifyValueRange_129 () : void {
      var __valueRangeArg = gw.rating.rtm.util.ProductModelUtils.getAllDisplayOfferingsFor(rateBook.PolicyLine)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_128(__valueRangeArg)
    }
    
    // 'visible' attribute on ButtonInput (id=ExportButton_Input) at RateBookDetailsScreen.pcf: line 123, column 81
    function visible_32 () : java.lang.Boolean {
      return not (excelExportInProgress and xmlExportInProgress)
    }
    
    // 'visible' attribute on ProgressInput (id=ExportProgressBar_Input) at RateBookDetailsScreen.pcf: line 139, column 75
    function visible_35 () : java.lang.Boolean {
      return excelExportInProgress or xmlExportInProgress
    }
    
    // 'visible' attribute on DateInput (id=ExcelExportResultDateTimeStamp_Input) at RateBookDetailsScreen.pcf: line 146, column 107
    function visible_39 () : java.lang.Boolean {
      return rateBookDetailsScreenUIHelper.isExportCompleted(RateBookExportType.TC_EXCEL)
    }
    
    // 'visible' attribute on DateInput (id=XMLExportResultDateTimeStamp_Input) at RateBookDetailsScreen.pcf: line 153, column 105
    function visible_46 () : java.lang.Boolean {
      return rateBookDetailsScreenUIHelper.isExportCompleted(RateBookExportType.TC_XML)
    }
    
    // 'visible' attribute on MenuItem (id=DownloadSpreadsheetItem) at RateBookDetailsScreen.pcf: line 165, column 195
    function visible_53 () : java.lang.Boolean {
      return rateBookDetailsScreenUIHelper.isExportCompleted(RateBookExportType.TC_EXCEL) && !rateBookDetailsScreenUIHelper.isExportFailed(RateBookExportType.TC_EXCEL)
    }
    
    // 'visible' attribute on MenuItem (id=DownloadXMLItem) at RateBookDetailsScreen.pcf: line 171, column 191
    function visible_55 () : java.lang.Boolean {
      return rateBookDetailsScreenUIHelper.isExportCompleted(RateBookExportType.TC_XML) && !rateBookDetailsScreenUIHelper.isExportFailed(RateBookExportType.TC_XML)
    }
    
    // 'visible' attribute on ButtonInput (id=DownloadButton_Input) at RateBookDetailsScreen.pcf: line 159, column 112
    function visible_57 () : java.lang.Boolean {
      return rateBook.ExcelExportResultFromDB != null or rateBook.XMLExportResultFromDB != null
    }
    
    // 'visible' attribute on TextInput (id=Name_Input) at RateBookDetailsScreen.pcf: line 188, column 57
    function visible_62 () : java.lang.Boolean {
      return CurrentLocation.InEditMode
    }
    
    // 'visible' attribute on Link (id=StorageIcon) at RateBookDetailsScreen.pcf: line 249, column 68
    function visible_99 () : java.lang.Boolean {
      return rateBookDVUI.displayMakeOwnedIcon()
    }
    
    property get excelExportInProgress () : boolean {
      return getVariableValue("excelExportInProgress", 1) as java.lang.Boolean
    }
    
    property set excelExportInProgress ($arg :  boolean) {
      setVariableValue("excelExportInProgress", 1, $arg)
    }
    
    property get exportType () : RateBookExportType {
      return getVariableValue("exportType", 1) as RateBookExportType
    }
    
    property set exportType ($arg :  RateBookExportType) {
      setVariableValue("exportType", 1, $arg)
    }
    
    property get exporter () : gw.rating.rtm.RateBookBatchExport {
      return getVariableValue("exporter", 1) as gw.rating.rtm.RateBookBatchExport
    }
    
    property set exporter ($arg :  gw.rating.rtm.RateBookBatchExport) {
      setVariableValue("exporter", 1, $arg)
    }
    
    property get rateBookDVUI () : gw.pcf.rating.ratebook.RateBookDVUIHelper {
      return getVariableValue("rateBookDVUI", 1) as gw.pcf.rating.ratebook.RateBookDVUIHelper
    }
    
    property set rateBookDVUI ($arg :  gw.pcf.rating.ratebook.RateBookDVUIHelper) {
      setVariableValue("rateBookDVUI", 1, $arg)
    }
    
    property get storageDetails () : java.lang.String {
      return getVariableValue("storageDetails", 1) as java.lang.String
    }
    
    property set storageDetails ($arg :  java.lang.String) {
      setVariableValue("storageDetails", 1, $arg)
    }
    
    property get xmlExportInProgress () : boolean {
      return getVariableValue("xmlExportInProgress", 1) as java.lang.Boolean
    }
    
    property set xmlExportInProgress ($arg :  boolean) {
      setVariableValue("xmlExportInProgress", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateBookDetailsScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RateBookDetailsScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=ApproveButton) at RateBookDetailsScreen.pcf: line 51, column 98
    function action_11 () : void {
      rateBookDetailsScreenUIHelper.processInTx(\ rb -> rb.approve(rateBookUIValidator))
    }
    
    // 'action' attribute on ToolbarButton (id=ReturnToDraftButton) at RateBookDetailsScreen.pcf: line 56, column 95
    function action_13 () : void {
      rateBookDetailsScreenUIHelper.processInTx(\ rb -> rb.returnToDraft())
    }
    
    // 'action' attribute on ToolbarButton (id=MoveToProductionButton) at RateBookDetailsScreen.pcf: line 62, column 99
    function action_15 () : void {
      rateBookDetailsScreenUIHelper.processInTx(\ rb -> rb.activate(rateBookUIValidator))
    }
    
    // 'action' attribute on ToolbarButton (id=VersionRateBookButton) at RateBookDetailsScreen.pcf: line 68, column 94
    function action_17 () : void {
      VersionRateBook.go(rateBook)
    }
    
    // 'action' attribute on ToolbarButton (id=EditButton) at RateBookDetailsScreen.pcf: line 35, column 68
    function action_4 () : void {
      EditRateBook.go(rateBook, currentCard)
    }
    
    // 'action' attribute on ToolbarButton (id=DeleteButton) at RateBookDetailsScreen.pcf: line 41, column 68
    function action_7 () : void {
      rateBookDetailsScreenUIHelper.removeCurrentBook()
    }
    
    // 'action' attribute on ToolbarButton (id=SubmitForApprovalButton) at RateBookDetailsScreen.pcf: line 46, column 93
    function action_9 () : void {
      rateBookDetailsScreenUIHelper.processInTx(\ rb -> rb.stage(rateBookUIValidator))
    }
    
    // 'action' attribute on ToolbarButton (id=VersionRateBookButton) at RateBookDetailsScreen.pcf: line 68, column 94
    function action_dest_18 () : pcf.api.Destination {
      return pcf.VersionRateBook.createDestination(rateBook)
    }
    
    // 'action' attribute on ToolbarButton (id=EditButton) at RateBookDetailsScreen.pcf: line 35, column 68
    function action_dest_5 () : pcf.api.Destination {
      return pcf.EditRateBook.createDestination(rateBook, currentCard)
    }
    
    // 'def' attribute on PanelRef at RateBookDetailsScreen.pcf: line 343, column 68
    function def_onEnter_151 (def :  pcf.LocalizedValuesDV) : void {
      def.onEnter(rateBook, { "BookName", "BookDesc"}, { DisplayKey.get("Web.Rating.RateBooks.L10nDV.Name"), DisplayKey.get("Web.Rating.RateBooks.L10nDV.Description") })
    }
    
    // 'def' attribute on PanelRef at RateBookDetailsScreen.pcf: line 343, column 68
    function def_refreshVariables_152 (def :  pcf.LocalizedValuesDV) : void {
      def.refreshVariables(rateBook, { "BookName", "BookDesc"}, { DisplayKey.get("Web.Rating.RateBooks.L10nDV.Name"), DisplayKey.get("Web.Rating.RateBooks.L10nDV.Description") })
    }
    
    // 'editable' attribute on PanelRef at RateBookDetailsScreen.pcf: line 343, column 68
    function editable_150 () : java.lang.Boolean {
      return rateBook.Status == RateBookStatus.TC_DRAFT
    }
    
    // 'editable' attribute on Screen (id=RateBookDetailsScreen) at RateBookDetailsScreen.pcf: line 7, column 32
    function editable_203 () : java.lang.Boolean {
      return rateBook.isDraft()
    }
    
    // 'initialValue' attribute on Variable at RateBookDetailsScreen.pcf: line 20, column 68
    function initialValue_0 () : gw.pcf.rating.ratebook.RateBookDetailsScreenUIHelper {
      return new gw.pcf.rating.ratebook.RateBookDetailsScreenUIHelper (rateBook)
    }
    
    // 'initialValue' attribute on Variable at RateBookDetailsScreen.pcf: line 24, column 67
    function initialValue_1 () : gw.rating.rtm.util.RatingUIUtil.RateBookCardTabType {
      return gw.rating.rtm.util.RatingUIUtil.RateBookCardTabType.TableCard
    }
    
    // 'initialValue' attribute on Variable at RateBookDetailsScreen.pcf: line 28, column 49
    function initialValue_2 () : gw.rating.rtm.RateBookUIValidator {
      return new gw.rating.rtm.RateBookUIValidator()
    }
    
    // 'label' attribute on AlertBar (id=RateBookWarningsMessage) at RateBookDetailsScreen.pcf: line 79, column 65
    function label_21 () : java.lang.Object {
      return rateBookDetailsScreenUIHelper.getWarningMessages(warnings)
    }
    
    // 'onSelect' attribute on Card (id=IncludedRateTablesCard) at RateBookDetailsScreen.pcf: line 352, column 90
    function onSelect_176 () : void {
      currentCard = gw.rating.rtm.util.RatingUIUtil.RateBookCardTabType.TableCard
    }
    
    // 'onSelect' attribute on Card (id=IncludedRateRoutines) at RateBookDetailsScreen.pcf: line 396, column 92
    function onSelect_201 () : void {
      currentCard = gw.rating.rtm.util.RatingUIUtil.RateBookCardTabType.RoutineCard
    }
    
    // 'selectOnEnter' attribute on Card (id=IncludedRateTablesCard) at RateBookDetailsScreen.pcf: line 352, column 90
    function selectOnEnter_177 () : java.lang.Boolean {
      return currentCard == gw.rating.rtm.util.RatingUIUtil.RateBookCardTabType.TableCard
    }
    
    // 'selectOnEnter' attribute on Card (id=IncludedRateRoutines) at RateBookDetailsScreen.pcf: line 396, column 92
    function selectOnEnter_202 () : java.lang.Boolean {
      return currentCard == gw.rating.rtm.util.RatingUIUtil.RateBookCardTabType.RoutineCard
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at RateBookDetailsScreen.pcf: line 368, column 67
    function sortValue_153 (includedRateTable :  entity.RateTable) : java.lang.Object {
      return includedRateTable.Definition.TableName
    }
    
    // 'value' attribute on TextCell (id=Code_Cell) at RateBookDetailsScreen.pcf: line 372, column 67
    function sortValue_154 (includedRateTable :  entity.RateTable) : java.lang.Object {
      return includedRateTable.Definition.TableCode
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at RateBookDetailsScreen.pcf: line 376, column 67
    function sortValue_155 (includedRateTable :  entity.RateTable) : java.lang.Object {
      return includedRateTable.Definition.TableDesc
    }
    
    // 'value' attribute on TextCell (id=Usage_Cell) at RateBookDetailsScreen.pcf: line 381, column 97
    function sortValue_156 (includedRateTable :  entity.RateTable) : java.lang.Object {
      return gw.rating.rtm.util.RatingUIUtil.getOwnershipLabel(includedRateTable)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at RateBookDetailsScreen.pcf: line 414, column 45
    function sortValue_178 (rateRoutine :  entity.CalcRoutineDefinition) : java.lang.Object {
      return rateRoutine.Name
    }
    
    // 'value' attribute on TextCell (id=Code_Cell) at RateBookDetailsScreen.pcf: line 418, column 45
    function sortValue_179 (rateRoutine :  entity.CalcRoutineDefinition) : java.lang.Object {
      return rateRoutine.Code
    }
    
    // 'value' attribute on TextCell (id=Jurisdiction_Cell) at RateBookDetailsScreen.pcf: line 423, column 53
    function sortValue_180 (rateRoutine :  entity.CalcRoutineDefinition) : java.lang.Object {
      return rateRoutine.Jurisdiction
    }
    
    // 'value' attribute on TextCell (id=Version_Cell) at RateBookDetailsScreen.pcf: line 429, column 50
    function sortValue_181 (rateRoutine :  entity.CalcRoutineDefinition) : java.lang.Object {
      return rateRoutine.Version
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at RateBookDetailsScreen.pcf: line 433, column 52
    function sortValue_182 (rateRoutine :  entity.CalcRoutineDefinition) : java.lang.Object {
      return rateRoutine.Description
    }
    
    // 'value' attribute on RowIterator (id=IncludedRateTablesList) at RateBookDetailsScreen.pcf: line 362, column 46
    function value_175 () : entity.RateTable[] {
      return rateBook != null ? rateBook.SelectedRateTables.orderBy(\ rt -> rt.Definition.TableName).toTypedArray() : new RateTable[] {}
    }
    
    // 'value' attribute on RowIterator (id=IncludedRateRoutinesList) at RateBookDetailsScreen.pcf: line 407, column 58
    function value_200 () : entity.CalcRoutineDefinition[] {
      return rateBook != null ? rateBook.updatedCalcRoutines.orderBy(\ c -> c.Name).toTypedArray() : gw.api.upgrade.Coercions.makeArray<entity.CalcRoutineDefinition>(java.util.Collections.EMPTY_LIST)
    }
    
    // 'visible' attribute on ToolbarButton (id=ApproveButton) at RateBookDetailsScreen.pcf: line 51, column 98
    function visible_10 () : java.lang.Boolean {
      return (rateBook.isStage()) and (not rateBook.Empty) and perm.System.ratebookapprove
    }
    
    // 'visible' attribute on ToolbarButton (id=ReturnToDraftButton) at RateBookDetailsScreen.pcf: line 56, column 95
    function visible_12 () : java.lang.Boolean {
      return (rateBook.isStage() or rateBook.isApproved()) and perm.System.ratebookedit
    }
    
    // 'visible' attribute on ToolbarButton (id=MoveToProductionButton) at RateBookDetailsScreen.pcf: line 62, column 99
    function visible_14 () : java.lang.Boolean {
      return rateBook.isApproved() and (not rateBook.Empty) and perm.System.ratebookapprove
    }
    
    // 'visible' attribute on ToolbarButton (id=VersionRateBookButton) at RateBookDetailsScreen.pcf: line 68, column 94
    function visible_16 () : java.lang.Boolean {
      return rateBook.isActive() and (not rateBook.Empty) and perm.System.ratebookedit
    }
    
    // 'visible' attribute on AlertBar (id=ImportSuccessfulMessage) at RateBookDetailsScreen.pcf: line 74, column 39
    function visible_19 () : java.lang.Boolean {
      return displayImportResults
    }
    
    // 'visible' attribute on AlertBar (id=RateBookWarningsMessage) at RateBookDetailsScreen.pcf: line 79, column 65
    function visible_20 () : java.lang.Boolean {
      return displayImportResults and warnings.Count > 0
    }
    
    // 'visible' attribute on ToolbarButton (id=EditButton) at RateBookDetailsScreen.pcf: line 35, column 68
    function visible_3 () : java.lang.Boolean {
      return rateBook.isDraft() and perm.System.ratebookedit
    }
    
    // 'visible' attribute on ToolbarButton (id=SubmitForApprovalButton) at RateBookDetailsScreen.pcf: line 46, column 93
    function visible_8 () : java.lang.Boolean {
      return rateBook.isDraft() and (not rateBook.Empty) and perm.System.ratebookedit
    }
    
    property get currentCard () : gw.rating.rtm.util.RatingUIUtil.RateBookCardTabType {
      return getVariableValue("currentCard", 0) as gw.rating.rtm.util.RatingUIUtil.RateBookCardTabType
    }
    
    property set currentCard ($arg :  gw.rating.rtm.util.RatingUIUtil.RateBookCardTabType) {
      setVariableValue("currentCard", 0, $arg)
    }
    
    property get displayImportResults () : boolean {
      return getRequireValue("displayImportResults", 0) as java.lang.Boolean
    }
    
    property set displayImportResults ($arg :  boolean) {
      setRequireValue("displayImportResults", 0, $arg)
    }
    
    property get rateBook () : RateBook {
      return getRequireValue("rateBook", 0) as RateBook
    }
    
    property set rateBook ($arg :  RateBook) {
      setRequireValue("rateBook", 0, $arg)
    }
    
    property get rateBookDetailsScreenUIHelper () : gw.pcf.rating.ratebook.RateBookDetailsScreenUIHelper {
      return getVariableValue("rateBookDetailsScreenUIHelper", 0) as gw.pcf.rating.ratebook.RateBookDetailsScreenUIHelper
    }
    
    property set rateBookDetailsScreenUIHelper ($arg :  gw.pcf.rating.ratebook.RateBookDetailsScreenUIHelper) {
      setVariableValue("rateBookDetailsScreenUIHelper", 0, $arg)
    }
    
    property get rateBookUIValidator () : gw.rating.rtm.RateBookUIValidator {
      return getVariableValue("rateBookUIValidator", 0) as gw.rating.rtm.RateBookUIValidator
    }
    
    property set rateBookUIValidator ($arg :  gw.rating.rtm.RateBookUIValidator) {
      setVariableValue("rateBookUIValidator", 0, $arg)
    }
    
    property get warnings () : List<String> {
      return getRequireValue("warnings", 0) as List<String>
    }
    
    property set warnings ($arg :  List<String>) {
      setRequireValue("warnings", 0, $arg)
    }
    
    
  }
  
  
}