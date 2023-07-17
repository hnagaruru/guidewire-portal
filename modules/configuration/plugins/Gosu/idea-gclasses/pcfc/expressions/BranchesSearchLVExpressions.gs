package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/search/BranchesSearchLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class BranchesSearchLVExpressions {
  @javax.annotation.Generated("config/web/pcf/search/BranchesSearchLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class BranchesSearchLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at BranchesSearchLV.pcf: line 21, column 32
    function sortValue_0 (branch :  entity.Group) : java.lang.Object {
      return branch.Name
    }
    
    // 'value' attribute on TextCell (id=BranchCode_Cell) at BranchesSearchLV.pcf: line 25, column 38
    function sortValue_1 (branch :  entity.Group) : java.lang.Object {
      return branch.BranchCode
    }
    
    // 'value' attribute on RowIterator at BranchesSearchLV.pcf: line 16, column 72
    function value_9 () : gw.api.database.IQueryBeanResult<entity.Group> {
      return branches
    }
    
    property get branches () : gw.api.database.IQueryBeanResult<Group> {
      return getRequireValue("branches", 0) as gw.api.database.IQueryBeanResult<Group>
    }
    
    property set branches ($arg :  gw.api.database.IQueryBeanResult<Group>) {
      setRequireValue("branches", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/search/BranchesSearchLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends BranchesSearchLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'pickValue' attribute on RowIterator at BranchesSearchLV.pcf: line 16, column 72
    function pickValue_8 () : Group {
      return branch
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at BranchesSearchLV.pcf: line 21, column 32
    function valueRoot_3 () : java.lang.Object {
      return branch
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at BranchesSearchLV.pcf: line 21, column 32
    function value_2 () : java.lang.String {
      return branch.Name
    }
    
    // 'value' attribute on TextCell (id=BranchCode_Cell) at BranchesSearchLV.pcf: line 25, column 38
    function value_5 () : java.lang.String {
      return branch.BranchCode
    }
    
    property get branch () : entity.Group {
      return getIteratedValue(1) as entity.Group
    }
    
    
  }
  
  
}