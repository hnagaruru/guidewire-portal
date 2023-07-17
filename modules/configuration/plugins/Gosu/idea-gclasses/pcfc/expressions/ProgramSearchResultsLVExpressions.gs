package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/reinsurance/ProgramSearchResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ProgramSearchResultsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/reinsurance/ProgramSearchResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ProgramSearchResultsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Name_Cell) at ProgramSearchResultsLV.pcf: line 23, column 33
    function action_6 () : void {
      EditProgramPage.go(program)
    }
    
    // 'action' attribute on TextCell (id=Name_Cell) at ProgramSearchResultsLV.pcf: line 23, column 33
    function action_dest_7 () : pcf.api.Destination {
      return pcf.EditProgramPage.createDestination(program)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ProgramSearchResultsLV.pcf: line 23, column 33
    function valueRoot_9 () : java.lang.Object {
      return program
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at ProgramSearchResultsLV.pcf: line 28, column 25
    function value_11 () : java.util.Date {
      return program.EffectiveDate
    }
    
    // 'value' attribute on DateCell (id=ExpirationDate_Cell) at ProgramSearchResultsLV.pcf: line 33, column 25
    function value_14 () : java.util.Date {
      return program.ExpirationDate
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at ProgramSearchResultsLV.pcf: line 39, column 25
    function value_17 () : typekey.ContractStatus {
      return program.Status
    }
    
    // 'value' attribute on TypeKeyCell (id=Currency_Cell) at ProgramSearchResultsLV.pcf: line 46, column 25
    function value_20 () : typekey.Currency {
      return program.Currency
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ProgramSearchResultsLV.pcf: line 23, column 33
    function value_8 () : java.lang.String {
      return program.Name
    }
    
    // 'visible' attribute on TypeKeyCell (id=Currency_Cell) at ProgramSearchResultsLV.pcf: line 46, column 25
    function visible_22 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.isMultiCurrencyMode()
    }
    
    property get program () : entity.RIProgram {
      return getIteratedValue(1) as entity.RIProgram
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/reinsurance/ProgramSearchResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ProgramSearchResultsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ProgramSearchResultsLV.pcf: line 23, column 33
    function sortValue_0 (program :  entity.RIProgram) : java.lang.Object {
      return program.Name
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at ProgramSearchResultsLV.pcf: line 28, column 25
    function sortValue_1 (program :  entity.RIProgram) : java.lang.Object {
      return program.EffectiveDate
    }
    
    // 'value' attribute on DateCell (id=ExpirationDate_Cell) at ProgramSearchResultsLV.pcf: line 33, column 25
    function sortValue_2 (program :  entity.RIProgram) : java.lang.Object {
      return program.ExpirationDate
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at ProgramSearchResultsLV.pcf: line 39, column 25
    function sortValue_3 (program :  entity.RIProgram) : java.lang.Object {
      return program.Status
    }
    
    // 'value' attribute on TypeKeyCell (id=Currency_Cell) at ProgramSearchResultsLV.pcf: line 46, column 25
    function sortValue_4 (program :  entity.RIProgram) : java.lang.Object {
      return program.Currency
    }
    
    // 'value' attribute on RowIterator at ProgramSearchResultsLV.pcf: line 16, column 76
    function value_24 () : gw.api.database.IQueryBeanResult<entity.RIProgram> {
      return programs
    }
    
    // 'visible' attribute on TypeKeyCell (id=Currency_Cell) at ProgramSearchResultsLV.pcf: line 46, column 25
    function visible_5 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.isMultiCurrencyMode()
    }
    
    property get programs () : gw.api.database.IQueryBeanResult<RIProgram> {
      return getRequireValue("programs", 0) as gw.api.database.IQueryBeanResult<RIProgram>
    }
    
    property set programs ($arg :  gw.api.database.IQueryBeanResult<RIProgram>) {
      setRequireValue("programs", 0, $arg)
    }
    
    
  }
  
  
}